// Skills data for the homepage Skills & Tools section.
//
// This file is JavaScript instead of strict JSON because normal JSON does not
// allow comments. Edit the values here and the homepage skills grid will rebuild
// automatically.
//
// How to change the number of skill cards across:
// Change `columns`. For example:
// columns: 2
// columns: 3
// columns: 4
//
// The rendering code uses this value to calculate each card's width. Larger
// column counts make the cards scale down so they can fit across the row.
// On narrower screens, the CSS still collapses the grid so it stays readable.
//
// How to add a skill:
// 1. Copy one full skill object, including the opening `{` and closing `}`.
// 2. Paste it before the final `];`.
// 3. Change id, order, title, and description.
//
// How to reorder skills:
// Change the `order` number. Lower numbers show first.
//
// How to temporarily hide a skill:
// Set `featured` to false.

window.portfolioSkillsConfig = {
  columns: 3,
  maxCardWidth: 360,
  gap: 20
};

window.portfolioSkills = [
  {
    id: "engineering-skill-category",
    order: 1,
    featured: true,
    title: "[Engineering Skill Category]",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "software-programming",
    order: 2,
    featured: true,
    title: "[Software / Programming]",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "fabrication-testing",
    order: 3,
    featured: true,
    title: "Stand in Skills 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "fabrication-testing",
    order: 4,
    featured: true,
    title: "Stand in Skills 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "fabrication-testing",
    order: 5,
    featured: true,
    title: "Stand in Skills 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "fabrication-testing",
    order: 6,
    featured: true,
    title: "Stand in Skills 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];
