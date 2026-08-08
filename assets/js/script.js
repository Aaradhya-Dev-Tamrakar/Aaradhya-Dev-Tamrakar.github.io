/* ============================================================
   SHARED SCRIPT — aaradhya-dev-tamrakar.github.io
   Loaded on every page via <script src="assets/js/script.js">.
   Page-specific JS lives in each page's own <script defer> block.
   ============================================================ */

/* ── Site constants ─────────────────────────────────────────── */
const SITE = {
  GA4_ID: 'G-P38642CDGB',
  googleClientId: '21529775347-1g1tg96qa47njo5g6fdhsuh81auqm11v.apps.googleusercontent.com',
  masterEmails: ['aaradhyadevtmr@gmail.com', 
    'aaradhya.bei79001@gmail.com', 
    'adtgames2061@gmail.com', 
    'devtamrakaraaradhya83@gmail.com'],
  vipEmails: ['*'], // Add specific VIP emails here, or use '*' to allow any verified Google account
  vipDomains: [],  // e.g. ['ioe.edu.np', 'fusemachines.com'] for automatic domain VIP access
  footerCopy: '© 2026 Aaradhya Dev Tamrakar · KEC, IOE, Tribhuvan University',
  socials: [
    { label: 'GitHub', href: 'https://github.com/AaradhyaDT' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aaradhya-dev-tamrakar' },
    { label: 'X', href: 'https://x.com/AaradhyaDT' },
    { label: 'YouTube', href: 'https://www.youtube.com/@aaradhyadevtamrakar' },
    { label: 'Facebook', href: 'https://www.facebook.com/aaradhyadevtamrakar/' },
    { label: 'Instagram', href: 'https://www.instagram.com/aaradhya_dev_tamrakar/' },
  ],
  navLinks: [
    { label: 'Home', labelShort: 'Home', href: '/index.html', key: '1' },
    { label: 'Projects', labelShort: 'Projects', href: '/projects.html', key: '2' },
    { label: 'Experience', labelShort: 'Experience', href: '/experience.html', key: '3' },
    { label: 'Achievements', labelShort: 'Achievements', href: '/achievements.html', key: '4' },
    { label: 'About', labelShort: 'About', href: '/about.html', key: '5' },
    { label: 'Journey', labelShort: 'Journey', href: '/journey.html', key: '6' },
  ],
};

const SOCIAL_ICONS = {
  GitHub: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  LinkedIn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  X: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l16 16M4 20L20 4"/></svg>`,
  YouTube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>`,
  Facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  Instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
};

/* ── Site release history ─────────────────────────────────── */
const SITE_RELEASES = [
  {
    version: 'v36',
    date: '2026-08-08',
    sha: '9f8e7d6',
    title: 'Site-Wide v36 Upgrade Suite — Visual Polish, Performance & Mobile UX',
    highlights: [
      'Glassmorphism card polish & conic-gradient rotating borders',
      'Playfair Display display serif typography hierarchy upgrade',
      'Interactive Skill & Tech Matrix progress bars with scroll trigger',
      'Mobile Bottom Sheet navigation drawer with backdrop & drag handle',
      'Horizontal swipe-to-navigate between site pages with visual indicators',
      'Scroll-linked parallax depth effects (hero glow, background mesh blobs)',
      'Journey timeline milestone node j-032 for v36 upgrade suite'
    ]
  },
  {
    version: 'v35',
    date: '2026-08-08',
    sha: 'c5d35e1',
    title: 'Site-Wide v35 Upgrade Suite — Motion, Interactions & Performance',
    highlights: [
      'Staggered card entrance animations across grid sections',
      'Typed hero caption animation with expanded rotating pool',
      'Scroll-triggered animated stat counters (15+ Projects, 4th Year, etc.)',
      'Enhanced View Transitions API with element morphing & circular theme wipe',
      'Form focus glow rings & animated checkmark success state',
      'Journey timeline milestone node j-031 for v35 upgrade suite'
    ]
  },
  {
    version: 'v34',
    date: '2026-08-08',
    sha: 'a4b8c9d',
    title: 'Mobile Touch UX & Safe Area Overhaul Suite',
    highlights: [
      'iOS safe area inset (env(safe-area-inset-*)) & viewport-fit=cover integration',
      'Web Touch Gestures: swipe-to-close on mobile nav drawer, lightboxes & modals',
      'Haptic Touch Feedback API (navigator.vibrate) on micro-interactions',
      'Mobile Dev Terminal auto-scroll & touch preset enhancements',
      'Journey milestone node j-030 for v34 upgrade suite'
    ]
  },
  {
    version: 'v33',
    date: '2026-08-04',
    sha: 'fde29d6',
    title: 'Interactive Dev Terminal Widget, CMDK Filters & Cursor Light Trail',
    highlights: [
      'Interactive retro-futuristic terminal widget (#adt-terminal) with live command execution',
      'Quick category tab filter pills integrated into Command Palette (CMDK)',
      'Hardware-accelerated custom cursor light trail micro-interaction',
      'Journey milestone node j-029 for v33 upgrade suite'
    ]
  },
  {
    version: 'v32',
    date: '2026-08-04',
    sha: 'c65d080',
    title: 'PWA Resilience, Reading Progress Bar & 3D Card Tilt',
    highlights: [
      'PWA Service Worker v32 cache refresh with live network status toasts',
      'Top viewport reading progress bar (#readProgressBar) on scroll',
      '3D perspective card tilt micro-interactions on hover',
      'Journey timeline milestone j-028 for v32 upgrade suite'
    ]
  },
  {
    version: 'v31',
    date: '2026-08-04',
    sha: '8761335',
    title: 'Site Upgrade Suite — Hash Sync, Accessibility & PWA Refresh',
    highlights: [
      'Dynamic URL hash filter state sync (#track=academic, #track=eca) on achievements',
      'Screen reader aria-live=polite status announcements for item filtering',
      'PWA Service Worker cache version upgrade to v31',
      'Comprehensive social preview metadata audit (og:image, twitter:card)'
    ]
  },
  {
    version: 'v30',
    date: '2026-08-04',
    sha: 'b146fa5',
    title: 'PWA Service Worker, Skip-Links & Font Preconnects',
    highlights: [
      'Offline PWA Service Worker (sw.js) integration',
      'Keyboard accessibility skip-links across all 10 site HTML pages',
      'Font preconnect hints for faster typography handshakes',
      'CSS content-visibility optimization for rendering speed'
    ]
  },
  {
    version: 'v29',
    date: '2026-08-04',
    sha: '43d99bd',
    title: 'PWA WebManifest & Performance Upgrades',
    highlights: [
      'Created site.webmanifest with dark theme metadata (#0f0e0c)',
      'Playsinline video mobile attributes for iOS devices',
      'Dynamic cross-page theme-color address bar tinting',
      'SEO JSON-LD structured schemas across projects & experience'
    ]
  },
  {
    version: 'v28',
    date: '2026-08-04',
    sha: 'fdbf5b2',
    title: 'Site-Wide Audit & Deep-Linking Hardening',
    highlights: [
      'Explicit deep-link IDs for project cards and journey nodes',
      'Automated search index sync verification in scripts/verify.py',
      'Security hardening (rel=noopener, clean same-tab nav)'
    ]
  }
];

/* ── Command palette data ─────────────────────────────────── */
const CMDK_PAGES = [
  { title: 'Home', href: '/index.html' },
  { title: 'Projects', href: '/projects.html' },
  { title: 'Experience', href: '/experience.html' },
  { title: 'Achievements', href: '/achievements.html' },
  { title: 'Journey', href: '/journey.html' },
  { title: 'About', href: '/about.html' },
  { title: 'Contact', href: '/contact.html' },
  { title: "What's New (v36 Major Releases)", href: "javascript:openWhatsNewModal()" },
];

/* ── Quick-nav ("Explore") card data ──────────────────────────
   Single source of truth for the Explore grid on every page.
   `file` matches location.pathname's basename so the renderer can
   find "this page" and mark it --current. Contact is `showOn:
   ['index.html']` — it only appears in Home's grid; every other
   page relies on the always-visible Connect button instead. */
const QUICK_NAV_PAGES = [
  {
    file: 'index.html', title: 'Home',
    desc: 'BEI IV/I at KEC, IOE. Building intelligent systems across firmware, robotics, and machine learning.',
    cta: 'Back to Home',
  },
  {
    file: 'projects.html', title: 'Projects',
    desc: 'Robotics, embedded ML, and the SPARK fall-detection platform.',
    cta: 'View Projects',
  },
  {
    file: 'experience.html', title: 'Experience',
    desc: 'Fellowships, IEEE leadership, and club roles over the past two years.',
    cta: 'View Timeline',
  },
  {
    file: 'achievements.html', title: 'Achievements',
    desc: 'IEEEXtreme, fellowships, certifications, and competition results.',
    cta: 'View Achievements',
  },
  {
    file: 'about.html', title: 'About',
    desc: 'Bio, technical stack, and the path from firmware to applied ML.',
    cta: 'Read Bio',
  },
  {
    file: 'journey.html', title: 'Journey',
    desc: 'How this site was built — applied skillset behind each milestone, linked to the real commit.',
    cta: 'View Build Log',
  },
  {
    file: 'contact.html', title: 'Contact',
    desc: 'Open to collaborations, research, and internship conversations.',
    cta: 'Get in Touch',
    showOn: ['index.html'],
  },
];

const CMDK_TYPE_LABEL = { page: 'Page', project: 'Project', achievement: 'Achievement' };

const CMDK_ICONS = {
  page: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 22V12h6v10M3 10l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  project: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  achievement: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M9 13.5 6 22l6-3 6 3-3-8.5"/></svg>',
};

// Static snapshot of achievements/projects so search is truly global:
// every page ships the full index, not just whichever type it happens
// to render live in the DOM. Auto-regenerated on every push by
// .github/workflows/update-search-index.yml (runs scripts/extract_index.py
// against achievements.html / projects.html and commits the result — no
// manual export needed). buildSearchIndex() below merges this with a live
// DOM scan, so same-session edits also show up immediately pre-commit.
const SEARCH_STATIC_INDEX = {
  achievement: [
  {
    "type": "achievement",
    "title": "JavaScript Bootcamp",
    "meta": "KEC IT Club · 2023",
    "href": "achievements.html#achv-0",
    "text": "kec it club javascript bootcamp 2023"
  },
  {
    "type": "achievement",
    "title": "Session on Git & GitHub",
    "meta": "KEC IT Club · Nov 2024",
    "href": "achievements.html#achv-1",
    "text": "kec it club session on git & github nov 2024"
  },
  {
    "type": "achievement",
    "title": "Workshop on Linux and Open Source Contribution",
    "meta": "GNOME Nepal & KEC IT Club · Nov 2024",
    "href": "achievements.html#achv-2",
    "text": "gnome nepal & kec it club workshop on linux and open source contribution nov 2024"
  },
  {
    "type": "achievement",
    "title": "HTML & CSS Workshop — Design, Code & Launch via GitHub Pages",
    "meta": "Microsoft Learn Student Ambassador · May 2022",
    "href": "achievements.html#achv-3",
    "text": "microsoft learn student ambassador html & css workshop — design, code & launch via github pages may 2022"
  },
  {
    "type": "achievement",
    "title": "PreXtreme Competitive Programming Workshop",
    "meta": "IEEE · Jul 2025",
    "href": "achievements.html#achv-4",
    "text": "ieee prextreme competitive programming workshop jul 2025"
  },
  {
    "type": "achievement",
    "title": "AWS Fundamentals Workshop",
    "meta": "KEC IT Club · AWS Cloud Club Nepal · Jul 2025",
    "href": "achievements.html#achv-5",
    "text": "kec it club · aws cloud club nepal aws fundamentals workshop jul 2025"
  },
  {
    "type": "achievement",
    "title": "Agile Workshop",
    "meta": "IEEE · Jul 2025",
    "href": "achievements.html#achv-6",
    "text": "ieee agile workshop jul 2025"
  },
  {
    "type": "achievement",
    "title": "PCB Design & Fabrication Workshop",
    "meta": "Nepal Students' Union KEC · KEC Robotics Club · Jul 2025",
    "href": "achievements.html#achv-7",
    "text": "nepal students' union kec · kec robotics club pcb design & fabrication workshop jul 2025"
  },
  {
    "type": "achievement",
    "title": "Mentor — Electronics For All Workshop",
    "meta": "IEEE · Jul 2025",
    "href": "achievements.html#achv-8",
    "text": "ieee mentor — electronics for all workshop jul 2025"
  },
  {
    "type": "achievement",
    "title": "How Hackers Bypass Security: A Beginner's Guide",
    "meta": "Offenso Hackers Academy · Jul 2025",
    "href": "achievements.html#achv-9",
    "text": "offenso hackers academy how hackers bypass security: a beginner's guide jul 2025"
  },
  {
    "type": "achievement",
    "title": "IEEE Day 2025 — Organizer",
    "meta": "IEEE · Oct 2025",
    "href": "achievements.html#achv-10",
    "text": "ieee ieee day 2025 — organizer oct 2025"
  },
  {
    "type": "achievement",
    "title": "IEEEXtreme 19.0",
    "meta": "IEEE · Oct 2025",
    "href": "achievements.html#achv-11",
    "text": "ieee ieeextreme 19.0 oct 2025"
  },
  {
    "type": "achievement",
    "title": "IEEE WIE LaTeX Training Program",
    "meta": "IEEE · May 2026",
    "href": "achievements.html#achv-12",
    "text": "ieee ieee wie latex training program may 2026"
  },
  {
    "type": "achievement",
    "title": "Prompt Engineering Fundamentals",
    "meta": "TechAxis · May 2026",
    "href": "achievements.html#achv-13",
    "text": "techaxis prompt engineering fundamentals may 2026"
  },
  {
    "type": "achievement",
    "title": "IEEE SPAx — Engineer Your Profile",
    "meta": "IEEE · May 2026",
    "href": "achievements.html#achv-14",
    "text": "ieee ieee spax — engineer your profile may 2026"
  },
  {
    "type": "achievement",
    "title": "NepaTronix Drone Training Program",
    "meta": "Drone Operator Training · May 2026",
    "href": "achievements.html#achv-15",
    "text": "drone operator training nepatronix drone training program may 2026"
  },
  {
    "type": "achievement",
    "title": "DataCamp — CPE Credit Certificates",
    "meta": "DataCamp · May 2026 · Jul 2026",
    "href": "achievements.html#achv-16",
    "text": "datacamp datacamp — cpe credit certificates may 2026 · jul 2026"
  },
  {
    "type": "achievement",
    "title": "Datacamp Projects",
    "meta": "DataCamp · May 2026 · Jul 2026",
    "href": "achievements.html#achv-17",
    "text": "datacamp datacamp projects may 2026 · jul 2026"
  },
  {
    "type": "achievement",
    "title": "IEEE Conference Leadership Workshop 2026",
    "meta": "IEEE · 30–31 Jan 2026",
    "href": "achievements.html#achv-18",
    "text": "ieee ieee conference leadership workshop 2026 30–31 jan 2026"
  },
  {
    "type": "achievement",
    "title": "AI Fluency: Framework & Foundations",
    "meta": "ANTHROPIC · Jul 2026",
    "href": "achievements.html#achv-19",
    "text": "anthropic ai fluency: framework & foundations jul 2026"
  },
  {
    "type": "achievement",
    "title": "SimOps Certifications",
    "meta": "SimOps · Jul 2026",
    "href": "achievements.html#achv-20",
    "text": "simops simops certifications jul 2026"
  },
  {
    "type": "achievement",
    "title": "Sports Week — Volunteer Organizer",
    "meta": "Kathmandu Engineering College · 2026",
    "href": "achievements.html#achv-21",
    "text": "kathmandu engineering college sports week — volunteer organizer 2026"
  },
  {
    "type": "achievement",
    "title": "Dristi 3.0 — Volunteer Organizer",
    "meta": "Kathmandu Engineering College · 2025",
    "href": "achievements.html#achv-22",
    "text": "kathmandu engineering college dristi 3.0 — volunteer organizer 2025"
  },
  {
    "type": "achievement",
    "title": "Mr. KEC 2025",
    "meta": "Kathmandu Engineering College · 2025",
    "href": "achievements.html#achv-23",
    "text": "kathmandu engineering college mr. kec 2025 2025"
  },
  {
    "type": "achievement",
    "title": "Proteus Workshop",
    "meta": "KEC Electrical Club · 2024",
    "href": "achievements.html#achv-24",
    "text": "kec electrical club proteus workshop 2024"
  },
  {
    "type": "achievement",
    "title": "AutoCAD Workshop",
    "meta": "CESA (Civil Engineering Student's Association) · 2025",
    "href": "achievements.html#achv-25",
    "text": "cesa (civil engineering student's association) autocad workshop 2025"
  },
  {
    "type": "achievement",
    "title": "Machine Learning Hackathon",
    "meta": "WiseBee · 2 Dec 2023",
    "href": "achievements.html#achv-26",
    "text": "wisebee machine learning hackathon 2 dec 2023"
  },
  {
    "type": "achievement",
    "title": "EU AI Act Literacy — Specialist Certification",
    "meta": "DataCamp · Jul 2026",
    "href": "achievements.html#achv-28",
    "text": "datacamp eu ai act literacy — specialist certification jul 2026"
  },
  {
    "type": "achievement",
    "title": "Introduction to Security in the World of AI",
    "meta": "DataCamp · Jul 2026",
    "href": "achievements.html#achv-31",
    "text": "datacamp introduction to security in the world of ai jul 2026"
  },
  {
    "type": "achievement",
    "title": "Introduction to Python",
    "meta": "DataCamp · May 2026",
    "href": "achievements.html#achv-32",
    "text": "datacamp introduction to python may 2026"
  },
  {
    "type": "achievement",
    "title": "Introduction to Git",
    "meta": "DataCamp · Jul 2026",
    "href": "achievements.html#achv-33",
    "text": "datacamp introduction to git jul 2026"
  },
  {
    "type": "achievement",
    "title": "AI-Assisted Coding for Developers",
    "meta": "DataCamp · Jul 2026",
    "href": "achievements.html#achv-34",
    "text": "datacamp ai-assisted coding for developers jul 2026"
  },
  {
    "type": "achievement",
    "title": "Introduction to Claude Cowork",
    "meta": "ANTHROPIC · Jul 2026",
    "href": "achievements.html#achv-35",
    "text": "anthropic introduction to claude cowork jul 2026"
  },
  {
    "type": "achievement",
    "title": "KEC Music Club — Performer",
    "meta": "KEC Music Club · 2023–2026",
    "href": "achievements.html#achv-27",
    "text": "kec music club kec music club — performer performed 4+ times per year for 3+ years at kec music club events. 2023–2026"
  },
  {
    "type": "achievement",
    "title": "Mentor — Basic Electronics Workshop",
    "meta": "Electronic Project Club (EPC) · 7 Dec 2025",
    "href": "achievements.html#achv-29",
    "text": "electronic project club (epc) mentor — basic electronics workshop mentored 1st and 2nd year students through building simple circuits and checking outputs step by step. 7 dec 2025"
  },
  {
    "type": "achievement",
    "title": "+2 Students Orientation — Host",
    "meta": "IEEE · 7 Jun 2026",
    "href": "achievements.html#achv-30",
    "text": "ieee +2 students orientation — host hosted +2 students at the ieee kec ktm student branch with interactive quiz rounds showcasing branch activities. 7 jun 2026"
  }

  ],
  project: [
  {
    "type": "project",
    "title": "Fusemachines Capstone — Vision Fairness & Bias Audit",
    "meta": "In Progress · AIF360, Fairlearn, FairFace",
    "href": "projects.html#p-018",
    "text": "fusemachines capstone — vision fairness & bias audit diagnostic tool for deployed vision classifiers — runs a multi-demographic test matrix, flags statistical disparities, and outputs a compliance report; detects bias but doesn't correct it fellowship capstone, two-person team with tisha manandhar — full readme to follow in-repo aif360 fairlearn fairface utkface computer vision bias auditing statistical testing html/jinja2 in progress"
  },
  {
    "type": "project",
    "title": "Gesture-Controlled Self-Balancing Robot",
    "meta": "Arduino, HC-05, MPU-6050",
    "href": "projects.html#p-001",
    "text": "gesture-controlled self-balancing robot two-wheeled inverted pendulum robot with real-time dual-hand mediapipe gesture control over hc-05 bluetooth examiner rated major-project level — 9.6/10 arduino hc-05 mpu-6050 nema-17 mediapipe pid matlab"
  },
  {
    "type": "project",
    "title": "SPARK — Two-Layer Fall Detection Wearable",
    "meta": "In Progress · MPU6050, TFLite Micro, 1D CNN",
    "href": "projects.html#p-015",
    "text": "spark — two-layer fall detection wearable on-device, two-layer fall-detection wearable for eldercare — threshold gate plus a tflite micro cnn gateway, zero imports, zero custom pcb bei major project, four-person team — proposal defended jul 10, 2026 mpu6050 tflite micro 1d cnn raspberry pi 4b shap fastapi streamlit telegram in progress"
  },
  {
    "type": "project",
    "title": "Antenna Lab Data Analysis",
    "meta": "Python, Pandas, NumPy",
    "href": "projects.html#p-013",
    "text": "antenna lab data analysis python data-analysis pipeline for antenna radiation pattern measurements from lab excel sheets scipy cubic interpolation plus matplotlib polar plots — communication & rf coursework deliverable python pandas numpy scipy matplotlib polar plot"
  },
  {
    "type": "project",
    "title": "Custom Processor FSM Design",
    "meta": "VHDL, Vivado, FSM",
    "href": "projects.html#p-012",
    "text": "custom processor fsm design vhdl implementation of a custom processor datapath and fsm supporting gcd and exponentiation operations simulated and verified in vivado 2023.2 as embedded systems coursework vhdl vivado fsm datapath fpga"
  },
  {
    "type": "project",
    "title": "PrakopNet — Multi-Hazard Early Warning System",
    "meta": "Archived · ESP32, RYLR890 LoRa 868 MHz, Raspberry Pi 4B",
    "href": "projects.html#p-010",
    "text": "prakopnet — multi-hazard early warning system solar-powered lora mesh multi-hazard monitoring platform for remote regions of nepal — esp32 nodes to a raspberry pi 4b gateway archived june 29, 2026 after rylr890's import-only sourcing conflicted with department policy; superseded by spark esp32 rylr890 lora 868 mhz raspberry pi 4b tflite micro lstm gps fastapi edge ai archived"
  },
  {
    "type": "project",
    "title": "Fusemachines Capstone — Vision Fairness & Bias Audit",
    "meta": "In Progress · AIF360, Fairlearn, FairFace",
    "href": "projects.html#p-018-fuse",
    "text": "fusemachines capstone — vision fairness & bias audit diagnostic tool for deployed vision classifiers — runs a multi-demographic test matrix, flags statistical disparities, and outputs a compliance report; detects bias but doesn't correct it fellowship capstone, two-person team with tisha manandhar — full readme to follow in-repo aif360 fairlearn fairface utkface computer vision bias auditing statistical testing html/jinja2 in progress"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 11 — Vision Transformers",
    "meta": "Python, PyTorch, torchvision",
    "href": "projects.html#p-019",
    "text": "fusemachines wk 11 — vision transformers five-module deep computer vision stack — resnet-50 transfer learning + gradcam, faster r-cnn object detection, deeplabv3+ segmentation, a from-scratch vae, and vit patch embedding clip zero-shot classification hit 92.0% on a 200-image slice, outscoring the fine-tuned resnet-50 (74.1%) — deployment memo compares both for a 500-camera warehouse rollout, exported to onnx python pytorch torchvision timm clip onnx gradcam vision transformers"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 10 — Image Processing",
    "meta": "Python, OpenCV, NumPy",
    "href": "projects.html#p-017",
    "text": "fusemachines wk 10 — image processing hsv-based multi-class fruit segmentation across the fruits-360 dataset, morphological cleanup, and filter-based denoising benchmarks (gaussian, median, bilateral) from-scratch canny edge detector (96.9% pixel agreement vs. cv2.canny()), plus a full fruit-detection pipeline — harris corners, tuned hough circles, connected-component separation of touching fruit, contour-based bounding boxes python opencv numpy matplotlib hsv segmentation canny edge detection hough transform"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 9 — NEU Steel Defect CNN",
    "meta": "Python, PyTorch, torchvision",
    "href": "projects.html#p-016",
    "text": "fusemachines wk 9 — neu steel defect cnn pytorch cnn classifier for neu-det steel surface-defect detection — six classes, 1,800 grayscale images from-scratch nn foundation → tuned cnn, 98.8%/78.9% train/val accuracy; augmentation, batchnorm, and dropout ablations plus grid-search and optuna hyperparameter tuning python pytorch torchvision cnn optuna scikit-learn"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 8 — Forecasting",
    "meta": "Python, statsmodels, SARIMA",
    "href": "projects.html#p-014",
    "text": "fusemachines wk 8 — forecasting time-series pipeline benchmarking nine forecasters on monthly s&p 500 data (1990–2024) via mase/rmse 4-model ensemble outperformed every single model — mase 2.44, confirmed via diebold-mariano test (p = 0.0092) python statsmodels sarima holt-winters prophet lightgbm lstm xgboost"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 7 — Customer Segmentation",
    "meta": "Python, scikit-learn, K-Means",
    "href": "projects.html#p-009",
    "text": "fusemachines wk 7 — customer segmentation market segmentation on uci online retail ii (~500,000 transactions) with rfm + category-ratio feature engineering full clustering comparison — k-means, hierarchical, dbscan — validated via silhouette and davies-bouldin indices python scikit-learn k-means hierarchical clustering dbscan rfm pandas scipy"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 6 — Probabilistic Models",
    "meta": "Python, PyMC, ArviZ",
    "href": "projects.html#p-008",
    "text": "fusemachines wk 6 — probabilistic models bayesian inference pipeline for telco churn using pymc, arviz, and pgmpy mle/map estimation, dirichlet-multinomial updating, and a fitted pymc bayesian logistic regression artifact python pymc arviz pgmpy bayesian inference scikit-learn pandas"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 4 — Telco Churn & CLV ML Pipeline",
    "meta": "Python, scikit-learn, Logistic Regression",
    "href": "projects.html#p-004",
    "text": "fusemachines wk 4 — telco churn & clv ml pipeline classification and regression pipeline for churn prediction and customer lifetime value modeling — roc-auc 0.841 ± 0.005 ridge regression best for clv (mean $1,304.70); full html report export via papermill python scikit-learn logistic regression ridge lasso pandas papermill"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 5 — Telco Churn Tree-Based Ensemble Pipeline",
    "meta": "Python, XGBoost, Random Forest",
    "href": "projects.html#p-003",
    "text": "fusemachines wk 5 — telco churn tree-based ensemble pipeline end-to-end classification pipeline on telco customer churn (7,043 rows) with smote restricted to training folds only random forest + xgboost with shap explainability; secondary tenure-prediction task with a model card python xgboost random forest shap imbpipeline smote joblib scikit-learn"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 3 — Text-to-SQL Agentic Pipeline",
    "meta": "Python, FastAPI, Streamlit",
    "href": "projects.html#p-002",
    "text": "fusemachines wk 3 — text-to-sql agentic pipeline five-stage agentic text-to-sql system over a postgresql database — planner → generator → validator → executor → summarizer 100% execution success and 100% result accuracy across a 50-question benchmark, zero retries required python fastapi streamlit gpt-4o-mini postgresql docker prompt chaining"
  },
  {
    "type": "project",
    "title": "Claude Desktop Multi-Profile & Sync Utilities",
    "meta": "PowerShell 7, Windows Shell, Electron",
    "href": "projects.html#p-021",
    "text": "claude desktop multi-profile & sync utilities powershell 7 & windows shell utility suite enabling multi-user profile isolation for anthropic's claude desktop application features native profile session swapping, single-instance browser oauth (`claude://`) deep-link routing, and automated git repository synchronization with conventional commit messaging powershell 7 windows shell electron msix / appx oauth 2.0 robocopy git automation batch cli"
  },
  {
    "type": "project",
    "title": "Pulse Live — Real-Time Interactive Polling Platform",
    "meta": "React 19, TypeScript, Vite",
    "href": "projects.html#p-020",
    "text": "pulse live — real-time interactive polling platform real-time audience engagement platform featuring instant multi-mode polling (choice, q&a, word cloud), presenter mode, and interactive voting synchronization built with react 19, typescript, and supabase websockets / database for instant live response updates, presenter display controls, and qr code joining react 19 typescript vite supabase websockets react router v7 lucide icons qr code"
  },
  {
    "type": "project",
    "title": "Nexus — Personal AI Operating System",
    "meta": "In Progress · React, Vite, FastAPI",
    "href": "projects.html#p-011",
    "text": "nexus — personal ai operating system project-centric ai operating system replacing the multi-browser/multi-account/multi-tool workflow react (vite) + fastapi + sqlite/fts5, parallel groq + gemini fan-out — v2 redesign complete june 12, 2026 react vite fastapi sqlite fts5 groq gemini python in progress"
  },
  {
    "type": "project",
    "title": "SysOptimizer — Windows Optimization Tool",
    "meta": "Python, CustomTkinter, PyInstaller",
    "href": "projects.html#p-007",
    "text": "sysoptimizer — windows optimization tool standalone windows optimization tool packaged as a .exe via pyinstaller power plan switcher, ram flush, background bloat panel, startup scanner — runs silently via create_no_window python customtkinter pyinstaller wmi powershell"
  },
  {
    "type": "project",
    "title": "Edge AI Stability Detection System",
    "meta": "Python, scikit-learn, RandomForest",
    "href": "projects.html#p-006",
    "text": "edge ai stability detection system ml system predicting platform stability from simulated imu sensor data — random forest, 99.8% test accuracy rest api via fastapi, joblib export for robotics integration with gcsbr (gesture-controlled self-balancing robot) python scikit-learn randomforest fastapi joblib imu edge ai"
  },
  {
    "type": "project",
    "title": "Alpha Android Super-App",
    "meta": "In Progress · Kotlin, Jetpack Compose, Material3",
    "href": "projects.html#p-005",
    "text": "alpha android super-app modular personal super-app (kotlin/jetpack compose, material3) — gesture remote, budget tracker, multi-mode calculator calculator is the primary shipping target, play store release in progress kotlin jetpack compose material3 camerax mediapipe bluetooth spp datastore apache poi in progress"
  }

  ]
};

