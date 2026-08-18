import { BookMarked, FolderGit2, House, Mail } from "lucide-react";
import type React from "react";

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/ui/brand-icons";

type SocialIcon = React.ComponentType<{ className?: string }>;

export interface linksType {
  name: string;
  link: string;
}

/** Site-wide identity used by the shell (breadcrumb, footer, command bar) and by SEO. */
export const Site = {
  name: "Soham Maury",
  domain: "itzsoham.vercel.app",
  /** Absolute origin. Set NEXT_PUBLIC_SITE_URL per-environment; this is the prod fallback. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://itzsoham.vercel.app",
  role: "Full-Stack Developer",
  tagline:
    "Three years of experience building end-to-end web apps — React/Next.js on the front, Node.js/Prisma on the back — across enterprise SaaS, ERP systems, and AI-powered platforms.",
  bio: "Full-stack developer with 3 years of experience building React/Next.js frontends and Node.js/Prisma backends across enterprise SaaS, ERP systems, and AI-powered platforms.",
  greeting: "Heyy!",
  location: "Ahmedabad, IN",
  /** drives the status dot in the hero front-matter and the sidebar card */
  openToWork: true,
  /** the short stack line in the hero front-matter — the headline six, not every skill */
  stack: ["TypeScript", "React", "Next.js", "Node.js", "Prisma", "PostgreSQL"],
  /**
   * Path to the résumé in /public, e.g. "/soham-maury-resume.pdf". While this is
   * null the Résumé buttons don't render at all — drop the PDF in and set this,
   * and it lights up in the hero and the sidebar card.
   */
  resume: null as string | null,
  visitorCount: 1024, // static placeholder — swap for a real Supabase/KV count later
  avatar: "/avatar7.png",
  builtWith: ["Next.js", "Tailwind", "Supabase"],
};

export interface SocialLink {
  name: string;
  url: string;
  icon: SocialIcon;
  /** brand accent used for the icon tile */
  color: string;
}

export const Socials: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/itzsoham",
    icon: GitHubIcon,
    color: "#181717",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sohammaury/",
    icon: LinkedInIcon,
    color: "#0A66C2",
  },
  {
    name: "X",
    url: "https://x.com/sohammaury",
    icon: XIcon,
    color: "#000000",
  },
  {
    name: "Email",
    url: "mailto:sohammaury@gmail.com",
    icon: Mail,
    color: "#3b82f6",
  },
];

/** nav entries — `icon` is rendered by the notch navbar and the mobile menu */
export const Links: { name: string; link: string; icon: SocialIcon }[] = [
  {
    name: "Home",
    link: "/",
    icon: House,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: FolderGit2,
  },
  {
    name: "Resources",
    link: "/resources",
    icon: BookMarked,
  },
  // {
  //   name: "Etc",
  //   link: "/etc",
  //   icon: Boxes,
  // },
];

export interface ExperienceEntry {
  company: string;
  href: string;
  location: string;
  title: string;
  start: string;
  end: string | null;
  /** lede shown under the title, before the bullet list */
  description: string;
  bullets: string[];
  tags: string[];
}

export const Experience: ExperienceEntry[] = [
  {
    company: "Neminath Technologies",
    href: "https://neminathtechnologies.com/",
    location: "Ahmedabad, India",
    title: "Frontend Lead",
    start: "May 2025",
    end: null,
    description:
      "Leading frontend development across 6+ enterprise applications — Task Management, HRM, CRM, Recruitment, and Audit platforms — serving 1,000+ active users across multiple organizations.",
    bullets: [
      "Architected Micro-Frontend modules and created 50+ reusable UI components, form builders, dashboards, and workflow modules, accelerating feature delivery across multiple products.",
      "Built a Claude Code prompt kit with adversarial review subagents and PreToolUse hooks to autonomously generate an invoice print template system, and set up CLAUDE.md scaffolding across the monorepo's backend services.",
      "Established CI-driven testing pipelines using React Testing Library and Playwright, reducing regression issues across 6+ enterprise applications and increasing release confidence.",
      "Mentored 4 interns and junior developers through code reviews and technical guidance, improving code quality and accelerating onboarding for new team members.",
    ],
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Micro-Frontends",
      "Playwright",
      "Claude Code",
    ],
  },
  {
    company: "ZenDevX Solutions Pvt. Ltd.",
    href: "https://zendevx.com",
    location: "Ahmedabad, India",
    title: "Full-Stack Developer",
    start: "Sep 2023",
    end: "Apr 2025",
    description:
      "Delivered ERP, CRM, and Inventory Management systems for 7+ clients, collaborating directly with clients to translate business requirements into production-ready solutions.",
    bullets: [
      "Designed responsive dashboards and workflow automation tools, cutting reporting time and manual errors by 30–50% for business users.",
      "Enhanced a no-code platform generating applications across 2 stacks (MERN, Next.js) with 3 database backends (MongoDB, MySQL, PostgreSQL), accelerating development through auto-generated code scaffolding.",
    ],
    tags: ["React", "Next.js", "Node.js", "MongoDB", "MySQL"],
  },
];

