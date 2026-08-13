/* ============================================================
   MODULE: core.js — aaradhya-dev-tamrakar.github.io
   Part of the v42 Performance & Code Quality Architecture.
   ============================================================ */

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
    "title": "NEC License Exam Mock Test (BCT)",
    "meta": "Nepal Engineering Council (NEC) · 10 May 2026",
    "href": "achievements.html#achv-36",
    "text": "nepal engineering council (nec) nec license exam mock test (bct) scored 97/100 on the computer engineering (bct) format licensure preparation assessment. 10 may 2026"
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
    "text": "spark — two-layer fall detection wearable on-device, two-layer fall-detection wearable for eldercare — threshold gate plus a tflite micro cnn gateway, zero imports, zero custom pcb bei major project, four-person team — proposal defended jul 9, 2026 mpu6050 tflite micro 1d cnn shap fastapi streamlit telegram in progress"
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
    "meta": "Archived · ESP32, Wireless Mesh, Raspberry Pi 4B",
    "href": "projects.html#p-010",
    "text": "prakopnet — multi-hazard early warning system solar-powered wireless mesh multi-hazard monitoring platform for remote regions of nepal — esp32 nodes to a raspberry pi 4b gateway archived june 29, 2026; superseded by spark esp32 wireless mesh raspberry pi 4b tflite micro lstm gps fastapi edge ai archived"
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
    <div class="footer-copy">${SITE.footerCopy} · <a href="/privacy.html">Privacy Policy</a> · <a href="/terms.html">Terms of Service</a> · <button id="wnFooterBtn" type="button" class="footer-wn-btn">What's New (v38)</button></div>`;

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



/* ── Accent Color Theme Management ───────────────────────── */
function applyAccent(accent) {
  const validAccents = ['gold', 'emerald', 'violet', 'cyan', 'ruby', 'prism'];
  const target = validAccents.includes(accent) ? accent : 'gold';
  if (target === 'gold') {
    document.documentElement.removeAttribute('data-accent');
  } else {
    document.documentElement.setAttribute('data-accent', target);
  }
  localStorage.setItem('adt-accent', target);

  document.querySelectorAll('[data-accent-swatch]').forEach(btn => {
    if (btn.dataset.accentSwatch === target) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function initAccent() {
  const savedAccent = localStorage.getItem('adt-accent') || 'gold';
  applyAccent(savedAccent);
}

function initAccentPicker() {
  const toggleBtn = document.getElementById('colorPickerToggle');
  const popover = document.getElementById('colorPickerPopover');

  const togglePopover = (show) => {
    if (!popover || !toggleBtn) return;
    const isExpanded = show !== undefined ? show : !popover.classList.contains('active');
    popover.classList.toggle('active', isExpanded);
    toggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  };

  if (toggleBtn && popover) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerHapticFeedback(10);
      togglePopover();
    });
  }

  document.querySelectorAll('[data-accent-swatch]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerHapticFeedback(14);
      const chosen = btn.dataset.accentSwatch;
      applyAccent(chosen);
      togglePopover(false);
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#colorPickerWrap')) {
      togglePopover(false);
    }
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

document.addEventListener('DOMContentLoaded', () => {
  if (typeof initSkillRadar === 'function') initSkillRadar();
});




