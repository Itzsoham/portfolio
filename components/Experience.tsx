import React from "react";

import { Experience as Roles } from "@/constants";

import { ResumeCard } from "./cards/ResumeCard";
import Title from "./ui/Title";

const Experience = () => {
  return (
    <div className="mt-5">
      <Title title="Experience" />
      {Roles.map((work) => (
        <ResumeCard
          key={work.company}
          logoUrl={work.logoUrl}
          altText={work.company}
          title={work.company}
          subtitle={work.title}
          href={work.href}
          badges={work.badges}
          period={`${work.start} - ${work.end ?? "Present"}`}
          description={work.description}
        />
      ))}
    </div>
  );
};

export default Experience;
