// Timeline event data for project pages that use pageStyle: 1.
//
// This file is JavaScript instead of strict JSON because normal JSON does not
// allow comments. Keep each project id matched to the `id` in projects-data.js.
//
// How to reorder timeline events:
// Change the `order` number. Lower numbers show first.
//
// How to add an event:
// 1. Copy one full event object, from `{` through `}`.
// 2. Paste it into the matching project's array.
// 3. Change id, order, date, title, summary, details, icon, and images.
// 4. Leave images as [] if that timeline card does not need image previews.
//
// How to hide an event without deleting it:
// Set `featured` to false.
//
// How timeline icons work:
// - Each event's `icon` can be a number from window.projectTimelineIcons.
// - Example: icon: 0 uses timelineStartIcon.svg.
// - To change one card's icon, change only that event's icon number.
// - To add a new reusable icon, put the SVG/image file in images/Icons and add
//   the next number to window.projectTimelineIcons below.
// - You can also use a direct repo-root file path for one special card, such as:
//   icon: "images/Icons/customIcon.svg"
//
// How timeline card images work:
// - Each event can optionally include 1 to 4 preview images.
// - Leave `images: []` until you have media for that specific timeline event.
// - One image fills the full preview space for that card.
// - Two to four images display as a preview grid in the same image space.
// - If more than four are listed, only the first four show in the preview.
// - Clicking a preview expands it on the same page with a dark background.
// - Image paths start from the repo root.
// - Use `alt` to describe each image for accessibility.
//
// One-image example:
// images: [
//   {
//     src: "projects/project-name-02/media/example-step.jpg",
//     alt: "Short description of the image"
//   }
// ]
//
// Multiple-image example, up to 4:
// images: [
//   { src: "projects/project-name-02/media/step-1.jpg", alt: "Step 1" },
//   { src: "projects/project-name-02/media/step-2.jpg", alt: "Step 2" },
//   { src: "projects/project-name-02/media/step-3.jpg", alt: "Step 3" },
//   { src: "projects/project-name-02/media/step-4.jpg", alt: "Step 4" }
// ]
//
// How to make another project use the timeline page:
// 1. In projects-data.js, set that project to pageStyle: 1.
// 2. Copy templates/timeline-project into projects/your-project-id.
// 3. In the copied index.html, change data-project-id to match your project id.
// 4. Keep this script line in that index.html:
//    <script src="../../project-timeline-data.js"></script>
// 5. In window.projectTimelineEvents below, copy one full project timeline block.
//    Start at the COPY PROJECT BLOCK START comment.
//    End at the COPY PROJECT BLOCK END comment.
// 6. Paste the copied block below the existing project block, before the final
//    closing `};`.
// 7. Rename the copied key to your project id, such as "project-name-08".
// 8. Edit, add, hide, and reorder that project's timeline events.
// 9. Keep a comma between project blocks. The copied example already ends with
//    one, so pasting another block below it is usually safe.

window.projectTimelineIcons = {
  0: "images/Icons/timelineStartIcon.svg",
  1: "images/Icons/timelineBuildIcon.svg",
  2: "images/Icons/timelineTestIcon.svg",
  3: "images/Icons/timelineResultIcon.svg",
  4: "images/Icons/timelineSourceIcon.svg"
};

