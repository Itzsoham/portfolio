import React from "react";

import Title from "./ui/Title";

const About = () => {
  return (
    <div className="mb-6">
      <Title title="About" />
      <p className="text-zinc-600 dark:text-zinc-500">
        Hey! I’m Soham, a 2025 B.Tech IT graduate and full-stack developer. I
        build seamless Web-apps and websites that deliver real value. From
        designing intuitive interfaces to building scalable back-ends, I’m
        passionate about delivering impactful digital experiences that people
        ❤️.
        <br />
        You can find me on{" "}
        <a
          href="https://x.com/sohammaury"
          className=" group relative inline-flex overflow-hidden font-bold  dark:text-zinc-400"
          target="__blank"
        >
          <span className="relative">twitter</span>
        </a>{" "}
        for my tech updates.
      </p>
    </div>
  );
};

export default About;
