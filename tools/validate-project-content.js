const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const context = vm.createContext({ window: {} });

["projects-data.js", "project-timeline-data.js", "image-variants.js"].forEach((file) => {
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), "utf8"), context, { filename: file });
});

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function textContent(value) {
  return decodeHtml(value.replace(/<[^>]+>/g, "").trim());
}

const errors = [];
const projects = context.window.portfolioProjects || [];
const timelines = context.window.projectTimelineEvents || {};

projects.forEach((project) => {
  const filePath = path.join(ROOT, project.url);
  if (!fs.existsSync(filePath)) {
    errors.push(`${project.id}: missing ${project.url}`);
    return;
  }

  const html = fs.readFileSync(filePath, "utf8");
  const body = html.match(/<body[^>]*data-project-id="([^"]+)"[^>]*data-project-style="([^"]+)"/i);
  if (!body || body[1] !== project.id || Number(body[2]) !== (Number(project.pageStyle) || 0)) {
    errors.push(`${project.id}: body project id or page style does not match projects-data.js`);
  }

  const fields = {
    tag: project.tag,
    title: project.title,
    description: project.description,
    story: project.story,
    role: project.role,
    tools: Array.isArray(project.tools) ? project.tools.join(", ") : project.tools,
    timeline: project.timeline,
    outcome: project.outcome
  };

  Object.entries(fields).forEach(([field, expected]) => {
    const pattern = new RegExp(`<[^>]+data-project-field="${field}"[^>]*>([\\s\\S]*?)<\\/[^>]+>`, "i");
    const match = html.match(pattern);
    if (!match || textContent(match[1]) !== String(expected ?? "")) {
      errors.push(`${project.id}: ${field} preload does not match projects-data.js`);
    }
  });

  const preloadImage = html.match(/data-project-media>[\s\S]*?<img[^>]+src="\.\.\/\.\.\/([^"]+)"/i);
  if (preloadImage && !fs.existsSync(path.join(ROOT, preloadImage[1]))) {
    errors.push(`${project.id}: missing preloaded image ${preloadImage[1]}`);
  }

  if (Number(project.pageStyle) === 1) {
    const timelineMarkup = html.match(/<ol class="project-timeline"[\s\S]*?<\/ol>/i)?.[0] || "";
    const actualTitles = [...timelineMarkup.matchAll(/<h3>([\s\S]*?)<\/h3>/gi)]
      .map((match) => textContent(match[1]));
    const expectedTitles = [...(timelines[project.id] || [])]
      .filter((event) => event.featured !== false)
      .sort((first, second) => Number(first.order) - Number(second.order))
      .map((event) => event.title);
    if (JSON.stringify(actualTitles) !== JSON.stringify(expectedTitles)) {
      errors.push(`${project.id}: preloaded timeline does not match timeline data order`);
    }
  }
});

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${projects.length} project pages.`);
  console.log("Preloaded fields, metadata, media paths, and timeline order match the data files.");
}
