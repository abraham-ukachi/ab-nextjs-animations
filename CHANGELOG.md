# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 0.2.5 (unreleased, local)

* **locale-cycle (new):** a 4-slot locale loop (EN → FR → ES → RU), moved from components' i18n playground scene. `.ab-locale-cycle-word` (fade in + 8px rise, ease-out-cubic over the first 10%, held for its slot) and `.ab-locale-cycle-chip` (instant `step-end` jumps); slot via `--ab-locale-cycle-index`, loop via `--ab-locale-cycle-duration` (2400ms), chip colours `--ab-locale-cycle-on-bg|on-fg|off-fg`; `[data-ab-still]` = the still frame; pause inside `[data-ab-paused='true']`. Reduced motion (OS or `[data-ab-reduced-motion='true']`): still frame only. `AB_LOCALE_CYCLE_WORD_CLASS`, `AB_LOCALE_CYCLE_CHIP_CLASS`, `AB_LOCALE_CYCLE_SLOTS`; `locale-cycle-word` / `locale-cycle-chip` in `supportedAnimations` (21 total)

### [0.2.4](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.2.3...v0.2.4) (2026-10-14)

* **slide-step (new):** direction-aware slide enter / leave. `.ab-slide-step-in` / `.ab-slide-step-out` (keyframes `abSlideStepIn` / `abSlideStepOut`); forward / back from `data-ab-direction` on the element or an ancestor; RTL mirrors under `[dir='rtl']` or `--ab-slide-step-flip: -1`; tunables `--ab-slide-step-duration` / `-easing` / `-distance`; `getAbSlideStepDirection(from, to, count, loop)` (shortest way round when looping). Reduced motion (OS or `[data-ab-reduced-motion='true']`): opacity cross-fade only (`--ab-slide-step-reduced-duration`, default 120ms)
* **wire (new):** SVG flow-diagram wires. `.ab-wire-draw` (draw-on, staggered by `--ab-wire-index`) and `.ab-wire-pulse` (fade in, then a dash travels; `--ab-wire-pulse-iterations`, `-duration`, `-delay`, `-stagger`); pause inside `[data-ab-paused='true']`. Reduced motion: wires drawn, pulse frozen at `--ab-wire-poster`
* **spin (new):** `.ab-spin` for loading rings. Reduced motion: slow opacity "breathe", no rotation
* **progress-sweep (new):** `.ab-progress-sweep` indeterminate sweep (RTL-mirrored). Reduced motion: full, softened static bar
* **motion (new):** tokens `--ab-motion-duration-short|medium|long`, `--ab-motion-ease-standard|emphasized`, `--ab-motion-press-scale`, `--ab-motion-lift-scale`; transition classes `.ab-motion-colors`, `.ab-motion-interactive`, `.ab-motion-transform`, `.ab-motion-size`, `.ab-motion-press`, `.ab-motion-lift` (`AB_MOTION`, `AB_MOTION_TOKENS`). Reduced motion: transitions off, no scale feedback
* **Registry:** `slide-step-in`, `slide-step-out`, `wire-draw`, `wire-pulse`, `spin`, `progress-sweep` added to `supportedAnimations` (19 total); every new folder + `styles.css` in `exports` / `files`
* **Docs:** README "Class naming: `ab-` vs legacy" (new classes are `ab-`-prefixed; legacy names are not renamed)

### [0.2.3](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.2.2...v0.2.3) (2026-10-14)

* **fade (G28):** new `fade/` animation — `.fade` (keyframes `abFade`) driven by `--fade-from` / `--fade-to`; `ref` uses the same vars (+ duration / easing / delay vars), `FadeAnimation`, `getAbFadeAnimation(reduced)`, `prefersAbReducedMotion()`
* **Reduced motion:** `.fade`, `.fadeIn` and `.fadeOut` turn the animation off under `prefers-reduced-motion: reduce` and jump to the final opacity
* **Types:** fix `getAllKeyframes` typing (TS2322) and allow `.ts` import paths; new `typecheck` script; `exports` map (root, `./types`, every animation folder, and `./*` so `<name>/styles.css` paths keep working)

### [0.2.2](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.2.1...v0.2.2) (2026-10-03)

* Publish to npm automatically from GitHub Actions with Trusted Publishing (OIDC + provenance, no NPM_TOKEN)
* Ship only package files via `files`; `next` peer is now `^16.3.4`

### [0.2.1](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.2.0...v0.2.1) (2026-09-17)

## [0.2.0](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.36...v0.2.0) (2024-06-09)

### [0.1.36](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.35...v0.1.36) (2024-06-08)

### [0.1.35](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.34...v0.1.35) (2024-06-08)

### [0.1.34](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.33...v0.1.34) (2024-06-08)

### [0.1.33](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.32...v0.1.33) (2024-06-08)

### [0.1.32](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.31...v0.1.32) (2024-06-06)

### [0.1.31](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.30...v0.1.31) (2024-06-06)

### [0.1.30](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.29...v0.1.30) (2024-06-06)

### [0.1.29](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.28...v0.1.29) (2024-06-06)

### [0.1.28](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.27...v0.1.28) (2024-06-06)

### [0.1.27](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.26...v0.1.27) (2024-06-06)

### [0.1.26](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.25...v0.1.26) (2024-06-06)

### [0.1.25](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.24...v0.1.25) (2024-06-06)

### [0.1.24](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.23...v0.1.24) (2024-06-05)

### [0.1.23](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.22...v0.1.23) (2024-06-05)

### [0.1.22](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.21...v0.1.22) (2024-06-05)

### [0.1.20](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.19...v0.1.20) (2024-06-05)

### [0.1.19](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.18...v0.1.19) (2024-06-05)

### [0.1.18](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.17...v0.1.18) (2024-06-05)

### [0.1.17](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.16...v0.1.17) (2024-06-05)

### [0.1.16](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.15...v0.1.16) (2024-06-05)

### [0.1.15](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.14...v0.1.15) (2024-06-04)

### [0.1.14](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.13...v0.1.14) (2024-06-04)

### [0.1.13](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.12...v0.1.13) (2024-06-04)

### [0.1.12](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.11...v0.1.12) (2024-06-04)

### [0.1.11](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.10...v0.1.11) (2024-06-04)

### [0.1.10](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.9...v0.1.10) (2024-06-04)

### [0.1.9](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.8...v0.1.9) (2024-06-04)

### [0.1.8](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.7...v0.1.8) (2024-06-04)

### [0.1.7](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.6...v0.1.7) (2024-06-04)

### [0.1.6](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.5...v0.1.6) (2024-06-04)

### [0.1.5](https://github.com/abraham-ukachi/ab-nextjs-animations/compare/v0.1.4...v0.1.5) (2024-06-04)

### 0.1.3 (2024-06-04)
