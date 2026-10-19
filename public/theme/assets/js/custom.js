/* Theme utilities and shared interactions. */

/* ================================================================
   1. UTILS
================================================================ */
const utils = {
  rand: (min, max) => (Math.random() * (max - min + 1) + min) | 0,
  clamp: (val, lo, hi) => Math.max(lo, Math.min(val, hi)),
  el: (tag, cls = "", html = "") => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html) e.innerHTML = html;
    return e;
  },
  buildFragment: (items, mapper) => {
    const f = document.createDocumentFragment();
    items.forEach((item) => f.appendChild(mapper(item)));
    return f;
  },
  // Schedule low-priority work without blocking paint
  idle: (fn) => (window.requestIdleCallback || ((cb) => setTimeout(cb, 1)))(fn),
};

/* ================================================================
   2. DOM
================================================================ */
const dom = (sel, ctx = document) => ctx.querySelector(sel);
const domAll = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const byId = (id) => document.getElementById(id);

function applyContentOverrides(overrides, applyValue) {
  Object.entries(overrides || {}).forEach(([selector, values]) => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) {
      console.error(`Birthday content selector did not match: ${selector}`);
      return;
    }

    const entries = Array.isArray(values) ? values : Array(elements.length).fill(values);

    if (Array.isArray(values) && values.length !== elements.length) {
      console.error(`Birthday content count does not match ${selector}.`);
    }
    entries.forEach((value, index) => {
      const element = elements[index];
      if (!element) {
        console.error(`Birthday content has no matching element: ${selector}[${index}]`);
        return;
      }
      applyValue(element, value);
    });
  });
}

function applyPageContent(data) {
  const content = data.pageContent;
  if (!content) return;

  applyContentOverrides(content.text, (element, value) => {
    if (typeof value !== "string") {
      console.error("Birthday text content must be a string.", element);
      return;
    }

    element.replaceChildren(
      ...value.split(/\r?\n/).flatMap((line, index) =>
        index ? [document.createElement("br"), document.createTextNode(line)] : [document.createTextNode(line)],
      ),
    );
  });

  Object.entries(content.attributes || {}).forEach(([selector, attributes]) => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) {
      console.error(`Birthday content selector did not match: ${selector}`);
      return;
    }
    Object.entries(attributes).forEach(([name, values]) => {
      if (Array.isArray(values) && values.length !== elements.length) {
        console.error(`Birthday attribute count does not match ${selector} for ${name}.`);
      }
      elements.forEach((element, index) => {
        const value = Array.isArray(values) ? values[index] : values;
        if (typeof value === "string") element.setAttribute(name, value);
      });
    });
  });

  applyContentOverrides(content.images, (element, value) => {
    if (!(element instanceof HTMLImageElement) || typeof value !== "string") {
      console.error("Birthday image override needs an image element and a URL.", element);
      return;
    }
    element.src = value;
  });

  applyContentOverrides(content.backgrounds, (element, value) => {
    if (typeof value !== "string") {
      console.error("Birthday background image override must be a URL.", element);
      return;
    }
    element.style.setProperty("--img", `url("${value}")`);
  });

  if (Array.isArray(data.playlist)) {
    const audio = document.querySelector(".musicPlayer .songAudio");
    if (!audio || !data.playlist.length) {
      console.error("Birthday music playlist or player is missing.");
    } else {
      audio.setAttribute("data-playlist", JSON.stringify(data.playlist));
      if (data.playlist[0].src) {
        audio.src = data.playlist[0].src;
      } else {
        audio.removeAttribute("src");
      }
    }
  }
}

/* ================================================================
   3. LAZY OBSERVER
   Usage: lazyInit('#mySection', () => initMySection())
   The callback fires once when the section scrolls into view (+ 200px
   root margin so init happens just before it becomes visible).
================================================================ */
function lazyInit(selectorOrEl, callback, rootMargin = "0px 0px 200px 0px") {
  const el =
    typeof selectorOrEl === "string" ? dom(selectorOrEl) : selectorOrEl;
  if (!el) return;

  const obs = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      callback();
    },
    { rootMargin },
  );

  obs.observe(el);
}

