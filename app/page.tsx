import React from "react";

import Header from "@/components/Header";

const Root = () => {
  return (
    <div className="mx-auto my-0 flex w-full max-w-4xl items-center justify-between px-8 md:mb-10">
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <Header />
      </div>
    </div>
  );
};

export default Root;
