/*
 * Keep project HTML fallbacks synchronized with the data-driven page content.
 *
 * The project pages show this HTML before project-page.js finishes loading.
 * Run this script after changing project text, project order, or timeline data
 * so visitors never see outdated template copy during the initial paint.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const PROJECTS_DATA_PATH = path.join(ROOT, "projects-data.js");
const TIMELINE_DATA_PATH = path.join(ROOT, "project-timeline-data.js");
const IMAGE_VARIANTS_PATH = path.join(ROOT, "image-variants.js");
const LOGO_TEXT = "IME | Manufacturing Engineering Undergraduate";
const FOOTER_TEXT = "&copy; 2026 Jared Stimpson. Engineering Project Portfolio.";

function readData() {
  const context = vm.createContext({ window: {} });
  [PROJECTS_DATA_PATH, TIMELINE_DATA_PATH, IMAGE_VARIANTS_PATH].forEach((file) => {
    vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
  });

  return {
    projects: context.window.portfolioProjects || [],
    timelines: context.window.projectTimelineEvents || {},
    icons: context.window.projectTimelineIcons || {},
    variants: context.window.portfolioImageVariants || {}
  };
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function replaceProjectField(html, field, value) {
  const pattern = new RegExp(
    `(<(?<tag>[a-z0-9]+)[^>]*data-project-field="${field}"[^>]*>)[\\s\\S]*?(</\\k<tag>>)`,
    "i"
  );
  return html.replace(pattern, `$1${escapeHtml(value)}$3`);
}

function getInitialImage(project, variants) {
  const source = project.detailImage || project.image;
  if (!source) {
    return null;
  }

  const entry = variants[source];
  const optimized = entry?.variants?.large || entry?.variants?.medium;
  return optimized?.src || source;
}

function renderInitialMedia(project, variants) {
  const timelineClass = Number(project.pageStyle) === 1
    ? " project-media-frame--timeline"
    : "";
  const image = getInitialImage(project, variants);

  if (!image) {
    return `<div class="project-media-frame${timelineClass} project-media-frame--empty" data-project-media>\n          <span>${escapeHtml(project.mediaPlaceholder || "Project media coming soon")}</span>\n        </div>`;
  }

  return `<div class="project-media-frame${timelineClass}" data-project-media>\n          <img src="../../${escapeHtml(image)}" alt="${escapeHtml(project.imageAlt || `${project.title} project media`)}" decoding="async" />\n        </div>`;
}

function getIconPath(event, icons) {
  if (event.icon === undefined || event.icon === null || event.icon === "") {
    return "";
  }
  return icons[String(event.icon)] || event.icon;
}

function renderTimelineEvent(event, icons) {
  const iconPath = getIconPath(event, icons);
  const icon = iconPath
    ? `\n            <img src="../../${escapeHtml(iconPath)}" alt="" loading="lazy" decoding="async" />`
    : "";
  const details = Array.isArray(event.details) && event.details.length
    ? `\n          <ul class="project-timeline-details">\n${event.details.map((detail) => `            <li>${escapeHtml(detail)}</li>`).join("\n")}\n          </ul>`
    : "";

  return `        <li class="project-timeline-item">\n          <span class="project-timeline-marker" aria-hidden="true">${icon}\n          </span>\n          <div class="project-timeline-content">\n            <p class="project-timeline-date">${escapeHtml(event.date)}</p>\n            <h3>${escapeHtml(event.title)}</h3>\n            <p class="project-timeline-summary">${escapeHtml(event.summary)}</p>${details}\n          </div>\n        </li>`;
}

function renderInitialTimeline(project, timelines, icons) {
  const events = [...(timelines[project.id] || [])]
    .filter((event) => event.featured !== false)
    .sort((first, second) => Number(first.order) - Number(second.order));

  if (!events.length) {
    return "        <li class=\"project-timeline-empty\">Timeline details coming soon.</li>";
  }

  return events.map((event) => renderTimelineEvent(event, icons)).join("\n");
}

function syncProjectPage(project, timelines, icons, variants) {
  const pagePath = path.join(ROOT, project.url);
  let html = fs.readFileSync(pagePath, "utf8");

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(project.title)} | Jared Stimpson</title>`);
  html = html.replace(
    /(<body\b[^>]*\bdata-project-id=")[^"]*("[^>]*>)/i,
    `$1${escapeHtml(project.id)}$2`
  );
  html = html.replace(
    /(<body\b[^>]*\bdata-project-style=")[^"]*("[^>]*>)/i,
    `$1${Number(project.pageStyle) || 0}$2`
  );
  html = html.replace(/(<span class="logo-text">)[\s\S]*?(<\/span>)/i, `$1${LOGO_TEXT}$2`);
  html = html.replace(/(<footer class="site-footer">[\s\S]*?<p>)[\s\S]*?(<\/p>)/i, `$1${FOOTER_TEXT}$2`);

  html = replaceProjectField(html, "tag", project.tag);
  html = replaceProjectField(html, "title", project.title);
  html = replaceProjectField(html, "description", project.description);
  html = replaceProjectField(html, "story", project.story);
  html = replaceProjectField(html, "role", project.role);
  html = replaceProjectField(
    html,
    "tools",
    Array.isArray(project.tools) ? project.tools.join(", ") : project.tools
  );
  html = replaceProjectField(html, "timeline", project.timeline);
  html = replaceProjectField(html, "outcome", project.outcome);

  html = html.replace(
    /<div class="project-media-frame[^>]*data-project-media>[\s\S]*?<\/div>/i,
    renderInitialMedia(project, variants)
  );

  if (Number(project.pageStyle) === 1) {
    html = html.replace(
      /(<ol class="project-timeline" data-project-timeline>)[\s\S]*?(<\/ol>)/i,
      `$1\n${renderInitialTimeline(project, timelines, icons)}\n      $2`
    );
  }

  fs.writeFileSync(pagePath, html, "utf8");
}

function splitTopLevelEntries(body) {
  const entries = [];
  let start = 0;
  let braces = 0;
  let brackets = 0;
  let parentheses = 0;
  let quote = "";
  let escaped = false;

  for (let index = 0; index < body.length; index += 1) {
    const character = body[index];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (character === "\\") {
        escaped = true;
      } else if (character === quote) {
        quote = "";
      }
      continue;
    }

    if (character === '"' || character === "'" || character === "`") {
      quote = character;
    } else if (character === "{") {
      braces += 1;
    } else if (character === "}") {
      braces -= 1;
    } else if (character === "[") {
      brackets += 1;
    } else if (character === "]") {
      brackets -= 1;
    } else if (character === "(") {
      parentheses += 1;
    } else if (character === ")") {
      parentheses -= 1;
    } else if (
      character === "," &&
      braces === 0 &&
      brackets === 0 &&
      parentheses === 0
    ) {
      entries.push(body.slice(start, index).trim());
      start = index + 1;
    }
  }

  const finalEntry = body.slice(start).trim();
  if (finalEntry) {
    entries.push(finalEntry);
  }
  return entries;
}

function reorderContainer(filePath, marker, closing, getKey, orderByKey) {
  const source = fs.readFileSync(filePath, "utf8");
  const markerIndex = source.indexOf(marker);
  const bodyStart = markerIndex + marker.length;
  const bodyEnd = source.lastIndexOf(closing);
  if (markerIndex < 0 || bodyEnd < bodyStart) {
    throw new Error(`Could not locate data container in ${filePath}`);
  }

  const entries = splitTopLevelEntries(source.slice(bodyStart, bodyEnd));
  entries.sort((first, second) => {
    const firstOrder = orderByKey.get(getKey(first)) ?? Number.MAX_SAFE_INTEGER;
    const secondOrder = orderByKey.get(getKey(second)) ?? Number.MAX_SAFE_INTEGER;
    return firstOrder - secondOrder;
  });

  const body = `\n${entries.map((entry) => `  ${entry}`).join(",\n")}\n`;
  fs.writeFileSync(
    filePath,
    `${source.slice(0, bodyStart)}${body}${source.slice(bodyEnd)}`,
    "utf8"
  );
}

function reorderDataFiles(projects) {
  const orderById = new Map(projects.map((project) => [project.id, Number(project.order)]));
  reorderContainer(
    PROJECTS_DATA_PATH,
    "window.portfolioProjects = [",
    "];",
    (entry) => entry.match(/id:\s*"([^"]+)"/)?.[1],
    orderById
  );
  reorderContainer(
    TIMELINE_DATA_PATH,
    "window.projectTimelineEvents = {",
    "};",
    (entry) => entry.match(/^"([^"]+)"\s*:/)?.[1],
    orderById
  );
}

function syncSharedTemplateText() {
  ["templates/default-project/index.html", "templates/timeline-project/index.html"].forEach((relativePath) => {
    const filePath = path.join(ROOT, relativePath);
    let html = fs.readFileSync(filePath, "utf8");
    html = html.replace(/(<span class="logo-text">)[\s\S]*?(<\/span>)/i, `$1${LOGO_TEXT}$2`);
    html = html.replace(/(<footer class="site-footer">[\s\S]*?<p>)[\s\S]*?(<\/p>)/i, `$1${FOOTER_TEXT}$2`);
    fs.writeFileSync(filePath, html, "utf8");
  });
}

function main() {
  const { projects, timelines, icons, variants } = readData();
  const sortedProjects = [...projects].sort(
    (first, second) => Number(first.order) - Number(second.order)
  );

  sortedProjects.forEach((project) => {
    syncProjectPage(project, timelines, icons, variants);
  });
  syncSharedTemplateText();
  reorderDataFiles(sortedProjects);

  console.log(`Synchronized ${sortedProjects.length} project pages.`);
  console.log("Reordered projects-data.js and project-timeline-data.js.");
}

main();
