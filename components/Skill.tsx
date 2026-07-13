import React from "react";

import { Skills } from "@/constants";

import Title from "./ui/Title";

const Skill = () => {
  return (
    <div className="w-full">
      <Title title="Skills" />
      <div className="flex flex-wrap gap-2">
        {Skills.map((skill) => (
          <span
            key={skill}
            className="border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground transition hover:border-accent/40 hover:text-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skill;
