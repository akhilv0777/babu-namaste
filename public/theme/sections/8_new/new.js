/* SECTION 8 - Lilith Moreau profile
   Everything lives inside one IIFE (no globals) and uses event delegation,
   so it can't clash with the other sections' scripts. */
(function () {
  'use strict';

  var sections = document.querySelectorAll('.s8-section');
  if (!sections.length) return;
  var NATIVE_WIDTH = 956;     /* 910 + 2*20 padding + 2*3 border */
  var SECTION_VERTICAL_PADDING = 80;

  /* ---------- scale the fixed-width design down on small screens ---------- */
  function fit(section) {
    var stage = section.querySelector('.s8-stage');
    var inner = section.querySelector('.s8');
    if (!stage || !inner || !stage.clientWidth || !inner.offsetHeight) return;
    var availableHeight = Math.max(0, window.innerHeight - SECTION_VERTICAL_PADDING);
    var s = Math.min(1, stage.clientWidth / NATIVE_WIDTH, availableHeight / inner.offsetHeight);
    inner.style.setProperty('--s8-scale', s);
    inner.setAttribute('data-scale', s);
    stage.style.height = s < 1 ? Math.ceil(inner.offsetHeight * s) + 'px' : '';
  }

  function fitAll() {
    sections.forEach(fit);
  }

  fitAll();
  window.addEventListener('resize', fitAll);
  window.addEventListener('load', fitAll);

  /* ---------- music player ---------- */
  var siteMusic = document.querySelector('.musicPlayer .songAudio');
  var siteMusicPlayer = siteMusic && siteMusic.closest('.musicPlayer');
  var playlist = [];
  var currentTrack = 0;
  var youtubeFrame = null;
  var youtubeActive = false;
  var youtubePlaying = false;

  function setYoutubeButton(isPlaying) {
    if (!siteMusicPlayer) return;
    var btn = siteMusicPlayer.querySelector('[data-s8-play]');
    if (!btn) return;
    btn.textContent = isPlaying ? '\u2161' : '\u25B6';
    btn.setAttribute('aria-label', isPlaying ? 'Pause music' : 'Play music');
  }

  function sendYoutubeCommand(func, args) {
    if (!youtubeFrame || !youtubeFrame.contentWindow) return;
    youtubeFrame.contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: func,
      args: args || []
    }), 'https://www.youtube.com');
  }

  function startYoutubeTrack(track) {
    if (!track || typeof track.youtubeId !== 'string') return false;
    youtubeActive = true;
    youtubePlaying = true;
    if (siteMusic) siteMusic.pause();

    if (!youtubeFrame) {
      youtubeFrame = document.createElement('iframe');
      youtubeFrame.className = 'youtube-background-player';
      youtubeFrame.title = 'Birthday background music';
      youtubeFrame.allow = 'autoplay; encrypted-media';
      youtubeFrame.referrerPolicy = 'strict-origin-when-cross-origin';
      youtubeFrame.tabIndex = -1;
      youtubeFrame.setAttribute('aria-hidden', 'true');
      var query = new URLSearchParams({
        autoplay: '1',
        controls: '0',
        enablejsapi: '1',
        loop: '1',
        playlist: track.youtubeId,
        playsinline: '1',
        origin: window.location.origin,
        rel: '0'
      });
      youtubeFrame.src = 'https://www.youtube.com/embed/' + encodeURIComponent(track.youtubeId) + '?' + query.toString();
      document.body.appendChild(youtubeFrame);
      youtubeFrame.addEventListener('load', function () {
        var volume = siteMusicPlayer && siteMusicPlayer.querySelector('[data-s8-vol]');
        sendYoutubeCommand('setVolume', [Math.round(Number(volume ? volume.value : 0.15) * 100)]);
      }, { once: true });
    } else {
      sendYoutubeCommand('loadVideoById', [track.youtubeId]);
      sendYoutubeCommand('playVideo');
    }

    var title = siteMusicPlayer && siteMusicPlayer.querySelector('[data-s8-track-title]');
    var count = siteMusicPlayer && siteMusicPlayer.querySelector('[data-s8-track-count]');
    if (title) title.textContent = track.title;
    if (count) count.textContent = 'YouTube';
    setYoutubeButton(true);
    return true;
  }

  window.startBirthdayMusic = function () {
    return startYoutubeTrack(playlist[currentTrack]);
  };

  if (siteMusic) {
    try {
      playlist = JSON.parse(siteMusic.getAttribute('data-playlist') || '[]');
    } catch (error) {
      console.error('Could not read the music playlist.', error);
    }
  }

  function bindAudio(player) {
    if (player.getAttribute('data-bound')) return;
    player.setAttribute('data-bound', '1');
    var audio = player.querySelector('.songAudio');
    var btn = player.querySelector('[data-s8-play]');
    var bar = player.querySelector('.musicProgress span');
    var vol = player.querySelector('[data-s8-vol]');
    var title = player.querySelector('[data-s8-track-title]');
    var count = player.querySelector('[data-s8-track-count]');
    if (vol) audio.volume = Number(vol.value);
    audio.addEventListener('timeupdate', function () {
      if (!youtubeActive && audio.duration) bar.style.width = (audio.currentTime / audio.duration * 100) + '%';
    });
    audio.addEventListener('play', function () {
      if (youtubeActive) return;
      btn.textContent = '\u2161';
      btn.setAttribute('aria-label', 'Pause music');
    });
    audio.addEventListener('pause', function () {
      if (youtubeActive) return;
      btn.textContent = '\u25B6';
      btn.setAttribute('aria-label', 'Play music');
    });
    audio.addEventListener('ended', function () {
      if (!youtubeActive) changeTrack(1, true);
    });

    if (title) title.textContent = playlist[currentTrack]?.title || 'Birthday Playlist';
    if (count) count.textContent = 'Track ' + (currentTrack + 1) + ' of ' + playlist.length;
  }

  function toggleSong(btn) {
    var player = btn.closest('.musicPlayer');
    var audio = player.querySelector('.songAudio');
    bindAudio(player);
    if (youtubeActive) {
      youtubePlaying = !youtubePlaying;
      sendYoutubeCommand(youtubePlaying ? 'playVideo' : 'pauseVideo');
      setYoutubeButton(youtubePlaying);
      return;
    }
    if (audio.paused) {
      var p = audio.play();
      if (p && p.catch) p.catch(function () { btn.textContent = '\u25B6'; });
    } else {
      audio.pause();
    }
  }

  function changeTrack(direction, shouldPlay) {
    if (!siteMusic || !siteMusicPlayer || !playlist.length) return;
    bindAudio(siteMusicPlayer);
    currentTrack = (currentTrack + direction + playlist.length) % playlist.length;
    var track = playlist[currentTrack];
    var title = siteMusicPlayer.querySelector('[data-s8-track-title]');
    var count = siteMusicPlayer.querySelector('[data-s8-track-count]');
    var progress = siteMusicPlayer.querySelector('.musicProgress span');

    if (track.youtubeId) {
      startYoutubeTrack(track);
      if (!shouldPlay) {
        youtubePlaying = false;
        sendYoutubeCommand('pauseVideo');
        setYoutubeButton(false);
      }
      if (progress) progress.style.width = '0%';
      return;
    }

    youtubeActive = false;
    youtubePlaying = false;
    siteMusic.pause();
    siteMusic.src = track.src;
    siteMusic.load();
    if (title) title.textContent = track.title;
    if (count) count.textContent = 'Track ' + (currentTrack + 1) + ' of ' + playlist.length;
    if (progress) progress.style.width = '0%';

    if (shouldPlay) {
      var playback = siteMusic.play();
      if (playback && playback.catch) {
        playback.catch(function () {
          siteMusicPlayer.querySelector('[data-s8-play]').textContent = '\u25B6';
        });
      }
    }
  }

  document.addEventListener('ssMainDataLoaded', function (event) {
    var configuredPlaylist = event.detail && event.detail.playlist;
    if (!Array.isArray(configuredPlaylist) || !configuredPlaylist.length ||
        configuredPlaylist.some(function (track) {
          return !track || typeof track.title !== 'string' ||
            (typeof track.src !== 'string' && typeof track.youtubeId !== 'string');
        })) {
      console.error('Birthday music playlist in site-data.json is invalid.');
      return;
    }

    playlist = configuredPlaylist;
    currentTrack = 0;
    if (siteMusic) {
      siteMusic.pause();
      if (playlist[0].src) {
        siteMusic.src = playlist[0].src;
        siteMusic.load();
      } else {
        siteMusic.removeAttribute('src');
      }
    }
    var title = siteMusicPlayer && siteMusicPlayer.querySelector('[data-s8-track-title]');
    var count = siteMusicPlayer && siteMusicPlayer.querySelector('[data-s8-track-count]');
    if (title) title.textContent = playlist[0].title;
    if (count) count.textContent = playlist[0].youtubeId ? 'YouTube' : 'Track 1 of ' + playlist.length;
  });

  if (siteMusic && siteMusicPlayer) {
    bindAudio(siteMusicPlayer);
  }

  sections.forEach(function (section) {
    var inner = section.querySelector('.s8');
    var clock = section.querySelector('#s8Clock');
    if (clock) {
      var lastClock = '';
      function tick() {
        var d = new Date();
        var t = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
        if (t !== lastClock) { clock.textContent = t; lastClock = t; }
      }
      tick();
      setInterval(tick, 1000);
    }

    section.addEventListener('click', function (e) {
      var play = e.target.closest('[data-s8-play]');
      if (play) toggleSong(play);
      if (e.target.closest('[data-s8-next]')) changeTrack(1, true);
      if (e.target.closest('[data-s8-previous]')) changeTrack(-1, true);
    });

    section.addEventListener('input', function (e) {
      var v = e.target.closest('[data-s8-vol]');
      if (!v) return;
      var audio = v.closest('.musicPlayer').querySelector('.songAudio');
      if (youtubeActive) {
        sendYoutubeCommand('setVolume', [Math.round(Number(v.value) * 100)]);
      } else {
        audio.volume = Number(v.value);
      }
    });

    var cover = section.querySelector('#s8Cover');
    var light = cover && cover.querySelector('.lightCursor');
    if (cover && light) {
      cover.addEventListener('mousemove', function (e) {
        var r = cover.getBoundingClientRect();
        var k = r.width / cover.offsetWidth || 1;
        light.style.left = ((e.clientX - r.left) / k) + 'px';
        light.style.top = ((e.clientY - r.top) / k) + 'px';
      });
    }

    if ('ResizeObserver' in window && inner) new ResizeObserver(function () { fit(section); }).observe(inner);
  });
})();
