# Brag Plan: Soham Maury — Portfolio

## What is this app?
A personal developer portfolio styled as a `README.md` rendered in a terminal: monospace chrome, big sans headings, a working `⌘K` command palette, filterable projects, and a footer visitor counter ("You are the Nth visitor").

## The angle
The portfolio *is* a README, so the video plays like a terminal session: someone hits ⌘K, types `open README.md`, and the site opens itself file by file: `README.md` → `projects.md` → `experience.md` → the stack. It ends on the footer's webring-counter joke, which ticks from 9,999th to **10,000th visitor**. Dry and a bit nerdy, like the deadpan avatar.

## Hook (first 2-3 seconds)
Empty warm-gray canvas. A `⌘K` keycap presses down with a click, and the command palette drops in. `open README.md` types into it with key ticks. Enter.

## Key moments (the middle)
- The hero: breadcrumb `itzsoham.vercel.app / README.md`, "Heyy!" / "I'm Soham Maury" with the blue marker swiping under the name and the blinking blue caret.
- `projects.md`: three project cards (Operato, My Piano Diary, MachIq) arrive on the beat; a cursor clicks the **AI** filter tab and the Web card dims away.
- `experience.md`: two commit-log rows: Neminath Technologies (6+ enterprise apps, 1,000+ active users) and ZenDevX (ERP, CRM & inventory for 7+ clients).
- The stack: six mono chips (TypeScript, React, Next.js, Node.js, Prisma, PostgreSQL), then "3 years · front to back".

## Outro / punchline
Avatar + "Soham Maury" + `itzsoham.vercel.app`. The footer slides up: `// Built with Next.js, Tailwind; thanks();` and "You are the 9,999th visitor" rolls to **10,000th**.

## User flow worth showing
⌘K → open README → browse projects and filter to AI → read experience → land on contact / footer.

## Tone
- Preset: default (leaning deadpan)
- Creative direction: a terminal session that opens a README
- Interpretation: crisp cuts and slides, mono metadata everywhere, no exclamation-mark hype; the joke is the visitor counter.

## Format: landscape — 1920x1080
## Duration: 22s

## Visual identity (from the project)
- Background: `#f5f5f4` warm gray, with `.bg-dots` 16px dotted grid and `.hatch` 45° divider bands
- Card: `#ffffff`, border `#e7e5e4`
- Text: foreground `#3f3f46`, muted `#71717a`
- Accent: `#3b82f6` blue-500 (marker, caret, active tab); `#2563eb` for small text on gray (contrast)
- Display/body font: Open Sans (the site's local variable font)
- Mono: JetBrains Mono (listed in the site's mono stack)
- Strongest visual element: breadcrumb + big hero with blue marker and caret; ⌘K palette

## Share copy (draft)
My portfolio is a README.md that renders itself: ⌘K to open it, filter projects by AI, and you might be the 10,000th visitor. itzsoham.vercel.app

## Audio direction
- Role: warm, energetic bed
- Music: `happy-beats-business-moves-vol-1-by-ende-dot-app.mp3` at 0.32; the intro before 3s is quiet, then the beat starts at 3.02s, which is exactly the hero reveal. Fade out over the last 1.5s.
- Music cue guidance: preset `assets/music/cues/happy-beats-business-moves-vol-1-by-ende-dot-app.music-cues.json`, 120 BPM (beats every 0.5s from 3.02). Strong cues: 3.02 (hero, beat-locked), 17.02 (stack payoff line), 18.52 (outro name), 20.02 (counter roll to 10,000th). Project cards on every beat 7.52/8.02/8.52, with the set held ≥2.5s after.
- Audio-reactive treatment: subtle; RMS nudges the blue accent glow behind the hero caret and the dotted-grid opacity.
- SFX posture: moderate, crisp; keyboard ticks + clicks for the terminal feel
- Audio-coupled moments: keycap press, typed command, Enter, cards arriving, tab click, chip pops, counter roll, bell on the 10,000th
- Restraint rule: no bright repeated clicks stacked on top of each other; no big impacts except the final counter

## Storyboard

### Scene 1 — ⌘K — 3.0s
Dotted gray canvas. A ⌘K keycap presses (0.35s). The command palette drops in: input line with `>` prompt; `open README.md` types (0.9–1.9s); a result row "README.md — Home" highlights; Enter at 2.5s.
Sequential/interaction: yes, keypress + typing
Audio: key ticks, click on Enter; music intro quiet
Transition: hard cut → Scene 2

### Scene 2 — README.md — 4.0s (3.0–7.0)
Breadcrumb `itzsoham.vercel.app / README.md`. "Heyy!" (3.02, beat-locked), "I'm Soham Maury" (3.52), blue marker swipes under the name (4.0), blue caret blinks. Line: "React/Next.js on the front, Node.js/Prisma on the back." (4.5). Status pill: ● Open to work · Full-Stack Developer · Ahmedabad, IN (5.0). Hatch band under it.
Audio: soft impact at 3.02
Transition: slide up → Scene 3

### Scene 3 — projects.md — 4.5s (7.0–11.5)
Breadcrumb `/ projects.md`, tabs All · AI · Web. Cards: Operato "AI-powered restaurant SaaS — POS, inventory & analytics" [AI]; My Piano Diary "Scheduling & billing platform for a piano teacher's studio" [Web]; MachIq "AI resume & cover letter generator from a job description" [AI]. Cards arrive on 7.52 / 8.02 / 8.52; cursor clicks AI at 9.52; My Piano Diary dims, AI cards get blue borders; hold to 11.5.
Audio: card slides, click on tab

### Scene 4 — experience.md — 3.5s (11.5–15.0)
Breadcrumb `/ experience.md`. Two rows in commit-log style: `May 2025 — now` Full Stack Developer @ Neminath Technologies, "6+ enterprise apps · 1,000+ active users"; `Sep 2023 — Apr 2025` Full-Stack Developer @ ZenDevX Solutions, "ERP, CRM & inventory for 7+ clients". Rows at 12.02 / 12.52, held ~2.5s.
Audio: soft drops

### Scene 5 — the stack — 3.0s (15.0–18.0)
`// stack` label; six chips pop one per half-beat 15.52–16.3; at 17.02 a big line lands: "3 years · front to back."
Audio: light ticks on chips, soft impact at 17.02

### Scene 6 — footer — 4.0s (18.0–22.0)
Avatar, "Soham Maury" (18.52), `itzsoham.vercel.app`. The footer bar slides up: `// Built with Next.js, Tailwind; thanks();` · eye icon "You are the 9,999th visitor", which rolls to 10,000th at 20.02 with a bell. Hold.

**Audio summary:** quiet intro under the typing, the beat lands exactly on the hero, tidy clicks through the files, and a bell on the 10,000th visitor as the music fades.
