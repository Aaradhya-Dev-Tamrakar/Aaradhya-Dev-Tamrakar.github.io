/* ============================================================
   MODULE: terminal.js — aaradhya-dev-tamrakar.github.io
   Part of the v42 Performance & Code Quality Architecture.
   ============================================================ */

/* ── Interactive Dev Terminal Widget (v33) ─────────────────── */
(function initTerminalWidget() {
  function setup() {
    const term = document.getElementById('adtTerminal');
    if (!term) return;

    const body = term.querySelector('.terminal-body');
    const input = term.querySelector('.terminal-input');
    const quickBtns = term.querySelectorAll('.terminal-quick-cmd');
    if (!body || !input) return;

    // Dynamically set terminal welcome banner version from latest SITE_RELEASES
    const welcomeSpan = body.querySelector('.term-green');
    if (welcomeSpan && typeof SITE_RELEASES !== 'undefined' && SITE_RELEASES[0]) {
      welcomeSpan.textContent = `Welcome to Aaradhya Dev Tamrakar's Interactive Developer Terminal (${SITE_RELEASES[0].version}).`;
    }

    const COMMANDS = {
      help: () => `
<span class="term-green">Available Commands:</span><br>
  <span class="term-gold">skills</span>       - Overview of technical skillset &amp; engineering tools<br>
  <span class="term-gold">radar</span>        - Interactive 5-Domain Skill Radar visualizer<br>
  <span class="term-gold">resume</span>       - Open Tailored ATS Resume Generator &amp; PDF Exporter<br>
  <span class="term-gold">projects</span>     - Key engineering &amp; AI/ML projects<br>
  <span class="term-gold">run [name]</span>   - Run interactive simulation ('run spark', 'run gcsbr')<br>
  <span class="term-gold">glossary</span>     - Technical acronym glossary ('glossary spark')<br>
  <span class="term-gold">experience</span>   - Leadership &amp; technical roles<br>
  <span class="term-gold">achievements</span> - Credentials &amp; competition milestones<br>
  <span class="term-gold">contact</span>      - Direct communication channels<br>
  <span class="term-gold">whatsnew</span>     - View latest major release highlights<br>
  <span class="term-gold">healthcheck</span> - Run client-side site diagnostics<br>
  <span class="term-gold">theme</span>        - Toggle site color scheme (Dark / Light)<br>
  <span class="term-gold">accent [name]</span> - Easter egg color themes (gold, emerald, violet, cyan, ruby, prism)<br>
  <span class="term-gold">matrix</span>       - Trigger cybernetic digital rain<br>
  <span class="term-gold">clear</span>        - Clear terminal screen output
`.trim(),
      radar: () => {
        if (typeof initSkillRadar === 'function') initSkillRadar();
        return '<span class="term-green">Interactive Skill Radar rendered.</span>';
      },
      resume: () => {
        if (typeof openResumeGenerator === 'function') openResumeGenerator();
        return '<span class="term-green">Opening Tailored ATS Resume Generator modal...</span>';
      },
      run: (arg) => {
        const sub = (arg || '').toLowerCase().trim();
        if (sub === 'spark') {
          return `
<span class="term-green">[SPARK TELEMETRY SIMULATOR v43]</span><br>
  [00:00:01] Initializing ESP32 I2C bus @ 400kHz... <span class="term-cyan">OK</span><br>
  [00:00:02] Calibrating PPG Optical Pulse Sensor... <span class="term-cyan">STABLE</span><br>
  [00:00:03] Bio-Signal Filter: Bandpass 0.5Hz–5.0Hz... <span class="term-gold">ACTIVE</span><br>
  [00:00:04] Heart Rate BPM: 72 bpm | SpO2: 98% | BLE Status: <span class="term-green">CONNECTED</span>
`.trim();
        } else if (sub === 'gcsbr') {
          return `
<span class="term-green">[GCSBR PID &amp; SENSOR FUSION SIMULATOR v43]</span><br>
  [00:00:01] MPU6050 Accelerometer/Gyro Init... <span class="term-cyan">OK</span><br>
  [00:00:02] Complementary Filter α=0.98, Tilt Angle: +0.12°... <span class="term-cyan">BALANCED</span><br>
  [00:00:03] PID Loop Output: Kp=14.5 Ki=0.8 Kd=1.2 -&gt; Motor PWM: <span class="term-gold">142 / 255</span>
`.trim();
        }
        return `<span class="term-gold">Usage: 'run spark' or 'run gcsbr'</span>`;
      },
      glossary: (arg) => {
        const term = (arg || '').toLowerCase().trim();
        const dict = {
          spark: 'SPARK: Smart Pulse & Activity Recognition Kit — Biomedical wearable monitor.',
          gcsbr: 'GCSBR: Gesture-Controlled Self-Balancing Robot — 2-wheeled inverted pendulum PID robotics system.',
          pcb: 'PCB: Printed Circuit Board — Custom hardware layout designed in KiCAD.',
          adt: 'ADT: Aaradhya Dev Tamrakar — Personal brand identity & engineering portfolio.',
          fpga: 'FPGA: Field-Programmable Gate Array — Hardware logic synthesis.',
          eqtl: 'eQTL: Expression Quantitative Trait Loci — Genetic variant analysis in genomics.'
        };
        if (!term) {
          return `<span class="term-green">▶ Engineering Acronym Glossary:</span><br>` +
            Object.keys(dict).map(k => `  • <span class="term-gold">${k}</span>: ${dict[k]}`).join('<br>') +
            `<br><br>Type <span class="term-cyan">'glossary [term]'</span> for quick lookup.`;
        }
        if (dict[term]) {
          return `<span class="term-green">▶ ${dict[term]}</span>`;
        }
        return `<span class="term-gold">Term '${escapeHtml(term)}' not found. Available terms: ${Object.keys(dict).join(', ')}</span>`;
      },
      skills: () => `
<span class="term-green">▶ Core Technical Skillset:</span><br>
  • <span class="term-cyan">Embedded &amp; Firmware:</span> C, C++, Verilog, ARM Cortex-M, STM32, ESP32, KiCAD<br>
  • <span class="term-cyan">AI / ML &amp; Vision:</span> Python, PyTorch, OpenCV, TensorFlow, Signal Processing<br>
  • <span class="term-cyan">Web Systems:</span> JavaScript (ES6+), HTML5/CSS3, Node.js, WebSockets, REST APIs
`.trim(),
      projects: () => `
<span class="term-green">▶ Featured Projects:</span><br>
  1. <span class="term-gold">PulseLive</span> — Real-Time Acoustic Patient Monitoring System<br>
  2. <span class="term-gold">SPARK</span> — Intelligent Elderly Fall Detection Wearable<br>
  3. <span class="term-gold">GCSBR</span> — Ground Control Station for High-Altitude Rocketry<br>
  4. <span class="term-gold">Autonomous Rover</span> — LiDAR/Ultrasonic Obstacle Avoidance &amp; Sensor Fusion<br>
  5. Type <span class="term-cyan">'2'</span> or navigate to <a href="projects.html" class="term-link">projects.html</a> for all 22 projects!
`.trim(),
      experience: () => `
<span class="term-green">▶ Engineering Leadership &amp; Experience:</span><br>
  • <span class="term-gold">Vice Chair</span> — IEEE KEC Student Branch (2025–2026)<br>
  • <span class="term-gold">Fuse AI Fellow</span> — Fusemachines (2026)<br>
  • <span class="term-gold">NSSR Fellow</span> — DataCamp (Cohort 2)<br>
  • <span class="term-gold">Event Manager</span> — Electronics &amp; Propagation Club (EPC)<br>
  • <span class="term-gold">Ambassador</span> — KEC Makerspace
`.trim(),
      achievements: () => `
<span class="term-green">▶ Achievements &amp; Credentials:</span><br>
  • 37 verified credentials spanning AWS, DataCamp, IEEE, and GNOME<br>
  • Full verification suite: <a href="achievements.html" class="term-link">achievements.html</a>
`.trim(),
      contact: () => `
<span class="term-green">▶ Connect Channels:</span><br>
  • Email:    <a href="mailto:aaradhyadevtmr@gmail.com" class="term-link">aaradhyadevtmr@gmail.com</a><br>
  • GitHub:   <a href="https://github.com/AaradhyaDT" target="_blank" class="term-link">github.com/AaradhyaDT</a><br>
  • LinkedIn: <a href="https://www.linkedin.com/in/aaradhya-dev-tamrakar" target="_blank" class="term-link">linkedin.com/in/aaradhya-dev-tamrakar</a>
`.trim(),
      whatsnew: () => {
        if (typeof openWhatsNewModal === 'function') openWhatsNewModal();
        return '<span class="term-green">Opening What\'s New modal...</span>';
      },
      healthcheck: () => {
        const checks = [];
        // 1. Module loading status
        const expectedModules = ['core.js', 'tour.js', 'cmdk.js', 'ui.js', 'access.js', 'audio.js', 'terminal.js', 'haptics.js'];
        const loadedScripts = Array.from(document.querySelectorAll('script[src*="modules/"]')).map(s => s.src.split('/').pop());
        const missingModules = expectedModules.filter(m => !loadedScripts.includes(m));
        if (missingModules.length === 0) {
          checks.push('<span class="term-green">\u2713</span> Modules: all ' + expectedModules.length + ' loaded');
        } else {
          checks.push('<span class="term-red">\u2717</span> Modules: missing ' + missingModules.join(', '));
        }
        // 2. Service Worker status
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
          checks.push('<span class="term-green">\u2713</span> Service Worker: active');
        } else if ('serviceWorker' in navigator) {
          checks.push('<span class="term-gold">\u25CB</span> Service Worker: registered but no controller');
        } else {
          checks.push('<span class="term-red">\u2717</span> Service Worker: not supported');
        }
        // 3. Cache version
        if (typeof SITE_RELEASES !== 'undefined' && SITE_RELEASES[0]) {
          checks.push('<span class="term-green">\u2713</span> Site version: ' + SITE_RELEASES[0].version + ' (' + SITE_RELEASES[0].date + ')');
        } else {
          checks.push('<span class="term-red">\u2717</span> Site version: SITE_RELEASES not found');
        }
        // 4. Theme/Accent state
        const theme = document.documentElement.getAttribute('data-theme') || 'dark';
        const accent = localStorage.getItem('adt-accent') || 'gold';
        checks.push('<span class="term-green">\u2713</span> Theme: ' + theme + ' / Accent: ' + accent);
        // 5. LocalStorage health
        try {
          const keys = Object.keys(localStorage).filter(k => k.startsWith('adt'));
          checks.push('<span class="term-green">\u2713</span> LocalStorage: ' + keys.length + ' adt-* keys');
        } catch (e) {
          checks.push('<span class="term-red">\u2717</span> LocalStorage: blocked or unavailable');
        }
        // 6. Performance metrics
        if (window.performance && performance.getEntriesByType) {
          const nav = performance.getEntriesByType('navigation')[0];
          if (nav) {
            const domReady = Math.round(nav.domContentLoadedEventEnd - nav.startTime);
            const fullLoad = Math.round(nav.loadEventEnd - nav.startTime);
            checks.push('<span class="term-green">\u2713</span> DOMContentLoaded: ' + domReady + 'ms / Full load: ' + fullLoad + 'ms');
          }
        }
        // 7. Page count via nav links
        const navLinks = document.querySelectorAll('.nav-links a');
        checks.push('<span class="term-green">\u2713</span> Navigation: ' + navLinks.length + ' nav links rendered');
        // 8. Search index
        if (typeof SEARCH_STATIC_INDEX !== 'undefined') {
          const achvCount = (SEARCH_STATIC_INDEX.achievement || []).length;
          const projCount = (SEARCH_STATIC_INDEX.project || []).length;
          checks.push('<span class="term-green">\u2713</span> Search index: ' + achvCount + ' achievements, ' + projCount + ' projects');
        } else {
          checks.push('<span class="term-red">\u2717</span> Search index: SEARCH_STATIC_INDEX not found');
        }
        return '<span class="term-green">[SITE HEALTHCHECK v45]</span><br>' + checks.map(c => '  ' + c).join('<br>');
      },
      sound: () => {
        toggleAudioCues();
        return '<span class="term-green">Audio micro-sounds toggled!</span>';
      },
      audio: () => {
        toggleAudioCues();
        return '<span class="term-green">Audio micro-sounds toggled!</span>';
      },
      tour: () => {
        if (typeof startTour === 'function') startTour();
        return '<span class="term-green">Starting guided site tour...</span>';
      },
      theme: () => {
        if (typeof toggleTheme === 'function') toggleTheme();
        return '<span class="term-green">Color theme toggled!</span>';
      },
      accent: (arg) => {
        const val = (arg || '').toLowerCase().trim();
        const themes = ['gold', 'emerald', 'violet', 'cyan', 'ruby', 'prism'];
        if (!val) {
          const current = localStorage.getItem('adt-accent') || 'gold';
          return `<span class="term-green">▶ Available Accent Themes (Easter Egg):</span><br>` +
            themes.map(t => `  • <span class="term-gold">${t}</span>${t === current ? ' <span class="term-cyan">(active)</span>' : ''}`).join('<br>') +
            `<br><br>Type <span class="term-cyan">'accent [theme]'</span> (e.g. <span class="term-gold">accent emerald</span>, <span class="term-gold">accent violet</span>) to activate!`;
        }
        if (themes.includes(val)) {
          applyAccent(val);
          return `<span class="term-green">Accent color theme updated to: <strong>${val}</strong></span>`;
        }
        return `<span class="term-gold">Unknown accent: '${val}'. Available options: ${themes.join(', ')}</span>`;
      },
      color: (arg) => COMMANDS.accent(arg),
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
      const trimmed = rawCmd.trim();
      if (!trimmed) return;
      triggerHapticFeedback(10);
      const parts = trimmed.split(/\s+/);
      const baseCmd = parts[0].toLowerCase();
      const arg = parts.slice(1).join(' ');

      if (baseCmd === 'clear') {
        COMMANDS.clear();
        return;
      }
      const handler = COMMANDS[baseCmd];
      if (handler) {
        appendOutput(rawCmd, handler(arg));
      } else {
        appendOutput(rawCmd, `<span class="term-red">Command not found: '${escapeHtml(trimmed)}'. Type <span class="term-gold">'help'</span> for a list of available commands.</span>`);
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