/* ── Navbar injection ─────────────────────────────────────── */
function renderSiteNav() {
  const el = document.getElementById('siteNav');
  if (!el) return;
  const navLinks = SITE.navLinks
    .map(link => `<li><a href="${link.href}" title="Press ${link.key}">${link.label}</a></li>`)
    .join('');
  const drawerLinks = SITE.navLinks
    .map(link => `<a href="${link.href}">${link.label}</a>`)
    .join('') + `<a href="/contact.html" class="nav-cta">Connect</a>`;
  el.innerHTML = `
    <nav id="nav" aria-label="Primary navigation">
      <a href="/index.html" class="nav-logo" id="nav-logo">ADT<span>.</span></a>
      <ul class="nav-links" id="nav-links">
        ${navLinks}
      </ul>
      <div class="nav-right">
        <a href="/contact.html" class="nav-cta" aria-label="Connect with Aaradhya">Connect</a>
        <button class="nav-access-btn" id="navTourBtn" aria-label="Start guided site tour" title="Take a tour (Shift+T)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M9.5 9.5a2.5 2.5 0 0 1 4.6-1.4c0 1.6-2.1 1.9-2.1 3.4"/><circle cx="12" cy="16.2" r="0.4" fill="currentColor" stroke="none"/>
          </svg>
          <span>Tour</span>
        </button>
        <button class="nav-access-btn" id="navAccessBtn" aria-label="Access Control" title="Access Control">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span id="navAccessLabel">Access</span>
        </button>
        <button class="nav-search-btn" id="navSearchBtn" aria-label="Search (press / or Ctrl+K)" title="Search (press / or Ctrl+K)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
          <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </button>
        <button class="nav-hamburger" id="navHamburger" aria-label="Open menu" aria-expanded="false" aria-controls="navDrawer">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <div class="nav-drawer" id="navDrawer" role="navigation" aria-label="Mobile navigation">
      ${drawerLinks}
      <button class="nav-access-btn" id="drawerTourBtn" style="margin: 1rem 0; width: calc(100% - 2rem); justify-content: center;" aria-label="Start guided site tour">
        Take a Tour
      </button>
      <button class="nav-access-btn" id="drawerAccessBtn" style="margin: 0 0 1rem; width: calc(100% - 2rem); justify-content: center;" aria-label="Access Control">
        Access Control / Login
      </button>
    </div>`;

  const navAccessBtn = document.getElementById('navAccessBtn');
  if (navAccessBtn) {
    navAccessBtn.addEventListener('click', handleAccessBtnClick);
  }
  const drawerAccessBtn = document.getElementById('drawerAccessBtn');
  if (drawerAccessBtn) {
    drawerAccessBtn.addEventListener('click', handleAccessBtnClick);
  }
}

function handleAccessBtnClick() {
  const actTier = ACCESS_CONTROL.getActualTier();
  if (actTier > ACCESS_CONTROL.TIER_PUBLIC) {
    openLogoutModal();
    return;
  }
  openAccessModal();
}

