// Project data for the homepage cards and project detail pages.
//
// This file is JavaScript instead of strict JSON because normal JSON does not
// allow comments. Keep the shape below, edit the text values, and the homepage
// plus each project page will rebuild automatically.
//
// How to reorder projects:
// Change the `order` number. Lower numbers show first.
//
// How to add a new project:
// 1. Copy one full project object, including the opening `{` and closing `}`.
// 2. Paste it before the final `];`.
// 3. Change `id`, `order`, `title`, `url`, and the other text fields.
// 4. Create the matching project folder/page, such as:
//    projects/project-name-06/index.html
// 5. If you have no image yet, leave `image` as an empty string and make the
//    `placeholder` text specific enough to identify the missing media.
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
// - Keep `image` and `detailImage` pointed at the original media file. The site
//   automatically uses generated optimized variants when image-variants.js has
//   a match. After adding media, run:
//   python tools/generate-image-variants.py
// - `pageStyle` controls the project page version:
//   0 or omitted = default overview page
//   1 = vertical timeline page
//   2, 3, 4... = reserved for future page styles
//
// If you set pageStyle to 1, use a timeline-style index.html page and add that
// project's timeline events in project-timeline-data.js.

window.portfolioProjects = [
  {
    id: "edm-baseplate-fixture",
    order: 1,
    featured: true,
    title: "EDM Baseplate Fixture",
    tag: "Research",
    description:
      "Designed a fixture for repeatable Wire EDM removal of metal 3D prints from build plates, improving setup reliability for additive manufacturing research.",
    story:
      "As part of additive manufacturing research at the Cal Poly AFRL, printed metal parts need reliable post-processing after SLM or DED builds. One common step is removing parts from the baseplate, where Wire EDM can part off the workpiece accurately. I designed and planned a dedicated fixture so baseplate removal setups can be more repeatable, easier to qualify, and more reliable across future prints.",
    role: "Design, Planning, Sourcing, Manufacturing, Testing, Analysis",
    tools: ["SolidWorks", "Mastercam", "Waterjet", "WEDM", "Welding", "Tapping"],
    timeline: "March 2026 - Present",
    outcome: "Currently completing final post-processing before the first use test.",
    pageStyle: 1,
    image: "projects/edm-baseplate-fixture/media/baseplateWaterjet.jpg",
    detailImage: "projects/edm-baseplate-fixture/media/baseplateFixtureIso.JPG",
    imageAlt: "Fixture to hold additive print baseplates for EDM part-off",
    placeholder: "[Add EDM baseplate fixture hero image]",
    mediaPlaceholder: "[Add EDM baseplate fixture detail media]",
    url: "projects/edm-baseplate-fixture/index.html"
  },
  {
    id: "cmm-touch-probe-program",
    order: 6,
    featured: true,
    title: "Zeiss GD&T Inspection",
    tag: "Manufacturing / Metrology / Course Support",
    description:
      "Programmed a Zeiss Duramax CMM inspection routine and supporting SOP for first article inspection of a CNC-machined class part.",
    story:
      "I programmed the Zeiss Duramax CMM for use in Cal Poly IME 335 CNC 1 first article inspection. The inspection needed to verify GD&T requirements on a machined part while handling non-traditional geometry, including a complex contoured ramp. The work focused on repeatable datuming, reliable probing strategy, and clear operator communication. I authored a standard operating procedure that explained safe machine operation, part setup, datum simulation, and common troubleshooting steps for student users.",
    role: "CMM programming, GD&T interpretation, inspection planning, SOP writing, operator safety documentation",
    tools: ["Zeiss Duramax CMM", "CMM programming", "GD&T", "first article inspection", "datum simulation", "probing strategy", "SOP documentation"],
    timeline: "Fall 2025",
    outcome: "Inspection program and SOP completed for IME 335 student use; validation details TBD.",
    pageStyle: 0,
    image: "projects/cmm-touch-probe-program/media/cmmSetupProbe.jpg",
    detailImage: "projects/cmm-touch-probe-program/media/cmmSetupProgram.jpg",
    imageAlt: "Part fixtured under the probe on a Zeiss Duramax CMM for first article inspection",
    placeholder: "[Add Zeiss CMM inspection hero image]",
    mediaPlaceholder: "[Add Zeiss CMM software or setup media]",
    url: "projects/cmm-touch-probe-program/index.html"
  },
  {
    id: "edm-bottleopener-fixture",
    order: 2,
    featured: true,
    title: "EDM Bottle Opener Fixture",
    tag: "Manufacturing / WEDM / Fixture Design",
    description:
      "Built and iterated a Wire EDM fixture setup for machining bottle opener features with more repeatable workholding.",
    story:
      "This project is filled from the available folder media, which shows a bottle opener fixture, V1/V2 fixture iterations, Wire EDM setup photos, and before/after bottle opener results. The project appears to center on making the bottle opener easier to locate and machine repeatably in the Wire EDM by improving the fixture and setup process. I treated the image sequence as a workholding and process-planning project: define how the part should be held, iterate the fixture, set up the EDM operation, and compare the machined result. Exact course context, tolerances, material, and final inspection data are still TBD.",
    role: "Fixture design, WEDM setup, process planning, setup iteration, visual validation",
    tools: ["Wire EDM", "fixture design", "workholding", "setup planning", "CNC machining (TBD)", "visual inspection"],
    timeline: "TBD",
    outcome: "Produced a functional EDM fixture setup and bottle opener result; exact tolerance and inspection outcomes TBD.",
    pageStyle: 1,
    image: "projects/edm-bottleopener-fixture/media/bottleOpenerFixture.JPG",
    detailImage: "projects/edm-bottleopener-fixture/media/edmFixtureBottleopener.JPG",
    imageAlt: "Bottle opener held on a machined fixture after Wire EDM setup work",
    placeholder: "[Add EDM bottle opener fixture hero image]",
    mediaPlaceholder: "[Add EDM bottle opener fixture detail media]",
    url: "projects/edm-bottleopener-fixture/index.html"
  },
  {
    id: "lost-foam-hammer",
    order: 3,
    featured: true,
    title: "Cal Poly Hammer Tooling",
    tag: "Manufacturing / CAM / Tooling",
    description:
      "Developed CAM toolpaths, machined mold tooling, and documented casting iterations for a hammer mold used in a Cal Poly net shape manufacturing class.",
    story:
      "I programmed 3D CNC mill toolpaths for a hammer mold that will be used by Cal Poly students in net shape manufacturing coursework. The part needs mold-quality surfaces while staying within the machine and controller constraints available for the project. The main engineering challenge was optimizing the toolpaths and G-code so the program could run on a HAAS TM-2 controller with limited memory while also reducing total cycle time. The available media now documents the tooling, foam mold details, and early casting outcomes for the process.",
    role: "CAM programming, process planning, toolpath optimization, fixturing and tooling selection, DFM review",
    tools: ["Mastercam or Fusion 360 CAM (TBD)", "HAAS TM-2", "3D toolpaths", "G-code optimization", "CNC milling", "mold tooling"],
    timeline: "2025 - Present",
    outcome: "Hammer mold tooling and early casting results documented; final class-use validation and inspection data TBD.",
    pageStyle: 1,
    image: "projects/lost-foam-hammer/media/hammerMoldMacroTopView.jpg",
    detailImage: "projects/lost-foam-hammer/media/hammerMoldMatlRemoval.jpg",
    imageAlt: "Machined hammer mold tooling for net shape manufacturing coursework",
    placeholder: "[Add hammer tooling CAM or prototype hero image]",
    mediaPlaceholder: "[Add hammer tooling detail media]",
    url: "projects/lost-foam-hammer/index.html"
  },
  {
    id: "wax-seal-stamps",
    order: 4,
    featured: true,
    title: "CNC Wax Seal Stamp",
    tag: "Manufacturing / CNC / Fixture Design",
    description:
      "Machined high-fidelity wax seal stamps using custom fixturing, CNC toolpaths, and repeatable small-part workholding.",
    story:
      "I designed and machined a wax seal stamp intended to leave a custom emblem with enough fidelity to remain legible in wax. The part required small features, complex toolpaths, and a material with good heat conductivity, which made CNC-machined aluminum a strong fit. A major focus was repeatable workholding for small parts. I used custom fixturing and soft-jaw style workholding so the stamp heads could be machined reliably while still fitting the handle assembly and standard fasteners. Rapid prototyping helped move the project to completion before the deadline.",
    role: "Design, fixture design, CNC machining, CAM/toolpath optimization, rapid prototyping, assembly fit verification",
    tools: ["CNC mill", "aluminum machining", "soft jaws", "fixture design", "Fusion 360 or Mastercam (TBD)", "standard fasteners", "rapid prototyping"],
    timeline: "2025",
    outcome: "Completed functional wax seal stamp with replaceable stamp heads; quantitative fidelity or tolerance results TBD.",
    pageStyle: 1,
    image: "projects/wax-seal-stamps/media/waxStampV3.jpg",
    detailImage: "projects/wax-seal-stamps/media/datumDanStamp.jpg",
    imageAlt: "CNC-machined wax seal stamp heads and stamp assembly",
    placeholder: "[Add CNC wax seal stamp hero image]",
    mediaPlaceholder: "[Add wax seal stamp detail media]",
    url: "projects/wax-seal-stamps/index.html"
  },
  {
    id: "mill-and-edm-setup",
    order: 9,
    featured: true,
    title: "Mill and EDM Setup Fixture",
    tag: "Manufacturing / Milling / EDM Setup",
    description:
      "Prepared a machined setup part and fixture plate installation for a milling-to-EDM workflow.",
    story:
      "This entry is inferred from the existing media, which shows an EDM setup part from multiple angles and a fixture plate installed in the machine. I treated it as a setup and workholding project that connects conventional machining preparation with EDM setup. The core story is process control: install the fixture plate, prepare or verify the setup part, and make the workholding repeatable enough for the next machining operation. Exact part purpose, operation sequence, datum scheme, and inspection results are still TBD.",
    role: "Machining setup, fixture plate installation, EDM preparation, workholding, process documentation",
    tools: ["Milling", "Wire EDM or sinker EDM (TBD)", "fixture plate", "workholding", "setup planning", "inspection (TBD)"],
    timeline: "TBD",
    outcome: "Fixture plate and setup part documented for an EDM workflow; final operation results TBD.",
    pageStyle: 1,
    image: "projects/mill-and-edm-setup/media/fixturePlateInstall.jpg",
    detailImage: "projects/mill-and-edm-setup/media/edmSetupPart.jpg",
    imageAlt: "Fixture plate installed for a mill and EDM setup workflow",
    placeholder: "[Add mill and EDM setup hero image]",
    mediaPlaceholder: "[Add mill and EDM setup detail media]",
    url: "projects/mill-and-edm-setup/index.html"
  },
  {
    id: "injection-molded-screwdriver",
    order: 8,
    featured: true,
    title: "Injection-Molded Screwdriver",
    tag: "Manufacturing / Injection Molding / Process Analysis",
    description:
      "Documented an injection-molded screwdriver part and gate/runner detail as a manufacturing process analysis project.",
    story:
      "This project is filled from the available media, which currently shows a close-up of the molded screwdriver gate and runner area. I treated it as an injection molding process entry focused on understanding how the part, gate, and runner affect molding quality, trimming, and final part function. The current page gives the project a clean structure so more mold photos, process settings, defects, or final part images can be added later. Exact mold design details, material, cycle parameters, and measured results are still TBD.",
    role: "Injection molding process review, part documentation, gate/runner analysis, manufacturing coursework",
    tools: ["Injection molding", "mold tooling", "gate and runner analysis", "part inspection", "process documentation"],
    timeline: "TBD",
    outcome: "Gate and runner detail documented; full molding process results and final part notes TBD.",
    pageStyle: 1,
    image: "projects/injection-molded-screwdriver/media/injectionScrewdriverGateRunnerCloseup.jpg",
    detailImage: "projects/injection-molded-screwdriver/media/injectionScrewdriverGateRunnerCloseup.jpg",
    imageAlt: "Close-up of the gate and runner area on an injection-molded screwdriver",
    placeholder: "[Add injection-molded screwdriver hero image]",
    mediaPlaceholder: "[Add injection-molded screwdriver detail media]",
    url: "projects/injection-molded-screwdriver/index.html"
  },
  {
    id: "rail-saw-jig",
    order: 10,
    featured: true,
    title: "Acrylic Sheet Track Saw Jig",
    tag: "Personal Build / Fixture Design / Rapid Prototyping",
    description:
      "Designed a 3D-printed adjustable stop that reduced repeated measurement steps when cutting acrylic sheets to fixed dimensions.",
    story:
      "I designed an adjustable stop for a track saw to speed up repeated acrylic sheet cuts. Instead of remeasuring before each cut, the jig set a repeatable stop position for the required dimensions. The design needed to adjust between 4 and 6 inches while resisting accidental movement. I used a wing nut and embedded nut to apply clamping tension, then iterated through rapid prototypes to solve printer-related adhesion issues without deforming the thin-walled PLA during nut insertion.",
    role: "CAD design, rapid prototyping, embedded hardware design, fixture iteration, functional testing",
    tools: ["3D printing", "PLA", "embedded nuts", "wing nut", "track saw", "CAD (TBD)", "heat gun", "standard hardware"],
    timeline: "TBD",
    outcome: "Functional adjustable stop created for repeated acrylic sheet cuts; cycle-time improvement not quantified.",
    pageStyle: 1,
    image: "",
    detailImage: "",
    imageAlt: "Adjustable 3D-printed stop fixture mounted to a track saw guide",
    placeholder: "[Add acrylic track saw jig hero image]",
    mediaPlaceholder: "[Add acrylic track saw jig detail media]",
    url: "projects/rail-saw-jig/index.html"
  },
  {
    id: "cnc-router-trophies",
    order: 11,
    featured: true,
    title: "CNC Router Trophies",
    tag: "Manufacturing / CNC Router / Production",
    description:
      "Operated a CNC router production workflow for custom engraved acrylic and hardwood track-and-field awards.",
    story:
      "I oversaw CNC router production for custom engraved track-and-field trophies and award blocks in acrylic and hardwoods. The work included creating toolpaths from source files, homing and fixturing stock, supervising machine runs, and keeping turnover time low during high-volume award production. Material selection affected engraving quality. Medium density fiberboard could not hold fine text details reliably, while poplar produced better detail. Acrylic award blocks also required fast setup turnover because roughly 300 blocks were needed within one month.",
    role: "CNC router operation, toolpath preparation, fixturing, homing, machine supervision, process improvement",
    tools: ["CNC router", "G-code", "probing", "acrylic", "hardwood", "poplar", "engraving workflows", "work coordinate setup"],
    timeline: "2018 to 2023",
    outcome: "Produced custom awards at scale, including high-volume acrylic award block runs; exact total quantity from resume: over 1000 custom engraved trophies.",
    pageStyle: 0,
    image: "",
    detailImage: "",
    imageAlt: "Custom engraved acrylic award block",
    placeholder: "[Add CNC router trophy hero image]",
    mediaPlaceholder: "[Add CNC router trophy detail media]",
    url: "projects/cnc-router-trophies/index.html"
  },
  {
    id: "bridge-less-running-camp-stencil",
    order: 12,
    featured: true,
    title: "Bridge-Less Running Camp Stencil",
    tag: "Personal Build / DFM / Laser Cutting",
    description:
      "Designed a spray-paint stencil that preserved internal letter features without visible 2D bridges in the final shirt graphic.",
    story:
      "I created a stencil for ink-sprayed running camp shirts using a custom logo that needed enclosed letter features, such as the centers of a and o, to stay in place without visible flat bridges. The project had to be completed before camp started, so prototyping and finishing were constrained by a firm deadline. The solution used three-dimensional bridge features that held the internal geometry in place while still allowing spray coverage around the bridges. The design balanced manufacturability, logo appearance, and schedule risk.",
    role: "Stencil design, DFM, rapid iteration, schedule-driven prototyping, Fusion 360 modeling",
    tools: ["Fusion 360", "stencil fabrication process TBD", "spray ink/paint", "DFM", "prototyping"],
    timeline: "TBD",
    outcome: "Completed stencil design before camp; final shirt output details TBD.",
    pageStyle: 1,
    image: "",
    detailImage: "",
    imageAlt: "Stencil design with raised bridge features holding internal letter geometry in place",
    placeholder: "[Add bridge-less stencil hero image]",
    mediaPlaceholder: "[Add bridge-less stencil detail media]",
    url: "projects/bridge-less-running-camp-stencil/index.html"
  },
  {
    id: "personal-cuttingboard-project",
    order: 13,
    featured: true,
    title: "Custom Cutting Board and Chopsticks",
    tag: "Personal Build / Laser Cutting / CAD",
    description:
      "Laser-engraved a cutting board and chopstick set using USGS topographic data, CAD artwork, and material-specific laser settings.",
    story:
      "I customized a cutting board and chopstick set with a topographic map of San Luis Obispo, a Cal Poly insignia, and a SolidWorks engineering drawing of a steak with section view and bill of materials. The project required converting geographic and CAD data into laser-ready vector and raster operations. The main challenge was tuning laser power and speed for different natural materials. Bamboo is non-homogeneous because it is compressed from many fibers, so engraving depth varied unless settings were adjusted. The hardwood cutting board also required test cuts on similar material to choose between line engraving and rasterization based on detail size.",
    role: "Laser engraving, vector data preparation, CAD drawing, material testing, feed/power selection",
    tools: ["Laser cutter", "USGS vector/topographic data", "SolidWorks", "bamboo", "acacia/hardwood cutting board", "line engraving", "raster engraving"],
    timeline: "TBD",
    outcome: "Completed customized cutting board and chopstick set; final settings and material test data TBD.",
    pageStyle: 0,
    image: "",
    detailImage: "",
    imageAlt: "Laser-engraved cutting board with topographic data and Cal Poly insignia",
    placeholder: "[Add cutting board and chopsticks hero image]",
    mediaPlaceholder: "[Add cutting board and chopsticks detail media]",
    url: "projects/personal-cuttingboard-project/index.html"
  },
  {
    id: "3d-printed-doughnut-cutter",
    order: 14,
    featured: true,
    title: "3D-Printed Doughnut Cutter",
    tag: "Personal Build / CAD / 3D Printing",
    description:
      "Designed an iterative 3D-printed doughnut cutter and published it as a first Thingiverse post with downloads and makes.",
    story:
      "I modeled a doughnut cutter in Fusion 360 to simplify baking and used the project to practice iterative CAD design. The final design came from testing earlier versions and refining the features that controlled cutting performance and usability. This was my first Thingiverse post with meaningful downloads and user makes, giving the project a small external validation beyond personal use.",
    role: "CAD modeling, iteration, 3D printing, prototype testing, public file publishing",
    tools: ["Fusion 360", "3D printing", "Thingiverse", "prototype iteration"],
    timeline: "TBD",
    outcome: "Published on Thingiverse with downloads and makes; exact analytics TBD.",
    pageStyle: 0,
    image: "",
    detailImage: "",
    imageAlt: "Fusion 360 model of a doughnut cutter",
    placeholder: "[Add doughnut cutter hero image]",
    mediaPlaceholder: "[Add doughnut cutter detail media]",
    url: "projects/3d-printed-doughnut-cutter/index.html"
  },
  {
    id: "ring-gear",
    order: 5,
    featured: true,
    title: "Ring Gear EDM Project",
    tag: "Manufacturing / WEDM / Gear Cutting",
    description:
      "Cut a ring gear profile from slug stock using an EDM workflow, with process media showing the slug, lead-in, tooth form, and finished geometry.",
    story:
      "This project is inferred from the current ring gear media folder. The image sequence shows starting slug material, an EDM lead-in/cut feature, close-up tooth geometry, and finished isometric views of the ring gear. I treated the project as a Wire EDM process and inspection story: prepare the stock, plan the cut path, manage the lead-in and tooth form, then document the finished ring gear. Exact course context, drawing requirements, tolerances, material, and inspection results are still TBD.",
    role: "EDM setup, process planning, workholding, manufacturing documentation, visual inspection",
    tools: ["Wire EDM", "gear profile cutting", "workholding", "setup planning", "visual inspection", "process documentation"],
    timeline: "TBD",
    outcome: "Ring gear cut and documented with slug, lead-in, close-up, and finished-part media; tolerance results TBD.",
    pageStyle: 1,
    image: "projects/ring-gear/media/ringgearIsometric.jpg",
    detailImage: "projects/ring-gear/media/ringgearCloseup.jpg",
    imageAlt: "Finished ring gear shown after EDM cutting",
    placeholder: "[Add ring gear hero image]",
    mediaPlaceholder: "[Add ring gear detail media]",
    url: "projects/ring-gear/index.html"
  },
  {
    id: "bt-speaker",
    order: 7,
    featured: true,
    title: "Bluetooth Speaker",
    tag: "Personal Build / CAD / Product Design",
    description:
      "Modeled a Bluetooth speaker concept with an isometric design view ready for future build, electronics, and enclosure documentation.",
    story:
      "This project is inferred from the current Bluetooth speaker media folder, which currently contains an isometric product-style image. I set the page up as a clean project entry so future photos, CAD exports, electronics notes, enclosure iterations, and build results can be added without restructuring the site. The current story should be treated as a placeholder scaffold until the design goals, speaker hardware, manufacturing method, and final performance notes are filled in.",
    role: "CAD modeling, product concept development, enclosure planning, documentation",
    tools: ["CAD", "product design", "speaker enclosure design", "electronics integration TBD", "manufacturing method TBD"],
    timeline: "TBD",
    outcome: "Initial speaker concept media added; enclosure, electronics, build, and performance details TBD.",
    pageStyle: 1,
    image: "projects/bt-speaker/media/btSpeakerIsometric.jpg",
    detailImage: "projects/bt-speaker/media/btSpeakerIsometric.jpg",
    imageAlt: "Isometric view of a Bluetooth speaker project concept",
    placeholder: "[Add Bluetooth speaker hero image]",
    mediaPlaceholder: "[Add Bluetooth speaker detail media]",
    url: "projects/bt-speaker/index.html"
  },
  {
    id: "manufacturing-class-project-highlights",
    order: 15,
    featured: false,
    title: "Manufacturing Class Project Highlights",
    tag: "Course / Manufacturing Processes",
    description:
      "Coursework summary covering metrology, electronics manufacturing, joining, machining, molding, laser cutting, and waterjet cutting.",
    story:
      "This section can serve as a compact summary of manufacturing coursework or be split into separate portfolio pages. The work includes metrology programming on Zeiss Duramax, Brown and Sharpe, OGP SmartScope, and MicroVu Vertex systems; Gauge R&R; GD&T; profilometer and optical flat measurements; basic electronics manufacturing; sheet metal; welding and joining; CNC programming; injection molding and mold design; laser cutting; and waterjet cutting. Because the source portfolio lists these as class project highlights instead of fully described projects, the best next step is to decide which items deserve standalone pages and add one or two concrete deliverables for each.",
    role: "Student engineer, machine operator, inspection programmer, electronics assembler, manufacturing process learner",
    tools: ["Zeiss Duramax", "Brown and Sharpe CMM", "OGP SmartScope", "MicroVu Vertex", "Gauge R&R", "GD&T", "profilometer", "optical flats", "Arduino", "soldering", "sheet metal", "welding", "Mastercam", "HSMWorks", "Fusion 360", "injection molding", "laser cutting", "waterjet cutting"],
    timeline: "TBD",
    outcome: "Coursework completed or in progress; individual project outcomes TBD.",
    pageStyle: 0,
    image: "",
    detailImage: "",
    imageAlt: "Representative manufacturing coursework image",
    placeholder: "[Add manufacturing class highlights hero image]",
    mediaPlaceholder: "[Add manufacturing class highlights media]",
    url: "projects/manufacturing-class-project-highlights/index.html"
  }
];
