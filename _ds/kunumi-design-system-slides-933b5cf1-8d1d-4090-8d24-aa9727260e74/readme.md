# Kunumi Design System

A brand + UI system for **Instituto Kunumi**, reconstructed from the official
*Template de Slides* (v1.1, nov 2025) and the institutional Figtree typeface.

> **O futuro informa o presente.**

---

## 1 · Company & product context

O Instituto Kunumi é um **coletivo de pesquisa** dedicado a expandir as
fronteiras da inteligência, da cultura e do significado — do Sul Global para o
mundo. Reúne especialistas em ciência, tecnologia e humanidades para investigar
novas formas de inteligência e seu impacto na sociedade, atuando como um
**ecossistema híbrido entre academia e mercado**.

### Arquitetura de marca (three brands)
The brand book defines **three distinct marks**, each for a specific purpose.
This system captures the shared visual language; copy/usage differs per mark:

| Marca | O que é | Público | Uso |
|---|---|---|---|
| **kunumi** | Mínimo denominador comum. Fala com todos os Kunumis e stakeholders. | Interno; ocasionalmente conselho. | Comunicação geral, eventos, kit boas-vindas. |
| **kunumi (LTDA / Bradesco)** | A empresa LTDA e o time de aplicação de tecnologia no Bradesco. | Externo/interno Bradesco. | Iniciativas com Bradesco, papelaria, dashboards, relatórios. |
| **Instituto Kunumi** | As iniciativas de pesquisa do Instituto. | Externo; universo acadêmico. | Apresentações e eventos acadêmicos, conteúdo e pesquisa. |

### Sources given
- `uploads/Kunumi - Template de Slides.pdf` — 76-page Google Slides template (light + dark themes, layout gallery, color/grid guidance, brand resources). Key assets and copy extracted into `scraps/` and `assets/`.
- `uploads/Figtree-…zip` — the Figtree font family (variable + static). Variable TTFs copied to `assets/fonts/`.

No codebase or Figma file was provided — this system is reconstructed from the
deck template, which is the canonical brand artifact.

---

## 2 · Content fundamentals