export interface SkillGroup {
  label: string;
  skills: string[];
}

export const SkillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
    ],
  },
  {
    label: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "tRPC",
      "Prisma",
      "WebSocket",
      "Vercel AI SDK",
      "Gemini",
    ],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Supabase"],
  },
  {
    label: "Tools & Testing",
    skills: [
      "Git",
      "Docker",
      "Vercel",
      "Playwright",
      "React Testing Library",
      "Figma",
      "Claude Code",
    ],
  },
];

/** flattened for places that just need "every skill" — SEO keywords, JSON-LD */
export const Skills = SkillGroups.flatMap((g) => g.skills);

export interface ProjectEntry {
  title: string;
  tagline: string;
  description: string;
  /** deployed URL, if there's one that's actually live right now */
  liveHref?: string;
  /** source repo URL */
  codeHref?: string;
  tags: string[];
  category: "AI" | "Web";
}

export const Projects: ProjectEntry[] = [
  {
    title: "Operato",
    tagline: "AI-powered restaurant SaaS — POS, inventory & analytics",
    description:
      "Architecting a multi-tenant SaaS platform with tenant-isolated PostgreSQL data modeling via Prisma, spanning POS, inventory, and business analytics. Ships a natural-language-to-SQL query assistant and a scheduled weekly business summary generator powered by Gemini.",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Vercel AI SDK",
      "Gemini",
      "Better Auth",
      "Razorpay",
    ],
    codeHref: "https://github.com/Itzsoham/operato",
    liveHref: "https://operato-ai.vercel.app/",
    category: "AI",
  },
  {
    title: "My Piano Diary",
    tagline: "Scheduling & billing platform for a piano teacher's studio",
    description:
      "Full-stack scheduling and billing platform built with tRPC and Prisma — timezone-aware lesson scheduling, attendance and payment tracking, and a live earnings dashboard. In active use by a piano teacher for 4+ months.",
    tags: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL"],
    codeHref: "https://github.com/Itzsoham/my-piano-diary",
    category: "Web",
  },
  {
    title: "Skillza",
    tagline:
      "Course creation & purchasing platform for instructors and students",
    description:
      "Learning management platform with instructor course creation, student purchasing, AWS-powered media storage, and course dashboards.",
    tags: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Node.js",
      "AWS S3",
      "AWS Lambda",
      "DynamoDB",
      "Clerk",
    ],
    codeHref: "https://github.com/Itzsoham/skillza",
    category: "Web",
  },
  {
    title: "MachIq",
    tagline: "AI resume & cover letter generator from a job description",
    description:
      "Generate ATS‑friendly resumes, tailored cover letters and outreach emails using Gemini AI. Sends results via email using Gmail SMTP.",
    tags: [
      "Next.js",
      "TypeScript",
      "Gemini API",
      "Nodemailer",
      "pdf-parse",
      "react-pdf",
    ],
    codeHref: "https://github.com/Itzsoham/matchiq",
    category: "AI",
  },
  {
    title: "The Royal Stay — Client",
    tagline: "Guest‑facing hotel booking portal",
    description:
      "Browse cabins/rooms and manage your own reservations with a sleek UI powered by NextAuth and React Query.",
    liveHref: "https://royalstay.vercel.app/",
    tags: ["Next.js", "TypeScript", "NextAuth", "React Query", "Tailwind CSS"],
    codeHref: "https://github.com/Itzsoham/royal-stay-client",
    category: "Web",
  },
  {
    title: "The Royal Stay — Admin",
    tagline: "Admin panel for hotel operations",
    description:
      "Companion dashboard to manage cabins, bookings, and reservations across the property.",
    tags: ["React", "Vite", "JavaScript"],
    codeHref: "https://github.com/Itzsoham/royal-stay",
    category: "Web",
  },
  {
    title: "Trackio",
    tagline: "Cloud‑deployed project management tool",
    description:
      "Task and project tracking platform with Cognito‑based authentication and multi‑tenant support, hosted on AWS.",
    tags: [
      "Next.js 15",
      "Prisma",
      "Node.js",
      "PostgreSQL",
      "AWS Cognito",
      "AWS EC2",
      "Tailwind CSS",
    ],
    codeHref: "https://github.com/Itzsoham/trackio",
    category: "Web",
  },
  {
    title: "Finex",
    tagline: "Multi‑company expense management system",
    description:
      "Track and manage expenses across multiple companies from a single dashboard.",
    tags: ["React", "Vite", "JavaScript"],
    codeHref: "https://github.com/Itzsoham/finex-main",
    category: "Web",
  },
  {
    title: "Luxara",
    tagline: "E‑commerce platform with admin panel",
    description:
      "Full‑stack storefront paired with an admin UI for product and order management.",
    tags: ["React", "Vite", "JavaScript"],
    codeHref: "https://github.com/Itzsoham/luxara-old",
    category: "Web",
  },
  {
    title: "Spin & Win",
    tagline: "Gamified discount widget",
    description:
      "Embeddable spin‑the‑wheel interaction that reveals discount codes.",
    tags: ["JavaScript", "HTML/CSS"],
    liveHref: "https://spin-win-discount.vercel.app",
    codeHref: "https://github.com/Itzsoham/spin-win",
    category: "Web",
  },
  {
    title: "Pizza Club",
    tagline: "Food ordering practice app",
    description:
      "Pizza ordering flow with menu, cart, and checkout experience.",
    tags: ["React", "Vite"],
    codeHref: "https://github.com/Itzsoham/pizza-club",
    category: "Web",
  },
  {
    title: "SaaS Landing Page",
    tagline: "Collection of SaaS landing page designs",
    description:
      "Polished SaaS‑style landing pages built with conversion‑focused UI.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    codeHref: "https://github.com/Itzsoham/landing-page",
    category: "Web",
  },
];

