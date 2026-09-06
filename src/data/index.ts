export const profile = {
  name: "Siddanth Reddy Katipally",
  short: "Siddanth Reddy",
  role: "Software Developer",
  company: "Gridmetry GmbH",
  location: "India — Remote",
  email: "siddanth6365@gmail.com",
  site: "https://siddanth.dev",
  resume: "/siddanth-reddy-resume.pdf",
  bio: [
    "I'm a software developer at an startup, building full-stack applications — frontend dashboards and the backend systems behind them.",
    "Outside work I'm just curious about tech and usually building something with AI.",
  ],
} as const;

// key -> lucide icon is mapped in Socials.tsx, so this file stays React-free
export const socials = [
  {
    key: "github",
    label: "GitHub",
    handle: "siddanth-6365",
    href: "https://github.com/siddanth-6365",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "siddanth-reddy",
    href: "https://www.linkedin.com/in/siddanth-reddy/",
  },
  {
    key: "x",
    label: "X",
    handle: "Siddanth6365",
    href: "https://x.com/Siddanth6365",
  },
  {
    key: "mail",
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
  },
] as const;

type Role = { title: string; period: string; bullets: string[] };

export const experience: {
  company: string;
  location: string;
  roles: Role[];
}[] = [
  {
    company: "Gridmetry GmbH",
    location: "Remote",
    roles: [
      {
        title: "Software Developer",
        period: "Jan 2026 — Present",
        bullets: [
          "Integrated a new mining site with an external energy-market provider in Go, implementing OAuth authentication, REST polling and acknowledgment flows, and control-plane routing into the production pipeline.",
          "Built a full-stack bidding platform on a React spreadsheet-style UI and FastAPI services, supporting bid creation, editing, deletion, real-time provider submission, DST and holiday deadline enforcement, deterministic bid identifiers, and scheduled AWS Lambda processing.",
        ],
      },
      {
        title: "Software Developer Intern",
        period: "Jun — Dec 2025",
        bullets: [
          "Developed a client dashboard monitoring mining sites across clients, streaming performance data over SSE and serving cached 15-minute, hourly and daily views through TanStack React Query, interactive data grids and trend charts.",
          "Automated accounting KPI calculations for sites across multiple time resolutions by ingesting API, email and telemetry data through scheduled AWS Lambda and ECS jobs, with PostgreSQL persistence, CloudWatch alarms and data-consistency checks.",
        ],
      },
    ],
  },
];

export const earlier: { company: string; role: string; period: string }[] = [
  {
    company: "Maxint, Inc",
    role: "Backend Developer Intern",
    period: "Sep 2024 — Jan 2025",
  },
  {
    company: "Nomorede",
    role: "Full Stack Developer Intern",
    period: "Jul — Sep 2024",
  },
  {
    company: "ONBO",
    role: "Frontend Developer Intern",
    period: "Aug — Dec 2023",
  },
];

