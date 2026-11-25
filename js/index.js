/* Page d'accueil : carte, liste des destinations, galerie d'albums. */
(function () {
  'use strict';
  const V = VOYAGES;
  const el = V.el.bind(V);
  const PLACES = V.places.filter(p => V.get(p.key));
  const PREVIEW_W = 220;
  const PREVIEW_H = 340;
  const finePointer = V.hasFinePointer();
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;

  const preview = document.getElementById('mapPreview');
  const previewTitle = preview.querySelector('.map-preview-title');
  const previewGrid = preview.querySelector('.map-preview-grid');
  const follower = finePointer ? V.createPreviewFollower(preview) : null;
  const mapInner = document.querySelector('.map-inner');
  const mapGoCta = document.getElementById('mapGoCta');
  const mapGoCtaBtn = document.getElementById('mapGoCtaBtn');
  const mapGoCtaDismiss = document.getElementById('mapGoCtaDismiss');

  let map = null;
  let hideTimer = null;
  let previewKey = null;
  let pendingGoKey = null;
  const pinEls = new Map();

  /* ── Statistiques ── */
  function renderStats() {
    const countries = new Set();
    let photos = 0;
    let videos = 0;
    PLACES.forEach(p => {
      const d = V.get(p.key);
      countries.add(d.country || d.meta);
      const c = V.counts(p.key);
      photos += c.photos;
      videos += c.videos;
    });
    document.getElementById('mCountries').textContent = countries.size;
    document.getElementById('mCities').textContent = PLACES.length;
    document.getElementById('mPhotos').textContent = photos;
    document.getElementById('mVideos').textContent = videos;
  }

  if (isCoarse) {
    document.getElementById('mapHint').textContent =
      'Touche une ville dans la liste · la carte zoome · puis « Ouvrir »';
  }

  /* ── Bouton « Ouvrir l'album » après sélection dans la liste ── */
  function hideGoCta() {
    pendingGoKey = null;
    mapGoCta.classList.remove('is-shown');
    mapGoCta.setAttribute('aria-hidden', 'true');
  }

  function showGoCta(key) {
    const place = V.place(key);
    if (!place) return;
    pendingGoKey = key;
    mapGoCtaBtn.textContent = 'Ouvrir ' + place.label + ' →';
    mapGoCta.classList.add('is-shown');
    mapGoCta.setAttribute('aria-hidden', 'false');
  }

  mapGoCtaBtn.addEventListener('click', () => { if (pendingGoKey) goVille(pendingGoKey); });
  mapGoCtaDismiss.addEventListener('click', hideGoCta);

  function goVille(key) {
    window.location.href = V.villeUrl(key);
  }

  function setActivePin(key) {
    pinEls.forEach((pinEl, k) => pinEl.classList.toggle('is-active', k === key));
    document.querySelectorAll('.dest-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.key === key);
    });
  }

  function flyToPlace(key, zoom) {
    const p = V.place(key);
    if (!map || !p) return;
    setActivePin(key);
    map.flyTo([p.lat, p.lng], zoom || 6, { duration: 1.4, easeLinearity: 0.25 });
  }

  function coverScaleFor(key) {
    const d = V.get(key);
    return (d && d.coverScale) ? d.coverScale : 1;
  }

  /* ── Aperçu au survol (souris uniquement) ── */
  function previewImage(key, label) {
    return el('img', { src: V.coverImage(key), alt: label, decoding: 'async' });
  }

  function showPreview(key, clientX, clientY) {
    if (!finePointer) return;
    const place = V.place(key);
    if (!place) return;
    clearTimeout(hideTimer);

    // Le média n'est créé qu'une fois par survol, pas à chaque mouvement.
    if (previewKey !== key) {
      previewKey = key;
      previewTitle.textContent = place.label;
      const scale = String(coverScaleFor(key));
      const videoSrc = V.coverVideo(key);
      let media;
      if (videoSrc) {
        media = el('video', { src: videoSrc, muted: true, loop: true, playsInline: true, preload: 'auto', 'aria-hidden': 'true' });
        media.addEventListener('error', () => {
          if (media.parentNode) media.replaceWith(previewImage(key, place.label));
        });
        media.play().catch(() => {});
      } else {
        media = previewImage(key, place.label);
      }
      media.style.setProperty('--cover-scale', scale);
      previewGrid.replaceChildren(media);
      follower.snap(clientX, clientY, PREVIEW_W, PREVIEW_H);
    }

    preview.classList.add('visible');
    preview.setAttribute('aria-hidden', 'false');
    setActivePin(key);
  }

  function hidePreview(delay) {
    if (!finePointer) return;
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      previewGrid.querySelectorAll('video').forEach(v => v.pause());
      previewGrid.replaceChildren();
      previewKey = null;
      follower.stop();
      preview.classList.remove('visible');
      preview.setAttribute('aria-hidden', 'true');
    }, delay || 100);
  }

  /* ── Carte ── */
  function buildPin(p) {
    const ring = el('div', { className: 'pin-ring' });
    ring.style.setProperty('--pin-color', V.get(p.key).color || '#2c4a6e');
    const pin = el('div', { className: 'pin', dataset: { key: p.key } }, [
      ring,
      el('div', { className: 'pin-label', text: p.label })
    ]);
    pinEls.set(p.key, pin);
    if (finePointer) {
      pin.addEventListener('mouseenter', e => showPreview(p.key, e.clientX, e.clientY));
      pin.addEventListener('mousemove', e => follower.move(e.clientX, e.clientY, PREVIEW_W, PREVIEW_H));
      pin.addEventListener('mouseleave', () => hidePreview(140));
    }
    return pin;
  }

  function initMap() {
    if (typeof L === 'undefined') {
      document.getElementById('mapFallback').classList.add('show');
      return;
    }

    map = L.map('map', { zoomControl: true, scrollWheelZoom: true, minZoom: 2, maxZoom: 18 });

    const tiles = L.tileLayer(V.TILE_URL, { attribution: V.TILE_ATTR, maxZoom: 19 });
    tiles.addTo(map);

    let errors = 0;
    tiles.on('tileerror', () => {
      errors++;
      if (errors > 8) document.getElementById('mapFallback').classList.add('show');
    });

    PLACES.forEach(p => {
      const icon = L.divIcon({ className: 'pin-wrap', html: buildPin(p), iconSize: [1, 1], iconAnchor: [8, 8] });
      L.marker([p.lat, p.lng], { icon, title: p.label, alt: p.label, keyboard: true })
        .addTo(map)
        .on('click', () => goVille(p.key));
    });

    map.fitBounds(L.latLngBounds(PLACES.map(p => [p.lat, p.lng])).pad(0.32));
    const updateLabels = () => mapInner.classList.toggle('map-labels-on', map.getZoom() >= 5);
    updateLabels();
    map.on('zoomend', updateLabels);

    let resizeTimer = null;
    const fix = () => map.invalidateSize({ animate: false });
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(fix, 150);
    });
    window.addEventListener('load', fix);
    setTimeout(fix, 300);
  }

  /* ── Liste des destinations ── */
  function buildDestNav() {
    const nav = document.getElementById('destNav');
    PLACES.forEach(p => {
      const btn = el('button', { type: 'button', className: 'dest-btn', dataset: { key: p.key }, text: p.label });
      btn.addEventListener('click', () => {
        flyToPlace(p.key, 6);
        showGoCta(p.key);
        document.getElementById('carte').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      nav.appendChild(btn);
    });
  }

  /* ── Galerie d'albums ── */
  function buildGallery() {
    const g = document.getElementById('gridposts');

    PLACES.forEach(p => {
      const fallback = el('img', { src: V.coverImage(p.key), alt: '', loading: 'lazy', decoding: 'async' });
      const media = el('div', { className: 'card-trip-media' }, [fallback]);
      const card = el('a', { className: 'card-trip', href: V.villeUrl(p.key), 'aria-label': 'Album ' + p.label }, [
        media,
        el('div', { className: 'card-trip-cap' }, [
          el('span', { text: 'Ville' }),
          el('strong', { text: p.label })
        ])
      ]);

      const videoSrc = V.coverVideo(p.key);
      if (videoSrc) {
        const video = el('video', { src: videoSrc, muted: true, loop: true, playsInline: true, preload: 'metadata', 'aria-hidden': 'true' });
        const scale = coverScaleFor(p.key);
        if (scale > 1) video.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
        video.addEventListener('loadeddata', () => fallback.remove(), { once: true });
        video.addEventListener('error', () => video.remove(), { once: true });
        media.appendChild(video);

        if (finePointer) {
          const play = () => { if (video.isConnected) video.play().catch(() => {}); };
          const stop = () => { if (video.isConnected) { video.pause(); video.currentTime = 0; } };
          card.addEventListener('mouseenter', play);
          card.addEventListener('mouseleave', stop);
          card.addEventListener('focus', play);
          card.addEventListener('blur', stop);
        }
      }

      g.appendChild(card);
    });
  }

  renderStats();
  buildDestNav();
  buildGallery();

  V.observeReveal('.dest-btn', { className: 'visible', stagger: 40, rootMargin: '0px 0px -6% 0px' });
  V.observeReveal('.card-trip', { className: 'visible', stagger: 90, rootMargin: '0px 0px -6% 0px' });
  V.observeReveal('.reveal', { stagger: 55 });

  initMap();
})();
