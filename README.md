# siddanth.tech

Personal site. Next.js App Router, Tailwind, server-rendered — one client
component (the contact form).

```bash
npm install
npm run dev
```

## Content

All of it lives in [`src/data/index.ts`](src/data/index.ts) — profile, experience,
projects, skills, background. The components only lay it out, so updating the site
means editing that one file.

The résumé is served from `public/siddanth-reddy-resume.pdf`; `/resume` redirects
there. Replace the PDF and the link follows.

## Contact form

`POST /api/mail` needs three env vars, or it returns 503 and points visitors at the
email address instead:

```
GMAIL_USER=you@gmail.com
GMAIL_PASSWORD=<gmail app password>
TO_EMAIL=where@to.send
```

Use a [Gmail app password](https://myaccount.google.com/apppasswords), never the
account password. The route validates input, strips CR/LF, builds the subject
server-side, throttles per IP, and drops anything that fills the honeypot field.

## Theme

Five CSS variables in [`src/app/globals.css`](src/app/globals.css) (`--bg`, `--fg`,
`--muted`, `--border`, `--accent`), mapped to Tailwind colors in
`tailwind.config.ts`. Dark only.
