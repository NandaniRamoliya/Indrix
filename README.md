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
| `assets/logo.svg` | The INDRIX logo (wordmark and IND-R icon) as vectors. The letters follow the text colour, the accent is always INDRIX Purple |
| `assets/plus-jakarta-sans.woff2` | The font, hosted with the site (SIL Open Font License) |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | Browser tab and phone home-screen icons (the IND-R icon on Night Black) |
| `og.png` | Link-preview image shown when the site is shared |

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
- **Brand colours:** they are at the top of `assets/site.css`: `--pri` is INDRIX Purple `#8A00FF`, `--bg` (dark) is Night Black `#14121C`. Dark is the default look; visitors can switch to light with the theme button.
- **After connecting a domain:** change the `og:image` line in `index.html` to the full address, for example `https://yourdomain.com/og.png`.
