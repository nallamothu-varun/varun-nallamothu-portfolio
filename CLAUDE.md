# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Run from the `V3/` directory (the Angular project root; the parent `MyProfile2/` also contains an older `MyProfile/` sibling).

- `npm start` — dev server (`ng serve`, development config) at http://localhost:4200
- `npm run build` — production build to `dist/my-profile` (budgets: 500kb warn / 1mb error initial, 6kb warn / 10kb error per component style)
- `npm run watch` — development build in watch mode
- `npm test` — Karma/Jasmine via `ng test`; single spec: `npx ng test --include='src/app/<dir>/<name>.component.spec.ts'`
- No lint script or ESLint config is set up.

## Architecture

Single-page Angular 16 portfolio with a dark theme, using Bootstrap 5, Font Awesome and a little Angular Material.

- `AppModule` (NgModule) declares only `AppComponent`, `HeaderComponent`, `FooterComponent`; the shell template is `<app-header>` / `<router-outlet>` / `<app-footer>`.
- The four pages (`landing-page`, `resume`, `projects`, `contact`) are **standalone components** (each imports `CommonModule`, and `RouterModule` where needed) routed eagerly in `app-routing.module.ts`. The per-page `*.module.ts` / `*-routing.module.ts` files are unused CLI leftovers that nothing imports. Don't declare page components in them: a component declared in a module nothing imports compiles but loses `*ngFor`/`routerLink` at runtime and renders empty. Add new pages as standalone components plus a route.
- Page content (experience, education, skills, projects, contact channels) lives as data arrays in each component's `.ts` and is rendered with `*ngFor`.
- Theming: `src/index.html` sets `data-bs-theme="dark"`. `src/styles.scss` defines the design tokens (`--gradient`, `--glass`, `--c-muted`, ...) and shared classes (`.page`, `.page-title`, `.glass-card`, `.tag`, `.gradient-text`, footer and navbar styles). Reuse these rather than restyling per page. Headings are forced to white/Inter because Angular Material's `mat-typography` body class otherwise overrides them.
- Logos are mostly opaque white-background images, so they are shown on fixed-size white "plates"; logos with light lettering (e.g. `cowin.svg`, `informanos-logo.svg`) need a dark plate instead.
- Styles loaded via `angular.json`: Material indigo-pink theme, Font Awesome 6 (`@fortawesome/fontawesome-free`, local), `styles.scss`, legacy `font-awesome` 4.7. Bootstrap CSS/JS come from CDN tags in `index.html`.
- Component style budget is 6kb warn / 10kb error (raised from the CLI default); the initial bundle currently exceeds its 500kb warning.
- Images live in `src/assets/images/` (lowercase kebab-case names), referenced as `assets/images/<name>` in templates.
- Navigation uses `routerLink`.

## Notes

- Spec files are default CLI scaffolds; `app.component.spec.ts` is stale (expects title `MyProfile` and a `.content span` that don't exist) and will fail.
- TypeScript is `strict` with `strictTemplates`, `noPropertyAccessFromIndexSignature`, and `noImplicitReturns`.

## Deployment

Deployed to GitHub Pages at https://nallamothu-varun.github.io/varun-nallamothu-portfolio/ by `.github/workflows/deploy-pages.yml` on every push to `main`. It builds with `--base-href /varun-nallamothu-portfolio/` (the site lives under the repo-name path), copies `index.html` to `404.html` as the SPA fallback so direct visits to `/resume` etc. work, and publishes `dist/my-profile`. Don't pass `--base-href` for local builds. Under Git Bash on Windows a leading `/` argument is also rewritten to a Windows path.
