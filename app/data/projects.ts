export type ProjectGalleryImage = {
  image: string;
  imageAlt: string;
  caption: string;
  detailLabel?: string;
  description: string[];
};

export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  tone: "blue" | "pink" | "cream";
  image: string;
  imageAlt: string;
  imageCaption: string;
  showProjectDetails?: boolean;
  details?: string[];
  gallery: ProjectGalleryImage[];
};

// REPLACE: add, remove, or edit projects here.
export const projects: Project[] = [
    {
    id: "project-one",
    number: "01",
    title: "Iroha's Keytar [WIP]",
    description:
      "Currently building a functional keytar (based on Iroha's keytar in the movie *Cosmic Princess Kaguya*) using materials from an old Yamaha keyboard",
    tags: ["Fabrication", "Electronics", "Upcycling"],
    tone: "pink",
    image: "/images/projects/currentkeytar.png", // Example: "/images/projects/project-four.jpg"
    imageAlt: "Iroha's keytar preview",
    imageCaption: "Current state of the keytar ^",
    // details: [
    //   "REPLACE: use this area for a longer project overview or case-study paragraph.",
    //   "REPLACE: describe your process, contribution, and the final result.",
    // ],
    gallery: [
      {
        image: "/images/projects/keytarinside.png",
        imageAlt: "Project Four detail one",
        detailLabel: "INSIDE_LOOK.TXT",
        caption: "^ Side view of the keytar's inside",
        description: [
          "- Built base with corrugated plastic sheets for rigidity and cardboard for easy shaping with hand tools",
          "- Designed and 3D-printed structures to raise the PCB and hold the keys together",
        ],
      },
      {
        image: "/images/projects/keytarplan.png",
        imageAlt: "Project Four detail two",
        detailLabel: "NEXT_STEPS.TXT",
        caption: "Initial sketch & plan for keytar ^",
        description: [
          "- Electronics - adding lights, buttons, & connecting everything to a Raspberry Pi",
          "- Aesthetics - painting the outside of the keytar & adding other details",
        ],
      },
    ],
  },
  {
    id: "project-two",
    number: "02",
    title: "FSAE Driver Ergonomics Jig",
    description:
      "Designed and built a full-scale Formula SAE car cockpit mockup to establish steering column, pedal box, and seat positioning",
    tags: ["Creo", "Top-down Design", "Fabrication"],
    tone: "cream",
    image: "/images/projects/ergo_jig.jpg", // Example: "/images/projects/project-three.webp"
    imageAlt: "Driver Ergonomics Jig preview",
    imageCaption: "",
    showProjectDetails: false, // Set this to false on any project to hide both detail controls.
    details: [
      "REPLACE: use this area for a longer project overview or case-study paragraph.",
      "REPLACE: describe your process, contribution, and the final result.",
    ],
    gallery: [
      {
        image: "",
        imageAlt: "Project Three detail one",
        detailLabel: "DETAIL_03_01.TXT",
        caption: "REPLACE: gallery caption one.",
        description: [
          "REPLACE: explain this stage of the project and your contribution.",
          "REPLACE: add another detail, challenge, or outcome connected to the image.",
        ],
      },
      {
        image: "",
        imageAlt: "Project Three detail two",
        detailLabel: "DETAIL_03_02.TXT",
        caption: "REPLACE: gallery caption two.",
        description: [
          "REPLACE: explain this stage of the project and your contribution.",
          "REPLACE: add another detail, challenge, or outcome connected to the image.",
        ],
      },
    ],
  },
  {
    id: "project-three",
    number: "03",
    title: "FRC Robots (2023 - 2026)",
    description:
      "Designed and fabricated robots for the 2023 to 2026 seasons of the FIRST Robotics Competition with FRC Team 670",
    tags: ["CAD", "CNC", "Manual Machining"],
    tone: "blue",
    image: "/images/projects/appa.png", // Example: "/images/projects/frc-robots.jpg"
    imageAlt: "FRC robot project preview",
    imageCaption: "^ 2026 Season Robot \"Appa\"",
    // details: [
    //   "REPLACE: expand on the problem, your role, and the design or development process.",
    //   "REPLACE: add another paragraph about important decisions, challenges, and outcomes.",
    // ],
    gallery: [
      {
        image: "/images/projects/appacad.png",
        imageAlt: "FRC robot detail image one",
        detailLabel: "2026_SEASON.TXT",
        caption: "^ Hopper subsystem of Appa",
        description: [
          "- Designed the Hopper subsystem, a storage compartment for spherical game pieces",
          "- For additional capacity, the Hopper extends 11.5\" beyond its original configuration when deployed.",
        ],
      },
      {
        image: "/images/projects/nessie.png",
        imageAlt: "2025 Season Robot image",
        detailLabel: "2025_SEASON.TXT",
        caption: "2025 Season Robot \"Nessie\" ^",
        description: [
          "- Designed the Algae Claw subsystem, a manipulator that can pick up and shoot out large playground balls",
          "- Manually milled and lathed parts for all subsystems",
        ],
      },
      {
        image: "/images/projects/suntzu.png",
        imageAlt: "2024 Season Robot image",
        detailLabel: "2024_SEASON.TXT",
        caption: "^ 2024 Season Robot \"Sun Tzu\"",
        description: [
          "- Assisted in the prototyping of the Intake subsystem, a manipulator that can pick up foam rings from the ground",
          "- Manually milled parts for all subystems",
        ],
      },
         {
        image: "/images/projects/skipper.jpeg",
        imageAlt: "2023 Season Robot image",
        detailLabel: "2023_SEASON.TXT",
        caption: "2023 Season Robot \"Skipper\" ^",
        description: [
          "- Operated a CNC router to machine parts for all subsystems",
        ],
      },
    ],
  },
  {
    id: "project-four",
    number: "04",
    title: "Free Flight Aircrafts",
    description:
      "Designed and built a series of free-flight aircrafts as part of an introductory aerospace program",
    tags: ["Aerodynamics", "Design", "Rapid Prototyping"],
    tone: "pink",
    image: "/images/projects/pizzaplane.png", // Example: "/images/projects/project-two.png"
    imageAlt: "Project Two preview",
    imageCaption: "Flying wing made from a pizza box ^",
    details: [
      "",
      "",
    ],
    gallery: [
      {
        image: "/images/projects/pizzaplanebottom.png",
        imageAlt: "Pizza box bottom image",
        detailLabel: "PIZZA_BOX_CHALLENGE.TXT",
        caption: "^ Bottom view of the pizza box flying wing",
        description: [
          "- Adapted an RC plane design into a free-flight aircraft by removing electronics and rebalancing weight distribution for stability",
        ],
      },
      {
        image: "/images/projects/cardboardplane.png",
        imageAlt: "Cardboard plane image",
        detailLabel: "CARDBOARD_CHALLENGE.TXT",
        caption: "Glider constructed from cardboard ^",
        description: [
          "- Explored airfoil geometry to generate sufficient lift for a downscaled glider design",
        ],
      },
      {
        image: "/images/projects/foamplane.jpg",
        imageAlt: "Foam plane image",
        detailLabel: "FINAL_CHALLENGE.TXT",
        caption: "^ Rubber band-powered foam plane",
        description: [
          "- Prioritized lightweight materials and iterated on flap geometry across multiple builds to fine-tune lift and stability",
        ],
      },
    ],
  },
  {
    id: "project-five",
    number: "05",
    title: "Achromatic Lens Simulation",
    description:
      "Simulated custom achromatic doublet lenses in OSLO based on OSU’s Petawatt-class laser amplifier research",
    tags: ["OSLO", "Optics"],
    tone: "cream",
    image: "/images/projects/achromaticlens.png", // Example: "/images/projects/project-three.webp"
    imageAlt: "Achromatic lens preview",
    imageCaption: "^ Lens preview in OSLO",
    showProjectDetails: false, // Set this to false on any project to hide both detail controls.
    details: [
      "REPLACE: use this area for a longer project overview or case-study paragraph.",
      "REPLACE: describe your process, contribution, and the final result.",
    ],
    gallery: [
      {
        image: "",
        imageAlt: "Project Three detail one",
        detailLabel: "DETAIL_03_01.TXT",
        caption: "REPLACE: gallery caption one.",
        description: [
          "REPLACE: explain this stage of the project and your contribution.",
          "REPLACE: add another detail, challenge, or outcome connected to the image.",
        ],
      },
      {
        image: "",
        imageAlt: "Project Three detail two",
        detailLabel: "DETAIL_03_02.TXT",
        caption: "REPLACE: gallery caption two.",
        description: [
          "REPLACE: explain this stage of the project and your contribution.",
          "REPLACE: add another detail, challenge, or outcome connected to the image.",
        ],
      },
    ],
  },
  // {
  //   id: "project-five",
  //   number: "05",
  //   title: "Project Five",
  //   description:
  //     "Explain the idea in one or two warm, direct sentences and add the most relevant tools.",
  //   tags: ["Prototype", "Testing", "Code"],
  //   tone: "blue",
  //   image: "", // Example: "/images/projects/project-five.jpg"
  //   imageAlt: "Project Five preview",
  //   imageCaption: "REPLACE: add a short caption for the main project image.",
  //   details: [
  //     "REPLACE: use this area for a longer project overview or case-study paragraph.",
  //     "REPLACE: describe your process, contribution, and the final result.",
  //   ],
  //   gallery: [
  //     {
  //       image: "",
  //       imageAlt: "Project Five detail one",
  //       caption: "REPLACE: gallery caption one.",
  //       description: [
  //         "REPLACE: explain this stage of the project and your contribution.",
  //         "REPLACE: add another detail, challenge, or outcome connected to the image.",
  //       ],
  //     },
  //     {
  //       image: "",
  //       imageAlt: "Project Five detail two",
  //       caption: "REPLACE: gallery caption two.",
  //       description: [
  //         "REPLACE: explain this stage of the project and your contribution.",
  //         "REPLACE: add another detail, challenge, or outcome connected to the image.",
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "project-six",
  //   number: "06",
  //   title: "Project Six",
  //   description:
  //     "This could hold freelance work, a personal project, or something still in progress.",
  //   tags: ["Creative", "Concept", "Making"],
  //   tone: "cream",
  //   image: "", // Example: "/images/projects/project-six.jpg"
  //   imageAlt: "Project Six preview",
  //   imageCaption: "REPLACE: add a short caption for the main project image.",
  //   details: [
  //     "REPLACE: use this area for a longer project overview or case-study paragraph.",
  //     "REPLACE: describe your process, contribution, and the final result.",
  //   ],
  //   gallery: [
  //     {
  //       image: "",
  //       imageAlt: "Project Six detail one",
  //       caption: "REPLACE: gallery caption one.",
  //       description: [
  //         "REPLACE: explain this stage of the project and your contribution.",
  //         "REPLACE: add another detail, challenge, or outcome connected to the image.",
  //       ],
  //     },
  //     {
  //       image: "",
  //       imageAlt: "Project Six detail two",
  //       caption: "REPLACE: gallery caption two.",
  //       description: [
  //         "REPLACE: explain this stage of the project and your contribution.",
  //         "REPLACE: add another detail, challenge, or outcome connected to the image.",
  //       ],
  //     },
  //   ],
  // },
];
