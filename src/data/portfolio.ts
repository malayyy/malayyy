import type { Profile, AboutContent, Project, TechStackGroup, ExperienceEntry } from "../types.ts";

export const profile: Profile = {
  name: "Malay Moliya",
  title: "Software Engineer · Zoho Developer · Founder",
  positioning: "I build connected business systems — from Zoho CRM and custom Creator applications to Node.js APIs, integrations and automation that make day-to-day operations work better.",
  availability: "Building Chopstick Integrations · Open to interesting collaborations",
  email: "malay@chopstickintegrations.com",
  github: "https://github.com/malayyy",
  linkedin: "https://www.linkedin.com/",
};

export const about: AboutContent = {
  paragraphs: [
    "I'm a software engineer and builder working at the intersection of business operations and software. My work spans Zoho CRM, Creator, Analytics and Flow, backend development with Node.js, and integrations that connect the tools teams already rely on.",
    "I like getting close to the actual workflow before writing code: understand where the handoffs break, what information gets lost, and what the people using the system need. Then build something practical, maintainable and clear.",
  ],
  learning: [
    "System architecture and reliable integrations",
    "Applied AI for useful business workflows",
    "Better product thinking, delivery and engineering craft",
  ],
  interestedIn: [
    "Hard integration and automation problems",
    "Building useful products with thoughtful teams",
    "Turning messy business processes into clear systems",
  ],
};

export const projects: Project[] = [
  {
    id: "chopstick",
    name: "Chopstick Integrations",
    tagline: "An integration and automation studio connecting CRM, business applications, data and AI workflows.",
    category: "Full-Stack",
    technologies: ["Zoho CRM", "Zoho Creator", "Deluge", "Node.js", "APIs", "Automation"],
    contribution: "Founder and engineer building the studio's products, delivery systems and digital presence.",
    links: [{ label: "Visit Chopstick", url: "https://chopstickintegrations.com", type: "demo" }, { label: "GitHub", url: "https://github.com/malayyy/chopstick-integrations", type: "github" }],
    showcaseTechnologies: ["Zoho ecosystem", "Node.js", "REST APIs", "Automation", "AI workflows"],
    engineeringHighlights: ["Connecting CRM, operations and reporting workflows", "Building practical automations and integrations across business tools", "Developing the studio's website and internal delivery tooling"],
    showcaseScreenshot: { src: "/project-images/chopstick.svg", alt: "Chopstick Integrations abstract project artwork", width: 1200, height: 680 },
    detailScreenshots: [],
    featured: true,
    detail: { sections: [
      { heading: "The idea", body: "Businesses often run on disconnected tools and manual handoffs. Chopstick focuses on connecting those systems so information can move through the business with less friction." },
      { heading: "What I build", body: "CRM implementations, custom applications, integrations, analytics workflows and automation — shaped around how each team actually works." },
      { heading: "Current focus", body: "Growing the studio, improving delivery processes and exploring practical AI-assisted workflows for customer-facing and internal operations." }
    ], features: ["CRM implementation and customisation", "API and application integrations", "Workflow automation", "Analytics and operational visibility"], results: "A growing integration studio and a platform for delivering practical systems work." }
  },
  {
    id: "zoho-operations",
    name: "CRM & Operations Systems",
    tagline: "Custom Zoho systems that bring lead management, business processes and reporting into one connected workflow.",
    category: "Full-Stack",
    technologies: ["Zoho CRM", "Zoho Creator", "Deluge", "Zoho Analytics", "Zoho Flow", "APIs"],
    contribution: "Designed and implemented CRM workflows, custom applications, automation and reporting for business teams.",
    links: [],
    showcaseTechnologies: ["Zoho CRM", "Creator", "Deluge", "Analytics", "Flow"],
    engineeringHighlights: ["CRM configuration, custom modules and Blueprint workflows", "Creator applications and Deluge automation", "CRM-to-business-app integrations and operational dashboards"],
    showcaseScreenshot: { src: "/project-images/zoho.svg", alt: "Abstract CRM operations system artwork", width: 1200, height: 680 },
    detailScreenshots: [],
    detail: { sections: [
      { heading: "Problem", body: "Teams can lose visibility when customer records, operational processes and reporting live in separate tools." },
      { heading: "Approach", body: "Model the workflow, configure CRM around the team's process, build custom functions and applications where needed, then surface useful operational information through reporting." },
      { heading: "Engineering", body: "Work includes Deluge scripting, custom Creator interfaces, workflow automation, APIs and connections across Zoho applications." }
    ], features: ["CRM workflow design", "Custom Creator applications", "Deluge functions and automation", "Analytics and reporting"] }
  },
  {
    id: "reviews",
    name: "Multi-location Google Reviews",
    tagline: "A Google Reviews integration supporting review workflows across 80+ franchise locations.",
    category: "Backend Systems",
    technologies: ["Node.js", "Google APIs", "REST APIs", "Automation"],
    contribution: "Built the integration and workflow connecting location-level review data.",
    links: [],
    showcaseTechnologies: ["Node.js", "Google APIs", "REST", "Automation"],
    engineeringHighlights: ["Worked with Google review and location data", "Connected multiple franchise locations through a shared workflow", "Reduced fragmentation in location-level review management"],
    showcaseScreenshot: { src: "/project-images/reviews.svg", alt: "Abstract multi-location review system artwork", width: 1200, height: 680 },
    detailScreenshots: [],
    detail: { sections: [
      { heading: "Context", body: "Franchise operations need a consistent way to work with review information across many separate locations." },
      { heading: "Implementation", body: "Built a Google Reviews integration designed around location-level data and a shared operating workflow." },
      { heading: "Scope", body: "The integration supported more than 80 franchise locations." }
    ], results: "A connected review workflow covering 80+ locations." }
  },
  {
    id: "immigration",
    name: "Immigration Platform",
    tagline: "A government immigration platform built around case management, document workflows and public-facing services.",
    category: "Full-Stack",
    technologies: ["Zoho CRM", "Zoho Creator", "Zoho WorkDrive", "Deluge"],
    contribution: "Contributed architecture and implementation across the Zoho-based platform.",
    links: [],
    showcaseTechnologies: ["Zoho CRM", "Creator", "WorkDrive", "Deluge"],
    engineeringHighlights: ["Case and application management workflows", "Document handling connected through WorkDrive", "Public-facing portal experience using Creator"],
    showcaseScreenshot: { src: "/project-images/immigration.svg", alt: "Abstract public service platform artwork", width: 1200, height: 680 },
    detailScreenshots: [],
    detail: { sections: [
      { heading: "Overview", body: "A national immigration platform requiring connected case records, document management and a public-facing service layer." },
      { heading: "Technology", body: "The solution used Zoho CRM, Zoho Creator and Zoho WorkDrive as connected parts of the system." },
      { heading: "Contribution", body: "Worked on architecture and implementation across the platform. Specific project details are kept high-level here." }
    ] }
  },
  {
    id: "backend",
    name: "Backend & API Engineering",
    tagline: "Backend services and integration work built around Node.js, Express and MongoDB.",
    category: "Backend Systems",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "REST APIs"],
    contribution: "Designed and developed backend APIs, authentication flows and service integrations.",
    links: [{ label: "GitHub profile", url: "https://github.com/malayyy", type: "github" }],
    showcaseTechnologies: ["Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    engineeringHighlights: ["REST API design and implementation", "Authentication and authorisation flows", "Data modelling and third-party API integrations"],
    showcaseScreenshot: { src: "/project-images/backend.svg", alt: "Abstract backend engineering artwork", width: 1200, height: 680 },
    detailScreenshots: [],
    detail: { sections: [
      { heading: "Focus", body: "Building backend services that expose clear APIs and connect products to the systems they depend on." },
      { heading: "Tools", body: "Node.js, Express, MongoDB, Mongoose, JWT-based authentication and third-party APIs." }
    ] }
  }
];

