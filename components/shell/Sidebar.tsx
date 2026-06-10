import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Site, Socials } from "@/constants";

const Sidebar = () => {
  return (
    <aside className="hidden w-full flex-col gap-3 lg:flex">
      {/* profile card */}
      <div className="relative overflow-hidden rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-4">
          <div className="relative size-16 shrink-0 overflow-hidden rounded-full border border-border bg-muted">
            <Image
              src={Site.avatar}
              alt={Site.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate font-semibold text-foreground">{Site.name}</p>
            <p className="truncate font-mono text-xs text-muted-foreground">
              {Site.role}
            </p>
            <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-green-500" />
              available
            </span>
          </div>
        </div>
      </div>

      {/* social rows */}
      <div className="flex flex-col gap-2">
        {Socials.filter((s) => s.name !== "Email").map((s) => (
          <Link
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 transition hover:border-accent/40 hover:shadow-sm"
          >
            <span
              className="grid size-8 place-items-center rounded-md text-white"
              style={{ backgroundColor: s.color }}
            >
              <s.icon className="size-4" />
            </span>
            <span className="flex-1 text-sm font-medium text-foreground">
              {s.name}
            </span>
            <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </Link>
        ))}
      </div>

      {/* dotted "blueprint" filler */}
      <div className="bg-dots min-h-32 grow rounded-xl border border-border/60" />
    </aside>
  );
};

export default Sidebar;
