import React from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";

const Root = () => {
  return (
    <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skill />
      <Contact />
    </div>
  );
};

export default Root;
