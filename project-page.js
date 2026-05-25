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

function setProjectImageAttributes(image, imagePath, root, options = {}) {
  if (window.setPortfolioImageAttributes) {
    window.setPortfolioImageAttributes(image, imagePath, {
      root,
      ...options
    });
    return;
  }

  image.src = resolveProjectPath(imagePath, root);
  image.alt = options.alt || "";
  image.loading = options.loading || "lazy";
  image.decoding = "async";
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

function getTimelineOrder(event) {
  const order = Number(event.order);
  return Number.isFinite(order) ? order : 0;
}

function getTimelineIconPath(event) {
  if (event.icon === undefined || event.icon === null || event.icon === "") {
    return "";
  }

  const iconLibrary = window.projectTimelineIcons || {};
  const iconKey = String(event.icon);
  return iconLibrary[iconKey] || event.icon;
}

function getTimelineImages(event, root) {
  const configuredImages = Array.isArray(event.images)
    ? event.images
    : event.image
      ? [{ src: event.image, alt: event.imageAlt }]
      : [];

  return configuredImages
    .map((image) => {
      const src = typeof image === "string" ? image : image.src || image.image || "";
      const source = src.replace(/\\/g, "/");
      const alt = typeof image === "string" ? `${event.title} timeline image` : image.alt || image.imageAlt || `${event.title} timeline image`;
      return source ? { src: resolveProjectPath(source, root), source, root, alt } : null;
    })
    .filter(Boolean)
    .slice(0, 4);
}

let activeTimelineLightboxImages = [];
let activeTimelineLightboxIndex = 0;

function closeTimelineLightbox() {
  const lightbox = document.querySelector("[data-timeline-lightbox]");
  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("project-lightbox--open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("project-lightbox-open");
}

function showTimelineLightboxImage(index) {
  if (!activeTimelineLightboxImages.length) {
    return;
  }

  activeTimelineLightboxIndex = (index + activeTimelineLightboxImages.length) % activeTimelineLightboxImages.length;
  const imageData = activeTimelineLightboxImages[activeTimelineLightboxIndex];
  const lightbox = document.querySelector("[data-timeline-lightbox]");
  const image = lightbox?.querySelector("[data-lightbox-image]");
  const caption = lightbox?.querySelector("[data-lightbox-caption]");
  const thumbs = lightbox?.querySelector("[data-lightbox-thumbs]");

  if (!lightbox || !image || !caption || !thumbs) {
    return;
  }

  setProjectImageAttributes(image, imageData.source || imageData.src, imageData.root || "", {
    alt: imageData.alt,
    role: "lightbox",
    sizes: "(max-width: 900px) 92vw, 1400px",
    loading: "eager"
  });
  caption.textContent = imageData.alt;
  thumbs.replaceChildren(
    ...activeTimelineLightboxImages.map((item, itemIndex) => {
      const thumbButton = document.createElement("button");
      thumbButton.type = "button";
      thumbButton.className = itemIndex === activeTimelineLightboxIndex
        ? "project-lightbox-thumb project-lightbox-thumb--active"
        : "project-lightbox-thumb";
      thumbButton.setAttribute("aria-label", `Show image ${itemIndex + 1}`);
      thumbButton.addEventListener("click", () => showTimelineLightboxImage(itemIndex));

      const thumbImage = document.createElement("img");
      setProjectImageAttributes(thumbImage, item.source || item.src, item.root || "", {
        alt: "",
        role: "thumb",
        sizes: "88px"
      });
      thumbButton.appendChild(thumbImage);
      return thumbButton;
    })
  );
}

function ensureTimelineLightbox() {
  const existingLightbox = document.querySelector("[data-timeline-lightbox]");
  if (existingLightbox) {
    return existingLightbox;
  }

  const lightbox = document.createElement("div");
  lightbox.className = "project-lightbox";
  lightbox.setAttribute("data-timeline-lightbox", "");
  lightbox.setAttribute("aria-hidden", "true");

  const dialog = document.createElement("div");
  dialog.className = "project-lightbox-dialog";
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-label", "Timeline image preview");

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "project-lightbox-close";
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", closeTimelineLightbox);

  const imageFrame = document.createElement("figure");
  imageFrame.className = "project-lightbox-frame";

  const image = document.createElement("img");
  image.setAttribute("data-lightbox-image", "");
  image.alt = "";
  imageFrame.appendChild(image);

  const caption = document.createElement("figcaption");
  caption.className = "project-lightbox-caption";
  caption.setAttribute("data-lightbox-caption", "");
  imageFrame.appendChild(caption);

  const controls = document.createElement("div");
  controls.className = "project-lightbox-controls";

  const previousButton = document.createElement("button");
  previousButton.type = "button";
  previousButton.textContent = "Previous";
  previousButton.addEventListener("click", () => showTimelineLightboxImage(activeTimelineLightboxIndex - 1));

  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.textContent = "Next";
  nextButton.addEventListener("click", () => showTimelineLightboxImage(activeTimelineLightboxIndex + 1));

  controls.appendChild(previousButton);
  controls.appendChild(nextButton);

  const thumbs = document.createElement("div");
  thumbs.className = "project-lightbox-thumbs";
  thumbs.setAttribute("data-lightbox-thumbs", "");

  dialog.appendChild(closeButton);
  dialog.appendChild(imageFrame);
  dialog.appendChild(controls);
  dialog.appendChild(thumbs);
  lightbox.appendChild(dialog);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeTimelineLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("project-lightbox--open")) {
      return;
    }

    if (event.key === "Escape") {
      closeTimelineLightbox();
    }

    if (event.key === "ArrowLeft") {
      showTimelineLightboxImage(activeTimelineLightboxIndex - 1);
    }

    if (event.key === "ArrowRight") {
      showTimelineLightboxImage(activeTimelineLightboxIndex + 1);
    }
  });

  document.body.appendChild(lightbox);
  return lightbox;
}

