function initSeaBreezeSimulation(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const context = canvas.getContext("2d");
  let WIDTH = 0;
  let HEIGHT = 0;

  const points = [];
  const sticks = [];
  const BOUNCE = 0.9;
  const GRAVITY = 0.15;
  const FRICTION = 0.995;

  let windAngle = 0;
  const WIND_SPEED = 0.02;
  let windStrength = 0;
  const WIND_VARIATION_FACTOR = 0.3;
  const WIND_STRENGTH_FACTOR = 0.3;
  const WIND_WAVE_1_SPEED = 0.3;
  const WIND_WAVE_1_AMPLITUDE = 0.5;
  const WIND_WAVE_2_SPEED = 0.7;
  const WIND_WAVE_2_AMPLITUDE = 0.2;
  const CONSTRAINT_ITERATIONS = 3;

  const NUM_BLINDS = 15;
  const POINTS_PER_BLIND = 10;
  let BLIND_WIDTH = 0;
  let START_X = 0;
  let START_Y = 0;
  let SPACING = 0;
  let POINT_SPACING = 0;

  function resizeCanvas() {
    const bounds = canvas.getBoundingClientRect();
    WIDTH = canvas.width = Math.max(1, Math.round(bounds.width));
    HEIGHT = canvas.height = Math.max(1, Math.round(bounds.height));
    BLIND_WIDTH = WIDTH / NUM_BLINDS;
    START_X = BLIND_WIDTH / 2;
    SPACING = BLIND_WIDTH;
    POINT_SPACING = HEIGHT / (POINTS_PER_BLIND - 1);
    points.length = 0;
    sticks.length = 0;
    createBlinds();
    createSticks();
  }

  function distance(p0, p1) {
    const dx = p1.x - p0.x;
    const dy = p1.y - p0.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function getVelocity(p) {
    return {
      vx: (p.x - p.oldx) * FRICTION,
      vy: (p.y - p.oldy) * FRICTION,
    };
  }

  function createBlinds() {
    for (let i = 0; i < NUM_BLINDS; i++) {
      const xPos = START_X + i * SPACING;
      for (let j = 0; j < POINTS_PER_BLIND; j++) {
        const yPos = START_Y + j * POINT_SPACING;
        points.push({
          x: xPos,
          y: yPos,
          oldx: xPos,
          oldy: yPos,
          pinned: j === 0,
          blindIndex: i,
        });
      }
    }
  }

  function createSticks() {
    for (let i = 0; i < NUM_BLINDS; i++) {
      for (let j = 0; j < POINTS_PER_BLIND - 1; j++) {
        const pointIndex = i * POINTS_PER_BLIND + j;
        const p0 = points[pointIndex];
        const p1 = points[pointIndex + 1];
        sticks.push({
          p0: p0,
          p1: p1,
          length: distance(p0, p1),
        });
      }
    }
  }

  function updatePoints() {
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      if (!p.pinned) {
        const { vx, vy } = getVelocity(p);
        p.oldx = p.x;
        p.oldy = p.y;
        p.x += vx;
        p.y += vy;
        p.y += GRAVITY;

        const windVariation =
          1 +
          Math.sin(windAngle + p.blindIndex * WIND_VARIATION_FACTOR) *
            WIND_WAVE_2_AMPLITUDE;
        p.x += windStrength * windVariation * WIND_STRENGTH_FACTOR;
      }
    }
  }

  function constrainPoints() {
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      if (!p.pinned) {
        const { vx, vy } = getVelocity(p);
        if (p.x > WIDTH) {
          p.x = WIDTH;
          p.oldx = p.x + vx * BOUNCE;
        } else if (p.x < 0) {
          p.x = 0;
          p.oldx = p.x + vx * BOUNCE;
        }
        if (p.y > HEIGHT) {
          p.y = HEIGHT;
          p.oldy = p.y + vy * BOUNCE;
        } else if (p.y < 0) {
          p.y = 0;
          p.oldy = p.y + vy * BOUNCE;
        }
      }
    }
  }

  function updateSticks() {
    for (let i = 0; i < sticks.length; i++) {
      const s = sticks[i];
      const dx = s.p1.x - s.p0.x;
      const dy = s.p1.y - s.p0.y;
      const currentDistance = Math.sqrt(dx * dx + dy * dy);
      const difference = s.length - currentDistance;
      const percent = difference / currentDistance / 2;
      const offsetX = dx * percent;
      const offsetY = dy * percent;

      if (!s.p0.pinned) {
        s.p0.x -= offsetX;
        s.p0.y -= offsetY;
      }
      if (!s.p1.pinned) {
        s.p1.x += offsetX;
        s.p1.y += offsetY;
      }
    }
  }

  function renderBlinds() {
    context.fillStyle = "rgba(240, 240, 245, 0.25)";
    context.strokeStyle = "rgba(255, 255, 255, 0.18)";
    context.lineWidth = 1;

    for (let i = 0; i < NUM_BLINDS; i++) {
      context.beginPath();
      const blindPoints = [];
      for (let j = 0; j < POINTS_PER_BLIND; j++) {
        blindPoints.push(points[i * POINTS_PER_BLIND + j]);
      }

      context.moveTo(blindPoints[0].x - BLIND_WIDTH / 2, blindPoints[0].y);
      for (let j = 1; j < blindPoints.length; j++) {
        context.lineTo(blindPoints[j].x - BLIND_WIDTH / 2, blindPoints[j].y);
      }

      const lastPoint = blindPoints[blindPoints.length - 1];
      context.lineTo(lastPoint.x + BLIND_WIDTH / 2, lastPoint.y);

      for (let j = blindPoints.length - 1; j >= 0; j--) {
        context.lineTo(blindPoints[j].x + BLIND_WIDTH / 2, blindPoints[j].y);
      }

      context.closePath();
      context.fill();
      context.stroke();
    }
  }

  function update() {
    windAngle += WIND_SPEED;
    const wave1 =
      Math.sin(windAngle * WIND_WAVE_1_SPEED) * WIND_WAVE_1_AMPLITUDE;
    const wave2 =
      Math.sin(windAngle * WIND_WAVE_2_SPEED) * WIND_WAVE_2_AMPLITUDE;
    windStrength = Math.max(0, wave1 + wave2);

    context.clearRect(0, 0, WIDTH, HEIGHT);
    updatePoints();

    for (let i = 0; i < CONSTRAINT_ITERATIONS; i++) {
      updateSticks();
      constrainPoints();
    }

    renderBlinds();
    requestAnimationFrame(update);
  }

  const resizeObserver = new ResizeObserver(resizeCanvas);
  resizeObserver.observe(canvas.parentElement || canvas);
  resizeCanvas();
  update();
}

