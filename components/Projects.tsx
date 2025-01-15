import React from "react";

import { Projects as ProjectData } from "@/constants";

import ProjectCard from "./cards/ProjectCard";
import More from "./ui/More";
import Title from "./ui/Title";

const Projects = () => {
  return (
    <div>
      <Title title="Projects" />
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {ProjectData.slice(0, 4).map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            href={project.href}
            tags={project.tags}
            icon={React.createElement(project.icon, { className: "size-10" })}
          />
        ))}
      </div>
      <More href="/projects" text="See More" />
    </div>
  );
};

export default Projects;
