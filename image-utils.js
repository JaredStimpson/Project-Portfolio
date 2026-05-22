(function () {
  function normalizePortfolioImagePath(path) {
    if (!path) {
      return "";
    }

    return path.replace(/\\/g, "/").replace(/^\.\//, "");
  }

  function resolvePortfolioImagePath(path, root) {
    const normalizedPath = normalizePortfolioImagePath(path);

    if (!normalizedPath || /^(https?:|mailto:|#|\/)/.test(normalizedPath)) {
      return normalizedPath;
    }

    return `${root || ""}${normalizedPath}`;
  }

  function getVariantSet(path) {
    const normalizedPath = normalizePortfolioImagePath(path);
    const manifest = window.portfolioImageVariants || {};
    return manifest[normalizedPath] || null;
  }

  function getVariantOrder(role) {
    if (role === "lightbox" || role === "detail") {
      return ["medium", "large"];
    }

    if (role === "thumb") {
      return ["small"];
    }

    return ["small", "medium"];
  }

  function buildSrcset(variantSet, role, root) {
    if (!variantSet) {
      return "";
    }

    return getVariantOrder(role)
      .map((label) => variantSet.variants?.[label])
      .filter(Boolean)
      .map((variant) => `${resolvePortfolioImagePath(variant.src, root)} ${variant.width}w`)
      .join(", ");
  }

  function chooseSrc(variantSet, role, root, fallbackPath) {
    if (!variantSet) {
      return resolvePortfolioImagePath(fallbackPath, root);
    }

    const variants = getVariantOrder(role)
      .map((label) => variantSet.variants?.[label])
      .filter(Boolean);
    const chosen = variants[variants.length - 1];
    return resolvePortfolioImagePath(chosen?.src || fallbackPath, root);
  }

  window.setPortfolioImageAttributes = function setPortfolioImageAttributes(image, path, options = {}) {
    const root = options.root || "";
    const role = options.role || "preview";
    const normalizedPath = normalizePortfolioImagePath(path);
    const variantSet = getVariantSet(normalizedPath);
    const originalSrc = resolvePortfolioImagePath(normalizedPath, root);
    const srcset = buildSrcset(variantSet, role, root);

    image.src = chooseSrc(variantSet, role, root, normalizedPath);
    image.dataset.originalSrc = originalSrc;

    if (srcset) {
      image.srcset = srcset;
      image.sizes = options.sizes || "100vw";
    } else {
      image.removeAttribute("srcset");
      image.removeAttribute("sizes");
    }

    if (options.alt !== undefined) {
      image.alt = options.alt;
    }

    const selectedVariant = variantSet?.variants?.[getVariantOrder(role).slice(-1)[0]];
    if (selectedVariant) {
      image.width = selectedVariant.width;
      image.height = selectedVariant.height;
    }

    image.loading = options.loading || "lazy";
    image.decoding = "async";
  };

  window.fallbackPortfolioImageToOriginal = function fallbackPortfolioImageToOriginal(image) {
    if (!image.dataset.originalSrc || image.dataset.triedOriginal === "true") {
      return false;
    }

    image.dataset.triedOriginal = "true";
    image.removeAttribute("srcset");
    image.removeAttribute("sizes");
    image.src = image.dataset.originalSrc;
    return true;
  };
})();
