import React from "react";

import ResourcesCard from "@/components/cards/ResourcesCard";
import Contact from "@/components/Contact";
import { Resources as ResourcesData } from "@/constants";

const Resources = () => {
  return (
    <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Resources
      </h1>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Some{" "}
        <span className="rounded-md border bg-gray-100 px-1 py-0.5 tracking-tight dark:bg-gray-700 dark:text-gray-300">
          Notion Docs
        </span>{" "}
        that I made from different resources and I use on day to day basis. It
        might help you too.
      </p>

      <h2 className="mt-8 border-b-4 border-blue-500 text-xl font-bold tracking-tight text-black md:text-2xl dark:text-white">
        Cohort
      </h2>
      <div className="my-2 mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {ResourcesData.slice(0, 1).map((resource) => (
          <ResourcesCard
            key={resource.title}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
      <h2 className="mt-8 border-b-4 border-blue-500 text-xl font-bold tracking-tight text-black md:text-2xl dark:text-white">
        Others
      </h2>
      <div className="my-2 mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {ResourcesData.slice(1).map((resource) => (
          <ResourcesCard
            key={resource.title}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
      <Contact />
    </div>
  );
};

export default Resources;
