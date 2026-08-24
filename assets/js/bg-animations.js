/* ============================================================
   BACKGROUND ANIMATIONS — SignalWaveBackground & PCBTraces
   Loaded on index.html with defer; paused when offscreen / hidden.
   ============================================================ */

class SignalWaveBackground {
  constructor() {
    this.canvas = document.getElementById("bg-canvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.t = 0;
    this._resizeTimer = null;
    this.isVis = true;
    this.isObs = true;
    this.animating = false;
    this.waveDefs = [
      { y: .18, amp: 28, freq: .008, speed: .003, phase: 0, useAccent2: false },
      { y: .38, amp: 18, freq: .012, speed: .0022, phase: Math.PI, useAccent2: true },
      { y: .57, amp: 32, freq: .007, speed: .0018, phase: Math.PI / 2, useAccent2: false },
      { y: .75, amp: 14, freq: .015, speed: .0028, phase: Math.PI * 1.4, useAccent2: true },
      { y: .92, amp: 22, freq: .01, speed: .002, phase: Math.PI * 0.7, useAccent2: false },
    ];
    this.resize();
    this.initObserver();
    this.start();
    window.addEventListener("resize", () => {
      clearTimeout(this._resizeTimer);
      this._resizeTimer = setTimeout(() => this.resize(), 120);
    }, { passive: true });
  }
  initObserver() {
    document.addEventListener("visibilitychange", () => {
      this.isVis = !document.hidden;
      if (this.isVis && this.isObs) this.start();
    });
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(([e]) => {
        this.isObs = e.isIntersecting;
        if (this.isVis && this.isObs) this.start();
      });
      obs.observe(this.canvas);
    }
  }
  start() {
    if (!this.animating && this.isVis && this.isObs) {
      this.animating = true;
      this.animate();
    }
  }
  resize() {
    this.W = this.canvas.width = window.innerWidth;
    this.H = this.canvas.height = window.innerHeight;
  }
  animate() {
    if (!this.isVis || !this.isObs) {
      this.animating = false;
      return;
    }
    const { W, H, ctx } = this;
    ctx.clearRect(0, 0, W, H);
    this.t += 1;
    const isDark = document.documentElement.getAttribute("data-theme") !== "light";
    const rgb1 = isDark ? "212,168,90" : "180,100,0";
    const rgb2 = isDark ? "109,191,170" : "0,130,100";
    const alpha1 = isDark ? .22 : .28;
    const alpha2 = isDark ? .18 : .22;
    for (const w of this.waveDefs) {
      const baseY = w.y * H;
      const rgb = w.useAccent2 ? rgb2 : rgb1;
      const alphaP = w.useAccent2 ? alpha2 : alpha1;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        const y = baseY + Math.sin(x * w.freq + this.t * w.speed + w.phase) * w.amp;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      const grad = ctx.createLinearGradient(0, 0, W, 0);
      grad.addColorStop(0, `rgba(${rgb},0)`);
      grad.addColorStop(.06, `rgba(${rgb},${alphaP})`);
      grad.addColorStop(.94, `rgba(${rgb},${alphaP})`);
      grad.addColorStop(1, `rgba(${rgb},0)`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = isDark ? .8 : 1.2;
      ctx.stroke();
      const nodeX = ((this.t * w.speed * 140 + w.phase * 60) % (W + 80)) - 40;
      const nodeY = baseY + Math.sin(nodeX * w.freq + this.t * w.speed + w.phase) * w.amp;
      const nodeG = ctx.createRadialGradient(nodeX, nodeY, 0, nodeX, nodeY, 10);
      nodeG.addColorStop(0, `rgba(${rgb},0.75)`);
      nodeG.addColorStop(.3, `rgba(${rgb},0.3)`);
      nodeG.addColorStop(1, `rgba(${rgb},0)`);
      ctx.beginPath();
      ctx.arc(nodeX, nodeY, 10, 0, Math.PI * 2);
      ctx.fillStyle = nodeG;
      ctx.fill();
    }
    requestAnimationFrame(() => this.animate());
  }
}

class PCBTraces {
  constructor() {
    this.canvas = document.getElementById("pcb-canvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.t = 0;
    this._resizeTimer = null;
    this.traces = [];
    this.isVis = true;
    this.isObs = true;
    this.animating = false;
    this.resize();
    this.initObserver();
    this.start();
    window.addEventListener("resize", () => {
      clearTimeout(this._resizeTimer);
      this._resizeTimer = setTimeout(() => { this.resize(); this.buildTraces(); }, 150);
    }, { passive: true });
  }
  initObserver() {
    document.addEventListener("visibilitychange", () => {
      this.isVis = !document.hidden;
      if (this.isVis && this.isObs) this.start();
    });
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(([e]) => {
        this.isObs = e.isIntersecting;
        if (this.isVis && this.isObs) this.start();
      });
      obs.observe(this.canvas);
    }
  }
  start() {
    if (!this.animating && this.isVis && this.isObs) {
      this.animating = true;
      this.animate();
    }
  }
  resize() {
    this.W = this.canvas.width = window.innerWidth;
    this.H = this.canvas.height = window.innerHeight;
    this.buildTraces();
  }
  buildTraces() {
    const W = this.W, H = this.H;
    const M = Math.min(W, H) * .28;
    const S = Math.min(W, H) * .1;
    const corners = [
      { ox: 0, oy: 0, sx: 1, sy: 1 },
      { ox: W, oy: 0, sx: -1, sy: 1 },
      { ox: 0, oy: H, sx: 1, sy: -1 },
      { ox: W, oy: H, sx: -1, sy: -1 },
    ];
    this.traces = [];
    const patterns = [
      [[0, 1], [2, 1], [2, 2], [4, 2], [4, 3], [6, 3]],
      [[1, 0], [1, 2], [3, 2], [3, 1], [5, 1], [5, 3]],
      [[0, 1], [1, 1], [1, 2], [3, 2], [3, 3], [5, 3], [5, 2]],
      [[2, 0], [2, 1], [3, 1], [3, 3], [4, 3], [4, 2], [6, 2]],
      [[0, 2], [2, 2], [2, 1], [4, 1], [4, 3], [5, 3]],
      [[1, 0], [1, 1], [2, 1], [2, 3], [4, 3], [4, 1], [6, 1]],
    ];
    corners.forEach((c, ci) => {
      for (let pi = 0; pi < 3; pi++) {
        const pat = patterns[(ci * 3 + pi) % patterns.length];
        const offX = (pi - 1) * S * .45;
        const offY = (pi - 1) * S * .35;
        const pts = [[c.ox + c.sx * S * .5 + offX, c.oy + c.sy * S * .5 + offY]];
        let cx2 = pts[0][0], cy2 = pts[0][1];
        for (const [ddx, ddy] of pat) {
          cx2 += c.sx * ddx * S * .9;
          cy2 += c.sy * ddy * S * .9;
          pts.push([cx2, cy2]);
        }
        const maxX = Math.min(W * .3, M * 1.2);
        const maxY = Math.min(H * .3, M * 1.2);
        const valid = pts.every(([px, py]) =>
          (c.sx > 0 ? px < c.ox + maxX : px > c.ox - maxX) &&
          (c.sy > 0 ? py < c.oy + maxY : py > c.oy - maxY)
        );
        if (!valid) continue;
        const segs = [];
        let total = 0;
        for (let i = 1; i < pts.length; i++) {
          const dx = pts[i][0] - pts[i - 1][0], dy = pts[i][1] - pts[i - 1][1];
          const len = Math.sqrt(dx * dx + dy * dy);
          segs.push({ from: pts[i - 1], to: pts[i], len, start: total });
          total += len;
        }
        this.traces.push({
          pts, segs, total,
          phase: ((ci * 7 + pi * 3.7) * .41) % 1,
          speed: .00025 + pi * .00008,
          accent2: (ci + pi) % 3 === 0,
        });
      }
    });
  }
  animate() {
    if (!this.isVis || !this.isObs) {
      this.animating = false;
      return;
    }
    const { W, H, ctx } = this;
    ctx.clearRect(0, 0, W, H);
    this.t += 1;
    const isDark = document.documentElement.getAttribute("data-theme") !== "light";
    const col1 = isDark ? "rgba(212,168,90," : "rgba(180,100,0,";
    const col2 = isDark ? "rgba(109,191,170," : "rgba(0,130,100,";
    const lineAlpha = isDark ? .13 : .16;
    const dotAlpha = isDark ? .85 : .9;
    const glowAlpha = isDark ? .22 : .28;
    for (const tr of this.traces) {
      const col = tr.accent2 ? col2 : col1;
      ctx.beginPath();
      ctx.moveTo(tr.pts[0][0], tr.pts[0][1]);
      for (let i = 1; i < tr.pts.length; i++) ctx.lineTo(tr.pts[i][0], tr.pts[i][1]);
      ctx.strokeStyle = col + lineAlpha + ")";
      ctx.lineWidth = 1.2; ctx.lineCap = "square"; ctx.lineJoin = "miter";
      ctx.stroke();
      for (let i = 1; i < tr.pts.length - 1; i++) {
        ctx.beginPath();
        ctx.arc(tr.pts[i][0], tr.pts[i][1], 2, 0, Math.PI * 2);
        ctx.fillStyle = col + (lineAlpha * 1.6) + ")";
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(tr.pts[0][0], tr.pts[0][1], 3, 0, Math.PI * 2);
      ctx.strokeStyle = col + (lineAlpha * 2) + ")";
      ctx.lineWidth = 1;
      ctx.stroke();
      const travelPos = ((this.t * tr.speed + tr.phase) % 1) * tr.total;
      for (const seg of tr.segs) {
        if (travelPos < seg.start || travelPos > seg.start + seg.len) continue;
        const t2 = (travelPos - seg.start) / seg.len;
        const dx = seg.to[0] - seg.from[0], dy = seg.to[1] - seg.from[1];
        const px = seg.from[0] + dx * t2, py = seg.from[1] + dy * t2;
        const g = ctx.createRadialGradient(px, py, 0, px, py, 10);
        g.addColorStop(0, col + dotAlpha + ")");
        g.addColorStop(.3, col + glowAlpha + ")");
        g.addColorStop(1, col + "0)");
        ctx.beginPath(); ctx.arc(px, py, 10, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill();
        ctx.beginPath(); ctx.arc(px, py, 1.8, 0, Math.PI * 2); ctx.fillStyle = col + dotAlpha + ")"; ctx.fill();
        break;
      }
    }
    requestAnimationFrame(() => this.animate());
  }
}

function initBackgroundAnimations() {
  new SignalWaveBackground();
  new PCBTraces();
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(() => initBackgroundAnimations(), { timeout: 1500 });
  } else {
    window.addEventListener('load', () => setTimeout(initBackgroundAnimations, 200));
  }
}
