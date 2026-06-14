// Timeline event data for project pages that use pageStyle: 1.
//
// This file is JavaScript instead of strict JSON because normal JSON does not
// allow comments. Keep each project id matched to the `id` in projects-data.js.
//
// How to reorder timeline events:
// Change the `order` number. Lower numbers are earlier in time, so they render
// closer to the top. Higher numbers are newer and render lower as you scroll.
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
          src: "projects/edm-baseplate-fixture/media/edmBaseplateFixturePreProcessing.jpg",
          alt: "Steel plates staged for pre-processing and fixture prototyping"
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
      id: "machine-tooling",
      order: 4,
      featured: true,
      date: "Tooling result",
      title: "Machined Hammer Mold Tooling",
      summary:
        "Documented the machined hammer mold and material-removal results after the CAM strategy was applied.",
      details: [
        "Machined mold geometry is now represented with finished tooling media.",
        "Material-removal image documents the machining outcome.",
        "Dimensional verification and class-use readiness are still TBD."
      ],
      icon: 3,
      images: [
        {
          src: "projects/lost-foam-hammer/media/hammerMold.jpg",
          alt: "Finished hammer mold tooling after machining"
        },
        {
          src: "projects/lost-foam-hammer/media/hammerMoldMatlRemoval.jpg",
          alt: "Hammer mold material removal and machining result"
        }
      ]
    },
    {
      id: "first-casting-results",
      order: 5,
      featured: true,
      date: "Casting result",
      title: "Documented Early Casting Results",
      summary:
        "Captured early casting results from the hammer mold process for follow-up validation and process refinement.",
      details: [
        "Casting images show multiple result views.",
        "Useful for future notes about mold performance and defect reduction.",
        "Final dimensional verification and class-use readiness are still TBD."
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
      title: "Testing of simple contour engravings",
      summary:
        "The first step of this project involved testing the quality of wax imprents using simple engravng methods like a ball endmill contour trace.",
      details: [
        "Selected aluminum for machinability and heat conductivity.",
        "Tested .002 to .010 inch engraving depths",
        "Created legible writing but left more to be desired in the quality of the raster logos"
      ],
      icon: 0,
      images: [
        {
          src: "projects/wax-seal-stamps/media/waxStampPOC.jpg",
          alt: "Proof-of-concept wax impression with .010 depth contour trace"
        },
        {
          src: "projects/wax-seal-stamps/media/waxStampPOC2.jpg",
          alt: "Proof of concept impression on .002 engraving already machined"
        },
        {
          src: "projects/wax-seal-stamps/media/waxStampPOC3.jpg",
          alt: "Proof of concept testing"
        }
      ]
    },
     {
      id: "machine-first-test",
      order: 2,
      featured: true,
      date: "Development",
      title: "Machining of first prototype",
      summary:
        "The first version I made had a round stamp head and a rectangular boss. This was to reduce the complexity of holding for operation 2 when it was flipped over by allowing it to be held in the straight vice jaws.",
      details: [
        "Used initial testing contour trace style.",
        "Workholding with a small boss let to deforming the part where it was held.",
        "Verified the possibility of the project"
      ],
      icon: 2,
      images: [
        {
          src: "projects/wax-seal-stamps/media/waxStampV1.jpg",
          alt: "Early wax seal stamp version with square workholding boss and simple contour trace"
        }
      ]
    },
    {
      id: "design-fixture",
      order: 3,
      featured: true,
      date: "Design/manufacturing",
      title: "Re-designed and used custom fixtureing",
      summary:
        "After running into deformation problems from holding onto a small boss, I redesigned the feature to be a larger round boss which could be held in soft-jaws made to it's diameter.",
      details: [
        "Created soft-jaws to size",
        "Allowed for enough surface area exposed for holding",
        "Properly located relevant datums"
      ],
      icon: 1,
      images: [
        
      ]
    },
    {
      id: "machine-stamp",
      order: 4,
      featured: true,
      date: "Machining",
      title: "Machined stamp with raster details and updated workholding feature",
      summary:
        "After revisions in the design, I machined the final version which included the soft-jaw features and a higher quality engraving using a reference.",
      details: [
        "Introduced fine detail engravings using a raster refernce instead of a vector",
        "Created multiple versions of the design as gifts",
        "Created 'ready to use' stamp heads awaiting handle manufacturing"
      ],
      icon: 1,
      images: [
        {
          src: "projects/wax-seal-stamps/media/waxStampMacroChau.JPG",
          alt: "Close-up of machined wax seal stamp emblem details of the Chinese character 周 (Zhou)"
        },
        {
          src: "projects/wax-seal-stamps/media/datumDanStamp.jpg",
          alt: "A 'Datum Dan' stamp given as a gift to one of my professors that teaches GD&T, Metrology, and Quality Engineering classes"
        },
        {
          src: "projects/wax-seal-stamps/media/waxStampV3.jpg",
          alt: "Custom wax seal heads for my brothers and Mom"
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
          src: "projects/edm-bottleopener-fixture/media/edmBottleOpenerB4.jpg",
          alt: "Bottle opener before the EDM machining result"
        },
        {
          src: "projects/edm-bottleopener-fixture/media/edmBottleOpenerAfter.jpg",
          alt: "Bottle opener after the EDM machining result"
        },
        {
          src: "projects/edm-bottleopener-fixture/media/edmBottleOpenerb4after.jpg",
          alt: "Composite before and after view of the EDM-machined bottle opener"
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
  ],
  "ring-gear": [
    {
      id: "prepare-slug-stock",
      order: 1,
      featured: true,
      date: "Stock prep",
      title: "Prepared Ring Gear Slug Stock",
      summary:
        "Started from slug stock that would become the ring gear profile.",
      details: [
        "Slug media documents the starting workpiece before the gear form was cut.",
        "The wide slug image gives context for scale and stock condition.",
        "Exact material, stock dimensions, and drawing requirements are TBD."
      ],
      icon: 0,
      images: [
        {
          src: "projects/ring-gear/media/ringgearSlug.jpg",
          alt: "Ring gear slug stock before EDM cutting"
        },
        {
          src: "projects/ring-gear/media/ringgearSlugWide.jpg",
          alt: "Wide view of ring gear slug stock"
        }
      ]
    },
    {
      id: "cut-leadin",
      order: 2,
      featured: true,
      date: "EDM cut setup",
      title: "Managed Lead-In and Cut Strategy",
      summary:
        "Used the lead-in feature to support the EDM cutting path into the ring gear geometry.",
      details: [
        "Lead-in media suggests attention to where the cut starts and transitions into the part.",
        "This is the right place to add future notes about datum setup, wire path, and cut parameters.",
        "Machine, wire, and exact operation settings are TBD."
      ],
      icon: 1,
      images: [
        {
          src: "projects/ring-gear/media/ringgearLeadin.jpg",
          alt: "Lead-in feature from the ring gear EDM cutting process"
        }
      ]
    },
    {
      id: "inspect-tooth-form",
      order: 3,
      featured: true,
      date: "Inspection",
      title: "Documented Tooth Profile Detail",
      summary:
        "Captured close-up media of the finished tooth form for visual review.",
      details: [
        "Close-up image helps show edge quality and geometry detail.",
        "Future edits can add pitch, tooth count, tolerance, or inspection method.",
        "Quantitative gear inspection results are TBD."
      ],
      icon: 2,
      images: [
        {
          src: "projects/ring-gear/media/ringgearCloseup.jpg",
          alt: "Close-up of the EDM-cut ring gear tooth profile"
        }
      ]
    },
    {
      id: "finished-ring-gear",
      order: 4,
      featured: true,
      date: "Result",
      title: "Finished Ring Gear",
      summary:
        "Documented the finished ring gear geometry with an isometric result image.",
      details: [
        "Finished view provides the main project result image.",
        "TBD: add final acceptance criteria, tolerance results, and application context.",
        "TBD: note whether this was a course, research, or personal manufacturing project."
      ],
      icon: 3,
      images: [
        {
          src: "projects/ring-gear/media/ringgearIsometric.jpg",
          alt: "Finished ring gear shown in an isometric view"
        }
      ]
    }
  ],
  "bt-speaker": [
    {
      id: "define-speaker-concept",
      order: 1,
      featured: true,
      date: "Concept",
      title: "Defined Speaker Concept",
      summary:
        "Set up the project page around a Bluetooth speaker concept that can be expanded with enclosure, electronics, and build details.",
      details: [
        "Current media provides one isometric design image.",
        "TBD: add design requirements, speaker driver choice, battery or amplifier details, and enclosure goals.",
        "TBD: add whether this is a CAD concept, printed enclosure, or finished build."
      ],
      icon: 0,
      images: []
    },
    {
      id: "model-isometric-design",
      order: 2,
      featured: true,
      date: "Design",
      title: "Modeled Isometric Speaker Design",
      summary:
        "Used the available isometric image as the first visual anchor for the speaker project.",
      details: [
        "The image appears to show the speaker form or enclosure concept.",
        "Future edits can add CAD screenshots, internal layout, and manufacturing steps.",
        "Exact software and enclosure manufacturing method are TBD."
      ],
      icon: 1,
      images: [
        {
          src: "projects/bt-speaker/media/btSpeakerIsometric.jpg",
          alt: "Isometric Bluetooth speaker project concept"
        }
      ]
    },
    {
      id: "add-build-context",
      order: 3,
      featured: true,
      date: "Next edits",
      title: "Add Build and Electronics Context",
      summary:
        "The project scaffold is ready for future build photos, wiring notes, and performance results.",
      details: [
        "TBD: add speaker hardware and electronics integration details.",
        "TBD: add enclosure fabrication or assembly media.",
        "TBD: add final test, sound, or fit results."
      ],
      icon: 3,
      images: []
    }
  ]
};
