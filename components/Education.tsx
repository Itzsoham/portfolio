import React from "react";

import { Education as EductionData } from "@/constants";

import { ResumeCard } from "./cards/ResumeCard";
import Title from "./ui/Title";

const Education = () => {
  return (
    <div className="mt-8 w-full">
      <Title title="Education" />
      {EductionData.map((education) => (
        <ResumeCard
          key={education.school}
          href={education.href}
          logoUrl={education.logoUrl}
          altText={education.school}
          title={education.school}
          subtitle={education.degree}
          period={`${education.start} - ${education.end}`}
        />
      ))}
    </div>
  );
};

export default Education;
