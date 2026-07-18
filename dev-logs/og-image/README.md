# OG image source

`template.html` generates `assets/images/og-image.jpg` (1200×630, the
social-preview card shown by WhatsApp/Twitter/LinkedIn/Slack link previews).

Regenerate whenever the photo, name, role line, or domain changes:

```python
import base64
from playwright.sync_api import sync_playwright

with open('assets/images/photo.png', 'rb') as f:
    photo_b64 = base64.b64encode(f.read()).decode('ascii')

html = open('dev-logs/og-image/template.html').read()
html = html.replace('PORTRAIT_SRC', f'data:image/png;base64,{photo_b64}')
open('/tmp/og-final.html', 'w').write(html)

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1200, "height": 630}, device_scale_factor=2)
    page.goto("file:///tmp/og-final.html")
    page.wait_for_timeout(600)  # let webfonts load
    page.screenshot(path="/tmp/og-raw.png")
    browser.close()

from PIL import Image
im = Image.open('/tmp/og-raw.png').convert('RGB')
im.resize((1200, 630), Image.LANCZOS).save(
    'assets/images/og-image.jpg', 'JPEG', quality=80, optimize=True
)
```

Requires `playwright` (with Chromium installed) and `Pillow`.

**Note:** social platforms cache OG images per-URL for days/weeks. After
updating, use each platform's debugger to force a re-scrape:
- Facebook/WhatsApp: https://developers.facebook.com/tools/debug/
- Twitter/X: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/
