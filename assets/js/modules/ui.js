/* ============================================================
   MODULE: ui.js — aaradhya-dev-tamrakar.github.io
   Part of the v42 Performance & Code Quality Architecture.
   ============================================================ */

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
  playAudioCue('open');
}

function closeWhatsNewModal() {
  const modal = document.getElementById('whatsNewModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  playAudioCue('close');
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
      const spring = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress) * Math.cos((progress * 10 - 0.75) * ((2 * Math.PI) / 3));
      const current = Math.min(targetVal, Math.floor(spring * targetVal));

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
    'Exploring robotics, wireless mesh networks, and IoT telemetry.',
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



/* ── Reading Time & Word Count Metrics (v38) ──────────────── */
function initReadingMetrics() {
  const main = document.getElementById('main-content');
  const header = document.getElementById('page-header') || document.querySelector('.hero-header');
  if (!main || !header || header.querySelector('.reading-time-badge')) return;

  const page = location.pathname.split('/').pop() || 'index.html';
  if (!['about.html', 'journey.html', 'experience.html', 'achievements.html', 'projects.html'].includes(page)) return;

  const textNodes = main.querySelectorAll('p, li, .achievement-desc, .project-desc, .journey-desc');
  let fullText = '';
  textNodes.forEach(node => { fullText += ' ' + node.textContent; });

  const words = fullText.trim().split(/\s+/).filter(w => w.length > 0);
  const wordCount = words.length;
  if (wordCount < 50) return;

  const readMins = Math.max(1, Math.ceil(wordCount / 200));

  const badge = document.createElement('div');
  badge.className = 'reading-time-badge';
  badge.setAttribute('aria-label', `Estimated reading time: ${readMins} minute${readMins > 1 ? 's' : ''}`);
  badge.innerHTML = `
    <span class="reading-time-badge-icon">⏱️</span>
    <span>${readMins} min read</span>
    <span style="opacity:0.4;">·</span>
    <span style="opacity:0.75;">${wordCount.toLocaleString()} words</span>
  `;
  header.appendChild(badge);
}



/* ── Live Result Count & Filter Indicators (v38) ───────────── */
function initFilterCountIndicators() {
  const page = location.pathname.split('/').pop() || 'index.html';

  if (page === 'projects.html') {
    const header = document.getElementById('page-header');
    const grid = document.getElementById('projectsGrid');
    if (!header || !grid) return;

    let badge = header.querySelector('.filter-count-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'filter-count-badge';
      const title = header.querySelector('.page-title') || header;
      title.appendChild(badge);
    }

    function updateProjectCount() {
      const cards = grid.querySelectorAll('.project-card');
      const visible = Array.from(cards).filter(c => getComputedStyle(c).display !== 'none');
      badge.textContent = `${visible.length} of ${cards.length} projects`;
    }

    const observer = new MutationObserver(updateProjectCount);
    observer.observe(grid, { attributes: true, subtree: true, attributeFilter: ['style', 'class'] });
    updateProjectCount();

  } else if (page === 'achievements.html') {
    const legend = document.querySelector('.achv-legends') || document.getElementById('page-header');
    const list = document.getElementById('achievementsList');
    if (!legend || !list) return;

    let badge = legend.querySelector('.filter-count-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'filter-count-badge';
      legend.appendChild(badge);
    }

    function updateAchvCount() {
      const items = list.querySelectorAll('.achievement-item');
      const visible = Array.from(items).filter(item => getComputedStyle(item).display !== 'none');
      badge.textContent = `${visible.length} of ${items.length} achievements`;
    }

    const observer = new MutationObserver(updateAchvCount);
    observer.observe(list, { attributes: true, subtree: true, attributeFilter: ['style', 'class'] });
    updateAchvCount();
  }
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
    playAudioCue('open');
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
    playAudioCue('close');
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

    if (e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      toggleAudioCues();
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



/* ── Universal Master Escape Key Listener ────────────────────
   Guarantees that pressing the Escape key closes ANY overlay,
   modal, popup, drawer, lightbox, tour step, open details card,
   or active input focus anywhere across the site. */
(function initMasterEscapeHandler() {
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;

    // 0. Tour Prompt Banner
    const tourPrompt = document.getElementById('tourPromptBanner');
    if (tourPrompt && tourPrompt.classList.contains('open')) {
      tourPrompt.classList.remove('open');
      setTimeout(() => tourPrompt.remove(), 400);
      return;
    }

    // 1. Guided Site Tour
    const tourOverlay = document.getElementById('tourOverlay');
    if (tourOverlay && tourOverlay.classList.contains('open')) {
      if (typeof exitTour === 'function') exitTour();
      return;
    }

    // 2. Certificate / CV Lightbox
    const certLb = document.getElementById('cert-lightbox') || document.getElementById('certLightbox');
    if (certLb && certLb.classList.contains('open')) {
      if (typeof closeLightbox === 'function') closeLightbox();
      return;
    }

    // 3. Global Search Palette (CMDK)
    const cmdk = document.getElementById('cmdk');
    if (cmdk && cmdk.classList.contains('open')) {
      if (typeof closeCmdk === 'function') closeCmdk();
      return;
    }

    // 4. What's New Modal
    const wnModal = document.getElementById('whatsNewModal');
    if (wnModal && wnModal.classList.contains('open')) {
      if (typeof closeWhatsNewModal === 'function') closeWhatsNewModal();
      return;
    }

    // 5. Access Control / VIP Modal
    const accessOverlay = document.getElementById('accessModalOverlay');
    if (accessOverlay && accessOverlay.classList.contains('open')) {
      if (typeof closeAccessModal === 'function') closeAccessModal();
      return;
    }

    // 6. Logout Confirmation Modal
    const logoutOverlay = document.getElementById('logoutModalOverlay');
    if (logoutOverlay && (logoutOverlay.classList.contains('open') || logoutOverlay.classList.contains('visible'))) {
      if (typeof closeLogoutModal === 'function') closeLogoutModal();
      else logoutOverlay.remove();
      return;
    }

    // 7. Mobile Navigation Drawer
    const drawer = document.getElementById('navDrawer');
    const backdrop = document.getElementById('navDrawerBackdrop');
    const hamburger = document.getElementById('navHamburger');
    if (drawer && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      if (backdrop) backdrop.classList.remove('open');
      if (hamburger) {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');
      }
      document.body.style.overflow = '';
      return;
    }

    // 8. Open <details> cards (close active/focused or open details elements)
    const active = document.activeElement;
    if (active && active.closest('details[open]')) {
      active.closest('details[open]').removeAttribute('open');
      return;
    }
    const openDetails = document.querySelectorAll('details[open]');
    if (openDetails.length > 0) {
      openDetails[openDetails.length - 1].removeAttribute('open');
      return;
    }

    // 9. Interactive Dev Terminal (blur input focus)
    if (active && active.closest('#adtTerminal')) {
      active.blur();
      return;
    }
  }, true);
})();

