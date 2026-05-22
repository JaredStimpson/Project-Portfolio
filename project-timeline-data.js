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
  3: "images/Icons/timelineResultIcon.svg"
};

window.projectTimelineEvents = {
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
      images: [
        {
          src: "projects/project-name-01/media/bottleOpenerFixture.JPG",
          alt: "Example single timeline card image"
        }
      ]
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
      images: [
        {
          src: "projects/project-name-01/media/bottleOpenerFixture.JPG",
          alt: "Example project media preview"
        },
        {
          src: "images/Icons/timelineBuildIcon.svg",
          alt: "Example build icon preview"
        },
        {
          src: "images/Icons/timelineTestIcon.svg",
          alt: "Example test icon preview"
        }
      ]
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
