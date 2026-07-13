import { Site } from "@/constants";

import Breadcrumb from "./shell/Breadcrumb";

const Header = () => {
  return (
    <div className="w-full">
      <Breadcrumb file="README.md" />

      <div className="mt-6 border-l-2 border-border pl-5">
        <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          {Site.greeting}
          <br />
          I&apos;m {Site.name}
        </h1>
        <p className="mt-5 max-w-xl text-lg/7 text-muted-foreground">
          {Site.tagline}
        </p>
      </div>
    </div>
  );
};

export default Header;
