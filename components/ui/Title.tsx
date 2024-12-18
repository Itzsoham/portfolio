import React from "react";

const Title = ({
  className = "md:text-4xl text-2xl",
  title,
}: {
  className?: string;
  title: string;
}) => {
  return (
    <h3
      className={`mb-4 font-bold tracking-tight text-black dark:text-white  ${className}`}
    >
      {title}
    </h3>
  );
};

export default Title;
