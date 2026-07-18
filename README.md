# aaradhya-dev-tamrakar.github.io

A personal portfolio website for **Aaradhya Dev Tamrakar**.

## Repository Structure

- `index.html` — homepage and main portfolio entry
- `projects.html` — projects showcase page
- `experience.html` — work and education experience page
- `achievements.html` — achievements and certificates page
- `about.html` — personal introduction page
- `contact.html` — contact and connect page
- `404.html` — custom not-found page (excluded from `sitemap.xml`, marked `noindex`)
- `robots.txt` — crawler directives
- `sitemap.xml` — site map for GitHub Pages and search engines
- `assets/certificates/` — certificate files linked from the achievements page
- `assets/images/` — profile images and site preview images
- `assets/docs/` — downloadable documents such as the CV
- `assets/css/style.css` — shared CSS styles
- `assets/js/script.js` — shared JavaScript behavior

## Current Status

- Static site structure is in place for GitHub Pages.
- **v23 (2026-07-18)**: UI refinements applied — hero date toggle, navigation arrow consistency, card-arrow styling, keyboard shortcut update (= for scroll-to-top), and refined keymap wording. Also: small CSS tweak added to `assets/css/style.css` to increase footer right padding and avoid overlap between the "Get in Touch"/goto control and the Instagram social icon on small viewports.
- Shared assets live under `assets/` for easier maintenance.
- All main pages are present and included in `sitemap.xml`. `404.html` is intentionally excluded (not-found pages shouldn't be indexed) and is marked `noindex, nofollow`.
- Certificate files are stored in `assets/certificates/` and loaded from the achievements page.
- Navigation is centralized through shared JavaScript and the footer is shared site-wide.
- Portfolio media and documents were reorganized into dedicated asset folders to avoid root-level clutter.
- Updated page references now point to the correct asset paths for images, the CV, and certificate previews.

## Notes

- This is a static site intended for GitHub Pages.
- `sitemap.xml` contains the published page URLs used by search engines.
- Add new HTML pages to `sitemap.xml` when they are created.
- Keep shared CSS and JS changes centralized in `assets/css/style.css` and `assets/js/script.js`.
- When adding new media, place images in `assets/images/`, downloadable documents in `assets/docs/`, and certificates in `assets/certificates/`.
- The site now uses consistent asset paths across the homepage, about, projects, experience, achievements, and contact pages.

## Development

1. Open `index.html` in a browser to preview the homepage.
2. Edit CSS in `assets/css/style.css`.
3. Edit JS in `assets/js/script.js`.

## Contact

- Email: `aaradhyadevtmr@gmail.com`
- GitHub: `https://github.com/Aaradhya-Dev-Tamrakar`

## License

See [LICENSE](LICENSE).
