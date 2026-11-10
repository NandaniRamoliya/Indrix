# Indrix

The Indrix company website. It is a plain static site: HTML, one CSS file and one small JavaScript file. There is no build step.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page: products, services, work, how we work, about, contact |
| `privacy.html` | Privacy page |
| `404.html` | "Page not found" page |
| `assets/site.css` | All styles, including the brand colours at the top |
| `assets/site.js` | Light/dark mode, mobile menu, contact form |
| `assets/plus-jakarta-sans.woff2` | The font, hosted with the site (SIL Open Font License) |
| `favicon.svg`, `og.png` | Browser tab icon and link-preview image |

## Preview on your computer

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Publish

Connect this repository to Cloudflare Pages or Netlify with these settings:

- Build command: none
- Output / publish directory: `/` (the repository root)

## Common edits

- **Contact details:** in `index.html`, search for `data-whatsapp` and `data-email` on the contact form, and for the links in the Contact section.
- **Add a product:** copy the `<article class="product">` block in the Products section.
- **Brand colours:** change `--pri`, `--vio` and `--cy` at the top of `assets/site.css`.
- **After connecting a domain:** change the `og:image` line in `index.html` to the full address, for example `https://yourdomain.com/og.png`.
