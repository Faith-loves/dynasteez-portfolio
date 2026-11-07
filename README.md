# Dynasteez portfolio

A static clothing portfolio with all 27 supplied photos, category filters, enlarged image navigation and subtle parallax. The original logo, product graphics and photography are preserved.

## Run locally

Install Node.js 20 or newer, then run `npm run dev`. Open http://127.0.0.1:4173. No dependencies or build step are required.

## Deploy to Vercel

Push this entire folder to GitHub and import that repository into Vercel.
- Root directory: repository root
- Framework: Other
- Build command: leave empty
- Output directory: .
- No environment variables required

`vercel.json` supplies the static output configuration. This project does not use ChatGPT Sites.

## Files

- `index.html`: page structure
- `style.css`: responsive styles
- `app.js`: all 27 photo entries, filters, image viewer and motion
- `assets/1.jpeg` through `assets/27.jpeg`: unmodified original photos
- `assets/display/`: display crops that exclude photographed mannequin faces
- `assets/logo.png`: the original brand mark extracted from a supplied photo
- `server.cjs`: local preview server

The gallery displays each of the 27 supplied photos, using face-free crops where needed. Images load immediately. Google Fonts supplies Playfair Display, DM Sans and Yellowtail.

## Pages and featured photography

The homepage features six selected pieces. Its View more button opens `collection.html`, where all 27 supplied photos remain available with category filters.

`assets/hero-jersey.png` is a transparent, background-removed hero cutout derived from supplied photo 16. The source photo remains unchanged. The displayed studio photograph uses `assets/display/look-19.jpg` to focus on clothing and omit the face.

The hero now displays three transparent jersey colourways (pink, violet and ice grey). Garments float quickly and the scrolling text runs on a six-second loop; reduced-motion preferences stop these effects. Collection cards and action buttons use filled, rounded shapes without decorative divider rules.