**Language.** Primary language is **Portuguese (BR)**. Sentence case for body and
titles; **CAIXA ALTA** (uppercase) reserved for eyebrows, tags, footers and the
tagline. Subtitles are intentionally **lowercase** ("subtítulo simples em letras
em caixa baixa") — a signature of the deck system.

**Voice.** Collective and intentional — "nós", "nossos". Reflective, a little
philosophical, never hype. Tech is framed through *human* purpose: e.g.
*"Kunumi é onde a criatividade e a capacidade de se maravilhar são cultivados…
onde a inteligência humana e a finalidade da tecnologia convergem naturalmente."*

**Emphasis discipline.** At most **one highlight per paragraph** — either a single
**bold** word or one **urucum-red** word. The template states this explicitly:
*"escolha com sabedoria… use com parcimônia."* Red and black highlights are for
*very* important information only.

**Tone of guidance.** Instructional copy is warm and plain-spoken
("Mas o que é o grid?", "Simples assim."). Numbers and trivia are used as texture
(Apollo 11's 64KB, the first cellphone) rather than as data slop.

**No emoji.** The brand does not use emoji. Iconography is geometric and custom
(see §4).

---

## 3 · Visual foundations

**Color.** Three tiers (see `tokens/colors.css`):
- **Principal** — Urucum `#F04E44` (the one signature red), Chumbo `#1C2127`
  (near-black text/dark surface), Grafite `#5E5E5E`, Concreto `#B4ADA4`
  (warm taupe), Gelo `#F0F0F0` (light canvas). *Prioritize these.*
- **Apoio** — Amarelo `#FF931E`, Laranja `#F26638`, Magenta `#D73E5F`,
  Violeta `#9355A0`. Only when principal can't distinguish elements.
- **Estendida** — graded green/indigo/amber ramps, **charts & diagrams only**.

The palette is warm-neutral (taupe + ice) anchored by a single hot red — not a
tech-blue brand. Urucum is an accent, never a flood color behind text.

**Gradient.** The canonical brand background is the **atmospheric gradient
texture** (`assets/backgrounds/gradient-aurora.png`, token `--bg-aurora`) — a
grainy, organic flow from black through índigo-blue into urucum-red. Use it
full-bleed on **covers, closing and dark hero slides**. The flat CSS
`--gradient-brand` (**chumbo → índigo → urucum**, from the "k" mark) is the
lightweight fallback. Neither goes behind body copy.

**Type.** A single typeface — **Figtree** (variable, 300–900). Headlines run
**light/regular and large** with tight tracking; body at 1.5 leading; labels and
footers **UPPERCASE with ~0.14em tracking**. Big numbers use the **black (900)**
weight with tabular figures. No secondary display or serif face.

**Layout & grid.** Built on a **2×2 block grid** (two horizontal, two vertical
blocks) with deliberate **respiro** (breathing room) — ~64–72px slide margins.
Elements either anchor hard to grid intersections or float relative to a higher-
hierarchy element, but always respect margins and dividers.

**Geometry.** Architectural and crisp. Small radii (cards `--radius-lg` 12px,
chips `--radius-xs/sm`); the symbol itself is built from squared, rounded-corner
blocks. Pills only for status/avatars.

**Shadows.** Restrained and **cool grey** (rgba of chumbo) — never colored, never
heavy. Cards get `--shadow-sm`; lift to `--shadow-md` on hover.

**Backgrounds.** Solid gelo (light) or chumbo (dark) — themes can be mixed within
a deck "sem exagerar nas trocas". Cover/closing slides use the brand gradient.
Photography is used full-bleed or in mosaics, with captions in small grafite text;
the deck warns to place text over **uniform, low-information** areas of an image.

**Motion.** Calm and considered — quick fades, gentle `ease-out`, **no bounce**.
`--duration-fast/base/slow` = 120/200/360ms.

**Interaction states.** Hover = darken ~8% (buttons) or 2px lift + `shadow-md`
(cards). Press = scale 0.97. Focus ring is urucum.

**Borders.** Hairline `rgba(chumbo, .12)` on light; `rgba(gelo, .18)` on dark.
Dividers in lists/tables are single hairlines, not boxes.

---

## 4 · Iconography

The deck's icon system is **custom, geometric and monoline**, matching the squared-
with-rounded-corners construction of the "k" symbol. The deck also defines a fixed
set of **project-status icons**: *Explorando · Atenção · Concluído · Não iniciado*
— captured as the `StatusTag` component (`components/editorial/`).

**Real icon set** — 48 official glyphs extracted from Kunumi's own slide
library, in `assets/icons/icon-01.png` … `icon-48.png` (transparent PNG,
chumbo-on-white; recolor via a light/dark wrapper or request white variants
if a set is needed for dark slides). See `foundations/brand-icons.html` for
the full grid. Use these instead of any placeholder/Lucide icon.

**Motion mark** — `assets/logo/kunumi-mark-motion.gif`, the animated "k" mark
(599×599, looping). Use sparingly as an intro/loading accent on covers —
never as a repeating background element. See `foundations/brand-motion.html`.

No emoji. No Unicode-glyph icons.

---

## 6 · Usage-intent catalog (which slide, when)

When building a deck, match the request's **tema** (light/dark) and **propósito**
(grab attention vs. keep visual continuity) to a slide type below. Ask the user
when a request doesn't specify — e.g. "slide do time": tema claro ou escuro?
isso deve chamar atenção ou manter continuidade com o slide anterior?

| Slide | Tema | Propósito | Quando usar |
|---|---|---|---|
| **Capa** | Escuro (aurora) | Chamar atenção — abertura | Primeira página do deck, sempre. |
| **Capítulo** | Escuro (chumbo sólido) | Continuidade — transição | Divisor entre seções; menos dramático que a capa. |
| **Texto** | Claro (gelo) | Continuidade — conteúdo | Corpo do deck: argumento, contexto, 2–3 colunas de texto. |
| **Big numbers** | Claro (gelo) | Chamar atenção — prova | Dados/métricas que sustentam o argumento anterior. |
| **Imagem + texto** | Claro (gelo) | Continuidade — conteúdo com apoio visual | Pessoas, produto, espaço — texto curto ao lado de uma foto. |
| **Citação** | Escuro (chumbo sólido) | Chamar atenção — pausa emocional | Isolar uma frase; quebra o ritmo do deck, usar com moderação. |
| **Fechamento** | Escuro (aurora) | Chamar atenção — encerramento | Última página, espelha a Capa. |

Reference material the user supplies (extra reference slides, motion/gif
assets) lives in `assets/reference/` — see that folder's own notes for what's
catalogued there and how to match a new request against it.

## 7 · Index / manifest

**Root**
- `styles.css` — global entry (consumers link this). `@import`s the four token files.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry for downloaded use.

**Tokens** (`tokens/`)
- `fonts.css` — Figtree `@font-face` (variable, normal + italic).
- `colors.css` — principal / apoio / estendida + semantic aliases + gradient.
- `typography.css` — families, weights, scale, leading, tracking.
- `spacing.css` — spacing, radius, borders, shadows, motion, layout.

**Components** (`components/`, namespace `KunumiDesignSystem_c10d9a`)
- `core/` — `Button`, `Card`, `Tag`
- `editorial/` — `Stat` (big numbers), `Quote`, `StatusTag`

**Slides** (`slides/`) — specimen layouts (1280×720): Capa, Capítulo, Texto+destaque,
Citação, Big numbers, Imagem+texto, Fechamento. Shared chrome in `_slide.css`.

**Templates** (`templates/`)
- `deck/Deck.dc.html` — reusable branded deck (cover → closing) consuming the
  components. Edit `ds-base.js` if the DS path changes.

**Assets** (`assets/`)
- `fonts/` — Figtree variable TTFs.
- `logo/` — kunumi wordmark (chumbo/white/urucum) + "k" mark (chumbo/white/urucum/gradient).
- `backgrounds/` — `gradient-aurora.png`, the official full-bleed cover texture (`--bg-aurora`).

**Foundations** (`foundations/`) — Design-System-tab specimen cards (Colors, Type,
Spacing, Brand, `brand-icons.html`, `brand-motion.html`, `reference-slides.html`).

`scraps/` holds raw PDF extractions (logos, render probes) — not part of the shipped system.
