function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  element.textContent = text;
  return element;
}

function createProjectCard(project) {
  const card = document.createElement("a");
  card.className = "project-card project-preview";
  card.href = project.url;
  card.setAttribute("aria-label", `Open ${project.title} project page`);

  const imageWrap = document.createElement("div");
  imageWrap.className = project.image
    ? "project-image project-image--photo"
    : "project-image project-image--placeholder";

  if (project.image) {
    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.imageAlt || `${project.title} preview`;
    imageWrap.appendChild(image);
  } else {
    imageWrap.appendChild(createTextElement("span", "", project.placeholder || "[Project Image]"));
  }

  const overlay = document.createElement("div");
  overlay.className = "project-preview-overlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.appendChild(createTextElement("strong", "project-preview-title", project.title));
  overlay.appendChild(createTextElement("span", "project-preview-cta", "View project"));
  imageWrap.appendChild(overlay);

  const content = document.createElement("div");
  content.className = "project-content";
  content.appendChild(createTextElement("p", "project-tag", project.tag));
  content.appendChild(createTextElement("h3", "", project.title));
  content.appendChild(createTextElement("p", "", project.description));

  const details = document.createElement("ul");
  details.className = "project-details";

  const tools = Array.isArray(project.tools) ? project.tools.join(", ") : project.tools;
  [
    ["Role", project.role],
    ["Tools", tools],
    ["Outcome", project.outcome]
  ].forEach(([label, value]) => {
    const item = document.createElement("li");
    const strong = createTextElement("strong", "", `${label}:`);
    item.appendChild(strong);
    item.append(` ${value}`);
    details.appendChild(item);
  });

  content.appendChild(details);
  card.appendChild(imageWrap);
  card.appendChild(content);

  return card;
}

function renderProjects() {
  const grid = document.querySelector("#project-grid");
  if (!grid || !window.portfolioProjects) {
    return;
  }

  const projects = window.portfolioProjects
    .filter((project) => project.featured !== false)
    .sort((first, second) => first.order - second.order);

  grid.replaceChildren(...projects.map(createProjectCard));
}

function createSkillCard(skill) {
  const card = document.createElement("div");
  card.className = "skill-card";
  card.appendChild(createTextElement("h3", "", skill.title));
  card.appendChild(createTextElement("p", "", skill.description));

  return card;
}

function renderSkills() {
  const grid = document.querySelector("#skills-grid");
  if (!grid || !window.portfolioSkills) {
    return;
  }

  const config = window.portfolioSkillsConfig || {};
  const skills = window.portfolioSkills
    .filter((skill) => skill.featured !== false)
    .sort((first, second) => first.order - second.order);

  const requestedColumns = Number(config.columns) || 3;
  const columns = Math.max(1, Math.min(requestedColumns, skills.length || 1));
  const maxCardWidth = Number(config.maxCardWidth) || 360;
  const gap = Number(config.gap) || 20;
  const maxGridWidth = columns * maxCardWidth + (columns - 1) * gap;
  const cardPercent = 100 / columns;
  const cardGapOffset = ((columns - 1) * gap) / columns;

  grid.style.setProperty("--skills-columns", columns);
  grid.style.setProperty("--skills-card-width", `calc(${cardPercent}% - ${cardGapOffset}px)`);
  grid.style.setProperty("--skills-grid-max-width", `${maxGridWidth}px`);
  grid.style.setProperty("--skills-gap", `${gap}px`);
  grid.replaceChildren(...skills.map(createSkillCard));
}

renderProjects();
renderSkills();
