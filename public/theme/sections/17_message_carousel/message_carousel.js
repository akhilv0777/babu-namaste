(() => {
  const section = document.getElementById("messageCarouselSection");
  const carousel = section?.querySelector(".message-carousel");
  if (!section || !carousel) return;

  const cards = [...carousel.querySelectorAll(".message-card")];
  if (!cards.length) return;

  let activeIndex = Math.min(4, cards.length - 1);
  let pointerStart = null;

  const render = () => {
    const half = Math.floor(cards.length / 2);
    const step = Math.min(cards[0].offsetWidth * 0.76, carousel.clientWidth * 0.32);
    cards.forEach((card, index) => {
      const offset = ((index - activeIndex + cards.length + half) % cards.length) - half;
      const distance = Math.abs(offset);
      card.style.zIndex = String(cards.length - distance);
      card.style.opacity = distance > 3 ? "0" : String(1 - distance * 0.12);
      card.style.pointerEvents = distance > 2 ? "none" : "auto";
      card.style.filter = distance ? "brightness(0.72)" : "brightness(1)";
      card.style.transform = `translate(-50%, -50%) translateX(${offset * step}px) translateY(${distance * 8}px) rotateZ(${offset * -5}deg) scale(${Math.max(0.78, 1 - distance * 0.055)})`;
      card.setAttribute("aria-pressed", index === activeIndex ? "true" : "false");
      card.tabIndex = distance > 2 ? -1 : 0;
    });
  };

  const show = (index) => {
    activeIndex = (index + cards.length) % cards.length;
    render();
  };

  cards.forEach((card, index) => {
    card.addEventListener("click", () => show(index));
  });

  carousel.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
  });
  window.addEventListener("pointerup", (event) => {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    const deltaX = event.clientX - pointerStart.x;
    const deltaY = event.clientY - pointerStart.y;
    pointerStart = null;
    if (Math.abs(deltaX) < 35 || Math.abs(deltaX) < Math.abs(deltaY)) return;
    show(activeIndex + (deltaX < 0 ? 1 : -1));
  });
  window.addEventListener("pointercancel", () => { pointerStart = null; });
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      show(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
  window.addEventListener("resize", render, { passive: true });

  render();
})();