function openTimelineLightbox(images, index) {
  activeTimelineLightboxImages = images;
  activeTimelineLightboxIndex = index;

  const lightbox = ensureTimelineLightbox();
  showTimelineLightboxImage(index);
  lightbox.classList.toggle("project-lightbox--single", images.length === 1);
  lightbox.classList.add("project-lightbox--open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("project-lightbox-open");
}

function createTimelineGallery(event, root) {
  const images = getTimelineImages(event, root);
  if (!images.length) {
    return null;
  }

  const figure = document.createElement("figure");
  figure.className = `project-timeline-gallery project-timeline-gallery--count-${images.length}`;

  images.forEach((imageData, index) => {
    const preview = document.createElement("button");
    preview.type = "button";
    preview.className = "project-timeline-gallery-item";
    preview.setAttribute("aria-label", `Open timeline image ${index + 1}`);
    preview.addEventListener("click", () => openTimelineLightbox(images, index));

    const image = document.createElement("img");
    setProjectImageAttributes(image, imageData.source || imageData.src, imageData.root || "", {
      alt: imageData.alt,
      role: "preview",
      sizes: "(max-width: 900px) 92vw, 620px"
    });
    image.onerror = () => {
      if (window.fallbackPortfolioImageToOriginal?.(image)) {
        return;
      }
      preview.remove();
      if (!figure.querySelector(".project-timeline-gallery-item")) {
        figure.remove();
      }
    };

    preview.appendChild(image);
    figure.appendChild(preview);
  });

  return figure;
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
    setProjectImageAttributes(image, imagePath, root, {
      alt: project.imageAlt || `${project.title} project media`,
      role: "detail",
      sizes: "(max-width: 900px) 92vw, 760px"
    });
    image.onerror = () => {
      if (window.fallbackPortfolioImageToOriginal?.(image)) {
        return;
      }
      showPlaceholder();
    };
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
    .sort((first, second) => getTimelineOrder(first) - getTimelineOrder(second));

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

    const timelineGallery = createTimelineGallery(event, root);
    if (timelineGallery) {
      content.appendChild(timelineGallery);
    }

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