function openLogoutModal() {
  if (document.getElementById('logoutModalOverlay')) return;

  const actTier = ACCESS_CONTROL.getActualTier();
  const session = ACCESS_CONTROL.getSessionData();
  const label = actTier === ACCESS_CONTROL.TIER_MASTER ? 'Master Level' : 'Higher Tier (VIP)';
  const emailLine = session?.user?.email ? `<div style="margin-top:0.4rem;font-family:var(--mono);font-size:0.72rem;color:var(--muted);">${session.user.email}</div>` : '';

  const overlay = document.createElement('div');
  overlay.id = 'logoutModalOverlay';
  overlay.className = 'access-modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Confirm Log Out');

  overlay.innerHTML = `
    <div class="access-modal-card" id="logoutModalCard">
      <div class="access-modal-header">
        <div class="access-modal-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          <span>Log Out</span>
        </div>
        <button type="button" class="access-modal-close" id="logoutModalClose" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div style="padding:0.25rem 0 1.2rem;text-align:center;">
        <div>You're signed in with <strong>${label}</strong> access.</div>
        ${emailLine}
        <div style="margin-top:0.6rem;font-size:0.85rem;color:var(--muted);">You'll need to sign in again to regain access.</div>
      </div>
      <div class="access-actions">
        <button type="button" class="access-btn-submit" id="logoutCancelBtn">Cancel</button>
        <button type="button" class="access-btn-logout" id="logoutConfirmBtn" style="flex:1;">Log Out</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const closeBtn = document.getElementById('logoutModalClose');
  const cancelBtn = document.getElementById('logoutCancelBtn');
  const confirmBtn = document.getElementById('logoutConfirmBtn');

  closeBtn.addEventListener('click', closeLogoutModal);
  cancelBtn.addEventListener('click', closeLogoutModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeLogoutModal(); });

  confirmBtn.addEventListener('click', () => {
    ACCESS_CONTROL.logout();
    closeLogoutModal();
    showToast('Logged out. Reverted to public guest access.');
  });

  requestAnimationFrame(() => overlay.classList.add('open'));
  document.body.style.overflow = 'hidden';
}

function closeLogoutModal() {
  const overlay = document.getElementById('logoutModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => overlay.remove(), 250);
}

/* ── What's New modal ───────────────────────────────────────── */
function openWhatsNewModal() {
  let modal = document.getElementById('whatsNewModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'whatsNewModal';
    modal.className = 'access-modal-overlay';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', "What's New — Major Releases");
    document.body.appendChild(modal);
  }

  const releasesHtml = SITE_RELEASES.map(rel => `
    <div class="wn-card">
      <div class="wn-card-header">
        <span class="wn-badge">${rel.version}</span>
        <span class="wn-title">${rel.title}</span>
        <div class="wn-meta">
          <span class="wn-date">${rel.date}</span> · 
          <a class="wn-sha" href="https://github.com/Aaradhya-Dev-Tamrakar/Aaradhya-Dev-Tamrakar.github.io/commit/${rel.sha}" target="_blank" rel="noopener">${rel.sha} ↗</a>
        </div>
      </div>
      <ul class="wn-highlights">
        ${rel.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  modal.innerHTML = `
    <div class="access-modal-card wn-modal-card">
      <div class="access-modal-header">
        <div class="access-modal-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
          <span>What's New — Major Releases</span>
        </div>
        <button type="button" class="access-modal-close" id="wnModalClose" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div class="wn-modal-body">
        ${releasesHtml}
      </div>
      <div class="wn-modal-footer">
        <span>Press <kbd>Shift+N</kbd> anytime to open What's New</span>
      </div>
    </div>
  `;

  document.getElementById('wnModalClose').addEventListener('click', closeWhatsNewModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeWhatsNewModal(); });

  localStorage.setItem('adt_last_seen_release', SITE_RELEASES[0].version);
  requestAnimationFrame(() => modal.classList.add('open'));
  document.body.style.overflow = 'hidden';
}

function closeWhatsNewModal() {
  const modal = document.getElementById('whatsNewModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Footer injection ─────────────────────────────────────── */
function renderSiteFooter() {
  const el = document.getElementById('siteFooter');
  if (!el) return;
  const socialsHtml = SITE.socials
    .map(s => `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}" title="${s.label}">${SOCIAL_ICONS[s.label] || s.label}</a>`)
    .join('');
  el.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">ADT<span>.</span></span>
        <span class="footer-tagline">Electronics &amp; AI/ML Engineer</span>
      </div>
      <div class="footer-socials">${socialsHtml}</div>
    </div>
    <div class="footer-rule"></div>
    <div class="footer-copy">${SITE.footerCopy} · <a href="/privacy.html">Privacy Policy</a> · <a href="/terms.html">Terms of Service</a> · <button id="wnFooterBtn" type="button" class="footer-wn-btn">What's New (v36)</button></div>`;

  const btn = document.getElementById('wnFooterBtn');
  if (btn) btn.addEventListener('click', openWhatsNewModal);
}

/* ── Explore ("quick-nav") grid injection ─────────────────────
   Renders every QUICK_NAV_PAGES entry that's eligible for the
   current page (always-shown pages, plus any showOn-gated page
   whose list includes this file) into #quickNavGrid. The current
   page renders as a disabled --current card instead of a link;
   every other card gets a dist-N/direction arrow based on its
   position relative to the current page in the canonical order. */
function renderQuickNav() {
  const el = document.getElementById('quickNavGrid');
  if (!el) return;
  const page = location.pathname.split('/').pop() || 'index.html';
  const currentIndex = QUICK_NAV_PAGES.findIndex(p => p.file === page);
  const eligible = QUICK_NAV_PAGES.filter(p => !p.showOn || p.showOn.includes(page));

  el.innerHTML = eligible.map(p => {
    const isCurrent = p.file === page;
    const idx = String(eligible.indexOf(p) + 1).padStart(2, '0');
    if (isCurrent) {
      return `
        <div class="quick-nav-card quick-nav-card--current">
          <div class="quick-nav-index">P — ${idx}</div>
          <div class="quick-nav-title">${p.title}</div>
          <p class="quick-nav-desc">${p.desc}</p>
          <span class="quick-nav-cta">This is the current page</span>
        </div>`;
    }
    const targetIndex = QUICK_NAV_PAGES.findIndex(q => q.file === p.file);
    const dist = Math.min(5, Math.max(1, Math.abs(targetIndex - currentIndex)));
    const arrow = targetIndex < currentIndex ? '&laquo;' : '&raquo;';
    return `
        <a class="quick-nav-card" href="/${p.file}">
          <div class="quick-nav-index">P — ${idx} <span class="card-arrow dist-${dist}">${arrow}</span></div>
          <div class="quick-nav-title">${p.title}</div>
          <p class="quick-nav-desc">${p.desc}</p>
          <span class="quick-nav-cta">${p.cta} →</span>
        </a>`;
  }).join('');
}

/* ── Active nav link (page-level, not anchor) ─────────────── */
function setActiveNav() {
  // Match current page filename against each nav link's href
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a, .nav-cta').forEach(a => {
    const linkPage = (a.getAttribute('href') || '').split('/').pop().split('#')[0] || 'index.html';
    const isCurrent = linkPage === page;
    a.classList.toggle('active', isCurrent);
    if (isCurrent) {
      a.setAttribute('aria-current', 'page');
    } else {
      a.removeAttribute('aria-current');
    }
  });
}

/* ── Theme toggle ─────────────────────────────────────────── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme(event) {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

  if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    applyTheme(next);
    localStorage.setItem('adt-theme', next);
    return;
  }

  const x = event?.clientX ?? window.innerWidth / 2;
  const y = event?.clientY ?? 0;
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  const transition = document.startViewTransition(() => {
    applyTheme(next);
    localStorage.setItem('adt-theme', next);
  });

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: 400,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)'
      }
    );
  });
}

function initTheme() {
  const saved = localStorage.getItem('adt-theme') || 'dark';
  applyTheme(saved);
}

function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    triggerHapticFeedback(12);
    toggleTheme(e);
  });
}

/* ── Mobile hamburger & Bottom Sheet Navigation (v36) ─────── */
function initHamburger() {
  const hamburger = document.getElementById('navHamburger');
  const drawer = document.getElementById('navDrawer');
  if (!hamburger || !drawer) return;

  // Create drag handle if missing
  if (!drawer.querySelector('.nav-drawer-handle')) {
    const handle = document.createElement('div');
    handle.className = 'nav-drawer-handle';
    handle.setAttribute('aria-hidden', 'true');
    drawer.insertBefore(handle, drawer.firstChild);
  }

  // Create backdrop if missing
  let backdrop = document.getElementById('navDrawerBackdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'navDrawerBackdrop';
    backdrop.className = 'nav-drawer-backdrop';
    document.body.appendChild(backdrop);
  }

  const mainEl = document.getElementById('main-content') || document.querySelector('main');
  const footerEl = document.querySelector('footer');

  function setOpen(isOpen) {
    drawer.classList.toggle('open', isOpen);
    backdrop.classList.toggle('open', isOpen);
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (mainEl) mainEl.inert = isOpen;
    if (footerEl) footerEl.inert = isOpen;
  }

  hamburger.addEventListener('click', () => {
    setOpen(!drawer.classList.contains('open'));
  });

  backdrop.addEventListener('click', () => {
    setOpen(false);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      setOpen(false);
      hamburger.focus();
    }
  });

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });
}

/* ── Scroll: nav elevation, progress bar, back-to-top ────── */
function initScroll() {
  const nav = document.getElementById('nav');
  const backTop = document.getElementById('backTop');
  const scrollPct = document.getElementById('scrollPct');
  const progressBar = document.getElementById('scrollProgress');
  const NEAR_BOTTOM_PX = 96;

  let scrollTicking = false;
  function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const nearBottom = max > 0 && (max - y) < NEAR_BOTTOM_PX;
    if (nav) nav.classList.toggle('scrolled', y > 50);
    if (backTop) backTop.classList.toggle('visible', y > 400);
    if (scrollPct) scrollPct.classList.toggle('visible', y > 400 && !nearBottom);
    if (progressBar) {
      const pct = max > 0 ? y / max : 0;
      progressBar.style.transform = `scaleX(${pct})`;
      if (scrollPct) scrollPct.textContent = Math.round(pct * 100) + '%';
    }
    scrollTicking = false;
  }
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(onScroll);
      scrollTicking = true;
    }
  }, { passive: true });

  if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const isMinus = e.key === '-' || e.key === '_' || e.code === 'Minus';
    const isEqual = e.key === '=' || e.key === '+' || e.code === 'Equal';
    if (!isEqual && !isMinus) return;
    const tag = (document.activeElement || {}).tagName || '';
    if (/^(INPUT|TEXTAREA|SELECT)$/i.test(tag) || document.activeElement?.isContentEditable) return;
    e.preventDefault();
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (isEqual) {
      window.scrollTo({ top: e.shiftKey ? max * 0.25 : 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: e.shiftKey ? max * 0.75 : max, behavior: 'smooth' });
    }
  });
}

/* ── Reveal on scroll & Stagger (v35) ─────────────────────── */
function initReveal() {
  // Auto-assign staggered delays to card grid children
  document.querySelectorAll('.quick-nav-grid, .projects-grid, .achievements-grid, #quickNavGrid').forEach(grid => {
    const children = grid.querySelectorAll('.reveal');
    children.forEach((child, i) => {
      child.classList.add(`reveal-stagger-${(i % 8) + 1}`);
    });
  });

  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.05 }
  );
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── Scroll-Triggered Count-Up Animation (v35) ─────────────── */
function initCountUp() {
  const statCells = document.querySelectorAll('.stat-cell');
  if (!statCells.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cell = entry.target;
        const numEl = cell.querySelector('.stat-num');
        if (numEl && !numEl.classList.contains('counted')) {
          numEl.classList.add('counted');
          animateNum(numEl);
        }
        observer.unobserve(cell);
      }
    });
  }, { threshold: 0.25 });

  statCells.forEach(cell => observer.observe(cell));

  function animateNum(el) {
    const rawText = el.getAttribute('data-count-target') || el.textContent.trim();
    const match = rawText.match(/^(\d+)(.*)$/);
    if (!match) return;

    const targetVal = parseInt(match[1], 10);
    const suffix = match[2] || '';
    const spanSuffix = el.querySelector('span')?.outerHTML || (suffix ? `<span>${suffix}</span>` : '');
    const startTime = performance.now();
    const duration = 1200;

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * targetVal);

      el.innerHTML = `${current}${spanSuffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.innerHTML = `${targetVal}${spanSuffix}`;
      }
    }

    requestAnimationFrame(step);
  }
}

/* ── Typed Hero Subtitle Animation (v35) ───────────────────── */
function initTypedCaption() {
  const el = document.getElementById('hero-caption');
  if (!el) return;

  const CAPTIONS = [
    'No subscriptions — just time, iteration, and a lot of debugging.',
    'Building at the convergence of embedded firmware & applied ML.',
    'Designing resilient systems from PCB traces to edge neural nets.',
    'Engineered for clarity, speed, and real-time responsiveness.',
    'Exploring robotics, LoRa mesh networks, and IoT telemetry.',
    'Continuously benchmarking, testing, and shipping upgrades.'
  ];

  const caption = CAPTIONS[Math.floor(Math.random() * CAPTIONS.length)];
  el.textContent = '';
  el.style.opacity = '1';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = caption;
    return;
  }

  let i = 0;
  const cursor = document.createElement('span');
  cursor.className = 'typed-cursor';
  cursor.textContent = '|';

  function typeChar() {
    if (i < caption.length) {
      el.textContent = caption.substring(0, i + 1);
      el.appendChild(cursor);
      i++;
      setTimeout(typeChar, 25 + Math.random() * 20);
    } else {
      setTimeout(() => cursor.remove(), 2800);
    }
  }

  setTimeout(typeChar, 600);
}

/* ── Custom cursor (pointer: fine only) ───────────────────── */
function initCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function tick() {
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(tick);
  })();
}

/* ── Deferred GA4 load ────────────────────────────────────── */
function loadGA4() {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${SITE.GA4_ID}`;
  s.onload = () => { gtag('js', new Date()); gtag('config', SITE.GA4_ID); };
  document.head.appendChild(s);
}

/* ── Global search index (each page appends its entries) ──── */
// Usage in page: SEARCH_INDEX.push(...entries)
window.SEARCH_INDEX = window.SEARCH_INDEX || [];

/* ── Live date computation ────────────────────────────────── */
// Computes current Fuse AI Fellowship week and BEI semester from today's date.
// Results exposed on window.LIVE — page-specific scripts read and apply them.
function computeLiveDates() {
  var now = new Date();

  // ── Fuse AI Fellowship week ──────────────────────────────
  // Anchor: Week 1 started Monday 4 May 2026 (Mon–Sun cadence).
  // Week flips every Monday 00:00 local time.
  var FUSE_WK1 = new Date(2026, 4, 4);  // May 4 2026, 00:00 local
  var FUSE_TOTAL = 24;                     // 6 months × 4 weeks
  var MS_WEEK = 7 * 24 * 60 * 60 * 1000;
  var elapsed = now - FUSE_WK1;
  var fuseWeek = elapsed >= 0 ? Math.floor(elapsed / MS_WEEK) + 1 : null;
  // Fellowship is complete once Wk24 ends (Mon Oct 19 2026 00:00 local)
  var FUSE_END = new Date(FUSE_WK1.getTime() + FUSE_TOTAL * MS_WEEK);
  var fuseComplete = fuseWeek !== null && now >= FUSE_END;

  var fuseLabel, fuseStatus;
  if (fuseWeek === null) {
    fuseLabel = 'Fuse AI Fellowship — not yet started';
    fuseStatus = 'upcoming';
  } else if (fuseComplete) {
    fuseLabel = 'Fuse AI Fellowship — Completed (May–Oct 2026, 24 wks)';
    fuseStatus = 'complete';
  } else {
    var currentWk = Math.min(fuseWeek, FUSE_TOTAL); // cap display at Wk24
    var wkStart = new Date(FUSE_WK1.getTime() + (currentWk - 1) * MS_WEEK);
    var wkEnd = new Date(wkStart.getTime() + 6 * 24 * 60 * 60 * 1000);
    var fmt = function (d) {
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };
    fuseLabel = 'Fuse AI Fellow — Wk ' + currentWk + '/' + FUSE_TOTAL
      + ' (' + fmt(wkStart) + '–' + fmt(wkEnd) + ') ongoing';
    fuseStatus = 'ongoing';
  }

  // ── BEI Semester ─────────────────────────────────────────
  // IV/I (7th sem) until KEC 8th sem officially begins Sep 1 2026.
  var SEM_SWITCH = new Date(2026, 8, 1); // Sep 1 2026 00:00 local
  var isIV2 = now >= SEM_SWITCH;

  var semLabel = isIV2 ? 'IV/II' : 'IV/I';
  var semFull = isIV2 ? 'Year IV / Part II — 8th Semester'
    : 'Year IV / Part I — 7th Semester';
  var semNote = isIV2
    ? '8th Semester · Expected graduation January 2027'
    : '7th Semester · Expected graduation January 2027';
  var heroTag = 'BEI ' + semLabel + ' · KEC, IOE · Tribhuvan University';

  var IV1_SUBJECTS = [
    'Wireless Communication', 'Artificial Intelligence',
    'Organization &amp; Management', 'Digital Signal Analysis &amp; Processing',
    'RF &amp; Microwave Engineering', 'Aeronautical Telecom', 'Project Part A'
  ];
  var IV2_SUBJECTS = [
    'Telecommunications', 'Professional Practice',
    'Energy, Environment &amp; Society', 'Information Systems',
    'Elective II (EX 765)', 'Elective III (EX 785)',
    'Project Part B — SPARK'
  ];

  window.LIVE = {
    fuseWeek: fuseWeek,
    fuseLabel: fuseLabel,
    fuseStatus: fuseStatus,
    semLabel: semLabel,
    semFull: semFull,
    semNote: semNote,
    heroTag: heroTag,
    subjects: isIV2 ? IV2_SUBJECTS : IV1_SUBJECTS,
    isIV2: isIV2,
  };
}

/* ── Apply live dates to elements (called per-page) ──────── */
// Pass a map of { elementId: fn(LIVE) | string }.
// String values used as-is; functions called with LIVE object.
function applyLiveDates(map) {
  if (!window.LIVE) computeLiveDates();
  var L = window.LIVE;
  Object.keys(map).forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    var v = map[id];
    el.innerHTML = typeof v === 'function' ? v(L) : v;
  });
}

