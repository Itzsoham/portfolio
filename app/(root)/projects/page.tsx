import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import ProjectCard from "@/components/cards/ProjectCard";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/shell/Breadcrumb";
import Hatch from "@/components/shell/Hatch";
import Title from "@/components/ui/Title";
import { Projects as ProjectData, UpcomingProjects } from "@/constants";

const description =
  "Full-stack projects by Soham Maury — hotel management, expense tracking, an LMS, and e-commerce. Built with React, Next.js, Supabase, Node.js and AWS. Most are deployed and live.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Soham Maury",
    description,
    url: "/projects",
  },
};

const Projects = () => {
  return (
    <div className="flex w-full flex-col">
      <Breadcrumb file="projects.md" />

      <div className="mt-6 border-l-2 border-border pl-5">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Projects
        </h1>
        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
          I&apos;ve built many projects — some for learning, some for fun. The
          best ones are here.{" "}
          <Link
            href="https://www.github.com/itzsoham"
            className="font-semibold text-accent hover:underline"
          >
            Checkout all my projects
          </Link>{" "}
          while you&apos;re here. Most are deployed and working.
        </p>
      </div>

      <div className="my-8">
        <Hatch />
      </div>

      <Title title="Full-Stack" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {ProjectData.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            href={project.href}
            tags={project.tags}
            icon={React.createElement(project.icon, { className: "size-6" })}
          />
        ))}
      </div>

      <a
        href="https://github.com/itzsoham"
        target="_blank"
        rel="noopener noreferrer"
        className="group mx-auto my-8 flex items-center justify-center gap-1.5 border border-border bg-card px-4 py-2 font-mono text-sm text-muted-foreground transition hover:border-accent/40 hover:text-foreground"
      >
        See all on GitHub
        <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>

      <Title title="Upcoming" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {UpcomingProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            href={project.href}
            tags={project.tags}
            icon={React.createElement(project.icon, { className: "size-6" })}
          />
        ))}
      </div>

      <Contact />
    </div>
  );
};

export default Projects;
