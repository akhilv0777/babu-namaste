import type { CSSProperties } from "react";
import CakeVideo from "./cake-video";

export default function BirthdayContent() {
  return (
<>
  <div className="site-loader" id="siteLoader" role="status" aria-live="polite" aria-label="Getting your birthday surprise ready">
    <div className="site-loader-scene" aria-hidden="true">
      <span className="site-loader-moon" />
      <span className="site-loader-rain" />
      <svg className="site-loader-heart" viewBox="0 0 100 90">
        <path d="M50 87 8.2 46.7C-5.2 33.8-.8 11.9 16.4 4.4 29.1-1.2 42 4 50 15.2 58 4 70.9-1.2 83.6 4.4c17.2 7.5 21.6 29.4 8.2 42.3L50 87Z">
        </path>
      </svg>
    </div>
    <p className="site-loader-eyebrow">Saumya&apos;s birthday film</p>
    <p className="site-loader-title">A little birthday magic</p>
    <p className="site-loader-caption">is waiting just for you</p>
    <div className="site-loader-track" aria-hidden="true"><span /></div>
    <button className="site-loader-start" id="siteLoaderStart" type="button" disabled>
      <i className="fa-solid fa-play" aria-hidden="true" />
      <span>Click here to start</span>
    </button>
    <p className="site-loader-note" id="siteLoaderNote" aria-live="polite">Your story and music will begin together</p>
  </div>
  <div className="hero-section" id="heroSection" tabIndex={-1}>
    <div className="sky" />
    <div className="aurora" />
    <div className="moon" />
    <canvas className="stars-canvas" id="starsCanvas" />
    <div className="panorama-park" />
    <div className="night" />
    <canvas id="rippleCanvas" />
    <img className="mountain mountain-4" src="/theme/assets/images/mountain.png" alt="" />
    <img className="mountain mountain-3" src="/theme/assets/images/mountain.png" alt="" />
    <img className="mountain mountain-2" src="/theme/assets/images/mountain.png" alt="" />
    <img className="mountain mountain-1" src="/theme/assets/images/mountain.png" alt="" />
    <div className="thunder">
      <canvas id="canvas1" />
      <canvas id="canvas2" />
      <canvas id="canvas3" />
    </div>
    <div className="fireflies-layer" id="firefliesLayer" />
    <div className="clouds">
      <div className="cloud cloud--1" />
      <div className="cloud cloud--2" />
      <div className="cloud cloud--3" />
    </div>
    <div className="ground-glow" />
    <div className="bird-container bird-container--one">
      <div className="bird bird--one" />
    </div>
    <div className="bird-container bird-container--two">
      <div className="bird bird--two" />
    </div>
    <div className="bird-container bird-container--three">
      <div className="bird bird--three" />
    </div>
    <div className="flowers">
      <div className="flower flower--1">
        <div className="flower__leafs flower__leafs--1">
          <div className="flower__leaf flower__leaf--1" />
          <div className="flower__leaf flower__leaf--2" />
          <div className="flower__leaf flower__leaf--3" />
          <div className="flower__leaf flower__leaf--4" />
          <div className="flower__white-circle" />
          <div className="flower__light flower__light--1" />
          <div className="flower__light flower__light--2" />
          <div className="flower__light flower__light--3" />
          <div className="flower__light flower__light--4" />
          <div className="flower__light flower__light--5" />
          <div className="flower__light flower__light--6" />
          <div className="flower__light flower__light--7" />
          <div className="flower__light flower__light--8" />
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1" />
          <div className="flower__line__leaf flower__line__leaf--2" />
          <div className="flower__line__leaf flower__line__leaf--3" />
          <div className="flower__line__leaf flower__line__leaf--4" />
          <div className="flower__line__leaf flower__line__leaf--5" />
          <div className="flower__line__leaf flower__line__leaf--6" />
        </div>
      </div>
      <div className="flower flower--2">
        <div className="flower__leafs flower__leafs--2">
          <div className="flower__leaf flower__leaf--1" />
          <div className="flower__leaf flower__leaf--2" />
          <div className="flower__leaf flower__leaf--3" />
          <div className="flower__leaf flower__leaf--4" />
          <div className="flower__white-circle" />
          <div className="flower__light flower__light--1" />
          <div className="flower__light flower__light--2" />
          <div className="flower__light flower__light--3" />
          <div className="flower__light flower__light--4" />
          <div className="flower__light flower__light--5" />
          <div className="flower__light flower__light--6" />
          <div className="flower__light flower__light--7" />
          <div className="flower__light flower__light--8" />
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1" />
          <div className="flower__line__leaf flower__line__leaf--2" />
          <div className="flower__line__leaf flower__line__leaf--3" />
          <div className="flower__line__leaf flower__line__leaf--4" />
        </div>
      </div>
      <div className="flower flower--3">
        <div className="flower__leafs flower__leafs--3">
          <div className="flower__leaf flower__leaf--1" />
          <div className="flower__leaf flower__leaf--2" />
          <div className="flower__leaf flower__leaf--3" />
          <div className="flower__leaf flower__leaf--4" />
          <div className="flower__white-circle" />
          <div className="flower__light flower__light--1" />
          <div className="flower__light flower__light--2" />
          <div className="flower__light flower__light--3" />
          <div className="flower__light flower__light--4" />
          <div className="flower__light flower__light--5" />
          <div className="flower__light flower__light--6" />
          <div className="flower__light flower__light--7" />
          <div className="flower__light flower__light--8" />
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1" />
          <div className="flower__line__leaf flower__line__leaf--2" />
          <div className="flower__line__leaf flower__line__leaf--3" />
          <div className="flower__line__leaf flower__line__leaf--4" />
        </div>
      </div>
      <div className="grow-ans" style={{"--d": '1.2s'} as CSSProperties}>
        <div className="flower__g-long">
          <div className="flower__g-long__top" />
          <div className="flower__g-long__bottom" />
        </div>
      </div>
      <div className="growing-grass">
        <div className="flower__grass flower__grass--1">
          <div className="flower__grass--top" />
          <div className="flower__grass--bottom" />
          <div className="flower__grass__leaf flower__grass__leaf--1" />
          <div className="flower__grass__leaf flower__grass__leaf--2" />
          <div className="flower__grass__leaf flower__grass__leaf--3" />
          <div className="flower__grass__leaf flower__grass__leaf--4" />
          <div className="flower__grass__leaf flower__grass__leaf--5" />
          <div className="flower__grass__leaf flower__grass__leaf--6" />
          <div className="flower__grass__leaf flower__grass__leaf--7" />
          <div className="flower__grass__leaf flower__grass__leaf--8" />
          <div className="flower__grass__overlay" />
        </div>
      </div>
      <div className="growing-grass">
        <div className="flower__grass flower__grass--2">
          <div className="flower__grass--top" />
          <div className="flower__grass--bottom" />
          <div className="flower__grass__leaf flower__grass__leaf--1" />
          <div className="flower__grass__leaf flower__grass__leaf--2" />
          <div className="flower__grass__leaf flower__grass__leaf--3" />
          <div className="flower__grass__leaf flower__grass__leaf--4" />
          <div className="flower__grass__leaf flower__grass__leaf--5" />
          <div className="flower__grass__leaf flower__grass__leaf--6" />
          <div className="flower__grass__leaf flower__grass__leaf--7" />
          <div className="flower__grass__leaf flower__grass__leaf--8" />
          <div className="flower__grass__overlay" />
        </div>
      </div>
      <div className="grow-ans" style={{"--d": '2.4s'} as CSSProperties}>
        <div className="flower__g-right flower__g-right--1">
          <div className="leaf" />
        </div>
      </div>
      <div className="grow-ans" style={{"--d": '2.8s'} as CSSProperties}>
        <div className="flower__g-right flower__g-right--2">
          <div className="leaf" />
        </div>
      </div>
      <div className="grow-ans" style={{"--d": '2.8s'} as CSSProperties}>
        <div className="flower__g-front">
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
            <div className="flower__g-front__leaf" />
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
            <div className="flower__g-front__leaf" />
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
            <div className="flower__g-front__leaf" />
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
            <div className="flower__g-front__leaf" />
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
            <div className="flower__g-front__leaf" />
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
            <div className="flower__g-front__leaf" />
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
            <div className="flower__g-front__leaf" />
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
            <div className="flower__g-front__leaf" />
          </div>
          <div className="flower__g-front__line" />
        </div>
      </div>
      <div className="grow-ans" style={{"--d": '3.2s'} as CSSProperties}>
        <div className="flower__g-fr">
          <div className="leaf" />
          <div className="flower__g-fr__leaf flower__g-fr__leaf--1" />
          <div className="flower__g-fr__leaf flower__g-fr__leaf--2" />
          <div className="flower__g-fr__leaf flower__g-fr__leaf--3" />
          <div className="flower__g-fr__leaf flower__g-fr__leaf--4" />
          <div className="flower__g-fr__leaf flower__g-fr__leaf--5" />
          <div className="flower__g-fr__leaf flower__g-fr__leaf--6" />
          <div className="flower__g-fr__leaf flower__g-fr__leaf--7" />
          <div className="flower__g-fr__leaf flower__g-fr__leaf--8" />
        </div>
      </div>
      <div className="long-g long-g--0">
        <div className="grow-ans" style={{"--d": '3s'} as CSSProperties}>
          <div className="leaf leaf--0" />
        </div>
        <div className="grow-ans" style={{"--d": '2.2s'} as CSSProperties}>
          <div className="leaf leaf--1" />
        </div>
        <div className="grow-ans" style={{"--d": '3.4s'} as CSSProperties}>
          <div className="leaf leaf--2" />
        </div>
        <div className="grow-ans" style={{"--d": '3.6s'} as CSSProperties}>
          <div className="leaf leaf--3" />
        </div>
      </div>
      <div className="long-g long-g--1">
        <div className="grow-ans" style={{"--d": '3.6s'} as CSSProperties}>
          <div className="leaf leaf--0" />
        </div>
        <div className="grow-ans" style={{"--d": '3.8s'} as CSSProperties}>
          <div className="leaf leaf--1" />
        </div>
        <div className="grow-ans" style={{"--d": '4s'} as CSSProperties}>
          <div className="leaf leaf--2" />
        </div>
        <div className="grow-ans" style={{"--d": '4.2s'} as CSSProperties}>
          <div className="leaf leaf--3" />
        </div>
      </div>
      <div className="long-g long-g--2">
        <div className="grow-ans" style={{"--d": '4s'} as CSSProperties}>
          <div className="leaf leaf--0" />
        </div>
        <div className="grow-ans" style={{"--d": '4.2s'} as CSSProperties}>
          <div className="leaf leaf--1" />
        </div>
        <div className="grow-ans" style={{"--d": '4.4s'} as CSSProperties}>
          <div className="leaf leaf--2" />
        </div>
        <div className="grow-ans" style={{"--d": '4.6s'} as CSSProperties}>
          <div className="leaf leaf--3" />
        </div>
      </div>
      <div className="long-g long-g--3">
        <div className="grow-ans" style={{"--d": '4s'} as CSSProperties}>
          <div className="leaf leaf--0" />
        </div>
        <div className="grow-ans" style={{"--d": '4.2s'} as CSSProperties}>
          <div className="leaf leaf--1" />
        </div>
        <div className="grow-ans" style={{"--d": '3s'} as CSSProperties}>
          <div className="leaf leaf--2" />
        </div>
        <div className="grow-ans" style={{"--d": '3.6s'} as CSSProperties}>
          <div className="leaf leaf--3" />
        </div>
      </div>
      <div className="long-g long-g--4">
        <div className="grow-ans" style={{"--d": '4s'} as CSSProperties}>
          <div className="leaf leaf--0" />
        </div>
        <div className="grow-ans" style={{"--d": '4.2s'} as CSSProperties}>
          <div className="leaf leaf--1" />
        </div>
        <div className="grow-ans" style={{"--d": '3s'} as CSSProperties}>
          <div className="leaf leaf--2" />
        </div>
        <div className="grow-ans" style={{"--d": '3.6s'} as CSSProperties}>
          <div className="leaf leaf--3" />
        </div>
      </div>
      <div className="long-g long-g--5">
        <div className="grow-ans" style={{"--d": '4s'} as CSSProperties}>
          <div className="leaf leaf--0" />
        </div>
        <div className="grow-ans" style={{"--d": '4.2s'} as CSSProperties}>
          <div className="leaf leaf--1" />
        </div>
        <div className="grow-ans" style={{"--d": '3s'} as CSSProperties}>
          <div className="leaf leaf--2" />
        </div>
        <div className="grow-ans" style={{"--d": '3.6s'} as CSSProperties}>
          <div className="leaf leaf--3" />
        </div>
      </div>
      <div className="long-g long-g--6">
        <div className="grow-ans" style={{"--d": '4.2s'} as CSSProperties}>
          <div className="leaf leaf--0" />
        </div>
        <div className="grow-ans" style={{"--d": '4.4s'} as CSSProperties}>
          <div className="leaf leaf--1" />
        </div>
        <div className="grow-ans" style={{"--d": '4.6s'} as CSSProperties}>
          <div className="leaf leaf--2" />
        </div>
        <div className="grow-ans" style={{"--d": '4.8s'} as CSSProperties}>
          <div className="leaf leaf--3" />
        </div>
      </div>
      <div className="long-g long-g--7">
        <div className="grow-ans" style={{"--d": '3s'} as CSSProperties}>
          <div className="leaf leaf--0" />
        </div>
        <div className="grow-ans" style={{"--d": '3.2s'} as CSSProperties}>
          <div className="leaf leaf--1" />
        </div>
        <div className="grow-ans" style={{"--d": '3.5s'} as CSSProperties}>
          <div className="leaf leaf--2" />
        </div>
        <div className="grow-ans" style={{"--d": '3.6s'} as CSSProperties}>
          <div className="leaf leaf--3" />
        </div>
      </div>
    </div>
  </div>
  <div className="hero-spacer" />
  <div className="section-full" id="blindsSection">
    <div className="box ">
      <div className="sleeping-sofa" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src="/theme/assets/video/sleep-girl.webm" type="video/webm" />
        </video>
      </div>
      <div className="chand" />
      <div className="box1" />
      <div className="box2" />
      <div className="box3" />
      <div className="box4" />
      <div className="box5" />
      <div className="window-bg frameleft-bg">
        <canvas id="canvas-left" />
        <span className="curtain-track" aria-hidden="true" />
      </div>
      <div className="window-bg framemiddle-bg">
        <canvas id="canvas-middle" />
        <span className="curtain-track" aria-hidden="true" />
      </div>
      <div className="window-bg frameright-bg">
        <canvas id="canvas-right" />
        <span className="curtain-track" aria-hidden="true" />
      </div>
      <div className="frameleft" />
      <div className="framemiddle" />
      <div className="frameright" />
      <div className="rug" />
      <div className="blinds-stool" aria-hidden="true">
        <span className="blinds-stool-seat" />
        <span className="blinds-stool-apron" />
        <span className="blinds-stool-leg blinds-stool-leg-left" />
        <span className="blinds-stool-leg blinds-stool-leg-right" />
        <span className="blinds-stool-stretcher" />
      </div>
      <div className="plant">🪴</div>
      <div className="cat">🐈</div>
      <div className="neon-sign">HAPPY<br />BIRTHDAY</div>
      <div className="painting-1" />
      <div className="painting-2" />
      <div className="aesthetic-lamp">
        <div className="lamp-glow-effect" />
        <div className="lamp-shade" />
        <div className="lamp-pole" />
        <div className="lamp-base" />
      </div>
      <div className="blinds-bird" id="blindsBird" aria-hidden="true">
        <svg viewBox="0 0 120 90">
          <path className="bird-tail" d="M38 51 8 43 24 57 8 65 42 64Z" />
          <g className="wing-left">
            <path d="M56 48C38 25 20 17 11 21c8 16 22 30 43 39Z" />
            <path className="wing-feather" d="M21 28 43 51M28 25 49 48M17 38 39 55" />
          </g>
          <g className="wing-right">
            <path d="M58 47C76 24 94 17 104 21c-8 16-22 30-43 39Z" />
            <path className="wing-feather" d="M94 28 72 51M87 25 66 48M98 38 76 55" />
          </g>
          <path className="bird-body" d="M37 55c2-15 18-25 36-24 15 1 25 10 23 20-2 12-17 19-34 18-12 0-21-5-25-14Z" />
          <path className="bird-neck" d="M77 43c0-13 5-22 15-23 9-1 14 6 12 14-2 8-9 13-19 15Z" />
          <circle className="bird-head" cx={94} cy={20} r={12} />
          <path className="bird-beak" d="m105 18 13 5-13 4Z" />
          <circle className="bird-eye" cx={98} cy={17} r="1.5" />
          <path className="bird-feet" d="m55 66-1 8m8-8 1 8m-12 0h7m2 0h7" />
        </svg>
      </div>
      <button className="blinds-letter" id="blindsLetter" type="button" aria-label="Your birthday letter will arrive shortly" aria-hidden="true" disabled>
        <svg viewBox="0 0 96 68" aria-hidden="true">
          <rect x={5} y={5} width={86} height={56} rx={4} className="envelope-paper" />
          <path d="m7 10 41 31L89 10" className="envelope-fold" />
          <path d="m7 57 28-23m54 23L61 34" className="envelope-corner" />
          <circle cx={48} cy={42} r={7} className="envelope-seal" />
          <path d="M45 42h6m-3-3v6" className="envelope-seal-mark" />
        </svg>
        <span className="blinds-letter-label">OPEN NOTE</span>
      </button>
      <dialog className="blinds-letter-dialog" id="blindsLetterDialog" aria-labelledby="blindsLetterTitle">
        <button className="blinds-letter-close" type="button" aria-label="Close birthday letter">×</button>
        <div className="blinds-letter-content">
          <p className="blinds-letter-eyebrow">A note carried through the rain</p>
          <h2 id="blindsLetterTitle">For Saumya, on your birthday</h2>
          <div className="blinds-letter-message">
            <p>Dear Saumya,</p>
            <p>Tonight, this little note found its way to you just to remind you how loved you are.</p>
            <p>Your warmth, your laughter, and the way you make ordinary moments feel special mean more than
              words can say. May the year ahead bring you new adventures, peaceful rainy evenings, big
              dreams, and a thousand reasons to smile.</p>
            <p>Keep being wonderfully you. Today is yours, and you deserve every bit of happiness it brings.
            </p>
          </div>
          <p className="blinds-letter-signoff">With love,<br /><strong>Your friends</strong></p>
        </div>
      </dialog>
    </div>
  </div>
  <section className="section-full s8-section" id="s8CoverSection">
    <div className="s8-stage">
      <div className="s8">
        <div className="bg">
          {/* ================= SECTION 0: COVER ================= */}
          <div className="wrap" id="s8Cover">
            <div className="lightCursor" />
            <div className="corner">
              <div className="content" id="s8Main">
                {/* COVER: TEXT AT THE CORNERS */}
                <span>candles</span>
                <span>cake</span>
                <span>wishes</span>
                <span>for you</span>
              </div>
              <div className="cross" />
              <div className="circle" />
              {/* COVER: SLIDESHOW IN THE BACKGROUND */}
              <div className="bgSlides">
                <div className="bgSlide" style={{backgroundImage: 'url("/theme/assets/images/ss%20(19).jpg")'} as CSSProperties}>
                </div>
                <div className="bgSlide" style={{backgroundImage: 'url("/theme/assets/images/ss%20(20).jpg")'} as CSSProperties}>
                </div>
                <div className="bgSlide" style={{backgroundImage: 'url("/theme/assets/images/ss%20(21).jpg")'} as CSSProperties}>
                </div>
                <div className="bgSlide" style={{backgroundImage: 'url("/theme/assets/images/ss%20(22).jpg")'} as CSSProperties}>
                </div>
              </div>
              <div className="collage">
                {/* COVER: NAME IN THE BACKGROUND */}
                <div className="bgTitle" style={{fontSize: 330} as CSSProperties}>HAPPY <br /> BIRTHDAY</div>
                {/* COVER: NAME */}
                <div className="nameTitle" data-text="Saumya">Saumya</div>
                {/* COVER: PICTURE IN THE MIDDLE */}
                <div className="portrait" style={{"--img": 'url("/theme/assets/images/ss%20(19).jpg")'} as CSSProperties}>
                  <div className="pic" />
                </div>
                <img className="collageRose" src="https://64.media.tumblr.com/541d43e480e0fd9780c3ffd402f7b6ff/23a070e9b7c8229a-e3/s1280x1920/123f7eb236784d5c492ceb5281c89a443e6c8c5a.pnj" alt="" />
                {/* COVER: PICTURE ON THE RIGHT */}
                <div className="collageBox" style={{"--img": 'url("/theme/assets/images/ss%20(20).jpg")'} as CSSProperties} />
                <img className="collageRose2" src="https://64.media.tumblr.com/edf052aee9025d834d8b175f81da01ef/1a953e2a49b01f0a-61/s500x750/059c2af4e3f499f22a13f6383bd4d31e893a3102.pnj" alt="" />
                {/* COVER: PICTURE ON THE LEFT */}
                <div className="collageBoxSecond" style={{"--img": 'url("/theme/assets/images/ss%20(21).jpg")'} as CSSProperties}>
                  <img className="collageRose3" src="https://64.media.tumblr.com/69a4539c2dc4b5e3f54ec2a8393e3c35/23a070e9b7c8229a-98/s1280x1920/90d95cab233e9e8368549fe8d277871a32697606.pnj" alt="" />
                  <img className="collageRose4" src="https://64.media.tumblr.com/0782ca8dfa7165fa91e17a6ad45ef33e/23a070e9b7c8229a-9d/s1280x1920/4a6fb90a6a93545722b143f49c0641d05309ef41.pnj" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-full s8-section" id="s8OverviewSection">
    <div className="s8-stage">
      <div className="s8">
        <div className="bg">
          {/* ================= SECTION 1: OVERVIEW ================= */}
          <div className="wrap" id="s8Section1">
            <div className="content" id="s8Content1">
              <div className="contentBox">
                <div className="contentBg" style={{"--img": 'url("/theme/assets/images/ss%20(49).jpg")'} as CSSProperties} />
                {/* OVERVIEW: PORTRAIT */}
                <div className="overviewPortrait" style={{"--img": 'url("/theme/assets/images/ss%20(20).jpg")'} as CSSProperties}>
                </div>
                {/* OVERVIEW: TITLE */}
                <div className="overviewTitle">
                  <span>Today is all about you</span>
                  <b>HAPPY<br />BIRTHDAY</b>
                  <p>“Wishing you a year filled with joy, laughter, and lovely surprises.”</p>
                  <img src="https://64.media.tumblr.com/0782ca8dfa7165fa91e17a6ad45ef33e/23a070e9b7c8229a-9d/s1280x1920/4a6fb90a6a93545722b143f49c0641d05309ef41.pnj" className="overviewRose" alt="" />
                </div>
                {/* OVERVIEW: PICTURES RIGHT */}
                <div className="miniStack">
                  <div style={{"--img": 'url("/theme/assets/images/ss%20(25).jpg")'} as CSSProperties}>
                  </div>
                  <div style={{"--img": 'url("/theme/assets/images/ss%20(22).jpg")'} as CSSProperties}>
                  </div>
                </div>
                {/* OVERVIEW: FIRST TEXTBOX */}
                <div className="textPanel">
                  <h2>A wish for Saumya</h2>
                  <div className="textPanelScroll">
                    May your birthday bring your favorite people close, your favorite cake to the
                    table, and a
                    hundred little reasons to smile. Here&apos;s to new adventures, warm memories, and a
                    year that feels
                    as wonderful as you are.
                  </div>
                </div>
                {/* OVERVIEW: MUSIC PLAYER */}
                <div className="essencePanel">
                  <div className="musicPlayer">
                    <div className="musicCover" style={{"--img": 'url(https://m.media-amazon.com/images/I/71ByzsgT94L._AC_UF894,1000_QL80_.jpg)'} as CSSProperties}>
                    </div>
                    <div className="musicInfo">
                      <b data-s8-track-title>Birthday Playlist</b>
                      <span data-s8-track-count>Track 1 of 3</span>
                    </div>
                    <div className="musicControls">
                      <button className="musicTransport" type="button" data-s8-previous aria-label="Previous track" title="Previous track">|◀</button>
                      <button className="musicPlay" type="button" data-s8-play aria-label="Play music">▶</button>
                      <button className="musicTransport" type="button" data-s8-next aria-label="Next track" title="Next track">▶|</button>
                    </div>
                    <div className="musicProgress"><span /></div>
                    <div className="musicVolume">
                      <span>vol</span>
                      <input type="range" min={0} max={1} step="0.01" defaultValue="0.15" data-s8-vol />
                    </div>
                    <audio className="songAudio" preload="auto" data-playlist="[{&quot;title&quot;:&quot;Saumya's Birthday Song&quot;,&quot;youtubeId&quot;:&quot;nA5Dl0gQeI0&quot;}]" />
                  </div>
                </div>
                {/* OVERVIEW: ABOUT */}
                <div className="aboutPanel">
                  <h2>Birthday wishes</h2>
                  <div className="aboutPanelScroll">
                    Keep shining, keep laughing, and keep being wonderfully you. May this new year
                    of life be full
                    of kind people, exciting plans, peaceful rainy nights, and dreams coming true.
                  </div>
                  <span>Happy Birthday, Saumya!</span>
                </div>
                {/* OVERVIEW: MIDDLE TEXT (ALMOST INVISIBLE) */}
                <div className="loreScript">a midnight birthday, a sky full of rain, and a heart full of
                  wishes</div>
                {/* OVERVIEW: MIDDLE CLOCK */}
                <div className="midnightClock">
                  <div className="clockGlow" />
                  <div className="clockInner">
                    <div className="s8Moon">☾</div>
                    <div className="time" id="s8Clock">00:00</div>
                  </div>
                </div>
                {/* OVERVIEW: MIDDLE PICTURE */}
                <div className="middlePic" style={{"--img": 'url("/theme/assets/images/ss%20(23).jpg")'} as CSSProperties} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-full s8-section" id="s8FriendSection">
    <div className="s8-stage">
      <div className="s8">
        <div className="bg">
          <div className="wrap" id="s8FriendFrame">
            <div className="content" id="s8FriendContent">
              <div className="contentBox connectionsPage">
                <div className="contentBg" style={{"--img": 'url("/theme/assets/images/ss%20(49).jpg")'} as CSSProperties} />
                <div className="connectionAura" />
                <div className="connectionTitle">
                  <span>today we celebrate</span>
                  <b>SAUMYA</b>
                  <p>One very special birthday for one very wonderful friend.</p>
                </div>
                <div className="relationCard active" id="s8Rel3">
                  <div className="relationPortrait" style={{"--img": 'url("/theme/assets/images/ss%20(20).jpg")'} as CSSProperties}>
                  </div>
                  <div className="relationInfo">
                    <em>Birthday girl</em>
                    <h2>Saumya</h2>
                    <blockquote>“The world is brighter with you in it. Happy Birthday!”</blockquote>
                    <div className="relationText">
                      Here&apos;s to the friend who makes ordinary days feel special and every
                      get-together more fun.
                      I hope your birthday is full of your favorite people, heartfelt wishes,
                      delicious cake, and
                      all the love you give so freely to everyone around you.<br /><br />
                      May the year ahead be kind to you, bring your biggest dreams a little
                      closer, and give us
                      many more memories to laugh about together. Have the happiest birthday,
                      Saumya!
                    </div>
                  </div>
                  <div className="relationAesthetic">
                    <div style={{"--img": 'url("/theme/assets/images/ss%20(21).jpg")'} as CSSProperties} />
                    <div style={{"--img": 'url("/theme/assets/images/ss%20(22).jpg")'} as CSSProperties} />
                    <div style={{"--img": 'url("/theme/assets/images/ss%20(23).jpg")'} as CSSProperties} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-full cinema-carousel-section message-carousel-section" id="messageCarouselSection">
    <span className="message-carousel-side-note" aria-hidden="true">A LITTLE NOTE FOR SAUMYA · KEEP DRAGGING ·</span>
    <span className="message-carousel-monogram" aria-hidden="true">S</span>
    <div className="message-carousel" aria-label="Birthday wishes carousel" aria-roledescription="carousel" tabIndex={0}>
      <button className="message-card" type="button" data-index={0} aria-label="1 of 10: Hi Saumya" aria-pressed="false">
        <img src="/theme/assets/images/ss%20(36).jpg" alt="" loading="eager" decoding="async" draggable="false" />
        <span className="message-card-shade" />
        <span className="message-card-count">01</span>
        <span className="message-card-copy">
          <span className="message-card-title">Hi Saumya</span>
          <span className="message-card-emoji" aria-hidden="true">👋</span>
        </span>
      </button>
      <button className="message-card" type="button" data-index={1} aria-label="2 of 10: A little something for you" aria-pressed="false">
        <img src="/theme/assets/images/ss%20(37).jpg" alt="" loading="eager" decoding="async" draggable="false" />
        <span className="message-card-shade" />
        <span className="message-card-count">02</span>
        <span className="message-card-copy">
          <span className="message-card-title">A little something for you</span>
          <span className="message-card-emoji" aria-hidden="true">💌</span>
        </span>
      </button>
      <button className="message-card" type="button" data-index={2} aria-label="3 of 10: Keep smiling" aria-pressed="false">
        <img src="/theme/assets/images/ss%20(38).jpg" alt="" loading="eager" decoding="async" draggable="false" />
        <span className="message-card-shade" />
        <span className="message-card-count">03</span>
        <span className="message-card-copy">
          <span className="message-card-title">Keep smiling</span>
          <span className="message-card-emoji" aria-hidden="true">😊</span>
        </span>
      </button>
      <button className="message-card" type="button" data-index={3} aria-label="4 of 10: You are amazing" aria-pressed="false">
        <img src="/theme/assets/images/ss%20(39).jpg" alt="" loading="eager" decoding="async" draggable="false" />
        <span className="message-card-shade" />
        <span className="message-card-count">04</span>
        <span className="message-card-copy">
          <span className="message-card-title">You are amazing</span>
          <span className="message-card-emoji" aria-hidden="true">🤩</span>
        </span>
      </button>
      <button className="message-card" type="button" data-index={4} aria-label="5 of 10: The most beautiful person" aria-pressed="true">
        <img src="/theme/assets/images/ss%20(40).jpg" alt="" loading="eager" decoding="async" draggable="false" />
        <span className="message-card-shade" />
        <span className="message-card-count">05</span>
        <span className="message-card-copy">
          <span className="message-card-title">The most beautiful person</span>
          <span className="message-card-emoji" aria-hidden="true">💯</span>
        </span>
      </button>
      <button className="message-card" type="button" data-index={5} aria-label="6 of 10: And the cutest" aria-pressed="false">
        <img src="/theme/assets/images/ss%20(41).jpg" alt="" loading="eager" decoding="async" draggable="false" />
        <span className="message-card-shade" />
        <span className="message-card-count">06</span>
        <span className="message-card-copy">
          <span className="message-card-title">And the cutest</span>
          <span className="message-card-emoji" aria-hidden="true">🎀</span>
        </span>
      </button>
      <button className="message-card" type="button" data-index={6} aria-label="7 of 10: Since I met you" aria-pressed="false">
        <img src="/theme/assets/images/ss%20(42).jpg" alt="" loading="eager" decoding="async" draggable="false" />
        <span className="message-card-shade" />
        <span className="message-card-count">07</span>
        <span className="message-card-copy">
          <span className="message-card-title">Since I met you</span>
          <span className="message-card-emoji" aria-hidden="true">✨</span>
        </span>
      </button>
      <button className="message-card" type="button" data-index={7} aria-label="8 of 10: I feel lucky every day" aria-pressed="false">
        <img src="/theme/assets/images/ss%20(43).jpg" alt="" loading="eager" decoding="async" draggable="false" />
        <span className="message-card-shade" />
        <span className="message-card-count">08</span>
        <span className="message-card-copy">
          <span className="message-card-title">I feel lucky every day</span>
          <span className="message-card-emoji" aria-hidden="true">😇</span>
        </span>
      </button>
      <button className="message-card" type="button" data-index={8} aria-label="9 of 10: I have a little crush" aria-pressed="false">
        <img src="/theme/assets/images/ss%20(44).jpg" alt="" loading="eager" decoding="async" draggable="false" />
        <span className="message-card-shade" />
        <span className="message-card-count">09</span>
        <span className="message-card-copy">
          <span className="message-card-title">I have a little crush</span>
          <span className="message-card-emoji" aria-hidden="true">🥰</span>
        </span>
      </button>
      <button className="message-card" type="button" data-index={9} aria-label="10 of 10: Happy birthday, Saumya" aria-pressed="false">
        <img src="/theme/assets/images/ss%20(45).jpg" alt="" loading="eager" decoding="async" draggable="false" />
        <span className="message-card-shade" />
        <span className="message-card-count">10</span>
        <span className="message-card-copy">
          <span className="message-card-title">Happy birthday, Saumya</span>
          <span className="message-card-emoji" aria-hidden="true">❤️</span>
        </span>
      </button>
    </div>
  </section>
  <section className="section-full" id="magicalGallerySection">
    <div className="gallery-rain-backdrop" aria-hidden="true">
      <room>
        <wall>
          <u /><u /><u /><u />
        </wall>
        <wall />
        <wall />
        <wall />
        <wall />
        <light><u /><u /><u /><u /><u><u /><u /><u /></u></light>
      </room>
    </div>
    <div className="gallery-lightning-ambience" aria-hidden="true" />
    <div className="gallery-window-view gallery-window-view--left" aria-hidden="true">
      <canvas id="gallery-canvas-left" />
    </div>
    <div className="gallery-window-view gallery-window-view--right" aria-hidden="true">
      <canvas id="gallery-canvas-right" />
    </div>
    <div className="gallery-balloons" aria-hidden="true">
      <span className="gallery-balloon gallery-balloon--pink" />
      <span className="gallery-balloon gallery-balloon--gold" />
      <span className="gallery-balloon gallery-balloon--blue" />
      <span className="gallery-balloon gallery-balloon--purple" />
      <span className="gallery-balloon gallery-balloon--red" />
      <span className="gallery-balloon gallery-balloon--teal" />
      <span className="gallery-balloon gallery-balloon--gold" />
      <span className="gallery-balloon gallery-balloon--pink" />
      <span className="gallery-balloon gallery-balloon--blue" />
      <span className="gallery-balloon gallery-balloon--red" />
      <span className="gallery-balloon gallery-balloon--gold" />
      <span className="gallery-balloon gallery-balloon--purple" />
      <span className="gallery-balloon gallery-balloon--teal" />
      <span className="gallery-balloon gallery-balloon--pink" />
      <span className="gallery-balloon gallery-balloon--red" />
      <span className="gallery-balloon gallery-balloon--blue" />
    </div>
    <div className="gallery-candle-holder" aria-hidden="true">
      <div className="gallery-candle">
        <div className="gallery-candle-blinking-glow" />
        <div className="gallery-candle-thread" />
        <div className="gallery-candle-glow" />
        <div className="gallery-candle-flame" />
      </div>
    </div>
    <div id="firefly-container" aria-hidden="true" />
    <figure className="gallery-image-frame" aria-live="polite">
      <div className="gallery-screen-fill" id="galleryScreenFill" aria-hidden="true" />
      <img className="gallery-feature-image" id="galleryFeatureImage" alt="" />
    </figure>
  </section>
  <section className="section-full s8-section" id="s8GallerySection">
    <div className="s8-stage">
      <div className="s8">
        <div className="bg">
          {/* ================= SECTION 4: GALLERY ================= */}
          <div className="wrap" id="s8Section4">
            <div className="content" id="s8Content4">
              <div className="contentBox galleryPage">
                <div className="contentBg" style={{"--img": 'url("/theme/assets/images/ss%20(49).jpg")'} as CSSProperties} />
                <div className="galleryScroll">
                  {/* GALLERY - TITLE */}
                  <div className="galleryHero">
                    <span>little moments, big smiles</span>
                    <b>BIRTHDAY MEMORIES</b>
                    <p>A gallery of your favorite people, moments, and birthday magic.</p>
                  </div>
                  <div className="galleryGrid">
                    <div className="galleryItem big" style={{"--img": 'url("/theme/assets/images/ss%20(20).jpg")'} as CSSProperties}>
                      <div><b>A favorite memory</b><span>01 / birthday joy</span></div>
                    </div>
                    <div className="galleryItem tall" style={{"--img": 'url("/theme/assets/images/ss%20(21).jpg")'} as CSSProperties}>
                      <div><b>Our happy moments</b><span>02 / best memories</span></div>
                    </div>
                    <div className="galleryItem" style={{"--img": 'url("/theme/assets/images/ss%20(22).jpg")'} as CSSProperties}>
                      <div><b>Birthday smiles</b><span>03 / pure happiness</span></div>
                    </div>
                    <div className="galleryItem" style={{"--img": 'url("/theme/assets/images/ss%20(23).jpg")'} as CSSProperties}>
                      <div><b>Midnight wishes</b><span>04 / make a wish</span></div>
                    </div>
                    <div className="galleryItem wide">
                      <div><b>Birthday roses</b><span>05 / with love</span></div>
                    </div>
                    <div className="galleryItem" style={{"--img": 'url("/theme/assets/images/ss%20(24).jpg")'} as CSSProperties}>
                      <div><b>Party time</b><span>06 / good company</span></div>
                    </div>
                    <div className="galleryItem" style={{"--img": 'url("/theme/assets/images/ss%20(25).jpg")'} as CSSProperties}>
                      <div><b>Candlelight glow</b><span>07 / birthday night</span></div>
                    </div>
                    <div className="galleryItem tall" style={{"--img": 'url("/theme/assets/images/ss%20(26).jpg")'} as CSSProperties}>
                      <div><b>Rainy birthday night</b><span>08 / cozy wishes</span></div>
                    </div>
                    <div className="galleryItem wide" style={{"--img": 'url("/theme/assets/images/ss%20(27).jpg")'} as CSSProperties}>
                      <div><b>Make a wish</b><span>09 / candlelight</span></div>
                    </div>
                    <div className="galleryItem" style={{"--img": 'url("/theme/assets/images/ss%20(28).jpg")'} as CSSProperties}>
                      <div><b>A slice of happiness</b><span>10 / birthday cake</span></div>
                    </div>
                    <div className="galleryItem" style={{"--img": 'url("/theme/assets/images/ss%20(29).jpg")'} as CSSProperties}>
                      <div><b>Party lights</b><span>11 / let it shine</span></div>
                    </div>
                    <div className="galleryItem big" style={{"--img": 'url("/theme/assets/images/ss%20(30).jpg")'} as CSSProperties}>
                      <div><b>One more birthday wish</b><span>12 / all for you</span></div>
                    </div>
                    <div className="galleryItem" style={{"--img": 'url("/theme/assets/images/ss%20(31).jpg")'} as CSSProperties}>
                      <div><b>Birthday balloons</b><span>13 / floating joy</span></div>
                    </div>
                    <div className="galleryItem" style={{"--img": 'url("/theme/assets/images/ss%20(32).jpg")'} as CSSProperties}>
                      <div><b>Wishes come true</b><span>14 / a new year</span></div>
                    </div>
                    <div className="galleryItem wide" style={{"--img": 'url("/theme/assets/images/ss%20(33).jpg")'} as CSSProperties}>
                      <div><b>So much to celebrate</b><span>15 / today is yours</span></div>
                    </div>
                    <div className="galleryItem" style={{"--img": 'url("/theme/assets/images/ss%20(34).jpg")'} as CSSProperties}>
                      <div><b>Another year to shine</b><span>16 / brighter days</span></div>
                    </div>
                    <div className="galleryItem" style={{"--img": 'url("/theme/assets/images/ss%20(35).jpg")'} as CSSProperties}>
                      <div><b>Made with love</b><span>17 / happy birthday</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-full cinema-carousel-section memory-carousel-section" id="moreThanCarouselSection">
    <div className="memory-carousel-backdrop" aria-hidden="true">
      <img className="memory-backdrop-image" src="/theme/assets/images/ss%20(50).jpg" alt="" decoding="async" />
    </div>
    <div className="memory-carousel-quote">
      <span className="memory-quote-eyebrow">For your birthday</span>
      <h2 className="memory-quote-title">You are wonderful</h2>
      <p className="memory-quote-text">You make the world around you feel a little brighter. Keep being your lovely
        self. ✨</p>
      <p className="memory-quote-more" hidden>Happy birthday, Saumya. I hope the year ahead brings you the same joy
        you bring to everyone around you.</p>
      <button className="memory-read-more" type="button" aria-expanded="false">Read More</button>
    </div>
    <div className="memory-carousel" aria-label="Birthday photo memories" aria-roledescription="carousel" tabIndex={0}>
      <button className="memory-card" type="button" data-index={0} data-title="A little birthday magic" data-caption="You have a way of making every moment brighter." aria-label="Show memory 1: A little birthday magic" aria-pressed="true">
        <img src="/theme/assets/images/ss%20(50).jpg" alt="" loading="eager" decoding="async" draggable="false" />
      </button>
      <button className="memory-card" type="button" data-index={1} data-title="Your lovely smile" data-caption="The kind of smile that makes a whole day feel lighter." aria-label="Show memory 2: Your lovely smile" aria-pressed="false">
        <img src="/theme/assets/images/ss%20(52).jpg" alt="" loading="lazy" decoding="async" draggable="false" />
      </button>
      <button className="memory-card" type="button" data-index={2} data-title="A moment to keep" data-caption="Here is to the memories that always make us smile." aria-label="Show memory 3: A moment to keep" aria-pressed="false">
        <img src="/theme/assets/images/ss%20(54).jpg" alt="" loading="lazy" decoding="async" draggable="false" />
      </button>
      <button className="memory-card" type="button" data-index={3} data-title="Always unforgettable" data-caption="Some people make the ordinary feel extraordinary." aria-label="Show memory 4: Always unforgettable" aria-pressed="false">
        <img src="/theme/assets/images/ss%20(56).jpg" alt="" loading="lazy" decoding="async" draggable="false" />
      </button>
      <button className="memory-card" type="button" data-index={4} data-title="A beautiful story" data-caption="May your next chapter be full of little wonders." aria-label="Show memory 5: A beautiful story" aria-pressed="false">
        <img src="/theme/assets/images/ss%20(58).jpg" alt="" loading="lazy" decoding="async" draggable="false" />
      </button>
      <button className="memory-card" type="button" data-index={5} data-title="More joy ahead" data-caption="There are so many lovely moments still waiting for you." aria-label="Show memory 6: More joy ahead" aria-pressed="false">
        <img src="/theme/assets/images/ss%20(60).jpg" alt="" loading="lazy" decoding="async" draggable="false" />
      </button>
      <button className="memory-card" type="button" data-index={6} data-title="All for you" data-caption="Happy birthday, Saumya. Keep shining, always." aria-label="Show memory 7: All for you" aria-pressed="false">
        <img src="/theme/assets/images/ss%20(62).jpg" alt="" loading="lazy" decoding="async" draggable="false" />
      </button>
    </div>
    <div className="memory-carousel-navigation">
      <button className="memory-previous" type="button" aria-label="Previous memory"><span aria-hidden="true">←</span></button>
      <button className="memory-next" type="button" aria-label="Next memory"><span aria-hidden="true">→</span></button>
    </div>
    <span className="memory-carousel-caption" aria-live="polite">A little birthday magic</span>
  </section>
  <div className="section-full" id="spinSection">
    <div id="drag-container">
      <div id="spin-container">
        <p id="spinLabelText" />
      </div>
      <div id="ground" />
    </div>
  </div>
  <section className="section-full s8-section" id="s8AppearanceSection">
    <div className="s8-stage">
      <div className="s8">
        <div className="bg">
          {/* ================= SECTION 6: AESTHETIC / APPEARANCE ================= */}
          <div className="wrap" id="s8Section6">
            <div className="content" id="s8Content6">
              <div className="contentBox aestheticPage">
                <div className="contentBg" style={{"--img": 'url("/theme/assets/images/ss%20(49).jpg")'} as CSSProperties} />
                <div className="aestheticScroll">
                  {/* TITLE */}
                  <div className="appearanceHero">
                    <span>your special day</span>
                    <b>BIRTHDAY GLOW</b>
                    <p>candlelight, cozy rain, and a little extra sparkle</p>
                  </div>
                  {/* PORTRAIT */}
                  <div className="faceFrame" style={{"--img": 'url("/theme/assets/images/ss%20(27).jpg")'} as CSSProperties}>
                  </div>
                  {/* TEXTBOX */}
                  <div className="lookBook">
                    <h2>Set the birthday mood</h2>
                    <div className="lookScroll">
                      Dress up, light the candles, and let the birthday sparkle begin. Outside,
                      the rain paints
                      the windows midnight blue; inside, warm lights, favorite people, and a
                      little cake make the
                      night feel magical.<br /><br />
                      This is your moment to laugh loudly, make a wish, take the pictures, and
                      enjoy every bit of
                      being celebrated. May the glow of today follow you all year long.
                    </div>
                  </div>
                  {/* FEATURE SHEET */}
                  <div className="detailSheet">
                      <h2>Tonight&apos;s little details</h2>
                    <div className="detailScroll">
                      <div><b>Lights</b><span>Warm candle glow against the rainy night</span>
                      </div>
                      <div><b>Music</b><span>Your favorite songs and happy sing-alongs</span>
                      </div>
                      <div><b>Company</b><span>Your favorite people gathered close</span></div>
                      <div><b>Finishing touch</b><span>A wish, a candle, and a slice of
                          cake</span></div>
                    </div>
                  </div>
                  {/* PALETTE */}
                  <div className="diagonalPalette">
                    <span style={{"--swatch": '#050303'} as CSSProperties} />
                    <span style={{"--swatch": '#410b14'} as CSSProperties} />
                    <span style={{"--swatch": '#bd2440'} as CSSProperties} />
                    <span style={{"--swatch": '#d7b47a'} as CSSProperties} />
                    <span style={{"--swatch": '#d8c1b2'} as CSSProperties} />
                  </div>
                  {/* QUOTE */}
                  <div className="aestheticQuote">“May your birthday shine brighter than every candle on
                    your cake.”</div>
                  {/* ADORNMENT STRIP */}
                  <div className="styleStrip">
                    <h2>Birthday party favorites</h2>
                    <div className="styleGrid">
                      <div className="styleItem" style={{"--img": 'url("/theme/assets/images/ss%20(28).jpg")'} as CSSProperties}>
                        <span>Dress up</span>
                        <p>Wear something that makes you feel like the star of the celebration.
                        </p>
                      </div>
                      <div className="styleItem" style={{"--img": 'url("/theme/assets/images/ss%20(29).jpg")'} as CSSProperties}>
                        <span>Party sparkle</span>
                        <p>A little extra shine for your very special day.</p>
                      </div>
                      <div className="styleItem" style={{"--img": 'url("/theme/assets/images/ss%20(30).jpg")'} as CSSProperties}>
                        <span>Birthday cake</span>
                        <p>Sweet candles, pretty frosting, and your favorite flavor.</p>
                      </div>
                      <div className="styleItem" style={{"--img": 'url("/theme/assets/images/ss%20(31).jpg")'} as CSSProperties}>
                        <span>Decorations</span>
                        <p>Twinkling lights, balloons, and a touch of birthday magic.</p>
                      </div>
                      <div className="styleItem" style={{"--img": 'url("/theme/assets/images/ss%20(32).jpg")'} as CSSProperties}>
                        <span>Good company</span>
                        <p>Friends who make every laugh and memory even sweeter.</p>
                      </div>
                      <div className="styleItem" style={{"--img": 'url("/theme/assets/images/ss%20(33).jpg")'} as CSSProperties}>
                        <span>Birthday wishes</span>
                        <p>All the love and happiness you deserve, today and always.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-full s8-section" id="s8RpSection">
    <div className="s8-stage">
      <div className="s8">
        <div className="bg">
          {/* ================= SECTION 5: RP-LIST ================= */}
          <div className="wrap" id="s8Section5">
            <div className="content" id="s8Content5">
              <div className="contentBox rpPage">
                <div className="contentBg" style={{"--img": 'url("/theme/assets/images/ss%20(49).jpg")'} as CSSProperties} />
                <div className="rpScroll">
                  {/* RP-LIST: TITLE */}
                  <div className="rpHero">
                    <span>moments made for you</span>
                    <b>BIRTHDAY WISHES</b>
                    <p>A little collection of love, laughter, and hopes for your year ahead.</p>
                  </div>
                  <div className="rpList">
                    {/* RP1 */}
                    <div className="rpItem">
                      <div className="rpImage" style={{"--img": 'url("/theme/assets/images/ss%20(24).jpg")'} as CSSProperties}>
                      </div>
                      <div className="rpContent">
                        <em>birthday wish · midnight</em>
                        <h2>A year full of beautiful things</h2>
                        <blockquote>“May your days be bright and your dreams come true.”
                        </blockquote>
                        <div className="rpText">
                          Wishing you new adventures, familiar comforts, and a thousand small
                          moments that
                          make this year unforgettable. May happiness find you wherever you
                          go.
                        </div>
                        <div className="rpWriters">
                          <span>with</span>
                          <b>Saumya</b>
                          <b>Your friends</b>
                        </div>
                      </div>
                    </div>
                    {/* RP2 */}
                    <div className="rpItem">
                      <div className="rpImage" style={{"--img": 'url("/theme/assets/images/ss%20(25).jpg")'} as CSSProperties}>
                      </div>
                      <div className="rpContent">
                        <em>birthday memory · always</em>
                        <h2>All the laughter we share</h2>
                        <blockquote>“The best memories are still waiting to happen.”
                        </blockquote>
                        <div className="rpText">
                          Today is for celebrating you and every smile you bring into our
                          lives. Here&apos;s to
                          more stories, more laughter, and more days together in the year
                          ahead.
                        </div>
                        <div className="rpWriters">
                          <span>with</span>
                          <b>Saumya</b>
                          <b>Your besties</b>
                        </div>
                      </div>
                    </div>
                    {/* RP3 */}
                    <div className="rpItem">
                      <div className="rpImage" style={{"--img": 'url("/theme/assets/images/ss%20(26).jpg")'} as CSSProperties}>
                      </div>
                      <div className="rpContent">
                        <em>coming soon · your new year</em>
                        <h2>Every wish finds its way</h2>
                        <blockquote>“Keep dreaming big. Your next chapter is yours to write.”
                        </blockquote>
                        <div className="rpText">
                          Blow out the candles, make a wish, and step into another year
                          knowing how loved you
                          are. May it be filled with kindness, confidence, and wonderful
                          surprises.
                        </div>
                        <div className="rpWriters">
                          <span>with</span>
                          <b>Saumya</b>
                          <b>All who love you</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-full s8-section" id="s8AboutSection">
    <div className="s8-stage">
      <div className="s8">
        <div className="bg">
          {/* ================= SECTION 2: ABOUT ME ================= */}
          <div className="wrap" id="s8Section2">
            <div className="content" id="s8Content2">
              <div className="contentBox aboutPage">
                <div className="contentBg" style={{"--img": 'url("/theme/assets/images/ss%20(49).jpg")'} as CSSProperties} />
                <div className="aboutScroll">
                  {/* ABOUT ME - TITLE */}
                  <div className="aboutHero">
                    <span>a little note for you</span>
                    <b>HAPPY BIRTHDAY</b>
                    <p>“May your next trip around the sun be your happiest yet.”</p>
                  </div>
                  {/* ABOUT ME - BIG STORY BOX */}
                  <div className="storyCard">
                    <h2>A birthday letter</h2>
                    <div className="storyScroll">
                      Saumya, today is a celebration of you: your kind heart, your bright smile,
                      and all the joy
                      you bring to the people lucky enough to know you.
                      <br /><br />
                      May the year ahead bring new places to explore, favorite songs to sing along
                      to, and plenty
                      of moments that make you laugh until your cheeks hurt.
                      <br /><br />
                      On quiet rainy nights and bright sunny mornings alike, I hope you always
                      find a reason to
                      feel loved, celebrated, and proud of how far you&apos;ve come.
                      <br /><br />
                      Blow out your candles, make a wonderful wish, and save a big slice of cake.
                      You deserve all
                      the happiness this birthday can hold.
                    </div>
                  </div>
                  {/* ABOUT ME - TRAIT METER */}
                  <div className="traitWheel">
                    <h2>Wishes for your year</h2>
                    <div className="traitLine"><b>more laughter</b><span><i style={{left: '78%'} as CSSProperties} /></span><b>less worry</b></div>
                    <div className="traitLine"><b>new adventures</b><span><i style={{left: '72%'} as CSSProperties} /></span><b>cozy days</b></div>
                    <div className="traitLine"><b>big dreams</b><span><i style={{left: '80%'} as CSSProperties} /></span><b>sweet pauses</b></div>
                    <div className="traitLine"><b>good friends</b><span><i style={{left: '88%'} as CSSProperties} /></span><b>quiet time</b></div>
                    <div className="traitLine"><b>sunny moments</b><span><i style={{left: '70%'} as CSSProperties} /></span><b>rainy magic</b></div>
                    <div className="traitLine"><b>cake</b><span><i style={{left: '92%'} as CSSProperties} /></span><b>more
                        cake</b>
                    </div>
                    <div className="traitLine"><b>love</b><span><i style={{left: '94%'} as CSSProperties} /></span><b>always</b></div>
                  </div>
                  <div className="dosCard">
                    <h2>Birthday plans</h2>
                    <p><b>✦</b> Make a wish at midnight</p>
                    <p><b>✦</b> Eat an extra slice of cake</p>
                    <p><b>✦</b> Take lots of happy pictures</p>
                    <p><b>✦</b> Celebrate exactly your way</p>
                  </div>
                  <div className="dontCard">
                    <h2>Birthday rules</h2>
                    <p><b>✕</b> No counting the cake slices</p>
                    <p><b>✕</b> No saving the best wish for later</p>
                    <p><b>✕</b> No forgetting how loved you are</p>
                    <p><b>✕</b> No ordinary bedtime before the party</p>
                  </div>
                  <div className="hobbyGallery">
                    <h2>Birthday favorites</h2>
                    <div className="hobbyGrid">
                      <div className="hobbyItem">
                        <div style={{"--img": 'url("/theme/assets/images/ss%20(20).jpg")'} as CSSProperties}>
                        </div>
                        <span>birthday cake</span>
                      </div>
                      <div className="hobbyItem">
                        <div style={{"--img": 'url("/theme/assets/images/ss%20(21).jpg")'} as CSSProperties}>
                        </div>
                        <span>midnight wishes</span>
                      </div>
                      <div className="hobbyItem">
                        <div style={{"--img": 'url("/theme/assets/images/ss%20(22).jpg")'} as CSSProperties}>
                        </div>
                        <span>birthday roses</span>
                      </div>
                    </div>
                  </div>
                  <div className="quoteSlip">May every candle carry a wish that finds its way to you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="section-full" id="bookSection">
    <div className="book-container" id="book" />
    <div className="book-controls">
      <button id="prevBtn" className="btn-book btn-book-prev" aria-label="Previous"><i className="fa-solid fa-chevron-left" /></button>
      <button id="nextBtn" className="btn-book btn-book-next" aria-label="Next"><i className="fa-solid fa-chevron-right" /></button>
    </div>
  </div>
  <CakeVideo />
  <nav id="sideNav" className="side-nav" aria-label="Section navigation" />
  <div id="roseOverlay" className="rose-overlay" aria-hidden="true">
    <button className="close-rose" type="button" aria-label="Close rose"><i className="fa-solid fa-xmark" /></button>
    <div className="rose-container">
      <div className="glass" id="magicGlass" />
      <span className="glass-knob" aria-hidden="true" />
      <div className="rose-parts">
        <div className="rose-frame">
          <img className="rose-bloom-photo" src="https://media1.tenor.com/m/AI_1KAQmMogAAAAd/will-you-be-mine-will-you-be-my-girlfriend.gif" alt="Will you be mine?" />
        </div>
      </div>
    </div>
    <div className="revealed-text" id="roseText" />
  </div>
</>

  );
}