/* ── NPT hero date — Bikram Sambat / Gregorian toggle ──────── */
// Backtick (`) — or a click on the date itself — toggles the hero
// status-card date between B.S. and A.D. Calendar table covers BS
// 1975–2099 (~AD 1918–2043), ported from remotemerge/nepali-date-converter
// (MIT License) and cross-checked against ramropatro.com's live BS↔AD
// converter before embedding. No-ops on pages without #statusClockDate.
const BS_YEARS = [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366], [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366], [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366], [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366], [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366], [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366], [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]];
const BS_EPOCH_UTC = Date.UTC(1918, 3, 13); // AD date of 1975-01-01 BS
const BS_MONTHS = ['Baisakh', 'Jestha', 'Ashadh', 'Shrawan', 'Bhadra', 'Ashwin', 'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'];
const AD_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let statusDateStrings = null; // { ad, bs } — computed once at boot

function kathmanduYMD(date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kathmandu', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(date);
  const get = t => Number(parts.find(p => p.type === t).value);
  return { y: get('year'), m: get('month'), d: get('day') };
}

function adToBs(ymd) {
  const targetUTC = Date.UTC(ymd.y, ymd.m - 1, ymd.d);
  let remaining = Math.round((targetUTC - BS_EPOCH_UTC) / 86400000);
  if (remaining < 0) return null;
  for (let by = 1975; by <= 2099; by++) {
    const row = BS_YEARS[by - 1975];
    if (!row) return null;
    if (remaining >= row[12]) { remaining -= row[12]; continue; }
    for (let bm = 0; bm < 12; bm++) {
      if (remaining >= row[bm]) { remaining -= row[bm]; continue; }
      return { year: by, month: bm, date: remaining + 1 };
    }
  }
  return null;
}

function renderStatusDate() {
  const el = document.getElementById('statusClockDate');
  if (!el || !statusDateStrings) return;
  const mode = localStorage.getItem('adt-date-calendar') || 'ad';
  el.textContent = (mode === 'bs' && statusDateStrings.bs) ? statusDateStrings.bs : statusDateStrings.ad;
}

function toggleStatusDate() {
  if (!statusDateStrings) return;
  const current = localStorage.getItem('adt-date-calendar') || 'ad';
  localStorage.setItem('adt-date-calendar', current === 'bs' ? 'ad' : 'bs');
  renderStatusDate();
}

function initStatusDate() {
  const el = document.getElementById('statusClockDate');
  if (!el) return;

  const ymd = kathmanduYMD(new Date());
  const bs = adToBs(ymd);
  statusDateStrings = {
    ad: ymd.d + ' ' + AD_MONTHS[ymd.m - 1] + ' ' + ymd.y + ' AD',
    bs: bs ? (bs.date + ' ' + BS_MONTHS[bs.month] + ' ' + bs.year + ' BS') : null,
  };
  el.title = 'Click, or press ` — toggle B.S. / A.D.';
  el.addEventListener('click', toggleStatusDate);
  renderStatusDate();
}

/* ── Encrypted Payload Data Store (Zero-leak AES-256-GCM) ───── */
const ACCESS_CONTROL_PAYLOADS = {
  "index-vip": "6cfee78c5a3d920a707a92a7c6d064a54f5719d3ef3ebe55603eed4d9aaef3b18eef0db305b9890686a21ac3b12beb42c759f968f07bbb43fd57233d44cfce83b5c0779f76fe5bcde97168b827057a7b9af21bafe70f5ed38383aac19f83d83bcbfedfa51b97bede507ce1500073a66653ee081894fc91c7987b8a255339c7ede006d010295e6200a63bb044742a466ae6b72fe6f1e7e571933c757e63132ba2d869277b531942aeb082a4408165e002c21636f2d7b57eee365356e932343c4a386d54af75c0391d483cb9b5fedcbce96574d3c691b6b22f94ddb7e192d356c23b2d805ff93bb260971171ac92fb61c52fac77b3523699be4b8b47aced5966facc3cf422e3338072fcedfd96260ee87b0e39e14cc6d9cd3136a3787a5741879564fea76456d6b6a79cd991455da8e1d8fd659789923c6796627ceabd9c113192279da6f241834acd3cc9453b2325507efabe5e4891af847ce17771ef1e5c4e96fb8571bce0b971d87a50ab9e4cc6e7264cf01bd85f7fc1f3bf6c5098fec0c87cabaf29d636dd71b0359c8d68e6efff42c4f603bba2d4ef20fe2b30a22e9ab1942075fbaa456cc2b155f6a4787a6696ab7a8da218ca711e13cad994495eec02523640a699a28496d581882f068d162c2071c7c3ba469c11ef1b70797a68b51a9f9011e78d0627347903375ccd43485d56cd791b2c977bdbea7c3ad4fe6a47e0bee61ccfaf376a58efa9ce379db61f74c73e693b861cd6447478fdcb0682ff36597290a4e018354acfa2b0233a9fbda823ffdb33e569338b4d69887fcdae47ed12109ae30626c709bda566c0cd6a1cd41569c972ba5600a27d56c074c0dc494843367ed0fa00260081e1e4c3fd49a134b97943f959777ba6dc350ac5da6d56ff0b7e855431297446d17e11059638f6816b677226daba464e869155afccce3b8cee2c7ec7fd3b2894bf027cc3666e9fc5a736a99ec31543ebd646172f18689a54d896a891bd9811ab990daf9ceef41ff72d161e3f52e351264c6e28370d412df90a155b78ac197b024b4040b59743ea8f551cf4155119b4b177abf4c8fec80aa8edbfb677b15eae36b11a26c01346d1140df36c615db3c7e98a2bdc58a0ebceaa6ceff589dde728a548ba8c801358480887cc1ca2bf5d598179482c277f2fd7ec61a8f8ffb77d072d3b490855d8e82749d0ceb6d34ad31615b0211dc54bcd71f24d3849cf94f6d44b86a2a047fb3dff71f5e450f89ebff2d86dfcc85aa235c04b35baf6e8929eb9ec993b9c29387a7d2cf966f6b93ebddb42adc5b91f8df4b2f8a30126a6e49e4eab506d1cb2b03709b4301daf56f2eb26c2c3125e62dc82aeb8d1a849df574ff79e82c082bd866e159d62b8dc638f73a695cd5cea2e46f4872b9ee72ba5fd217a81fe97950204d4103aa48b2dc40eab3178bd1193d64f4696533f28b15a5ff262fb6ee690cdc9ab34cf32115118b4632c2f88609dd714853643a6adaf704a2ff5c26182d893339b45ac80e1c1b25ece7b199619b7eaba941a61d4d9c54a0dffa9fc87282111b9cb80a8eead25f35fa7c826e09c05ba829a8c126ba5dd7eff7415b132b0d4e47479111af93a84b6697e92199376b71d4dca40d1f181adafd28cf4f77386cae59ed19010d80c89592ec05a1841f5055ec6b1315f3c590f68bea1f25308a278afda48f70714ea7ecba9f704bfa76c964ab4791b61d22a2c148036f495319b16f6b7b42f68f9f06f922a668c9a280dee9943fe5ebeaaa697a76bbbfff001e7730344793e39a4d82a312b7ae9995a7d6c67d0520f4f52b05122ceaad7764b34598992263d14214f7416b17edd1dbb10a5f0063a935a7b14b519d5b6febb7fe0145d1c60b17dc69e8999e8b879765011b2a9f053bb1acf6021b74f95e7b006cb5f4f4242bef9776350532d93ad35132105fc416023965ba8b5140c5acb2a1ae9eb75ebc1253af261ef75157b51330dc3ad96e33dceb422bcad593bb8bd5c403a99c555e82876e68bb784230d33acb02ed56c698ea21921a1080516d9cf0e4d6caa2b28d04aa075f6b9c02f355e86d38cbcca36c382552ec76ff6e075b317d4d0e2c0e2075513abd4bf0b41df890fcfece284d763e575df401c69cb93353df7777e87413c1bdffa20392646f8f4f49887e1be427a545e06c2fa93780b951703dad70c26d0ebf89eb0372148b00555731a494901047b856cfaa36d105f77eee829b554d516ef14c5d42bc5ca429edc32d58f7bc729a9ee58fc5f6d94f41d98de3663a12461889c3df4286fd47a4b50ae5712f639412fc120930e9750fa7c519cc48732ec77e03bd51e432d9ce582d53e3ab13b30a88f8865f79133eecfb20650279e2ed0c6fac9f85e729a6f555787d68910ec2a59bdb7c71a3cb05e7a1c7d2f8aa7b1c7f5794e04f5033bcc6298aa8596f155f56f2c00f6cb5b34908a83f507f12f11a9e93ff3938930821d398e968cc1ed98faa6f58a3b1ba5cfe5b4597938a08e48544662496906a5cafc7c7237ffd5e22b7913c955a542280f8d2205bdff5f919e2d802a9387917751068db735a193cca4ebd03bb48c39c091feba0573a5011fe3667160f579cb5d1048f9dec36d123d161840747e6c771411496f962c3d615a125d9a2ab8516d617cf5fa1e5c1c228718ecaac2c87c00263c9c2b7c34a06c0a709fd18ada4ab7a70f3892c26bd0e948e02cd07230d15112b60a11064091479b8e1fbe05ba7d8e06b0e5bc6048a47e8869d611cf7558f497b4b3276c499022e0a55f2b322a298e2cfdc8b6f0fcc3d7eeccb503245141b2f88552cf3ee272f8c1457a00cd39afbae999d3e6cb8f8d15f419b90daa86bb097deb783b70296be5bd44758c214e98e1e588ea8dd1d9ba8e12da569f148e20edf561c498205d373e79a2cde0eb37a11d04f0c9c546b970f7e3da10cbd4fcbc88b7a7b5a27be5a2219fa0bf36a80de1042196cbddfa3fe7c5d8ab4971c0cbd21c2de54de1f9a0c29a8767ba4d16d8a2e09a09782eb8675c66704f2b6623c072948bf0533f3acc395958b6a342e217318eb64a13d1c8eeb646c8bb74557ef41786d5baf8c61a81746e6e43c9413d9f34c966c95262022c62580474379e6e6be2eb0173a2a2d447dbd2a6aa6f1f1938112036aa9d0064b36ad1e813f040427771ea8f1a204b6c8a0aec00dc1985b88ee7b9da22fe4f73e4b59e86cf870488362d1924838c2e2571d3a732ef5acb0118419b00d4c8e50836c72958614dc6",
  "index-master": "9e12641f09ae090204530a9cb6911aab1071216349e6ab0a8faf18b926f63f8bc2a2d33d3a9fa0f788f70b531cee41d3ec7297476f4ba0ab1cb285ac1f9354614faca05786480e670718226226ccb80374460285c4e24f6dc07021c62e61748bcfe97101580408ed9f5f8fbd034b818128c01a04ff36c718fd87bb202cabedbcc7bb9b045ae6e51adcf263f4d97f1d592b0ef6c96a3d421a05cbdbe18247bb10eb9755a73d57d2f94c0bd55344a2d60362d5acead6e6ecfec0941ae06e060340464995c145fb8b86153bee12d26fe2fedf9c886c53270d72d13ae3f9536f18cabfbc36b0e74c43d9eb9136007c3170487d5cd518ee4000bc7c5ffa96ca937518a84a54a0ffb043eb9965b22ac6ec68253588a4f5be32ed2614c771082b12a91257a7fcc4a153a07fc50c42ac840ea5e49e75e5c845f7fda4a0d901f1f01761585ed240cecf2f063e7c926b6ce6d1c8654b3118c593b87d4cd47ab1a16a59774e32fe72aeb16cd67f577bed0c25a8199cd16842f9760cde91923a1601c266e912a9b17358faedfe45b4565bf05a3e0254c6f87dcc8a65b71a06852749c14ae66dec6c960970b12d1f31a3ecbeaf43b9acbc6f4f989bac006f9b765550e1e5ee226a931b6d76ca01b27d660282091ba958df2a79524dfdd5a6a02605580a7340607496006637aa5fbc05a7e3052174811a91ddf4c1b68f5b49ec7babc9c24c47efb90488d8fc294a4cdb3f88abddfebb66601160d7c7547c5490a5eeae3bc3cbfaa07b619db4f66841df82e4395ced9e18ef3d169e677eceba8471c2d66e2a575af5a088179da05a738c0c4f6ad56224cab96091699ec9f1d245a0035e2a9a6d0de8907c1fc9ce37b281ecf8b96247fa95df21b7334ac87ec0da1440c3ddf17d0a43bacd1492663a69b5515ec34f742abe74b4cda2112128cacf2717efc22720140e072210dc51f3fe795672245aae3b3e64dfa77674b78dd95b3a6991c5ff9620d5863e5c07651a195dde896091b9b1d45dc48f0f85ed80fbea2d642370058536075f93f874f54824608b5f53c5d4b3486499a91d5414641f73633adfa831c1bfd78cb1457560ec765a15ca9beb3a57356bb0e66e11ff78858effcfa74104f0c89893dd1bc344ef4837c80d6d6ff997be43fffd7a572d7f1dc74a4e5021b388efcbfc1324b3e28b147c3fbfc27ef2b86d47b400e4e9d555e63a46db9c619de2e096afc05e63fc0c7a6f95a27a2c04d546137c9f9ee41c881300fee3277175fdf8bdb2bc8b1b4d013e1eee59786d8e2c87eb9a4b51fc27005e4e4e39d9f5ac2ec91589aa14202cc159dbe8272c777859f1040be7b498ce3f5691609dd5beef5f2fddddec29e3136775a426c6f71b6ba261956dbd364543f870c17b13abe4388d3190349a3257fa6ba7494fe185e450808bad9849a421b8f5a83635ebe59329ccd64464ad82f2ff7d5667a8d2a7547530f124226af0c8a529719b4f32f0260cafc32f9654bc85df890241a44f45b9a9cce246ab2a402ffe2e3851d60203a0a33669116cf2bb677acf3da17a28703430c4c06ad85aae455c82d71f6fac7a3fff7304249de1529a3a3fd4bff7e087237c7b7afbbb61dbd73e06280616def6c3923d4ce8ed7241bc8a6187d3376431620265de22823e5c76c94b4c6acbb1ff15d4bbcceb649673e844481a97b3ffef7710a5c537c6c46d16642b2992dfcaab599c2f84562a9d83fdada9c7671931535edb1e20de99e6e246821ddb1c5142fad1240e25d81bafb2215b2f1eaf5fad7711ed1a97afec25b6609aab0cc32738ef7f91657288eef7ec385f43ebed493500e6170790bca8d0935c5c5ebacaa974c6effc5cb8f6aeda049d81bddfb8976fb00a45f34266b63c99c0afc1016ef3f04c908dd497b33238d57a356d7f0ecea10c79173f05c0665f4bd3d36038f2364cc31f324894ae94d965595055cde6d335938c03e4a476de212ea3fe6e4d38296d10d718b87967f0435fa2074c3542e7fde6b0765cf9ffed542f0ac45b24bb9084358408ab2c31000905dcf3b789e5baafb3abb6f774d57580e29823ce72",
  "proj-gcsbr": "5d1db65d4e8562edd1ac594e2d74d70e8b33d495d2a97aab47f78de5edbab3f9a9bda53bc519577fba32e9a4fcc21b9ccf5005ddbcb27d9afb9a788abbf2683b519c920cb8fc138b502c88e1bff0d9274f0ccf89ca0814f7f04fbde7ab5277adf5",
  "proj-fuse-wk11": "41018a076f73311a0afd2187afe04117167385274fa9f9340a3b084cd120c3b4820982baa976f0b2c9bb17122bbc36517413c34e04a05812909dcf2c18f614a54af8d8eac4dda3b39d1aa06d21a604cd0a67799a59091a274f59",
  "proj-fuse-wk10": "74e9229834b346861db4095552cf059a34efb2b2be3c38e59dff6b5eaa53b5012bc943b71e1b6b37ab331b011babb1f6c78e55b43bbaa20053c959e9a0932ae3f41a3c9a11f9ec4bbd1ad43f2a8d5eb7822b89150f7e2a",
  "proj-fuse-wk9": "b7cbbb6581ee829b37cfb4b1cab5d97cbae5b78293c45e19381f142176b619cf13b8124e6dd573a8a51c34d9aae5950969ffef8fa679fe6969b4f047491b6de5432e0042ec6d151b4b997d1867836e12ec89dee8",
  "proj-fuse-wk8": "03ef2f976161795a4d031a1b9b2c9796ad9c03fb8240cbf85e29f7085919f4659eb7b129ad91668d69fa10ce46ad6a1fa339f44b3804d9197b19ae82a0b270352f8c934aa892dbac2428ea8d25d6e29caac39359db71b3",
  "proj-fuse-wk7": "136fc7411b1a218a4a6454d434968273697f12d48acc04e21f1942176d26dcb0cc7b7c539460b513c9a26727bbdfe85fba3f172bd535d526ab07b02a70246a1ca34ec8d7926f837595bb1b36728ccc955107b57b88bc64ec60b8f1",
  "proj-fuse-wk6": "0ec2ae81cc9e6afc5f36a4550ce3ec7395aa640483c27fa8de876a8bb5d8d05a455141bd69a375ed743266309d9cb54715be55b282f938fcf07baa9bfe41403438cd6918865e422e32dd0fe1ec90b74791cebd06edb3889934b7",
  "proj-fuse-wk5": "9e465544f4663bdbec2fba7bf3e810e6c5c84a18eb30b19471c7d892d438a0c3bcec4e160bed91824dd7f6cadae6981bd38ba283febb9cd8f67286051d90cdcd0a54219cb3063fbf17ea8a96e776d11d63c30066cec5a422f587da",
  "proj-fuse-wk4": "15f221533283d76887be64d7ba6d0ae2beecfad9284857103ef01bf359d82ad2c349679c67afb529cc9cbccb18f2e88eaac51beb79033d2897e91a3c1df8900044862ea2904c08fdf936eee87d7c9a5da3b7fc",
  "proj-fuse-wk3": "9b2dd419e336c35dcc124b54e0e8d3b5fd48dd7b4f1ed9895ce35996b8a879f4fa8cc07c2bef3e74e8befff5852a669fe346ba694bb5b6c6e272ef7f2f8ff7d92b88c2a011393228413df0b307ad",
  "proj-nexus": "30f26e850c78aaa3931999990aa920ae222457b6e79053cb0249195d3ea2f155d720fa0534dc5b7412b7691e12a2137d52791a26174e1d4f4a5f481073c126",
  "proj-alpha-superapp": "2c5b90f50b5ef3637f0f20f3a4288c2613d128a05fc36748c7525837003b7b353bab6ad3c07f33518468e05307845e95680e0fd948c49369a77536a8d387534b68c27b4e210539ed",
  "proj-stability-ai": "81e7def015666a332e375780bb742a193e7a8a98f5997087b81c0e11cb2f2e13cce5fd7fec99d714d842df7ff562b87cda03e35a019187bb63ed20b88fe88577ad8c83a6f30a3869222212ad38",
  "proj-claude-desktop": "ee4fc1b66bde33d12ebbe5c5f877012ab87e56ead3c03a48dd457cf12450eb550a369e6032d3e4390dfa4f3b8d9fb3db54d3de45958e856a17e8a5dc7db3d854891ff3b3675151c7a6646175666e6801ff13df"
};

