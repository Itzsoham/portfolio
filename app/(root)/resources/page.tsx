import ResourcesCard from "@/components/cards/ResourcesCard";
import Contact from "@/components/Contact";
import { Resources as ResourcesData } from "@/constants";
import React from "react";

const Resources = () => {
  return (
    <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Resources
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Some{" "}
        <span className="bg-gray-100 border rounded-md px-1 py-0.5 tracking-tight dark:text-gray-300 dark:bg-gray-700">
          Notion Docs
        </span>{" "}
        that I made from different resources and I use on day to day basis. It
        might help you too.
      </p>

      <h2 className="font-bold text-xl md:text-2xl tracking-tight mt-8 text-black dark:text-white border-b-4 border-blue-500">
        Cohort
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
        {ResourcesData.slice(0, 1).map((resource) => (
          <ResourcesCard
            key={resource.title}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
      <h2 className="font-bold text-xl md:text-2xl tracking-tight mt-8 text-black dark:text-white border-b-4 border-blue-500">
        Others
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
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
