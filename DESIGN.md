# DESIGN.md — jkel.io Design System

> **Ink & Brass** — a noir editorial terminal. The quiet confidence of a letterpress card, rendered as a dark developer console.
>
> Sources: `Leon_Jaekel_Brandkit.pdf` (colours, fonts — **always wins**) merged with four reference style guides for layout and feel: Dala (black-void scale typography), Auros (shadowless depth via surface tiers), Trigger.dev (terminal precision, hairlines, monospace-as-signal), Assurestor (rationed single accent, eyebrow dots).

**Theme:** dark only.

The canvas is deep ink (`#14161C`), never pure black and never gray. One warm brass accent (`#C9974D`) is the only chromatic signal on the page — it plays the role the references give their lime/violet: rationed to primary actions, active markers, and emphasis. Headlines are set in **Newsreader Italic**, a serif voice no reference used — it's what makes this site not look like every dark SaaS page. Body is IBM Plex Sans; anything system-like (labels, dates, status lines, tech tags) is IBM Plex Mono, leaning into the terminal/HTTP-status personality. Hierarchy comes from scale and whitespace, not weight or shadows.

---

## 1. Colours

Brand kit palette, verbatim. No colours outside this table.

| Name | Value | Token | Role |
|------|-------|-------|------|
| Tinte | `#14161C` | `--color-tinte` | Page canvas, nav, footer — the dominant ink surface |
| Tinte Tief | `#0F1116` | `--color-tinte-tief` | Recessed surface — code/terminal panes, footer well *(derived, see D-04)* |
| Tinte Hoch | `#1A1D25` | `--color-tinte-hoch` | Raised surface — cards, panels *(derived, see D-04)* |
| Messing | `#C9974D` | `--color-messing` | THE accent: primary buttons, active dots, links, emphasis. Rationed — one filled Messing element per viewport |
| Papier | `#EDEAE3` | `--color-papier` | Primary text: headlines, body, nav active |
| Papier Gedämpft | `#A7A49B` | `--color-papier-gedaempft` | Secondary text: descriptions, metadata, inactive nav |
| Haarlinie | `#33363F` | `--color-haarlinie` | 1px hairline borders, dividers, card edges — the only border colour |

**Surface stack** (depth without shadows — Auros/Assurestor pattern):

| Level | Surface | Value | Purpose |
|-------|---------|-------|---------|
| −1 | Tinte Tief | `#0F1116` | Recessed: terminal panes, footer |
| 0 | Tinte | `#14161C` | Canvas — everything floats on this |
| +1 | Tinte Hoch | `#1A1D25` | Cards and panels, defined by surface shift + hairline |
| +2 | Messing | `#C9974D` | Highest surface: filled primary button only |

