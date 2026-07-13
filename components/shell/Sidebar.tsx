import Image from "next/image";

import { Site } from "@/constants";

const Sidebar = () => {
  return (
    <aside className="hidden w-full flex-col gap-3 lg:flex">
      {/* profile card */}
      <div className="relative overflow-hidden border border-border bg-card p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative size-20 shrink-0 overflow-hidden border border-border bg-muted">
            <Image
              src={Site.avatar}
              alt={Site.name}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <p className="mt-4 font-semibold text-foreground">{Site.name}</p>
          <p className="mt-2 text-sm/6 text-muted-foreground">
            {Site.bio}
          </p>
        </div>
      </div>

      {/* dotted "blueprint" filler */}
      <div className="bg-dots min-h-32 grow border border-border/60" />
    </aside>
  );
};

export default Sidebar;
