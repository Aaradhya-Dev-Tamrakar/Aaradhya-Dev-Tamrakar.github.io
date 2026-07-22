/* ============================================================
   SHARED SCRIPT — aaradhya-dev-tamrakar.github.io
   Loaded on every page via <script src="assets/js/script.js">.
   Page-specific JS lives in each page's own <script defer> block.
   ============================================================ */

/* ── Site constants ─────────────────────────────────────────── */
const SITE = {
  GA4_ID: 'G-P38642CDGB',
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
    "title": "",
    "meta": "",
    "href": "achievements.html#achv-vip-1",
    "text": ""
  },
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
    "title": "Data Cleaning Hackathon",
    "meta": "WiseBee · 2 Dec 2023",
    "href": "achievements.html#achv-26",
    "text": "wisebee data cleaning hackathon 2 dec 2023"
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
    "title": "",
    "meta": "",
    "href": "projects.html#proj-1",
    "text": ""
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
    "href": "projects.html#proj-3",
    "text": "fusemachines capstone — vision fairness & bias audit diagnostic tool for deployed vision classifiers — runs a multi-demographic test matrix, flags statistical disparities, and outputs a compliance report; detects bias but doesn't correct it fellowship capstone, two-person team with tisha manandhar — full readme to follow in-repo aif360 fairlearn fairface utkface computer vision bias auditing statistical testing html/jinja2 in progress"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 11 — Vision Transformers",
    "meta": "Python, PyTorch, torchvision",
    "href": "projects.html#proj-4",
    "text": "fusemachines wk 11 — vision transformers five-module deep computer vision stack — resnet-50 transfer learning + gradcam, faster r-cnn object detection, deeplabv3+ segmentation, a from-scratch vae, and vit patch embedding clip zero-shot classification hit 92.0% on a 200-image slice, outscoring the fine-tuned resnet-50 (74.1%) — deployment memo compares both for a 500-camera warehouse rollout, exported to onnx python pytorch torchvision timm clip onnx gradcam vision transformers"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 10 — Image Processing",
    "meta": "Python, OpenCV, NumPy",
    "href": "projects.html#proj-5",
    "text": "fusemachines wk 10 — image processing hsv-based multi-class fruit segmentation across the fruits-360 dataset, morphological cleanup, and filter-based denoising benchmarks (gaussian, median, bilateral) from-scratch canny edge detector (96.9% pixel agreement vs. cv2.canny()), plus a full fruit-detection pipeline — harris corners, tuned hough circles, connected-component separation of touching fruit, contour-based bounding boxes python opencv numpy matplotlib hsv segmentation canny edge detection hough transform"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 9 — NEU Steel Defect CNN",
    "meta": "Python, PyTorch, torchvision",
    "href": "projects.html#proj-6",
    "text": "fusemachines wk 9 — neu steel defect cnn pytorch cnn classifier for neu-det steel surface-defect detection — six classes, 1,800 grayscale images from-scratch nn foundation → tuned cnn, 98.8%/78.9% train/val accuracy; augmentation, batchnorm, and dropout ablations plus grid-search and optuna hyperparameter tuning python pytorch torchvision cnn optuna scikit-learn"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 8 — Forecasting",
    "meta": "Python, statsmodels, SARIMA",
    "href": "projects.html#proj-7",
    "text": "fusemachines wk 8 — forecasting time-series pipeline benchmarking nine forecasters on monthly s&p 500 data (1990–2024) via mase/rmse 4-model ensemble outperformed every single model — mase 2.44, confirmed via diebold-mariano test (p = 0.0092) python statsmodels sarima holt-winters prophet lightgbm lstm xgboost"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 7 — Customer Segmentation",
    "meta": "Python, scikit-learn, K-Means",
    "href": "projects.html#proj-8",
    "text": "fusemachines wk 7 — customer segmentation market segmentation on uci online retail ii (~500,000 transactions) with rfm + category-ratio feature engineering full clustering comparison — k-means, hierarchical, dbscan — validated via silhouette and davies-bouldin indices python scikit-learn k-means hierarchical clustering dbscan rfm pandas scipy"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 6 — Probabilistic Models",
    "meta": "Python, PyMC, ArviZ",
    "href": "projects.html#proj-9",
    "text": "fusemachines wk 6 — probabilistic models bayesian inference pipeline for telco churn using pymc, arviz, and pgmpy mle/map estimation, dirichlet-multinomial updating, and a fitted pymc bayesian logistic regression artifact python pymc arviz pgmpy bayesian inference scikit-learn pandas"
  },
  {
    "type": "project",
    "title": "Telco Churn Tree-Based Ensemble Pipeline",
    "meta": "Python, XGBoost, Random Forest",
    "href": "projects.html#proj-10",
    "text": "telco churn tree-based ensemble pipeline end-to-end classification pipeline on telco customer churn (7,043 rows) with smote restricted to training folds only random forest + xgboost with shap explainability; secondary tenure-prediction task with a model card python xgboost random forest shap imbpipeline smote joblib scikit-learn"
  },
  {
    "type": "project",
    "title": "Telco Churn & CLV ML Pipeline",
    "meta": "Python, scikit-learn, Logistic Regression",
    "href": "projects.html#proj-11",
    "text": "telco churn & clv ml pipeline classification and regression pipeline for churn prediction and customer lifetime value modeling — roc-auc 0.841 ± 0.005 ridge regression best for clv (mean $1,304.70); full html report export via papermill python scikit-learn logistic regression ridge lasso pandas papermill"
  },
  {
    "type": "project",
    "title": "Text-to-SQL Agentic Pipeline",
    "meta": "Python, FastAPI, Streamlit",
    "href": "projects.html#proj-12",
    "text": "text-to-sql agentic pipeline five-stage agentic text-to-sql system over a postgresql database — planner → generator → validator → executor → summarizer 100% execution success and 100% result accuracy across a 50-question benchmark, zero retries required python fastapi streamlit gpt-4o-mini postgresql docker prompt chaining"
  },
  {
    "type": "project",
    "title": "Nexus — Personal AI Operating System",
    "meta": "In Progress · React, Vite, FastAPI",
    "href": "projects.html#proj-13",
    "text": "nexus — personal ai operating system project-centric ai operating system replacing the multi-browser/multi-account/multi-tool workflow react (vite) + fastapi + sqlite/fts5, parallel groq + gemini fan-out — v2 redesign complete june 12, 2026 react vite fastapi sqlite fts5 groq gemini python in progress"
  },
  {
    "type": "project",
    "title": "Alpha Android Super-App",
    "meta": "In Progress · Kotlin, Jetpack Compose, Material3",
    "href": "projects.html#proj-14",
    "text": "alpha android super-app modular personal super-app (kotlin/jetpack compose, material3) — gesture remote, budget tracker, multi-mode calculator calculator is the primary shipping target, play store release in progress kotlin jetpack compose material3 camerax mediapipe bluetooth spp datastore apache poi in progress"
  },
  {
    "type": "project",
    "title": "Edge AI Stability Detection System",
    "meta": "Python, scikit-learn, RandomForest",
    "href": "projects.html#proj-15",
    "text": "edge ai stability detection system ml system predicting platform stability from simulated imu sensor data — random forest, 99.8% test accuracy rest api via fastapi, joblib export for robotics integration with gcsbr (gesture-controlled self-balancing robot) python scikit-learn randomforest fastapi joblib imu edge ai"
  },
  {
    "type": "project",
    "title": "Custom Processor FSM Design",
    "meta": "VHDL, Vivado, FSM",
    "href": "projects.html#proj-16",
    "text": "custom processor fsm design vhdl implementation of a custom processor datapath and fsm supporting gcd and exponentiation operations simulated and verified in vivado 2023.2 as embedded systems coursework vhdl vivado fsm datapath fpga"
  },
  {
    "type": "project",
    "title": "Antenna Lab Data Analysis",
    "meta": "Python, Pandas, NumPy",
    "href": "projects.html#proj-17",
    "text": "antenna lab data analysis python data-analysis pipeline for antenna radiation pattern measurements from lab excel sheets scipy cubic interpolation plus matplotlib polar plots — communication & rf coursework deliverable python pandas numpy scipy matplotlib polar plot"
  },
  {
    "type": "project",
    "title": "SysOptimizer — Windows Optimization Tool",
    "meta": "Python, CustomTkinter, PyInstaller",
    "href": "projects.html#proj-18",
    "text": "sysoptimizer — windows optimization tool standalone windows optimization tool packaged as a .exe via pyinstaller power plan switcher, ram flush, background bloat panel, startup scanner — runs silently via create_no_window python customtkinter pyinstaller wmi powershell"
  },
  {
    "type": "project",
    "title": "PrakopNet — Multi-Hazard Early Warning System",
    "meta": "Archived · ESP32, RYLR890 LoRa 868 MHz, Raspberry Pi 4B",
    "href": "projects.html#proj-19",
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
        <button class="nav-access-btn" id="navAccessBtn" aria-label="Access Control" title="Access Control (Ctrl+Shift+L)">
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
    navAccessBtn.addEventListener('click', () => openAccessModal());
  }
  const drawerAccessBtn = document.getElementById('drawerAccessBtn');
  if (drawerAccessBtn) {
    drawerAccessBtn.addEventListener('click', () => openAccessModal());
  }
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
    <div class="footer-copy">${SITE.footerCopy}</div>`;
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
    if (e.key !== '=' && e.key !== '-') return;
    const tag = (document.activeElement || {}).tagName || '';
    if (/^(INPUT|TEXTAREA|SELECT)$/i.test(tag) || document.activeElement?.isContentEditable) return;
    e.preventDefault();
    if (e.key === '=') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top: max, behavior: 'smooth' });
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
const BS_YEARS = [[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[30,32,31,32,31,31,29,30,30,29,29,31,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[31,31,31,32,31,31,29,30,30,29,29,31,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[31,31,31,32,31,31,29,30,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[31,31,31,32,31,31,30,29,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,30,365],[31,32,31,32,31,30,30,30,29,30,29,31,366],[31,31,31,32,31,31,30,29,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,30,365],[31,32,31,32,31,30,30,30,29,30,29,31,366],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,31,32,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[30,32,31,32,31,30,30,30,29,30,29,31,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[30,32,31,32,31,30,30,30,29,30,29,31,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[31,31,31,32,31,31,29,30,30,29,29,31,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[31,31,31,32,31,31,29,30,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[31,31,31,32,31,31,29,30,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,30,29,31,366],[31,31,31,32,31,31,30,29,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,30,365],[31,32,31,32,31,30,30,30,29,30,29,31,366],[31,31,31,32,31,31,30,29,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[30,32,31,32,31,30,30,30,29,30,29,31,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,31,32,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[30,32,31,32,31,30,30,30,29,30,29,31,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[30,32,31,32,31,31,29,30,30,29,29,31,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[31,31,31,32,31,31,29,30,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[31,31,31,32,31,31,29,30,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[31,31,31,32,31,31,30,29,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,30,365],[31,32,31,32,31,30,30,30,29,30,29,31,366],[31,31,31,32,31,31,30,29,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,30,365],[31,32,31,32,31,30,30,30,29,30,29,31,366],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,31,32,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[30,32,31,32,31,30,30,30,29,30,29,31,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[30,32,31,32,31,31,29,30,29,30,29,31,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[31,31,31,32,31,31,29,30,30,29,29,31,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[31,31,31,32,31,31,29,30,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[31,31,31,32,31,31,30,29,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,30,365],[31,32,31,32,31,30,30,30,29,30,29,31,366],[31,31,31,32,31,31,30,29,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,30,365],[31,32,31,32,31,30,30,30,29,30,29,31,366],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[30,32,31,32,31,30,30,30,29,30,29,31,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[30,32,31,32,31,30,30,30,29,30,29,31,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[31,31,31,32,31,31,29,30,30,29,29,31,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365],[31,32,31,32,31,30,30,30,29,29,30,31,366],[31,31,31,32,31,31,29,30,30,29,30,30,365],[31,31,32,31,31,31,30,29,30,29,30,30,365],[31,31,32,32,31,30,30,29,30,29,30,30,365]];
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
  "index-vip": "05e839eefecdfb5fef7aa991bf8fd06d0faeb2df6e066e408ec25f543df5e975fd5cf339cf0ca533f81e8556bcdd99f816fb4ae16f2c695cb3114d60eebf1aa86e9cdabdfef2cf97bcfd8b37ad2ae51e5cfafac39df4aef47bf7c98be89bf44ebac9dfc1c1f5c6c64117b4478440cccaefcdbdcaee50fe0aeeecbd7d21c97a80b6b27d42cf38a0f0254c41870efd12d480bebdcd93b22cf3cf3901b8aef42f61a15fa68ca4ff1aebaebe4ffea9ea9adfa8541eafabed10ab51ef40d46efb7074404bdff3e430f81d11ff3ce8e0eeefad3a2ed5ad0e2c2ddb12c85e49339e801b7a2d6ad6b0c20ab0e39bcabfe73e3bd6aeb32cbcfeb2b53b8fbf9cd5a5d10feff1cb4df44aeab6e7a2b918ee9ddb2f5bd9faecad3ec96d09ec6feefebcb3ebffb7fa253ffbc05f6e80b2a59a7a60d62ab3ffb9a674483ca794ef64c679fe05ad36fcbe",
  "index-master": "142e08fba916e0ef1978ff8316cc360539cd3565fe9d121de5db652651aaad1b16682a75be9a817dc2759db349ef0d6f6a15c6a845988e9dad0c77a0f88fd26459599b4c28b0637cd2564aca98170b2c16fe9ad6088be372d4c64ceaf7d2b227533d2e7150df5397b450389acc16a528dacb450b4ef2effcbb09ed5e0647f36bf65bf3dc2dd206ace2c495930ed4b9b8ffbc8a986ec67db98611f8e47ceca7737bd7848a4af869cbd58cbb0b644e7530a5be6bb004385420a19204dcb4918423429ef56ae1977bc0c592fa2bb1f0b6919d7ec39b72d4a7f42a89a17911514ac0f344c0e5aa2ca974cd0b2fc40b49befb68af28da381f151c64215d15ff5fdeb507044e3aa0a4e37a2434030ee34c2f434a8b4cb1feec9c3f908651643be3b29d6ac2df8b74253f4b57f868157d8babdbd8de6da09fa0c2589039f779299a9e371bc3b674c769f18a2804349d9dc0084a89098b60fb98f34b94eaae1af7d433ad25392753a0376b674e8f8e25a26d03738069681e5a70ae25a72b6949bb48ffb90f4fd00a0b191f884813d79fe5f6c1d0c3d211558c4564b39b18a8abbfc818081aab220f2b0233ae4c6310b679ca5914c874dcbb16a4db17caea8d9f678a0ebdba76857202e466c24c3ae5ab85b4111ff5fcce8804102637fafbdd5f67601b8a28ba09733170a911907502b72720f6869d8b22ff3852a49c2228ed0a399ea0fe564fe3251ca17c174e5a128b245f0c199b52dffd9da2c0c30fa5c80de2b7466b8d4c37b2dcb43aae5125e6036c1b00834608c553a02b01fd705bae5c56eef9d11d9112716d20010ed4af098011188af21390d3f44435b5852d203b35bf32a08ea0f595f434bbf25cc32863b277e631fe2dc62486bcbba83ed0f2edaab1341d8e9429b07a8274fe1a9ab819dd90efaec44c8c1289cac88882d8fa5e30ff0c6949e29135c8e6f07c3a022977da77a8054f23c9c9e27c2de13be92e02294221fefe6b8dc1e61bde72bbf952a47257bf224e90a3f9afd2444842b13722849cceaa9133867117e79a1114a5d0ee78f740ffea073711393248080fad7f4bf2ef4e3262f487616e9a09ffc0790c56807875d196a7b72627ae838e61cb4024be9c645dba3c564901a4216be6667a9ef7443c3f28d4a19c9c04c584782d758847f35bebd496573f7bd69307f38e98a36514d004579cceb5f13c038455dd5c40306163b32595664eac1c0a68709ead8287884674d7298e905a4fd0b1895f30fc6b21cd1053d44ffc20a017156bd9b3944848f6bdb5c1943764a352fe8921306c0d79238e5d1ba44692112b3ed3c7e1ba84f2dad14170ea6014be5adc03ec7ce6e69df9eff0788e45d143aa414b329b4a978cf24dd16bb2c9f0349c223c2528840ce6326c041b784163ca8e83f7ff7539a525cb1553407eb07f8b0571f52997ab41163d4675c095ea8a33b24b7e1c6ffc6fcf92e1c764daa08ad01f94a884190de64100fa6d162beb88935b3a77a8a5c9eaef6c1d37253bcc9e47d631b49e13e351a250909a463961152678c7396a65f283435b57058a3c0940498d4457404428a990ad48dc54d4e898f34f31c442442044decb6162eb72c2fb036cdb3f6482dc519fc4fa6b7f1f9e633962a5db40b9247cdafda5c14d13ae0110b057121a578087d4feab921509ceb7037ddc179af17f3e724bb38fbcaa63f61430de300df453fa3fd5581a3850809fd3f7ae9f54275b080e7e31095258dde1e9193071863c7944ba69f24fca20c16cec190421d739cf7edbb76464ddbdabaa15b503a92738235bdb077e8e43bdd01bf1558d8bda85f5151cee76023273ac4fe3e42ff86391f379b25babc8e47180b647cd67a9c46b3ce209b0afe3ed5a415844c0f87d4b75d0fafb1d82d0353a6ca190bc9fda2de7f7e43d404a06754de798d257f80f588de8e7ba0705b8efc865b920dbb39b227cb6a434b8061762bc9f893a67586e89b144cb601e4e03a00bff338c5ae05a6b726d32fa27095c167ef3f3d62228f3f559cfc468649b81b09e96003fe61bca61265396c70905fd386426ddb87b07d3",
  "projects-vip": "c2ddbdfd3a695a749fc76b731d8c705548a85ad858f9034d65b71f7f825af7bfd994a5858ed949eee074da884d104b409dc069e75e6ae213ec6e8ff193b06da9fc1402e2f6f5968a0a596c9578ff50e047de7ba9d93a8929c976c43ce07fe7383e3c00e7c60764b231bbb61b8ae0f68da473a762576b96152fbb42735b6570edc6c554cad40506c03045b04530b99fb2f04a11d23afc84939c8d1f3ff67eef40ab2b9ff348992e8edd999a8a74064ae07809787051fc0df479c6bb957126b09b67d1a06d9798776d220044ef335805c86fba7525ea76a5833ec900c5959e28f49bb5f3bc3b8f6e5bf935a3bf891659fa88c1b8203b74e2f9acb5ce99cf13b76f0f1483b6a56a23e44f1d16af002414d192e8fa3baf167bf88c1134a8b5436ef92e49a163273c562bd120eb3d4583e6b3dea4ecd879c03f6314afdb12b2968b6e968c2ce1cdc2bfbc708f875f537960c8133c3cd94009cebcf76f1d88b12c5ea68ef9701349154caa8611e93519b883ba2b2dccaeb74bfcaced051e9151afd858c77baac5c47bb7c550225cb4147123e58f69f74843cd1d16c06fbb19b347f597058a90eb9a9856734e2935b5872fedc930c394a449157e77730b129cd9bfbcf4aea717127b8c25650bade2a961c30efe4d3d0e64f241f4a1c1648d5a51b6b56a1dd258ce7851dad7a1c3c4a56d5f16b50666147f014d1490fd488406bf54fdf10b9ee2ad92f25136ee6a137cc00eb79de7b563998ef8a7ca22166e48192252b0e5b95bdbcfd4e6813018856d5c262bb1083d6706d1d7f1aca3b7cf21453e0568ce52f1560b86ce7aa443043be1ea25a6ea9bede5f41106e3226650895bf381467ed2a113fa3993c68d283f295275e4fbe81f4d8825f69d4b7d98a1a3590c21bc4ff96906ef7a85e989f35872579c25acbbc364a229c449fb45a827f99ebab72464443eb4174eaa5bb4ea68e36b3b76dcd3cd78472f84dc544215c66217fa7dcc79901d6b9a844e719458e364d69fd5a15efc1b4c16ba12909adadd8df804a98caac5219fed4ad50ef4b8d65fc781a5f41e54e884c090cc3b659c75df5b12a1783beca1b06b0451a22b2edd45ebb6037ceef3b263f2ce88b4905defcbf9a304e748c29ff3886ba4b49ad3939c195755b868029ee75503e82963af32e33f1a1b043e127e1b738f152bfd5eb98cabf3feb6811aaad50333fb7340383b4f19630ea040e496f78ff451d3fcb33512028d1ac5305fe0959d006c8fc3cfdefe952e623438d66fb61db7190d54953c231b4c97fccba532ad2f7a5a7e6f53f6d0fed89e7259121064e8a3057a099b2035b4e3e151fa8345877004c3cd31742354ce804f600eb9a8004512279dc35f112d787c8e88e79d9a443079b0f9e9e40dafaa0a30742d353453e8a587f4abe4449aa5e10b1151ccdec69ca782d159fff0ac65799a51700ccf40eec32861e3898d91088f62fe766f42e55d76d7ccda721b70ed75acb14469f358ab57e842869aa4f8eeb36e9f68d14d414688d86f0061b1aed21c5fb7",
  "achievements-vip": "ec5fc7feb981b6f0176c8c6770affb1fdfd4c59dea7009d3460f5c19a390dfe0f323affac4b1728fdffd0dbe3101743b6b3d114d28259c4614fa0d97c5646fe7b6a7db676d2f71c4ffb542d52d3afd69e2544164d4ca076dd845c1ab4dc77561b12c0376ccdcb3605fa8faf310281ecabca9d165d4c6ae0c2f5fbbde4b05d4b73b97601c809c7c1605c869bacf49b3686d7291d6fb2bd97e37e66e6517f5a54be9389505f0c6cf9db623f5197b19a3ea000ef20658de7bf6cf06d85ecca3363290c2e269a5cd54b7ce0d7607ec95bba97ad2a06baff2a0b61e20d3821afcb3b6853b8c0235cbe7f4e3ed8fa5cd03810531d2e65a7b6698ac733811f099612d8cf061fcf1c5690b9358a225a0f54fb2ce0b70ef625ad27ca17b7bc0a045e920c1fefd604ef703ba0b4fd7674b632ed25d9f3d3d3eb533ae28b2a6643a2deb549dbf9c53a959d13cd70c723d59ccdcd13c7559236585ca3000aa74a1cc469b048614868ce21f1ac99ee8f916f2dfb4cd266c08580ba9de77aac9d0e259b0f7ff6bf10068247ee20389586fef7cbb06b10bd8a3c18f9727d3a65e0a63592ff44de3c14d840690f99ba84d557358e249967ab0ac5c5e9c7c61975a376092a1a1c71aa41ccb118af59fae6bf0c8345e8cf26554918b8ea5c3c016c3ec650135cc7546211c2fbd22969601a7de340e8a365121f4b1845553a117fa0415de0a990723d504207ed4da1f81e9a1e616c8804b37ea19b0d60ec93249844c24773c4f81644f7d73e42f96c0de5dbd1c94d85f0839c392ebe42001322651a01dfa51917f"
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
  MASTER_PASSCODES: ['master2026', 'master', 'admin', 'root'],

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

    if (this.MASTER_PASSCODES.includes(clean)) {
      this.saveSession(this.TIER_MASTER, clean);
      return { success: true, tier: this.TIER_MASTER, label: 'Master Level' };
    }

    if (this.VIP_PASSCODES.includes(clean)) {
      if (requestedTier === this.TIER_MASTER) {
        return { success: false, error: 'Passcode is for Higher Tier (VIP), not Master Level.' };
      }
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

function renderAccessNavButton() {
  const btn = document.getElementById('navAccessBtn');
  if (!btn) return;

  const effTier = ACCESS_CONTROL.getEffectiveTier();
  const isSimulated = ACCESS_CONTROL.simulatedTier !== null;

  btn.className = 'nav-access-btn';

  if (effTier === ACCESS_CONTROL.TIER_MASTER) {
    btn.classList.add('tier-master');
    btn.title = 'Master Level Access Active (Ctrl+Shift+L)';
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14v2H5v-2z"/>
      </svg>
      <span>${isSimulated ? '👑 Master (Sim)' : '👑 Master'}</span>
    `;
  } else if (effTier === ACCESS_CONTROL.TIER_VIP) {
    btn.classList.add('tier-vip');
    btn.title = 'Higher Tier (VIP) Access Active (Ctrl+Shift+L)';
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
      <span>${isSimulated ? '⭐ VIP (Sim)' : '⭐ VIP Access'}</span>
    `;
  } else {
    btn.title = 'Access Control / Login (Ctrl+Shift+L)';
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
      <span>${isSimulated ? '🔒 Public (Sim)' : 'Access'}</span>
    `;
  }
}

