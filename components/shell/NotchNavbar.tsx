"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Links, Site, Socials } from "@/constants";
import { cn } from "@/lib/utils";

import CommandBar from "./CommandBar";
import ThemeToggle from "./ThemeToggle";

/**
 * Full-bleed navbar with a centre "notch": the bar is 40px tall at the
 * shoulders and drops to a 64px well in the middle. The curve is a real shape
 * (clip-path bézier), not a border-radius, so the two corners are concave.
 *
 * It is built from four slices laid out side by side — shoulder | corner |
 * well | corner | shoulder — each 64px tall in the same coordinate space, so
 * the strokes below line up across the seams. Adjacent slices overlap by 1px
 * (-ml-px) to hide sub-pixel gaps.
 */

/** hairline pair drawn along the bar edge — matches the blueprint rules elsewhere */
const EdgeLines = ({ y }: { y: number }) => (
  <svg className="pointer-events-none absolute inset-0 size-full text-border">
    <line
      x1="0"
      y1={y}
      x2="100%"
      y2={y}
      stroke="currentColor"
      strokeWidth={1}
    />
    <line
      x1="0"
      y1={y - 3}
      x2="100%"
      y2={y - 3}
      stroke="currentColor"
      strokeWidth={1}
      strokeOpacity={0.45}
    />
  </svg>
);

const CornerLines = ({ d, inner }: { d: string; inner: string }) => (
  <svg
    viewBox="0 0 50 64"
    className="pointer-events-none absolute inset-0 size-full text-border"
  >
    <path d={d} fill="none" stroke="currentColor" strokeWidth={1} />
    <path
      d={inner}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeOpacity={0.45}
    />
  </svg>
);

const NotchNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const email = Socials.find((s) => s.name === "Email")?.url ?? "#";
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex h-16">
        {/* left shoulder */}
        <div className="relative z-20 h-10 min-w-0 flex-1 bg-card">
          <EdgeLines y={39.5} />
        </div>

        {/* the notch itself — sized by its content */}
        <div className="relative z-10 -ml-px flex h-16 shrink-0">
          {/* left concave corner */}
          <div className="relative h-full w-12.5 shrink-0">
            <div
              className="absolute inset-0 bg-card"
              style={{ clipPath: "path('M0 0 H50 V64 C25 64 25 40 0 40 Z')" }}
            />
            <CornerLines
              d="M0 39.5 C25 39.5 25 63.5 50 63.5"
              inner="M0 36.5 C25 36.5 25 60.5 50 60.5"
            />
          </div>

          {/* the well */}
          <div className="relative -ml-px h-full min-w-0 flex-1">
            <div className="absolute inset-0 bg-card">
              <EdgeLines y={63.5} />
            </div>

            <div className="relative flex size-full items-end justify-between gap-3 px-4 pb-2.5 md:gap-6 md:px-8">
              {/* desktop nav */}
              <nav className="hidden shrink-0 items-center gap-6 md:flex">
                {Links.map((l) => (
                  <Link
                    key={l.name}
                    href={l.link}
                    className={cn(
                      "group flex items-center gap-1.5 text-sm font-medium whitespace-nowrap transition-colors",
                      isActive(l.link)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <l.icon
                      className={cn(
                        "size-4 transition-colors",
                        isActive(l.link)
                          ? "text-accent"
                          : "opacity-70 group-hover:opacity-100"
                      )}
                    />
                    {l.name}
                  </Link>
                ))}
              </nav>

              {/* mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                className="p-1 text-muted-foreground transition-colors hover:text-foreground md:hidden"
              >
                {menuOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
              </button>

              {/* avatar sits at the deepest point of the notch */}
              <Link
                href="/"
                aria-label={Site.name}
                className="relative mx-1 size-9 shrink-0 overflow-hidden border border-border bg-muted transition hover:scale-105 md:mx-3"
              >
                <Image
                  src={Site.avatar}
                  alt={Site.name}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </Link>

              {/* desktop actions */}
              <div className="hidden shrink-0 items-center gap-3 md:flex">
                <CommandBar />
                <ThemeToggle />
                <a
                  href={email}
                  className="bg-foreground px-3 py-1.5 text-sm font-medium whitespace-nowrap text-background shadow-sm transition hover:bg-foreground/90"
                >
                  Contact
                </a>
              </div>

              {/* mobile actions */}
              <ThemeToggle className="md:hidden" />
            </div>
          </div>

          {/* right concave corner */}
          <div className="relative -ml-px h-full w-12.5 shrink-0">
            <div
              className="absolute inset-0 bg-card"
              style={{ clipPath: "path('M0 0 H50 V40 C25 40 25 64 0 64 Z')" }}
            />
            <CornerLines
              d="M0 63.5 C25 63.5 25 39.5 50 39.5"
              inner="M0 60.5 C25 60.5 25 36.5 50 36.5"
            />
          </div>
        </div>

        {/* right shoulder */}
        <div className="relative z-20 -ml-px h-10 min-w-0 flex-1 bg-card">
          <EdgeLines y={39.5} />
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 border-b border-border bg-card p-4 shadow-lg md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {Links.map((l) => (
                <Link
                  key={l.name}
                  href={l.link}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 p-3 transition-colors hover:bg-foreground/5",
                    isActive(l.link) ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  <l.icon className="size-5 opacity-70" />
                  <span className="font-medium">{l.name}</span>
                </Link>
              ))}
              <div className="my-2 h-px bg-border" />
              <a
                href={email}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center bg-foreground p-3 font-medium text-background"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NotchNavbar;