export const Resources = [
  {
    title: "Cohort 3",
    description: "Cohort 3 track and some other websites that be helpful",
    link: "https://itzk1ng.notion.site/Cohort-3-0-9907fe59dd434a069347e78eac2137bd",
  },
  {
    title: "Useful Webs",
    description: "useful websites that I found randomly",
    link: "https://itzk1ng.notion.site/d87276d459e041f2a819c7e0a172e226?v=430f202f2a024e88af0848fc8c03b4fe",
  },
  {
    title: "GitHub Guide",
    description:
      "Some good profile I found on GitHub and some good resources to make your profile look good",
    link: "https://itzk1ng.notion.site/GitHub-522beac0b9af447a827f484283ed42e8?pvs=4",
  },
  {
    title: "Job hunt",
    description:
      "Notion template for job hunt track and some related resources",
    link: "https://itzk1ng.notion.site/Outreach-295ade800fd9407187bac933d358d3d1?pvs=4",
  },
  {
    title: "Design Resources",
    description:
      "Random design resources like ui library and templates that I found on the internet",
    link: "https://itzk1ng.notion.site/Design-UI-UX-13ded1985a2a80638678f295be75513c?pvs=4",
  },
  {
    title: "My Portfolio inspiration",
    description:
      "Portfolios that I found on the internet and got inspired by them",
    link: "https://itzk1ng.notion.site/Portfolio-13fed1985a2a800eae33c76a86e9fb4f?pvs=4",
  },
];
