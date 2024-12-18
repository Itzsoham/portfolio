import React from "react";
import { RiHotelLine } from "react-icons/ri";

import ProjectCard from "./cards/ProjectCard";
import Title from "./ui/Title";

const Projects = () => {
  return (
    <div>
      <Title title="Projects" />
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        <ProjectCard
          title="Royal Stay"
          description="A badass hotel management system where you can book cabins, view amenities, and much more. Full-stack application with good charts and graphs."
          href="https://aceternity.com"
          icon={<RiHotelLine size={40} />}
          tags={["React", "Supabase", "TailwindCSS", "Full-Stack"]}
        />{" "}
        <ProjectCard
          title="Royal Stay"
          description="A badass hotel management system where you can book cabins, view amenities, and much more. Full-stack application with good charts and graphs."
          href="https://aceternity.com"
          icon={<RiHotelLine size={40} />}
          tags={["React", "Supabase", "TailwindCSS", "Full-Stack"]}
        />{" "}
        <ProjectCard
          title="Royal Stay"
          description="A badass hotel management system where you can book cabins, view amenities, and much more. Full-stack application with good charts and graphs."
          href="https://aceternity.com"
          icon={<RiHotelLine size={40} />}
          tags={["React", "Supabase", "TailwindCSS", "Full-Stack"]}
        />
      </div>
    </div>
  );
};

export default Projects;