**Rules**
- Never pure black, never gray neutrals — all darks stay in the ink family.
- Messing is never a large background wash. Maximum one filled-Messing element per view.
- Text on Messing is always Tinte `#14161C` (contrast ~7.9:1).
- No gradients on UI. A single faint brass radial glow (≤4% opacity) is permitted once per page as atmosphere (echoes the brand kit's corner glow).

## 2. Fonts

Brand kit typefaces, verbatim. Three voices, strict division of labour:

| Voice | Face | Token | Used for |
|-------|------|-------|----------|
| Display | **Newsreader** (italic, 400–500) | `--font-display` | Headlines h1–h3, pull quotes, the name |
| Text | **IBM Plex Sans** (400, 500) | `--font-text` | Body copy, UI text, buttons |
| Utility | **IBM Plex Mono** (400, 500) | `--font-utility` | Eyebrow labels, dates, tech tags, nav, status lines, captions — always uppercase-or-code styled |

Both Plex families and Newsreader are on Google Fonts (self-host via Fontsource for performance).

**Type scale** — reference-style extreme jumps (scale creates hierarchy, not weight):

| Role | Face | Size | Weight | Line height | Tracking | Token |
|------|------|------|--------|-------------|----------|-------|
| display | Newsreader Italic | clamp(48px, 6.5vw, 88px) | 400 | 1.05 | -0.02em | `--text-display` |
| heading-lg | Newsreader Italic | clamp(40px, 5vw, 64px) | 400 | 1.1 | -0.015em | `--text-heading-lg` |
| heading | Newsreader Italic | 40px | 400 | 1.15 | -0.01em | `--text-heading` |
| heading-sm | Newsreader Italic | 28px | 500 | 1.2 | — | `--text-heading-sm` |
| subheading | IBM Plex Sans | 20px | 500 | 1.4 | — | `--text-subheading` |
| body-lg | IBM Plex Sans | 18px | 400 | 1.6 | — | `--text-body-lg` |
| body | IBM Plex Sans | 16px | 400 | 1.6 | — | `--text-body` |
| label | IBM Plex Mono | 13px | 400 | 1.4 | 0.08em, uppercase | `--text-label` |
| caption | IBM Plex Mono | 12px | 400 | 1.5 | 0.04em | `--text-caption` |

**Rules**
- Newsreader only in italic, only at 28px+. Never for body or UI.
- Serif tracking stays gentle (−0.02em max) — the aggressive −0.045em of the references is a grotesk move and mangles serifs (see D-06).
- Mono labels are the "instrument panel" voice (Auros eyebrow pattern): uppercase, 0.08em tracked, Papier Gedämpft or Messing.
- Body never below 14px; body line-height never below 1.5.

## 3. Spacing & Shape

**Base unit:** 8px. **Density:** spacious — one idea per viewport, cinematic gaps (Dala/Auros feel).

| Token | Value | | Token | Value |
|-------|-------|-|-------|-------|
| `--spacing-1` | 8px | | `--spacing-6` | 48px |
| `--spacing-2` | 16px | | `--spacing-8` | 64px |
| `--spacing-3` | 24px | | `--spacing-12` | 96px |
| `--spacing-4` | 32px | | `--spacing-16` | 128px |
| `--spacing-5` | 40px | | `--spacing-20` | 160px |

**Layout**
- Page max-width: **1200px**, centred, full-bleed ink canvas behind.
- Section gap: **96–128px** vertical.
- Card padding: **32–40px**. Element gap: 16–24px.
- Reading measure: body text max-width **65ch** (~640px).

**Border radius** — tight, engineered (Trigger.dev, see D-07):

| Element | Value | Token |
|---------|-------|-------|
| Buttons, cards, inputs, panes | 4px | `--radius` |
| Tag pills, status chips | 9999px | `--radius-full` |

**Elevation:** none. No box-shadows anywhere. Depth = surface tier shift + 1px Haarlinie border (unanimous across all four references).

## 4. Components

### Navigation Bar
Transparent on canvas, sticky, ~72px. Left: wordmark "Leon *Jäkel*" — "Leon" in Papier, "*Jäkel*" in Newsreader Italic Messing (straight from the brand kit lockup). Right: page links in 13px Plex Mono uppercase, 0.08em tracking — Papier Gedämpft inactive, Papier active/hover, active page marked with a 6px Messing dot. Far right: filled Messing CTA "Connect ↗". No border; a 1px Haarlinie appears on scroll.

### Primary Button (Messing Fill)
`#C9974D` background, `#14161C` text, 4px radius, 14px × 28px padding, Plex Mono 14px uppercase 0.08em. The only filled button in the system; one per viewport. Hover: brightens ~8%, no shadow, no movement.

### Ghost Button
Transparent, 1px Haarlinie border, Papier text, same geometry as primary. Hover: border shifts to Messing, text stays Papier. Default for every non-primary action (Download CV, View project).

### Text Link
Papier with 1px Messing underline (2px offset). Hover: text warms to Messing. Never browser blue.

### Eyebrow Label
The section opener (Assurestor dot + Auros tracked label, in brand voice): 6px Messing dot + Plex Mono 13px uppercase Papier Gedämpft, e.g. `● 01 — EXPERIENCE`. Sits 16px above every section headline.

### Section Headline Block
Two-column asymmetric (Dala): eyebrow + Newsreader Italic headline (40–64px, Papier) left, body copy (18px Plex Sans, Papier Gedämpft, max 65ch) right. Sections alternate the split direction down the page — zigzag rhythm. No boxes; whitespace does the separation.

### Case Study / Project Card
Tinte Hoch surface, 1px Haarlinie border, 4px radius, 40px padding. Top row: client + dates as Plex Mono caption in Papier Gedämpft. Title in Newsreader Italic 28px Papier. Body 16px Plex Sans. Bottom: tech tag pills. Hover: border Haarlinie → Messing; no lift, no shadow.

### Tech Tag Pill
9999px radius, transparent, 1px Haarlinie border, Plex Mono 12px Papier Gedämpft, 4px × 12px padding. Featured tags (Claude Code, SDD) get Messing text.

### Status Line
The brand's signature micro-component (from the kit's `STATUS 200 · CONNECTED`): Plex Mono 13px in a Tinte Tief chip, hairline border, Messing dot. Used for personality moments — hero (`HTTP/1.1 200 OK — AUGSBURG, DE`), contact page (`STATUS 200 · OPEN FOR EXCHANGE`), 404 (`STATUS 404 · LOST`).