/* ================================================================
   19. BOOTSTRAP
   Single fetch — split into critical (above-fold) vs deferred.
================================================================ */
fetch(window.ssThemeConfig.dataUrl, { cache: "no-store" })
  .then((r) => r.json())
  .then((data) => {
    window.ssMainData = data;
    applyPageContent(data);
    document.dispatchEvent(
      new CustomEvent("ssMainDataLoaded", { detail: data }),
    );

  })
  .catch((err) => console.error("Failed to load data.json:", err));

/* ================================================================
   20. ENHANCED UI / UX  — added on top of original logic
   • scroll progress bar
   • side section nav dots + scroll spy
   • top control rail (mute / celebrate / fullscreen / scroll-top)
   • welcome toast (first visit, localStorage)
================================================================ */

(() => {
  // ── reduced motion check ──
  const prefersReduced = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // ── Sections list (id -> label) — mirrors load_my_sections() ──
  const SECTIONS = [
    { id: "heroSection", label: "A Rainy Birthday Night" },
    { id: "blindsSection", label: "The Window Opens" },
    { id: "s8CoverSection", label: "For Saumya" },
    { id: "s8OverviewSection", label: "The Birthday Soundtrack" },
    { id: "s8FriendSection", label: "A Birthday Toast" },
    { id: "messageCarouselSection", label: "Birthday Wishes" },
    { id: "magicalGallerySection", label: "The Memory Projector" },
    { id: "s8GallerySection", label: "Our Memories" },
    { id: "moreThanCarouselSection", label: "Little Moments, Held Close" },
    { id: "spinSection", label: "Memory Carousel" },
    { id: "s8AppearanceSection", label: "The Birthday Glow" },
    { id: "s8RpSection", label: "Wishes for Your Year" },
    { id: "s8AboutSection", label: "A Letter for You" },
    { id: "bookSection", label: "A Little Birthday Book" },
    { id: "cakeFinaleSection", label: "Make a Wish" },
  ];
  document.addEventListener("ssMainDataLoaded", ({ detail }) => {
    const labels = detail.pageContent?.sectionLabels;
    if (!Array.isArray(labels) || labels.length !== SECTIONS.length) {
      console.error("Birthday section labels do not match the section list.");
      return;
    }

    SECTIONS.forEach((section, index) => {
      section.label = labels[index];
      const dot = byId("sideNav")?.querySelector(
        `.sn-dot[data-target="${section.id}"]`,
      );
      if (dot) {
        dot.setAttribute("data-label", section.label);
        dot.setAttribute("aria-label", `Jump to ${section.label}`);
      }
    });
  });
  let activeSectionId = null;
  let snapNavigationTimer;
  let snapNavigationEndHandler;
  const setActiveSection = (id) => {
    activeSectionId = id;
    const sideNav = byId("sideNav");
    sideNav?.querySelectorAll(".sn-dot.active").forEach((dot) =>
      dot.classList.remove("active"),
    );
    sideNav?.querySelector(`.sn-dot[data-target="${id}"]`)?.classList.add("active");
    SECTIONS.forEach((section) =>
      byId(section.id)?.classList.toggle("cinematic-active", section.id === id),
    );
  };
  const scrollToSection = (target, sectionId = target.id) => {
    const root = document.documentElement;
    window.clearTimeout(snapNavigationTimer);
    if (snapNavigationEndHandler) {
      window.removeEventListener("scrollend", snapNavigationEndHandler);
    }

    const finishSnapNavigation = () => {
      window.clearTimeout(snapNavigationTimer);
      window.removeEventListener("scrollend", finishSnapNavigation);
      snapNavigationEndHandler = null;
      root.classList.remove("snap-navigation");
      setActiveSection(sectionId);
    };

    root.classList.add("snap-navigation");
    setActiveSection(sectionId);
    const top = target.getBoundingClientRect().top + window.scrollY;
    const distance = Math.abs(top - window.scrollY);
    const fallbackDelay = Math.min(
      6000,
      Math.max(1500, 800 + (distance / window.innerHeight) * 650),
    );
    snapNavigationEndHandler = finishSnapNavigation;
    window.addEventListener("scrollend", finishSnapNavigation, { once: true });
    snapNavigationTimer = window.setTimeout(
      finishSnapNavigation,
      fallbackDelay,
    );
    window.scrollTo({
      top,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  };

  /* ── 1. SCROLL PROGRESS BAR ── */
  const sp = byId("scrollProgress");
  if (sp) {
    let ticking = false;
    const update = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      const pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
      sp.style.width = pct + "%";
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true },
    );
    update();
  }

  /* ── 2. SIDE NAV DOTS + SCROLL SPY ── */
  const sn = byId("sideNav");
  if (sn) {
    const present = SECTIONS.filter((s) => byId(s.id));
    sn.innerHTML = present
      .map(
        (s) =>
          `<button class="sn-dot" data-target="${s.id}" data-label="${s.label}" aria-label="Jump to ${s.label}"></button>`,
      )
      .join("");
    sn.addEventListener("click", (e) => {
      const dot = e.target.closest(".sn-dot");
      if (!dot) return;
      const tgt = byId(dot.dataset.target);
      const scrollTarget =
        tgt?.id === "heroSection" ? dom(".hero-spacer") : tgt;
      if (scrollTarget) scrollToSection(scrollTarget, dot.dataset.target);
    });

    const getSectionVisibility = (section) => {
      const target =
        section.id === "heroSection" ? dom(".hero-spacer") : byId(section.id);
      if (!target) return { id: section.id, ratio: 0 };
      const bounds = target.getBoundingClientRect();
      const visibleHeight = Math.max(
        0,
        Math.min(bounds.bottom, window.innerHeight) - Math.max(bounds.top, 0),
      );
      return { id: section.id, ratio: visibleHeight / bounds.height };
    };
    const updateActiveSection = () => {
      const visibleSection = present
        .map(getSectionVisibility)
        .sort((a, b) => b.ratio - a.ratio)[0];
      if (visibleSection?.ratio > 0) setActiveSection(visibleSection.id);
    };
    updateActiveSection();

    const obs = new IntersectionObserver(
      updateActiveSection,
      { threshold: [0.05, 0.35, 0.55, 0.75] },
    );
    present.forEach((s) => {
      const el = s.id === "heroSection" ? dom(".hero-spacer") : byId(s.id);
      if (el) obs.observe(el);
    });

    let resizeTimer;
    window.addEventListener(
      "resize",
      () => {
        const sectionId = activeSectionId;
        if (!sectionId) return;
        const target =
          sectionId === "heroSection" ? dom(".hero-spacer") : byId(sectionId);
        if (!target) return;

        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          const root = document.documentElement;
          root.classList.add("snap-navigation");
          const top = target.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top, behavior: "instant" });
          setActiveSection(sectionId);
          window.clearTimeout(snapNavigationTimer);
          snapNavigationTimer = window.setTimeout(
            () => root.classList.remove("snap-navigation"),
            100,
          );
        }, 80);
      },
      { passive: true },
    );

    sn.classList.add("ready");
  }

  /* ── 3. TOP CONTROL RAIL ── */
  const tc = byId("topControls");
  const tcMute = byId("tcMute");
  const tcCel = byId("tcCelebrate");
  const tcFull = byId("tcFullscreen");
  const tcTop = byId("tcTop");

  tc?.classList.add("ready");

  tcFull?.addEventListener("click", async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.error("Could not toggle fullscreen:", error);
    }
  });

  const updateFullscreenControl = () => {
    const isFullscreen = Boolean(document.fullscreenElement);
    const icon = tcFull?.querySelector("i");
    icon?.classList.toggle("fa-expand", !isFullscreen);
    icon?.classList.toggle("fa-compress", isFullscreen);
    if (tcFull) {
      tcFull.title = isFullscreen ? "Exit fullscreen" : "Fullscreen";
      tcFull.setAttribute("aria-label", tcFull.title);
    }
  };
  document.addEventListener("fullscreenchange", updateFullscreenControl);
  updateFullscreenControl();

  tcTop?.addEventListener("click", () => {
    const top = dom(".hero-spacer") || document.documentElement;
    scrollToSection(top, "heroSection");
  });

  const roseOverlay = byId("roseOverlay");
  const roseClose = dom(".close-rose");
  const magicGlass = byId("magicGlass");
  let roseRevealTimer;
  let roseResetTimer;
  const openRose = () => {
    window.clearTimeout(roseRevealTimer);
    window.clearTimeout(roseResetTimer);
    magicGlass?.classList.remove("lift-up");
    roseOverlay?.classList.add("active");
    roseOverlay?.setAttribute("aria-hidden", "false");
    roseRevealTimer = window.setTimeout(() => {
      if (roseOverlay?.classList.contains("active")) {
        magicGlass?.classList.add("lift-up");
      }
    }, 800);
    roseClose?.focus();
  };
  window.openMagicalRose = openRose;
  const closeRose = () => {
    window.clearTimeout(roseRevealTimer);
    window.clearTimeout(roseResetTimer);
    roseOverlay?.classList.remove("active");
    roseOverlay?.setAttribute("aria-hidden", "true");
    roseResetTimer = window.setTimeout(() => {
      if (!roseOverlay?.classList.contains("active")) {
        magicGlass?.classList.remove("lift-up");
      }
    }, 500);
    dom(".grand-reveal-heart-trigger")?.focus();
  };
  roseClose?.addEventListener("click", closeRose);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && roseOverlay?.classList.contains("active")) {
      closeRose();
    }
  });

  // mute / unmute (toggles the bgMusic + 3d music player audio)
  tcMute?.addEventListener("click", () => {
    const audios = domAll("audio, video");
    const muted = !tcMute.classList.contains("is-muted");
    audios.forEach((a) => {
      a.muted = muted;
    });
    tcMute.classList.toggle("is-muted", muted);
    tcMute.querySelector("i").className = muted
      ? "fa-solid fa-volume-xmark"
      : "fa-solid fa-volume-high";
    tcMute.title = muted ? "Unmute music" : "Mute music";
  });

  // celebrate — global confetti burst
  tcCel?.addEventListener("click", () => spawnConfetti(80));

  function spawnConfetti(count) {
    const colors = ["#ff7eb3", "#f5c842", "#65e6cc", "#ffffff", "#d63384"];
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const piece = document.createElement("span");
      const duration = 1.8 + Math.random() * 0.8;
      piece.className = "confetti-piece";
      piece.style.position = "fixed";
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.top = "-20px";
      piece.style.zIndex = "10000";
      piece.style.pointerEvents = "none";
      piece.style.backgroundColor = colors[utils.rand(0, colors.length - 1)];
      piece.style.setProperty("--tx", `${(Math.random() - 0.5) * 240}px`);
      piece.style.animation = `confettiBurst ${duration}s linear forwards`;
      fragment.appendChild(piece);
      setTimeout(() => piece.remove(), duration * 1000);
    }

    document.body.appendChild(fragment);
  }


  // confetti keyframes (inject once)
  if (!document.getElementById("confetti-burst-style")) {
    const st = document.createElement("style");
    st.id = "confetti-burst-style";
    st.textContent =
      "@keyframes confettiBurst{0%{transform:translate(0,0) rotate(0)}" +
      "100%{transform:translate(var(--tx),110vh) rotate(720deg);opacity:0}}";
    document.head.appendChild(st);
  }

})();