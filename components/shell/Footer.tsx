import { Eye } from "lucide-react";

import { Site, Socials } from "@/constants";

/** 1 -> "1st", 2 -> "2nd", 1024 -> "1,024th" */
const ordinal = (n: number) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  const suffix = s[(v - 20) % 10] || s[v] || s[0];
  return `${n.toLocaleString()}${suffix}`;
};

const Footer = () => {
  const thanksHref = Socials.find((s) => s.name === "X")?.url ?? "#";

  return (
    <footer className="flex w-full flex-wrap items-center justify-between gap-3 border-t border-border py-5 font-mono text-xs text-muted-foreground">
      <span>
        {"// "}
        Built with {Site.builtWith.join(", ")};{" "}
        <a
          href={thanksHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          thanks()
        </a>
        ;
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Eye className="size-3.5" />
        You are the{" "}
        <span className="tabular-nums text-foreground">
          {ordinal(Site.visitorCount)}
        </span>{" "}
        visitor
      </span>
    </footer>
  );
};

export default Footer;
