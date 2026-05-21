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
// 3. Change id, order, date, title, summary, details, and icon.
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
// How to make another project use the timeline page:
// 1. In projects-data.js, set that project to pageStyle: 1.
// 2. Copy templates/timeline-project into projects/your-project-id.
// 3. In the copied index.html, change data-project-id to match your project id.
// 4. Keep this script line in that index.html:
//    <script src="../../project-timeline-data.js"></script>
// 5. In window.projectTimelineEvents below, copy the "project-name-02" block.
// 6. Rename the copied key to your project id, such as "project-name-08".
// 7. Edit, add, hide, and reorder that project's timeline events.

window.projectTimelineIcons = {
  0: "images/Icons/timelineStartIcon.svg",
  1: "images/Icons/timelineBuildIcon.svg",
  2: "images/Icons/timelineTestIcon.svg",
  3: "images/Icons/timelineResultIcon.svg"
};

window.projectTimelineEvents = {
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
      icon: 0
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
      icon: 1
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
      icon: 2
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
      icon: 3
    }
  ]
};
