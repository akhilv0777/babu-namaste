"use client";

import { useEffect, type ReactNode } from "react";

declare global {
  interface Window {
    ssMainData?: unknown;
    startBirthdayMusic?: () => boolean;
    ssThemeConfig?: { dataUrl: string };
    birthdayRuntimePromise?: Promise<void>;
    goNext?: () => void;
    goPrev?: () => void;
    blowCandleAndReveal?: () => void;
    closeGrandReveal?: () => void;
  }
}

const scripts = [
  "/theme/vendor/jquery.min.js",
  "/theme/vendor/jquery-migrate.min.js",
  "inline:window.$ = window.jQuery.noConflict();",
  "/theme/assets/js/bootstrap.bundle.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js",
  'inline:window.ssThemeConfig = { dataUrl: "/api/data" };',
  "/theme/assets/js/custom.js",
  "/theme/sections/1_hero/hero.js",
  "/theme/sections/2_blinds/blinds.js",
  "/theme/sections/3_book/book.js",
  "/theme/sections/5_spin/spin.js",
  "/theme/sections/6_magical_gallery/magical_gallery.js",
  "/theme/sections/7_cake/cake.js",
  "/theme/sections/8_new/new.js",
  "/theme/sections/17_message_carousel/message_carousel.js",
  "/theme/sections/18_more_than_carousel/more_than_carousel.js",
  "/theme/sections/footer_shell/shell.js",
];

async function loadBirthdayScripts() {
  for (const source of scripts) {
    if (source.startsWith("inline:")) {
      const script = document.createElement("script");
      script.textContent = source.slice("inline:".length);
      document.body.appendChild(script);
      continue;
    }

    await new Promise<void>((resolve) => {
      const script = document.createElement("script");
      script.src = source;
      script.onload = () => resolve();
      script.onerror = () => {
        console.error(`Birthday script failed to load: ${source}`);
        resolve();
      };
      document.body.appendChild(script);
    });
  }
}

export default function BirthdayExperience({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    window.birthdayRuntimePromise ??= loadBirthdayScripts();

    const loader = document.getElementById("siteLoader");
    const startButton = document.getElementById(
      "siteLoaderStart",
    ) as HTMLButtonElement | null;
    const note = document.getElementById("siteLoaderNote");
    if (!loader || !startButton || !note) return;

    let ready = false;
    let started = false;
    let pageLoaded = document.readyState === "complete";
    let dataLoaded = Boolean(window.ssMainData);

    const enableStart = () => {
      if (ready || started || !pageLoaded || !dataLoaded) return;
      ready = true;
      window.clearTimeout(safetyTimer);
      loader.classList.add("is-ready");
      startButton.disabled = false;
    };

    const handleDataLoaded = () => {
      dataLoaded = true;
      enableStart();
    };
    const handlePageLoaded = () => {
      pageLoaded = true;
      enableStart();
    };
    const safetyTimer = window.setTimeout(() => {
      if (!dataLoaded) {
        note.textContent = "Still getting your birthday surprise ready...";
        return;
      }
      pageLoaded = true;
      enableStart();
    }, 5500);

    window.addEventListener("load", handlePageLoaded, { once: true });
    document.addEventListener("ssMainDataLoaded", handleDataLoaded, {
      once: true,
    });

    const handleStart = () => {
      if (!ready || started) return;
      started = true;
      startButton.disabled = true;
      loader.classList.add("is-starting");
      if (typeof window.startBirthdayMusic === "function") {
        try {
          if (!window.startBirthdayMusic()) {
            note.textContent =
              "Music could not start. You can try the player in the birthday story.";
          }
        } catch (error) {
          console.error("Birthday music could not start from the welcome screen.", error);
          note.textContent =
            "Music did not start. You can try the player in the birthday story.";
        }
      } else {
        console.error("Birthday music player was not found.");
        note.textContent =
          "Music player unavailable. The birthday story will still begin.";
      }
      document.body.classList.remove("not-loaded");
      document.getElementById("heroSection")?.focus({ preventScroll: true });
      loader.setAttribute("aria-hidden", "true");
      loader.classList.add("is-hidden");
      window.setTimeout(() => loader.remove(), 2600);
    };

    startButton.addEventListener("click", handleStart);

    const handleDocumentClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      if (event.target.closest("#prevBtn")) window.goPrev?.();
      if (event.target.closest("#nextBtn")) window.goNext?.();
      if (event.target.closest("#grandRevealClose")) {
        window.closeGrandReveal?.();
      }
    };

    document.addEventListener("click", handleDocumentClick);
    enableStart();

    return () => {
      window.clearTimeout(safetyTimer);
      window.removeEventListener("load", handlePageLoaded);
      document.removeEventListener("ssMainDataLoaded", handleDataLoaded);
      document.removeEventListener("click", handleDocumentClick);
      startButton.removeEventListener("click", handleStart);
    };
  }, []);

  return <>{children}</>;
}