### Terminal Pane
Tinte Tief background, 4px radius, 1px Haarlinie border, Plex Mono 14px. Three inactive traffic dots in Haarlinie, one active in Messing. For the hero's identity block, config-style skill listings, or spec-snippet moments. This is the Trigger.dev code-pane idea with brass instead of syntax rainbow — accents only Messing + Papier tones.

### Stat Counter
Number in Newsreader Italic 40–64px **Messing** (the one place brass is large), label below in Plex Mono 13px uppercase Papier Gedämpft. Rows of 2–4 (Auros pattern): years, projects, certifications.

### Timeline Entry (Experience page)
Left rail: 2px Haarlinie vertical line with a 8px Messing dot per role. Right: dates in Plex Mono caption, role in Newsreader Italic 28px, company in Plex Sans 16px Messing, description in Papier Gedämpft. Generous 64px between entries.

### Hairline Divider
1px Haarlinie, full content width. Between major page regions only; otherwise whitespace separates.

### Footer
Tinte Tief recessed well (Auros deep-pool), 96px vertical padding. Wordmark, mono nav links, LinkedIn CTA, and a closing status line `STATUS 200 · CONNECTED`.

## 5. Imagery & Atmosphere

- **No photography** except one portrait (if used: 4px radius, subtle warm-toned duotone in ink/brass to keep it in-palette).
- No stock illustrations, no 3D, no particle-brain clones. Signature visuals are **typographic and terminal-born**: oversized Newsreader Italic statements, status lines, mono annotations pinned to layout edges (brand kit's `BRAND KIT — V1` corner labels).
- Permitted atmosphere: one faint brass radial glow per page (≤4% opacity, hero corner) and an optional ultra-subtle dot grid on Tinte Tief panes.
- Icons: thin line, 1.5px stroke, Papier or Papier Gedämpft, never filled.

## 6. Feel & Layout Principles (from references)

1. **The void is the design** (Dala) — content floats on ink; boxes only where a surface genuinely helps (cards, terminals).
2. **Depth of water, not shadow on paper** (Auros) — hierarchy via surface tiers and hairlines, zero drop shadows.
3. **Scale over weight** (all four) — headlines get big, not bold. Newsreader stays at 400–500.
4. **One rationed signal** (Assurestor/Trigger.dev) — Messing is the charging light. If everything is brass, nothing is.
5. **Zigzag rhythm** (Dala) — alternating asymmetric two-column sections, one idea per viewport, 96px+ gaps.
6. **Mono as instrumentation** (Trigger.dev/Auros) — every label, date, and tag in Plex Mono, so the page reads like a beautifully kept engineer's console.

## 7. Decision Log

Every design decision gets a row. Newest on top. Fill Date/By as decisions land.

| # | Date | Decision | Why | Source |
|---|------|----------|-----|--------|
| D-23 | 2026-07-04 | SDW case-study metrics withdrawn from site and CV PDFs (supersedes D-21): brass stat row removed, outcome stays qualitative (agentic QA finds, CI gap/architecture flaw before first LoC, spec-heavy effort split in words) | User decision — the fact-sheet numbers stay unpublished | User decision |
| D-22 | 2026-07-04 | CV PDF (EN + DE, `/public/cv-leon-jaekel-{en,de}.pdf`) uses an inverted print variant: Papier ground, Tinte text, Messing darkened to #A87B35 for print contrast, hairline #CFCBC0; same fonts, no shadows. Public file carries city + web profiles only — no street address, phone, birth date, or raw email | Dark UI colours don't survive print/ATS; brand must stay recognisable on paper; email stays obfuscated site-wide | Own decision + brand |
| D-21 | 2026-07-04 | SDW case-study metrics rendered as a 3-stat brass row (text-5xl, inside the case-study card) + "The outcome" paragraph; one size below the home stat row | Real numbers from the project fact sheet deserve the D-11 luminous-stat treatment, but home keeps the largest brass moment | Fact sheet + D-11 |
| D-20 | 2026-07-04 | Atmosphere budget of §5 now actually spent: one faint Messing radial glow (`components/brass-glow.tsx`, 4% opacity, top-right) on every subpage hero + dot grid (`.dot-grid`, 3.5% Papier dots, 24px) in the footer well | Taste critique: pages relied on flat Tinte only; §5 always allowed ≤faint-glow atmosphere but nothing used it | Taste critique |
| D-19 | 2026-07-04 | Eyebrow numbering (`01 — What I do`) dropped; eyebrows are plain labels | Taste critique: numbers were meta-labels promising a sequence the page doesn't deliver; label should carry meaning, not structure theatre | Taste critique |
| D-18 | 2026-07-04 | Home hero display size reduced to `clamp(3rem, 6.5vw, 5.5rem)` with `max-w-6xl` | Taste critique: previous `clamp(3.5rem, 8vw, 6rem)` wrapped the H1 to 4+ lines at common widths; display type must hold 2–3 lines | Taste critique |
| D-17 | 2026-07-04 | Scroll-entry reveals: `data-reveal` sections fade/rise 24px over 0.8s (ease-out expo curve), IntersectionObserver at 15% threshold, one-shot. Hidden state gated behind `html.js` (no-JS shows everything); `prefers-reduced-motion` disables entirely | Taste critique: pages rendered all-at-once with no entrance rhythm; transform/opacity only keeps the no-shadow, no-layout-shift discipline | Taste critique |
| D-16 | 2026-07-04 | Bilingual EN/DE: two root-layout route groups, German slugs (/de/lebenslauf, /de/projekte, /de/ueber-mich, /de/kontakt), EN/DE toggle in nav, hreflang alternates; German copy in COPY.de.md, informal "du" | English stays canonical at root; German slugs rank for local terms (Lebenslauf, Kontakt); route map lives in lib/i18n.ts | User decision |
| D-15 | 2026-07-04 | Hero background is now the supplied video (`public/hero-bg.mp4`) under a Tinte scrim (70% + left gradient); replaces the D-13 shader on Home. Shader component kept in `components/ui/` unused | User-supplied footage; scrim keeps Papier contrast and pulls footage into the ink palette (§5 exception recorded) | User decision |
| D-14 | 2026-07-04 | Social-icon row donor: kept shadcn Button skeleton; dropped Google/Facebook, CDN `<img>` icons → lucide 1.5px strokes, hover scale removed, LinkedIn first | CLAUDE.md donor rule; DESIGN icons are thin-line, buttons never move; LinkedIn is the primary action | Donor + brand |
| D-13 | 2026-07-04 | "Cybernetic Grid" shader donor accepted as home-hero atmosphere: blue grid + magenta pulses → single faint Messing grid (~10% intensity), Papier mouse glow, magenta energy pass deleted | CLAUDE.md donor rule; keeps the one-accent discipline and the ≤faint-glow atmosphere budget of §5 while adding the interactive-depth feel of the references | Donor + brand |
| D-12 | 2026-07-04 | Footer is a Tinte Tief recessed well with closing status line | Auros deep-pool footer + brand kit's `STATUS 200 · CONNECTED` sign-off | Auros + brand kit |
| D-11 | 2026-07-04 | Stats are the one large-brass moment (Newsreader Italic numbers in Messing) | Auros' pink-stat "luminous punctuation" pattern, translated to brass | Auros |
| D-10 | 2026-07-04 | Terminal pane uses only Messing/Papier accents — no syntax rainbow | Trigger.dev's multi-colour syntax palette would break the two-colour noir discipline | Brand overrides reference |
| D-09 | 2026-07-04 | Status lines (`HTTP/1.1 200 OK`) adopted as signature micro-component | Straight from the brand kit; carries Leon's HTTP-status humour without kitsch | Brand kit |
| D-08 | 2026-07-04 | No particle/constellation hero; signature visuals are typographic + terminal | Dala/Auros particle clouds are *their* brand marks; copying reads generic-AI. Newsreader Italic at scale is distinctive enough | Own decision |
| D-07 | 2026-07-04 | Radius: 4px rectangles, 9999px pills only — rejected Dala's 24px and Assurestor's 32px | Tight radii match the terminal/editorial voice; soft pills would fight the serif's precision | Trigger.dev |
| D-06 | 2026-07-04 | Serif display tracking capped at −0.02em despite references using −0.04em+ | Aggressive negative tracking is a grotesk technique; it breaks Newsreader's italic letterforms | Own decision (typographic) |
| D-05 | 2026-07-04 | No shadows anywhere; depth = surface tiers + hairlines | Unanimous across all four references; suits the flat noir aesthetic | All references |
| D-04 | 2026-07-04 | Derived two ink surface tiers (#0F1116 recessed, #1A1D25 raised) not in brand kit | Brand kit defines one canvas; references prove tiered surfaces are needed for cards/terminals. Derived within the ink hue, hue-locked to #14161C | Auros/Assurestor pattern, brand hue |
| D-03 | 2026-07-04 | Layout & feel from references: 1200px column, 96–128px section gaps, zigzag asymmetric two-column, spacious density | User rule: references win on layout and feel | Dala (rhythm), Auros (spacing), Trigger.dev (max-width) |
| D-02 | 2026-07-04 | Fonts: Newsreader Italic display / IBM Plex Sans body / IBM Plex Mono utility — reference typefaces (PPNeueMontreal, Matter, Satoshi/Geist, Denim Ink) all rejected | User rule: brand wins on fonts. The serif display is the site's differentiator | Brand kit |
| D-01 | 2026-07-04 | Colours: brand palette only (Tinte/Messing/Papier/Haarlinie); all reference palettes (violet, teal, lime ×2) rejected | User rule: brand wins on colours. Single-accent discipline kept from references, accent = Messing | Brand kit + reference discipline |

## 8. Quick Start — CSS Custom Properties

```css
:root {
  /* Colours — brand kit */
  --color-tinte: #14161C;
  --color-tinte-tief: #0F1116;   /* derived, D-04 */
  --color-tinte-hoch: #1A1D25;   /* derived, D-04 */
  --color-messing: #C9974D;
  --color-papier: #EDEAE3;
  --color-papier-gedaempft: #A7A49B;
  --color-haarlinie: #33363F;

  /* Fonts — brand kit */
  --font-display: 'Newsreader', Georgia, 'Times New Roman', serif;
  --font-text: 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif;
  --font-utility: 'IBM Plex Mono', ui-monospace, Consolas, monospace;

  /* Type scale */
  --text-display: clamp(3rem, 6.5vw, 5.5rem);
  --leading-display: 1.05;
  --tracking-display: -0.02em;
  --text-heading-lg: clamp(2.5rem, 5vw, 4rem);
  --leading-heading-lg: 1.1;
  --text-heading: 2.5rem;
  --leading-heading: 1.15;
  --text-heading-sm: 1.75rem;
  --leading-heading-sm: 1.2;
  --text-subheading: 1.25rem;
  --text-body-lg: 1.125rem;
  --text-body: 1rem;
  --leading-body: 1.6;
  --text-label: 0.8125rem;
  --tracking-label: 0.08em;
  --text-caption: 0.75rem;

  /* Spacing — 8px base */
  --spacing-1: 8px;  --spacing-2: 16px; --spacing-3: 24px;
  --spacing-4: 32px; --spacing-5: 40px; --spacing-6: 48px;
  --spacing-8: 64px; --spacing-12: 96px; --spacing-16: 128px;
  --spacing-20: 160px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 128px;
  --measure: 65ch;

  /* Shape */
  --radius: 4px;
  --radius-full: 9999px;
}
```