export const techStack: TechStackGroup[] = [
  { category: "Languages", items: [{ name: "JavaScript" }, { name: "TypeScript" }, { name: "Deluge" }, { name: "HTML / CSS" }] },
  { category: "Frontend", items: [{ name: "React" }, { name: "Vite" }, { name: "Tailwind CSS" }, { name: "EJS" }] },
  { category: "Backend", items: [{ name: "Node.js", note: "Core" }, { name: "Express.js" }, { name: "REST APIs" }, { name: "JWT" }] },
  { category: "Databases", items: [{ name: "MongoDB" }, { name: "Mongoose" }, { name: "PostgreSQL" }] },
  { category: "Infrastructure & Tools", items: [{ name: "Zoho CRM" }, { name: "Zoho Creator" }, { name: "Zoho Analytics" }, { name: "Zoho Flow" }, { name: "n8n / Make" }, { name: "Git / GitHub" }] },
  { category: "Integrations", items: [{ name: "Google APIs" }, { name: "Webhooks" }, { name: "Twilio" }, { name: "Meta APIs" }] }
];

export const experience: ExperienceEntry[] = [
  {
    id: "chopstick-founder", type: "experience", role: "Founder & Software Engineer", org: "Chopstick Integrations", period: "2026 – Present", location: "Surat, India",
    description: ["Building an integration and automation studio focused on connected CRM, business applications and AI-enabled workflows.", "Working directly with businesses on process discovery, system design and implementation.", "Developing the studio's digital presence, delivery tooling and technical solutions."],
    tags: ["Zoho", "Node.js", "Automation", "Integrations", "AI"]
  },
  {
    id: "software-engineering", type: "experience", role: "Software Engineer", org: "Vision Infotech", period: "Previous experience", location: "India",
    description: "Worked across Node.js development and the Zoho ecosystem, including CRM customisation, Creator applications, Deluge scripting, reporting and integrations.",
    tags: ["Node.js", "Zoho CRM", "Zoho Creator", "Deluge", "APIs"]
  },
  {
    id: "education", type: "education", role: "Diploma / Bachelor's pathway in Computer Science Engineering", org: "Computer Science Engineering", period: "Ongoing", location: "India",
    description: "Continuing formal study alongside hands-on software engineering and client delivery."
  }
];
