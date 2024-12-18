import React from "react";

import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

const Root = () => {
  return (
    <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
      <Header />
      <About />
      <Projects />
    </div>
  );
};

export default Root;
