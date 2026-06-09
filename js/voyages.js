/** Données partagées — Voyage leo montourcy */
const VOYAGES = {
  data: {
    /* ── groupes pays (stats ribbon) ── */
    canada:  { name: 'Canada',               meta: 'Toronto · Québec · Montréal · Niagara', count: 9,  color: '#2c4a6e' },
    norway:  { name: 'Norvège',              meta: 'Oslo',                                  count: 10, color: '#3d5248' },
    france:  { name: 'France',               meta: 'Paris · Monaco · Cannes · Nice',        count: 11, color: '#5c4033' },
    spain:   { name: 'Espagne',              meta: 'Madrid · Valence',                      count: 2,  color: '#6b4423' },
    uae:     { name: 'Émirats arabes unis',  meta: 'Dubaï · Abu Dhabi',                     count: 50, color: '#1a2f4a' },
    usa:     { name: 'États-Unis',           meta: 'New York · Boston',                     count: 20, color: '#2c4a6e' },

    /* ── destinations à venir ── */
    croatia:    { name: 'Croatie',     meta: 'Bientôt', count: 0, color: '#4a5c4a', future: true },
    montenegro: { name: 'Monténégro', meta: 'Bientôt', count: 0, color: '#4a5c4a', future: true },
    bosnia:     { name: 'Bosnie',     meta: 'Bientôt', count: 0, color: '#4a5c4a', future: true },
    valence:    { name: 'Valence',    meta: 'Bientôt', count: 0, color: '#6b4423', future: true },
    ajaccio:    { name: 'Ajaccio',    meta: 'Bientôt', count: 0, color: '#5c4033', future: true, country: 'France' },
    rosas:      { name: 'Rosas',      meta: 'Bientôt', count: 0, color: '#6b4423', future: true, country: 'Espagne' },

    /* ── villes avec photos ── */
    'abu-dhabi': { name: 'Abu Dhabi',     meta: 'Émirats arabes unis', color: '#1a2f4a', country: 'Émirats',
      photos: ['abu1.jpg','abu2.jpg','abu3.jpg','abu4.jpg','abu5.jpg','abu6.jpg','abu7.jpg'],
      photoDir: 'photo_site/abudhabi' },

    arcachon: { name: 'Arcachon', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['arca1.jpg'],
      photoDir: 'photo_site/arcachon' },

    bonifacio: { name: 'Bonifacio', meta: 'Corse · France', color: '#5c4033', country: 'France',
      photos: ['boni1.jpg','boni2.jpg','boni3.jpg','boni4.jpg','boni5.jpg','boni6.jpg','boni7.jpg','boni8.jpg','boni9.jpg'],
      photoDir: 'photo_site/bonifacio' },

    bordeaux: { name: 'Bordeaux', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['bordeaux1.jpg','bordeaux2.jpg'],
      photoDir: 'photo_site/bordeaux' },

    boston: { name: 'Boston', meta: 'États-Unis', color: '#2c4a6e', country: 'États-Unis',
      photos: ['boston1.jpg','boston2.jpg','boston3.jpg','boston4.jpg','boston5.jpg','boston6.jpg',
               'boston7.jpg','boston8.jpg','boston9.jpg','boston10.jpg','boston11.jpg','boston12.jpg'],
      photoDir: 'photo_site/boston' },

    brive: { name: 'Brive', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['brive1.jpg'],
      photoDir: 'photo_site/brive' },

    cadaques: { name: 'Cadaqués', meta: 'Espagne', color: '#6b4423', country: 'Espagne',
      photos: ['cada1.jpg','cada2.jpg','cada3.jpg','cada4.jpg','cada5.jpg'],
      photoDir: 'photo_site/cadaques' },

    cannes: { name: 'Cannes', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['cannes1.jpg','cannes2.jpg','cannes3.jpg','cannes4.jpg','cannes5.jpg','cannes6.jpg','cannes7.jpg'],
      photoDir: 'photo_site/cannes' },

    capdagde: { name: 'Cap d\'Agde', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['cap1.jpg'],
      photoDir: 'photo_site/capdagde' },

    dubai: { name: 'Dubaï', meta: 'Émirats arabes unis', color: '#1a2f4a', country: 'Émirats',
      photos: ['dubai1.jpg','dubai2.jpg','dubai3.jpg','dubai4.jpg','dubai5.jpg','dubai6.jpg','dubai7.jpg',
               'dubai8.jpg','dubai9.jpg','dubai10.jpg','dubai11.jpg','dubai12.jpg','dubai13.jpg','dubai14.jpg',
               'dubai15.jpg','dubai16.jpg','dubai17.jpg','dubai18.jpg','dubai19.jpg','dubai20.jpg'],
      photoDir: 'photo_site/dubai' },

    liege: { name: 'Liège', meta: 'Belgique', color: '#4a5c6e', country: 'Belgique',
      photos: ['liege1.jpg'],
      photoDir: 'photo_site/liege' },

    limoge: { name: 'Limoges', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['limoge1.jpg'],
      photoDir: 'photo_site/limoge' },

    madrid: { name: 'Madrid', meta: 'Espagne', color: '#6b4423', country: 'Espagne',
      photos: ['madrid1.jpg'],
      photoDir: 'photo_site/madrid' },

    martigue: { name: 'Martigues', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['martigue1.jpg'],
      photoDir: 'photo_site/martigue' },

    monaco: { name: 'Monaco', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['mona1.jpg','mona2.jpg','mona3.jpg','mona4.jpg','mona5.jpg'],
      photoDir: 'photo_site/monaco' },

    montreal: { name: 'Montréal', meta: 'Canada', color: '#2c4a6e', country: 'Canada',
      photos: ['montreal1.jpg'],
      photoDir: 'photo_site/montreal' },

    newyork: { name: 'New York', meta: 'États-Unis', color: '#2c4a6e', country: 'États-Unis',
      photos: (function(){ const a=[]; for(let i=3;i<=96;i++){ if(i===38) continue; a.push('ny'+i+'.jpg'); } return a; })(),
      photoDir: 'photo_site/newyork' },

    niagara: { name: 'Niagara Falls', meta: 'Canada', color: '#2c4a6e', country: 'Canada',
      photos: ['nia1.jpg','nia2.jpg','nia3.jpg','nia4.jpg'],
      photoDir: 'photo_site/niagara' },

    nice: { name: 'Nice', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['nice1.jpg','nice2.jpg','nice3.jpg','nice4.jpg'],
      photoDir: 'photo_site/nice' },

    osani: { name: 'Osani', meta: 'Corse · France', color: '#5c4033', country: 'France',
      photos: ['osa1.jpg','osa2.jpg','osa3.jpg'],
      photoDir: 'photo_site/osani' },

    oslo: { name: 'Oslo', meta: 'Norvège', color: '#3d5248', country: 'Norvège',
      photos: ['oslo1.jpg','oslo2.jpg','oslo3.jpg','oslo4.jpg','oslo5.jpg',
               'oslo6.jpg','oslo7.jpg','oslo8.jpg','oslo9.jpg','oslo10.jpg'],
      photoDir: 'photo_site/oslo' },

    paris: { name: 'Paris', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['paris1.jpg'],
      photoDir: 'photo_site/paris' },

    quebec: { name: 'Québec', meta: 'Canada', color: '#2c4a6e', country: 'Canada',
      photos: ['quebec1.jpg'],
      photoDir: 'photo_site/quebec' },

    sainttropez: { name: 'Saint-Tropez', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['st1.jpg'],
      photoDir: 'photo_site/sainttropez' },

    toronto: { name: 'Toronto', meta: 'Canada', color: '#2c4a6e', country: 'Canada', coverScale: 1.65,
      photos: ['toro1.jpg','toro2.jpg'],
      photoDir: 'photo_site/toronto' },

    toulouse: { name: 'Toulouse', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['tls1.jpg','tls2.jpg','tls3.jpg','tls4.jpg'],
      photoDir: 'photo_site/toulouse' }
  },

  places: [
    /* ── Amérique du Nord ── */
    { key: 'newyork',  label: 'New York',      lat: 40.7128,  lng: -74.0060  },
    { key: 'boston',   label: 'Boston',         lat: 42.3601,  lng: -71.0589  },
    { key: 'toronto',  label: 'Toronto',         lat: 43.6532,  lng: -79.3832  },
    { key: 'montreal', label: 'Montréal',        lat: 45.5017,  lng: -73.5673  },
    { key: 'quebec',   label: 'Québec',          lat: 46.8139,  lng: -71.2080  },
    { key: 'niagara',  label: 'Niagara Falls',   lat: 43.0962,  lng: -79.0377  },

    /* ── Europe du Nord ── */
    { key: 'oslo',     label: 'Oslo',            lat: 59.9139,  lng: 10.7522   },
    { key: 'liege',    label: 'Liège',           lat: 50.6292,  lng:  5.5797   },

    /* ── France ── */
    { key: 'paris',      label: 'Paris',         lat: 48.8566,  lng:  2.3522   },
    { key: 'toulouse',   label: 'Toulouse',      lat: 43.6047,  lng:  1.4442   },
    { key: 'bordeaux',   label: 'Bordeaux',      lat: 44.8378,  lng: -0.5792   },
    { key: 'brive',      label: 'Brive',         lat: 45.1590,  lng:  1.5322   },
    { key: 'limoge',     label: 'Limoges',       lat: 45.8336,  lng:  1.2611   },
    { key: 'arcachon',   label: 'Arcachon',      lat: 44.6611,  lng: -1.1732   },
    { key: 'martigue',   label: 'Martigues',     lat: 43.4063,  lng:  5.0511   },
    { key: 'capdagde',   label: 'Cap d\'Agde',  lat: 43.3055,  lng:  3.4751   },
    { key: 'cannes',     label: 'Cannes',        lat: 43.5528,  lng:  7.0174   },
    { key: 'nice',       label: 'Nice',          lat: 43.7102,  lng:  7.2620   },
    { key: 'monaco',     label: 'Monaco',        lat: 43.7384,  lng:  7.4246   },
    { key: 'sainttropez',label: 'Saint-Tropez',  lat: 43.2727,  lng:  6.6407   },

    /* ── Corse ── */
    { key: 'ajaccio',    label: 'Ajaccio',       lat: 41.9192,  lng:  8.7386,  future: true },
    { key: 'bonifacio',  label: 'Bonifacio',     lat: 41.3878,  lng:  9.1597   },
    { key: 'osani',      label: 'Osani',         lat: 42.3469,  lng:  8.5461   },

    /* ── Espagne ── */
    { key: 'madrid',    label: 'Madrid',         lat: 40.4168,  lng: -3.7038   },
    { key: 'cadaques',  label: 'Cadaqués',       lat: 42.2885,  lng:  3.2782   },
    { key: 'rosas',     label: 'Rosas',          lat: 42.2572,  lng:  3.1759,  future: true },
    { key: 'valence',   label: 'Valence',        lat: 39.4699,  lng: -0.3763,  future: true },

    /* ── Moyen-Orient ── */
    { key: 'dubai',      label: 'Dubaï',         lat: 25.2048,  lng: 55.2708   },
    { key: 'abu-dhabi',  label: 'Abu Dhabi',     lat: 24.4539,  lng: 54.3773   },

    /* ── Balkans (à venir) ── */
    { key: 'croatia',    label: 'Croatie',       lat: 45.8150,  lng: 15.9819,  future: true },
    { key: 'montenegro', label: 'Monténégro',    lat: 42.4304,  lng: 19.2594,  future: true },
    { key: 'bosnia',     label: 'Bosnie',        lat: 43.8563,  lng: 18.4131,  future: true }
  ],

  TILE_URL: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  TILE_ATTR: '&copy; OSM &copy; CARTO',

  villeUrl(key) {
    return 'ville.html?ville=' + encodeURIComponent(key);
  },

  artSvg(title, i, color, sub) {
    const s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${color}"/>
          <stop offset="100%" stop-color="#1a120c"/>
        </linearGradient>
        <pattern id="croco" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <rect width="12" height="12" fill="#2c1810"/>
          <path d="M0 6 Q3 3 6 6 T12 6" stroke="rgba(184,149,106,0.15)" fill="none"/>
        </pattern>
      </defs>
      <rect width="400" height="500" fill="url(#g)"/>
      <rect width="400" height="500" fill="url(#croco)" opacity="0.35"/>
      <text x="28" y="56" fill="#f8f6f2" font-family="Georgia,serif" font-size="28">${title}</text>
      <text x="28" y="88" fill="rgba(248,246,242,0.7)" font-family="sans-serif" font-size="13">${sub || 'Souvenir ' + (i + 1)}</text>
    </svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s);
  },

  previewImages(key, max = 4) {
    const d = this.data[key];
    if (!d) return [];
    if (d.photos && d.photos.length) {
      return d.photos.slice(0, max).map(filename =>
        (d.photoDir ? d.photoDir + '/' : '') + filename
      );
    }
    const n = d.count ? Math.min(d.count, max) : 1;
    const imgs = [];
    for (let i = 0; i < n; i++) {
      imgs.push(this.artSvg(d.name, i, d.color, d.future ? 'À venir' : undefined));
    }
    return imgs;
  },

  allMedias(key) {
    const d = this.data[key];
    if (!d) return [];
    if (!d.photos && !d.count) {
      return [{ type: 'img', src: this.artSvg(d.name, 0, d.color, 'À venir'), alt: this.imageAlt(d.name, 0, true) }];
    }
    if (d.photos && d.photos.length) {
      return d.photos.map((filename, i) => ({
        type: 'img',
        src: (d.photoDir ? d.photoDir + '/' : '') + filename,
        alt: this.imageAlt(d.name, i)
      }));
    }
    const n = Math.min(d.count, 12);
    const list = [];
    for (let i = 0; i < n; i++) {
      list.push({ type: 'img', src: this.artSvg(d.name, i, d.color), alt: this.imageAlt(d.name, i) });
    }
    return list;
  },

  /** Alt descriptif sans modifier la structure data */
  imageAlt(placeName, index, future) {
    if (future) return 'À venir — ' + placeName;
    return 'Souvenir de voyage à ' + placeName + ', photographie ' + (index + 1);
  },

  /** Détection souris fine (desktop) */
  hasFinePointer() {
    return window.matchMedia('(pointer: fine)').matches;
  },

  /** Scroll reveal en cascade */
  initScrollReveal(selector, options) {
    const opts = Object.assign({ rootMargin: '0px 0px -8% 0px', threshold: 0.12, stagger: 70 }, options || {});
    const els = document.querySelectorAll(selector);
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = Number(el.dataset.revealDelay) || 0;
        setTimeout(() => el.classList.add('is-visible'), delay);
        io.unobserve(el);
      });
    }, { rootMargin: opts.rootMargin, threshold: opts.threshold });

    els.forEach((el, i) => {
      el.classList.add('reveal');
      if (!el.dataset.revealDelay) el.dataset.revealDelay = String(i * opts.stagger);
      io.observe(el);
    });
  },

  /** Suivi fluide du pop-up carte (ressort) */
  createPreviewFollower(el) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf = null;
    const ease = 0.14;

    function tick() {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      el.style.transform = 'translate3d(' + currentX + 'px,' + currentY + 'px,0)';
      raf = requestAnimationFrame(tick);
    }

    return {
      move(clientX, clientY, width, height) {
        const pad = 18;
        let x = clientX + pad;
        let y = clientY - height / 2;
        if (x + width > window.innerWidth - pad) x = clientX - width - pad;
        if (y < pad) y = pad;
        if (y + height > window.innerHeight - pad) y = window.innerHeight - height - pad;
        targetX = x;
        targetY = y;
        if (!raf) raf = requestAnimationFrame(tick);
      },
      snap(clientX, clientY, width, height) {
        const pad = 18;
        let x = clientX + pad;
        let y = clientY - height / 2;
        if (x + width > window.innerWidth - pad) x = clientX - width - pad;
        if (y < pad) y = pad;
        if (y + height > window.innerHeight - pad) y = window.innerHeight - height - pad;
        targetX = currentX = x;
        targetY = currentY = y;
        el.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
      },
      stop() {
        if (raf) cancelAnimationFrame(raf);
        raf = null;
      }
    };
  },

  /** Lightbox plein écran (ville.html) */
  initLightbox(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return null;

    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-hidden', 'true');
    lb.innerHTML =
      '<button type="button" class="lightbox-close" aria-label="Fermer">✕</button>' +
      '<button type="button" class="lightbox-prev" aria-label="Précédent">‹</button>' +
      '<button type="button" class="lightbox-next" aria-label="Suivant">›</button>' +
      '<div class="lightbox-stage"></div>' +
      '<p class="lightbox-caption"></p>';
    document.body.appendChild(lb);

    const stage = lb.querySelector('.lightbox-stage');
    const caption = lb.querySelector('.lightbox-caption');
    const items = [];
    let index = 0;

    container.querySelectorAll('.cell').forEach((cell, i) => {
      const media = cell.querySelector('img, video');
      if (!media) return;
      items.push({ el: media, alt: media.getAttribute('alt') || '' });
      cell.classList.add('cell-clickable');
      cell.setAttribute('tabindex', '0');
      cell.setAttribute('role', 'button');
      cell.addEventListener('click', () => open(i));
      cell.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); }
      });
    });

    function render() {
      stage.innerHTML = '';
      const item = items[index];
      if (!item) return;
      if (item.el.tagName === 'VIDEO') {
        const v = document.createElement('video');
        v.src = item.el.src;
        v.autoplay = true;
        v.muted = true;
        v.loop = true;
        v.playsInline = true;
        v.controls = true;
        stage.appendChild(v);
      } else {
        const img = document.createElement('img');
        img.src = item.el.src;
        img.alt = item.alt;
        stage.appendChild(img);
      }
      caption.textContent = item.alt;
    }

    function open(i) {
      index = i;
      render();
      lb.classList.add('is-open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      lb.classList.remove('is-open');
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      stage.innerHTML = '';
    }

    function step(d) {
      index = (index + d + items.length) % items.length;
      render();
    }

    lb.querySelector('.lightbox-close').onclick = close;
    lb.querySelector('.lightbox-prev').onclick = () => step(-1);
    lb.querySelector('.lightbox-next').onclick = () => step(1);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    });

    return { open, close };
  }
};
