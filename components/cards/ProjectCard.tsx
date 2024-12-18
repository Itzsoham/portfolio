"use client";

import {
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Link from "next/link";
import { ReactElement } from "react";

interface Props {
  title: string;
  description: string;
  href: string;
  icon: ReactElement;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  href,
  icon,
  tags,
}: Props) {
  // const tags = ["GitHub", "React", "JamStack"];
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: {
    currentTarget: HTMLElement;
    clientX: number;
    clientY: number;
  }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <Link
      className="group relative mb-4 w-full  rounded-xl border border-slate-200 transition duration-200 hover:shadow-lg dark:border-slate-700"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
    >
      <HoverPattern mouseX={mouseX} mouseY={mouseY} />

      <div className="relative h-full">
        <span className="absolute -bottom-px right-px h-px w-2/5 bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <span className="absolute -left-px top-1/2 h-2/5 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

        <div className="  relative flex flex-col  items-start rounded p-4 dark:border-gray-800">
          {/* */}

          <div className="my-4">{icon}</div>

          <div>
            <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {title}
            </h4>
            <p className="pt-4 leading-6 text-gray-700 dark:text-gray-300">
              {description}
            </p>
            <div className="flex flex-wrap pt-4 md:flex-row">
              {tags?.map((tag, idx) => (
                <p
                  key={idx}
                  className={`mb-2 mr-2 rounded-md bg-gray-50 px-1 text-xs italic leading-5 text-gray-700 dark:border dark:border-zinc-700  dark:bg-transparent dark:text-gray-300`}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function HoverPattern({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/50 to-teal-100/50 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      ></motion.div>
    </div>
  );
}
