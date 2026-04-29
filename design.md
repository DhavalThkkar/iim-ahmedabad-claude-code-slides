# Presentation Design System

This deck should feel like one coherent Slidev product, not a sequence of unrelated meme slides. The design language is a dark, warm, evidence-first interface: polished enough for IIM Ahmedabad, self-aware enough for The Office references, and disciplined enough for a talk about risk, checks, and human judgment.

## Core Direction

- **Tone:** credible, calm, practical, lightly witty. Humor supports the point; it should never become the point.
- **Visual metaphor:** an operator console for careful AI-assisted engineering. Use cards, stages, gates, timelines, and evidence panes.
- **Primary rule:** one idea per slide. Put the proof and delivery details in presenter notes.
- **Audience promise:** the slides should read quickly; the presenter explains the nuance.

## Layout Rules

- Use the same basic rhythm on most content slides: small amber kicker, large cream headline, muted supporting line, then one strong visual system.
- Prefer grids and structured cards over bullets. When a list is needed, make each item a card, chip, step, or compact evidence row.
- Keep margins generous. Most slides should feel intentionally sparse, not empty.
- Do not let a GIF carry the slide. It is a reaction panel or visual beat beside the argument.
- Keep flow diagrams geometric: numbered steps, lanes, arcs, or stacked phases. Avoid loose left-to-right chip chains when the flow has more than three items.
- Avoid duplicate cover-style layouts. Slide 2 should not look like Slide 1; it should establish the problem with a different structure.
- Keep all styling in `style.css`. Do not add per-slide `<style>` blocks in `slides.md`; they make typography and spacing drift.

## Type And Color

- Font stack: `"Aptos", "Segoe UI", system-ui, sans-serif`.
- Background: warm dark gradient from near-black to deep brown/blue.
- Main text: cream.
- Secondary text: muted warm beige.
- Accent colors:
  - Amber for section labels, proof, and emphasis.
  - Green for safe, verified, improved, or allowed.
  - Red for risk, false confidence, mismatch, or blocked.
  - Blue/violet for system layers, infrastructure, and workflow.
- Use big type for the claim and smaller type for evidence. Never pack paragraphs into the slide.

## Reusable Components

- **Stage card:** main structural tile for concepts, phases, and takeaways.
- **Evidence card:** a compact card with a label, a strong title, and one sentence of proof.
- **Step node:** numbered circular marker plus title and short description.
- **Flow lane:** a grid-based sequence with connectors or numbered nodes, not raw arrows between many chips.
- **Meme panel:** rounded GIF/image card. Captions should be rare, italic, and restrained. If the meme already says the joke, remove the caption.
- **Presenter notes:** organized as `Purpose`, `Say`, `Transition`, and optional `Office beat`. Jokes belong here unless they are visually essential.

## Meme Rules

- Use at most one meme panel on a slide.
- Meme text overlays should not obscure faces or the original meme. Prefer no overlay, or a small italic caption below/inside the image if the point needs help.
- Office references should be used as quick speaking beats, not repeated on-slide labels.
- Remove visible "Office line" text from slides. Put those lines in notes in the right speaking sequence.
- A good caption sounds like a quiet aside, not a headline. Example: `<em>The model sounded certain. Dwight asked for evidence.</em>`

## Presenter Notes Rules

Every slide should have structured notes:

```text
Purpose:
- What this slide is doing in the arc.

Say:
- Short speaker beats in the order they should be delivered.

Transition:
- One sentence that hands off to the next slide.

Office beat:
- Optional. Use only when it helps pacing.
```

Notes should include details from the speaker brief: domain uncertainty, risk controls, backtest/live sizing mismatch, fail-closed behavior, auditability, evidence loops, specs/plans, isolated work, tests, and human approval. The slide should stay clean while notes carry the talk track.

## Slide-Specific Intent

- **Slide 1:** calm title hook. Establish that the talk is about stopping the model from inventing the domain.
- **Slide 2:** honest starting point. Use repo velocity and zero live trades to frame responsibility, not embarrassment.
- **Slide 3:** problem slide. Show that convincing output can still be wrong; keep the Dwight caption as a quiet evidence beat.
- **Slide 4:** system slide. Merge architecture, product walkthrough, and context/risk/evidence into one decision-system map.
- **Slide 5:** maturity curve. Use the git-history era strip to show workflow evolution over time.
- **Slide 6:** domain-learning method. Show how AI helped interrogate, document, package, and verify understanding.
- **Slide 7:** workflow slide. Make the before/after flow readable and emphasize specs, isolation, bounded parallel agents, tests, and review.
- **Slide 8:** hard lessons. Use three evidence cards: backtest realism, fail-closed behavior, and governance/lineage.
- **Slide 9:** Monday takeaways and close. Keep this purely actionable and end with the final thesis line.
- **Slide 10:** full-page Michael Scott thank-you meme as a quick emotional beat before Q&A.
- **Slide 11:** clean Q&A hold slide.

## Quality Bar

- Each slide should be understandable in three seconds.
- Each slide should have one obvious visual hierarchy.
- The same spacing, card radius, shadows, and accent system should repeat.
- If a line feels clever but reduces readability, move it to notes.
- Build must pass with `npm run build`.
