import {
  BanknoteIcon,
  BedDoubleIcon,
  BedSingleIcon,
  BookOpenText,
  Crown,
  Laptop,
  PizzaIcon,
  ShoppingBag,
  ShoppingCartIcon,
} from "lucide-react";

export interface linksType {
  name: string;
  link: string;
}

export const Links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Resources",
    link: "/resources",
  },
  // {
  //   name: "Etc",
  //   link: "/etc",
  // },
];

export const Exprience = [
  {
    company: "ZenDevX",
    href: "https://zendevx.com",
    badges: [],
    location: "Ahemdabad, India",
    title: "Software Developer",
    logoUrl: "/zendevx.png",
    start: "Sep 2023",
    end: "Present",
    description:
      "Make the ERP systems for the clients and work on the projects. Mainly work with React frontend and Node.js backend with MySQL database. Daily interaction with the clients and work on different different projects. I did testing of No code tool and help it generate the right code for the project and train the other interns.",
  },
];

export const Skills = [
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Prisma",
  "Postgres",
  "MySQL",
  "MongoDB",
  "Supabase",
  "AWS",
];

export const Projects = [
  {
    title: "Royal Stay",
    description:
      "A badass hotel management system where you can book cabins, view amenities, and much more. Full-stack application with good charts and graphs.",
    href: "https://royalstay.vercel.app/",
    icon: BedDoubleIcon,
    tags: ["React", "Supabase", "TailwindCSS", "Full-Stack"],
  },
  {
    title: "Finex",
    description:
      "A Expense management system where you can handle expence of multiple users also Admin Access with Charts view amenities, and much more. Full-stack application with good charts and graphs.",
    href: "https://shreejic.vercel.app/",
    icon: BanknoteIcon,
    tags: ["React", "Supabase", "Material UI", "Full-Stack"],
  },
  {
    title: "Royal Stay Client",
    description:
      "A Client Side version of The Royal Stay where diffrent users come and Login with Google and book the cabins. Guest Area where they can update profile and edit bookings",
    href: "https://royal-stay.vercel.app/",
    icon: BedSingleIcon,
    tags: ["Nextjs", "Supabase", "TailwindCSS", "Full-Stack", "Authjs"],
  },

  {
    title: "Skillza",
    description:
      " A learning management system where you can post your own course as teacher and other user can enroll in the course and learn from it. Full-stack application with awesome UI and features.",
    href: "https://skillza.vercel.app/",
    icon: BookOpenText,
    tags: ["Next", "AWS", "Shadcn UI", "Full-Stack"],
  },
  {
    title: "Pizza Club",
    description:
      "A Simple and Cool Pizza app where you can order the diffrent types of pizza with Ordering and Cart Functionality. It's just normal frontend application.",
    href: "https://pizza--club.vercel.app/",
    icon: PizzaIcon,
    tags: ["React", "Redux", "TailwindCSS", "Frontend"],
  },
  {
    title: "Luxara - Frontend",
    description:
      "Frontend of client side of Luxara E-commerce platform where you can sell your products. Only frontend for now made in react tailwind.",
    href: "https://luxara-frontend.vercel.app/",
    icon: ShoppingBag,
    tags: ["React", "TailwindCSS", "Frontend"],
  },
  {
    title: "Portfolio",
    description:
      "My own portfolio where I showcase my projects and other stuff. It's a simple frontend application with good UI.",
    href: "https://itzsoham.vercel.app/",
    icon: Crown,
    tags: ["Next", "TailwindCSS", "Frontend"],
  },
];

export const UpcomingProjects = [
  {
    title: "Luxara - Full stack",
    description:
      "A SaSS E-commerce platform where you can sell your products and manage your inventory. Full-stack application with good charts and graphs.",
    href: "https://www.github.com/itzsoham/",
    icon: ShoppingCartIcon,
    tags: ["Next", "Prisma", "Mono repo", "TailwindCSS", "Full-Stack"],
  },
  {
    title: "Project Hunt",
    description:
      "A platform where you can post your projects and project ideas. ther user can see and upvote the project and also comment on it. Full-stack app with community and other features.",
    href: "https://www.github.com/itzsoham/",
    icon: Laptop,
    tags: ["Next", "Prisma", "Mono repo", "TailwindCSS", "Full-Stack"],
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
