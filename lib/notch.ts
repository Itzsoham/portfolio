/**
 * Geometry of the navbar notch, shared by the bar itself and by anything that
 * wants to reuse its silhouette (the theme sweep).
 *
 * The bar sits at the shoulder line and drops into a well in the middle; each
 * concave corner is a 50px cubic whose control points sit halfway across it.
 * Those are the same numbers the navbar's own clip-paths and stroke paths use.
 */
export const CORNER = 50;
export const DEPTH = 24;

/** attribute the navbar puts on its notch slice so the geometry can be measured */
export const NOTCH_ATTR = "data-notch";

/**
 * An SVG path for "everything above a navbar-shaped edge", in viewport pixels.
 * `edgeY` is the shoulder line; the well hangs `DEPTH` below it, so the middle
 * of the edge leads the way down. The shape is closed well above the top of the
 * viewport so it can be swept in from off-screen without exposing a seam.
 *
 * Every keyframe of the sweep is generated from this, so all the paths share a
 * command list and the browser can interpolate between them.
 */
export const notchEdgePath = (
  edgeY: number,
  viewport: { width: number; height: number },
  notch: { left: number; width: number }
) => {
  const r = (n: number) => Math.round(n * 100) / 100;

  const x1 = notch.left;
  const x2 = notch.left + CORNER;
  const x3 = notch.left + notch.width - CORNER;
  const x4 = notch.left + notch.width;

  const y = r(edgeY);
  const w = r(edgeY + DEPTH); // the well line
  const top = r(-DEPTH * 2); // closes off-screen, above the viewport
  const W = r(viewport.width);

  // degenerate notch (too narrow to hold both corners) — fall back to a flat edge
  if (x3 <= x2 || notch.width <= 0) {
    return `path('M0 ${y} H${W} V${top} H0 Z')`;
  }

  return `path('M0 ${y} H${r(x1)} C${r(x1 + CORNER / 2)} ${y} ${r(x1 + CORNER / 2)} ${w} ${r(x2)} ${w} H${r(x3)} C${r(x3 + CORNER / 2)} ${w} ${r(x3 + CORNER / 2)} ${y} ${r(x4)} ${y} H${W} V${top} H0 Z')`;
};
