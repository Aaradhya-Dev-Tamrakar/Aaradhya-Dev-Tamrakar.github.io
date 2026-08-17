/* ============================================================
   MODULE: cmdk.js — aaradhya-dev-tamrakar.github.io
   Part of the v42 Performance & Code Quality Architecture.
   ============================================================ */

/* ── Command palette data ─────────────────────────────────── */
const CMDK_PAGES = [
  { title: 'Home', href: '/index.html' },
  { title: 'Projects', href: '/projects.html' },
  { title: 'Experience', href: '/experience.html' },
  { title: 'Achievements', href: '/achievements.html' },
  { title: 'Journey', href: '/journey.html' },
  { title: 'About', href: '/about.html' },
  { title: 'Contact', href: '/contact.html' },
  { title: "Generate Tailored Resume (ATS & PDF)", href: "javascript:openResumeGenerator()" },
  { title: "Interactive Skill Radar Visualizer", href: "javascript:initSkillRadar()" },
  { title: "Guided Site Tour (Shift+T)", href: "javascript:startTour()" },
  { title: "Toggle Audio Micro-Sounds (Shift+A)", href: "javascript:toggleAudioCues()" },
  { title: "What's New (Release History)", href: "javascript:openWhatsNewModal()" },
  { title: "Accent Color: Amber Gold (Default 👑)", href: "javascript:applyAccent('gold')" },
  { title: "Accent Color: Cyber Emerald (⚡)", href: "javascript:applyAccent('emerald')" },
  { title: "Accent Color: Electric Violet (🔮)", href: "javascript:applyAccent('violet')" },
  { title: "Accent Color: Ocean Cyan (🌊)", href: "javascript:applyAccent('cyan')" },
  { title: "Accent Color: Ruby Flame (🔴)", href: "javascript:applyAccent('ruby')" },
  { title: "Accent Color: Midnight Prism (🌌)", href: "javascript:applyAccent('prism')" },
];



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
    playAudioCue('open');
  }

  function closeCmdk() {
    cmdk.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
    playAudioCue('close');
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
      playAudioCue('tick');
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



