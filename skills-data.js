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
  columns: 4,
  maxCardWidth: 360,
  gap: 20
};

window.portfolioSkills = [
  {
    id: "cnc-machining-cam",
    order: 1,
    featured: true,
    title: "CNC Machining & CAM",
    description: "CNC mill and lathe operation with Mastercam, Fusion 360, HAAS TM-1P setup, tooling selection, and 3D toolpath programming."
  },
  {
    id: "fixture-workholding-design",
    order: 2,
    featured: true,
    title: "Fixturing & Workholding Design",
    description: "Fixture, tooling, gauge, and workholding design for repeatable machining, small parts, irregular geometry, and DFMA-driven setups."
  },
  {
    id: "metrology-inspection",
    order: 3,
    featured: true,
    title: "Metrology & Inspection",
    description: "GD&T inspection, First Article Inspection Reports, touch-probe and vision CMMs, 3D scanning, profilometer inspection, and precision hand tools."
  },
  {
    id: "cad-dfma",
    order: 4,
    featured: true,
    title: "CAD & DFMA",
    description: "SolidWorks modeling, fits and clearance design, design for manufacturability and assembly, and engineering drawing interpretation."
  },
  {
    id: "additive-net-shape-processes",
    order: 5,
    featured: true,
    title: "Additive & Net Shape Processes",
    description: "3D printing, Cura slicing, additive manufacturing qualification, lost foam tooling, injection molding, and other net-shape manufacturing processes."
  },
  {
    id: "digital-fabrication-routing",
    order: 6,
    featured: true,
    title: "Digital Fabrication",
    description: "Laser cutting, water jet cutting, CNC routing, engraved production work, rapid prototyping, and setup optimization with probing workflows."
  },
  {
    id: "electronics-packaging",
    order: 7,
    featured: true,
    title: "Electronics & Packaging",
    description: "Electronics manufacturing lab procedures, packaging fundamentals, safety instruction, and hands-on student support for lab and project builds."
  },
  {
    id: "process-improvement-planning",
    order: 8,
    featured: true,
    title: "Process Improvement & Planning",
    description: "SOP development, safety protocols, production planning, engineering economics, setup-time reduction, and continuous improvement in lab environments."
  }
];
