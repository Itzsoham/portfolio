import React from "react";

import { Social } from "./ui/Social";

function Contact() {
  return (
    <div className="mx-auto flex max-w-screen-md flex-col items-center justify-center px-5 pt-12">
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Get In Touch</h1>
      <p className="p-5 text-center text-lg font-semibold text-[#939393] sm:mx-20">
        {" "}
        Contact me{" "}
        <a
          className="text-[#3b82f6] hover:underline"
          href="https://x.com/ashirwadexe"
          target="_blank"
        >
          with a direct on twitter
        </a>{" "}
        and I&apos;ll respond whenever I can and here are some of my social
        links
      </p>
      <Social />
    </div>
  );
}

export default Contact;
