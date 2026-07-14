import { ArrowUpRight, Download, FolderGit2 } from "lucide-react";
import Link from "next/link";

import { Site, Socials } from "@/constants";

import Breadcrumb from "./shell/Breadcrumb";
import StatusCard from "./shell/StatusCard";

/**
 * The hero: greeting, name, one sentence, one row of actions. That's it.
 *
 * The status (open to work / role / where / current job) deliberately does NOT
 * live here — StatusCard carries it, sitting in the rail on desktop and inline
 * just below on mobile. Saying it in both places is what made this feel noisy.
 *
 * No framer-motion on purpose: the entrance is a CSS keyframe with a per-line
 * delay, so this stays a server component and the <h1> — the LCP element — ships
 * visible in the HTML instead of waiting at opacity:0 for hydration to run.
 */

/**
 * Each line drops in from above, in sequence — the same direction as the shell.
 * `drop-in` fills backwards, so an element is held at opacity 0 for the whole of
 * its delay; the step is short so the <h1> still paints fast.
 *
 * Careful: DROP applies a transform, and a transformed element becomes the
 * containing block for its absolutely positioned descendants — so it must never
 * go on a wrapper that holds an absolutely positioned child (it would drag the
 * child out of place). Put it on the leaf; an element's own transform doesn't
 * affect its own containing block.
 */
const drop = (i: number) => ({ animationDelay: `${i * 90}ms` });
const DROP = "motion-safe:animate-drop-in";

const Header = () => {
  const email = Socials.find((s) => s.name === "Email")?.url ?? "#";

  return (
    <div className="w-full">
      <Breadcrumb file="README.md" />

      <div className="mt-8 border-l-2 border-border pl-5">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">
          <span className={`block ${DROP}`} style={drop(0)}>
            {Site.greeting}
          </span>

          <span className={`block ${DROP}`} style={drop(1)}>
            I&apos;m{" "}
            <span className="relative inline-block">
              {/* accent marker swiped under the name */}
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 h-2.5 bg-accent/20 md:bottom-2 md:h-3.5"
              />
              <span className="relative">{Site.name}</span>
            </span>
            <span
              aria-hidden
              className="ml-2 inline-block h-[0.72em] w-[0.09em] translate-y-[0.04em] bg-accent align-baseline motion-safe:animate-caret"
            />
          </span>
        </h1>

        <p
          className={`mt-5 max-w-xl text-lg/7 text-muted-foreground ${DROP}`}
          style={drop(2)}
        >
          {Site.tagline}
        </p>

        <div
          className={`mt-8 flex flex-wrap items-center gap-3 ${DROP}`}
          style={drop(3)}
        >
          {/* Site.resume is null until a PDF lands in /public — then this flips
              to the résumé and email drops back to the card */}
          {Site.resume ? (
            <a
              href={Site.resume}
              className="group inline-flex items-center gap-2 bg-foreground px-4 py-2.5 text-sm font-medium text-background shadow-sm transition hover:bg-foreground/90"
            >
              <Download className="size-4" />
              Résumé
            </a>
          ) : (
            <a
              href={email}
              className="group inline-flex items-center gap-2 bg-foreground px-4 py-2.5 text-sm font-medium text-background shadow-sm transition hover:bg-foreground/90"
            >
              Get in touch
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-accent/50 hover:text-accent"
          >
            <FolderGit2 className="size-4 text-muted-foreground transition-colors group-hover:text-accent" />
            View projects
          </Link>

          <span className="hidden font-mono text-xs text-muted-foreground/70 sm:inline">
            or hit{" "}
            <kbd className="border border-border bg-card px-1.5 py-0.5 text-[10px] text-muted-foreground">
              ⌘K
            </kbd>
          </span>
        </div>
      </div>

      {/* the rail is `hidden lg:flex`, so below lg the same card rides here */}
      <StatusCard className={`mt-10 lg:hidden ${DROP}`} style={drop(4)} />
    </div>
  );
};

export default Header;