window.projectTimelineEvents = {
  "edm-baseplate-fixture": [
    {
      id: "design-source",
      order: 1,
      featured: true,
      date: "March 2026",
      title: "Sourcing and Design for Manufacturability",
      summary:
        "I secured unused steel plate material from the IME department and designed the fixture around standard threaded locating pins, baseplate size, and manufacturing variability.",
      details: [
        "Fixture must locate and support the baseplate reliably.",
        "Designed clearance and hole strategy around expected fabrication tolerances.",
        "Planned the manufacturing sequence before cutting material."
      ],
      icon: 4,
      images: [
        {
          src: "projects/edm-baseplate-fixture/media/edmBaseplateFixtureSourcing.jpg",
          alt: "Free steel plates sourced for prototyping"
        }
      ]
    },
    {
      id: "mfg-waterjet-plates",
      order: 2,
      featured: true,
      date: "April 2026",
      title: "Waterjet Steel Plate Profiles",
      summary:
        "After designing the fixture in SolidWorks, I cut the steel plate profiles on the waterjet to bring the parts near final shape.",
      details: [
        "Waterjet profiles established the rough geometry for the fixture plates.",
        "Plate holes were left undersized so the Wire EDM could qualify final size and location."
      ],
      icon: 1,
      images: [
        {
          src: "projects/edm-baseplate-fixture/media/edmBaseplateFixtureParts.jpg",
          alt: "Waterjet-cut steel fixture plates before final hole qualification"
        },
        {
          src: "projects/edm-baseplate-fixture/media/baseplateWaterjet.jpg",
          alt: "Waterjet cutting setup for the baseplate fixture plates"
        }
      ]
    },
    {
      id: "wedm-holes",
      order: 3,
      featured: true,
      date: "May 2026",
      title: "Wire EDM Qualification of Mounting Holes",
      summary:
        "Using the pre-made holes as starting geometry, I programmed the Wire EDM to cut the mounting holes to the required size and location.",
      details: [
        "Used Mastercam to program the WEDM operation.",
        "Qualified critical hole geometry after rough profiling."
      ],
      icon: 1,
      images: [
        {
          src: "projects/edm-baseplate-fixture/media/edmBasePlateEDMOP.jpg",
          alt: "Wire EDM operation used to qualify fixture mounting holes"
        },
        {
          src: "projects/edm-baseplate-fixture/media/baseplateFixtureVerification.JPG",
          alt: "Fixture verification after Wire EDM machining"
        }
      ]
    },
    {
      id: "mfg-weld-plates",
      order: 4,
      featured: true,
      date: "May 2026",
      title: "Weld and Assembly of Plates",
      summary:
        "I fixtured and welded the plates together with help from an instructor, aiming to minimize datum warpage during assembly.",
      details: [
        "Welded the rib, mounting plate, and vertical plate into the fixture assembly.",
        "Managed the assembly sequence around repeatability and datum stability."
      ],
      icon: 1,
      images: [
        {
          src: "projects/edm-baseplate-fixture/media/edmBaseplateFixtureWelds.jpg",
          alt: "Weld beads supporting the rib, mounting plate, and vertical plate"
        },
        {
          src: "projects/edm-baseplate-fixture/media/baseplateFixtureIsoWelds.jpg",
          alt: "Isometric view of the welded baseplate fixture assembly"
        },
        {
          src: "projects/edm-baseplate-fixture/media/baseplateFixtureIso.JPG",
          alt: "Isometric view of the EDM baseplate fixture"
        }
      ]
    }
  ],
  // COPY PROJECT BLOCK START
  // Copy from this comment through COPY PROJECT BLOCK END to make another
  // timeline project. Then rename "project-name-02" to the exact project id
  // from projects-data.js.
  "project-name-02": [
    {
      id: "define-scope",
      order: 1,
      featured: true,
      date: "[Phase 01 / Date]",
      title: "[Define the Problem]",
      summary:
        "Replace this with the project need, constraint, or question that started the work.",
      details: [
        "[Key requirement or design target]",
        "[Early assumption, risk, or constraint]"
      ],
      icon: 0,
      images: []
    },
    {
      id: "design-build",
      order: 2,
      featured: true,
      date: "[Phase 02 / Date]",
      title: "[Design and Build]",
      summary:
        "Replace this with how you modeled, fabricated, coded, tested, or iterated the solution.",
      details: [
        "[Tool, method, or process used]",
        "[Important design change or decision]"
      ],
      icon: 1,
      images: []
    },
    {
      id: "test-iterate",
      order: 3,
      featured: true,
      date: "[Phase 03 / Date]",
      title: "[Test and Iterate]",
      summary:
        "Replace this with the validation step, measured result, failure mode, or improvement loop.",
      details: [
        "[What you measured or observed]",
        "[What changed because of the test]"
      ],
      icon: 2,
      images: []
    },
    {
      id: "final-outcome",
      order: 4,
      featured: true,
      date: "[Phase 04 / Date]",
      title: "[Outcome]",
      summary:
        "Replace this with the final deliverable, result, lesson learned, or next step.",
      details: [
        "[Final metric, artifact, or status]",
        "[What you would improve next]"
      ],
      icon: 3,
      images: []
    }
  ],
  // COPY PROJECT BLOCK END
  // Paste additional project timeline blocks below this line, before the final
  // closing `};`.
  "project-name-03": [
    {
      id: "project-03-define-scope",
      order: 1,
      featured: true,
      date: "[Project 03 Phase 01 / Date]",
      title: "[Project 03 Define the Problem]",
      summary:
        "Replace this with the project need, constraint, or question that started the work.",
      details: [
        "[Key requirement or design target]",
        "[Early assumption, risk, or constraint]"
      ],
      icon: 0,
      images: []
    },
    {
      id: "project-03-design-build",
      order: 2,
      featured: true,
      date: "[Project 03 Phase 02 / Date]",
      title: "[Project 03 Design and Build]",
      summary:
        "Replace this with how you modeled, fabricated, coded, tested, or iterated the solution.",
      details: [
        "[Tool, method, or process used]",
        "[Important design change or decision]"
      ],
      icon: 1,
      images: []
    },
    {
      id: "project-03-test-iterate",
      order: 3,
      featured: true,
      date: "[Project 03 Phase 03 / Date]",
      title: "[Project 03 Test and Iterate]",
      summary:
        "Replace this with the validation step, measured result, failure mode, or improvement loop.",
      details: [
        "[What you measured or observed]",
        "[What changed because of the test]"
      ],
      icon: 2,
      images: []
    },
    {
      id: "project-03-final-outcome",
      order: 4,
      featured: true,
      date: "[Project 03 Phase 04 / Date]",
      title: "[Project 03 Outcome]",
      summary:
        "Replace this with the final deliverable, result, lesson learned, or next step.",
      details: [
        "[Final metric, artifact, or status]",
        "[What you would improve next]"
      ],
      icon: 3,
      images: []
    }
  ],
};
