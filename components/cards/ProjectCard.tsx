import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactElement } from "react";

import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  href: string;
  icon: ReactElement;
  tags: string[];
  /**
   * 0-based grid position, printed as the sheet number. Optional, and when it is
   * absent the number is simply not drawn — a card that fell back to "01" would
   * be stating metadata it does not have.
   */
  index?: number;
}

/**
 * "Full-Stack" and "Frontend" are categories, not technologies, but `tags` mixes
 * them in with the stack. The card lifts one into the title block so the chip row
 * stays a pure stack. Matched by value, never by position: Royal Stay Client
 * lists Full-Stack third and Authjs last, so "the last tag" prints the wrong kind.
 */
const KINDS = new Set(["full-stack", "fullstack", "frontend", "backend"]);

/**
 * The four registration marks. Every corner in the shell is square by decree, so a
 * crop mark is the only corner treatment on offer — and it is the right one for a
 * drawing anyway. Each scales from its own corner, so the corner stays pinned and
 * the arms lengthen along the trim. Scaling rather than growing width/height keeps
 * all twenty-four of them (six cards on /projects) off the layout path.
 */
const CROP_MARKS = [
  "top-2 left-2 origin-top-left border-t border-l",
  "top-2 right-2 origin-top-right border-t border-r",
  "bottom-2 left-2 origin-bottom-left border-b border-l",
  "bottom-2 right-2 origin-bottom-right border-b border-r",
];

/**
 * What the link actually opens, printed on the sheet before anyone clicks it:
 * "https://royalstay.vercel.app/" reads "royalstay.vercel.app", and
 * "https://www.github.com/itzsoham/" reads "github.com/itzsoham".
 *
 * A github.com href is source to read, not a deployment to open, so it reports
 * SOURCE instead of LIVE. That is how the Upcoming projects label themselves
 * honestly without a second flag in the data.
 */
const readTarget = (href: string) => {
  try {
    const url = new URL(href);
    const host = url.hostname.replace(/^www\./, "");

    return {
      target: `${host}${url.pathname}`.replace(/\/+$/, ""),
      live: !host.endsWith("github.com"),
    };
  } catch {
    return {
      target: href.replace(/^https?:\/\//, "").replace(/\/+$/, ""),
      live: false,
    };
  }
};

/**
 * A project drawn as a sheet from a spec book: a title block (sheet number, kind,
 * live status) strung on a dimension rule, an icon plate beside a ruled heading,
 * and a command line printing the target the click actually opens.
 *
 * Everything the card knows is on the sheet at rest — hover only inks it in — so
 * touch loses nothing and the whole gesture stays in CSS. That is what keeps this
 * a server component: six of these on /projects ship no client JS at all.
 *
 * Reduced motion drops the three transforms (marks, rule, arrow) and leaves the
 * colour and opacity fades running: a fade is not motion, and killing it too would
 * leave the hover with no affordance at all.
 */
export default function ProjectCard({
  title,
  description,
  href,
  icon,
  tags,
  index,
}: Props) {
  const { target, live } = readTarget(href);
  const sheet =
    typeof index === "number" ? String(index + 1).padStart(2, "0") : null;
  const kind = tags.find((tag) => KINDS.has(tag.toLowerCase()));
  const stack = kind ? tags.filter((tag) => tag !== kind) : tags;

  // Without a label the link's accessible name is its entire text content — the
  // title, the whole blurb, every chip and the command line — read out at every
  // tab stop. This names it once and still carries what the card derived: where
  // the link goes, and whether there is anything live at the other end.
  const label = `${title}, ${live ? "live" : "source"} at ${target}. Opens in a new tab.`;

  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex size-full flex-col border border-border bg-card ring-offset-background transition-colors duration-200 hover:border-accent/50 focus-visible:border-accent/50 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      {CROP_MARKS.map((mark) => (
        <span
          key={mark}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute size-3 scale-100 border-border transition duration-200 ease-out group-hover:scale-150 group-hover:border-accent group-focus-visible:scale-150 group-focus-visible:border-accent motion-reduce:transition-none",
            mark
          )}
        />
      ))}

      <div className="relative flex grow flex-col p-5">
        {/* The drafting grid, uncovered under the drawing area. It stops dead at the
            command line's rule instead of fading out, because that is where a real
            sheet's grid stops too — at the title block. Accent-tinted rather than
            border-tinted: .bg-dots is drawn in --border, which is #27272a on a
            #18181b card and effectively invisible on the theme most of this
            audience reads in. */}
        <span
          aria-hidden="true"
          className="bg-dots-accent pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        />

        {/* positioned, so the copy paints over the grid rather than under it */}
        <div className="relative flex grow flex-col">
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
            <span className="flex min-w-0 items-center gap-1.5">
              {sheet && (
                <>
                  <span className="shrink-0 text-accent tabular-nums">
                    {sheet}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-muted-foreground/50"
                  >
                    ·
                  </span>
                </>
              )}
              {kind && <span className="truncate">{kind}</span>}
            </span>

            {/* The dimension rule — the tick-ended leader that makes `01` read as a
                sheet number and not a list bullet. It costs no row of its own. */}
            <span aria-hidden="true" className="flex h-2 flex-1 items-center">
              <span className="h-2 w-px bg-border" />
              <span className="h-px flex-1 bg-border" />
              <span className="h-2 w-px bg-border" />
            </span>

            <span className="flex shrink-0 items-center gap-1.5">
              {/* chart-2 is the only green in the token set and it is green in both
                  themes (173 58% 39% light, 160 60% 45% dark). A literal
                  emerald-500 would be a hardcoded colour with no dark variant. */}
              <span
                aria-hidden="true"
                className={cn(
                  "size-1.5",
                  live ? "bg-chart-2" : "bg-muted-foreground"
                )}
              />
              {live ? "live" : "source"}
            </span>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center border border-border bg-muted text-foreground transition-colors duration-200 group-hover:border-accent group-hover:text-accent group-focus-visible:border-accent group-focus-visible:text-accent">
              {icon}
            </span>
            <h4 className="text-lg/6 font-bold tracking-tight text-foreground">
              {title}
            </h4>
          </div>

          {/* The rule a rendered Markdown heading gets. On hover the accent draws
              itself across it, left to right, and that one stroke is the anchor the
              rest of the hover hangs off: the sheet is being plotted. */}
          <div
            aria-hidden="true"
            className="relative mt-4 h-px w-full bg-border"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none" />
          </div>

          {/* Unclamped on purpose. The grid already stretches every card in a row to
              the tallest one, and `grow` here drops the chips and the command line
              onto the bottom edge — so the longest blurb sets the row height and
              nothing has to be truncated to keep the cards flush. */}
          <p className="mt-4 grow text-sm/6 text-muted-foreground">
            {description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {stack.map((tag) => (
              <li
                key={tag}
                className="border border-border bg-background px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* The title block: the command the click actually runs. */}
      <div className="flex items-center gap-2 border-t border-border px-5 py-3 font-mono text-[11px] text-muted-foreground">
        <span aria-hidden="true" className="shrink-0 text-accent">
          $
        </span>
        <span className="truncate">open {target}</span>
        <ArrowUpRight className="ml-auto size-3.5 shrink-0 transition duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:text-accent motion-reduce:transition-none" />
      </div>
    </Link>
  );
}
