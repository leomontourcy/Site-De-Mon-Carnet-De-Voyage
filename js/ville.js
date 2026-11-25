/* Page album d'une ville : ville.html?ville=<clé> */
(function () {
  'use strict';
  const V = VOYAGES;
  const el = V.el.bind(V);
  const key = new URLSearchParams(location.search).get('ville');
  const d = V.get(key);
  const SITE = 'Voyage Léo Montourcy';

  V.observeReveal('.reveal', { stagger: 60 });

  if (!d) {
    document.getElementById('villeName').textContent = 'Destination introuvable';
    document.getElementById('villeMeta').textContent = 'Retourne à la carte pour choisir une ville.';
    document.getElementById('villeHint').hidden = true;
    document.getElementById('villeBadge').hidden = true;
    document.title = 'Destination introuvable — ' + SITE;
    return;
  }

  document.title = d.name + ' — ' + SITE;
  document.querySelector('meta[name="description"]').setAttribute(
    'content', 'Souvenirs et photos de voyage à ' + d.name + ' — carnet ' + SITE + '.'
  );

  document.getElementById('villeName').textContent = d.name;
  document.getElementById('villeMeta').textContent = d.meta || d.country || '';

  const c = V.counts(key);
  const parts = [];
  if (c.photos) parts.push(c.photos + ' photo' + (c.photos > 1 ? 's' : ''));
  if (c.videos) parts.push(c.videos + ' vidéo' + (c.videos > 1 ? 's' : ''));
  document.getElementById('villeBadge').textContent = parts.join(' · ');

  const gallery = document.getElementById('villeGallery');
  V.allMedias(key).forEach((m, i) => {
    const media = m.type === 'video'
      // Source chargée seulement à l'approche de l'écran (voir onEnter).
      ? el('video', { muted: true, loop: true, playsInline: true, preload: 'none', dataset: { src: m.src }, 'aria-label': m.alt })
      : el('img', { src: m.src, alt: m.alt, loading: 'lazy', decoding: 'async' });
    gallery.appendChild(el('div', { className: 'cell' + (i === 0 ? ' featured' : '') }, [media]));
  });

  V.observeReveal('.ville-gallery .cell', {
    className: 'visible',
    stagger: 80,
    rootMargin: '200px 0px 200px 0px',
    threshold: 0.01,
    onEnter(cell) {
      const video = cell.querySelector('video');
      if (!video) return;
      if (!video.getAttribute('src')) video.src = video.dataset.src;
      video.play().catch(() => {});
    },
    onLeave(cell) {
      // Pause seulement : la vidéo reste en cache, pas de nouveau téléchargement.
      const video = cell.querySelector('video');
      if (video) video.pause();
    }
  });

  V.initLightbox('#villeGallery');
})();
