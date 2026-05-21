function resolveProjectPath(path, root) {
  if (!path) {
    return "";
  }

  const normalizedPath = path.replace(/\\/g, "/");

  if (/^(https?:|mailto:|#|\/)/.test(normalizedPath)) {
    return normalizedPath;
  }

  return `${root}${normalizedPath}`;
}

function setProjectText(field, value) {
  document.querySelectorAll(`[data-project-field="${field}"]`).forEach((element) => {
    element.textContent = value || "";
  });
}

function getProjectPageStyle(project) {
  const requestedStyle = Number(document.body.dataset.projectStyle ?? project.pageStyle ?? 0);
  const supportedStyles = [0, 1];

  if (supportedStyles.includes(requestedStyle)) {
    return requestedStyle;
  }

  console.warn(`Unsupported project page style ${requestedStyle}; using style 0.`);
  return 0;
}

function createTimelineTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  element.textContent = text || "";
  return element;
}

function getTimelineIconPath(event) {
  if (event.icon === undefined || event.icon === null || event.icon === "") {
    return "";
  }

  const iconLibrary = window.projectTimelineIcons || {};
  const iconKey = String(event.icon);
  return iconLibrary[iconKey] || event.icon;
}

function renderProjectMedia(project, root) {
  const mediaFrame = document.querySelector("[data-project-media]");
  if (!mediaFrame) {
    return;
  }

  const timelineMedia = mediaFrame.classList.contains("project-media-frame--timeline");
  const setMediaFrameState = (empty) => {
    mediaFrame.className = "project-media-frame";
    if (timelineMedia) {
      mediaFrame.classList.add("project-media-frame--timeline");
    }
    if (empty) {
      mediaFrame.classList.add("project-media-frame--empty");
    }
  };

  const showPlaceholder = () => {
    const placeholder = document.createElement("span");
    placeholder.textContent = project.mediaPlaceholder || "[Add project media here]";
    setMediaFrameState(true);
    mediaFrame.replaceChildren(placeholder);
  };

  const imagePath = project.detailImage || project.image;

  if (imagePath) {
    const image = document.createElement("img");
    image.src = resolveProjectPath(imagePath, root);
    image.alt = project.imageAlt || `${project.title} project media`;
    image.loading = "lazy";
    image.decoding = "async";
    image.onerror = showPlaceholder;
    setMediaFrameState(false);
    mediaFrame.replaceChildren(image);
    return;
  }

  showPlaceholder();
}

function renderProjectTimeline(project, root) {
  const timeline = document.querySelector("[data-project-timeline]");
  if (!timeline) {
    return;
  }

  const events = (window.projectTimelineEvents?.[project.id] || [])
    .filter((event) => event.featured !== false)
    .sort((first, second) => first.order - second.order);

  if (!events.length) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "project-timeline-empty";
    emptyItem.textContent = "Add timeline events for this project in project-timeline-data.js.";
    timeline.replaceChildren(emptyItem);
    return;
  }

  const timelineItems = events.map((event) => {
    const item = document.createElement("li");
    item.className = "project-timeline-item";

    const marker = document.createElement("span");
    marker.className = "project-timeline-marker";
    marker.setAttribute("aria-hidden", "true");

    const iconPath = getTimelineIconPath(event);
    if (iconPath) {
      const icon = document.createElement("img");
      icon.src = resolveProjectPath(iconPath, root);
      icon.alt = "";
      icon.loading = "lazy";
      icon.decoding = "async";
      icon.onerror = () => icon.remove();
      marker.appendChild(icon);
    }

    const content = document.createElement("div");
    content.className = "project-timeline-content";
    content.appendChild(createTimelineTextElement("p", "project-timeline-date", event.date));
    content.appendChild(createTimelineTextElement("h3", "", event.title));
    content.appendChild(createTimelineTextElement("p", "project-timeline-summary", event.summary));

    if (Array.isArray(event.details) && event.details.length) {
      const details = document.createElement("ul");
      details.className = "project-timeline-details";
      event.details.forEach((detail) => {
        details.appendChild(createTimelineTextElement("li", "", detail));
      });
      content.appendChild(details);
    }

    item.appendChild(marker);
    item.appendChild(content);
    return item;
  });

  timeline.replaceChildren(...timelineItems);
}

function renderProjectPage() {
  const projectId = document.body.dataset.projectId;
  const root = document.body.dataset.projectRoot || "";
  const projects = window.portfolioProjects || [];
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return;
  }

  document.title = `${project.title} | Jared Stimpson`;
  setProjectText("tag", project.tag);
  setProjectText("title", project.title);
  setProjectText("description", project.description);
  setProjectText("story", project.story);
  setProjectText("role", project.role);
  setProjectText("tools", Array.isArray(project.tools) ? project.tools.join(", ") : project.tools);
  setProjectText("timeline", project.timeline);
  setProjectText("outcome", project.outcome);
  const pageStyle = getProjectPageStyle(project);
  document.body.dataset.projectStyle = String(pageStyle);
  renderProjectMedia(project, root);
  if (pageStyle === 1) {
    renderProjectTimeline(project, root);
  }
}

renderProjectPage();