async function getDecryptionKey(passcode) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(passcode.trim().toLowerCase()),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );
  return await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: enc.encode('adt_salt_2026'),
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt']
  );
}

async function decryptHexPayload(hexStr, passcode) {
  try {
    const bytes = new Uint8Array(hexStr.match(/.{1,2}/g).map(b => parseInt(b, 16)));
    const iv = bytes.slice(0, 12);
    const tag = bytes.slice(12, 28);
    const cipherBytes = bytes.slice(28);

    const data = new Uint8Array(cipherBytes.length + tag.length);
    data.set(cipherBytes, 0);
    data.set(tag, cipherBytes.length);

    const key = await getDecryptionKey(passcode);
    const decrypted = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      data
    );
    return new TextDecoder().decode(decrypted);
  } catch (e) {
    console.error('Payload decryption failed:', e);
    return null;
  }
}

/* ── Access Control & Gating Engine ────────────────────────── */
const ACCESS_CONTROL = {
  TIER_PUBLIC: 0,
  TIER_VIP: 1,      // Higher Tier Access
  TIER_MASTER: 2,   // Master Level Access

  VIP_PASSCODES: ['vip2026', 'vip', 'tier1'],

  sessionKey: 'adt_access_session',
  simulatedTier: null,

  getSessionData() {
    try {
      return JSON.parse(localStorage.getItem(this.sessionKey));
    } catch (e) {
      return null;
    }
  },

  getActualTier() {
    const session = this.getSessionData();
    if (session && typeof session.tier === 'number') {
      return session.tier;
    }
    return this.TIER_PUBLIC;
  },

  getEffectiveTier() {
    if (this.simulatedTier !== null) return this.simulatedTier;
    return this.getActualTier();
  },

  authenticate(passcode, requestedTier = 1) {
    const clean = passcode.trim().toLowerCase();

    if (requestedTier === this.TIER_MASTER) {
      return { success: false, error: 'Master Level requires sign-in with an authorized Google account.' };
    }

    if (this.VIP_PASSCODES.includes(clean)) {
      this.saveSession(this.TIER_VIP, clean);
      return { success: true, tier: this.TIER_VIP, label: 'Higher Tier (VIP)' };
    }

    return { success: false, error: 'Invalid passcode. Please try again.' };
  },

  saveSession(tier, passcode) {
    const data = {
      tier,
      passcode,
      authenticatedAt: new Date().toISOString(),
      userAgent: navigator.userAgent
    };
    localStorage.setItem(this.sessionKey, JSON.stringify(data));
    this.updateUI();
  },

  saveGoogleSession(tier, passcode, userProfile) {
    const data = {
      tier,
      passcode,
      authProvider: 'google',
      user: userProfile,
      authenticatedAt: new Date().toISOString(),
      userAgent: navigator.userAgent
    };
    localStorage.setItem(this.sessionKey, JSON.stringify(data));
    this.updateUI();
  },

  logout() {
    localStorage.removeItem(this.sessionKey);
    this.simulatedTier = null;
    this.updateUI();
  },

  setSimulatedTier(tier) {
    this.simulatedTier = tier;
    this.updateUI();
  },

  updateUI() {
    renderAccessNavButton();
    updateGatedContentVisibility();
    renderMasterControlPanel();
  }
};

function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error('JWT Parse Error:', e);
    return null;
  }
}

function getCustomVipEmails() {
  try {
    return JSON.parse(localStorage.getItem('adt_custom_vip_emails')) || [];
  } catch (e) {
    return [];
  }
}

function addCustomVipEmail(email) {
  const clean = (email || '').trim().toLowerCase();
  if (!clean || !clean.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  const list = getCustomVipEmails();
  if (!list.includes(clean)) {
    list.push(clean);
    localStorage.setItem('adt_custom_vip_emails', JSON.stringify(list));
    showToast(`Added ${clean} to VIP list!`);
  } else {
    showToast(`${clean} is already in VIP list.`);
  }
  ACCESS_CONTROL.updateUI();
}

function removeCustomVipEmail(email) {
  const clean = (email || '').trim().toLowerCase();
  let list = getCustomVipEmails();
  list = list.filter(e => e !== clean);
  localStorage.setItem('adt_custom_vip_emails', JSON.stringify(list));
  showToast(`Removed ${clean} from VIP list.`);
  ACCESS_CONTROL.updateUI();
}

function promptAddVipEmail() {
  const input = prompt('Enter the Google email address to grant VIP Access to:');
  if (input) {
    addCustomVipEmail(input);
  }
}

function handleGoogleCredentialResponse(response) {
  if (!response || !response.credential) return;
  const user = parseJwt(response.credential);
  if (!user || !user.email) {
    showError('Could not verify Google credential.');
    return;
  }

  const cleanEmail = user.email.toLowerCase();
  const emailDomain = cleanEmail.split('@')[1] || '';

  const masterList = (SITE.masterEmails || []).map(e => e.toLowerCase());
  const customVipList = getCustomVipEmails();
  const vipList = [...(SITE.vipEmails || []), ...customVipList].map(e => e.toLowerCase());
  const vipDomains = (SITE.vipDomains || []).map(d => d.toLowerCase());

  const isMaster = masterList.includes(cleanEmail);
  const isVip = !isMaster && (
    vipList.includes('*') ||
    vipList.includes(cleanEmail) ||
    vipDomains.includes(emailDomain)
  );

  let tier = ACCESS_CONTROL.TIER_PUBLIC;
  let label = 'Visitor';
  let passcode = '';

  if (isMaster) {
    tier = ACCESS_CONTROL.TIER_MASTER;
    label = 'Master Level';
    passcode = 'master2026';
  } else if (isVip) {
    tier = ACCESS_CONTROL.TIER_VIP;
    label = 'Higher Tier (VIP)';
    passcode = 'vip2026';
  }

  ACCESS_CONTROL.saveGoogleSession(tier, passcode, {
    name: user.name || user.email.split('@')[0],
    email: user.email,
    picture: user.picture || ''
  });

  closeAccessModal();
  if (tier > ACCESS_CONTROL.TIER_PUBLIC) {
    showToast(`Signed in as ${user.name || user.email} (${label})`);
  } else {
    showToast(`Signed in as ${user.name || user.email}. Enter VIP passcode or ask owner for VIP access.`);
  }
}

function getGoogleClientId() {
  return localStorage.getItem('adt_google_client_id') || SITE.googleClientId || '';
}

function promptForGoogleClientId() {
  if (ACCESS_CONTROL.getEffectiveTier() !== ACCESS_CONTROL.TIER_MASTER) {
    showToast('Only Master Admin can configure Google Client ID.');
    return;
  }
  const current = getGoogleClientId();
  const input = prompt('Enter your Google Cloud OAuth 2.0 Client ID (ends with .apps.googleusercontent.com):', current);
  if (input !== null) {
    const trimmed = input.trim();
    if (trimmed) {
      localStorage.setItem('adt_google_client_id', trimmed);
      showToast('Google Client ID updated!');
    } else {
      localStorage.removeItem('adt_google_client_id');
      showToast('Google Client ID reset to default.');
    }
    renderGoogleSignInButton();
  }
}

function renderGoogleSignInButton() {
  const container = document.getElementById('googleSignInBtnWrap');
  if (!container) return;

  const clientId = getGoogleClientId();

  if (!window.google || !window.google.accounts) {
    if (!document.getElementById('gsiScript')) {
      const script = document.createElement('script');
      script.id = 'gsiScript';
      script.src = 'https://accounts.google.com/gsi/client?hl=en';
      script.async = true;
      script.defer = true;
      script.onload = () => renderGoogleSignInButton();
      document.head.appendChild(script);
    }
    return;
  }

  try {
    container.innerHTML = '';
    window.handleGoogleCredentialResponse = handleGoogleCredentialResponse;
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleGoogleCredentialResponse,
      auto_select: false
    });
    google.accounts.id.renderButton(container, {
      theme: document.documentElement.getAttribute('data-theme') === 'light' ? 'outline' : 'filled_black',
      size: 'large',
      type: 'standard',
      shape: 'pill',
      text: 'signin_with',
      locale: 'en',
      logo_alignment: 'left'
    });
  } catch (e) {
    console.warn('Google Sign-In initialization:', e);
  }
}

function renderAccessNavButton() {
  const btns = [
    document.getElementById('navAccessBtn'),
    document.getElementById('drawerAccessBtn')
  ].filter(Boolean);

  if (btns.length === 0) return;

  const effTier = ACCESS_CONTROL.getEffectiveTier();
  const isSimulated = ACCESS_CONTROL.simulatedTier !== null;
  const session = ACCESS_CONTROL.getSessionData();
  const isSignedIn = !!(session && session.user);
  const avatarHtml = (session && session.user && session.user.picture)
    ? `<img src="${session.user.picture}" class="nav-user-avatar" alt="${session.user.name || 'User'}" />`
    : '';

  btns.forEach(btn => {
    const isDrawer = btn.id === 'drawerAccessBtn';
    btn.className = 'nav-access-btn';
    if (isSignedIn) btn.classList.add('is-signed-in');
    if (avatarHtml) btn.classList.add('has-avatar');

    let tierTitle = 'Access Control / Login';
    let iconContent = avatarHtml || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>`;
    let drawerLabel = isSimulated ? 'Public (Sim)' : 'Access Control / Login';

    if (effTier === ACCESS_CONTROL.TIER_MASTER) {
      btn.classList.add('tier-master');
      tierTitle = `Master Level Active ${session?.user?.email ? '(' + session.user.email + ')' : ''}`;
      iconContent = avatarHtml || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14v2H5v-2z"/>
      </svg>`;
      drawerLabel = isSimulated ? '👑 Master (Sim)' : '👑 Master Level Active';
    } else if (effTier === ACCESS_CONTROL.TIER_VIP) {
      btn.classList.add('tier-vip');
      tierTitle = `Higher Tier (VIP) Active ${session?.user?.email ? '(' + session.user.email + ')' : ''}`;
      iconContent = avatarHtml || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>`;
      drawerLabel = isSimulated ? 'VIP (Sim)' : 'VIP Access Active';
    }

    btn.title = tierTitle;
    if (isDrawer) {
      btn.innerHTML = `${iconContent}<span>${drawerLabel}</span>`;
    } else {
      // Header navbar button: ONLY the icon logo! Tier level is denoted by border color & glow.
      btn.innerHTML = iconContent;
    }
  });
}

async function updateGatedContentVisibility() {
  const effTier = ACCESS_CONTROL.getEffectiveTier();
  const session = ACCESS_CONTROL.getSessionData();
  const passcode = (session && session.passcode)
    ? session.passcode
    : (effTier === ACCESS_CONTROL.TIER_MASTER ? 'master2026' : 'vip2026');

  // Stealth Mode: Hide Master-exclusive section & divider completely from non-Master users!
  const masterSection = document.getElementById('master-exclusive');
  const masterDivider = document.getElementById('master-divider-1');
  const isMasterActive = (effTier === ACCESS_CONTROL.TIER_MASTER);

  if (masterSection) {
    masterSection.style.display = isMasterActive ? 'block' : 'none';
  }
  if (masterDivider) {
    masterDivider.style.display = isMasterActive ? 'flex' : 'none';
  }

  // Dynamic VIP/Master Links Processor (Gates GitHub Repo links per-link tier; defaults to VIP)
  const vipLinks = document.querySelectorAll('[data-payload-link-id]');
  for (const link of vipLinks) {
    const payloadId = link.dataset.payloadLinkId;
    const linkTierStr = (link.dataset.payloadTier || 'vip').toLowerCase();
    const linkTier = (linkTierStr === 'master' || linkTierStr === '2')
      ? ACCESS_CONTROL.TIER_MASTER
      : ACCESS_CONTROL.TIER_VIP;
    const linkPasscode = (linkTier === ACCESS_CONTROL.TIER_MASTER) ? 'master2026' : 'vip2026';
    const linkTierLabel = (linkTier === ACCESS_CONTROL.TIER_MASTER) ? 'Master' : 'VIP';

    if (effTier < linkTier) {
      if (linkTier === ACCESS_CONTROL.TIER_MASTER) {
        // Master-tier links stay fully hidden below Master — no locked teaser shown.
        link.style.display = 'none';
        link.href = '#';
        link.removeAttribute('target');
        link.onclick = (e) => e.preventDefault();
        link.classList.remove('project-link--locked');
      } else {
        link.style.display = '';
        link.href = '#';
        link.removeAttribute('target');
        link.innerHTML = `🔒 GitHub Repo (${linkTierLabel} Access Required)`;
        link.onclick = (e) => {
          e.preventDefault();
          openAccessModal(linkTier);
          return false;
        };
        link.classList.add('project-link--locked');
      }
    } else {
      link.style.display = '';
      if (!link.dataset.resolvedHref && payloadId && ACCESS_CONTROL_PAYLOADS[payloadId]) {
        const resolved = await decryptHexPayload(ACCESS_CONTROL_PAYLOADS[payloadId], linkPasscode);
        if (resolved) link.dataset.resolvedHref = resolved;
      }
      link.href = link.dataset.resolvedHref || '#';
      link.target = '_blank';
      link.innerHTML = 'View on GitHub ↗';
      link.onclick = null;
      link.classList.remove('project-link--locked');
    }
  }

  const elements = document.querySelectorAll('[data-access-tier]');

  for (const el of elements) {
    const requiredStr = (el.dataset.accessTier || 'vip').toLowerCase();
    const requiredTier = (requiredStr === 'master' || requiredStr === '2')
      ? ACCESS_CONTROL.TIER_MASTER
      : ACCESS_CONTROL.TIER_VIP;

    const payloadId = el.dataset.payloadId;
    const isUnlocked = effTier >= requiredTier;

    if (!isUnlocked) {
      // LOCKED: Wipe any decrypted inner body completely from the DOM!
      const inner = el.querySelector('.gated-inner-body');
      if (inner) inner.remove();

      if (!el.querySelector('.gated-overlay')) {
        const tierName = requiredTier === ACCESS_CONTROL.TIER_MASTER ? 'Master Level Access' : 'Higher Tier (VIP) Access';
        const tierDesc = requiredTier === ACCESS_CONTROL.TIER_MASTER
          ? 'This section contains administrative system logs, direct payload keys, and live runtime diagnostics.'
          : 'Unlock confidential GitHub source code links, extended performance benchmarks, and private architecture specifications.';
        const previewBadges = requiredTier === ACCESS_CONTROL.TIER_MASTER
          ? `
            <div style="display:flex;justify-content:center;gap:0.6rem;flex-wrap:wrap;margin:0.8rem 0 1.25rem;">
              <span style="background:rgba(234,179,8,0.06);border:1px solid rgba(234,179,8,0.2);padding:0.25rem 0.6rem;border-radius:4px;font-family:var(--mono);font-size:0.7rem;color:#eab308;">👑 Root Auth Console</span>
              <span style="background:rgba(234,179,8,0.06);border:1px solid rgba(234,179,8,0.2);padding:0.25rem 0.6rem;border-radius:4px;font-family:var(--mono);font-size:0.7rem;color:#eab308;">⚡ Live Diagnostic Stream</span>
            </div>`
          : `
            <div style="display:flex;justify-content:center;gap:0.6rem;flex-wrap:wrap;margin:0.8rem 0 1.25rem;">
              <span style="background:rgba(255,255,255,0.03);border:1px solid var(--line);padding:0.25rem 0.6rem;border-radius:4px;font-family:var(--mono);font-size:0.7rem;color:var(--muted);">🔒 13+ GitHub Repos</span>
              <span style="background:rgba(255,255,255,0.03);border:1px solid var(--line);padding:0.25rem 0.6rem;border-radius:4px;font-family:var(--mono);font-size:0.7rem;color:var(--muted);">🔒 Hardware Schematics</span>
              <span style="background:rgba(255,255,255,0.03);border:1px solid var(--line);padding:0.25rem 0.6rem;border-radius:4px;font-family:var(--mono);font-size:0.7rem;color:var(--muted);">🔒 Full Benchmark Logs</span>
            </div>`;

        const overlay = document.createElement('div');
        overlay.className = 'gated-overlay';
        overlay.innerHTML = `
          <div class="gated-lock-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <div class="gated-title">${tierName} Required</div>
          <div class="gated-desc">${tierDesc}</div>
          ${previewBadges}
          <button type="button" class="gated-unlock-btn" onclick="openAccessModal(${requiredTier})">
            <span>Unlock ${requiredTier === ACCESS_CONTROL.TIER_MASTER ? 'Master Access' : 'Higher Tier'}</span> →
          </button>
        `;
        el.appendChild(overlay);
      }
      el.classList.add('gated-content-locked');
      el.classList.remove('gated-content-unlocked');
    } else {
      // UNLOCKED: Decrypt payload in memory using required tier passcode and inject into DOM
      if (!el.querySelector('.gated-inner-body') && payloadId && ACCESS_CONTROL_PAYLOADS[payloadId]) {
        const targetPasscode = (requiredTier === ACCESS_CONTROL.TIER_MASTER) ? 'master2026' : 'vip2026';
        const decryptedHtml = await decryptHexPayload(ACCESS_CONTROL_PAYLOADS[payloadId], targetPasscode);
        if (decryptedHtml) {
          const inner = document.createElement('div');
          inner.className = 'gated-inner-body';
          inner.innerHTML = decryptedHtml;
          el.appendChild(inner);
        }
      }
      const overlay = el.querySelector('.gated-overlay');
      if (overlay) overlay.remove();

      el.classList.remove('gated-content-locked');
      el.classList.add('gated-content-unlocked');
    }
  }
}

function renderAccessModal() {
  if (document.getElementById('accessModalOverlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'accessModalOverlay';
  overlay.className = 'access-modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Access Control Login');

  overlay.innerHTML = `
    <div class="access-modal-card" id="accessModalCard">
      <div class="access-modal-header">
        <div class="access-modal-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span>Access Control</span>
        </div>
        <button type="button" class="access-modal-close" id="accessModalClose" aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <div class="access-field-group">
        <label class="access-label" for="accessPassInput">Enter Passcode</label>
        <div class="access-input-wrap">
          <input type="text" id="accessPassInput" class="access-input access-input-masked" placeholder="Enter access passcode…" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" data-lpignore="true" data-1p-ignore="true" data-bwignore="true" data-form-type="other" name="access-code-field-x9k2" />
          <button type="button" class="access-pass-toggle" id="accessPassToggle" aria-label="Toggle password visibility">
            <svg id="accessEyeIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="access-hint-box" id="accessHintBox">
        <strong>Access Passcode:</strong> <code>vip2026</code>
      </div>

      <div class="access-error-msg" id="accessErrorMsg"></div>

      <div class="access-actions">
        <button type="button" class="access-btn-submit" id="accessSubmitBtn">Unlock Access</button>
        <button type="button" class="access-btn-logout" id="accessLogoutBtn" hidden>Lock Session</button>
      </div>

      <div class="access-divider"><span>Or Sign In With Google</span></div>
      <div class="google-btn-wrap" id="googleSignInBtnWrap"></div>
      <div id="masterGoogleClientWrap" style="text-align: center; margin-top: 0.25rem; display: none;">
        <button type="button" onclick="promptForGoogleClientId()" style="background: none; border: none; color: var(--muted); font-size: 0.68rem; font-family: var(--mono); cursor: pointer; text-decoration: underline;">
          ⚙️ Setup Google OAuth Client ID
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  renderGoogleSignInButton();
}

function openAccessModal(defaultTier = 1) {
  renderAccessModal();
  const overlay = document.getElementById('accessModalOverlay');
  const passInput = document.getElementById('accessPassInput');
  const errorMsg = document.getElementById('accessErrorMsg');
  const logoutBtn = document.getElementById('accessLogoutBtn');
  const hintBox = document.getElementById('accessHintBox');
  const card = document.getElementById('accessModalCard');

  if (errorMsg) errorMsg.classList.remove('visible');
  if (passInput) passInput.value = '';

  const actTier = ACCESS_CONTROL.getActualTier();
  const effTier = ACCESS_CONTROL.getEffectiveTier();

  const masterGoogleClientWrap = document.getElementById('masterGoogleClientWrap');
  if (masterGoogleClientWrap) {
    masterGoogleClientWrap.style.display = (effTier === ACCESS_CONTROL.TIER_MASTER) ? 'block' : 'none';
  }

  // Stealth Mode: Hide Master demo passcode in Guest mode!
  if (hintBox) {
    hintBox.innerHTML = `
      <strong>Access Passcode:</strong> <code>vip2026</code>
    `;
  }

  // Secret 5-click trigger on modal title
  const closeBtn = document.getElementById('accessModalClose');
  const submitBtn = document.getElementById('accessSubmitBtn');
  const passToggle = document.getElementById('accessPassToggle');
  const eyeIcon = document.getElementById('accessEyeIcon');

  closeBtn.addEventListener('click', closeAccessModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeAccessModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeAccessModal();
    }
  });

  passToggle.addEventListener('click', () => {
    const isMasked = passInput.classList.contains('access-input-masked');
    passInput.classList.toggle('access-input-masked', !isMasked);
    eyeIcon.style.opacity = isMasked ? '1' : '0.6';
  });

  function handleAuthenticate() {
    const val = passInput.value;
    const activeTab = document.querySelector('.access-tab-btn.active');
    const activeTabTier = activeTab ? parseInt(activeTab.dataset.tier, 10) : 1;
    if (!val) {
      showError('Please enter a passcode.');
      return;
    }

    const res = ACCESS_CONTROL.authenticate(val, activeTabTier);
    if (res.success) {
      closeAccessModal();
      passInput.value = '';
      showToast(`Unlocked ${res.label} successfully!`);
    } else {
      showError(res.error);
      card.classList.add('shake');
      setTimeout(() => card.classList.remove('shake'), 400);
    }
  }

  submitBtn.addEventListener('click', handleAuthenticate);
  passInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleAuthenticate(); });

  if (logoutBtn) logoutBtn.hidden = (actTier === ACCESS_CONTROL.TIER_PUBLIC);
  logoutBtn.addEventListener('click', () => {
    ACCESS_CONTROL.logout();
    closeAccessModal();
    showToast('Session locked. Reverted to public guest access.');
  });

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (passInput) passInput.focus();
  renderGoogleSignInButton();
}

