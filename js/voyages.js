/**
 * Données partagées — Voyage Léo Montourcy
 * Les fichiers listés sont les versions web (.webp / .mp4) produites par tools/preparer_medias.sh.
 * Vérification : python3 tools/verifier.py
 */
const VOYAGES = {
  data: {
    'abu-dhabi': { name: 'Abu Dhabi',     meta: 'Émirats arabes unis', color: '#1a2f4a', country: 'Émirats',
      photos: ['abudhabi_1.webp','abudhabi_2.webp','abudhabi_3.webp','abudhabi_4.webp','abudhabi_5.webp','abudhabi_6.webp','abudhabi_7.webp'],
      photoDir: 'photo_site/abudhabi' },

    arcachon: { name: 'Arcachon', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['arcachon_1.webp'],
      photoDir: 'photo_site/arcachon' },

    bonifacio: { name: 'Bonifacio', meta: 'Corse · France', color: '#5c4033', country: 'France',
      photos: ['bonifacio_7.webp','bonifacio_2.webp','bonifacio_8.webp','bonifacio_6.webp','bonifacio_3.webp','bonifacio_5.webp','bonifacio_9.webp','bonifacio_1.webp','bonifacio_4.webp'],
      photoDir: 'photo_site/bonifacio' },

    bordeaux: { name: 'Bordeaux', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['bordeaux_2.webp','bordeaux_1.webp'],
      photoDir: 'photo_site/bordeaux' },

    boston: { name: 'Boston', meta: 'États-Unis', color: '#2c4a6e', country: 'États-Unis',
      photos: ['boston_11.webp','boston_8.webp','boston_10.webp','boston_2.webp','boston_9.webp','boston_7.webp','boston_12.webp','boston_3.webp','boston_5.webp','boston_4.webp','boston_6.webp','boston_1.webp'],
      photoDir: 'photo_site/boston' },

    brive: { name: 'Brive', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['brive_1.webp'],
      photoDir: 'photo_site/brive' },

    cadaques: { name: 'Cadaqués', meta: 'Espagne', color: '#6b4423', country: 'Espagne',
      photos: ['cadaques_2.webp','cadaques_5.webp','cadaques_1.webp','cadaques_3.webp','cadaques_4.webp'],
      photoDir: 'photo_site/cadaques' },

    cannes: { name: 'Cannes', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['cannes_1.webp','cannes_3.webp','cannes_7.webp','cannes_5.webp','cannes_2.webp','cannes_4.webp','cannes_6.webp'],
      photoDir: 'photo_site/cannes' },

    capdagde: { name: 'Cap d\'Agde', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['capdagde_1.webp'],
      photoDir: 'photo_site/capdagde' },

    dubai: { name: 'Dubaï', meta: 'Émirats arabes unis', color: '#1a2f4a', country: 'Émirats',
      photos: ['dubai_4.webp','dubai_12.webp','dubai_14.webp','dubai_18.webp','dubai_2.webp','dubai_17.webp','dubai_3.webp','dubai_1.webp','dubai_8.webp','dubai_5.webp','dubai_19.webp','dubai_20.webp','dubai_9.webp','dubai_11.webp','dubai_13.webp','dubai_15.webp','dubai_10.webp','dubai_7.webp','dubai_16.webp','dubai_6.webp'],
      photoDir: 'photo_site/dubai' },

    liege: { name: 'Liège', meta: 'Belgique', color: '#4a5c6e', country: 'Belgique',
      photos: ['liege_1.webp'],
      photoDir: 'photo_site/liege' },

    limoge: { name: 'Limoges', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['limoge_1.webp'],
      photoDir: 'photo_site/limoge' },

    madrid: { name: 'Madrid', meta: 'Espagne', color: '#6b4423', country: 'Espagne',
      photos: ['madrid_1.webp'],
      photoDir: 'photo_site/madrid' },

    martigue: { name: 'Martigues', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['martigue_1.webp'],
      photoDir: 'photo_site/martigue' },

    monaco: { name: 'Monaco', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['monaco_2.webp','monaco_4.webp','monaco_3.webp','monaco_5.webp','monaco_1.webp'],
      photoDir: 'photo_site/monaco' },

    montreal: { name: 'Montréal', meta: 'Canada', color: '#2c4a6e', country: 'Canada',
      photos: ['montreal_14.webp','montreal_72.webp','montreal_45.webp','montreal_50.webp','montreal_39.webp','montreal_37.webp','montreal_33.webp','montreal_91.webp','montreal_13.webp','montreal_64.webp','montreal_120.webp','montreal_63.webp','montreal_16.webp','montreal_60.webp','montreal_58.webp','montreal_119.webp','montreal_59.webp','montreal_118.webp','montreal_76.webp','montreal_32.webp','montreal_15.webp','montreal_89.webp','montreal_41.webp','montreal_40.webp','montreal_31.webp','montreal_10.webp','montreal_123.webp','montreal_90.webp','montreal_30.webp','montreal_11.webp','montreal_27.webp','montreal_70.webp','montreal_99.webp','montreal_71.webp','montreal_57.webp','montreal_74.webp','montreal_81.webp','montreal_73.webp','montreal_5.webp','montreal_38.webp','montreal_7.webp','montreal_122.webp','montreal_12.webp','montreal_113.webp','montreal_112.webp','montreal_82.webp','montreal_20.webp','montreal_79.webp','montreal_125.webp','montreal_105.webp','montreal_34.webp','montreal_98.webp','montreal_93.webp','montreal_80.webp','montreal_86.webp','montreal_104.webp','montreal_103.webp','montreal_85.webp','montreal_75.webp','montreal_18.webp','montreal_17.webp','montreal_77.webp','montreal_97.webp','montreal_48.webp','montreal_126.webp','montreal_19.webp','montreal_49.webp','montreal_54.webp','montreal_53.webp','montreal_29.webp','montreal_55.webp','montreal_83.webp','montreal_106.webp','montreal_107.webp','montreal_3.webp','montreal_124.webp','montreal_4.webp','montreal_1.mp4','montreal_2.mp4','montreal_6.mp4','montreal_8.mp4','montreal_21.mp4','montreal_22.mp4','montreal_23.mp4','montreal_24.mp4','montreal_25.mp4','montreal_26.mp4','montreal_28.mp4','montreal_35.mp4','montreal_36.mp4','montreal_42.mp4','montreal_43.mp4','montreal_44.mp4','montreal_46.mp4','montreal_47.mp4','montreal_51.mp4','montreal_52.mp4','montreal_56.mp4','montreal_61.mp4','montreal_62.mp4','montreal_65.mp4','montreal_66.mp4','montreal_67.mp4','montreal_68.mp4','montreal_69.mp4','montreal_78.mp4','montreal_84.mp4','montreal_87.mp4','montreal_88.mp4','montreal_92.mp4','montreal_94.mp4','montreal_95.mp4','montreal_96.mp4','montreal_100.mp4','montreal_101.mp4','montreal_102.mp4','montreal_108.mp4','montreal_109.mp4','montreal_110.mp4','montreal_111.mp4','montreal_114.mp4','montreal_115.mp4','montreal_116.mp4','montreal_117.mp4','montreal_121.mp4'],
      photoDir: 'photo_site/montreal' },

    newyork: { name: 'New York', meta: 'États-Unis', color: '#2c4a6e', country: 'États-Unis', hasVideoCover: true,
      photos: ['newyork_89.webp','newyork_77.webp','newyork_36.webp','newyork_96.webp','newyork_8.webp','newyork_49.webp','newyork_47.webp','newyork_56.webp','newyork_12.webp','newyork_94.webp','newyork_53.webp','newyork_21.webp','newyork_69.webp','newyork_91.webp','newyork_41.webp','newyork_24.webp','newyork_30.webp','newyork_92.webp','newyork_80.webp','newyork_26.webp','newyork_50.webp','newyork_57.webp','newyork_62.webp','newyork_29.webp','newyork_38.webp','newyork_46.webp','newyork_72.webp','newyork_64.webp','newyork_73.webp','newyork_22.webp','newyork_16.webp','newyork_66.webp','newyork_27.webp','newyork_13.webp','newyork_54.webp','newyork_31.webp','newyork_84.webp','newyork_14.webp','newyork_37.webp','newyork_78.webp','newyork_48.webp','newyork_19.webp','newyork_87.webp','newyork_40.webp','newyork_83.webp','newyork_70.webp','newyork_76.webp','newyork_3.webp','newyork_59.webp','newyork_60.webp','newyork_67.webp','newyork_75.webp','newyork_61.webp','newyork_39.webp','newyork_85.webp','newyork_74.webp','newyork_93.webp','newyork_4.webp','newyork_11.webp','newyork_79.webp','newyork_58.webp','newyork_63.webp','newyork_45.webp','newyork_2.webp','newyork_17.webp','newyork_34.webp','newyork_9.webp','newyork_20.webp','newyork_28.webp','newyork_68.webp','newyork_23.webp','newyork_33.webp','newyork_71.webp','newyork_25.webp','newyork_81.webp','newyork_44.webp','newyork_7.webp','newyork_32.webp','newyork_51.webp','newyork_43.webp','newyork_5.webp','newyork_15.webp','newyork_10.webp','newyork_42.webp','newyork_95.webp','newyork_52.webp','newyork_18.webp','newyork_82.webp','newyork_35.webp','newyork_86.webp','newyork_65.webp','newyork_6.webp','newyork_55.webp','newyork_88.webp','newyork_90.webp'],
      photoDir: 'photo_site/newyork' },

    niagara: { name: 'Niagara Falls', meta: 'Canada', color: '#2c4a6e', country: 'Canada',
      photos: ['niagara_76.webp','niagara_80.webp','niagara_75.webp','niagara_77.webp','niagara_78.webp','niagara_72.webp','niagara_6.webp','niagara_7.webp','niagara_38.webp','niagara_57.webp','niagara_8.webp','niagara_9.webp','niagara_29.webp','niagara_35.webp','niagara_28.webp','niagara_31.webp','niagara_53.webp','niagara_30.webp','niagara_51.webp','niagara_2.webp','niagara_55.webp','niagara_56.webp','niagara_33.webp','niagara_10.webp','niagara_61.webp','niagara_40.webp','niagara_48.webp','niagara_54.webp','niagara_60.webp','niagara_42.webp','niagara_3.webp','niagara_45.webp','niagara_82.webp','niagara_41.webp','niagara_26.webp','niagara_32.webp','niagara_27.webp','niagara_62.webp','niagara_68.webp','niagara_47.webp','niagara_66.webp','niagara_63.webp','niagara_50.webp','niagara_83.webp','niagara_69.webp','niagara_44.webp','niagara_11.webp','niagara_46.webp','niagara_14.webp','niagara_70.webp','niagara_37.webp','niagara_81.webp','niagara_71.webp','niagara_67.webp','niagara_43.webp','niagara_52.webp','niagara_49.webp','niagara_15.webp','niagara_23.webp','niagara_84.webp','niagara_1.mp4','niagara_4.mp4','niagara_5.mp4','niagara_12.mp4','niagara_13.mp4','niagara_16.mp4','niagara_17.mp4','niagara_18.mp4','niagara_19.mp4','niagara_20.mp4','niagara_21.mp4','niagara_24.mp4','niagara_25.mp4','niagara_34.mp4','niagara_36.mp4','niagara_39.mp4','niagara_58.mp4','niagara_59.mp4','niagara_64.mp4','niagara_65.mp4','niagara_73.mp4','niagara_74.mp4','niagara_79.mp4'],
      photoDir: 'photo_site/niagara' },

    nice: { name: 'Nice', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['nice_1.webp','nice_2.webp','nice_4.webp','nice_3.webp'],
      photoDir: 'photo_site/nice' },

    osani: { name: 'Osani', meta: 'Corse · France', color: '#5c4033', country: 'France',
      photos: ['osani_2.webp','osani_3.webp','osani_1.webp'],
      photoDir: 'photo_site/osani' },

    oslo: { name: 'Oslo', meta: 'Norvège', color: '#3d5248', country: 'Norvège',
      photos: ['oslo_6.webp','oslo_5.webp','oslo_1.webp','oslo_4.webp','oslo_3.webp','oslo_2.webp','oslo_8.webp','oslo_7.webp','oslo_9.webp','oslo_10.webp'],
      photoDir: 'photo_site/oslo' },

    paris: { name: 'Paris', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['paris_1.webp'],
      photoDir: 'photo_site/paris' },

    quebec: { name: 'Québec', meta: 'Canada', color: '#2c4a6e', country: 'Canada',
      photos: ['quebec_1.webp'],
      photoDir: 'photo_site/quebec' },

    sainttropez: { name: 'Saint-Tropez', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['sainttropez_1.webp'],
      photoDir: 'photo_site/sainttropez' },

    toronto: { name: 'Toronto', meta: 'Canada', color: '#2c4a6e', country: 'Canada', coverScale: 1.65, hasVideoCover: true,
      photos: ['toronto_148.webp','toronto_51.webp','toronto_52.webp','toronto_151.webp','toronto_66.webp','toronto_150.webp','toronto_70.webp','toronto_32.webp','toronto_73.webp','toronto_39.webp','toronto_75.webp','toronto_87.webp','toronto_17.webp','toronto_158.webp','toronto_159.webp','toronto_72.webp','toronto_71.webp','toronto_85.webp','toronto_34.webp','toronto_31.webp','toronto_37.webp','toronto_28.webp','toronto_86.webp','toronto_78.webp','toronto_19.webp','toronto_53.webp','toronto_47.webp','toronto_44.webp','toronto_12.webp','toronto_84.webp','toronto_9.webp','toronto_43.webp','toronto_145.webp','toronto_103.webp','toronto_48.webp','toronto_79.webp','toronto_157.webp','toronto_129.webp','toronto_2.webp','toronto_33.webp','toronto_82.webp','toronto_152.webp','toronto_27.webp','toronto_8.webp','toronto_15.webp','toronto_67.webp','toronto_83.webp','toronto_30.webp','toronto_10.webp','toronto_107.webp','toronto_144.webp','toronto_16.webp','toronto_45.webp','toronto_76.webp','toronto_63.webp','toronto_109.webp','toronto_136.webp','toronto_108.webp','toronto_81.webp','toronto_38.webp','toronto_25.webp','toronto_134.webp','toronto_96.webp','toronto_3.webp','toronto_77.webp','toronto_141.webp','toronto_106.webp','toronto_56.webp','toronto_64.webp','toronto_20.webp','toronto_57.webp','toronto_29.webp','toronto_161.webp','toronto_36.webp','toronto_156.webp','toronto_143.webp','toronto_13.webp','toronto_59.webp','toronto_68.webp','toronto_23.webp','toronto_62.webp','toronto_142.webp','toronto_11.webp','toronto_58.webp','toronto_26.webp','toronto_127.webp','toronto_5.webp','toronto_114.webp','toronto_50.webp','toronto_4.webp','toronto_98.webp','toronto_18.webp','toronto_146.webp','toronto_102.webp','toronto_140.webp','toronto_135.webp','toronto_24.webp','toronto_147.webp','toronto_46.webp','toronto_104.webp','toronto_40.webp','toronto_74.webp','toronto_1.webp','toronto_116.webp','toronto_7.webp','toronto_117.webp','toronto_128.webp','toronto_125.webp','toronto_123.webp','toronto_6.webp','toronto_118.webp','toronto_160.webp','toronto_65.webp','toronto_122.webp','toronto_94.webp','toronto_124.webp','toronto_115.webp','toronto_105.webp','toronto_14.mp4','toronto_21.mp4','toronto_22.mp4','toronto_35.mp4','toronto_41.mp4','toronto_42.mp4','toronto_49.mp4','toronto_54.mp4','toronto_55.mp4','toronto_60.mp4','toronto_61.mp4','toronto_69.mp4','toronto_80.mp4','toronto_88.mp4','toronto_89.mp4','toronto_90.mp4','toronto_91.mp4','toronto_92.mp4','toronto_93.mp4','toronto_95.mp4','toronto_99.mp4','toronto_100.mp4','toronto_101.mp4','toronto_110.mp4','toronto_111.mp4','toronto_112.mp4','toronto_113.mp4','toronto_119.mp4','toronto_120.mp4','toronto_121.mp4','toronto_126.mp4','toronto_130.mp4','toronto_131.mp4','toronto_132.mp4','toronto_137.mp4','toronto_138.mp4','toronto_139.mp4','toronto_149.mp4','toronto_153.mp4','toronto_154.mp4','toronto_155.mp4'],
      photoDir: 'photo_site/toronto' },

    toulouse: { name: 'Toulouse', meta: 'France', color: '#5c4033', country: 'France',
      photos: ['toulouse_3.webp','toulouse_2.webp','toulouse_1.webp','toulouse_4.webp'],
      photoDir: 'photo_site/toulouse' },

    sarajevo: { name: 'Sarajevo', meta: 'Bosnie-Herzégovine', color: '#4a5c4a', country: 'Bosnie',
      photos: ['sarajevo_1.webp','sarajevo_3.webp','sarajevo_7.webp','sarajevo_4.webp','sarajevo_2.webp','sarajevo_5.mp4','sarajevo_6.mp4'],
      photoDir: 'photo_site/sarajevo' },

    budva: { name: 'Budva', meta: 'Monténégro', color: '#4a5c4a', country: 'Monténégro',
      photos: ['budva_3.webp','budva_1.webp','budva_4.webp','budva_2.webp'],
      photoDir: 'photo_site/budva' },

    dubrovnik: { name: 'Dubrovnik', meta: 'Croatie', color: '#4a5c4a', country: 'Croatie',
      photos: ['dubrovnik_5.webp','dubrovnik_4.webp','dubrovnik_13.webp','dubrovnik_15.webp','dubrovnik_19.webp','dubrovnik_6.webp','dubrovnik_16.webp','dubrovnik_18.webp','dubrovnik_10.webp','dubrovnik_20.webp','dubrovnik_9.webp','dubrovnik_7.webp','dubrovnik_14.webp','dubrovnik_8.webp','dubrovnik_12.webp','dubrovnik_1.mp4','dubrovnik_2.mp4','dubrovnik_3.mp4','dubrovnik_11.mp4'],
      photoDir: 'photo_site/dubrovnik' },

    mostar: { name: 'Mostar', meta: 'Bosnie-Herzégovine', color: '#4a5c4a', country: 'Bosnie',
      photos: ['mostar_4.webp','mostar_6.webp','mostar_5.webp','mostar_3.webp','mostar_9.webp','mostar_24.webp','mostar_15.webp','mostar_19.webp','mostar_22.webp','mostar_18.webp','mostar_21.webp','mostar_16.webp','mostar_23.webp','mostar_8.webp','mostar_1.mp4','mostar_2.mp4'],
      photoDir: 'photo_site/mostar' },

    podgorica: { name: 'Podgorica', meta: 'Monténégro', color: '#4a5c4a', country: 'Monténégro',
      photos: ['podgorica_5.webp','podgorica_6.webp','podgorica_2.webp','podgorica_3.webp','podgorica_4.webp','podgorica_13.webp','podgorica_12.webp','podgorica_10.webp','podgorica_11.webp','podgorica_7.webp','podgorica_1.mp4','podgorica_8.mp4','podgorica_9.mp4'],
      photoDir: 'photo_site/podgorica' },

    valencia: { name: 'Valence', meta: 'Espagne', color: '#6b4423', country: 'Espagne',
      photos: ['valencia_50.webp','valencia_23.webp','valencia_166.webp','valencia_22.webp','valencia_131.webp','valencia_169.webp','valencia_165.webp','valencia_121.webp','valencia_167.webp','valencia_15.webp','valencia_16.webp','valencia_134.webp','valencia_107.webp','valencia_28.webp','valencia_127.webp','valencia_126.webp','valencia_170.webp','valencia_26.webp','valencia_46.webp','valencia_168.webp','valencia_136.webp','valencia_62.webp','valencia_135.webp','valencia_137.webp','valencia_45.webp','valencia_32.webp','valencia_129.webp','valencia_29.webp','valencia_117.webp','valencia_11.webp','valencia_91.webp','valencia_14.webp','valencia_10.webp','valencia_33.webp','valencia_24.webp','valencia_148.webp','valencia_40.webp','valencia_173.webp','valencia_72.webp','valencia_35.webp','valencia_110.webp','valencia_153.webp','valencia_171.webp','valencia_34.webp','valencia_57.webp','valencia_71.webp','valencia_151.webp','valencia_20.webp','valencia_130.webp','valencia_17.webp','valencia_125.webp','valencia_12.webp','valencia_13.webp','valencia_124.webp','valencia_76.webp','valencia_108.webp','valencia_160.webp','valencia_133.webp','valencia_75.webp','valencia_128.webp','valencia_42.webp','valencia_152.webp','valencia_149.webp','valencia_19.webp','valencia_161.webp','valencia_27.webp','valencia_58.webp','valencia_7.webp','valencia_113.webp','valencia_102.webp','valencia_69.webp','valencia_39.webp','valencia_8.webp','valencia_25.webp','valencia_41.webp','valencia_38.webp','valencia_43.webp','valencia_74.webp','valencia_37.webp','valencia_172.webp','valencia_138.webp','valencia_47.webp','valencia_78.webp','valencia_162.webp','valencia_44.webp','valencia_9.webp','valencia_132.webp','valencia_94.webp','valencia_150.webp','valencia_140.webp','valencia_49.webp','valencia_30.webp','valencia_90.webp','valencia_147.webp','valencia_36.webp','valencia_93.webp','valencia_159.webp','valencia_139.webp','valencia_156.webp','valencia_21.webp','valencia_164.webp','valencia_123.webp','valencia_18.webp','valencia_95.webp','valencia_146.webp','valencia_51.webp','valencia_89.webp','valencia_56.webp','valencia_96.webp','valencia_97.webp','valencia_79.webp','valencia_77.webp','valencia_52.webp','valencia_111.webp','valencia_141.webp','valencia_63.webp','valencia_119.webp','valencia_109.webp','valencia_59.webp','valencia_53.webp','valencia_55.webp','valencia_73.webp','valencia_66.webp','valencia_48.webp','valencia_80.webp','valencia_163.webp','valencia_87.webp','valencia_116.webp','valencia_82.webp','valencia_67.webp','valencia_145.webp','valencia_144.webp','valencia_81.webp','valencia_54.webp','valencia_92.webp','valencia_65.webp','valencia_101.webp','valencia_100.webp','valencia_68.webp','valencia_31.webp','valencia_103.webp','valencia_84.webp','valencia_83.webp','valencia_70.webp','valencia_86.webp','valencia_85.webp','valencia_60.webp','valencia_1.mp4','valencia_2.mp4','valencia_3.mp4','valencia_4.mp4','valencia_5.mp4','valencia_6.mp4','valencia_88.mp4','valencia_98.mp4','valencia_99.mp4','valencia_104.mp4','valencia_105.mp4','valencia_106.mp4','valencia_112.mp4','valencia_114.mp4','valencia_115.mp4','valencia_118.mp4','valencia_120.mp4'],
      photoDir: 'photo_site/valencia' },

    perast: { name: 'Perast', meta: 'Monténégro', color: '#4a5c4a', country: 'Monténégro',
      photos: ['perast_5.webp','perast_15.webp','perast_14.webp','perast_12.webp','perast_8.webp','perast_18.webp','perast_9.webp','perast_19.webp','perast_17.webp','perast_10.webp','perast_2.webp','perast_20.webp','perast_4.webp','perast_21.webp','perast_7.webp','perast_6.webp','perast_3.webp','perast_13.webp','perast_16.webp','perast_11.webp','perast_1.mp4'],
      photoDir: 'photo_site/perast' },

    zabljak: { name: 'Žabljak', meta: 'Monténégro', color: '#4a5c4a', country: 'Monténégro',
      photos: ['zabljak_12.webp','zabljak_11.webp','zabljak_9.webp','zabljak_5.webp','zabljak_2.webp','zabljak_8.webp','zabljak_7.webp','zabljak_6.webp','zabljak_1.webp','zabljak_3.webp','zabljak_10.webp','zabljak_4.mp4'],
      photoDir: 'photo_site/zabljak' },

    kotor: { name: 'Kotor', meta: 'Monténégro', color: '#4a5c4a', country: 'Monténégro',
      photos: ['kotor_1.webp','kotor_6.webp','kotor_5.webp','kotor_13.webp','kotor_11.webp','kotor_12.webp','kotor_14.webp','kotor_10.webp','kotor_2.webp','kotor_9.webp','kotor_3.webp','kotor_8.webp','kotor_7.webp'],
      photoDir: 'photo_site/kotor' },

    tivat: { name: 'Tivat', meta: 'Monténégro', color: '#4a5c4a', country: 'Monténégro',
      photos: ['tivat_34.webp','tivat_10.webp','tivat_11.webp','tivat_3.webp','tivat_27.webp','tivat_28.webp','tivat_15.webp','tivat_21.webp','tivat_13.webp','tivat_14.webp','tivat_17.webp','tivat_16.webp','tivat_12.webp','tivat_36.webp','tivat_6.webp','tivat_4.webp','tivat_9.webp','tivat_31.webp','tivat_18.webp','tivat_20.webp','tivat_29.webp','tivat_5.webp','tivat_30.webp','tivat_19.webp','tivat_25.webp','tivat_24.webp','tivat_8.webp','tivat_35.webp','tivat_22.webp','tivat_26.webp','tivat_7.webp','tivat_33.webp','tivat_23.webp','tivat_1.mp4','tivat_2.mp4'],
      photoDir: 'photo_site/tivat' }
  },

  places: [
    /* ── Amérique du Nord ── */
    { key: 'newyork',      label: 'New York',        lat:   40.7128, lng:  -74.0060 },
    { key: 'boston',       label: 'Boston',          lat:   42.3601, lng:  -71.0589 },
    { key: 'toronto',      label: 'Toronto',         lat:   43.6532, lng:  -79.3832 },
    { key: 'montreal',     label: 'Montréal',        lat:   45.5017, lng:  -73.5673 },
    { key: 'quebec',       label: 'Québec',          lat:   46.8139, lng:  -71.2080 },
    { key: 'niagara',      label: 'Niagara Falls',   lat:   43.0962, lng:  -79.0377 },

    /* ── Europe du Nord ── */
    { key: 'oslo',         label: 'Oslo',            lat:   59.9139, lng:   10.7522 },
    { key: 'liege',        label: 'Liège',           lat:   50.6292, lng:    5.5797 },

    /* ── France ── */
    { key: 'paris',        label: 'Paris',           lat:   48.8566, lng:    2.3522 },
    { key: 'toulouse',     label: 'Toulouse',        lat:   43.6047, lng:    1.4442 },
    { key: 'bordeaux',     label: 'Bordeaux',        lat:   44.8378, lng:   -0.5792 },
    { key: 'brive',        label: 'Brive',           lat:   45.1590, lng:    1.5322 },
    { key: 'limoge',       label: 'Limoges',         lat:   45.8336, lng:    1.2611 },
    { key: 'arcachon',     label: 'Arcachon',        lat:   44.6611, lng:   -1.1732 },
    { key: 'martigue',     label: 'Martigues',       lat:   43.4063, lng:    5.0511 },
    { key: 'capdagde',     label: 'Cap d\'Agde',     lat:   43.3055, lng:    3.4751 },
    { key: 'cannes',       label: 'Cannes',          lat:   43.5528, lng:    7.0174 },
    { key: 'nice',         label: 'Nice',            lat:   43.7102, lng:    7.2620 },
    { key: 'monaco',       label: 'Monaco',          lat:   43.7384, lng:    7.4246 },
    { key: 'sainttropez',  label: 'Saint-Tropez',    lat:   43.2727, lng:    6.6407 },

    /* ── Corse ── */
    { key: 'bonifacio',    label: 'Bonifacio',       lat:   41.3878, lng:    9.1597 },
    { key: 'osani',        label: 'Osani',           lat:   42.3469, lng:    8.5461 },

    /* ── Espagne ── */
    { key: 'madrid',       label: 'Madrid',          lat:   40.4168, lng:   -3.7038 },
    { key: 'cadaques',     label: 'Cadaqués',        lat:   42.2885, lng:    3.2782 },
    { key: 'valencia',     label: 'Valence',         lat:   39.4699, lng:   -0.3763 },

    /* ── Moyen-Orient ── */
    { key: 'dubai',        label: 'Dubaï',           lat:   25.2048, lng:   55.2708 },
    { key: 'abu-dhabi',    label: 'Abu Dhabi',       lat:   24.4539, lng:   54.3773 },

    /* ── Balkans ── */
    { key: 'sarajevo',     label: 'Sarajevo',        lat:   43.8563, lng:   18.4131 },
    { key: 'budva',        label: 'Budva',           lat:   42.2911, lng:   18.8403 },
    { key: 'dubrovnik',    label: 'Dubrovnik',       lat:   42.6507, lng:   18.0944 },
    { key: 'mostar',       label: 'Mostar',          lat:   43.3438, lng:   17.8078 },
    { key: 'podgorica',    label: 'Podgorica',       lat:   42.4411, lng:   19.2636 },
    { key: 'perast',       label: 'Perast',          lat:   42.4867, lng:   18.6996 },
    { key: 'zabljak',      label: 'Žabljak',         lat:   43.1555, lng:   19.1226 },
    { key: 'kotor',        label: 'Kotor',           lat:   42.4247, lng:   18.7712 },
    { key: 'tivat',        label: 'Tivat',           lat:   42.4364, lng:   18.6312 }
  ],

  TILE_URL: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  TILE_ATTR: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',

  /** Version des médias : à incrémenter quand des fichiers sont remplacés (cache navigateur). */
  MEDIA_VERSION: 4,

  /** Données d'une ville, ou null. hasOwn évite ?ville=constructor / __proto__. */
  get(key) {
    return (typeof key === 'string' && Object.prototype.hasOwnProperty.call(this.data, key))
      ? this.data[key]
      : null;
  },

  place(key) {
    return this.places.find(p => p.key === key) || null;
  },

  villeUrl(key) {
    return 'ville.html?ville=' + encodeURIComponent(key);
  },

  isVideo(filename) {
    return /\.(mp4|webm)$/i.test(filename);
  },

  mediaUrl(d, filename) {
    return d.photoDir + '/' + encodeURIComponent(filename) + '?v=' + this.MEDIA_VERSION;
  },

  /** URL de la première photo d'une ville (vignette, repli des aperçus). */
  coverImage(key) {
    const d = this.get(key);
    if (!d || !d.photos) return '';
    const img = d.photos.find(f => !this.isVideo(f));
    return img ? this.mediaUrl(d, img) : '';
  },

  coverVideo(key) {
    const d = this.get(key);
    return (d && d.hasVideoCover)
      ? 'video/covers/' + encodeURIComponent(key) + '.mp4?v=' + this.MEDIA_VERSION
      : '';
  },

  counts(key) {
    const d = this.get(key);
    const photos = d && d.photos ? d.photos : [];
    const videos = photos.filter(f => this.isVideo(f)).length;
    return { photos: photos.length - videos, videos };
  },

  allMedias(key) {
    const d = this.get(key);
    if (!d || !d.photos) return [];
    return d.photos.map((filename, i) => ({
      type: this.isVideo(filename) ? 'video' : 'img',
      src: this.mediaUrl(d, filename),
      alt: this.imageAlt(d.name, i)
    }));
  },

  imageAlt(placeName, index) {
    return 'Souvenir de voyage à ' + placeName + ', média ' + (index + 1);
  },

  /** Crée un élément DOM sans innerHTML. */
  el(tag, props, children) {
    const node = document.createElement(tag);
    Object.entries(props || {}).forEach(([k, v]) => {
      if (k === 'className') node.className = v;
      else if (k === 'text') node.textContent = v;
      else if (k === 'dataset') Object.assign(node.dataset, v);
      else if (k in node && typeof v !== 'string') node[k] = v;
      else node.setAttribute(k, v);
    });
    (children || []).forEach(c => c && node.appendChild(c));
    return node;
  },

  hasFinePointer() {
    return window.matchMedia('(pointer: fine)').matches;
  },

  prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  /**
   * Apparition au scroll. Le décalage (stagger) est calculé par lot d'éléments
   * entrant ensemble à l'écran, pas sur l'index global de la page.
   * opts.className : classe ajoutée ('is-visible' par défaut)
   * opts.onEnter / opts.onLeave : callbacks optionnels (garde l'observation active)
   */
  observeReveal(selector, opts = {}) {
    const o = {
      className: 'is-visible', stagger: 70,
      rootMargin: '0px 0px -8% 0px', threshold: 0.12, ...opts
    };
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    const keepWatching = Boolean(o.onEnter || o.onLeave);

    if (this.prefersReducedMotion() || !('IntersectionObserver' in window)) {
      els.forEach(el => {
        el.classList.add(o.className);
        if (o.onEnter) o.onEnter(el);
      });
      return;
    }

    const io = new IntersectionObserver(entries => {
      let batch = 0;
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          if (!el.classList.contains(o.className)) {
            setTimeout(() => el.classList.add(o.className), batch++ * o.stagger);
          }
          if (o.onEnter) o.onEnter(el);
          if (!keepWatching) io.unobserve(el);
        } else if (o.onLeave) {
          o.onLeave(el);
        }
      });
    }, { rootMargin: o.rootMargin, threshold: o.threshold });

    els.forEach(el => io.observe(el));
  },

  /** Suivi fluide du pop-up carte (ressort). La boucle s'arrête une fois la cible atteinte. */
  createPreviewFollower(el) {
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
    let raf = null;
    const ease = 0.14;

    function clamp(clientX, clientY, width, height) {
      const pad = 18;
      let x = clientX + pad;
      let y = clientY - height / 2;
      if (x + width > window.innerWidth - pad) x = clientX - width - pad;
      y = Math.max(pad, Math.min(y, window.innerHeight - height - pad));
      return [x, y];
    }

    function apply() {
      el.style.transform = 'translate3d(' + currentX + 'px,' + currentY + 'px,0)';
    }

    function tick() {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      apply();
      if (Math.abs(targetX - currentX) < 0.5 && Math.abs(targetY - currentY) < 0.5) {
        raf = null;
        return;
      }
      raf = requestAnimationFrame(tick);
    }

    return {
      move(clientX, clientY, width, height) {
        [targetX, targetY] = clamp(clientX, clientY, width, height);
        if (!raf) raf = requestAnimationFrame(tick);
      },
      snap(clientX, clientY, width, height) {
        [targetX, targetY] = clamp(clientX, clientY, width, height);
        currentX = targetX;
        currentY = targetY;
        apply();
      },
      stop() {
        if (raf) cancelAnimationFrame(raf);
        raf = null;
      }
    };
  },

  /** Lightbox plein écran (ville.html). */
  initLightbox(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return null;
    const el = this.el.bind(this);

    const closeBtn = el('button', { type: 'button', className: 'lightbox-close', 'aria-label': 'Fermer', text: '✕' });
    const prevBtn = el('button', { type: 'button', className: 'lightbox-prev', 'aria-label': 'Précédent', text: '‹' });
    const nextBtn = el('button', { type: 'button', className: 'lightbox-next', 'aria-label': 'Suivant', text: '›' });
    const stage = el('div', { className: 'lightbox-stage' });
    const caption = el('p', { className: 'lightbox-caption', 'aria-live': 'polite' });
    const lb = el('div', {
      className: 'lightbox', role: 'dialog', 'aria-modal': 'true',
      'aria-hidden': 'true', 'aria-label': 'Visionneuse'
    }, [closeBtn, prevBtn, nextBtn, stage, caption]);
    document.body.appendChild(lb);

    const items = [];
    let index = 0;
    let lastFocus = null;

    container.querySelectorAll('.cell').forEach(cell => {
      const media = cell.querySelector('img, video');
      if (!media) return;
      const i = items.length;
      items.push({
        type: media.tagName === 'VIDEO' ? 'video' : 'img',
        src: media.dataset.src || media.getAttribute('src'),
        alt: media.getAttribute('alt') || media.getAttribute('aria-label') || ''
      });
      cell.classList.add('cell-clickable');
      cell.tabIndex = 0;
      cell.setAttribute('role', 'button');
      cell.setAttribute('aria-label', 'Agrandir : ' + items[i].alt);
      cell.addEventListener('click', () => open(i));
      cell.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); }
      });
    });

    function render() {
      stage.replaceChildren();
      const item = items[index];
      if (!item) return;
      if (item.type === 'video') {
        const v = el('video', { src: item.src, autoplay: true, muted: true, loop: true, playsInline: true, controls: true, 'aria-label': item.alt });
        stage.appendChild(v);
      } else {
        stage.appendChild(el('img', { src: item.src, alt: item.alt }));
      }
      caption.textContent = item.alt + ' (' + (index + 1) + ' / ' + items.length + ')';
    }

    function open(i) {
      lastFocus = document.activeElement;
      index = i;
      render();
      lb.classList.add('is-open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function close() {
      lb.classList.remove('is-open');
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      stage.replaceChildren();
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    function step(d) {
      index = (index + d + items.length) % items.length;
      render();
    }

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', () => step(-1));
    nextBtn.addEventListener('click', () => step(1));
    lb.addEventListener('click', e => { if (e.target === lb || e.target === stage) close(); });
    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'Tab') {
        // Garde le focus dans la lightbox
        const focusables = [closeBtn, prevBtn, nextBtn, ...stage.querySelectorAll('video')];
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    return { open, close };
  }
};
