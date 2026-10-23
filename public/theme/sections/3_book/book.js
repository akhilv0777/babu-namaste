/* ================================================================
   5. BOOK — VINTAGE HEIRLOOM KEEPSAKE EDITION
================================================================ */
let currentPage = 1;
let maxPages = 0;
let appData = [];

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

function toRoman(num) {
  return ROMAN_NUMERALS[num - 1] || String(num);
}

function renderBook(book) {
  const $container = $("#book");
  if (!$container.length || !book?.length) return;
  appData = book;
  maxPages = book.length;

  const htmlContent = book
    .map((p, i) => {
      const isLastPage = i === maxPages - 1;
      const isBackCover = isLastPage;

      const frontImage =
        p.frontContent.coverImg || p.frontContent.bgImage || p.frontContent.img || "";
      const backImage =
        p.backContent.backCoverImg ||
        p.backContent.bgImage ||
        p.backContent.img ||
        "";

      const frontPageNum = i * 2;
      const backPageNum = i * 2 + 1;

      const front = p.isCover
        ? `<div class="front vintage-cover" id="cover">
             <div class="vintage-cover-leather">
               <div class="vintage-cover-filigree">
                 <span class="vintage-corner vintage-corner-tl" aria-hidden="true"></span>
                 <span class="vintage-corner vintage-corner-tr" aria-hidden="true"></span>
                 <span class="vintage-corner vintage-corner-bl" aria-hidden="true"></span>
                 <span class="vintage-corner vintage-corner-br" aria-hidden="true"></span>
                 <span class="vintage-cover-kicker">${p.frontContent.chapter || "Keepsake Edition"}</span>
                 ${
                   frontImage
                     ? `<div class="vintage-cover-medallion">
                          <img src="${frontImage}" alt="" loading="eager" />
                        </div>`
                     : ""
                 }
                 <h1 class="cover-title">${p.frontContent.title || ""}</h1>
                 <div class="vintage-ornament" aria-hidden="true">✦ ─── ❦ ─── ✦</div>
                 <small class="vintage-cover-cta" onclick="goNext()">${p.frontContent.footer || "Tap to Open"}</small>
               </div>
             </div>
           </div>`
        : `<div class="front vintage-page vintage-page-right">
             <div class="vintage-page-inner">
               <span class="vintage-page-header" aria-hidden="true">❦ Keepsake Memories ❦</span>
               ${
                 p.frontContent.img
                   ? `<div class="vintage-photo-mount">
                        <img src="${p.frontContent.img}" class="photo-frame" alt="" loading="lazy" />
                      </div>`
                   : ""
               }
               <div class="vintage-ornament-sm" aria-hidden="true">─── ✦ ───</div>
               <p class="vintage-caption">${p.frontContent.text || ""}</p>
               <span class="vintage-page-number" aria-hidden="true">— ${toRoman(frontPageNum)} —</span>
             </div>
           </div>`;

      const back = isBackCover
        ? `<div class="back vintage-cover is-back-cover" id="back-cover">
             <div class="vintage-cover-leather">
               <div class="vintage-cover-filigree">
                 <span class="vintage-corner vintage-corner-tl" aria-hidden="true"></span>
                 <span class="vintage-corner vintage-corner-tr" aria-hidden="true"></span>
                 <span class="vintage-corner vintage-corner-bl" aria-hidden="true"></span>
                 <span class="vintage-corner vintage-corner-br" aria-hidden="true"></span>
                 <span class="vintage-cover-kicker">Finis · Anno Domini</span>
                 ${
                   backImage
                     ? `<div class="vintage-cover-medallion">
                          <img src="${backImage}" alt="" loading="lazy" />
                        </div>`
                     : ""
                 }
                 <h3 class="vintage-back-title">${p.backContent.title || "Forever Celebrated"}</h3>
                 <div class="vintage-ornament" aria-hidden="true">✦ ─── ❦ ─── ✦</div>
                 <p class="vintage-back-text">${p.backContent.text || ""}</p>
                 ${p.backContent.symbol ? `<span class="vintage-wax-seal" aria-hidden="true">${p.backContent.symbol}</span>` : ""}
               </div>
             </div>
           </div>`
        : `<div class="back vintage-page vintage-page-left">
             <div class="vintage-page-inner">
               <span class="vintage-page-header" aria-hidden="true">${p.backContent.title || "❦ A Golden Chapter ❦"}</span>
               ${
                  backImage
                   ? `<div class="vintage-photo-mount">
                        <img src="${backImage}" class="photo-frame" alt="" loading="lazy" />
                      </div>`
                   : ""
               }
               <div class="vintage-ornament-sm" aria-hidden="true">─── ✦ ───</div>
               <p class="vintage-caption">${p.backContent.text || ""}</p>
               <span class="vintage-page-number" aria-hidden="true">— ${toRoman(backPageNum)} —</span>
             </div>
           </div>`;

      return `<div class="page" id="${p.id}" style="z-index:${p.zIndex || maxPages - i}">${front}${back}</div>`;
    })
    .join("");

  $container.html(htmlContent);
  $container.off("click.vintageBook").on("click.vintageBook", ".page", function (e) {
    if ($(e.target).closest("[onclick]").length) return;
    const pageId = this.id;
    const pageNum = parseInt(pageId.replace("p", ""), 10);
    if (pageNum === currentPage) {
      goNext();
    } else if (pageNum === currentPage - 1) {
      goPrev();
    }
  });
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

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  if (prevBtn) {
    prevBtn.style.display = "inline-flex";
    prevBtn.disabled = currentPage <= 1;
    prevBtn.style.opacity = currentPage > 1 ? "1" : "0.38";
    prevBtn.style.pointerEvents = currentPage > 1 ? "auto" : "none";
  }
  if (nextBtn) {
    nextBtn.style.display = "inline-flex";
    nextBtn.disabled = currentPage > maxPages;
    nextBtn.style.opacity = currentPage <= maxPages ? "1" : "0.38";
    nextBtn.style.pointerEvents = currentPage <= maxPages ? "auto" : "none";
  }
}

function goNext() {
  if (currentPage > maxPages) return;
  const pageEl = document.getElementById(`p${currentPage}`);
  if (pageEl) pageEl.style.transform = "rotateY(-180deg)";
  currentPage++;
  updateBookState();
}

function goPrev() {
  if (currentPage <= 1) return;
  currentPage--;
  const pageEl = document.getElementById(`p${currentPage}`);
  if (pageEl) pageEl.style.transform = "rotateY(0deg)";
  updateBookState();
}

window.goNext = goNext;
window.goPrev = goPrev;

document.addEventListener("ssMainDataLoaded", (event) => {
  const allData = event.detail;
  if (allData && allData.book) {
    renderBook(allData.book);
  } else {
    console.warn("Book data is missing in data.json!");
  }
});

if (window.ssMainData?.book) {
  renderBook(window.ssMainData.book);
}