function closeAccessModal() {
  const overlay = document.getElementById('accessModalOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function showError(msg) {
  const el = document.getElementById('accessErrorMsg');
  if (el) {
    el.textContent = msg;
    el.classList.add('visible');
  }
}

function showToast(msg) {
  let toast = document.getElementById('accessToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'accessToast';
    toast.style.cssText = 'position:fixed;bottom:2rem;right:2rem;z-index:10001;background:var(--heading);color:var(--bg);padding:0.75rem 1.2rem;border-radius:8px;font-family:var(--mono);font-size:0.78rem;box-shadow:0 10px 25px rgba(0,0,0,0.3);transition:opacity 0.3s, transform 0.3s;opacity:0;transform:translateY(10px);pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, 2800);
}

function renderMasterControlPanel() {
  const actTier = ACCESS_CONTROL.getActualTier();
  let panel = document.getElementById('masterPanelWidget');

  if (actTier !== ACCESS_CONTROL.TIER_MASTER) {
    if (panel) panel.style.display = 'none';
    return;
  }

  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'masterPanelWidget';
    panel.className = 'master-panel-widget';
    panel.innerHTML = `
      <button type="button" class="master-toggle-btn" id="masterToggleBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14v2H5v-2z"/>
        </svg>
        <span>Master Control</span>
      </button>
      <div class="master-card-popup" id="masterCardPopup">
        <div class="master-pop-header">
          <span class="master-pop-title">👑 Master Admin Panel</span>
          <button type="button" class="access-modal-close" id="masterPopClose" style="padding:0.2rem;">✕</button>
        </div>
        <div>
          <div class="master-sim-label">Simulate Visitor Tier</div>
          <div class="master-sim-group">
            <button type="button" class="master-sim-btn" data-sim="0">Public</button>
            <button type="button" class="master-sim-btn" data-sim="1">VIP</button>
            <button type="button" class="master-sim-btn" data-sim="2">Master</button>
          </div>
        </div>
        <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:0.6rem;display:flex;flex-direction:column;gap:0.4rem;">
          <div class="master-stat-row"><span>Session:</span> <span>Active Master</span></div>
          <div class="master-stat-row"><span>Gated Nodes:</span> <span id="masterGatedCount">0</span></div>
          <div class="master-stat-row"><span>Search Index:</span> <span id="masterSearchCount">0</span></div>
        </div>

        <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:0.6rem;">
          <div class="master-sim-label" style="display:flex;justify-content:space-between;align-items:center;">
            <span>VIP Email Allowlist</span>
            <button type="button" onclick="promptAddVipEmail()" style="background:rgba(45,212,191,0.15);border:1px solid #2dd4bf;color:#2dd4bf;padding:0.15rem 0.4rem;font-size:0.6rem;border-radius:4px;cursor:pointer;">+ Add Email</button>
          </div>
          <div id="masterVipListWrap" style="margin-top:0.3rem;max-height:80px;overflow-y:auto;font-family:var(--mono);font-size:0.65rem;color:var(--muted);display:flex;flex-direction:column;gap:0.2rem;"></div>
        </div>

        <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:0.5rem;">
          <button type="button" onclick="promptForGoogleClientId()" style="background:rgba(250,204,21,0.12);border:1px solid rgba(250,204,21,0.4);color:#fef08a;padding:0.25rem 0.5rem;font-size:0.62rem;font-family:var(--mono);border-radius:4px;cursor:pointer;width:100%;">
            ⚙️ Configure Google OAuth Client ID
          </button>
        </div>

        <button type="button" class="access-btn-logout" id="masterLockBtn" style="padding:0.4rem;width:100%;">
          Lock Master Session
        </button>
      </div>
    `;
    document.body.appendChild(panel);

    const toggleBtn = document.getElementById('masterToggleBtn');
    const popup = document.getElementById('masterCardPopup');
    const closeBtn = document.getElementById('masterPopClose');
    const lockBtn = document.getElementById('masterLockBtn');
    const simBtns = popup.querySelectorAll('.master-sim-btn');

    toggleBtn.addEventListener('click', () => popup.classList.toggle('open'));
    closeBtn.addEventListener('click', () => popup.classList.remove('open'));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && popup.classList.contains('open')) {
        popup.classList.remove('open');
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'M' || e.key === 'm')) {
        if (ACCESS_CONTROL.getActualTier() === ACCESS_CONTROL.TIER_MASTER) {
          e.preventDefault();
          popup.classList.toggle('open');
        }
      }
    });

    simBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetSim = parseInt(btn.dataset.sim, 10);
        ACCESS_CONTROL.setSimulatedTier(targetSim === ACCESS_CONTROL.TIER_MASTER ? null : targetSim);
        showToast(`Simulating Tier: ${targetSim === 0 ? 'Public' : targetSim === 1 ? 'VIP' : 'Master'}`);
      });
    });

    lockBtn.addEventListener('click', () => {
      ACCESS_CONTROL.logout();
      showToast('Master session locked.');
    });
  }

  panel.style.display = 'block';

  const popup = document.getElementById('masterCardPopup');
  const simBtns = popup.querySelectorAll('.master-sim-btn');
  const effTier = ACCESS_CONTROL.getEffectiveTier();

  simBtns.forEach(btn => {
    const bTier = parseInt(btn.dataset.sim, 10);
    btn.classList.toggle('active', bTier === effTier);
  });

  const gatedCount = document.querySelectorAll('[data-access-tier]').length;
  const masterGatedCount = document.getElementById('masterGatedCount');
  if (masterGatedCount) masterGatedCount.textContent = gatedCount;

  const masterSearchCount = document.getElementById('masterSearchCount');
  if (masterSearchCount && window.SEARCH_STATIC_INDEX) {
    const total = (SEARCH_STATIC_INDEX.achievement || []).length + (SEARCH_STATIC_INDEX.project || []).length;
    masterSearchCount.textContent = total;
  }

  // Render Custom VIP Emails List
  const vipWrap = document.getElementById('masterVipListWrap');
  if (vipWrap) {
    const customList = getCustomVipEmails();
    if (customList.length === 0) {
      vipWrap.innerHTML = `<span style="color:#71717a;font-style:italic;">No custom VIP emails added yet (Wildcard '*' active).</span>`;
    } else {
      vipWrap.innerHTML = customList.map(email => `
        <div style="display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,0.03);padding:0.2rem 0.4rem;border-radius:4px;">
          <span>${email}</span>
          <button type="button" onclick="removeCustomVipEmail('${email}')" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:0.65rem;" title="Remove VIP Access">✕</button>
        </div>
      `).join('');
    }
  }
}


function initAccessControl() {
  renderAccessNavButton();
  updateGatedContentVisibility();
  renderMasterControlPanel();
}

/* ── Boot ─────────────────────────────────────────────────── */
(function init() {
  initTheme();        // must run first — sets data-theme before paint
  computeLiveDates(); // compute before any page script reads LIVE
  renderSiteNav();
  setActiveNav();
  renderQuickNav();
  initThemeToggle();
  initKeyNav();
  initStatusDate();
  initHamburger();
  initScroll();
  initReveal();
  initCountUp();
  initTypedCaption();
  initCursor();
  initLightbox();
  initGlobalSearch();
  initAccessControl();
  renderSiteFooter();
  initServiceWorker();
  initReadingProgressBar();
  initNetworkStatusListeners();
  initCardTilt();
  initTouchGestures();
  initSkillBars();
  initScrollParallax();
  initSwipeNav();
  initTour();
  window.addEventListener('load', loadGA4);
})();

function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(err => {
        console.debug('ServiceWorker registration skipped or failed:', err);
      });
    });
  }
}

function initReadingProgressBar() {
  const bar = document.getElementById('readProgressBar');
  if (!bar) return;
  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = Math.min(100, Math.max(0, progress)) + '%';
  }
  window.addEventListener('scroll', () => {
    requestAnimationFrame(updateProgress);
  }, { passive: true });
  updateProgress();
}

function initNetworkStatusListeners() {
  window.addEventListener('online', () => {
    showToast('Connection restored — back online');
  });
  window.addEventListener('offline', () => {
    showToast('You are currently offline');
  });
}

function initCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  const selector = '.project-card, .achievement-item, .journey-node, .exp-card';
  document.addEventListener('mousemove', e => {
    const card = e.target.closest(selector);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(4px)`;
  });

  document.addEventListener('mouseout', e => {
    const card = e.target.closest(selector);
    if (!card) return;
    if (!e.relatedTarget || !card.contains(e.relatedTarget)) {
      card.style.transform = '';
    }
  });
}

/* ── Cert/CV lightbox (index, achievements, experience) ───── */
// Shared across the three pages that render #cert-lightbox markup.
// No-ops on pages without it. `.cert-btn` triggers via data-cert /
// data-label / data-type attributes; preventDefault() is required
// because index.html's cert-btn is an <a download>, and is a no-op
// on the <button> variants used elsewhere.
function initLightbox() {
  const lb = document.getElementById('cert-lightbox');
  if (!lb) return;

  const lbBody = document.getElementById('lb-body');
  const lbLabel = document.getElementById('lb-label');
  const lbDownload = document.getElementById('lb-download');
  const lbOpen = document.getElementById('lb-open');
  const lbClose = document.getElementById('lb-close');
  let lastFocus = null;

  function openLightbox(src, label, type, downloadSrc, verifyUrl) {
    lastFocus = document.activeElement;
    lbLabel.textContent = label;
    lbDownload.href = downloadSrc || src;
    lbOpen.href = src;
    lbBody.innerHTML = '';

    if (verifyUrl) {
      const lbVerify = document.getElementById('lb-verify');
      lbVerify.href = verifyUrl;
      lbVerify.hidden = false;
    }

    if (type === 'pdf') {
      const iframe = document.createElement('iframe');
      iframe.src = src + '#toolbar=1&view=FitH';
      iframe.title = label;
      lbBody.appendChild(iframe);
    } else {
      const img = document.createElement('img');
      img.src = src;
      img.alt = label;
      lbBody.appendChild(img);
    }

    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { lbBody.innerHTML = ''; }, 230);
    const lbVerify = document.getElementById('lb-verify');
    if (lbVerify) {
      lbVerify.hidden = true;
      lbVerify.href = '#';
    }
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll('.cert-btn').forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();
      openLightbox(btn.dataset.cert, btn.dataset.label, btn.dataset.type, btn.dataset.download, btn.dataset.verify);
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lb.classList.contains('open')) closeLightbox();
  });
}

/* ── Global search / command palette ("/" to open, unified across pages) ── */
function buildSearchIndex() {
  const index = CMDK_PAGES.map(p => ({
    type: 'page', title: p.title, meta: '', href: p.href, text: p.title.toLowerCase(),
  }));

  index.push(
    { type: 'page', title: 'Access Control & VIP Login', meta: 'Passcode: vip2026', href: 'javascript:openAccessModal(1)', text: 'access control login vip higher tier passcode password security' }
  );

  // Start from the static snapshot (always present, every page).
  const byHref = new Map();
  SEARCH_STATIC_INDEX.achievement.forEach(item => byHref.set(item.href, item));
  SEARCH_STATIC_INDEX.project.forEach(item => byHref.set(item.href, item));

  // Live DOM scan overrides matching hrefs with current-page data (handles
  // same-session edits without needing a re-export of the static index).
  document.querySelectorAll('#achievementsList .achievement-item').forEach((el, i) => {
    el.id = el.id || `achv-${i}`;
    const org = el.querySelector('.achievement-org')?.textContent.trim() || '';
    const title = el.querySelector('.achievement-title')?.textContent.trim() || '';
    const desc = el.querySelector('.achievement-desc')?.textContent.trim() || '';
    const date = el.querySelector('.achievement-date')?.textContent.trim() || '';
    const href = `achievements.html#${el.id}`;
    byHref.set(href, {
      type: 'achievement',
      title,
      meta: [org, date].filter(Boolean).join(' · '),
      href,
      text: [org, title, desc, date].join(' ').toLowerCase(),
    });
  });

  document.querySelectorAll('#projectsGrid .project-card').forEach((el, i) => {
    el.id = el.id || `proj-${i}`;
    const title = el.querySelector('.project-title')?.textContent.trim() || '';
    // Cards use either a single .project-desc paragraph or a
    // .project-desc-list — check both, mirroring scripts/extract_index.py,
    // so the live scan and the static snapshot never disagree.
    const descEl = el.querySelector('.project-desc');
    const desc = descEl
      ? descEl.textContent.trim()
      : Array.from(el.querySelectorAll('.project-desc-list li')).map(li => li.textContent.trim()).join(' ');
    const status = el.querySelector('.project-status')?.textContent.trim() || '';
    const tags = Array.from(el.querySelectorAll('.tag')).map(t => t.textContent.trim());
    const href = `projects.html#${el.id}`;
    byHref.set(href, {
      type: 'project',
      title,
      meta: [status, tags.slice(0, 3).join(', ')].filter(Boolean).join(' · '),
      href,
      text: [title, desc, tags.join(' '), status].join(' ').toLowerCase(),
    });
  });

  return index.concat(Array.from(byHref.values()));
}

function renderCmdk() {
  if (document.getElementById('cmdk')) return;
  const el = document.createElement('div');
  el.id = 'cmdk';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-label', 'Search');
  el.innerHTML = `
    <div class="cmdk-inner">
      <div class="cmdk-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input type="text" id="cmdkInput" placeholder="Search pages, projects, achievements…" aria-label="Search" autocomplete="off" />
        <kbd>Esc</kbd>
      </div>
      <div class="cmdk-tabs" id="cmdkTabs" role="tablist" aria-label="Filter by type">
        <button type="button" class="cmdk-tab active" data-type="" role="tab" aria-selected="true">All</button>
        <button type="button" class="cmdk-tab" data-type="page" role="tab" aria-selected="false">Pages</button>
        <button type="button" class="cmdk-tab" data-type="project" role="tab" aria-selected="false">Projects</button>
        <button type="button" class="cmdk-tab" data-type="achievement" role="tab" aria-selected="false">Achievements</button>
      </div>
      <div class="cmdk-results" id="cmdkResults" role="listbox" aria-label="Results"></div>
      <div class="cmdk-empty" id="cmdkEmpty" hidden>No matches.</div>
    </div>`;
  document.body.appendChild(el);
}

function revealSearchTarget() {
  if (!location.hash) return;
  const target = document.getElementById(location.hash.slice(1));
  if (!target) return;

  // Achievements are split into an Academic / Extracurricular track toggle
  // (achievements.html only — see initTrackToggle in that page's inline
  // script). Whichever track isn't active gets display:none on every one
  // of its items, so a search link straight to an ECA item (e.g. "Music
  // Club") would land on a hidden element and scrollIntoView would
  // silently no-op. If the target's track isn't the active one, click the
  // matching toggle button first so the item is actually visible.
  const itemTrack = target.dataset.track;
  if (itemTrack) {
    const btn = document.getElementById(
      itemTrack === 'eca' ? 'trackEcaBtn' : 'trackAcademicBtn'
    );
    if (btn && !btn.classList.contains('is-active')) btn.click();
  }

  const group = target.closest('details.year-group');
  if (group) group.open = true;
  requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  target.classList.add('search-highlight');
  setTimeout(() => target.classList.remove('search-highlight'), 1600);
}

