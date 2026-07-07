(function () {
  const lb        = document.getElementById('cert-lightbox');
  const lbBody    = document.getElementById('lb-body');
  const lbLabel   = document.getElementById('lb-label');
  const lbDownload= document.getElementById('lb-download');
  const lbOpen    = document.getElementById('lb-open');
  const lbClose   = document.getElementById('lb-close');
  let lastFocus   = null;

  const timeline = document.querySelector('.achievements-list');
  if (timeline) {
    // debounce helper
    function debounce(fn, wait = 100) {
      let t = null;
      return (...args) => { clearTimeout(t); t = setTimeout(() => fn.apply(this, args), wait); };
    }

    // compute nav height (real rendered height) and write to CSS var --nav-h
    function computeNavHeight() {
      const nav = document.querySelector('#siteNav');
      const h = nav ? Math.ceil(nav.getBoundingClientRect().height) : 0;
      document.documentElement.style.setProperty('--nav-h', h + 'px');
      return h;
    }

    // initial compute and update on resize
    computeNavHeight();
    window.addEventListener('resize', debounce(() => computeNavHeight(), 120));
    const monthMap = {
      jan: 0, january: 0,
      feb: 1, february: 1,
      mar: 2, march: 2,
      apr: 3, april: 3,
      may: 4,
      jun: 5, june: 5,
      jul: 6, july: 6,
      aug: 7, august: 7,
      sep: 8, sept: 8, september: 8,
      oct: 9, october: 9,
      nov: 10, november: 10,
      dec: 11, december: 11
    };

    function parseDateValue(raw) {
      if (!raw) return new Date(0);
      const text = raw.trim();
      if (!text) return new Date(0);

      if (text.includes('·')) {
        const parts = text.split('·').map(part => part.trim()).filter(Boolean);
        const dates = parts.map(parseDateValue).filter(date => !Number.isNaN(date.getTime()));
        if (dates.length) return new Date(Math.max(...dates));
      }

      const yearMatch = text.match(/(\d{4})/);
      const year = yearMatch ? Number(yearMatch[1]) : new Date().getFullYear();
      const monthMatch = text.match(/(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)/i);
      const month = monthMatch ? monthMap[monthMatch[1].toLowerCase()] : 0;
      return new Date(year, month, 1);
    }

    const items = Array.from(timeline.querySelectorAll('.achievement-item'));
    const sortedEntries = items
      .map(item => ({
        item,
        date: parseDateValue(item.dataset.date || item.querySelector('.achievement-date')?.textContent || ''),
        year: parseDateValue(item.dataset.date || item.querySelector('.achievement-date')?.textContent || '').getFullYear()
      }))
      .sort((a, b) => b.date - a.date);

    const yearBuckets = new Map();
    sortedEntries.forEach(entry => {
      const bucket = yearBuckets.get(entry.year) || [];
      bucket.push(entry.item);
      yearBuckets.set(entry.year, bucket);
    });

    timeline.innerHTML = '';
    Array.from(yearBuckets.keys()).sort((a, b) => b - a).forEach((year, index) => {
      const group = document.createElement('details');
      group.className = 'year-group';
      // keep all groups closed by default; user requested initial closed state
      const summary = document.createElement('summary');
      summary.className = 'year-toggle';
      summary.innerHTML = `\n        <span class="year-left">\n          <span class="year-label">${year}</span>\n          <svg class="year-arrow" viewBox="0 0 24 24" fill="none" aria-hidden>\n            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n          </svg>\n        </span>\n        <span class="year-count">${yearBuckets.get(year).length}</span>\n      `;
      group.appendChild(summary);

      const yearItems = document.createElement('div');
      yearItems.className = 'year-items';
      yearBuckets.get(year).forEach(item => yearItems.appendChild(item));
      group.appendChild(yearItems);
      timeline.appendChild(group);
    });

    timeline.querySelectorAll('.achievement-item').forEach(item => {
      const buttons = Array.from(item.querySelectorAll('.cert-btn'));
      if (!buttons.length) return;
      const actions = document.createElement('div');
      actions.className = 'achievement-actions';
      const firstButton = buttons[0];
      if (firstButton.parentNode) {
        firstButton.parentNode.insertBefore(actions, firstButton);
        buttons.forEach(button => actions.appendChild(button));
      }
    });

    // ensure initial scroll position shows the top of the achievements section
    requestAnimationFrame(() => {
      const navHeight = computeNavHeight();
      window.scrollTo({ top: Math.max(0, timeline.getBoundingClientRect().top + window.scrollY - navHeight), behavior: 'instant' });
    });

    timeline.querySelectorAll('.year-group').forEach(group => {
      group.addEventListener('toggle', () => {
        if (!group.open) return;
        timeline.querySelectorAll('.year-group').forEach(other => {
          if (other !== group) other.open = false;
        });
        requestAnimationFrame(() => {
          const navHeight = computeNavHeight();
          // compute the actual visual gap (in pixels) between this group and the previous
          // using bounding boxes — this yields the real rendered distance regardless of rem/px units
          let gap = 0;
          const prev = group.previousElementSibling;
          if (prev) {
            const prevRect = prev.getBoundingClientRect();
            const groupRect = group.getBoundingClientRect();
            gap = Math.max(0, Math.round(groupRect.top - prevRect.bottom));
          } else {
            // no previous sibling: fall back to group's computed margin-top (pixels)
            gap = parseFloat(getComputedStyle(group).marginTop) || 0;
          }

          const summary = group.querySelector('.year-toggle') || group.querySelector('summary');
          // set scrollMarginTop so native scrollIntoView respects the header + visual gap
          if (summary) {
            summary.style.scrollMarginTop = (navHeight + gap) + 'px';
            summary.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            const targetOffset = (group.getBoundingClientRect().top + window.scrollY) - (navHeight + gap);
            window.scrollTo({ top: Math.max(0, Math.floor(targetOffset)), behavior: 'smooth' });
          }
        });
      });
    });
  }

  function openLightbox(src, label, type) {
    lastFocus = document.activeElement;
    lbLabel.textContent = label;
    lbDownload.href = src;
    lbOpen.href = src;
    lbBody.innerHTML = '';

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
    // Clear after transition
    setTimeout(() => { lbBody.innerHTML = ''; }, 230);
    if (lastFocus) lastFocus.focus();
  }

  // Wire all cert buttons
  document.querySelectorAll('.cert-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openLightbox(btn.dataset.cert, btn.dataset.label, btn.dataset.type);
    });
  });

  lbClose.addEventListener('click', closeLightbox);

  // Click backdrop to close
  lb.addEventListener('click', e => {
    if (e.target === lb) closeLightbox();
  });

  // ESC to close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lb.classList.contains('open')) closeLightbox();
  });
})();
