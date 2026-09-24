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
    croatia:    { name: 'Croatie',     meta: 'Dubrovnik', count: 1, color: '#4a5c4a' },
    montenegro: { name: 'Monténégro', meta: 'Budva · Kotor · Perast · Podgorica · Tivat · Žabljak', count: 6, color: '#4a5c4a' },
    bosnia:     { name: 'Bosnie',     meta: 'Sarajevo · Mostar', count: 2, color: '#4a5c4a' },

    /* ── villes avec photos ── */
    'abu-dhabi': { name: 'Abu Dhabi',     meta: 'Émirats arabes unis', color: '#1a2f4a', country: 'Émirats',
      photos: ['abudhabi_1.jpg','abudhabi_2.jpg','abudhabi_3.jpg','abudhabi_4.jpg','abudhabi_5.jpg','abudhabi_6.jpg','abudhabi_7.jpg'],
      photoDir: 'photo_site/abudhabi' },

    arcachon: { name: 'Arcachon', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['arcachon_1.jpg'],
      photoDir: 'photo_site/arcachon' },

    bonifacio: { name: 'Bonifacio', meta: 'Corse · France', color: '#5c4033', country: 'France',
      photos: ['bonifacio_7.jpg','bonifacio_2.jpg','bonifacio_8.jpg','bonifacio_6.jpg','bonifacio_3.jpg','bonifacio_5.jpg','bonifacio_9.jpg','bonifacio_1.jpg','bonifacio_4.jpg'],
      photoDir: 'photo_site/bonifacio' },

    bordeaux: { name: 'Bordeaux', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['bordeaux_2.jpg','bordeaux_1.jpg'],
      photoDir: 'photo_site/bordeaux' },

    boston: { name: 'Boston', meta: 'États-Unis', color: '#2c4a6e', country: 'États-Unis',
      photos: ['boston_11.jpg','boston_8.jpg','boston_10.jpg','boston_2.jpg','boston_9.jpg','boston_7.jpg','boston_12.jpg','boston_3.jpg','boston_5.jpg','boston_4.jpg','boston_6.jpg','boston_1.jpg'],
      photoDir: 'photo_site/boston' },

    brive: { name: 'Brive', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['brive_1.jpg'],
      photoDir: 'photo_site/brive' },

    cadaques: { name: 'Cadaqués', meta: 'Espagne', color: '#6b4423', country: 'Espagne',
      photos: ['cadaques_2.jpg','cadaques_5.jpg','cadaques_1.jpg','cadaques_3.jpg','cadaques_4.jpg'],
      photoDir: 'photo_site/cadaques' },

    cannes: { name: 'Cannes', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['cannes_1.jpg','cannes_3.jpg','cannes_7.jpg','cannes_5.jpg','cannes_2.jpg','cannes_4.jpg','cannes_6.jpg'],
      photoDir: 'photo_site/cannes' },

    capdagde: { name: 'Cap d\'Agde', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['capdagde_1.jpg'],
      photoDir: 'photo_site/capdagde' },

    dubai: { name: 'Dubaï', meta: 'Émirats arabes unis', color: '#1a2f4a', country: 'Émirats',
      photos: ['dubai_4.jpg','dubai_12.jpg','dubai_14.jpg','dubai_18.jpg','dubai_2.jpg','dubai_17.jpg','dubai_3.jpg','dubai_1.jpg','dubai_8.jpg','dubai_5.jpg','dubai_19.jpg','dubai_20.jpg','dubai_9.jpg','dubai_11.jpg','dubai_13.jpg','dubai_15.jpg','dubai_10.jpg','dubai_7.jpg','dubai_16.jpg','dubai_6.jpg'],
      photoDir: 'photo_site/dubai' },

    liege: { name: 'Liège', meta: 'Belgique', color: '#4a5c6e', country: 'Belgique',
      photos: ['liege_1.jpg'],
      photoDir: 'photo_site/liege' },

    limoge: { name: 'Limoges', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['limoge_1.jpg'],
      photoDir: 'photo_site/limoge' },

    madrid: { name: 'Madrid', meta: 'Espagne', color: '#6b4423', country: 'Espagne',
      photos: ['madrid_1.jpg'],
      photoDir: 'photo_site/madrid' },

    martigue: { name: 'Martigues', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['martigue_1.jpg'],
      photoDir: 'photo_site/martigue' },

    monaco: { name: 'Monaco', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['monaco_2.jpg','monaco_4.jpg','monaco_3.jpg','monaco_5.jpg','monaco_1.jpg'],
      photoDir: 'photo_site/monaco' },

    montreal: { name: 'Montréal', meta: 'Canada', color: '#2c4a6e', country: 'Canada',
      photos: ['montreal_14.jpeg','montreal_72.jpeg','montreal_45.jpeg','montreal_50.jpeg','montreal_39.jpeg','montreal_37.jpeg','montreal_33.jpeg','montreal_91.jpeg','montreal_13.jpeg','montreal_64.jpeg','montreal_120.JPG','montreal_63.jpeg','montreal_16.jpeg','montreal_60.jpeg','montreal_58.jpeg','montreal_119.JPG','montreal_59.jpeg','montreal_118.JPG','montreal_76.jpeg','montreal_32.jpeg','montreal_15.jpeg','montreal_89.jpeg','montreal_41.jpeg','montreal_40.jpeg','montreal_31.jpeg','montreal_10.jpeg','montreal_123.jpeg','montreal_90.jpeg','montreal_30.jpeg','montreal_11.jpeg','montreal_27.jpeg','montreal_70.jpeg','montreal_99.jpeg','montreal_71.jpeg','montreal_57.jpeg','montreal_74.jpeg','montreal_81.jpeg','montreal_73.jpeg','montreal_5.jpeg','montreal_38.jpeg','montreal_7.jpeg','montreal_122.jpeg','montreal_12.jpeg','montreal_113.jpeg','montreal_112.jpeg','montreal_82.jpeg','montreal_20.jpeg','montreal_79.jpeg','montreal_125.jpeg','montreal_105.jpeg','montreal_34.jpeg','montreal_98.jpeg','montreal_93.jpeg','montreal_80.jpeg','montreal_86.jpeg','montreal_104.jpeg','montreal_103.jpeg','montreal_85.jpeg','montreal_75.jpeg','montreal_18.jpeg','montreal_17.jpeg','montreal_77.jpeg','montreal_97.jpeg','montreal_48.jpeg','montreal_126.jpg','montreal_19.jpeg','montreal_49.jpeg','montreal_54.jpeg','montreal_53.jpeg','montreal_29.jpeg','montreal_55.jpeg','montreal_83.jpeg','montreal_106.jpeg','montreal_107.jpeg','montreal_3.jpeg','montreal_124.JPG','montreal_4.PNG','montreal_1.MOV','montreal_2.MP4','montreal_6.MOV','montreal_8.MOV','montreal_21.MOV','montreal_22.MOV','montreal_23.MOV','montreal_24.MOV','montreal_25.MOV','montreal_26.MOV','montreal_28.MOV','montreal_35.MOV','montreal_36.MOV','montreal_42.MOV','montreal_43.MOV','montreal_44.MOV','montreal_46.MOV','montreal_47.MOV','montreal_51.MOV','montreal_52.MOV','montreal_56.MOV','montreal_61.MOV','montreal_62.MOV','montreal_65.MOV','montreal_66.MOV','montreal_67.MOV','montreal_68.MOV','montreal_69.MOV','montreal_78.MOV','montreal_84.MOV','montreal_87.MOV','montreal_88.MOV','montreal_92.MOV','montreal_94.MOV','montreal_95.MOV','montreal_96.MOV','montreal_100.MOV','montreal_101.MOV','montreal_102.MOV','montreal_108.MOV','montreal_109.MOV','montreal_110.MOV','montreal_111.MOV','montreal_114.MOV','montreal_115.MOV','montreal_116.MOV','montreal_117.MOV','montreal_121.MOV'],
      photoDir: 'photo_site/montreal' },

    newyork: { name: 'New York', meta: 'États-Unis', color: '#2c4a6e', country: 'États-Unis', hasVideoCover: true,
      photos: ['newyork_89.jpg','newyork_77.jpg','newyork_36.jpg','newyork_96.jpg','newyork_8.jpg','newyork_49.jpg','newyork_47.jpg','newyork_56.jpg','newyork_12.jpg','newyork_94.jpg','newyork_53.jpg','newyork_21.jpg','newyork_69.jpg','newyork_91.jpg','newyork_41.jpg','newyork_24.jpg','newyork_30.jpg','newyork_92.jpg','newyork_80.jpg','newyork_26.jpg','newyork_50.jpg','newyork_57.jpg','newyork_62.jpg','newyork_29.jpg','newyork_38.jpg','newyork_46.jpg','newyork_72.jpg','newyork_64.jpg','newyork_73.jpg','newyork_22.jpg','newyork_16.jpg','newyork_66.jpg','newyork_27.jpg','newyork_13.jpg','newyork_54.jpg','newyork_31.jpg','newyork_84.jpg','newyork_14.jpg','newyork_37.jpg','newyork_78.jpg','newyork_48.jpg','newyork_19.jpg','newyork_87.jpg','newyork_40.jpg','newyork_83.jpg','newyork_70.jpg','newyork_76.jpg','newyork_3.jpg','newyork_59.jpg','newyork_60.jpg','newyork_67.jpg','newyork_75.jpg','newyork_61.jpg','newyork_39.jpg','newyork_85.jpg','newyork_74.jpg','newyork_93.jpg','newyork_4.jpg','newyork_11.jpg','newyork_79.jpg','newyork_58.jpg','newyork_63.jpg','newyork_45.jpg','newyork_2.jpg','newyork_17.jpg','newyork_34.jpg','newyork_9.jpg','newyork_20.jpg','newyork_28.jpg','newyork_68.jpg','newyork_23.jpg','newyork_33.jpg','newyork_71.jpg','newyork_25.jpg','newyork_81.jpg','newyork_44.jpg','newyork_7.jpg','newyork_32.jpg','newyork_51.jpg','newyork_43.jpg','newyork_5.jpg','newyork_15.jpg','newyork_10.jpg','newyork_42.jpg','newyork_95.jpg','newyork_52.jpg','newyork_18.jpg','newyork_82.jpg','newyork_35.jpg','newyork_86.jpg','newyork_65.jpg','newyork_6.jpg','newyork_55.jpg','newyork_88.jpg','newyork_90.jpg'],
      photoDir: 'photo_site/newyork' },

    niagara: { name: 'Niagara Falls', meta: 'Canada', color: '#2c4a6e', country: 'Canada',
      photos: ['niagara_76.jpeg','niagara_80.jpeg','niagara_75.jpeg','niagara_77.jpeg','niagara_78.jpeg','niagara_72.jpeg','niagara_6.jpeg','niagara_7.jpeg','niagara_38.jpeg','niagara_57.jpeg','niagara_8.jpeg','niagara_9.jpeg','niagara_29.jpeg','niagara_35.jpeg','niagara_28.jpeg','niagara_31.jpeg','niagara_53.jpeg','niagara_30.jpeg','niagara_51.jpeg','niagara_2.jpeg','niagara_55.jpeg','niagara_56.jpeg','niagara_33.jpeg','niagara_10.jpeg','niagara_61.jpeg','niagara_40.jpeg','niagara_48.jpeg','niagara_54.jpeg','niagara_60.jpeg','niagara_42.jpeg','niagara_3.jpeg','niagara_45.jpeg','niagara_82.jpg','niagara_41.jpeg','niagara_26.jpeg','niagara_32.jpeg','niagara_27.jpeg','niagara_62.jpeg','niagara_68.jpeg','niagara_47.jpeg','niagara_66.jpeg','niagara_63.jpeg','niagara_50.jpeg','niagara_83.jpg','niagara_69.jpeg','niagara_44.jpeg','niagara_11.jpeg','niagara_46.jpeg','niagara_14.jpeg','niagara_70.jpeg','niagara_37.jpeg','niagara_81.jpg','niagara_71.jpeg','niagara_67.jpeg','niagara_43.jpeg','niagara_52.jpeg','niagara_49.jpeg','niagara_15.jpeg','niagara_23.jpeg','niagara_84.jpg','niagara_1.MOV','niagara_4.MOV','niagara_5.MOV','niagara_12.MOV','niagara_13.MOV','niagara_16.MOV','niagara_17.MOV','niagara_18.MOV','niagara_19.MOV','niagara_20.MOV','niagara_21.MOV','niagara_24.MOV','niagara_25.MOV','niagara_34.MOV','niagara_36.MOV','niagara_39.MOV','niagara_58.MOV','niagara_59.MOV','niagara_64.MOV','niagara_65.MOV','niagara_73.MOV','niagara_74.MOV','niagara_79.MOV'],
      photoDir: 'photo_site/niagara' },

    nice: { name: 'Nice', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['nice_1.jpg','nice_2.jpg','nice_4.jpg','nice_3.jpg'],
      photoDir: 'photo_site/nice' },

    osani: { name: 'Osani', meta: 'Corse · France', color: '#5c4033', country: 'France',
      photos: ['osani_2.jpg','osani_3.jpg','osani_1.jpg'],
      photoDir: 'photo_site/osani' },

    oslo: { name: 'Oslo', meta: 'Norvège', color: '#3d5248', country: 'Norvège',
      photos: ['oslo_6.jpg','oslo_5.jpg','oslo_1.jpg','oslo_4.jpg','oslo_3.jpg','oslo_2.jpg','oslo_8.jpg','oslo_7.jpg','oslo_9.jpg','oslo_10.jpg'],
      photoDir: 'photo_site/oslo' },

    paris: { name: 'Paris', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['paris_1.jpg'],
      photoDir: 'photo_site/paris' },

    quebec: { name: 'Québec', meta: 'Canada', color: '#2c4a6e', country: 'Canada',
      photos: ['quebec_1.jpg'],
      photoDir: 'photo_site/quebec' },

    sainttropez: { name: 'Saint-Tropez', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['sainttropez_1.jpg'],
      photoDir: 'photo_site/sainttropez' },

    toronto: { name: 'Toronto', meta: 'Canada', color: '#2c4a6e', country: 'Canada', coverScale: 1.65, hasVideoCover: true,
      photos: ['toronto_148.jpeg','toronto_51.jpeg','toronto_52.jpeg','toronto_151.jpeg','toronto_66.jpeg','toronto_150.jpeg','toronto_70.jpeg','toronto_32.jpeg','toronto_73.jpeg','toronto_39.jpeg','toronto_75.jpeg','toronto_87.jpeg','toronto_17.jpeg','toronto_158.jpeg','toronto_159.jpeg','toronto_72.jpeg','toronto_71.jpeg','toronto_85.jpeg','toronto_34.jpeg','toronto_31.jpeg','toronto_37.jpeg','toronto_28.jpeg','toronto_86.jpeg','toronto_78.jpeg','toronto_19.jpeg','toronto_53.jpeg','toronto_47.jpeg','toronto_44.jpeg','toronto_12.jpeg','toronto_84.jpeg','toronto_9.jpeg','toronto_43.jpeg','toronto_145.jpeg','toronto_103.jpeg','toronto_48.jpeg','toronto_79.jpeg','toronto_157.jpeg','toronto_129.jpeg','toronto_2.jpeg','toronto_33.jpeg','toronto_82.jpeg','toronto_152.jpeg','toronto_27.jpeg','toronto_8.jpeg','toronto_15.jpeg','toronto_67.jpeg','toronto_83.jpeg','toronto_30.jpeg','toronto_10.jpeg','toronto_107.jpeg','toronto_144.jpeg','toronto_16.jpeg','toronto_45.jpeg','toronto_76.jpeg','toronto_63.jpeg','toronto_109.jpeg','toronto_136.jpeg','toronto_108.jpeg','toronto_81.jpeg','toronto_38.jpeg','toronto_25.jpeg','toronto_134.jpeg','toronto_96.jpeg','toronto_3.jpeg','toronto_77.jpeg','toronto_141.jpeg','toronto_106.jpeg','toronto_56.jpeg','toronto_64.jpeg','toronto_20.jpeg','toronto_57.jpeg','toronto_29.jpeg','toronto_161.jpg','toronto_36.jpeg','toronto_156.jpeg','toronto_143.jpeg','toronto_13.jpeg','toronto_59.jpeg','toronto_68.jpeg','toronto_23.jpeg','toronto_62.jpeg','toronto_142.jpeg','toronto_11.jpeg','toronto_58.jpeg','toronto_26.jpeg','toronto_127.jpeg','toronto_5.jpeg','toronto_114.jpeg','toronto_50.jpeg','toronto_4.jpeg','toronto_98.jpeg','toronto_18.jpeg','toronto_146.jpeg','toronto_102.jpeg','toronto_140.jpeg','toronto_135.jpeg','toronto_24.jpeg','toronto_147.jpeg','toronto_46.jpeg','toronto_104.jpeg','toronto_40.jpeg','toronto_74.jpeg','toronto_1.jpeg','toronto_116.jpeg','toronto_7.jpeg','toronto_117.jpeg','toronto_128.jpeg','toronto_125.jpeg','toronto_123.jpeg','toronto_6.jpeg','toronto_118.jpeg','toronto_160.jpg','toronto_65.jpeg','toronto_122.jpeg','toronto_94.jpeg','toronto_124.jpeg','toronto_115.jpeg','toronto_105.jpeg','toronto_14.MOV','toronto_21.MOV','toronto_22.MOV','toronto_35.MOV','toronto_41.MOV','toronto_42.MOV','toronto_49.MOV','toronto_54.MOV','toronto_55.MOV','toronto_60.MOV','toronto_61.MOV','toronto_69.MOV','toronto_80.MOV','toronto_88.MOV','toronto_89.MOV','toronto_90.MOV','toronto_91.MOV','toronto_92.MOV','toronto_93.MOV','toronto_95.MOV','toronto_99.MOV','toronto_100.MOV','toronto_101.MOV','toronto_110.MOV','toronto_111.MOV','toronto_112.MOV','toronto_113.MOV','toronto_119.MOV','toronto_120.MOV','toronto_121.MOV','toronto_126.MOV','toronto_130.MOV','toronto_131.MOV','toronto_132.MOV','toronto_137.MOV','toronto_138.MOV','toronto_139.MOV','toronto_149.MOV','toronto_153.MOV','toronto_154.MOV','toronto_155.MOV'],
      photoDir: 'photo_site/toronto' },

    toulouse: { name: 'Toulouse', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['toulouse_3.jpg','toulouse_2.jpg','toulouse_1.jpg','toulouse_4.jpg'],
      photoDir: 'photo_site/toulouse' },

    sarajevo: { name: 'Sarajevo', meta: 'Bosnie-Herzégovine', color: '#4a5c4a', country: 'Bosnie',
      photos: ['sarajevo_1.JPG','sarajevo_3.jpeg','sarajevo_7.jpeg','sarajevo_4.jpeg','sarajevo_2.jpeg','sarajevo_5.MOV','sarajevo_6.MOV'],
      photoDir: 'photo_site/sarajevo' },

    budva: { name: 'Budva', meta: 'Monténégro', color: '#4a5c4a', country: 'Monténégro',
      photos: ['budva_3.jpeg','budva_1.jpeg','budva_4.jpeg','budva_2.jpeg'],
      photoDir: 'photo_site/budva' },

    dubrovnik: { name: 'Dubrovnik', meta: 'Croatie', color: '#4a5c4a', country: 'Croatie',
      photos: ['dubrovnik_5.jpeg','dubrovnik_4.jpeg','dubrovnik_13.jpeg','dubrovnik_15.jpeg','dubrovnik_19.jpeg','dubrovnik_6.jpeg','dubrovnik_16.jpeg','dubrovnik_18.jpeg','dubrovnik_10.jpeg','dubrovnik_20.jpeg','dubrovnik_9.jpeg','dubrovnik_7.jpeg','dubrovnik_14.jpeg','dubrovnik_8.jpeg','dubrovnik_12.jpeg','dubrovnik_1.MOV','dubrovnik_2.MOV','dubrovnik_3.MOV','dubrovnik_11.MOV'],
      photoDir: 'photo_site/dubrovnik' },

    mostar: { name: 'Mostar', meta: 'Bosnie-Herzégovine', color: '#4a5c4a', country: 'Bosnie',
      photos: ['mostar_4.jpeg','mostar_6.jpeg','mostar_5.jpeg','mostar_3.jpeg','mostar_9.jpeg','mostar_24.jpeg','mostar_15.jpeg','mostar_19.jpeg','mostar_22.jpeg','mostar_18.jpeg','mostar_21.jpeg','mostar_16.jpeg','mostar_23.jpeg','mostar_8.jpeg','mostar_1.MOV','mostar_2.MOV'],
      photoDir: 'photo_site/mostar' },

    podgorica: { name: 'Podgorica', meta: 'Monténégro', color: '#4a5c4a', country: 'Monténégro',
      photos: ['podgorica_5.jpeg','podgorica_6.jpeg','podgorica_2.jpeg','podgorica_3.jpeg','podgorica_4.jpeg','podgorica_13.jpeg','podgorica_12.jpeg','podgorica_10.jpeg','podgorica_11.jpeg','podgorica_7.jpeg','podgorica_1.MOV','podgorica_8.MOV','podgorica_9.MOV'],
      photoDir: 'photo_site/podgorica' },

    valencia: { name: 'Valence', meta: 'Espagne', color: '#6b4423', country: 'Espagne',
      photos: ['valencia_50.jpeg','valencia_23.jpeg','valencia_166.jpeg','valencia_22.jpeg','valencia_131.jpeg','valencia_169.jpeg','valencia_165.jpeg','valencia_121.jpeg','valencia_167.jpeg','valencia_15.jpeg','valencia_16.jpeg','valencia_134.jpeg','valencia_107.jpeg','valencia_28.jpeg','valencia_127.jpeg','valencia_126.jpeg','valencia_170.jpeg','valencia_26.jpeg','valencia_46.jpeg','valencia_168.jpeg','valencia_136.jpeg','valencia_62.jpeg','valencia_135.jpeg','valencia_137.jpeg','valencia_45.jpeg','valencia_32.jpeg','valencia_129.jpeg','valencia_29.jpeg','valencia_117.jpeg','valencia_11.jpeg','valencia_91.jpeg','valencia_14.jpeg','valencia_10.jpeg','valencia_33.jpeg','valencia_24.jpeg','valencia_148.jpeg','valencia_40.jpeg','valencia_173.jpeg','valencia_72.jpeg','valencia_35.jpeg','valencia_110.jpeg','valencia_153.jpeg','valencia_171.jpeg','valencia_34.jpeg','valencia_57.jpeg','valencia_71.jpeg','valencia_151.jpeg','valencia_20.jpeg','valencia_130.jpeg','valencia_17.jpeg','valencia_125.jpeg','valencia_12.jpeg','valencia_13.jpeg','valencia_124.jpeg','valencia_76.jpeg','valencia_108.jpeg','valencia_160.jpeg','valencia_133.jpeg','valencia_75.jpeg','valencia_128.jpeg','valencia_42.jpeg','valencia_152.jpeg','valencia_149.jpeg','valencia_19.jpeg','valencia_161.jpeg','valencia_27.jpeg','valencia_58.jpeg','valencia_7.jpeg','valencia_113.jpeg','valencia_102.jpeg','valencia_69.jpeg','valencia_39.jpeg','valencia_8.jpeg','valencia_25.jpeg','valencia_41.jpeg','valencia_38.jpeg','valencia_43.jpeg','valencia_74.jpeg','valencia_37.jpeg','valencia_172.jpeg','valencia_138.jpeg','valencia_47.jpeg','valencia_78.jpeg','valencia_162.jpeg','valencia_44.jpeg','valencia_9.jpeg','valencia_132.jpeg','valencia_94.jpeg','valencia_150.jpeg','valencia_140.jpeg','valencia_49.jpeg','valencia_30.jpeg','valencia_90.jpeg','valencia_147.jpeg','valencia_36.jpeg','valencia_93.jpeg','valencia_159.jpeg','valencia_139.jpeg','valencia_156.jpeg','valencia_21.jpeg','valencia_164.jpeg','valencia_123.jpeg','valencia_18.jpeg','valencia_95.jpeg','valencia_146.jpeg','valencia_51.jpeg','valencia_89.jpeg','valencia_56.jpeg','valencia_96.jpeg','valencia_97.jpeg','valencia_79.jpeg','valencia_77.jpeg','valencia_52.jpeg','valencia_111.jpeg','valencia_141.jpeg','valencia_63.jpeg','valencia_119.jpeg','valencia_109.jpeg','valencia_59.jpeg','valencia_53.jpeg','valencia_55.jpeg','valencia_73.jpeg','valencia_66.jpeg','valencia_48.jpeg','valencia_80.jpeg','valencia_163.jpeg','valencia_87.jpeg','valencia_116.jpeg','valencia_82.jpeg','valencia_67.jpeg','valencia_145.jpeg','valencia_144.jpeg','valencia_81.jpeg','valencia_54.jpeg','valencia_92.jpeg','valencia_65.jpeg','valencia_101.jpeg','valencia_100.jpeg','valencia_68.jpeg','valencia_31.jpeg','valencia_103.jpeg','valencia_84.jpeg','valencia_83.jpeg','valencia_70.jpeg','valencia_86.jpeg','valencia_85.jpeg','valencia_60.jpeg','valencia_1.MOV','valencia_2.MOV','valencia_3.MOV','valencia_4.MOV','valencia_5.MOV','valencia_6.MOV','valencia_88.MOV','valencia_98.MOV','valencia_99.MOV','valencia_104.MOV','valencia_105.MOV','valencia_106.MOV','valencia_112.MOV','valencia_114.MOV','valencia_115.MOV','valencia_118.MOV','valencia_120.MOV'],
      photoDir: 'photo_site/valencia' },

    perast: { name: 'Perast', meta: 'Monténégro', color: '#4a5c4a', country: 'Monténégro',
      photos: ['perast_5.jpeg','perast_15.jpeg','perast_14.jpeg','perast_12.jpeg','perast_8.jpeg','perast_18.jpeg','perast_9.jpeg','perast_19.jpeg','perast_17.jpeg','perast_10.jpeg','perast_2.jpeg','perast_20.jpeg','perast_4.JPG','perast_21.jpeg','perast_7.jpeg','perast_6.jpeg','perast_3.jpeg','perast_13.jpeg','perast_16.jpeg','perast_11.jpeg','perast_1.MOV'],
      photoDir: 'photo_site/perast' },

    zabljak: { name: 'Žabljak', meta: 'Monténégro', color: '#4a5c4a', country: 'Monténégro',
      photos: ['zabljak_12.jpeg','zabljak_11.jpeg','zabljak_9.jpeg','zabljak_5.JPG','zabljak_2.JPG','zabljak_8.jpeg','zabljak_7.jpeg','zabljak_6.JPG','zabljak_1.JPG','zabljak_3.JPG','zabljak_10.jpeg','zabljak_4.MOV'],
      photoDir: 'photo_site/zabljak' },

    kotor: { name: 'Kotor', meta: 'Monténégro', color: '#4a5c4a', country: 'Monténégro',
      photos: ['kotor_1.JPG','kotor_6.jpeg','kotor_5.jpeg','kotor_13.jpeg','kotor_11.jpeg','kotor_12.jpeg','kotor_14.jpeg','kotor_10.jpeg','kotor_2.JPG','kotor_9.jpeg','kotor_3.JPG','kotor_8.jpeg','kotor_7.jpeg'],
      photoDir: 'photo_site/kotor' },

    tivat: { name: 'Tivat', meta: 'Monténégro', color: '#4a5c4a', country: 'Monténégro',
      photos: ['tivat_34.jpeg','tivat_10.jpeg','tivat_11.jpeg','tivat_3.jpeg','tivat_27.jpeg','tivat_28.jpeg','tivat_15.jpeg','tivat_21.jpeg','tivat_13.jpeg','tivat_14.jpeg','tivat_17.jpeg','tivat_16.jpeg','tivat_12.jpeg','tivat_36.jpeg','tivat_6.jpeg','tivat_4.jpeg','tivat_9.jpeg','tivat_31.jpeg','tivat_18.jpeg','tivat_20.jpeg','tivat_29.jpeg','tivat_5.jpeg','tivat_30.jpeg','tivat_19.jpeg','tivat_25.jpeg','tivat_24.jpeg','tivat_8.jpeg','tivat_35.jpeg','tivat_22.jpeg','tivat_26.jpeg','tivat_7.jpeg','tivat_33.jpeg','tivat_23.jpeg','tivat_1.MOV','tivat_2.MOV'],
      photoDir: 'photo_site/tivat' }

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
    { key: 'bonifacio',  label: 'Bonifacio',     lat: 41.3878,  lng:  9.1597   },
    { key: 'osani',      label: 'Osani',         lat: 42.3469,  lng:  8.5461   },

    /* ── Espagne ── */
    { key: 'madrid',    label: 'Madrid',         lat: 40.4168,  lng: -3.7038   },
    { key: 'cadaques',  label: 'Cadaqués',       lat: 42.2885,  lng:  3.2782   },
    { key: 'valencia',   label: 'Valence',        lat: 39.4699,  lng: -0.3763 },

    /* ── Moyen-Orient ── */
    { key: 'dubai',      label: 'Dubaï',         lat: 25.2048,  lng: 55.2708   },
    { key: 'abu-dhabi',  label: 'Abu Dhabi',     lat: 24.4539,  lng: 54.3773   },

    /* ── Balkans (à venir) ── */
    
    
    

    { key: 'sarajevo',  label: 'Sarajevo',  lat: 43.8563,  lng: 18.4131  },
    { key: 'budva',  label: 'Budva',  lat: 42.2911,  lng: 18.8403  },
    { key: 'dubrovnik',  label: 'Dubrovnik',  lat: 42.6507,  lng: 18.0944  },
    { key: 'mostar',  label: 'Mostar',  lat: 43.3438,  lng: 17.8078  },
    { key: 'podgorica',  label: 'Podgorica',  lat: 42.4411,  lng: 19.2636  },
    { key: 'perast',  label: 'Perast',  lat: 42.4867,  lng: 18.6996  },
    { key: 'zabljak',  label: 'Žabljak',  lat: 43.1555,  lng: 19.1226  },
    { key: 'kotor',  label: 'Kotor',  lat: 42.4247,  lng: 18.7712  },
    { key: 'tivat',  label: 'Tivat',  lat: 42.4364,  lng: 18.6312  },

  ],

  TILE_URL: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  TILE_ATTR: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',

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
      const imagesOnly = d.photos.filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i));
      const targetArr = imagesOnly.length > 0 ? imagesOnly : d.photos;
      return targetArr.slice(0, max).map(filename =>
        (d.photoDir ? d.photoDir + '/' : '') + filename.replace(/\.(jpg|jpeg|png)$/i, '.webp') + '?v=2'
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
      return d.photos.map((filename, i) => {
        const isVideo = filename.match(/\.(mp4|mov|webm)$/i);
        let fn = isVideo ? filename : filename.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        return {
          type: isVideo ? 'video' : 'img',
          src: (d.photoDir ? d.photoDir + '/' : '') + fn + '?v=3',
          alt: this.imageAlt(d.name, i)
        };
      });
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
  initScrollReveal(selector, options = {}) {
    const opts = { rootMargin: '0px 0px -8% 0px', threshold: 0.12, stagger: 70, ...options };
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

    lb.querySelector('.lightbox-close').addEventListener('click', close);
    lb.querySelector('.lightbox-prev').addEventListener('click', () => step(-1));
    lb.querySelector('.lightbox-next').addEventListener('click', () => step(1));
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
