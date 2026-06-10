import { ArrowUpRight } from "lucide-react";
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
  return (
    <Link
      className="group relative flex w-full flex-col rounded-xl border border-border bg-card p-5 transition duration-200 hover:border-accent/40 hover:shadow-md"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ArrowUpRight className="absolute top-4 right-4 size-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />

      <div className="mb-4 grid size-12 place-items-center rounded-lg border border-border bg-muted text-foreground">
        {icon}
      </div>

      <h4 className="text-lg font-bold tracking-tight text-foreground">
        {title}
      </h4>
      <p className="mt-2 grow text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags?.map((tag, idx) => (
          <span
            key={idx}
            className="rounded-md border border-border bg-background px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
