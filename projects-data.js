// Project data for the homepage cards and project detail pages.
//
// This file is JavaScript instead of strict JSON because normal JSON does not
// allow comments. Keep the shape below, edit the text values, and the homepage
// plus each project page will rebuild automatically.
//
// How to reorder projects:
// Change the `order` number. Lower numbers show first. For example, Project 04
// is order 2 below, so it appears second.
//
// How to add a new project:
// 1. Copy one full project object, including the opening `{` and closing `}`.
// 2. Paste it before the final `];`.
// 3. Change `id`, `order`, `title`, `url`, and the other text fields.
// 4. Create the matching project folder/page, such as:
//    projects/project-name-06/index.html
// 5. If you have no image yet, leave `image` as an empty string.
// 6. In that new page's <body>, set data-project-id to the same `id`.
//
// How to temporarily hide a project:
// Set `featured` to false. The page will skip it.
//
// Field notes:
// - `description` is used on the homepage card and project page hero.
// - `story` is used in the main body of the project page.
// - `image` is used for both the card and detail page unless `detailImage`
//   has its own value.
// - `pageStyle` controls the project page version:
//   0 or omitted = default overview page
//   1 = vertical timeline page
//   2, 3, 4... = reserved for future page styles
//
// If you set pageStyle to 1, use a timeline-style index.html page and add that
// project's timeline events in project-timeline-data.js.

window.portfolioProjects = [
  {
    id: "project-name-01",
    order: 1,
    featured: true,
    title: "[Project Name 01]",
    tag: "[Course / Lab / Team]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat magna at sapien facilisis, sed pulvinar erat consequat.",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this section with a clear explanation of the engineering challenge, design decisions, testing process, and final outcome.",
    role: "[Your Role]",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    timeline: "[Quarter / Year]",
    outcome: "[Result / Metric / Deliverable]",
    image: "projects/project-name-01/media/bottleOpenerFixture.JPG",
    detailImage: "",
    imageAlt: "[Project Name 01] preview",
    placeholder: "[Project Image]",
    mediaPlaceholder: "[Add project media here]",
    url: "projects/project-name-01/index.html"
  },
  {
    id: "project-name-02",
    order: 2,
    featured: true,
    title: "[Project Name 02]",
    tag: "[Course / Lab / Team]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this with a short project summary.",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this section with a clear explanation of the engineering challenge, design decisions, testing process, and final outcome.",
    role: "[Your Role]",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    timeline: "[Quarter / Year]",
    outcome: "[Result / Metric / Deliverable]",
    pageStyle: 1,
    image: "",
    detailImage: "",
    imageAlt: "",
    placeholder: "[Project Image]",
    mediaPlaceholder: "[Add project media here]",
    url: "projects/project-name-02/index.html"
  },
  {
    id: "project-name-03",
    order: 3,
    featured: true,
    title: "[Project Name 03]",
    tag: "[Internship / Research / Competition]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus sapien vitae sem pretium, nec tincidunt eros suscipit.",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this section with a clear explanation of the engineering challenge, design decisions, testing process, and final outcome.",
    role: "[Your Role]",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    timeline: "[Quarter / Year]",
    outcome: "[Result / Metric / Deliverable]",
    pageStyle: 1,
    image: "",
    detailImage: "",
    imageAlt: "",
    placeholder: "[Project Image]",
    mediaPlaceholder: "[Add project media here]",
    url: "projects/project-name-03/index.html"
  },
  {
    id: "project-name-04",
    order: 4,
    featured: true,
    title: "[Project Name 04]",
    tag: "[Capstone / Personal Build]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ligula vel ipsum bibendum tincidunt non at erat.",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this section with a clear explanation of the engineering challenge, design decisions, testing process, and final outcome.",
    role: "[Your Role]",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    timeline: "[Quarter / Year]",
    outcome: "[Result / Metric / Deliverable]",
    image: "",
    detailImage: "",
    imageAlt: "",
    placeholder: "[Project Image]",
    mediaPlaceholder: "[Add project media here]",
    url: "projects/project-name-04/index.html"
  },
  {
    id: "project-name-05",
    order: 5,
    featured: true,
    title: "[Project Name 05]",
    tag: "[Capstone / Personal Build]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this with a short project summary.",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this section with a clear explanation of the engineering challenge, design decisions, testing process, and final outcome.",
    role: "[Your Role]",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    timeline: "[Quarter / Year]",
    outcome: "[Result / Metric / Deliverable]",
    image: "",
    detailImage: "",
    imageAlt: "",
    placeholder: "[Project Image]",
    mediaPlaceholder: "[Add project media here]",
    url: "projects/project-name-05/index.html"
  },
  {
    id: "project-name-06",
    order: 6,
    featured: true,
    title: "[Project Name 06]",
    tag: "[Capstone / Personal Build]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this with a short project summary.",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this section with a clear explanation of the engineering challenge, design decisions, testing process, and final outcome.",
    role: "[Your Role]",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    timeline: "[Quarter / Year]",
    outcome: "[Result / Metric / Deliverable]",
    image: "",
    detailImage: "",
    imageAlt: "",
    placeholder: "[Project Image]",
    mediaPlaceholder: "[Add project media here]",
    url: "projects/project-name-06/index.html"
  },
  {
    id: "project-name-07",
    order: 7,
    featured: true,
    title: "[Project Name 07]",
    tag: "[Capstone / Personal Build]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this with a short project summary.",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this section with a clear explanation of the engineering challenge, design decisions, testing process, and final outcome.",
    role: "[Your Role]",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    timeline: "[Quarter / Year]",
    outcome: "[Result / Metric / Deliverable]",
    image: "",
    detailImage: "",
    imageAlt: "",
    placeholder: "[Project Image]",
    mediaPlaceholder: "[Add project media here]",
    url: "projects/project-name-07/index.html"
  }
];
