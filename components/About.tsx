import React from "react";

import Title from "./ui/Title";

const About = () => {
  return (
    <div className="mb-2">
      <Title title="About" />
      <p className="leading-7 text-muted-foreground">
        Hey! I&apos;m Soham, a 2025 B.Tech IT graduate and full-stack developer.
        I build seamless web-apps and websites that deliver real value. From
        designing intuitive interfaces to building scalable back-ends, I&apos;m
        passionate about delivering impactful digital experiences that people
        ❤️.
        <br />
        You can find me on{" "}
        <a
          href="https://x.com/sohammaury"
          className="font-semibold text-accent hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{" "}
        for my tech updates.
      </p>
    </div>
  );
};

export default About;