export const featured: {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  bullets: string[];
  repo: string;
  live?: string;
  video?: string;
}[] = [
  {
    slug: "attention-router",
    title: "Attention Router",
    tagline: "Notification triage that learns what each recipient actually does.",
    stack: ["Python", "FastAPI", "BM25", "LLMs"],
    bullets: [
      "Classifies messages across three modalities — text, images and voice — into notify, digest or mute, using recipient-specific behavioral history and tiered BM25 retrieval.",
      "A deterministic safety layer catches phishing, brand impersonation, credential requests and prompt-injection attempts before the language model is ever invoked.",
      "Production-ready LLM pipeline: schema-validated outputs, citation extraction, retry and fallback handling, provider-pluggable models and offline tests in CI.",
    ],
    repo: "https://github.com/siddanth-6365/attention-router",
  },
  {
    slug: "vercellite",
    title: "VercelLite",
    tagline: "Deploy a React app from a repo URL, the way Vercel does it.",
    stack: [
      "Node.js",
      "Redis Pub/Sub",
      "Docker",
      "AWS ECS",
      "S3",
      "PostgreSQL",
      "Prisma",
    ],
    bullets: [
      "Builds React applications from GitHub repository URLs inside isolated Docker containers and publishes them on hosted URLs with custom-domain support and request analytics.",
      "Deployment orchestration on Node.js and AWS ECS, Redis Pub/Sub for real-time build logs, PostgreSQL with Prisma for project and deployment persistence.",
      "A reverse proxy routes incoming requests to the correct deployed assets in Amazon S3.",
    ],
    repo: "https://github.com/siddanth-6365/vercelLite",
    video: "https://www.youtube.com/watch?v=8LnTBE9aGmk",
  },
  {
    slug: "trackit-ai",
    title: "TrackIt-AI",
    tagline: "Photograph a receipt, then ask questions about your spending.",
    stack: ["Python", "Next.js", "Supabase", "OCR", "LLMs"],
    bullets: [
      "Turns receipt images into structured expense data through OCR and LLM parsing, with automatic categorization.",
      "Stores everything in Supabase Postgres and answers natural-language questions about spending via Text-to-SQL.",
    ],
    repo: "https://github.com/siddanth-6365/TrackIt-AI",
    video: "https://www.youtube.com/watch?v=ki9gguv20kc",
  },
  {
    slug: "cctv-ivr",
    title: "CCTV Intelligent Video Recording",
    tagline: "Record only the footage worth keeping.",
    stack: ["Python", "YOLOv8", "OpenCV"],
    bullets: [
      "Cuts CCTV storage overhead by recording only activity-rich segments instead of continuous footage.",
      "Frame subtraction handles cheap motion detection; YOLOv8 object detection confirms significant events before recording starts.",
    ],
    repo: "https://github.com/siddanth-6365/Intelligent_Video_Recording_for_CCTV",
  },
];

export const otherWork: {
  title: string;
  note: string;
  repo: string;
  live?: string;
}[] = [
  {
    title: "gitLite",
    note: "Git's internals rebuilt from scratch in JavaScript",
    repo: "https://github.com/siddanth-6365/gitLite",
  },
  // {
  //   title: "pySql",
  //   note: "Slack bot that answers database questions in plain English",
  //   repo: "https://github.com/siddanth-6365/pySql",
  // },
  {
    title: "leetcode-stats-api",
    note: "LeetCode's GraphQL API, wrapped as REST",
    repo: "https://github.com/siddanth-6365/leetcode-Stats-api",
    live: "https://leetcode-rest-api.onrender.com",
  },
  {
    title: "Jaypee Maps",
    note: "Campus navigation on graph algorithms, in C++",
    repo: "https://github.com/siddanth-6365/Jaypee-Maps",
  },
  {
    title: "Prop-X",
    note: "Real-estate transactions on Ethereum",
    repo: "https://github.com/siddanth-6365/Prop-X",
  },
  {
    title: "FrescoGuard",
    note: "Crop management with ML-backed predictions",
    repo: "https://github.com/siddanth-6365/FrescoGuard",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "Go", "C/C++", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "Backend & AI",
    items: [
      "FastAPI",
      "Node.js",
      "REST APIs",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "Multimodal AI",
      "LLMs",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TanStack React Query"],
  },
  {
    label: "Databases & Infrastructure",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Linux",
      "AWS ECS",
      "ECR",
      "S3",
      "Lambda",
      "CloudWatch",
      "Terraform",
      "GitHub Actions",
      "CI/CD",
      "pytest",
    ],
  },
];

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "Jaypee Institute of Information Technology, Noida",
  period: "2022 — 2026",
};

export const achievements: { title: string; note: string; period: string }[] = [
  {
    title: "Code with Cisco 2025 Finalist",
    note: "Selected among the top 75 of 30,000+ applicants and named one of three project nominees in the code-a-thon.",
    period: "2025",
  },
];

export const community: {
  role: string;
  org: string;
  period: string;
  note: string;
}[] = [
  {
    role: "Teaching Assistant",
    org: "100xDevs Full-Stack Web Development Cohort",
    period: "Jan — Sep 2024",
    note: "Resolved technical questions and created learning resources across full-stack topics.",
  },
  {
    role: "Core Team Member",
    org: "Google Developer Student Club, JIIT Noida",
    period: "Aug 2023 — Jul 2024",
    note: "Organized technical events and delivered frontend development workshops.",
  },
];
