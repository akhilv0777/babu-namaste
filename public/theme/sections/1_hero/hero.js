/* ── FIXED HERO SCROLL-OVER ANIMATION (optional GSAP polish) ── */
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".hero-section", {
    opacity: 0.35,
    scale: 0.92,
    filter: "blur(2px)",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-spacer",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

/* ── STARS ── */
const canvas = $("#starsCanvas")[0];
const ctx = canvas.getContext("2d");
let W,
  H,
  stars = [];

function resizeCanvas() {
  W = canvas.width = $(window).width();
  H = canvas.height = $(window).height();
}
$(window).on("resize", () => {
  resizeCanvas();
  buildStars();
});
resizeCanvas();

function buildStars() {
  stars = [];
  const count = Math.floor((W * H) / 2800);
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * W,
      y: Math.random() * H * 0.72,
      r: Math.random() * 1.4 + 0.2,
      a: Math.random(),
      da: (Math.random() * 0.4 + 0.15) * (Math.random() < 0.5 ? 1 : -1),
      color: Math.random() < 0.15 ? "#ffe4a0" : "#d0f0ff",
    });
  }
}
buildStars();

let lastT = 0;
function animateStars(t) {
  const dt = (t - lastT) / 1000;
  lastT = t;
  ctx.clearRect(0, 0, W, H);
  $.each(stars, (_, s) => {
    s.a += s.da * dt;
    if (s.a > 1) {
      s.a = 1;
      s.da = -Math.abs(s.da);
    }
    if (s.a < 0.05) {
      s.a = 0.05;
      s.da = Math.abs(s.da);
    }
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = s.color;
    ctx.globalAlpha = s.a;
    ctx.fill();
    if (s.r > 1.1) {
      ctx.globalAlpha = s.a * 0.25;
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(s.x - s.r * 3, s.y);
      ctx.lineTo(s.x + s.r * 3, s.y);
      ctx.moveTo(s.x, s.y - s.r * 3);
      ctx.lineTo(s.x, s.y + s.r * 3);
      ctx.stroke();
    }
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(animateStars);
}
requestAnimationFrame(animateStars);

/* ── FIREFLIES ── */
const $ffLayer = $("#firefliesLayer");
const FF_COUNT = 38;
const colors = ["#b8ffb0", "#aaffe0", "#feffc8", "#c0ffee", "#90ffcc"];
for (let i = 0; i < FF_COUNT; i++) {
  const size = Math.random() * 3 + 2;
  const col = colors[Math.floor(Math.random() * colors.length)];
  $("<div>", { class: "firefly" })
    .css({
      width: `${size}px`,
      height: `${size}px`,
      left: `${Math.random() * 96}%`,
      top: `${30 + Math.random() * 65}%`,
      background: col,
      boxShadow: `0 0 ${size * 2}px ${size}px ${col}88`,
      "--dx": `${(Math.random() - 0.5) * 200}px`,
      "--dy": `${(Math.random() - 0.5) * 120}px`,
      animationDuration: `${4 + Math.random() * 10}s`,
      animationDelay: `-${Math.random() * 12}s`,
    })
    .appendTo($ffLayer);
}

/* ── MOUSE PARALLAX ── */
const $panorama = $(".panorama-park");
const $moon = $(".moon");
$(document).on("mousemove", (e) => {
  const cx = e.clientX / $(window).width() - 0.5;
  const cy = e.clientY / $(window).height() - 0.5;
  $panorama.css("transform", `translateX(${cx * -10}px) scale(1.02)`);
  $moon.css("transform", `translate(${cx * 10}px, ${cy * 8}px)`);
});

/* ── RAIN & LIGHTNING ── */
(() => {
  const canvas1 = $("#canvas1")[0],
    canvas2 = $("#canvas2")[0],
    canvas3 = $("#canvas3")[0];
  const ctx1 = canvas1.getContext("2d"),
    ctx2 = canvas2.getContext("2d"),
    ctx3 = canvas3.getContext("2d");
  const rainthroughnum = 500,
    speedRainTrough = 205,
    RainTrough = [];
  const rainnum = 1000,
    rain = [];
  const lightning = [];
  let lightTimeCurrent = 0,
    lightTimeTotal = 0;

  let w = (canvas1.width = canvas2.width = canvas3.width = $(window).width());
  let h =
    (canvas1.height =
    canvas2.height =
    canvas3.height =
      $(window).height());
  $(window).on("resize", () => {
    w = canvas1.width = canvas2.width = canvas3.width = $(window).width();
    h = canvas1.height = canvas2.height = canvas3.height = $(window).height();
  });

  const random = (min, max) => Math.random() * (max - min + 1) + min;

  const createRainTrough = () => {
    for (let i = 0; i < rainthroughnum; i++)
      RainTrough[i] = {
        x: random(0, w),
        y: random(0, h),
        length: Math.floor(random(1, 830)),
        opacity: Math.random() * 0.2,
        xs: random(-2, 2),
        ys: random(10, 20),
      };
  };
  const createRain = () => {
    for (let i = 0; i < rainnum; i++)
      rain[i] = {
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10,
      };
  };
  const createLightning = () => {
    const x = random(100, w - 100),
      y = random(0, h / 4),
      createCount = random(1, 3);
    for (let i = 0; i < createCount; i++)
      lightning.push({
        x,
        y,
        xRange: random(5, 30),
        yRange: random(10, 25),
        path: [{ x, y }],
        pathLimit: random(40, 55),
      });
  };
  const drawRainTrough = (i) => {
    ctx1.beginPath();
    const grd = ctx1.createLinearGradient(
      0,
      RainTrough[i].y,
      0,
      RainTrough[i].y + RainTrough[i].length,
    );
    grd.addColorStop(0, "rgba(255,255,255,0)");
    grd.addColorStop(1, `rgba(255,255,255,${RainTrough[i].opacity})`);
    ctx1.fillStyle = grd;
    ctx1.fillRect(RainTrough[i].x, RainTrough[i].y, 1, RainTrough[i].length);
  };
  const drawRain = (i) => {
    ctx2.beginPath();
    ctx2.moveTo(rain[i].x, rain[i].y);
    ctx2.lineTo(
      rain[i].x + rain[i].l * rain[i].xs,
      rain[i].y + rain[i].l * rain[i].ys,
    );
    ctx2.strokeStyle = "rgba(174,194,224,0.5)";
    ctx2.lineWidth = 1;
    ctx2.lineCap = "round";
    ctx2.stroke();
  };
  const drawLightning = () => {
    $.each(lightning, (i, light) => {
      if (!light) return;
      light.path.push({
        x:
          light.path[light.path.length - 1].x +
          (random(0, light.xRange) - light.xRange / 2),
        y: light.path[light.path.length - 1].y + random(0, light.yRange),
      });
      if (light.path.length > light.pathLimit) {
        lightning.splice(i, 1);
        return;
      }
      ctx3.strokeStyle = "rgba(255,255,255,.1)";
      ctx3.lineWidth = random(0, 30) === 0 ? 8 : random(0, 15) === 0 ? 6 : 3;
      ctx3.beginPath();
      ctx3.moveTo(light.x, light.y);
      $.each(light.path, (_, pt) => ctx3.lineTo(pt.x, pt.y));
      if (Math.floor(random(0, 30)) === 1) {
        ctx3.fillStyle = `rgba(255,255,255,${random(1, 3) / 100})`;
        ctx3.fillRect(0, 0, w, h);
      }
      ctx3.lineJoin = "miter";
      ctx3.stroke();
    });
  };

  createRainTrough();
  createRain();
  $(window).on("resize", createRainTrough);

  const animloop = () => {
    ctx1.clearRect(0, 0, w, h);
    $.each(RainTrough, (i) => {
      RainTrough[i].y >= h
        ? (RainTrough[i].y = h - RainTrough[i].y - RainTrough[i].length * 5)
        : (RainTrough[i].y += speedRainTrough);
      drawRainTrough(i);
    });
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    $.each(rain, (i) => {
      rain[i].x += rain[i].xs;
      rain[i].y += rain[i].ys;
      if (rain[i].x > w || rain[i].y > h) {
        rain[i].x = Math.random() * w;
        rain[i].y = -20;
      }
      drawRain(i);
    });
    ctx3.globalCompositeOperation = "destination-out";
    ctx3.fillStyle = `rgba(0,0,0,${random(1, 30) / 100})`;
    ctx3.fillRect(0, 0, w, h);
    ctx3.globalCompositeOperation = "source-over";
    if (++lightTimeCurrent >= lightTimeTotal) {
      createLightning();
      lightTimeCurrent = 0;
      lightTimeTotal = 200;
    }
    drawLightning();
    requestAnimationFrame(animloop);
  };
  animloop();
})();



/* ── SHOOTING STARS ── */
(() => {
  const sc = $("#starsCanvas")[0];
  const sctx = sc.getContext("2d");
  let sw = $(window).width(),
    sh = $(window).height();
  $(window).on("resize", () => {
    sw = $(window).width();
    sh = $(window).height();
  });
  let shooters = [];
  const spawnShooter = () => {
    shooters.push({
      x: Math.random() * sw * 0.75,
      y: Math.random() * sh * 0.35,
      vx: 9 + Math.random() * 8,
      vy: 3 + Math.random() * 5,
      len: 90 + Math.random() * 110,
      life: 1.0,
    });
    setTimeout(spawnShooter, 2500 + Math.random() * 5000);
  };
  setTimeout(spawnShooter, 1500);
  const drawShooters = () => {
    shooters = $.grep(shooters, (s) => s.life > 0);
    $.each(shooters, (_, s) => {
      const tx = s.x - s.vx * (s.len / 14),
        ty = s.y - s.vy * (s.len / 14);
      const g = sctx.createLinearGradient(tx, ty, s.x, s.y);
      g.addColorStop(0, "rgba(255,255,255,0)");
      g.addColorStop(1, `rgba(255,255,255,${s.life})`);
      sctx.beginPath();
      sctx.moveTo(tx, ty);
      sctx.lineTo(s.x, s.y);
      sctx.strokeStyle = g;
      sctx.lineWidth = 1.5;
      sctx.stroke();
      s.x += s.vx;
      s.y += s.vy;
      s.life -= 0.018;
    });
    requestAnimationFrame(drawShooters);
  };
  drawShooters();
})();

/* ── RAIN RIPPLES ── */
(() => {
  const rc = $("#rippleCanvas")[0];
  if (!rc) return;
  const ctx = rc.getContext("2d");
  let RW = (rc.width = $(window).width());
  let RH = (rc.height = Math.round($(window).height() * 0.22));
  $(window).on("resize", () => {
    RW = rc.width = $(window).width();
    RH = rc.height = Math.round($(window).height() * 0.22);
  });
  const ripples = [];
  setInterval(() => {
    ripples.push({
      x: Math.random() * RW,
      y: RH * 0.3 + Math.random() * RH * 0.6,
      r: 0,
      op: 0.7,
    });
  }, 55);
  const drawRipples = () => {
    ctx.clearRect(0, 0, RW, RH);
    for (let i = ripples.length - 1; i >= 0; i--) {
      const rp = ripples[i];
      rp.r += 0.6;
      rp.op -= 0.013;
      if (rp.op <= 0) {
        ripples.splice(i, 1);
        continue;
      }
      ctx.beginPath();
      ctx.ellipse(rp.x, rp.y, rp.r, rp.r * 0.35, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(160,220,240,${rp.op})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }
    requestAnimationFrame(drawRipples);
  };
  drawRipples();
})();

(() => {
  let mx = -9999,
    my = -9999;
  $(document).on("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
  });
  const ffs = $("#firefliesLayer .firefly")
    .map((_, el) => {
      const $el = $(el);
      const r = el.getBoundingClientRect();
      $el.css({ transition: "none", position: "fixed" });
      return {
        $el,
        _x: r.left + r.width / 2,
        _y: r.top + r.height / 2,
        _vx: 0,
        _vy: 0,
      };
    })
    .get();
  const updateFireflies = () => {
    $.each(ffs, (_, ff) => {
      const dx = mx - ff._x,
        dy = my - ff._y,
        dist = Math.sqrt(dx * dx + dy * dy);
      const pull = dist < 160 ? (160 - dist) / 160 : 0;
      ff._vx = (ff._vx + dx * pull * 0.012) * 0.88;
      ff._vy = (ff._vy + dy * pull * 0.012) * 0.88;
      ff._x += ff._vx;
      ff._y += ff._vy;
      ff.$el.css({ left: `${ff._x}px`, top: `${ff._y}px` });
    });
    requestAnimationFrame(updateFireflies);
  };
  updateFireflies();
})();
