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
// Icon paths start from the repo root, just like project images.

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
      icon: "images/Icons/timelineStartIcon.svg"
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
      icon: "images/Icons/timelineBuildIcon.svg"
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
      icon: "images/Icons/timelineTestIcon.svg"
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
      icon: "images/Icons/timelineResultIcon.svg"
    }
  ]
};
