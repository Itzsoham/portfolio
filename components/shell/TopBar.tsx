"use client";

import { Moon, RotateCw, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import CommandBar from "./CommandBar";

const iconButton =
  "grid size-9 place-items-center rounded-full border border-border bg-card/80 text-muted-foreground shadow-sm backdrop-blur-sm transition hover:text-foreground";

const TopBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // next-themes mount guard to avoid a hydration mismatch on the icon
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky-nav flex w-full items-center justify-between bg-background/70 py-4">
      <CommandBar />

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Reload"
          onClick={() => window.location.reload()}
          className={iconButton}
        >
          <RotateCw className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={iconButton}
        >
          {mounted &&
            (theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            ))}
        </button>
      </div>
    </header>
  );
};

export default TopBar;
