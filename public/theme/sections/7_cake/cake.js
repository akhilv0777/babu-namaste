/* ================================================================
   CAKE FINALE — jQuery version (clock removed)
================================================================ */
(function ($) {
  const PI2 = Math.PI * 2;
  const utils = {
    rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    debounce(fn, delay = 200) {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
      };
    },
  };

  /* ---------------- CAKE FINALE ---------------- */
  let isDeskBlown = false;
  let fxAnimationId = null;

  window.blowCandleAndReveal = function () {
    if (isDeskBlown) return;
    isDeskBlown = true;
    $("#grandReveal").removeClass("hidden");
    const fx = new BirthdayEffect();
    let then = Date.now();
    const loop = () => {
      fxAnimationId = requestAnimationFrame(loop);
      const now = Date.now();
      fx.update((now - then) / 1000);
      then = now;
    };
    loop();
  };

  window.closeGrandReveal = function () {
    if (fxAnimationId !== null) {
      cancelAnimationFrame(fxAnimationId);
      fxAnimationId = null;
    }
    $("#grandReveal").addClass("hidden");
  };

  /* ---------------- CANVAS FIREWORKS ---------------- */
  class BirthdayEffect {
    constructor() {
      this.canvas = document.getElementById("birthdayCanvas");
      this.ctx = this.canvas.getContext("2d");
      this.fireworks = [];
      this.counter = 0;
      this.resize();
      $(window).on(
        "resize",
        utils.debounce(() => this.resize(), 200),
      );
    }
    resize() {
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
      const cx = (this.width / 2) | 0;
      this.spawnA = (cx - cx / 4) | 0;
      this.spawnB = (cx + cx / 4) | 0;
      this.spawnC = this.height * 0.1;
      this.spawnD = this.height * 0.5;
    }
    update(delta) {
      const { ctx } = this;
      ctx.globalCompositeOperation = "hard-light";
      ctx.fillStyle = `rgba(20,20,20,${7 * delta})`;
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.globalCompositeOperation = "lighter";
      this.fireworks.forEach((fw) => fw.draw(ctx, delta, this));
      this.counter += delta * 3;
      if (this.counter >= 1) {
        this.fireworks.push(
          new FireworkPiece(
            utils.rand(this.spawnA, this.spawnB),
            this.height,
            utils.rand(0, this.width),
            utils.rand(this.spawnC, this.spawnD),
            utils.rand(0, 360),
            utils.rand(30, 110),
          ),
        );
        this.counter = 0;
      }
      if (this.fireworks.length > 1000)
        this.fireworks = this.fireworks.filter((fw) => !fw.dead);
    }
  }

  class FireworkPiece {
    constructor(x, y, tx, ty, shade, offsprings) {
      Object.assign(this, { x, y, targetX: tx, targetY: ty, shade, offsprings });
      this.history = [];
      this.madeChilds = false;
      this.dead = false;
    }
    draw(ctx, delta, parent) {
      if (this.dead) return;
      const dx = this.targetX - this.x,
        dy = this.targetY - this.y;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        this.x += dx * 2 * delta;
        this.y += dy * 2 * delta;
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > 20) this.history.shift();
      } else {
        if (this.offsprings && !this.madeChilds) {
          const half = this.offsprings / 2;
          for (let i = 0; i < half; i++) {
            parent.fireworks.push(
              new FireworkPiece(
                this.x,
                this.y,
                (this.x + this.offsprings * Math.cos((PI2 * i) / half)) | 0,
                (this.y + this.offsprings * Math.sin((PI2 * i) / half)) | 0,
                this.shade,
                0,
              ),
            );
          }
          this.madeChilds = true;
        }
        this.history.shift();
      }
      if (!this.history.length) {
        this.dead = true;
        return;
      }
      ctx.beginPath();
      ctx.fillStyle = `hsl(${this.shade},100%,50%)`;
      ctx.arc(this.x, this.y, 1, 0, PI2);
      ctx.fill();
    }
  }

  /* ---------------- POPULATE DYNAMIC TEXTS ---------------- */
  function populateDynamicTexts(data) {
    if (!data) return;

    if (data.site) {
      if (data.site.title) document.title = data.site.title;
      if (data.site.favicon) {
        $("#siteFavicon, #siteFaviconApple").attr("href", data.site.favicon);
      }
    }

    if (data.grandReveal) {
      $("#grandRevealText").html(
        `${data.grandReveal.line1}<br>${data.grandReveal.line2}<br>` +
          `<button class="grand-reveal-heart-trigger" type="button" aria-label="Tap here to open your birthday surprise">` +
          `<svg class="grand-reveal-heart" viewBox="0 0 100 90" aria-hidden="true" focusable="false">` +
          `<path d="M50 87 8.2 46.7C-5.2 33.8-.8 11.9 16.4 4.4 29.1-1.2 42 4 50 15.2 58 4 70.9-1.2 83.6 4.4c17.2 7.5 21.6 29.4 8.2 42.3L50 87Z"/>` +
          `</svg>` +
          `<span>Tap here</span>` +
          `</button>`,
      );
    }

    if (data.spinLabel) $("#spinLabelText").text(data.spinLabel);
    if (data.roseText) $("#roseText").text(data.roseText);
  }

  /* ---------------- INIT ---------------- */
  document.addEventListener("ssMainDataLoaded", ({ detail }) =>
    populateDynamicTexts(detail),
  );

  $(function () {
    $("#grandRevealText").on("click", ".grand-reveal-heart-trigger", () => {
      window.openMagicalRose();
    });

    if (window.ssMainData) populateDynamicTexts(window.ssMainData);
  });
})(jQuery);