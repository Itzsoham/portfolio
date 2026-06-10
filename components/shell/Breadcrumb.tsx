import { Site } from "@/constants";

/**
 * `domain / FILE.md` path line plus a static technical readout, mirroring the
 * reference header. The readout is intentionally static (see DESIGN.md non-goals).
 */
const Breadcrumb = ({ file }: { file: string }) => {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-2 font-mono text-xs text-muted-foreground">
      <span className="lowercase">
        <span className="text-foreground/70">{Site.domain}</span>
        <span className="px-1 text-muted-foreground/60">/</span>
        <span className="text-accent">{file}</span>
      </span>
      <span className="tabular-nums tracking-tight text-muted-foreground/70">
        θ = 0.00rad · 0° | --:--:-- IST
      </span>
    </div>
  );
};

export default Breadcrumb;
