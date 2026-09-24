# Hyperframes Composition Brief: Soham Maury — Portfolio

## Objective
Short launch-style brag video for the itzsoham.vercel.app portfolio.

## Output
- Composition: `brag-output/composition/`
- Render: `brag-output/brag.mp4`
- Format: landscape 1920x1080, 22s

## Source Material
- Files read: `README.md`, `DESIGN.md`, `constants/index.ts`, `components/Header.tsx`, `components/shell/{Footer,Breadcrumb,CommandBar,StatusCard}.tsx`, `components/TypingTest.tsx`, `app/globals.css`, `app/layout.tsx`, `public/avatar7.png`
- Copy used verbatim: "Heyy!", "I'm Soham Maury", "React/Next.js on the front, Node.js/Prisma on the back", project taglines for Operato / My Piano Diary / MachIq, "Full Stack Developer" @ Neminath Technologies, "Full-Stack Developer" @ ZenDevX Solutions, `thanks()`, "You are the Nth visitor"
- UI recreated: ⌘K command palette, breadcrumb + hero with accent marker and caret, project cards with category tabs, experience rows, stack chips, footer visitor counter

## Creative Direction
- Tone: default leaning deadpan; a terminal session opening a README
- Hook: ⌘K → typed `open README.md`
- Outro: visitor counter 9,999th → 10,000th
- Avoid: generic SaaS language, filler visuals, dark theme (light is the site default)

## Visual Identity
- Background `#f5f5f4` + dotted grid; card `#ffffff`; border `#e7e5e4`
- Text `#3f3f46` / muted `#71717a`; accent `#3b82f6` (small text `#2563eb`)
- Fonts: Open Sans (local `OpenSansVF.ttf` from the site), JetBrains Mono (Hyperframes-bundled)

## Audio
- Music: `assets/music/happy-beats-business-moves-vol-1-by-ende-dot-app.mp3`, 0.32, fade out 20.5–22
- Cues: preset vol-1 (120 BPM). Beat-locked: hero 3.02, stack line 17.02, name 18.52, counter 20.02; cards on grid 7.52/8.02/8.52
- Audio-reactive: per-frame RMS (ffmpeg + node, `assets/audio-data.js`) drives the caret glow and dotted-grid opacity
- SFX: keypress ticks, clicks, card slide, soft drops, soft impacts, bell on 10,000th