async function updateGatedContentVisibility() {
  const effTier = ACCESS_CONTROL.getEffectiveTier();
  const session = ACCESS_CONTROL.getSessionData();
  const passcode = session ? session.passcode : (effTier === ACCESS_CONTROL.TIER_MASTER ? 'master2026' : 'vip2026');

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
          <div class="gated-desc">This section contains protected research data, extended architecture specs, and raw metrics.</div>
          <button type="button" class="gated-unlock-btn" onclick="openAccessModal(${requiredTier})">
            <span>Unlock ${requiredTier === ACCESS_CONTROL.TIER_MASTER ? 'Master Access' : 'Higher Tier'}</span> →
          </button>
        `;
        el.appendChild(overlay);
      }
      el.classList.add('gated-content-locked');
      el.classList.remove('gated-content-unlocked');
    } else {
      // UNLOCKED: Decrypt payload in memory using passcode and inject into DOM
      if (!el.querySelector('.gated-inner-body') && payloadId && ACCESS_CONTROL_PAYLOADS[payloadId]) {
        const decryptedHtml = await decryptHexPayload(ACCESS_CONTROL_PAYLOADS[payloadId], passcode);
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

      <div class="access-tier-tabs" id="accessTierTabs">
        <button type="button" class="access-tab-btn active" data-tier="1">
          <span>⭐ Higher Tier (VIP)</span>
        </button>
        <button type="button" class="access-tab-btn" data-tier="2">
          <span>👑 Master Level</span>
        </button>
      </div>

      <div class="access-field-group">
        <label class="access-label" for="accessPassInput">Enter Passcode</label>
        <div class="access-input-wrap">
          <input type="password" id="accessPassInput" class="access-input" placeholder="Enter access passcode…" autocomplete="off" />
          <button type="button" class="access-pass-toggle" id="accessPassToggle" aria-label="Toggle password visibility">
            <svg id="accessEyeIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="access-hint-box" id="accessHintBox">
        <strong>Demo Passcodes:</strong><br />
        Higher Tier (VIP): <code>vip2026</code><br />
        Master Level: <code>master2026</code>
      </div>

      <div class="access-error-msg" id="accessErrorMsg"></div>

      <div class="access-actions">
        <button type="button" class="access-btn-submit" id="accessSubmitBtn">Unlock Access</button>
        <button type="button" class="access-btn-logout" id="accessLogoutBtn" hidden>Lock Session</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const closeBtn = document.getElementById('accessModalClose');
  const submitBtn = document.getElementById('accessSubmitBtn');
  const logoutBtn = document.getElementById('accessLogoutBtn');
  const passInput = document.getElementById('accessPassInput');
  const passToggle = document.getElementById('accessPassToggle');
  const eyeIcon = document.getElementById('accessEyeIcon');
  const tabs = document.querySelectorAll('#accessTierTabs .access-tab-btn');
  const card = document.getElementById('accessModalCard');

  let activeTabTier = 1;

  closeBtn.addEventListener('click', closeAccessModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeAccessModal(); });

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTabTier = parseInt(tab.dataset.tier, 10);
      document.getElementById('accessErrorMsg').classList.remove('visible');
    });
  });

  passToggle.addEventListener('click', () => {
    const isPass = passInput.type === 'password';
    passInput.type = isPass ? 'text' : 'password';
    eyeIcon.style.opacity = isPass ? '1' : '0.6';
  });

  function handleAuthenticate() {
    const val = passInput.value;
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

  logoutBtn.addEventListener('click', () => {
    ACCESS_CONTROL.logout();
    closeAccessModal();
    showToast('Session locked. Reverted to public guest access.');
  });
}

function openAccessModal(defaultTier = 1) {
  renderAccessModal();
  const overlay = document.getElementById('accessModalOverlay');
  const passInput = document.getElementById('accessPassInput');
  const errorMsg = document.getElementById('accessErrorMsg');
  const logoutBtn = document.getElementById('accessLogoutBtn');
  const tabs = document.querySelectorAll('#accessTierTabs .access-tab-btn');

  if (errorMsg) errorMsg.classList.remove('visible');
  if (passInput) passInput.value = '';

  const actTier = ACCESS_CONTROL.getActualTier();
  if (logoutBtn) logoutBtn.hidden = (actTier === ACCESS_CONTROL.TIER_PUBLIC);

  tabs.forEach(t => {
    const tTier = parseInt(t.dataset.tier, 10);
    t.classList.toggle('active', tTier === defaultTier);
  });

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (passInput) passInput.focus();
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
}

function initAccessKeyboardShortcuts() {
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'L' || e.key === 'l')) {
      e.preventDefault();
      openAccessModal();
    }
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'M' || e.key === 'm')) {
      if (ACCESS_CONTROL.getActualTier() === ACCESS_CONTROL.TIER_MASTER) {
        e.preventDefault();
        const popup = document.getElementById('masterCardPopup');
        if (popup) popup.classList.toggle('open');
      }
    }
  });
}

function initAccessControl() {
  renderAccessNavButton();
  updateGatedContentVisibility();
  renderMasterControlPanel();
  initAccessKeyboardShortcuts();
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
    { type: 'page', title: 'Access Control & VIP Login', meta: 'Passcode: vip2026 · Ctrl+Shift+L', href: 'javascript:openAccessModal(1)', text: 'access control login vip higher tier passcode password security' },
    { type: 'page', title: 'Master Dashboard & Admin Login', meta: 'Passcode: master2026 · Ctrl+Shift+L', href: 'javascript:openAccessModal(2)', text: 'master level admin dashboard login passcode password security' }
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

/* ── Keyboard page navigation (1–6) ──────────────────────── */
// 1 → index.html  2 → projects.html  3 → experience.html
// 4 → achievements.html  5 → about.html  6 → contact.html
// 0 → toggle theme
// ` → toggle hero date B.S. / A.D. (index.html only; no-op elsewhere)
// Shift+4 → toggle Academic / Extracurricular track (achievements.html only; no-op elsewhere)
// Alt+4 → expand/collapse all years (achievements.html only; no-op elsewhere)
// Skipped when focus is inside an input, textarea, or select.
function initKeyNav() {
  const PAGE_MAP = {
    '1': 'index.html',
    '2': 'projects.html',
    '3': 'experience.html',
    '4': 'achievements.html',
    '5': 'about.html',
    '6': 'contact.html',
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