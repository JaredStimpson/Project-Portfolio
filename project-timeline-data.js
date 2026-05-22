// Timeline event data for project pages that use pageStyle: 1.
//
// This file is JavaScript instead of strict JSON because normal JSON does not
// allow comments. Keep each project id matched to the `id` in projects-data.js.
//
// How to reorder timeline events:
// Change the `order` number. Lower numbers are earlier in time, so they render
// lower on the page. Higher numbers are newer and render closer to the top.
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
// - Keep `src` pointed at the original media file. The site automatically uses
//   generated optimized variants when image-variants.js has a match. After
//   adding media, run:
//   python tools/generate-image-variants.py
//
// How to make another project use the timeline page:
// 1. In projects-data.js, set that project to pageStyle: 1.
// 2. Copy templates/timeline-project into projects/your-project-id.
// 3. In the copied index.html, change data-project-id to match your project id.
// 4. Keep this script line in that index.html:
//    <script src="../../project-timeline-data.js"></script>
// 5. Copy one full project block below, from the quoted project id through the
//    closing array bracket, then change the project id and event content.
// 6. Keep a comma between project blocks.

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
  "lost-foam-hammer": [
    {
      id: "define-tooling-need",
      order: 1,
      featured: true,
      date: "Project start",
      title: "Defined Class Tooling Requirement",
      summary:
        "Identified the need for a CNC-machined hammer mold for future net shape manufacturing coursework.",
      details: [
        "Reviewed mold quality requirements.",
        "Considered DFM needs for student use.",
        "Defined the CNC machining approach."
      ],
      icon: 0,
      images: [
        {
          src: "projects/lost-foam-hammer/media/hammerMoldFoamAssortment.jpg",
          alt: "Foam hammer mold components used to define tooling requirements"
        },
        {
          src: "projects/lost-foam-hammer/media/hammerMoldFoamDetail.jpg",
          alt: "Hammer mold foam detail used to evaluate tooling needs"
        }
      ]
    },
    {
      id: "program-toolpaths",
      order: 2,
      featured: true,
      date: "CAM phase",
      title: "Programmed 3D Toolpaths",
      summary:
        "Created advanced 3D milling toolpaths for the hammer mold geometry.",
      details: [
        "Built toolpath strategy for mold surfaces.",
        "Balanced finish quality with run time.",
        "Prepared program for HAAS controller limits."
      ],
      icon: 1,
      images: [
        {
          src: "projects/lost-foam-hammer/media/hammerMoldMacro.jpg",
          alt: "Machined hammer mold surface showing detailed toolpath results"
        },
        {
          src: "projects/lost-foam-hammer/media/hammerMoldMacroSide.jpg",
          alt: "Side view of the machined hammer mold cavity"
        },
        {
          src: "projects/lost-foam-hammer/media/hammerMoldMacroTopView.jpg",
          alt: "Top view of machined hammer mold tooling"
        }
      ]
    },
    {
      id: "optimize-gcode",
      order: 3,
      featured: true,
      date: "Current phase",
      title: "Optimized for Controller Limits",
      summary:
        "Reduced and organized G-code to address HAAS TM-2 memory constraints.",
      details: [
        "Worked around controller memory size.",
        "Optimized total cycle time.",
        "Prepared for first prototype run."
      ],
      icon: 2,
      images: [
        {
          src: "projects/lost-foam-hammer/media/hammerMoldFoamSubOptimal.jpg",
          alt: "Suboptimal hammer mold result used to guide process improvements"
        },
        {
          src: "projects/lost-foam-hammer/media/hammerMoldFoamDefect.jpg",
          alt: "Hammer mold defect used to evaluate tooling and process issues"
        }
      ]
    },
    {
      id: "first-prototype",
      order: 4,
      featured: true,
      date: "Next step",
      title: "Run First Prototype",
      summary:
        "First prototype machining and mold verification are the next validation steps.",
      details: [
        "Prototype run TBD.",
        "Dimensional verification TBD.",
        "Class-use readiness TBD."
      ],
      icon: 3,
      images: [
        {
          src: "projects/lost-foam-hammer/media/hammerMoldCast1.jpg",
          alt: "Hammer casting prototype from the mold process"
        },
        {
          src: "projects/lost-foam-hammer/media/hammerMoldCast2.jpg",
          alt: "Second view of hammer casting prototype"
        },
        {
          src: "projects/lost-foam-hammer/media/hammerMoldCast3.jpg",
          alt: "Cleaned hammer casting prototype"
        },
        {
          src: "projects/lost-foam-hammer/media/hammerMoldMatlRemoval.jpg",
          alt: "Hammer mold material removal and machining result"
        }
      ]
    }
  ],
  "wax-seal-stamps": [
    {
      id: "define-stamp-goal",
      order: 1,
      featured: true,
      date: "Concept",
      title: "Defined Fidelity and Assembly Goals",
      summary:
        "Set the goal of creating a CNC-machined stamp that could leave a legible custom wax emblem.",
      details: [
        "Needed small, detailed features.",
        "Needed to fit handle assembly and fasteners.",
        "Selected aluminum for machinability and heat conductivity."
      ],
      icon: 0,
      images: [
        {
          src: "projects/wax-seal-stamps/media/waxStampV1.jpg",
          alt: "Early wax seal stamp version used to define the design goal"
        }
      ]
    },
    {
      id: "design-fixture",
      order: 2,
      featured: true,
      date: "Design/manufacturing",
      title: "Designed Repeatable Workholding",
      summary:
        "Created custom workholding to secure small stamp heads during machining.",
      details: [
        "Focused on repeatability and reliability.",
        "Used soft-jaw style fixturing.",
        "Accounted for small part geometry and tool access."
      ],
      icon: 1,
      images: [
        {
          src: "projects/wax-seal-stamps/media/datumDanStamp.jpg",
          alt: "Machined wax seal stamp head used in the assembly"
        },
        {
          src: "projects/wax-seal-stamps/media/waxStampV3.jpg",
          alt: "Completed replaceable wax seal stamp heads"
        }
      ]
    },
    {
      id: "machine-stamp",
      order: 3,
      featured: true,
      date: "Machining",
      title: "Machined Detailed Stamp Features",
      summary:
        "Ran CNC toolpaths for the emblem geometry and assembly features.",
      details: [
        "Managed complex toolpaths.",
        "Balanced feature fidelity with tool life and time.",
        "Machined features needed for assembly fit."
      ],
      icon: 1,
      images: [
        {
          src: "projects/wax-seal-stamps/media/waxStampMacroChau.JPG",
          alt: "Close-up of machined wax seal stamp emblem details"
        }
      ]
    },
    {
      id: "test-wax-emblem",
      order: 4,
      featured: true,
      date: "Validation",
      title: "Tested Wax Impression",
      summary:
        "Verified the stamp could leave a readable wax emblem using a temporary handle.",
      details: [
        "Observed wax impression quality.",
        "Confirmed functional concept.",
        "Final measurement data TBD."
      ],
      icon: 2,
      images: [
        {
          src: "projects/wax-seal-stamps/media/waxStampPOC.jpg",
          alt: "Proof-of-concept wax impression from the machined stamp"
        },
        {
          src: "projects/wax-seal-stamps/media/waxStampPOC2.jpg",
          alt: "Second wax impression test from the machined stamp"
        },
        {
          src: "projects/wax-seal-stamps/media/waxStampPOC3.jpg",
          alt: "Close-up wax impression validation test"
        }
      ]
    }
  ],
  "rail-saw-jig": [
    {
      id: "identify-cutting-problem",
      order: 1,
      featured: true,
      date: "Problem",
      title: "Identified Repeated Measurement Bottleneck",
      summary:
        "Acrylic sheet cuts required repeated measurement before each cut, slowing the process.",
      details: [
        "Needed repeatable 4 inch and 6 inch stops.",
        "Needed to resist accidental bumps.",
        "Needed to attach to the track saw setup.",
        "TBD: add problem/setup media when available."
      ],
      icon: 0,
      images: []
    },
    {
      id: "prototype-stop",
      order: 2,
      featured: true,
      date: "Prototype",
      title: "Rapid-Prototyped Adjustable Stop",
      summary:
        "Iterated on a 3D-printed stop design with embedded hardware.",
      details: [
        "Designed for standard parts.",
        "Used an embedded nut and wing nut for tension.",
        "Adjusted geometry for the required range.",
        "TBD: add prototype images when available."
      ],
      icon: 1,
      images: []
    },
    {
      id: "solve-embedded-nut",
      order: 3,
      featured: true,
      date: "Build issue",
      title: "Solved Embedded-Nut Print Issue",
      summary:
        "Managed adhesion problems caused by pausing and cooling during nut insertion.",
      details: [
        "Used heat carefully to complete the insert.",
        "Avoided deformation of thin-walled PLA.",
        "Maintained function of the clamping feature.",
        "TBD: add embedded nut close-up when available."
      ],
      icon: 2,
      images: []
    },
    {
      id: "install-fixture",
      order: 4,
      featured: true,
      date: "Result",
      title: "Installed Adjustable Cutting Stop",
      summary:
        "Mounted the fixture to the track saw guide for repeated acrylic sheet cuts.",
      details: [
        "Reduced repeated measurement steps.",
        "Allowed adjustment between required cut lengths.",
        "Quantified time savings TBD.",
        "TBD: add final installed fixture media when available."
      ],
      icon: 3,
      images: []
    }
  ],
  "bridge-less-running-camp-stencil": [
    {
      id: "define-logo-problem",
      order: 1,
      featured: true,
      date: "Problem",
      title: "Defined Bridge-Less Stencil Requirement",
      summary:
        "The logo needed enclosed letter features without visible stencil bridges.",
      details: [
        "Internal features in letters needed support.",
        "Flat bridges would obstruct the sprayed design.",
        "Deadline was tied to camp start.",
        "TBD: add source logo or problem image when available."
      ],
      icon: 0,
      images: []
    },
    {
      id: "model-3d-bridges",
      order: 2,
      featured: true,
      date: "Design",
      title: "Modeled 3D Bridge Supports",
      summary:
        "Used raised bridge geometry so spray could reach around the support features.",
      details: [
        "Designed in Fusion 360.",
        "Kept enclosed character details in place.",
        "Balanced support with spray coverage.",
        "TBD: add Fusion 360 stencil model image when available."
      ],
      icon: 1,
      images: []
    },
    {
      id: "fabricate-and-use",
      order: 3,
      featured: true,
      date: "Result",
      title: "Fabricated and Used Stencil",
      summary:
        "Completed the stencil in time for use on running camp shirts.",
      details: [
        "Prototype and finish work completed on schedule.",
        "Post-use stencil images available in source portfolio.",
        "Final shirt image/path TBD.",
        "TBD: add top view of used stencil or shirt result."
      ],
      icon: 3,
      images: []
    }
  ],
  "edm-bottleopener-fixture": [
    {
      id: "define-fixture-goal",
      order: 1,
      featured: true,
      date: "Concept",
      title: "Defined Fixture and Part-Holding Goal",
      summary:
        "Established the need for a bottle opener workholding setup that could support Wire EDM machining.",
      details: [
        "Media context suggests the main challenge was holding the bottle opener consistently for EDM work.",
        "Fixture design had to support the part while leaving the machined features accessible.",
        "Exact part material, tolerances, and course context are TBD."
      ],
      icon: 0,
      images: [
        {
          src: "projects/edm-bottleopener-fixture/media/bottleOpenerFixture.JPG",
          alt: "Bottle opener positioned on a machined fixture"
        }
      ]
    },
    {
      id: "iterate-fixture",
      order: 2,
      featured: true,
      date: "Fixture iteration",
      title: "Iterated Fixture Geometry",
      summary:
        "Compared early and later fixture versions to improve the setup for the bottle opener part.",
      details: [
        "The V1 and V2 images show visible fixture iteration.",
        "The setup appears to move toward a more stable, repeatable part location.",
        "Exact design changes and reason for each revision are TBD."
      ],
      icon: 1,
      images: [
        {
          src: "projects/edm-bottleopener-fixture/media/edmBottleopenerFixtureV1.jpg",
          alt: "First version of the EDM bottle opener fixture"
        },
        {
          src: "projects/edm-bottleopener-fixture/media/edmBottleOpenerFixtureV2.JPG",
          alt: "Second version of the EDM bottle opener fixture"
        },
        {
          src: "projects/edm-bottleopener-fixture/media/edmFixtureBottleopener.JPG",
          alt: "Bottle opener held in the updated EDM fixture"
        }
      ]
    },
    {
      id: "edm-setup",
      order: 3,
      featured: true,
      date: "EDM setup",
      title: "Set Up the Wire EDM Operation",
      summary:
        "Used the fixture to hold the bottle opener during the EDM setup and cutting process.",
      details: [
        "Setup photos show the fixture and bottle opener positioned in the machine.",
        "The fixture supports access to the cutting area while constraining the part.",
        "Machine settings, datum strategy, and operation sequence are TBD."
      ],
      icon: 1,
      images: [
        {
          src: "projects/edm-bottleopener-fixture/media/edmFixtureBottleopenerSetup.JPG",
          alt: "EDM setup holding the bottle opener fixture in the machine"
        },
        {
          src: "projects/edm-bottleopener-fixture/media/edmFixtureBottleopenerSetup2.JPG",
          alt: "Second view of the EDM bottle opener setup"
        }
      ]
    },
    {
      id: "compare-result",
      order: 4,
      featured: true,
      date: "Result",
      title: "Compared the Machined Bottle Opener Result",
      summary:
        "Documented the bottle opener result with before/after and close-up media.",
      details: [
        "Before/after imagery shows the part progression.",
        "Close-up media highlights the machined feature quality.",
        "Final inspection results and acceptance criteria are TBD."
      ],
      icon: 3,
      images: [
        {
          src: "projects/edm-bottleopener-fixture/media/edmBottleOpenerb4after.jpg",
          alt: "Before and after view of the EDM-machined bottle opener"
        },
        {
          src: "projects/edm-bottleopener-fixture/media/edmBottleOpenerCloseup.JPG",
          alt: "Close-up of the EDM-machined bottle opener feature"
        }
      ]
    }
  ],
  "mill-and-edm-setup": [
    {
      id: "plan-setup",
      order: 1,
      featured: true,
      date: "Setup planning",
      title: "Planned the Fixture Plate Setup",
      summary:
        "Prepared the setup around a fixture plate so the part could be located for the next machining operation.",
      details: [
        "The fixture plate installation photo indicates the workholding system is the core setup element.",
        "The project appears to connect milling preparation with an EDM operation.",
        "Exact datum scheme and operation sequence are TBD."
      ],
      icon: 0,
      images: [
        {
          src: "projects/mill-and-edm-setup/media/fixturePlateInstall.jpg",
          alt: "Fixture plate installed for the mill and EDM setup"
        }
      ]
    },
    {
      id: "prepare-setup-part",
      order: 2,
      featured: true,
      date: "Build/setup",
      title: "Prepared the Setup Part",
      summary:
        "Documented the machined setup part before the EDM operation.",
      details: [
        "The part images show the workpiece prepared for fixturing or EDM work.",
        "Setup appears to prioritize access, location, and process repeatability.",
        "Part function and final inspection requirements are TBD."
      ],
      icon: 1,
      images: [
        {
          src: "projects/mill-and-edm-setup/media/edmSetupPart.jpg",
          alt: "Machined setup part prepared for an EDM workflow"
        },
        {
          src: "projects/mill-and-edm-setup/media/edmSetupPart2.jpg",
          alt: "Second view of the machined setup part"
        }
      ]
    },
    {
      id: "verify-workholding",
      order: 3,
      featured: true,
      date: "Verification",
      title: "Verified Workholding Readiness",
      summary:
        "Confirmed the fixture plate and setup part were ready for the downstream EDM workflow.",
      details: [
        "The media supports a setup-readiness story more than a final-part story.",
        "TBD: add final EDM operation images if this setup produced a finished part.",
        "TBD: add tolerance, repeatability, or setup-time notes when available."
      ],
      icon: 2,
      images: []
    }
  ],
  "injection-molded-screwdriver": [
    {
      id: "define-molded-part",
      order: 1,
      featured: true,
      date: "Part review",
      title: "Reviewed the Molded Screwdriver Part",
      summary:
        "Framed the screwdriver as an injection molding process-analysis project.",
      details: [
        "Current media shows the molded part around the gate and runner detail.",
        "TBD: add full part and mold photos when available.",
        "TBD: add material, mold design, and cycle information."
      ],
      icon: 0,
      images: []
    },
    {
      id: "inspect-gate-runner",
      order: 2,
      featured: true,
      date: "Process detail",
      title: "Inspected Gate and Runner Detail",
      summary:
        "Used the gate/runner close-up to document how the molded screwdriver was fed and separated.",
      details: [
        "The available image highlights the manufacturing interface between runner, gate, and part.",
        "This is a useful anchor for later notes about fill quality, trimming, and defects.",
        "Exact process observations are TBD."
      ],
      icon: 2,
      images: [
        {
          src: "projects/injection-molded-screwdriver/media/injectionScrewdriverGateRunnerCloseup.jpg",
          alt: "Gate and runner close-up on the injection-molded screwdriver"
        }
      ]
    },
    {
      id: "document-next-steps",
      order: 3,
      featured: true,
      date: "Next edits",
      title: "Add Mold and Process Context",
      summary:
        "The page is ready for mold setup, final part, and process-result media when those files are added.",
      details: [
        "TBD: add mold setup image.",
        "TBD: add full screwdriver image.",
        "TBD: add material, defects, cycle time, and final result notes."
      ],
      icon: 3,
      images: []
    }
  ]
};