initSeaBreezeSimulation("canvas-left");
initSeaBreezeSimulation("canvas-middle");
initSeaBreezeSimulation("canvas-right");
initSeaBreezeSimulation("gallery-canvas-left");
initSeaBreezeSimulation("gallery-canvas-right");

function triggerStormLightning() {
  const roomContainer = document.querySelector(".box");
  if (roomContainer) {
    roomContainer.classList.add("flash-active");
    setTimeout(() => {
      roomContainer.classList.remove("flash-active");
    }, 600);
  }
  const randomDelay = 4000 + Math.random() * 5000;
  setTimeout(triggerStormLightning, randomDelay);
}

setTimeout(triggerStormLightning, 3000);

function initBirdLetterAnimation() {
  if (!window.gsap) return;

  const bird = document.getElementById("blindsBird");
  const letter = document.getElementById("blindsLetter");
  const stoolSeat = document.querySelector("#blindsSection .blinds-stool-seat");
  const letterDialog = document.getElementById("blindsLetterDialog");
  const letterClose = letterDialog?.querySelector(".blinds-letter-close");
  const room = document.querySelector("#blindsSection .box");
  if (!bird || !letter || !stoolSeat || !letterDialog || !letterClose || !room) return;

  const gsap = window.gsap;
  let letterCloseTimer;
  gsap.to("#blindsBird .wing-left", {
    scaleY: 0.25,
    duration: 0.11,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
  gsap.to("#blindsBird .wing-right", {
    scaleY: 0.25,
    duration: 0.11,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  const deliverLetter = () => {
    letter.disabled = false;
    letter.setAttribute("aria-hidden", "false");
    letter.setAttribute("aria-label", "Open Saumya's birthday letter");
    letter.classList.add("is-delivered");
  };
  const openLetter = () => {
    if (letter.disabled || letterDialog.open) return;
    window.clearTimeout(letterCloseTimer);
    letterDialog.showModal();
    requestAnimationFrame(() => letterDialog.classList.add("is-visible"));
  };
  const closeLetter = () => {
    if (!letterDialog.open) return;
    letterDialog.classList.remove("is-visible");
    letterCloseTimer = window.setTimeout(() => letterDialog.close(), 260);
  };

  letter.addEventListener("click", openLetter);
  letterClose.addEventListener("click", closeLetter);
  letterDialog.addEventListener("click", (event) => {
    if (event.target === letterDialog) closeLetter();
  });
  letterDialog.addEventListener("close", () => {
    window.clearTimeout(letterCloseTimer);
    letterDialog.classList.remove("is-visible");
  });

  const windows = [
    {
      entry: { left: "10.3%", top: "50%" },
      outside: { left: "-10%", top: "50%" },
      flip: false,
    },
    {
      entry: { left: "89.7%", top: "50%" },
      outside: { left: "110%", top: "50%" },
      flip: true,
    },
  ];
  const windowPath = windows[Math.floor(Math.random() * windows.length)];
  bird.classList.toggle("is-flying-left", windowPath.flip);
  const roomBounds = room.getBoundingClientRect();
  const seatBounds = stoolSeat.getBoundingClientRect();
  const letterBounds = letter.getBoundingClientRect();
  const birdBounds = bird.getBoundingClientRect();
  const landing = {
    left: `${seatBounds.left + seatBounds.width / 2 - roomBounds.left}px`,
    top: `${seatBounds.top - roomBounds.top - birdBounds.height * 0.8}px`,
  };
  const letterRestTop = `${seatBounds.top - roomBounds.top - letterBounds.height / 2}px`;
  const distantScale = 0.6;

  gsap.set(bird, {
    left: windowPath.outside.left,
    top: windowPath.outside.top,
    xPercent: -50,
    yPercent: -50,
    opacity: 0,
    scale: distantScale,
    zIndex: 95,
  });
  gsap.set(letter, {
    left: landing.left,
    top: landing.top,
    xPercent: -50,
    yPercent: -50,
    opacity: 0,
    rotate: -15,
  });

  const timeline = gsap.timeline({ paused: true });

  timeline
    .to(bird, { opacity: 1, duration: 0.2 })
    .to(bird, {
      left: windowPath.entry.left,
      top: windowPath.entry.top,
      scale: 1,
      duration: 1.1,
      ease: "power2.out",
    })
    .set(bird, { zIndex: 350 })
    .to(bird, {
      left: landing.left,
      top: landing.top,
      duration: 1.3,
      ease: "power1.inOut",
    })
    .to(letter, { opacity: 1, duration: 0.15 })
    .to(letter, {
      top: letterRestTop,
      rotate: 12,
      duration: 0.6,
      ease: "bounce.out",
    }, "<")
    .call(deliverLetter)
    .call(() => bird.classList.toggle("is-flying-left", !windowPath.flip), null, "+=0.4")
    .to(bird, {
      left: windowPath.entry.left,
      top: windowPath.entry.top,
      duration: 1,
      ease: "power1.in",
    }, "+=0.4")
    .set(bird, { zIndex: 95 })
    .to(bird, {
      left: windowPath.outside.left,
      top: windowPath.outside.top,
      opacity: 0,
      scale: distantScale,
      duration: 1,
      ease: "power2.in",
    });

  lazyInit(room, () => timeline.play(), "0px");
}

initBirdLetterAnimation();
