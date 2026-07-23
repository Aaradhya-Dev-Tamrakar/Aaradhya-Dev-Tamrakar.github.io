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

/* ── Command palette data ─────────────────────────────────── */
const CMDK_PAGES = [
  { title: 'Home', href: '/index.html' },
  { title: 'Projects', href: '/projects.html' },
  { title: 'Experience', href: '/experience.html' },
  { title: 'Achievements', href: '/achievements.html' },
  { title: 'Journey', href: '/journey.html' },
  { title: 'About', href: '/about.html' },
  { title: 'Contact', href: '/contact.html' },
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
    "title": "SPARK — Two-Layer Fall Detection Wearable",
    "meta": "In Progress · MPU6050, TFLite Micro, 1D CNN",
    "href": "projects.html#proj-0",
    "text": "spark — two-layer fall detection wearable on-device, two-layer fall-detection wearable for eldercare — threshold gate plus a tflite micro cnn gateway, zero imports, zero custom pcb bei major project, four-person team — proposal defended jul 10, 2026 mpu6050 tflite micro 1d cnn raspberry pi 4b shap fastapi streamlit telegram in progress"
  },
  {
    "type": "project",
    "title": "Gesture-Controlled Self-Balancing Robot",
    "meta": "Arduino, HC-05, MPU-6050",
    "href": "projects.html#p-001",
    "text": "gesture-controlled self-balancing robot two-wheeled inverted pendulum robot with real-time dual-hand mediapipe gesture control over hc-05 bluetooth examiner rated major-project level — 9.4/10 arduino hc-05 mpu-6050 nema-17 mediapipe pid matlab"
  },
  {
    "type": "project",
    "title": "Fusemachines Capstone — Vision Fairness & Bias Audit",
    "meta": "In Progress · AIF360, Fairlearn, FairFace",
    "href": "projects.html#proj-2",
    "text": "fusemachines capstone — vision fairness & bias audit diagnostic tool for deployed vision classifiers — runs a multi-demographic test matrix, flags statistical disparities, and outputs a compliance report; detects bias but doesn't correct it fellowship capstone, two-person team with tisha manandhar — full readme to follow in-repo aif360 fairlearn fairface utkface computer vision bias auditing statistical testing html/jinja2 in progress"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 11 — Vision Transformers",
    "meta": "Python, PyTorch, torchvision",
    "href": "projects.html#proj-3",
    "text": "fusemachines wk 11 — vision transformers five-module deep computer vision stack — resnet-50 transfer learning + gradcam, faster r-cnn object detection, deeplabv3+ segmentation, a from-scratch vae, and vit patch embedding clip zero-shot classification hit 92.0% on a 200-image slice, outscoring the fine-tuned resnet-50 (74.1%) — deployment memo compares both for a 500-camera warehouse rollout, exported to onnx python pytorch torchvision timm clip onnx gradcam vision transformers"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 10 — Image Processing",
    "meta": "Python, OpenCV, NumPy",
    "href": "projects.html#proj-4",
    "text": "fusemachines wk 10 — image processing hsv-based multi-class fruit segmentation across the fruits-360 dataset, morphological cleanup, and filter-based denoising benchmarks (gaussian, median, bilateral) from-scratch canny edge detector (96.9% pixel agreement vs. cv2.canny()), plus a full fruit-detection pipeline — harris corners, tuned hough circles, connected-component separation of touching fruit, contour-based bounding boxes python opencv numpy matplotlib hsv segmentation canny edge detection hough transform"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 9 — NEU Steel Defect CNN",
    "meta": "Python, PyTorch, torchvision",
    "href": "projects.html#proj-5",
    "text": "fusemachines wk 9 — neu steel defect cnn pytorch cnn classifier for neu-det steel surface-defect detection — six classes, 1,800 grayscale images from-scratch nn foundation → tuned cnn, 98.8%/78.9% train/val accuracy; augmentation, batchnorm, and dropout ablations plus grid-search and optuna hyperparameter tuning python pytorch torchvision cnn optuna scikit-learn"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 8 — Forecasting",
    "meta": "Python, statsmodels, SARIMA",
    "href": "projects.html#proj-6",
    "text": "fusemachines wk 8 — forecasting time-series pipeline benchmarking nine forecasters on monthly s&p 500 data (1990–2024) via mase/rmse 4-model ensemble outperformed every single model — mase 2.44, confirmed via diebold-mariano test (p = 0.0092) python statsmodels sarima holt-winters prophet lightgbm lstm xgboost"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 7 — Customer Segmentation",
    "meta": "Python, scikit-learn, K-Means",
    "href": "projects.html#proj-7",
    "text": "fusemachines wk 7 — customer segmentation market segmentation on uci online retail ii (~500,000 transactions) with rfm + category-ratio feature engineering full clustering comparison — k-means, hierarchical, dbscan — validated via silhouette and davies-bouldin indices python scikit-learn k-means hierarchical clustering dbscan rfm pandas scipy"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 6 — Probabilistic Models",
    "meta": "Python, PyMC, ArviZ",
    "href": "projects.html#proj-8",
    "text": "fusemachines wk 6 — probabilistic models bayesian inference pipeline for telco churn using pymc, arviz, and pgmpy mle/map estimation, dirichlet-multinomial updating, and a fitted pymc bayesian logistic regression artifact python pymc arviz pgmpy bayesian inference scikit-learn pandas"
  },
  {
    "type": "project",
    "title": "Telco Churn Tree-Based Ensemble Pipeline",
    "meta": "Python, XGBoost, Random Forest",
    "href": "projects.html#proj-9",
    "text": "telco churn tree-based ensemble pipeline end-to-end classification pipeline on telco customer churn (7,043 rows) with smote restricted to training folds only random forest + xgboost with shap explainability; secondary tenure-prediction task with a model card python xgboost random forest shap imbpipeline smote joblib scikit-learn"
  },
  {
    "type": "project",
    "title": "Telco Churn & CLV ML Pipeline",
    "meta": "Python, scikit-learn, Logistic Regression",
    "href": "projects.html#proj-10",
    "text": "telco churn & clv ml pipeline classification and regression pipeline for churn prediction and customer lifetime value modeling — roc-auc 0.841 ± 0.005 ridge regression best for clv (mean $1,304.70); full html report export via papermill python scikit-learn logistic regression ridge lasso pandas papermill"
  },
  {
    "type": "project",
    "title": "Text-to-SQL Agentic Pipeline",
    "meta": "Python, FastAPI, Streamlit",
    "href": "projects.html#proj-11",
    "text": "text-to-sql agentic pipeline five-stage agentic text-to-sql system over a postgresql database — planner → generator → validator → executor → summarizer 100% execution success and 100% result accuracy across a 50-question benchmark, zero retries required python fastapi streamlit gpt-4o-mini postgresql docker prompt chaining"
  },
  {
    "type": "project",
    "title": "Nexus — Personal AI Operating System",
    "meta": "In Progress · React, Vite, FastAPI",
    "href": "projects.html#proj-12",
    "text": "nexus — personal ai operating system project-centric ai operating system replacing the multi-browser/multi-account/multi-tool workflow react (vite) + fastapi + sqlite/fts5, parallel groq + gemini fan-out — v2 redesign complete june 12, 2026 react vite fastapi sqlite fts5 groq gemini python in progress"
  },
  {
    "type": "project",
    "title": "Alpha Android Super-App",
    "meta": "In Progress · Kotlin, Jetpack Compose, Material3",
    "href": "projects.html#proj-13",
    "text": "alpha android super-app modular personal super-app (kotlin/jetpack compose, material3) — gesture remote, budget tracker, multi-mode calculator calculator is the primary shipping target, play store release in progress kotlin jetpack compose material3 camerax mediapipe bluetooth spp datastore apache poi in progress"
  },
  {
    "type": "project",
    "title": "Edge AI Stability Detection System",
    "meta": "Python, scikit-learn, RandomForest",
    "href": "projects.html#proj-14",
    "text": "edge ai stability detection system ml system predicting platform stability from simulated imu sensor data — random forest, 99.8% test accuracy rest api via fastapi, joblib export for robotics integration with gcsbr (gesture-controlled self-balancing robot) python scikit-learn randomforest fastapi joblib imu edge ai"
  },
  {
    "type": "project",
    "title": "Custom Processor FSM Design",
    "meta": "VHDL, Vivado, FSM",
    "href": "projects.html#proj-15",
    "text": "custom processor fsm design vhdl implementation of a custom processor datapath and fsm supporting gcd and exponentiation operations simulated and verified in vivado 2023.2 as embedded systems coursework vhdl vivado fsm datapath fpga"
  },
  {
    "type": "project",
    "title": "Antenna Lab Data Analysis",
    "meta": "Python, Pandas, NumPy",
    "href": "projects.html#proj-16",
    "text": "antenna lab data analysis python data-analysis pipeline for antenna radiation pattern measurements from lab excel sheets scipy cubic interpolation plus matplotlib polar plots — communication & rf coursework deliverable python pandas numpy scipy matplotlib polar plot"
  },
  {
    "type": "project",
    "title": "SysOptimizer — Windows Optimization Tool",
    "meta": "Python, CustomTkinter, PyInstaller",
    "href": "projects.html#proj-17",
    "text": "sysoptimizer — windows optimization tool standalone windows optimization tool packaged as a .exe via pyinstaller power plan switcher, ram flush, background bloat panel, startup scanner — runs silently via create_no_window python customtkinter pyinstaller wmi powershell"
  },
  {
    "type": "project",
    "title": "PrakopNet — Multi-Hazard Early Warning System",
    "meta": "Archived · ESP32, RYLR890 LoRa 868 MHz, Raspberry Pi 4B",
    "href": "projects.html#proj-18",
    "text": "prakopnet — multi-hazard early warning system solar-powered lora mesh multi-hazard monitoring platform for remote regions of nepal — esp32 nodes to a raspberry pi 4b gateway archived june 29, 2026 after rylr890's import-only sourcing conflicted with department policy; superseded by spark esp32 rylr890 lora 868 mhz raspberry pi 4b tflite micro lstm gps fastapi edge ai archived"
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
        <button class="nav-search-btn" id="navSearchBtn" aria-label="Search (press /)" title="Search (press /)">
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
      <button class="nav-access-btn" id="drawerAccessBtn" style="margin: 1rem 0; width: calc(100% - 2rem); justify-content: center;" aria-label="Access Control">
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
    <div class="footer-copy">${SITE.footerCopy} · <a href="/privacy.html">Privacy Policy</a> · <a href="/terms.html">Terms of Service</a></div>`;
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

function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('adt-theme', next);
}

function initTheme() {
  const saved = localStorage.getItem('adt-theme') || 'dark';
  applyTheme(saved);
}

function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', toggleTheme);
}

/* ── Mobile hamburger ─────────────────────────────────────── */
function initHamburger() {
  const hamburger = document.getElementById('navHamburger');
  const drawer = document.getElementById('navDrawer');
  if (!hamburger || !drawer) return;

  const mainEl = document.getElementById('main-content') || document.querySelector('main');
  const footerEl = document.querySelector('footer');

  function setOpen(isOpen) {
    drawer.classList.toggle('open', isOpen);
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
  // Both backTop and scrollPct are fixed to the same bottom-right corner
  // as .footer-socials. Once the page is scrolled within one button's
  // height of the very bottom, hide them so they don't sit on top of
  // the last social icon.
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

/* ── Reveal on scroll ─────────────────────────────────────── */
function initReveal() {
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
  "index-vip": "3f60730115ddaf935b15ca06f23c8ae0f1f723511db56f08df22fa06afdc66b7912f5bdf01002b104299b7bbbcf6186237d318b30d19028965bc033841fec73f2178f2ca167cf482300c0e5eb879a3ee376b4f663d991b3cc784da8a2695cc181d1a7cfd2a1784acaef0dde070083714d4e3790ae471487d77b1c7e3c267d8f367971da791d67bbe758ec567d2d067c1c710259a115b9fc0f814c32ad0a6c46eec7d7cfd3004506eb02f69ee2461b6fe8114b8fcfbf9bd6332ce4a093ad36bf122f608a48e03a6aecb54b4af77c75bc77c41b65df7fb0ac1f864ab2ce0ebe2b43099cd17169e54ec7814ea14bb62966ea966f91ce3215941dd94f9eda73c3a14e0cb0179449660e70bc21b3049d294a4a8883fa23d9f4fe9efc398c1d38f1f77eeb902a65e999d130edbe856bd3c2245788acf591d2cf0e05e0d5e6e5a3cc1abd4795c8c641bc694c770131e9b4f5d05500acc24bb5ab2e443c4b7690e90baceac999832e4492ba58df534429bddac67eea274b23cceee7a6720e20f20341a448f0f9fd43db4627fe5a01c98352533320799dfcfcada73ce174a756f8cf8e7204e9e679f143a9a4eaeb1f9283ae85cc6e206b8f52411f82bc39551a40615e7ef44706e141d1b0c58648e24e9edc3939508b6ce5959d113cc7e02617317c54970d6a5673e75448d43f3e590faff93cbff1e6615dd7f12505e11d4c5f24a5bf3fcc51d53d674175add984a4d0c16fafe64aaf5bde8f33b970c2c311c3a979170a31d4b744792afbd08f59c81df91810145ed8ac4678f136ae0ccb0e0d778d715987a6c0daac8efe20bc6030e3286422504ddb4a0b7e7ef97d350e3cb50a757804771a9b85e1020356f26bdb38aadd195e5c73ea8a1c629d96a84007e3ad19fa41439cfb4fa713abe6d22ddfa7b0b849e8ab2a15aaa6eabdd8f116b5721d4c42abb5549f1c2e8c9d93d0e83b3a8ef562b8dd9861bd1057b5c36964ada14dbd541dee449cc8c2c0017582d6641b7733882f64587125887ad44e143e844aaf69328442e50bd070e0346247ee1ba6ebb28737caf60e5377e4030ac043889f1e9ec6ad4aa4ea902f3821524f04e662473c0e4d60a363e80e3d92d555ac91bc051c6bec6a37971a7df1df3dcd9496154658232c5e57135879b6f0f230d9f6643991e1393d75188886a4487f801fc74ecd41f3bc09ac546e65354fcd32c4ba17229ad5f5f33c50b84467a67af0a93f4081be3feabb2e17b509e394166a636d6509914f09f765eba3218810648db00561ad05484f67567e970a1ac6f6ec5f1317349d583bb29a9f504304ce7e01866e31286e1daff242205c426bf0bd9da0a4a9f3d89eac57bde6a65f229f4b37ed43d0382f56582438ab6850ab22beb295b6465ce89cc67b4589a7cf95d6e5b0ab654f1905903085efa649a69fc2c85885d3c59cbca44bcf00d6ea683d37c0ef1bf421613a3be9856fdb43cc49c49a6e3728e9685b7a3a528f4fe30ecd881b0a5b934cb781ce2a06adcfcaeda8b0de4f39f575dbf3194bd485ac1d6df18c73b664e8f2c14283aea64e0efea606642aa0521965547c478e85f29d8d9ac049ea34dfcd87f8d55057ec7599819a226333f547befb85f3601bbe5b99c6e2ed5771f33531c58a0e890b5575145e6e38562cfc298e2445492d0cb63419f4533a089e975ab7409f83dffd40fc264b0786276f0929c528b5f8afae1f5e2ee7eaff083e9946e1b5771c768e41b6474a9f2a56d1efd8a57bf8d33c66632d7cf06da46cfb0975ab8bfe6d083d2a7a8f2710c8cba79bdf91fd04f7c2a52d0c298d63c9dc0948e8551117293a2d1fba175c60e4302dc385240bf7f084efdff0c0273bdbf19a210aa66792afc5e613a89d6c6d809e153d3a743e2cc75d784cdfa79d01181586160fba438f8337e80f022514f787c120b8a70bf05c04673df616bf27544afd9c0dfdfda96f802c4d6d958253a51af5b7c1d6c744da3cab9c2952771092ca9c96fb61fc950f415b26d83c6170865d65edbd692462b892d6cac9e4d6dfbedcdb90c7cfcf51d811e93ad562a49a32819da643c4d31d92021b62e5a7b92103977ddf5dd5a5e40d1a69d64e9dff9568550f135aed6f1ce906003a36938bd100a22d73d4bd70926fd85569cf7f75a762f0d27e87e47d3451c02ab0b541f8970863df3971cf45439f259e0e83d5e0b67a49a24ade8feb60ec0df07a3206c184ea1084ac8433fe27b1fd9bc6a4b256b089496203585e0eb9bb0abc7b4975c55c664a22c33b7ae8cfc93e057912dc4676ea46a5f9f43e3484c912eb262d899af8c7e5bbe6367bba656cb52e8ab2b562b8c750f01af02246220bee7d89996f4a24bfa4df0528517e7daf4cd7fa4d49ef3ed6e5513d39883aba9260bb04cdf5cdd0d2eb0f78cedf2d95e5b65bb8e96840709f39aca10236bcd793469ea1b1d3f52394ab69a696be1fdd1031fd1fcc21465c701fb1d49e1298116907b3e177fa58c735e472a0402109ea608d6b8c08ad205e80fe62b4b216d109b97ceb4b28c93aadfce64fbb783f148c5de1565bf826ce128b760bb6f1ad9d6558de9b9c2c13963a9f3254d5b51e916d619a834a5e07698db27f2232a8fbe6c58632d906d5301855aa5a45cefd19502e03f039a5ca54a98b7a2699df62548882303b759f9dd386787b42037bfbefc2e051ba3ed3fe41553a9faa6537c05aa7c42eab4a7cc05a868fd7ff656c95f45f2f5e705bbe871b50e3eafc85ea1296eb004e5d24eae48da14566c1273a472d558b6517da799a30e3b84451327156a2ea2042786d99250a685e9416b2e881f4002b9273ac0c20ca34ff1d4d54021dff9df80dcb5802f64cc92c3c1113622699e167fb5a535ce18983d27895f55221a64865e4449bb15782b19a09ba6efec76c42843ce7e98285ce40dbd67b6eb3ea05eaa319f92edf3ce3dc602ba53356b04bfe74a4c34ee061623cbc0619692b1bb4a0f8a93bb1d88ebb5d80664d94bd56adb4e66cdcf4ebbc8264851cbdf843d97597b59f51f05e091aa0d5cc32293ba5a06acb28c7a5ae03e4241e7bee9871cda7ca8c40b9347dbe8cf0f9f9517094fb6472688fbac3118ea66f189af7659c3340741df5a7e98638a44661bfe63cffa56348378c54c20b95cf00c58c3f3be3e8ef9161b722ad4ff3e71f0572106887109063cdb9de2264e68236260f6e14575fa0db9a93b86b11483f9bd809461425f5bb48fb24f2fd3446e397a5032c24acf35b3382c7a183778cdf313c126827116e2464fa4fc48cda68c80bc7f82b604e04540b1f96980be67bd7f6c78820e14ea8c0814494e100d7f4c74547d87e01031323f1f7fd71f20d8f2c10be026cf57f3bc271fdab1d90318946dc3da370a7183e79a928648770adc25bd393e4628b325f8a5dbc61659ddd0c1c18dcf3d6d829418e0e9168ec7b5ad35f88a57258959d1b0330f8f79e85e413680dd9e700bc576604660e896865a3bd32b9094da612b969cd976355bcbca98bb3d3345c7c17ebeacc2f8e822ed161a4b1f0028d7c60d4d15ca435f45d6762edd1be6e06ee5bcdd73858242d04e834ea83171563ef01bbce936ca88021b7c3ea3af8b61967f3dbd10e59397ae1368dd72a49ecd21f17fc2e8ba91c2f4317548bbad33ad1bb3daa095219077fcf3f85e0a2d7e359e5e78dced94b56874703c9d3522594fe256c36c73fc4f4471428ca05b93a0b993a91fc9bc6509ca9d0cf9cb9ebde2773768d1dd03cbc3f028e0d009a749f28ba2af3296da248e342a9933b856a08a81e0521b2f3f49123ef7e0377a11041639cb49e96e2b7977a7bea4aeda3b5ec17fc006380b598d1c969b882ebd6e45402c5f4601cd9a9701af438b4c53b6af1023eee62db796856190118673961179e3ae6c780cb73b900629eac3026634abbe025ecb028a44737fe15b1fb534f321afbec5583223bd130a3afa1703c9b488c6400e0073565e02e54f13519817a8a8d2f9d36e56526a5c9be191726253755c41f29b8ed8a6097a1885bdccaae02618dc60607d36a6fd1072df4baa88862ebed4a76a44679ae4c57b8cb388216c4b8045edb2f2d4155a0abf8e8bf5663281715333e7458dcdb37f223b5b1894b1eee0819e610476bee3e82571d0e54dcf82b9d56f7711047f6d777f26ece9640f632fb3ac5a455b89d35b39472696342069826f17c5fb799bcba7d08bab440b84c61bfc96fd99e58bfb70c10520e3a6112453ae70e3d9870e2c2f5c1fe2f8a873b83fcb4c4fe2fa3bba2b258697c43aff27a2c391fd5a5b0997e3609ec79113e845029bb960f42c79ffa91b3147d4ebf49bff8d0a211c61e1f18eaf6d8aaa08ee6651a55dd463828183c39de62fbec4a7c63f0ca4e0fd328269eb8c09b294f712895f743473c70d68df8dc0998969248d0c733f53d60e7bd1a39499b24aa3fa1775117a9ff95a8e1436007c4a4275091aa86f4430e0ec6eb1384070594410668848ae238f2339e173c78086d0f7c542b1aa7b17e9e4d17629e589f178e3ef16b471b7e8a9e8c1e637b84cf9be6983ede71a256cea53646c501f622cc90c9ba562530dbc923ca6c6ff017242e7ccd28b70f18e0f148ca70b205421d4f63b0e2f85dfe4535a491533dbf3491a50ec7618a70e5672474a54a5f0b7dd8b64d4c9766f16830257f5c763053e0badbd8c38a334c6cda329d4f84749c141623d6d28d22a11fba1efa4bf51c87b11e5632a95bfd0eaae4e88f3b94c6ffc87784ae11a0adcfff600d312b62accd35d761ec7fc4d98a0c2013ed5f7935b8a715940e36c8884c2aaf8ee85740a5fab07e5acf05d15e54f4456060a1accb2b3a0deb6925f34a5ae112df0c6b2618dd3619e17917f32a1b82a3d48c0fe7b962efb332de0de81d72e6a2b80464cbf21db7cadafd73b3b73d3a4c0cc36cd3457d7488a1ef1023dd112cc2d3dcbf409d74b388fee9abeee9113e47366c2d201417f75e5dc4cdba3164b0a2c40b5fbbb3a8cda25fc4931a42b82590dcd654f08",
  "index-master": "9e12641f09ae090204530a9cb6911aab1071216349e6ab0a8faf18b926f63f8bc2a2d33d3a9fa0f788f70b531cee41d3ec7297476f4ba0ab1cb285ac1f9354614faca05786480e670718226226ccb80374460285c4e24f6dc07021c62e61748bcfe97101580408ed9f5f8fbd034b818128c01a04ff36c718fd87bb202cabedbcc7bb9b045ae6e51adcf263f4d97f1d592b0ef6c96a3d421a05cbdbe18247bb10eb9755a73d57d2f94c0bd55344a2d60362d5acead6e6ecfec0941ae06e060340464995c145fb8b86153bee12d26fe2fedf9c886c53270d72d13ae3f9536f18cabfbc36b0e74c43d9eb9136007c3170487d5cd518ee4000bc7c5ffa96ca937518a84a54a0ffb043eb9965b22ac6ec68253588a4f5be32ed2614c771082b12a91257a7fcc4a153a07fc50c42ac840ea5e49e75e5c845f7fda4a0d901f1f01761585ed240cecf2f063e7c926b6ce6d1c8654b3118c593b87d4cd47ab1a16a59774e32fe72aeb16cd67f577bed0c25a8199cd16842f9760cde91923a1601c266e912a9b17358faedfe45b4565bf05a3e0254c6f87dcc8a65b71a06852749c14ae66dec6c960970b12d1f31a3ecbeaf43b9acbc6f4f989bac006f9b765550e1e5ee226a931b6d76ca01b27d660282091ba958df2a79524dfdd5a6a02605580a7340607496006637aa5fbc05a7e3052174811a91ddf4c1b68f5b49ec7babc9c24c47efb90488d8fc294a4cdb3f88abddfebb66601160d7c7547c5490a5eeae3bc3cbfaa07b619db4f66841df82e4395ced9e18ef3d169e677eceba8471c2d66e2a575af5a088179da05a738c0c4f6ad56224cab96091699ec9f1d245a0035e2a9a6d0de8907c1fc9ce37b281ecf8b96247fa95df21b7334ac87ec0da1440c3ddf17d0a43bacd1492663a69b5515ec34f742abe74b4cda2112128cacf2717efc22720140e072210dc51f3fe795672245aae3b3e64dfa77674b78dd95b3a6991c5ff9620d5863e5c07651a195dde896091b9b1d45dc48f0f85ed80fbea2d642370058536075f93f874f54824608b5f53c5d4b3486499a91d5414641f73633adfa831c1bfd78cb1457560ec765a15ca9beb3a57356bb0e66e11ff78858effcfa74104f0c89893dd1bc344ef4837c80d6d6ff997be43fffd7a572d7f1dc74a4e5021b388efcbfc1324b3e28b147c3fbfc27ef2b86d47b400e4e9d555e63a46db9c619de2e096afc05e63fc0c7a6f95a27a2c04d546137c9f9ee41c881300fee3277175fdf8bdb2bc8b1b4d013e1eee59786d8e2c87eb9a4b51fc27005e4e4e39d9f5ac2ec91589aa14202cc159dbe8272c777859f1040be7b498ce3f5691609dd5beef5f2fddddec29e3136775a426c6f71b6ba261956dbd364543f870c17b13abe4388d3190349a3257fa6ba7494fe185e450808bad9849a421b8f5a83635ebe59329ccd64464ad82f2ff7d5667a8d2a7547530f124226af0c8a529719b4f32f0260cafc32f9654bc85df890241a44f45b9a9cce246ab2a402ffe2e3851d60203a0a33669116cf2bb677acf3da17a28703430c4c06ad85aae455c82d71f6fac7a3fff7304249de1529a3a3fd4bff7e087237c7b7afbbb61dbd73e06280616def6c3923d4ce8ed7241bc8a6187d3376431620265de22823e5c76c94b4c6acbb1ff15d4bbcceb649673e844481a97b3ffef7710a5c537c6c46d16642b2992dfcaab599c2f84562a9d83fdada9c7671931535edb1e20de99e6e246821ddb1c5142fad1240e25d81bafb2215b2f1eaf5fad7711ed1a97afec25b6609aab0cc32738ef7f91657288eef7ec385f43ebed493500e6170790bca8d0935c5c5ebacaa974c6effc5cb8f6aeda049d81bddfb8976fb00a45f34266b63c99c0afc1016ef3f04c908dd497b33238d57a356d7f0ecea10c79173f05c0665f4bd3d36038f2364cc31f324894ae94d965595055cde6d335938c03e4a476de212ea3fe6e4d38296d10d718b87967f0435fa2074c3542e7fde6b0765cf9ffed542f0ac45b24bb9084358408ab2c31000905dcf3b789e5baafb3abb6f774d57580e29823ce72",
  "achievements-vip": "d0f04a43eb818051dfeba4f8e2cded0710ed0b0663572046b4d058e5bc80a4db95dbb43f3a52c307020a233371df21b15536ff080f2c566d91e2354177b7bc33c2b62f1b7369c111bde0e2d7a44450b8bd29766163f1d102b927fdd244fa27bef2f2251cc27c96f586084a5820da1488790235a0d820d500e697c0d8e18280534c81c71f4104a7b752be963af00837e6dbd2c28224850c03597d97c3cf6a63db7e966abc30ec207d028dedfb5b5cd617e638329fc4aff45e60b98325cf57f043921fd1d2fd09e3feffcc1357d08629d1e8707c1acbda2ec638f664cbf957a13f49987ae99c0a758bad8be6672afb7a57f0346d8879d3f0767a790cf9d6a662797d8e6e960910283a2de3fd48e7687b3e99e9897d5d98b5dcf50353a410f9715e5270946da2677e8dfe912aaf2b6d6a00e1d1f00074488334dbedb5e0079aac2947f894dc0ea43079af107feb9ea4be0371ad69a640a904434dbc792b6008a079956fcef8affd4aa236b2ddfb63e6bc86b070860a11733ecfb4dfe6f6213f789801c49abc27368ca99d4b14e6cdda33390d758484a573868f995375769446a8fd25c62ae6b6523f3411087a51527a08acd8d52b72d23fc15ceeef03e7f94bd3f0a3a9f2803751ef36c35390752213468f21ff2dab51bebfe7eb01ed164d1251cef25fc5da07f25ff2e8e0c52f5425b42e6bb03a5766b8b77bf80d8a23b18fa58679515501bcc7197e2f9e822526773a888c3b2006c1855819b78192fa66f5ceb03b6181bed20a6e859f7196e2ef84700a2d4b8bc91966c0f0591cfbf0ad57",
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
  "proj-stability-ai": "81e7def015666a332e375780bb742a193e7a8a98f5997087b81c0e11cb2f2e13cce5fd7fec99d714d842df7ff562b87cda03e35a019187bb63ed20b88fe88577ad8c83a6f30a3869222212ad38"
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
  const btn = document.getElementById('navAccessBtn');
  if (!btn) return;

  const effTier = ACCESS_CONTROL.getEffectiveTier();
  const isSimulated = ACCESS_CONTROL.simulatedTier !== null;
  const session = ACCESS_CONTROL.getSessionData();
  const avatarHtml = (session && session.user && session.user.picture)
    ? `<img src="${session.user.picture}" class="nav-user-avatar" alt="${session.user.name || 'User'}" />`
    : '';

  btn.className = 'nav-access-btn';

  if (effTier === ACCESS_CONTROL.TIER_MASTER) {
    btn.classList.add('tier-master');
    btn.title = `Master Level Active ${session?.user?.email ? '(' + session.user.email + ')' : ''}`;
    btn.innerHTML = `
      ${avatarHtml || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14v2H5v-2z"/>
      </svg>`}
      <span>${isSimulated ? '👑 Master (Sim)' : '👑 Master'}</span>
    `;
  } else if (effTier === ACCESS_CONTROL.TIER_VIP) {
    btn.classList.add('tier-vip');
    btn.title = `Higher Tier (VIP) Active ${session?.user?.email ? '(' + session.user.email + ')' : ''}`;
    btn.innerHTML = `
      ${avatarHtml || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>`}
      <span>${isSimulated ? 'VIP (Sim)' : 'VIP Access'}</span>
    `;
  } else {
    btn.title = 'Access Control / Login';
    btn.innerHTML = `
      ${avatarHtml || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>`}
      <span>${isSimulated ? 'Public (Sim)' : 'Access'}</span>
    `;
  }
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

  // Dynamic VIP Links Processor (Gates GitHub Repo links for VIP Access)
  const vipLinks = document.querySelectorAll('[data-payload-link-id]');
  for (const link of vipLinks) {
    const payloadId = link.dataset.payloadLinkId;
    if (effTier < ACCESS_CONTROL.TIER_VIP) {
      link.href = '#';
      link.removeAttribute('target');
      link.innerHTML = '🔒 GitHub Repo (VIP Access Required)';
      link.onclick = (e) => {
        e.preventDefault();
        openAccessModal(ACCESS_CONTROL.TIER_VIP);
        return false;
      };
      link.classList.add('project-link--locked');
    } else {
      if (!link.dataset.resolvedHref && payloadId && ACCESS_CONTROL_PAYLOADS[payloadId]) {
        const resolved = await decryptHexPayload(ACCESS_CONTROL_PAYLOADS[payloadId], 'vip2026');
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
      <div style="text-align: center; margin-top: 0.25rem;">
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
  initCursor();
  initLightbox();
  initGlobalSearch();
  initAccessControl();
  renderSiteFooter();
  window.addEventListener('load', loadGA4);
})();

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
    if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (document.activeElement || {}).tagName || '';
    if (/^(INPUT|TEXTAREA|SELECT)$/i.test(tag) || document.activeElement?.isContentEditable) return;
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