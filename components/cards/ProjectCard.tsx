import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  liveHref?: string;
  codeHref?: string;
  /**
   * 0-based position in the list, printed as the sheet number. Optional, and
   * when it is absent the number is simply not drawn.
   */
  index?: number;
}

const LinkOut = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition hover:text-accent"
  >
    {label}
    <ArrowUpRight className="size-3 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </a>
);

/**
 * A project printed as one entry in a numbered list, not a bordered card —
 * matches a spec-sheet register: number, title, and the links that actually
 * do something, strung above a plain-language description and the stack.
 */
export default function ProjectCard({
  title,
  tagline,
  description,
  tags,
  liveHref,
  codeHref,
  index,
}: Props) {
  const sheet =
    typeof index === "number" ? String(index + 1).padStart(2, "0") : null;

  return (
    <div className="border-b border-border py-7 first:pt-0 last:border-b-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
        <div className="flex items-baseline gap-3">
          {sheet && (
            <span className="font-mono text-xs text-accent tabular-nums">
              {sheet}
            </span>
          )}
          <h4 className="text-lg font-bold tracking-tight text-foreground">
            {title}
          </h4>
        </div>

        {(liveHref || codeHref) && (
          <div className="flex items-center gap-4">
            {liveHref && <LinkOut href={liveHref} label="Live" />}
            {codeHref && <LinkOut href={codeHref} label="Code" />}
          </div>
        )}
      </div>

      <p className="mt-1.5 font-mono text-xs text-accent">{tagline}</p>

      <p className="mt-3 text-sm/6 text-muted-foreground">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <li
            key={tag}
            className="border border-border bg-background px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
