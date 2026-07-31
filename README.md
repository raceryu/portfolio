# Scrapbook Portfolio

A responsive, single-page React portfolio styled like a soft dusty-blue digital
scrapbook. It uses hand-built CSS for the paper, tape, polaroid, sticker, stamp,
and doodle effects—no UI framework or image pack required.

The site has no backend, API routes, database, authentication, or persistence.
The small `worker/` adapter exists only so the hosting platform can serve the
built React page.

## Personalize the content

The easiest place to start is the `app/components` folder. Search the project
for `REPLACE:` to find every placeholder:

- `Hero.tsx` — name, tagline, and profile image
- `About.tsx` — bio and quick facts
- `Projects.tsx` — project titles, descriptions, images, links, and tech tags
- `Skills.tsx` — skills and tools
- `Contact.tsx` — email, GitHub, LinkedIn, and sign-off

Project and profile images currently use CSS placeholders. Replace each
placeholder block with a regular `<img>` element and place the image file in
`public/`.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Then open the local address shown in your terminal.

To verify a production build:

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to it.
2. In `next.config.ts`, add `output: "export"`. If the repository is not a
   user/organization site, also add `basePath: "/your-repository-name"`.
3. Add a GitHub Actions workflow that installs dependencies, runs
   `npm run build`, uploads the generated `out/` folder, and deploys it with
   GitHub Pages.
4. In the repository settings, choose **GitHub Actions** as the Pages source.

If you use the included Sites deployment instead, keep the current build
settings unchanged.

## Project structure

```text
app/
  components/
    About.tsx
    Contact.tsx
    Doodles.tsx
    Hero.tsx
    Projects.tsx
    ScrapbookNav.tsx
    Skills.tsx
  globals.css
  layout.tsx
  page.tsx
```
