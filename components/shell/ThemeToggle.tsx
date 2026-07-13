"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { type MouseEvent, useEffect, useState } from "react";
import { flushSync } from "react-dom";

import { cn } from "@/lib/utils";

/**
 * Theme switch. The new theme is revealed as a circle wiping out of the button
 * (View Transitions API) rather than snapping. Browsers without
 * `startViewTransition`, and anyone who asked for reduced motion, just get the
 * instant swap — the icon still cross-fades either way.
 */
const ThemeToggle = ({ className }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // next-themes mount guard to avoid a hydration mismatch on the icon
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  const toggle = async (e: MouseEvent<HTMLButtonElement>) => {
    const next = isDark ? "light" : "dark";
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced || !document.startViewTransition) {
      setTheme(next);
      return;
    }

    // grow the circle from the button's centre out to the furthest corner
    const { top, left, width, height } = e.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // flushSync so the DOM already carries the new theme when the snapshot is taken
    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });
    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 550,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "grid size-8 shrink-0 place-items-center text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
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
