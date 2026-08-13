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
  <span class="term-gold">projects</span>     - Key engineering &amp; AI/ML projects<br>
  <span class="term-gold">experience</span>   - Leadership &amp; technical roles<br>
  <span class="term-gold">achievements</span> - Credentials &amp; competition milestones<br>
  <span class="term-gold">contact</span>      - Direct communication channels<br>
  <span class="term-gold">whatsnew</span>     - View v39 major release highlights<br>
  <span class="term-gold">theme</span>        - Toggle site color scheme (Dark / Light)<br>
  <span class="term-gold">accent [name]</span> - Easter egg color themes (gold, emerald, violet, cyan, ruby, prism)<br>
  <span class="term-gold">matrix</span>       - Trigger cybernetic digital rain<br>
  <span class="term-gold">clear</span>        - Clear terminal screen output
`.trim(),
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
        return '<span class="term-green">Opening What\'s New (v38) modal...</span>';
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



