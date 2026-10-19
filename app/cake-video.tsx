"use client";

import { useRef, useState } from "react";
import styles from "./cake-video.module.css";

export default function CakeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackError, setPlaybackError] = useState(false);

  const startVideo = async () => {
    try {
      await videoRef.current?.play();
      setPlaybackError(false);
    } catch {
      setPlaybackError(true);
    }
  };

  return (
    <section className={`section-full ${styles.section}`} id="cakeFinaleSection">
      <div className={styles.frame}>
        <video
          ref={videoRef}
          className={styles.video}
          playsInline
          preload="metadata"
          controls={false}
          aria-label="Birthday celebration video"
          onPlay={() => setIsPlaying(true)}
          onEnded={() => window.blowCandleAndReveal?.()}
        >
          <source src="/theme/assets/video/cake.mp4" type="video/mp4" />
        </video>
        {!isPlaying && (
          <div className={styles.thumbnail}>
            <img
              className={styles.thumbnailImage}
              src="/theme/assets/video/cake.jpg"
              alt=""
            />
            <button
              type="button"
              className={styles.playButton}
              onClick={startVideo}
              aria-label="Tap here to play the birthday video"
            >
              Tap here
            </button>
            {playbackError && (
              <p className={styles.error} role="alert">
                Video could not start. Tap here to try again.
              </p>
            )}
          </div>
        )}
      </div>
      <div
        className="grand-reveal hidden d-flex justify-content-center align-items-center"
        id="grandReveal"
      >
        <button
          type="button"
          className="grand-reveal-close"
          id="grandRevealClose"
          aria-label="Close celebration"
        >
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
        <canvas id="birthdayCanvas" aria-hidden="true" />
        <h1 className="firework-text text-center" id="grandRevealText" />
      </div>
    </section>
  );
}