import React from "react";

const Title = ({
  className = "",
  title,
}: {
  className?: string;
  title: string;
}) => {
  return (
    <h3
      className={`mt-10 mb-4 flex items-center gap-2.5 text-2xl font-bold tracking-tight text-foreground ${className}`}
    >
      <span className="font-mono text-base text-accent">#</span>
      {title}
    </h3>
  );
};

export default Title;
