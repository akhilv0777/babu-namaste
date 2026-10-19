let galleryRotationTimer;

function renderMagicalGallery(gallery) {
  const image = document.getElementById("galleryFeatureImage");
  const screenFill = document.getElementById("galleryScreenFill");
  const count = document.getElementById("galleryCount");
  const title = document.getElementById("galleryFeatureTitle");
  const note = document.getElementById("galleryFeatureNote");
  const progress = document.getElementById("galleryProgress");
  const previous = document.getElementById("galleryPrevious");
  const next = document.getElementById("galleryNext");
  if (!image || !gallery?.length) return;

  let activeIndex = 0;
  const renderActiveMemory = (transition = false) => {
    const memory = gallery[activeIndex];
    const updateFrame = () => {
      image.src = memory.src;
      image.alt = memory.frontNote || "A favorite memory";
      if (screenFill) screenFill.style.backgroundImage = `url("${memory.src}")`;
      if (count) count.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(gallery.length).padStart(2, "0")}`;
      if (title) title.textContent = memory.frontNote || "A memory to keep";
      if (note) note.textContent = memory.backNote || "A moment to remember";
      if (progress) progress.style.width = `${((activeIndex + 1) / gallery.length) * 100}%`;
      image.classList.remove("is-transitioning");
    };

    if (transition) {
      image.classList.add("is-transitioning");
      window.setTimeout(updateFrame, 240);
    } else {
      updateFrame();
    }
  };

  if (previous) previous.onclick = () => {
    activeIndex = (activeIndex - 1 + gallery.length) % gallery.length;
    renderActiveMemory(true);
  };
  if (next) next.onclick = () => {
    activeIndex = (activeIndex + 1) % gallery.length;
    renderActiveMemory(true);
  };

  renderActiveMemory();
  window.clearInterval(galleryRotationTimer);
  galleryRotationTimer = window.setInterval(() => {
    activeIndex = (activeIndex + 1) % gallery.length;
    renderActiveMemory(true);
  }, 5000);
  createFireflies();
}

function createFireflies() {
  const container = document.getElementById("firefly-container");
  if (!container || container.childElementCount) return;

  utils.idle(() => {
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < 18; index++) {
      const firefly = document.createElement("div");
      firefly.className = "firefly";
      firefly.style.left = `${Math.random() * 100}vw`;
      firefly.style.animationDuration = `${Math.random() * 5 + 5}s`;
      firefly.style.animationDelay = `${Math.random() * 5}s`;
      fragment.appendChild(firefly);
    }
    container.appendChild(fragment);
  });
}

document.addEventListener("ssMainDataLoaded", ({ detail }) => {
  renderMagicalGallery(detail?.magicalGallery);
});

if (window.ssMainData?.magicalGallery) {
  renderMagicalGallery(window.ssMainData.magicalGallery);
}
