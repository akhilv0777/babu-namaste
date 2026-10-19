/* ================================================================
   5. BOOK
================================================================ */
let currentPage = 1;
let maxPages = 0;
let appData = [];
/* ================================================================
   5. BOOK - FINAL FULLY DYNAMIC & RESPONSIVE CODE
   Use this in your book.js file
================================================================ */
function renderBook(book) {
  const $container = $("#book");
  if (!$container.length || !book?.length) return;
  appData = book;
  maxPages = book.length;

  let htmlContent = book
    .map((p, i) => {
      const isLastPage = i === maxPages - 1;
      const isCoverStyleBack = p.isCover || isLastPage;

      const frontImage =
        p.frontContent.coverImg || p.frontContent.bgImage || "";
      const frontBgStyle =
        p.isCover && frontImage
          ? `background-image: url('${frontImage}'); background-size: cover !important; background-position: center !important;`
          : "";

      const backImage =
        p.backContent.backCoverImg ||
        p.backContent.bgImage ||
        p.backContent.img ||
        "";
      const backBgStyle =
        isCoverStyleBack && backImage
          ? `background-image: url('${backImage}'); background-size: cover !important; background-position: center !important;`
          : "";

      const frontOverlay = frontImage ? "rgba(0, 0, 0, 0.66)" : "transparent";
      const backOverlay = backImage ? "rgba(0, 0, 0, 0.71)" : "transparent";

      // Generate HTML using Bootstrap 5 classes
      const front = p.isCover
        ? `<div class="front p-0 border-0" id="cover" style="${frontBgStyle}">
           <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center p-4 text-center" style="background-color: ${frontOverlay}; border-radius: inherit;">
               <h1 class="text-white fw-bold mb-3" style="font-size: clamp(1.5rem, 4vw, 2.2rem); text-shadow: 2px 2px 5px rgba(0,0,0,0.9);">${p.frontContent.title || ""}</h1>
               <p class="text-light fw-bold" style="font-size: clamp(0.9rem, 2.5vw, 1.2rem); text-shadow: 1px 1px 4px rgba(0,0,0,0.9);">${p.frontContent.chapter || ""}</p>
               <small class="mt-4 fw-bold" onclick="goNext()" style="cursor:pointer; color:#ffdd59; font-size: clamp(0.7rem, 2vw, 0.9rem); text-shadow: 1px 1px 3px rgba(0,0,0,0.8); text-transform: uppercase;">${p.frontContent.footer || ""}</small>
           </div>
         </div>`
        : `<div class="front d-flex flex-column justify-content-center align-items-center p-3 text-center">
           ${p.frontContent.img ? `<img src="${p.frontContent.img}" class="img-fluid rounded mb-3 photo-frame" loading="lazy">` : ""}
           <p class="text-dark" style="font-size: clamp(0.85rem, 2vw, 1rem);">${p.frontContent.text || ""}</p>
         </div>`;

      const back = isCoverStyleBack
        ? `<div class="back p-0 border-0" style="${backBgStyle}">
           <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center p-4 text-center" style="background-color: ${backOverlay}; border-radius: inherit;">
               <h3 class="text-white fw-bold" style="font-size: clamp(1.3rem, 3.5vw, 1.8rem); text-shadow: 2px 2px 5px rgba(0,0,0,0.9);">${p.backContent.title || ""}</h3>
               <p class="text-light mt-2" style="font-size: clamp(0.85rem, 2.2vw, 1.05rem); text-shadow: 1px 1px 4px rgba(0,0,0,0.9);">${p.backContent.text || ""}</p>
               ${p.backContent.symbol ? `<p class="fs-1 mt-3" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.9);">${p.backContent.symbol}</p>` : ""}
           </div>
         </div>`
        : `<div class="back d-flex flex-column justify-content-center align-items-center p-3 text-center">
           ${p.backContent.img ? `<img src="${p.backContent.img}" class="img-fluid rounded mb-3 photo-frame" loading="lazy">` : ""}
           <p class="text-dark" style="font-size: clamp(0.85rem, 2vw, 1rem);">${p.backContent.text || ""}</p>
         </div>`;

      return `<div class="page" id="${p.id}" style="z-index:${p.zIndex || maxPages - i}">${front}${back}</div>`;
    })
    .join("");

  $container.html(htmlContent);
  updateBookState();
}

function updateBookState() {
  appData.forEach((p, i) => {
    const el = document.getElementById(p.id);
    if (el) el.style.zIndex = i + 1 < currentPage ? i + 1 : maxPages - i + 10;
  });

  const bookContainer = document.querySelector(".book-container");
  if (bookContainer) {
    bookContainer.classList.toggle("closed-back", currentPage > maxPages);
    bookContainer.classList.toggle(
      "open-book",
      currentPage > 1 && currentPage <= maxPages,
    );
  }

  const show = (id, flag) => {
    const b = document.getElementById(id);
    if (b) b.style.display = flag ? "inline-block" : "none";
  };

  show("prevBtn", currentPage > 1);
  show("nextBtn", currentPage <= maxPages);
}

function goNext() {
  if (currentPage > maxPages) return;
  document.getElementById(`p${currentPage}`).style.transform =
    "rotateY(-180deg)";
  currentPage++;
  updateBookState();
}

function goPrev() {
  if (currentPage <= 1) return;
  currentPage--;
  document.getElementById(`p${currentPage}`).style.transform = "rotateY(0deg)";
  updateBookState();
}

document.addEventListener("ssMainDataLoaded", (event) => {
  const allData = event.detail;
  if (allData && allData.book) {
    renderBook(allData.book);
  } else {
    console.warn("Book data is missing in data.json!");
  }
});
