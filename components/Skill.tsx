import React from "react";

import { Skills } from "@/constants";

import { Badge } from "./ui/badge";
import Title from "./ui/Title";

const Skill = () => {
  return (
    <div className="mt-12 w-full">
      <Title title="Skills" />
      <div className="flex flex-wrap gap-1">
        {Skills.map((skill) => (
          <Badge
            className="bg-zinc-900  text-sm dark:bg-white dark:text-zinc-900"
            key={skill}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Skill;
