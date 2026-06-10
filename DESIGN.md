# Redesign Spec — "README.md / Terminal" Portfolio

A redesign of the Soham Maury portfolio in a **developer / `README.md` / terminal**
aesthetic, inspired by the `luvvv.me` reference. We keep the existing content,
data, and multi-page routing (Home / Projects / Resources) but rebuild the visual
language and layout shell.

---

## 1. Concept

The site reads like a developer's `README` rendered in a tool: monospace meta-text
for "machine" chrome (breadcrumbs, readouts, footer, comments-as-UI), large neutral
sans headings for human content, a calm warm-gray canvas, and subtle "blueprint"
decoration (diagonal hatch dividers, dotted grids, skeleton loaders).

Code metaphors are part of the UI: `path / README.md` breadcrumbs, `// comments`,
`thanks()` call-syntax links, a `⌘K` Command Bar as the primary navigation.

## 2. Layout shell (every page)

```
┌───────────────────────────────────────────────────────────────┐
│  [ / Command Bar ]                              ⟳   ☀/☾        │  top bar
├───────────────────────────────────────────────┬───────────────┤
│  path / README.md            θ=0.00rad · IST   │  ┌─────────┐  │
│  ▌ <PAGE HERO HEADING>                          │  │ profile │  │
│    <subtitle>                                   │  └─────────┘  │
│  ░░░░░░░░ hatch divider ░░░░░░░░░░░░░░░░░░░░░░  │  [GitHub  ↗]  │
│                                                 │  [LinkedIn↗]  │
│  <page content sections>                        │  [X       ↗]  │
│                                                 │  [LeetCode↗]  │
│  <typing-test widget>                           │  · · · dots   │
├───────────────────────────────────────────────┴───────────────┤
│  // Built with Next.js, Tailwind; thanks();   👁 You are …th   │  footer
└───────────────────────────────────────────────────────────────┘
```

- **Top bar**: left = Command Bar pill (opens `⌘K` palette). Right = reload glyph +
  theme toggle.
- **Main column** (≈2fr): per-page hero (breadcrumb + big heading + subtitle), a
  hatch divider, then page sections. Typing-test widget anchored near the bottom.
- **Right sidebar** (≈1fr, hidden < `lg`): profile card on top, social link rows,
  dotted-grid filler. Sticky on scroll.
- **Footer**: monospace build credit with a `thanks()` link + static visitor counter.

## 3. Design tokens

### Color — light (default, matches reference)
| token | value | use |
|---|---|---|
| background | `#f5f5f4` warm gray | canvas |
| card | `#ffffff` | cards, sidebar tiles |
| foreground | `#3f3f46` zinc-700 | headings (NOT pure black) |
| muted-fg | `#71717a` zinc-500 | body, meta |
| border | `#e7e5e4` stone-200 | hairlines, card borders |
| accent | `#3b82f6` blue-500 | links, active state |

### Color — dark
| token | value |
|---|---|
| background | `#0c0a09` near-black |
| card | `#18181b` zinc-900 |
| foreground | `#fafafa` |
| muted-fg | `#a1a1aa` zinc-400 |
| border | `#27272a` zinc-800 |
| accent | `#60a5fa` blue-400 |

Brand colors on social icons are preserved in both themes.

### Type
- `--font-sans` = Open Sans (existing local VF) → body + big hero headings, tight tracking.
- `--font-mono` = `ui-monospace, "SF Mono", "JetBrains Mono", Menlo, monospace` →
  breadcrumbs, readouts, footer, tags, typing test, command bar.
- Hero heading: `text-5xl`–`text-7xl`, `font-bold`, `tracking-tight`, foreground (dark gray).
- Meta text: `text-xs`/`text-sm`, mono, `muted-fg`, often `uppercase tracking-wide`.

### Decoration (utilities in globals.css)
- `.bg-dots` — `radial-gradient(circle, border 1px, transparent 1px)` 16px grid.
- `.hatch` — `repeating-linear-gradient(45deg, border 0 1px, transparent 1px 6px)`
  used as a thin divider band.
- `.skeleton` — muted rounded block, used inside the profile card placeholder + content stubs.

### Radius / shadow
- Cards: `rounded-xl border` (hairline), very soft shadow on hover only.
- Pills (command bar, tags): `rounded-md` mono.

## 4. Components

| component | role | state |
|---|---|---|
| `shell/TopBar` | command-bar pill + reload + theme toggle | client |
| `shell/CommandBar` | **functional** `⌘K` palette: nav, links, theme | client |
| `shell/Sidebar` | profile card + social rows + dots | server |
| `shell/Footer` | build credit + **static** visitor counter | server |
| `shell/Breadcrumb` | `domain / FILE.md` path line + static readout | server |
| `ui/Hatch` | hatch divider band | server |
| `TypingTest` | "Pack my box…" widget, **static/placeholder** | client |
| restyle | Header→Hero, About, Projects, Experience, Skill, Contact, all cards | — |

### Command Bar (functional)
- Opens on `⌘K` / `Ctrl-K` or click. Modal with mono input + grouped results:
  **Pages** (Home, Projects, Resources), **Links** (GitHub, LinkedIn, X, email),
  **Actions** (Toggle theme). Arrow-key navigation, `Enter` to run, `Esc` to close.

### Typing test (static for now)
- Renders the prompt sentence + a focusable input + `TAB new sentence` / `restart`
  hints. Visual only — no scoring/WPM yet (placeholder for a later pass).

### Visitor counter (static for now)
- `👁 You are the 1,024th visitor` — hardcoded number, wired to swap for a real
  Supabase/KV count later.

## 5. Pages
- **Home**: hero ("Heyy! I'm Soham Maury" + tagline) → hatch → About → Projects
  (2-col cards) → Experience → Skills (mono tag chips) → TypingTest. Contact lives
  in the sidebar/footer social.
- **Projects**: hero `… / projects.md`, full project grid + upcoming, restyled cards.
- **Resources**: hero `… / resources.md`, Notion resource cards in the new style.

## 6. Non-goals (this pass)
- Real visitor backend, typing WPM scoring, the live θ/clock readout (kept static).
- These are intentionally stubbed with clear swap points.
