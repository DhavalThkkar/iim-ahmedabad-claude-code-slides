# IIM Ahmedabad Claude Code Slidev Deck

A Slidev deck for the IIM Ahmedabad Claude Code meetup talk: **Building Fast Without Fooling Yourself**.

- **Live deck:** <https://dhavalthkkar.github.io/iim-ahmedabad-claude-code-slides/>
- **Terms:** <https://dhavalthkkar.github.io/iim-ahmedabad-claude-code-slides/terms.html>
- **Source:** <https://github.com/DhavalThkkar/iim-ahmedabad-claude-code-slides>

This folder is intentionally outside `trading-stonks` so installs, lock files, exports, and builds do not touch the trading app repository.

## About

This presentation covers AI-assisted software engineering in a domain where mistakes matter: moving fast with Claude Code while keeping domain learning, verification, and production confidence grounded in evidence.

## Contact

- **Email:** [thakkar.dhaval.haresh@gmail.com](mailto:thakkar.dhaval.haresh@gmail.com)
- **LinkedIn:** <https://www.linkedin.com/in/dhaval-thakkar-dt/>
- **GitHub:** <https://github.com/DhavalThkkar>

For reuse beyond the published license, please contact Dhaval Thakkar first.

## Reuse and license

Copyright © 2026 Dhaval Thakkar.

The repository, including slide content, styling, and supporting configuration, is licensed under **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International** (**CC BY-NC-ND 4.0**). See [`LICENSE`](LICENSE), the [human-readable summary](https://creativecommons.org/licenses/by-nc-nd/4.0/), and the published [`terms.html`](public/terms.html) page.

In short: you may view and share the deck with attribution for non-commercial purposes. Commercial reuse, adapted versions, derivative works, or training material derived from the deck require separate written permission.

This is not legal advice. For enforcement questions or commercial use, consult a qualified attorney.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

GitHub Pages builds with the repository base path via `.github/workflows/deploy.yml`.

## Export

```bash
npm run export
```

PDF export may require Playwright browser dependencies depending on the machine.

## Content source

The deck is based on:

```text
/home/dhaval/trading-stonks/docs/iim-ahmedabad-claude-code-presentation-handoff-2026-04-24.md
```
