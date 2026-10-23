function renderSpinner(spinner, spinLabel) {
  const container = byId("spin-container");
  if (!container || !spinner?.length) return;

  const pTag = container.querySelector("p");
  if (pTag && spinLabel) pTag.textContent = spinLabel;

  container.insertBefore(
    utils.buildFragment(spinner, ({ img }) => {
      const imgEl = utils.el("img");
      imgEl.src = img;
      imgEl.loading = "lazy";
      imgEl.decoding = "async";
      return imgEl;
    }),
    pTag,
  );

  lazyInit(byId("spinSection"), initSpinner);
}

function initSpinner() {
  const rotateSpeed = -60;
  const imgWidth = 120;
  const imgHeight = 170;
  const spinSection = byId("spinSection");
  const odrag = byId("drag-container");
  const ospin = byId("spin-container");
  if (!ospin || !odrag || !spinSection) return;

  const aEle = [
    ...ospin.getElementsByTagName("img"),
    ...ospin.getElementsByTagName("video"),
  ];
  const ground = byId("ground");
  const arrangeImages = () => {
    const scale = window.innerWidth <= 500 ? 0.75 : window.innerWidth <= 800 ? 0.85 : 1;
    const spreadFactor = window.innerWidth <= 500 ? 0.41 : window.innerWidth <= 800 ? 0.45 : 0.5;
    const radius = Math.min(240, Math.max(72, Math.round((window.innerWidth / scale - imgWidth) * spreadFactor)));
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";
    if (ground) ground.style.width = ground.style.height = radius * 3 + "px";

    aEle.forEach((el, i) => {
      el.style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
      el.style.transition = "transform 1s";
      el.style.transitionDelay = (aEle.length - i) / 4 + "s";
    });
  };
  arrangeImages();
  window.addEventListener("resize", arrangeImages, { passive: true });

  ospin.style.animation = `${rotateSpeed > 0 ? "spin" : "spinRevert"} ${Math.abs(rotateSpeed)}s infinite linear`;

  let sX,
    sY,
    nX,
    nY,
    desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

  const applyTransform = () => {
    tY = utils.clamp(tY, 0, 180);
    odrag.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
  };
  const playSpin = (yes) => {
    ospin.style.animationPlayState = yes ? "running" : "paused";
  };

  spinSection.onpointerdown = (e) => {
    clearInterval(odrag._timer);
    sX = e.clientX;
    sY = e.clientY;

    document.onpointermove = (e) => {
      nX = e.clientX;
      nY = e.clientY;
      desX = nX - sX;
      desY = nY - sY;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTransform();
      sX = nX;
      sY = nY;
    };

    document.onpointerup = () => {
      odrag._timer = setInterval(() => {
        desX *= 0.95;
        desY *= 0.95;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform();
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(odrag._timer);
          playSpin(true);
        }
      }, 17);
      document.onpointermove = document.onpointerup = null;
    };
    return false;
  };
}

document.addEventListener("ssMainDataLoaded", ({ detail }) => {
  renderSpinner(detail?.spinner, detail?.spinLabel);
});

if (window.ssMainData?.spinner) {
  renderSpinner(window.ssMainData.spinner, window.ssMainData.spinLabel);
}