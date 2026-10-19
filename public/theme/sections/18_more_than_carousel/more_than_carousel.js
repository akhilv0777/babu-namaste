(() => {
  const section = document.getElementById("moreThanCarouselSection");
  const carousel = section?.querySelector(".memory-carousel");
  const backdrop = section?.querySelector(".memory-backdrop-image");
  const quoteTitle = section?.querySelector(".memory-quote-title");
  const quoteText = section?.querySelector(".memory-quote-text");
  const caption = section?.querySelector(".memory-carousel-caption");
  const readMore = section?.querySelector(".memory-read-more");
  const moreText = section?.querySelector(".memory-quote-more");
  const previous = section?.querySelector(".memory-previous");
  const next = section?.querySelector(".memory-next");
  if (!section || !carousel || !backdrop || !quoteTitle || !quoteText || !caption || !previous || !next) return;

  const cards = [...carousel.querySelectorAll(".memory-card")];
  if (!cards.length) return;

  let activeIndex = 0;
  let pointerStart = null;

  const render = () => {
    const step = Math.min(cards[0].offsetWidth + 18, carousel.clientWidth * 0.29);
    cards.forEach((card, index) => {
      const offset = (index - activeIndex + cards.length) % cards.length;
      card.style.zIndex = String(cards.length - offset);
      card.style.opacity = offset > 3 ? "0" : String(1 - offset * 0.12);
      card.style.pointerEvents = offset > 2 ? "none" : "auto";
      card.style.transform = `translateY(-50%) translateX(${offset * step}px) scale(${Math.max(0.82, 1 - offset * 0.045)})`;
      card.setAttribute("aria-pressed", index === activeIndex ? "true" : "false");
      card.tabIndex = offset > 2 ? -1 : 0;
    });

    const activeCard = cards[activeIndex];
    const image = activeCard.querySelector("img");
    image.loading = "eager";
    backdrop.src = image.src;
    quoteTitle.textContent = activeCard.dataset.title;
    quoteText.textContent = activeCard.dataset.caption;
    caption.textContent = activeCard.dataset.title;
  };

  const show = (index) => {
    activeIndex = (index + cards.length) % cards.length;
    render();
  };

  previous.addEventListener("click", () => show(activeIndex - 1));
  next.addEventListener("click", () => show(activeIndex + 1));
  cards.forEach((card, index) => card.addEventListener("click", () => show(index)));

  carousel.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
  });
  window.addEventListener("pointerup", (event) => {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    const deltaX = event.clientX - pointerStart.x;
    const deltaY = event.clientY - pointerStart.y;
    pointerStart = null;
    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) return;
    show(activeIndex + (deltaX < 0 ? 1 : -1));
  });
  window.addEventListener("pointercancel", () => { pointerStart = null; });
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      show(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
    }
  });

  readMore?.addEventListener("click", () => {
    if (!moreText || !readMore) return;
    const expanded = readMore.getAttribute("aria-expanded") !== "true";
    readMore.setAttribute("aria-expanded", String(expanded));
    moreText.hidden = !expanded;
    readMore.textContent = expanded ? "Read Less" : "Read More";
  });

  window.addEventListener("resize", render, { passive: true });
  render();
})();
