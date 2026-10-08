# Shanmugam Portfolio

## Final UI
- White/light professional interface.
- Bright blue, pink, red/purple, yellow and green accents.
- Responsive automatically for desktop, tablet and mobile widths.
- Centered modal cards for About and Skills details.
- Project cards open centered project-detail modals; the standalone project-details/index.html is also available.
- Inline SVG icons are embedded in HTML, so the UI does not depend on an icon CDN.

## Image folder
`frontend/gallery/` is intentionally empty. Add:
- photo1.png — personal image (Home + About)
- photo2.png — QuantumTrace
- photo3.png — AgriVoice
- photo4.png — Mood Predictor
- photo5.png — MD Photography
- photo6.png — B.Tech
- photo7.png — Intermediate
- photo8.png — Secondary School

## Code separation
Each page has its own HTML, CSS and JS file. HTML contains the page structure/content, JavaScript handles interaction/data behavior, and CSS is used for styling/layout only.

## Run
Open root `index.html` through a local web server for best results. For contact messages, run:
`node backend/server.js`
