export type ExperienceRole = {
  dates: string;
  title: string;
  highlights: string[];
  tags: string[];
};

export type ExperienceItem = {
  id: string;
  company: string;
  location: string;
  roles: ExperienceRole[];
};

export type AwardItem = {
  year: string;
  title: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

// REPLACE: paste your resume experience into this shared list.
export const experiences: ExperienceItem[] = [
  {
    id: "current-role",
    company: "Homestead Robotics - FIRST Robotics Competition Team 670",
    location: "Cupertino, CA",
    roles: [
      {
        dates: "2025 — 2026",
        title: "President",
        highlights: [
          "Led executive and full-team meetings to align the team around annual priorities",
          "Promoted team transparency by restructuring communication channels and instituting open goal-setting meetings",
          "Mentored younger officers and members throughout the year to prepare future team leadership",
        ],
        tags: ["Leadership", "Collaboration"],
      },
      {
        dates: "2023 — 2025",
        title: "Secretary",
        highlights: [
          "Maintained team calendar, communication channels, and online archives",
          "Coordinated competition travel logistics, including booking flights, hotels, and transportation",
        ],
        tags: ["Organization", "Communication"],
      },
      {
        dates: "2022 — 2026",
        title: "Mechanical Team",
        highlights: [
          "Designed and fabricated robot subsystems using CAD modeling and CNC/manual machining",
          "Trained new members in CAD, machining processes, and shop safety protocols",
        ],
        tags: ["CAD", "Machining", "Mentorship"],
      },
    ],
  },
  {
    id: "previous-role",
    company: "Homestead Programming Club - Girls Who Code Branch",
    location: "Cupertino, CA",
    roles: [
      {
        dates: "2025 — 2026",
        title: "President",
        highlights: [
          "Grew and sustained member engagement by shifting to a weekly workshop-based structure",
          "Led technical workshops on AI in transportation, guiding members through implementing core components of a bike-routing app (e.g., routing algorithms, route optimization, location input features)",
        ],
        tags: ["Leadership", "Python"],
      },
      {
        dates: "2024 — 2025",
        title: "Activities Director",
        highlights: [
          "Led technical workshops, teaching members basic programming through game development (e.g., implementing game logic, user input handling, sprite animation)",
        ],
        tags: ["Leadership", "Python"],
      },
    ],
  },
  // {
  //   id: "earlier-role",
  //   company: "Organization Name",
  //   location: "City, State",
  //   roles: [
  //     {
  //       dates: "20XX — 20XX",
  //       title: "Earlier Role or Internship",
  //       highlights: [
  //         "Include one strong responsibility or result rather than listing every task.",
  //         "This can also hold education, freelance work, or a formative creative chapter.",
  //       ],
  //       tags: ["Learning", "Making", "Growing"],
  //     },
  //   ],
  // },
  // {
  //   id: "freelance-chapter",
  //   company: "Independent / Client Name",
  //   location: "Remote",
  //   roles: [
  //     {
  //       dates: "20XX — 20XX",
  //       title: "Freelance or Contract Role",
  //       highlights: [
  //         "Describe the types of clients, teams, or challenges you supported.",
  //         "Mention a result that shows your independence, adaptability, or range.",
  //       ],
  //       tags: ["Freelance", "Creative", "Delivery"],
  //     },
  //   ],
  // },
  // {
  //   id: "education-chapter",
  //   company: "School or Institution",
  //   location: "City, State",
  //   roles: [
  //     {
  //       dates: "20XX — 20XX",
  //       title: "Degree, Program, or Fellowship",
  //       highlights: [
  //         "Add a focus area, thesis, award, or especially meaningful body of work.",
  //         "Include one detail that connects this chapter to the work you do today.",
  //       ],
  //       tags: ["Education", "Practice", "Foundation"],
  //     },
  //   ],
  // },
];

// REPLACE: add awards, honors, scholarships, or notable recognition here.
export const awards: AwardItem[] = [
  {
    year: "2026",
    title: "William T. Pascoe III Memorial Engineering Scholarship (\$10000)",
  },
  {
    year: "2026",
    title: "UIUC Kaiser Aluminum Scholarship (\$3000)",
  },
  {
    year: "2026",
    title: "FIRST Robotics Competition Sacramento District Event Quality Award",
  },
  {
    year: "2026",
    title: "FIRST Robotics Competition Half Moon Bay District Event Innovation in Control Award",
  },
  {
    year: "2026",
    title: "California Seal of Biliteracy - English \& Japanese",
  },
  {
    year: "2026",
    title: "National Merit Scholarship Finalist",
  },
  {
    year: "2026 2025",
    title: "Scholar Athlete - Varsity Girls Golf",
  },
   {
    year: "2024",
    title: "FIRST Robotics Competition Arizona East Regional Winner",
  },
];

// REPLACE: organize the skills from your resume into a few readable groups.
export const skillGroups: SkillGroup[] = [
  {
    category: "Design & Fabrication",
    skills: ["CAD/CAM (Fusion360, Onshape, Creo)", "CNC Milling", "Manual Machining (Mill, Lathe)"],
  },
  {
    category: "Programming",
    skills: ["Java", "Python"],
  },
  {
    category: "Other",
    skills: ["Japanese", "Digital Illustration"],
  },
];