function initGlobalSearch() {
  renderCmdk();
  const cmdk = document.getElementById('cmdk');
  const input = document.getElementById('cmdkInput');
  const tabsEl = document.getElementById('cmdkTabs');
  const resultsEl = document.getElementById('cmdkResults');
  const emptyEl = document.getElementById('cmdkEmpty');
  const navBtn = document.getElementById('navSearchBtn');
  if (!cmdk || !input || !resultsEl) return;

  const index = buildSearchIndex();
  let activeType = '';
  let activeIndex = -1;
  let lastFocus = null;

  function currentResults() {
    const query = input.value.trim().toLowerCase();
    let pool = activeType ? index.filter(item => item.type === activeType) : index;
    if (!query) {
      pool = activeType ? pool : pool.filter(item => item.type === 'page');
    } else {
      pool = pool.filter(item => item.text.includes(query));
    }
    return pool.slice(0, 50);
  }

  function setActiveResult() {
    const rows = Array.from(resultsEl.querySelectorAll('.cmdk-item'));
    rows.forEach((row, i) => {
      const isActive = i === activeIndex;
      row.classList.toggle('is-active', isActive);
      row.setAttribute('aria-selected', String(isActive));
      if (isActive) row.scrollIntoView({ block: 'nearest' });
    });
  }

  function renderResults(items) {
    resultsEl.innerHTML = items.map((item, i) => `
      <a href="${item.href}" class="cmdk-item" role="option" data-i="${i}" aria-selected="false">
        <span class="cmdk-item-icon">${CMDK_ICONS[item.type]}</span>
        <span class="cmdk-item-body">
          <span class="cmdk-item-title">${item.title}</span>
          <span class="cmdk-item-meta">${[CMDK_TYPE_LABEL[item.type], item.meta].filter(Boolean).join(' · ')}</span>
        </span>
      </a>`).join('');
    activeIndex = items.length ? 0 : -1;
    setActiveResult();
    emptyEl.hidden = items.length !== 0;
  }

  function refresh() {
    renderResults(currentResults());
  }

  function setActiveTab(tab) {
    activeType = tab.dataset.type;
    tabsEl.querySelectorAll('.cmdk-tab').forEach(t => {
      const isActive = t === tab;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', String(isActive));
    });
  }

  function openCmdk() {
    lastFocus = document.activeElement;
    input.value = '';
    setActiveTab(tabsEl.querySelector('.cmdk-tab[data-type=""]'));
    refresh();
    cmdk.classList.add('open');
    document.body.style.overflow = 'hidden';
    input.focus();
  }

  function closeCmdk() {
    cmdk.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  if (navBtn) navBtn.addEventListener('click', openCmdk);

  document.addEventListener('keydown', e => {
    if (cmdk.classList.contains('open')) return;
    const isSlash = (e.key === '/') && !e.metaKey && !e.ctrlKey && !e.altKey;
    const isCmdK = (e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K');
    if (!isSlash && !isCmdK) return;

    const tag = (document.activeElement || {}).tagName || '';
    if (isSlash && (/^(INPUT|TEXTAREA|SELECT)$/i.test(tag) || document.activeElement?.isContentEditable)) return;

    e.preventDefault();
    openCmdk();
  });

  document.addEventListener('keydown', e => {
    if (!cmdk.classList.contains('open')) return;
    if (e.key === 'Escape') {
      closeCmdk();
      return;
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const max = resultsEl.querySelectorAll('.cmdk-item').length;
      if (!max) return;
      activeIndex = e.key === 'ArrowDown'
        ? (activeIndex + 1) % max
        : (activeIndex - 1 + max) % max;
      setActiveResult();
      return;
    }
    if (e.key === 'Enter') {
      const row = resultsEl.querySelectorAll('.cmdk-item')[activeIndex];
      if (row) {
        e.preventDefault();
        row.click();
      }
    }
  });

  cmdk.addEventListener('click', e => { if (e.target === cmdk) closeCmdk(); });
  resultsEl.addEventListener('click', e => { if (e.target.closest('.cmdk-item')) closeCmdk(); });
  input.addEventListener('input', refresh);
  tabsEl.querySelectorAll('.cmdk-tab').forEach(tab => {
    tab.addEventListener('click', () => { setActiveTab(tab); refresh(); });
  });

  window.addEventListener('hashchange', revealSearchTarget);
  revealSearchTarget();
}

/* ── Keyboard page navigation (1–7) ──────────────────────── */
// 1 → index.html  2 → projects.html  3 → experience.html
// 4 → achievements.html  5 → about.html  6 → journey.html
// 7 → contact.html
// 0 → toggle theme
// ` → toggle hero date B.S. / A.D. (index.html only; no-op elsewhere)
// Shift+4 → toggle Academic / Extracurricular track (achievements.html only; no-op elsewhere)
// Alt+2 → expand/collapse all project cards (projects.html only; no-op elsewhere)
// Alt+4 → expand/collapse all years (achievements.html only; no-op elsewhere)
// Alt+6 → expand/collapse all checkpoints (journey.html only; no-op elsewhere)
// Skipped when focus is inside an input, textarea, or select.
function initKeyNav() {
  const PAGE_MAP = {
    '1': 'index.html',
    '2': 'projects.html',
    '3': 'experience.html',
    '4': 'achievements.html',
    '5': 'about.html',
    '6': 'journey.html',
    '7': 'contact.html',
  };
  document.addEventListener('keydown', e => {
    const tag = (document.activeElement || {}).tagName || '';
    if (/^(INPUT|TEXTAREA|SELECT)$/i.test(tag)) return;
    if (e.metaKey || e.ctrlKey) return;

    if (e.altKey && e.key === '2') {
      const projectToggleAllBtn = document.getElementById('projectToggleAllBtn');
      if (projectToggleAllBtn) {
        projectToggleAllBtn.click();
      }
      return;
    }

    if (e.altKey && (e.key === '4' || e.key === '$')) {
      const toggleAllBtn = document.getElementById('toggleAllBtn');
      if (toggleAllBtn) {
        toggleAllBtn.click();
      }
      return;
    }

    if (e.altKey && (e.key === '6' || e.key === '^')) {
      const journeyToggleAllBtn = document.getElementById('journeyToggleAllBtn');
      if (journeyToggleAllBtn) {
        journeyToggleAllBtn.click();
      }
      return;
    }

    if (e.key === '0') {
      toggleTheme();
      return;
    }

    if (e.key === '`' || e.code === 'Backquote') {
      toggleStatusDate();
      return;
    }

    if (e.shiftKey && (e.key === 'N' || e.key === 'n')) {
      openWhatsNewModal();
      return;
    }

    if (e.shiftKey && (e.key === 'T' || e.key === 't')) {
      startTour();
      return;
    }

    if (e.shiftKey && (e.key === '4' || e.key === '$')) {
      const academicBtn = document.getElementById('trackAcademicBtn');
      const ecaBtn = document.getElementById('trackEcaBtn');
      if (academicBtn && ecaBtn) {
        (academicBtn.classList.contains('is-active') ? ecaBtn : academicBtn).click();
      }
      return;
    }

    if (!PAGE_MAP[e.key]) return;
    window.location.href = PAGE_MAP[e.key];
  });
}

/* ── Interactive Dev Terminal Widget (v33) ─────────────────── */
(function initTerminalWidget() {
  function setup() {
    const term = document.getElementById('adtTerminal');
    if (!term) return;

    const body = term.querySelector('.terminal-body');
    const input = term.querySelector('.terminal-input');
    const quickBtns = term.querySelectorAll('.terminal-quick-cmd');
    if (!body || !input) return;

    const COMMANDS = {
      help: () => `
<span class="term-green">Available Commands:</span>
  <span class="term-gold">skills</span>       - Overview of technical skillset & engineering tools
  <span class="term-gold">projects</span>     - Key engineering & AI/ML projects
  <span class="term-gold">experience</span>   - Leadership & technical roles
  <span class="term-gold">achievements</span> - Credentials & competition milestones
  <span class="term-gold">contact</span>      - Direct communication channels
  <span class="term-gold">whatsnew</span>     - View v33 major release highlights
  <span class="term-gold">theme</span>        - Toggle site color scheme (Dark / Light)
  <span class="term-gold">matrix</span>       - Trigger cybernetic digital rain
  <span class="term-gold">clear</span>        - Clear terminal screen output
`,
      skills: () => `
<span class="term-green">▶ Core Technical Skillset:</span>
  • <span class="term-cyan">Embedded & Firmware:</span> C, C++, Verilog, ARM Cortex-M, STM32, ESP32, KiCAD
  • <span class="term-cyan">AI / ML & Vision:</span> Python, PyTorch, OpenCV, TensorFlow, Signal Processing
  • <span class="term-cyan">Web Systems:</span> JavaScript (ES6+), HTML5/CSS3, Node.js, WebSockets, REST APIs
`,
      projects: () => `
<span class="term-green">▶ Featured Projects:</span>
  1. <span class="term-gold">PulseLive</span> — Real-Time Acoustic Patient Monitoring System
  2. <span class="term-gold">GCSBR</span> — Ground Control Station for High-Altitude Rocketry
  3. <span class="term-gold">Autonomous Rover</span> — LiDAR/Ultrasonic Obstacle Avoidance & Sensor Fusion
  4. Type <span class="term-cyan">'2'</span> or navigate to <a href="/projects.html" class="term-link">/projects.html</a> for all 22 projects!
`,
      experience: () => `
<span class="term-green">▶ Engineering Leadership & Experience:</span>
  • <span class="term-gold">Vice Secretary</span> — IEEE KEC Student Branch (2025–2026)
  • <span class="term-gold">Electronics Lead</span> — KEC Robotics Club
  • <span class="term-gold">Mentor</span> — Electronics For All Workshop Series
`,
      achievements: () => `
<span class="term-green">▶ Achievements & Credentials:</span>
  • 36 verified credentials spanning AWS, DataCamp, IEEE, and GNOME
  • Full verification suite: <a href="/achievements.html" class="term-link">/achievements.html</a>
`,
      contact: () => `
<span class="term-green">▶ Connect Channels:</span>
  • Email:    <a href="mailto:aaradhyadevtmr@gmail.com" class="term-link">aaradhyadevtmr@gmail.com</a>
  • GitHub:   <a href="https://github.com/AaradhyaDT" target="_blank" class="term-link">github.com/AaradhyaDT</a>
  • LinkedIn: <a href="https://www.linkedin.com/in/aaradhya-dev-tamrakar" target="_blank" class="term-link">linkedin.com/in/aaradhya-dev-tamrakar</a>
`,
      whatsnew: () => {
        if (typeof openWhatsNewModal === 'function') openWhatsNewModal();
        return '<span class="term-green">Opening What\'s New (v34) modal...</span>';
      },
      theme: () => {
        if (typeof toggleTheme === 'function') toggleTheme();
        return '<span class="term-green">Color theme toggled!</span>';
      },
      clear: () => {
        body.innerHTML = '';
        return '';
      },
      matrix: () => {
        let lines = [];
        const chars = '0110010101010101001010101010101001';
        for (let i = 0; i < 6; i++) {
          let row = '';
          for (let j = 0; j < 36; j++) {
            row += chars[Math.floor(Math.random() * chars.length)];
          }
          lines.push(`<span class="term-green" style="opacity:${(i+1)/6};">${row}</span>`);
        }
        return lines.join('<br>');
      }
    };

    function appendOutput(cmd, res) {
      const line = document.createElement('div');
      line.className = 'term-line';
      line.innerHTML = `
        <div class="term-cmd-prompt"><span class="term-user">visitor@adt</span>:<span class="term-path">~</span>$ ${escapeHtml(cmd)}</div>
        ${res ? `<div class="term-cmd-res">${res}</div>` : ''}
      `;
      body.appendChild(line);
      requestAnimationFrame(() => { body.scrollTop = body.scrollHeight; });
    }

    function escapeHtml(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function execCommand(rawCmd) {
      const cmd = rawCmd.trim().toLowerCase();
      if (!cmd) return;
      triggerHapticFeedback(10);
      if (cmd === 'clear') {
        COMMANDS.clear();
        return;
      }
      const handler = COMMANDS[cmd];
      if (handler) {
        appendOutput(rawCmd, handler());
      } else {
        appendOutput(rawCmd, `<span class="term-red">Command not found: '${escapeHtml(cmd)}'. Type <span class="term-gold">'help'</span> for a list of available commands.</span>`);
      }
    }

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const val = input.value;
        input.value = '';
        execCommand(val);
      }
    });

    quickBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        triggerHapticFeedback(10);
        const cmd = btn.dataset.cmd;
        if (cmd) execCommand(cmd);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();

/* ── Hardware-Accelerated Cursor Light Trail (v33) ──────────── */
(function initCursorTrail() {
  if (typeof window === 'undefined') return;
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let lastX = 0, lastY = 0;
  let ticking = false;

  document.addEventListener('mousemove', e => {
    lastX = e.clientX;
    lastY = e.clientY;
    if (!ticking) {
      requestAnimationFrame(() => {
        if (Math.random() < 0.22) {
          spawnParticle(lastX, lastY);
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  function spawnParticle(x, y) {
    const p = document.createElement('div');
    p.className = 'cursor-trail-particle';
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    document.body.appendChild(p);

    setTimeout(() => p.remove(), 450);
  }
})();

/* ── Haptic Feedback & Touch Gesture Micro-Interactions (v34) ── */
function triggerHapticFeedback(pattern = 10) {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      navigator.vibrate(pattern);
    } catch (e) {}
  }
}

function initTouchGestures() {
  if (typeof window === 'undefined') return;

  const modals = ['cert-lightbox', 'cmdk', 'whatsNewModal', 'accessModalOverlay', 'tourOverlay'];
  modals.forEach(id => {
    const modal = document.getElementById(id);
    if (!modal) return;
    let startY = 0;
    let startX = 0;

    modal.addEventListener('touchstart', e => {
      if (e.touches.length === 1) {
        startY = e.touches[0].clientY;
        startX = e.touches[0].clientX;
      }
    }, { passive: true });

    modal.addEventListener('touchend', e => {
      if (e.changedTouches.length === 1 && modal.classList.contains('open')) {
        const deltaY = e.changedTouches[0].clientY - startY;
        const deltaX = Math.abs(e.changedTouches[0].clientX - startX);

        if (deltaY > 80 && deltaX < 60) {
          triggerHapticFeedback(15);
          if (id === 'cert-lightbox' && typeof closeLightbox === 'function') closeLightbox();
          else if (id === 'cmdk' && typeof closeCmdk === 'function') closeCmdk();
          else if (id === 'whatsNewModal' && typeof closeWhatsNewModal === 'function') closeWhatsNewModal();
          else if (id === 'accessModalOverlay' && typeof closeAccessModal === 'function') closeAccessModal();
          else if (id === 'tourOverlay') exitTour();
        }
      }
    }, { passive: true });
  });

  const drawer = document.getElementById('navDrawer');
  const hamburger = document.getElementById('navHamburger');
  if (drawer && hamburger) {
    let startX = 0;
    drawer.addEventListener('touchstart', e => {
      if (e.touches.length === 1) startX = e.touches[0].clientX;
    }, { passive: true });

    drawer.addEventListener('touchend', e => {
      if (e.changedTouches.length === 1 && drawer.classList.contains('open')) {
        const deltaX = e.changedTouches[0].clientX - startX;
        if (deltaX < -60) {
          triggerHapticFeedback(15);
          hamburger.click();
        }
      }
    }, { passive: true });
  }
}

/* ==========================================================================
   v36 Upgrade: Skill Bars Scroll-Triggered Animation
   ========================================================================== */
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-fill[data-pct]');
  if (!fills.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    fills.forEach(fill => { fill.style.width = fill.dataset.pct; });
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        requestAnimationFrame(() => {
          fill.style.width = fill.dataset.pct;
        });
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(fill => observer.observe(fill));
}

/* ==========================================================================
   v36 Upgrade: Scroll-Linked Parallax Depth Effects
   ========================================================================== */
function initScrollParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return; // skip on mobile for perf

  const heroGlow = document.querySelector('.hero-glow');
  const heroBgLines = document.querySelector('.hero-bg-lines');
  const sectionHeaders = document.querySelectorAll('.section-header');

  if (!heroGlow && !heroBgLines && !sectionHeaders.length) return;

  let parallaxTicking = false;
  function onParallaxScroll() {
    const y = window.scrollY;

    if (heroGlow) {
      heroGlow.style.transform = `translateY(${y * 0.3}px)`;
    }
    if (heroBgLines) {
      heroBgLines.style.transform = `translateY(${y * 0.15}px)`;
    }

    sectionHeaders.forEach(header => {
      const rect = header.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.top < viewH && rect.bottom > 0) {
        const progress = (viewH - rect.top) / (viewH + rect.height);
        const shift = (progress - 0.5) * 20; // max ±10px
        header.style.transform = `translateY(${shift}px)`;
      }
    });

    parallaxTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
      requestAnimationFrame(onParallaxScroll);
      parallaxTicking = true;
    }
  }, { passive: true });
}

/* ==========================================================================
   v36 Upgrade: Horizontal Swipe-to-Navigate Between Pages (Mobile)
   ========================================================================== */
function initSwipeNav() {
  if (!window.matchMedia('(pointer: coarse)').matches) return;
  if (typeof SITE === 'undefined' || !SITE.navLinks) return;

  const pages = SITE.navLinks.map(l => ({
    label: l.label,
    href: l.href
  }));
  // Add Contact at the end
  pages.push({ label: 'Contact', href: '/contact.html' });

  // Find current page index
  const currentPath = location.pathname.replace(/\/$/, '/index.html');
  let currentIdx = pages.findIndex(p =>
    currentPath.endsWith(p.href) || currentPath.endsWith(p.href.replace('/', ''))
  );
  if (currentIdx === -1) return;

  // Create swipe indicator elements
  let leftIndicator = document.querySelector('.swipe-indicator.left');
  let rightIndicator = document.querySelector('.swipe-indicator.right');

  if (!leftIndicator) {
    leftIndicator = document.createElement('div');
    leftIndicator.className = 'swipe-indicator left';
    document.body.appendChild(leftIndicator);
  }
  if (!rightIndicator) {
    rightIndicator = document.createElement('div');
    rightIndicator.className = 'swipe-indicator right';
    document.body.appendChild(rightIndicator);
  }

  let startX = 0, startY = 0, swiping = false;
  const THRESHOLD = 80;

  document.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) return;
    // Don't swipe when interacting with terminal, modals, or drawer
    const el = e.target;
    if (el.closest('.terminal-card, .nav-drawer, #cmdk, #cert-lightbox, #whatsNewModal, .form-input, .form-textarea, input, textarea')) return;

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    swiping = true;
  }, { passive: true });

  document.addEventListener('touchmove', e => {
    if (!swiping || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - startX;
    const dy = Math.abs(e.touches[0].clientY - startY);

    // Only track horizontal swipes
    if (dy > Math.abs(dx) * 0.6) {
      swiping = false;
      leftIndicator.classList.remove('visible');
      rightIndicator.classList.remove('visible');
      return;
    }

    if (dx > 40 && currentIdx > 0) {
      leftIndicator.textContent = `← ${pages[currentIdx - 1].label}`;
      leftIndicator.classList.add('visible');
      rightIndicator.classList.remove('visible');
    } else if (dx < -40 && currentIdx < pages.length - 1) {
      rightIndicator.textContent = `${pages[currentIdx + 1].label} →`;
      rightIndicator.classList.add('visible');
      leftIndicator.classList.remove('visible');
    } else {
      leftIndicator.classList.remove('visible');
      rightIndicator.classList.remove('visible');
    }
  }, { passive: true });

  document.addEventListener('touchend', e => {
    if (!swiping) return;
    swiping = false;

    const dx = e.changedTouches[0].clientX - startX;
    const dy = Math.abs(e.changedTouches[0].clientY - startY);

    leftIndicator.classList.remove('visible');
    rightIndicator.classList.remove('visible');

    if (Math.abs(dx) < THRESHOLD || dy > Math.abs(dx) * 0.6) return;

    if (dx > THRESHOLD && currentIdx > 0) {
      triggerHapticFeedback(15);
      location.href = pages[currentIdx - 1].href;
    } else if (dx < -THRESHOLD && currentIdx < pages.length - 1) {
      triggerHapticFeedback(15);
      location.href = pages[currentIdx + 1].href;
    }
  }, { passive: true });
}

/* ── Guided Site Tour (v37) ────────────────────────────────
   Cross-page spotlight walkthrough. Steps are keyed by page
   filename; "Next" on a page's last step navigates to the next
   page in TOUR_STEPS order and auto-resumes via localStorage
   (adt_tour_active + adt_tour_step). Reuses access-modal-overlay
   visual language, respects prefers-reduced-motion, and closes
   on Escape / overlay click / swipe-down (added to the existing
   modals list in initTouchGestures). Opened via the "Tour" nav
   button or Shift+T. */
const TOUR_STEPS = {
  'index.html': [
    { sel: '#hero', title: 'Welcome', body: 'This is the homepage — start here on any visit. The tour walks through all 7 pages; use Next/Back or Esc anytime.' },
    { sel: '#adtTerminal', title: 'Dev Terminal', body: 'A live command widget — type "help" for a full command list, or try the quick-command buttons.' },
    { sel: '#keymap', title: 'Keyboard Shortcuts', body: 'Power-user shortcuts: 1–7 to jump pages, 0 for theme, / or Ctrl+K for search, Shift+N for release notes.' },
  ],
  'projects.html': [
    { sel: '#page-header', title: 'Projects', body: '22 projects, from firmware to full ML pipelines. Each card expands for the full write-up.' },
    { sel: '#p-001', title: 'Featured build', body: 'Cards are individually expandable — click any title to see stack, metrics, and links.' },
  ],
  'experience.html': [
    { sel: '#page-header', title: 'Experience', body: 'Leadership and technical roles, in reverse-chronological order.' },
    { sel: '#experience', title: 'Role detail', body: 'Each entry includes scope and, where applicable, a linked certificate — click a cert badge to open it.' },
  ],
  'achievements.html': [
    { sel: '#page-header', title: 'Achievements', body: '36 credentials and competition milestones. Filter by category or year using the legend above the list.' },
    { sel: '#achievementsList', title: 'Certificates', body: 'Entries with a certificate button open a lightbox viewer — most also offer the original PDF as a direct download.' },
  ],
  'about.html': [
    { sel: '#about-intro', title: 'About', body: 'Background, education, and how this site\u2019s design choices reflect a working engineer\u2019s toolkit.' },
    { sel: '#skills', title: 'Skills', body: 'A breakdown of tools and technical areas of focus.' },
    { sel: '#education', title: 'Education', body: 'Academic timeline through KEC, IOE, Tribhuvan University.' },
  ],
  'journey.html': [
    { sel: '#page-header', title: 'Journey', body: 'A 32-node timeline of milestones — the fullest narrative view of the work behind this site.' },
    { sel: '#j-001', title: 'Timeline nodes', body: 'Each node expands individually, or use the toggle-all shortcut (Alt+6) to open everything at once.' },
  ],
  'contact.html': [
    { sel: '#contact-intro', title: 'Contact', body: 'That\u2019s the full tour. This page has a direct message form plus social links in the footer.' },
    { sel: '#contactForm', title: 'Get in touch', body: 'Messages go straight through — no account needed. Thanks for visiting.' },
  ],
};
const TOUR_PAGE_ORDER = ['index.html', 'projects.html', 'experience.html', 'achievements.html', 'about.html', 'journey.html', 'contact.html'];

function tourReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function startTour() {
  localStorage.setItem('adt_tour_active', '1');
  localStorage.setItem('adt_tour_step', '0');
  const page = location.pathname.split('/').pop() || 'index.html';
  if (page !== TOUR_PAGE_ORDER[0]) {
    window.location.href = '/' + TOUR_PAGE_ORDER[0];
    return;
  }
  renderTourStep(0);
}

function exitTour() {
  localStorage.removeItem('adt_tour_active');
  localStorage.removeItem('adt_tour_step');
  closeTourOverlay();
}

function tourAdvance() {
  const page = location.pathname.split('/').pop() || 'index.html';
  const steps = TOUR_STEPS[page] || [];
  const cur = parseInt(localStorage.getItem('adt_tour_step') || '0', 10);
  if (cur + 1 < steps.length) {
    localStorage.setItem('adt_tour_step', String(cur + 1));
    renderTourStep(cur + 1);
    return;
  }
  const pageIdx = TOUR_PAGE_ORDER.indexOf(page);
  if (pageIdx === -1 || pageIdx + 1 >= TOUR_PAGE_ORDER.length) {
    exitTour();
    showToast('Tour complete.');
    return;
  }
  localStorage.setItem('adt_tour_step', '0');
  window.location.href = '/' + TOUR_PAGE_ORDER[pageIdx + 1];
}

function tourBack() {
  const page = location.pathname.split('/').pop() || 'index.html';
  const cur = parseInt(localStorage.getItem('adt_tour_step') || '0', 10);
  if (cur > 0) {
    localStorage.setItem('adt_tour_step', String(cur - 1));
    renderTourStep(cur - 1);
    return;
  }
  const pageIdx = TOUR_PAGE_ORDER.indexOf(page);
  if (pageIdx <= 0) return;
  const prevPage = TOUR_PAGE_ORDER[pageIdx - 1];
  const prevSteps = TOUR_STEPS[prevPage] || [];
  localStorage.setItem('adt_tour_step', String(Math.max(prevSteps.length - 1, 0)));
  window.location.href = '/' + prevPage;
}

function renderTourStep(idx) {
  const page = location.pathname.split('/').pop() || 'index.html';
  const steps = TOUR_STEPS[page] || [];
  const step = steps[idx];
  if (!step) { exitTour(); return; }

  let target = document.querySelector(step.sel);
  if (!target) target = document.body;

  let overlay = document.getElementById('tourOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'tourOverlay';
    overlay.className = 'tour-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Site tour');
    document.body.appendChild(overlay);
  }

  const pageIdx = TOUR_PAGE_ORDER.indexOf(page);
  const totalSteps = TOUR_PAGE_ORDER.reduce((n, p) => n + (TOUR_STEPS[p] || []).length, 0);
  const stepsBefore = TOUR_PAGE_ORDER.slice(0, pageIdx).reduce((n, p) => n + (TOUR_STEPS[p] || []).length, 0);
  const globalStep = stepsBefore + idx + 1;
  const isLast = pageIdx === TOUR_PAGE_ORDER.length - 1 && idx === steps.length - 1;
  const isFirst = pageIdx === 0 && idx === 0;

  overlay.innerHTML = `
    <div class="tour-scrim"></div>
    <div class="tour-card" id="tourCard" role="document">
      <div class="tour-card-head">
        <span class="tour-progress">${globalStep} / ${totalSteps}</span>
        <button type="button" class="tour-close" id="tourCloseBtn" aria-label="End tour">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div class="tour-title">${step.title}</div>
      <div class="tour-body">${step.body}</div>
      <div class="tour-actions">
        <button type="button" class="tour-btn-secondary" id="tourBackBtn" ${isFirst ? 'disabled' : ''}>Back</button>
        <button type="button" class="tour-btn-primary" id="tourNextBtn">${isLast ? 'Finish' : 'Next'}</button>
      </div>
    </div>`;

  document.getElementById('tourCloseBtn').addEventListener('click', () => { exitTour(); });
  document.getElementById('tourNextBtn').addEventListener('click', tourAdvance);
  document.getElementById('tourBackBtn').addEventListener('click', tourBack);
  overlay.querySelector('.tour-scrim').addEventListener('click', () => { exitTour(); });

  document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));
  if (target !== document.body) {
    target.classList.add('tour-highlight');
    target.scrollIntoView({ block: 'center', behavior: tourReducedMotion() ? 'auto' : 'smooth' });
  }

  requestAnimationFrame(() => {
    overlay.classList.add('open');
    positionTourCard(target);
  });
}

function positionTourCard(target) {
  const card = document.getElementById('tourCard');
  if (!card) return;
  if (!target || target === document.body || window.innerWidth < 720) {
    card.style.position = '';
    card.style.top = '';
    card.style.left = '';
    return;
  }
  const rect = target.getBoundingClientRect();
  const cardH = card.offsetHeight;
  const spaceBelow = window.innerHeight - rect.bottom;
  card.style.position = 'fixed';
  card.style.left = Math.max(16, Math.min(rect.left, window.innerWidth - card.offsetWidth - 16)) + 'px';
  if (spaceBelow > cardH + 24) {
    card.style.top = (rect.bottom + 16) + 'px';
  } else {
    card.style.top = Math.max(16, rect.top - cardH - 16) + 'px';
  }
}

function closeTourOverlay() {
  const overlay = document.getElementById('tourOverlay');
  document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));
  if (!overlay) return;
  overlay.classList.remove('open');
  setTimeout(() => overlay.remove(), 200);
}

function initTour() {
  const btn = document.getElementById('navTourBtn');
  if (btn) btn.addEventListener('click', startTour);
  const drawerBtn = document.getElementById('drawerTourBtn');
  if (drawerBtn) drawerBtn.addEventListener('click', startTour);

  if (localStorage.getItem('adt_tour_active') === '1') {
    const step = parseInt(localStorage.getItem('adt_tour_step') || '0', 10);
    renderTourStep(step);
  }

  window.addEventListener('resize', () => {
    const overlay = document.getElementById('tourOverlay');
    if (!overlay || !overlay.classList.contains('open')) return;
    const highlighted = document.querySelector('.tour-highlight');
    positionTourCard(highlighted);
  });

  document.addEventListener('keydown', e => {
    const overlay = document.getElementById('tourOverlay');
    if (!overlay || !overlay.classList.contains('open')) return;
    if (e.key === 'Escape') { exitTour(); }
    else if (e.key === 'ArrowRight') { tourAdvance(); }
    else if (e.key === 'ArrowLeft') { tourBack(); }
  });
}