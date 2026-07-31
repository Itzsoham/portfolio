import React from "react";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Hatch from "@/components/shell/Hatch";
import Skill from "@/components/Skill";
import TypingTest from "@/components/TypingTest";

const Root = () => {
  return (
    <div className="flex w-full flex-col">
      <Header />

      <div className="my-8">
        <Hatch />
      </div>

      <Skill />
      <Experience />
      <Projects />

      <div className="mt-12">
        <TypingTest />
      </div>

      <Contact />
    </div>
  );
};

export default Root;
