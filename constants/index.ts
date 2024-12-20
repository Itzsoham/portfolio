import {
  BanknoteIcon,
  BedDoubleIcon,
  BedSingleIcon,
  PizzaIcon,
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
  {
    name: "Etc",
    link: "/etc",
  },
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
    title: "Pizza Club",
    description:
      "A Simple and Cool Pizza app where you can order the diffrent types of pizza with Ordering and Cart Functionality. It's just normal frontend application.",
    href: "https://pizza--club.vercel.app/",
    icon: PizzaIcon,
    tags: ["React", "Redux", "TailwindCSS", "Frontend"],
  },
  {
    title: "Royal Stay Client",
    description:
      "A Client Side version of The Royal Stay where diffrent users come and Login with Google and book the cabins. Guest Area where they can update profile and edit bookings",
    href: "https://royal-stay.vercel.app/",
    icon: BedSingleIcon,
    tags: ["Nextjs", "Supabase", "TailwindCSS", "Full-Stack", "Authjs"],
  },
];
