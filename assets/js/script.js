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
    { label: 'Home', labelShort: 'Home', href: 'index.html', key: '1' },
    { label: 'Projects', labelShort: 'Projects', href: 'projects.html', key: '2' },
    { label: 'Experience', labelShort: 'Experience', href: 'experience.html', key: '3' },
    { label: 'Achievements', labelShort: 'Achievements', href: 'achievements.html', key: '4' },
    { label: 'About', labelShort: 'About', href: 'about.html', key: '5' },
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
  { title: 'Home', href: 'index.html' },
  { title: 'Projects', href: 'projects.html' },
  { title: 'Experience', href: 'experience.html' },
  { title: 'Achievements', href: 'achievements.html' },
  { title: 'About', href: 'about.html' },
  { title: 'Contact', href: 'contact.html' },
];

const CMDK_TYPE_LABEL = { page: 'Page', project: 'Project', achievement: 'Achievement' };

const CMDK_ICONS = {
  page: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 22V12h6v10M3 10l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  project: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  achievement: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M9 13.5 6 22l6-3 6 3-3-8.5"/></svg>',
};

// Static snapshot of achievements/projects so search is truly global:
// every page ships the full index, not just whichever type it happens
// to render live in the DOM. Regenerate via extract_index.py after
// editing achievements.html or projects.html. buildSearchIndex() below
// merges this with a live DOM scan, so on-page edits still show up
// immediately in the same session without needing a re-export.
const SEARCH_STATIC_INDEX = {
  achievement: [
  {
    "type": "achievement",
    "title": "DataCamp Statements of Accomplishment (×7)",
    "meta": "DataCamp · May 2026 · Jul 2026",
    "href": "achievements.html#achv-0",
    "text": "datacamp datacamp statements of accomplishment (×7) seven certified courses completed as part of the nssr datacamp fellowship: cleaning data with generative ai, ai-assisted product launch, building a go-to-market strategy, generate a study guide, and recommending skincare products — plus introduction to python and introduction to git, both shown separately above with their own credential ids. may 2026 · jul 2026"
  },
  {
    "type": "achievement",
    "title": "Introduction to Git",
    "meta": "DataCamp · Jul 2026",
    "href": "achievements.html#achv-1",
    "text": "datacamp introduction to git completed on july 6, 2026. credential id cpe0469867571113. earned 1.6 cpe credits. jul 2026"
  },
  {
    "type": "achievement",
    "title": "AI Fluency: Framework & Foundations",
    "meta": "ANTHROPIC · Jul 2026",
    "href": "achievements.html#achv-2",
    "text": "anthropic ai fluency: framework & foundations completed an advanced course on ai frameworks and foundational concepts, covering practical applications of artificial intelligence in modern development. certificate of completion received. jul 2026"
  },
  {
    "type": "achievement",
    "title": "SimOps Certifications",
    "meta": "SimOps · Jul 2026",
    "href": "achievements.html#achv-3",
    "text": "simops simops certifications jul 2026"
  },
  {
    "type": "achievement",
    "title": "IEEE WIE LaTeX Training Program",
    "meta": "IEEE · May 2026",
    "href": "achievements.html#achv-4",
    "text": "ieee ieee wie latex training program two-day latex workshop at kec makerspace, kalimati (may 5–6, 2026). resource person: er. dhawa sang dong. certificate of participation received. may 2026"
  },
  {
    "type": "achievement",
    "title": "Prompt Engineering Fundamentals",
    "meta": "TechAxis · May 2026",
    "href": "achievements.html#achv-5",
    "text": "techaxis prompt engineering fundamentals completed a 2-hour hands-on workshop on prompt engineering fundamentals at techaxis (may 8, 2026). certificate of completion received. may 2026"
  },
  {
    "type": "achievement",
    "title": "IEEE SPAx — Engineer Your Profile",
    "meta": "IEEE · May 2026",
    "href": "achievements.html#achv-6",
    "text": "ieee ieee spax — engineer your profile organizing team member for ieee spax: engineer your profile, held on may 23, 2026 at kathmandu engineering college. recognized for outstanding contribution to planning, coordination, and execution of the event. certificate of organization received. may 2026"
  },
  {
    "type": "achievement",
    "title": "NepaTronix Drone Training Program",
    "meta": "Drone Operator Training · May 2026",
    "href": "achievements.html#achv-7",
    "text": "drone operator training nepatronix drone training program 3-day certified drone training covering flight operations, safety protocols, and basic applications. may 2026"
  },
  {
    "type": "achievement",
    "title": "Introduction to Python",
    "meta": "DataCamp · May 2026",
    "href": "achievements.html#achv-8",
    "text": "datacamp introduction to python completed on may 25, 2026. credential id itp0014139470763. earned 2.6 cpe credits. may 2026"
  },
  {
    "type": "achievement",
    "title": "IEEE Conference Leadership Workshop 2026",
    "meta": "IEEE · 2026",
    "href": "achievements.html#achv-9",
    "text": "ieee ieee conference leadership workshop 2026 workshop covering event management, leadership, and conference organisation skills for ieee student members. 2026"
  },
  {
    "type": "achievement",
    "title": "IEEE Day 2025 — Organizer",
    "meta": "IEEE · Oct 2025",
    "href": "achievements.html#achv-10",
    "text": "ieee ieee day 2025 — organizer recognized for dedication and contribution as an organizer at the ieee day 2025 event (october 9, 2025), organized by ieee kathmandu engineering college student branch. certificate of appreciation received. oct 2025"
  },
  {
    "type": "achievement",
    "title": "IEEEXtreme 19.0",
    "meta": "IEEE · Oct 2025",
    "href": "achievements.html#achv-11",
    "text": "ieee ieeextreme 19.0 participated in the 24-hour global competitive programming marathon hosted by ieee, with over 19,000 participants worldwide. team: shadowxtreme. certificate received. oct 2025"
  },
  {
    "type": "achievement",
    "title": "PreXtreme Competitive Programming Workshop",
    "meta": "IEEE · Jul 2025",
    "href": "achievements.html#achv-12",
    "text": "ieee prextreme competitive programming workshop five-day intensive workshop (july 11–16, 2025) on algorithms and data structures: arrays, stacks, queues, number theory, combinatorics, searching, sorting, recursion, greedy algorithms, bit manipulation, dynamic programming, and graph theory. certificate of completion received. jul 2025"
  },
  {
    "type": "achievement",
    "title": "AWS Fundamentals Workshop",
    "meta": "KEC IT Club · AWS Cloud Club Nepal · Jul 2025",
    "href": "achievements.html#achv-13",
    "text": "kec it club · aws cloud club nepal aws fundamentals workshop hands-on workshop on aws core services and cloud fundamentals, organized by kec i.t. club in collaboration with aws cloud club in nepal (july 19, 2025). certificate of achievement received. jul 2025"
  },
  {
    "type": "achievement",
    "title": "Agile Workshop",
    "meta": "IEEE · Jul 2025",
    "href": "achievements.html#achv-14",
    "text": "ieee agile workshop participated in an agile workshop organized by ieee kec ktm student branch (july 22, 2025). certificate of appreciation received. jul 2025"
  },
  {
    "type": "achievement",
    "title": "PCB Design & Fabrication Workshop",
    "meta": "Nepal Students' Union KEC · KEC Robotics Club · Jul 2025",
    "href": "achievements.html#achv-15",
    "text": "nepal students' union kec · kec robotics club pcb design & fabrication workshop three-day workshop on pcb design and fabrication (july 24–26, 2025), organized by nepal students' union, kathmandu engineering college in collaboration with kec robotics club. certificate of completion received. jul 2025"
  },
  {
    "type": "achievement",
    "title": "Mentor — Electronics For All Workshop",
    "meta": "IEEE · Jul 2025",
    "href": "achievements.html#achv-16",
    "text": "ieee mentor — electronics for all workshop served as a mentor at the electronics for all workshop held at shree kuleshwor secondary school (july 27, 2025). certificate of appreciation received for mentorship contribution. jul 2025"
  },
  {
    "type": "achievement",
    "title": "How Hackers Bypass Security: A Beginner's Guide",
    "meta": "Offenso Hackers Academy · Jul 2025",
    "href": "achievements.html#achv-17",
    "text": "offenso hackers academy how hackers bypass security: a beginner's guide webinar on offensive security fundamentals and common attack bypass techniques. certificate of participation received. jul 2025"
  },
  {
    "type": "achievement",
    "title": "Introduction to Git",
    "meta": "KEC IT Club · 2024",
    "href": "achievements.html#achv-18",
    "text": "kec it club introduction to git completed a foundational training on git concepts, repositories, branching, and basic collaboration workflows. 2024"
  },
  {
    "type": "achievement",
    "title": "Git & GitHub Workshop",
    "meta": "KEC IT Club · 2024",
    "href": "achievements.html#achv-19",
    "text": "kec it club git & github workshop version control fundamentals and collaborative workflow practices. 2024"
  },
  {
    "type": "achievement",
    "title": "HTML & CSS Workshop — Design, Code & Launch via GitHub Pages",
    "meta": "Microsoft Learn Student Ambassador · 2024",
    "href": "achievements.html#achv-20",
    "text": "microsoft learn student ambassador html & css workshop — design, code & launch via github pages completed a workshop on designing, coding, and deploying a website using github pages, conducted by microsoft learn student ambassador in association with dynamic public library (dpl) teens. certificate of completion received. 2024"
  },
  {
    "type": "achievement",
    "title": "JavaScript Bootcamp",
    "meta": "KEC IT Club · 2023",
    "href": "achievements.html#achv-21",
    "text": "kec it club javascript bootcamp participated in an introductory javascript bootcamp focused on core programming concepts and web development fundamentals. 2023"
  }
],
  project: [
  {
    "type": "project",
    "title": "Gesture-Controlled Self-Balancing Robot",
    "meta": "Arduino, HC-05, MPU-6050",
    "href": "projects.html#p-001",
    "text": "gesture-controlled self-balancing robot two-wheeled inverted pendulum robot controlled via real-time hand gesture recognition. dual-hand mediapipe control over hc-05 bluetooth, pid firmware v6.9.1 (watchdog timer, atomic writes, differential ramp, integrator bleed), matlab simulation → drv8825/cnc shield deployment. examiner described it as major project level — rated 9.4/10. arduino hc-05 mpu-6050 nema-17 mediapipe pid matlab"
  },
  {
    "type": "project",
    "title": "Text-to-SQL Agentic Pipeline",
    "meta": "Python, FastAPI, Streamlit",
    "href": "projects.html#proj-1",
    "text": "text-to-sql agentic pipeline production-grade five-stage agentic text-to-sql system over a classicmodels postgresql database. modular fastapi state machine: planner → generator → validator → executor → summarizer with up to 3 self-correction retries. achieved 100% execution success rate and 100% result accuracy across a 50-question benchmark — zero retries required. streamlit chat ui, docker/compose containerisation, rule-based sql safety validation, structured json audit logging. python fastapi streamlit gpt-4o-mini postgresql docker prompt chaining"
  },
  {
    "type": "project",
    "title": "Telco Churn Tree-Based Ensemble Pipeline",
    "meta": "Python, XGBoost, Random Forest",
    "href": "projects.html#proj-2",
    "text": "telco churn tree-based ensemble pipeline end-to-end classification pipeline on telco customer churn (7,043 rows, ~27% positive rate). imbpipeline with smote restricted to training folds only — zero preprocessing leakage. random forest + xgboost with gridsearch/bayesian tuning, stratified k-fold cv. shap global summary and local waterfall/force plots for explainability. full joblib pipeline serialisation. secondary task: tenure prediction with learning curves. model card with real metric values. python xgboost random forest shap imbpipeline smote joblib scikit-learn"
  },
  {
    "type": "project",
    "title": "Telco Churn & CLV ML Pipeline",
    "meta": "Python, scikit-learn, Logistic Regression",
    "href": "projects.html#proj-3",
    "text": "telco churn & clv ml pipeline classification and regression pipeline for churn prediction and customer lifetime value modeling. logistic regression / ridge / sgd classifiers benchmarked on stratified 70/15/15 split. custom threshold at 0.385 isolates top-200 high-risk budget segment. stratified 5-fold cv: roc-auc 0.841 ± 0.005. ridge regression best for clv (mean $1,304.70); lasso l1 regularisation paths plotted. papermill automation with full html report export. python scikit-learn logistic regression ridge lasso pandas papermill"
  },
  {
    "type": "project",
    "title": "Alpha Android Super-App",
    "meta": "In Progress · Kotlin, Jetpack Compose, Material3",
    "href": "projects.html#proj-4",
    "text": "alpha android super-app modular personal super-app (sdk 36, kotlin/jetpack compose, material3, custom astronomus font). sbr remote turns the phone into a gesture controller over bluetooth. budget tracker parses esewa gmail transactions with apache poi export and datastore persistence. multi-mode calculator covers std/prog/logic modes including base conversion and logic gates. primary shipping target — play store release in progress. kotlin jetpack compose material3 camerax mediapipe bluetooth spp datastore apache poi in progress"
  },
  {
    "type": "project",
    "title": "Edge AI Stability Detection System",
    "meta": "Python, scikit-learn, RandomForest",
    "href": "projects.html#proj-5",
    "text": "edge ai stability detection system ml system predicting platform stability from simulated imu sensor data (tilt_x, tilt_y, angular velocity). 10,000-sample synthetic dataset; random forest classifier — 99.8% test accuracy. rest api via fastapi for real-time predictions; joblib export for robotics integration with gcsbr (gesture-controlled self-balancing robot). python scikit-learn randomforest fastapi joblib imu edge ai"
  },
  {
    "type": "project",
    "title": "SysOptimizer — Windows Optimization Tool",
    "meta": "Python, CustomTkinter, PyInstaller",
    "href": "projects.html#proj-6",
    "text": "sysoptimizer — windows optimization tool standalone windows optimization tool packaged as a .exe via pyinstaller. animated ring gauges, sparklines, per-core cpu reporting, power plan switcher, ram flush, background bloat panel (14 services/tasks), and startup scanner — all running silently via create_no_window. python customtkinter pyinstaller wmi powershell"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 6 — Probabilistic Models",
    "meta": "Python, PyMC, ArviZ",
    "href": "projects.html#proj-7",
    "text": "fusemachines wk 6 — probabilistic models bayesian inference pipeline for telco churn using pymc, arviz, and pgmpy. covers mle/map estimation, dirichlet-multinomial sequential updating, multivariate gaussian conditioning, probabilistic graphical models, gaussian process regression, and pymc bayesian logistic regression. fitted artifact: telco_bayes_lr_v1.pkl. python pymc arviz pgmpy bayesian inference scikit-learn pandas"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 7 — Customer Segmentation",
    "meta": "Python, scikit-learn, K-Means",
    "href": "projects.html#proj-8",
    "text": "fusemachines wk 7 — customer segmentation market segmentation pipeline on uci online retail ii (~500,000 transactions). rfm feature engineering extended with basket size, purchase cadence, unique products, return rate, and category spend ratios. full clustering comparison: k-means (elbow + silhouette), hierarchical (dendrograms), dbscan (k-distance ε estimation). validation via silhouette, davies-bouldin, and calinski-harabasz indices. deliverable: cluster business narratives + executive summary. python scikit-learn k-means hierarchical clustering dbscan rfm pandas scipy"
  },
  {
    "type": "project",
    "title": "PrakopNet — Multi-Hazard Early Warning System",
    "meta": "Archived · ESP32, RYLR890 LoRa 868 MHz, Raspberry Pi 4B",
    "href": "projects.html#proj-9",
    "text": "prakopnet — multi-hazard early warning system solar-powered lora mesh multi-hazard monitoring and early-warning platform designed for remote regions of nepal. esp32 sensor nodes (flood, landslide, air quality, weather) would transmit over rylr890 (868 mhz, nepal-legal) to a raspberry pi 4b gateway running federated tflite edge inference + lstm hazardscore fusion. gps localization, cn3791 solar charge controller, 18650 battery backup, ina219 power telemetry, fastapi + streamlit dashboard. explored as an early bei major-project direction; archived june 29, 2026 after rylr890's import-only sourcing conflicted with the department's no-import policy. superseded by spark. esp32 rylr890 lora 868 mhz raspberry pi 4b tflite micro lstm gps fastapi edge ai archived"
  },
  {
    "type": "project",
    "title": "Nexus — Personal AI Operating System",
    "meta": "In Progress · React, Vite, FastAPI",
    "href": "projects.html#proj-10",
    "text": "nexus — personal ai operating system project-centric ai operating system replacing the multi-browser/multi-account/multi-tool workflow. single prompt → project context → parallel groq (llama 3.3 70b) + gemini 1.5 flash fan-out → centralized persistent memory. architecture: react (vite) frontend · fastapi backend · sqlite + fts5 (context injection, zero embedding latency) · multi-key rotation pool. v2 redesign complete june 12, 2026. react vite fastapi sqlite fts5 groq gemini python in progress"
  },
  {
    "type": "project",
    "title": "Custom Processor FSM Design",
    "meta": "VHDL, Vivado, FSM",
    "href": "projects.html#proj-11",
    "text": "custom processor fsm design vhdl implementation of a custom processor datapath and fsm supporting gcd and exponentiation operations. simulated and verified in vivado 2023.2 as embedded systems coursework. vhdl vivado fsm datapath fpga"
  },
  {
    "type": "project",
    "title": "Antenna Lab Data Analysis",
    "meta": "Python, Pandas, NumPy",
    "href": "projects.html#proj-12",
    "text": "antenna lab data analysis python data-analysis pipeline for antenna radiation pattern measurements exported from lab excel sheets. pandas for wrangling, scipy cubic interpolation to smooth measured points, and matplotlib polar plots to visualize the resulting radiation pattern. communication & rf coursework deliverable. python pandas numpy scipy matplotlib polar plot"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 8 — Forecasting",
    "meta": "Python, statsmodels, SARIMA",
    "href": "projects.html#proj-13",
    "text": "fusemachines wk 8 — forecasting time-series forecasting pipeline benchmarking nine classical-to-modern forecasters on monthly s&p 500 data (1990–2024). sarima, holt-winters, prophet, lightgbm, lstm, and xgboost compared against naive/seasonal-naive baselines via mase/rmse, with error breakdowns by calendar month and horizon. a 4-model ensemble (holt-winters + sarima + lstm + xgboost) outperformed every single model — mase 2.44, rmse 96.7 — confirmed via diebold-mariano significance test (p = 0.0092). python statsmodels sarima holt-winters prophet lightgbm lstm xgboost"
  },
  {
    "type": "project",
    "title": "SPARK — Two-Layer Fall Detection Wearable",
    "meta": "In Progress · MPU6050, TFLite Micro, 1D CNN",
    "href": "projects.html#proj-14",
    "text": "spark — two-layer fall detection wearable on-device, two-layer fall-detection wearable for eldercare, built entirely from locally-sourced components — zero imports, zero custom pcb. a sub-5ms threshold gate (layer 1) hands off to a tflite micro cnn on a raspberry pi 4b gateway (layer 2) for shap-explained confirmation — streamlit dashboard, telegram alerts, fall-to-alert under 2 seconds. bei major project, four-person team, proposal defended jul 10, 2026. mpu6050 tflite micro 1d cnn raspberry pi 4b shap fastapi streamlit telegram in progress"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 9 — NEU Steel Defect CNN",
    "meta": "Python, PyTorch, torchvision",
    "href": "projects.html#proj-15",
    "text": "fusemachines wk 9 — neu steel defect cnn pytorch cnn classifier for neu-det steel surface-defect detection — six classes (crazing, inclusion, patches, pitted surface, rolled-in scale, scratches) across 1,800 grayscale 200×200 images. four-part build: from-scratch 2-layer nn foundation (30.7m params) → conv→relu→maxpool cnn (15 epochs, 98.6%/84.7% train/val accuracy) → hardening via train-only augmentation, batchnorm2d, and dropout(0.4) → tuning via 2×2 grid search and a 4-trial optuna bayesian search. trained and executed on a colab t4 gpu runtime. python pytorch torchvision cnn optuna scikit-learn"
  },
  {
    "type": "project",
    "title": "Fusemachines Wk 10 — Image Processing",
    "meta": "Python, OpenCV, NumPy",
    "href": "projects.html#proj-16",
    "text": "fusemachines wk 10 — image processing classical computer-vision pipeline across four parts: hsv-based multi-class fruit segmentation (red apple, green apple, banana, strawberry, orange, lime) via the fruits-360 dataset; morphological operations with gaussian, median, and bilateral denoising; a from-scratch canny edge detector (sobel gradients, non-max suppression, double thresholding, hysteresis) benchmarked against cv2.canny(); and a full fruit-detection pipeline combining harris corner response, hough circle detection, masking, morphology, and contour-based bounding boxes — extended with connected-component analysis to separate touching apples. python opencv numpy matplotlib hsv segmentation canny edge detection hough transform"
  }
],
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
    .join('') + `<a href="contact.html" class="nav-cta">Connect</a>`;
  el.innerHTML = `
    <nav id="nav" aria-label="Primary navigation">
      <a href="index.html" class="nav-logo" id="nav-logo">ADT<span>.</span></a>
      <ul class="nav-links" id="nav-links">
        ${navLinks}
      </ul>
      <div class="nav-right">
        <a href="contact.html" class="nav-cta" aria-label="Connect with Aaradhya">Connect</a>
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
    </div>`;
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

  window.addEventListener('scroll', () => {
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
  }, { passive: true });

  if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key !== '+' && e.key !== '-') return;
    const tag = (document.activeElement || {}).tagName || '';
    if (/^(INPUT|TEXTAREA|SELECT)$/i.test(tag) || document.activeElement?.isContentEditable) return;
    e.preventDefault();
    if (e.key === '+') {
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


/* ── Boot ─────────────────────────────────────────────────── */
(function init() {
  initTheme();        // must run first — sets data-theme before paint
  computeLiveDates(); // compute before any page script reads LIVE
  renderSiteNav();
  setActiveNav();
  initThemeToggle();
  initKeyNav();
  initStatusDate();
  initHamburger();
  initScroll();
  initReveal();
  initCursor();
  initLightbox();
  initGlobalSearch();
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
    const desc = el.querySelector('.project-desc')?.textContent.trim() || '';
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
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    if (e.key === '0') {
      toggleTheme();
      return;
    }

    if (e.key === '`' || e.code === 'Backquote') {
      toggleStatusDate();
      return;
    }

    if (!PAGE_MAP[e.key]) return;
    window.location.href = PAGE_MAP[e.key];
  });
}