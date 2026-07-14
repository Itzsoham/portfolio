"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

import { DEPTH, NOTCH_ATTR, notchEdgePath } from "@/lib/notch";
import { cn } from "@/lib/utils";

/**
 * Theme switch. The incoming theme drops in from the top of the viewport behind
 * an edge cut to the navbar's own silhouette — shoulders with the notch well
 * dipping below them — and sweeps down until it fills the screen (View
 * Transitions API). Browsers without `startViewTransition`, and anyone who asked
 * for reduced motion, just get the instant swap; the icon still animates either
 * way.
 */

/** the sweep is emitted as a path per step so the browser has a matching command list to tween */
const STEPS = 20;

const sweepFrames = () => {
  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const el = document.querySelector<HTMLElement>(`[${NOTCH_ATTR}]`);
  const rect = el?.getBoundingClientRect();
  const notch = rect
    ? { left: rect.left, width: rect.width }
    : { left: 0, width: 0 }; // no navbar on screen → flat edge

  // the edge starts above the top lip (nothing revealed) and falls until the
  // shoulders have cleared the bottom of the screen (everything revealed)
  const from = -DEPTH - 2;
  const to = viewport.height;

  return Array.from({ length: STEPS + 1 }, (_, i) => ({
    clipPath: notchEdgePath(from + (i / STEPS) * (to - from), viewport, notch),
  }));
};

const ThemeToggle = ({ className }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // next-themes mount guard to avoid a hydration mismatch on the icon
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  const toggle = async () => {
    const next = isDark ? "light" : "dark";
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced || !document.startViewTransition) {
      setTheme(next);
      return;
    }

    // flushSync so the DOM already carries the new theme when the snapshot is taken
    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });
    await transition.ready;

    const duration = 700;
    const easing = "cubic-bezier(0.65, 0, 0.35, 1)";

    document.documentElement.animate(sweepFrames(), {
      duration,
      easing,
      pseudoElement: "::view-transition-new(root)",
    });

    // the outgoing theme drifts down behind the sweep, so the two read as one move
    document.documentElement.animate(
      { transform: ["translateY(0)", "translateY(3rem)"] },
      { duration, easing, pseudoElement: "::view-transition-old(root)" }
    );
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "relative grid size-8 shrink-0 place-items-center overflow-hidden text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ y: -14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 14, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.65, 0, 0.35, 1] }}
            className="grid place-items-center"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
