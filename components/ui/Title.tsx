import React from "react";

/** "Full-Stack" -> "full-stack" — the anchor id the section index jumps to */
export const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * Section heading. It carries the anchor id and the `data-section` marker that
 * the sidebar's section index scans for, so a new section on any page shows up
 * in the index for free.
 */
const Title = ({
  className = "",
  title,
}: {
  className?: string;
  title: string;
}) => {
  return (
    <h3
      id={slugify(title)}
      data-section={title}
      className={`mt-10 mb-4 flex scroll-mt-28 items-center gap-2.5 text-2xl font-bold tracking-tight text-foreground ${className}`}
    >
      <span className="font-mono text-base text-accent">#</span>
      {title}
    </h3>
  );
};

export default Title;
