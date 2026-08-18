import { ServiceItem, BeforeAfterItem } from '../types';

export const servicesData: ServiceItem[] = [
  // --- PARTICULIERS ---
  {
    id: 'menage-regulier',
    category: 'particuliers',
    title: 'Ménage régulier à domicile',
    shortDesc: 'Entretien récurrent et minutieux de votre intérieur par un(e) intervenant(e) dédié(e) et formé(e).',
    fullDesc: 'Déléguez l’entretien de votre maison ou appartement à des professionnels de confiance. Nous affectons toujours le même intervenant pour une parfaite connaissance de vos habitudes et de votre logement.',
    icon: 'Sparkles',
    badge: '50% Crédit d’impôt',
    startingPrice: 'Sur devis personnalisé',
    priceNote: 'Éligible à l’avance immédiate du crédit d’impôt 50%',
    eligibleCreditImpot: true,
    frequency: ['Hebdomadaire (1 à 3x/semaine)', 'Bimensuel (toutes les 2 semaines)', 'Mensuel'],
    durationEstimate: 'À partir de 2h par intervention',
    included: [
      'Dépoussiérage méticuleux des meubles, étagères et objets décoratifs',
      'Aspiration et lavage soigné de tous types de sols (parquet, carrelage, marbre)',
      'Nettoyage et désinfection complète des sanitaires et salles de bain',
      'Dégraissage et nettoyage extérieur des électroménagers et plan de travail cuisine',
      'Vidage et désinfection des poubelles avec tri sélectif',
      'Aération et remise en ordre harmonieuse de chaque pièce'
    ],
    equipmentUsed: ['Produits écocertifiés Ecolabel®', 'Microfibres antibactériennes avec code couleur', 'Aspirateurs HEPA anti-allergènes'],
    idealFor: 'Familles actives, cadres, seniors et propriétaires souhaitant un logement toujours impeccable.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'grand-nettoyage-ponctuel',
    category: 'particuliers',
    title: 'Nettoyage ponctuel / Grand nettoyage',
    shortDesc: 'Remise à neuf intégrale de fond en comble (nettoyage de printemps, avant réception ou emménagement).',
    fullDesc: 'Une intervention approfondie en profondeur menée par une équipe équipée de matériel professionnel pour éliminer les saletés incrustées, le calcaire tenace et la poussière accumulée.',
    icon: 'Zap',
    badge: 'Coup de propre intensif',
    startingPrice: 'Sur devis gratuit',
    priceNote: 'Éligible au crédit d’impôt de 50%',
    eligibleCreditImpot: true,
    frequency: ['Ponctuel à la demande', 'Saisonnier (Printemps / Automne)'],
    durationEstimate: '3h à 7h selon superficie',
    included: [
      'Lessivage des portes, plinthes, interrupteurs et encadrements',
      'Dégraissage intérieur/extérieur du four, hotte aspirante et réfrigérateur',
      'Détartrage intensif des faïences, joints, parois de douche et robinetterie',
      'Nettoyage approfondi sous et derrière les meubles déplaçables',
      'Nettoyage des placards de cuisine et dressings',
      'Traitement assainissant vapeur à 180°C si nécessaire'
    ],
    equipmentUsed: ['Nettoyeurs vapeur haute pression', 'Monobrosses pour récurage sols', 'Détergents dégraissants éco-certifiés'],
    idealFor: 'Logements nécessitant un coup d’éclat immédiat, avant un événement familial ou un déménagement.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'fin-de-bail',
    category: 'particuliers',
    title: 'Nettoyage Fin de Bail & État des lieux',
    shortDesc: 'Garantie 100% restitution de caution. Remise aux normes d’un logement avant restitution des clés.',
    fullDesc: 'Ne prenez aucun risque sur votre dépôt de garantie. Nos équipes exécutent un cahier des charges conforme aux exigences strictes des agences immobilières et huissiers de justice.',
    icon: 'KeyRound',
    badge: 'Garantie Caution',
    startingPrice: 'Sur devis express',
    priceNote: 'Attestation officielle fournie pour votre agence',
    eligibleCreditImpot: true,
    frequency: ['Intervention unique rapide'],
    durationEstimate: 'Demi-journée ou journée complète',
    included: [
      'Nettoyage complet des vitres, baies, rails et encadrements intérieurs/extérieurs',
      'Dégraissage intégral de la cuisine (four, plaques, filtres de hotte, placards int/ext)',
      'Détartrage lourd et blanchiment des sanitaires, baignoire, bac à douche',
      'Suppression des traces superficielles sur murs, plinthes et portes',
      'Aspiration et lessivage approfondi des moquettes ou parquets',
      'Garantie ré-intervention offerte sous 24h en cas de remarque lors de l’état des lieux'
    ],
    equipmentUsed: ['Injecteur-extracteur moquettes', 'Nettoyeur vapeur et raclettes professionnelles Unger', 'Produits anticalcaires puissants et détartrants'],
    idealFor: 'Locataires, bailleurs, agences immobilières et propriétaires avant relocation.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'apres-travaux',
    category: 'particuliers',
    title: 'Nettoyage Après Travaux & Rénovation',
    shortDesc: 'Élimination de la laitance de ciment, poussière de plâtre fine, traces de peinture et résidus de colle.',
    fullDesc: 'La fin d’un chantier laisse une poussière tenace et abrasive. Nos techniciens interviennent avec des aspirateurs de classe industrielle et des monobrosses pour rendre votre logement immédiatement habitable.',
    icon: 'Hammer',
    badge: 'Chantier & Rénovation',
    startingPrice: 'Sur devis sous 2h',
    priceNote: 'Visite ou chiffrage sur plan / photos',
    eligibleCreditImpot: true,
    frequency: ['Intervention unique après réception des travaux'],
    durationEstimate: '4h à 8h',
    included: [
      'Aspiration des micro-poussières de plâtre et sciure sur toutes surfaces',
      'Décapage de la laitance de ciment sur carrelages neufs',
      'Grattage sécurisé des projections d’enduit et peinture sur vitres et menuiseries',
      'Dépoussiérage des conduits, radiateurs, prises et aérations',
      'Lessivage des sols avec neutralisation du pH',
      'Évacuation des petits résidus et mise en déchetterie'
    ],
    equipmentUsed: ['Aspirateurs de chantier industriels à filtration M/H', 'Monobrosses haute vitesse', 'Produits neutralisants et décapants neutres'],
    idealFor: 'Particuliers et architectes venant d’achever des travaux de rénovation ou de construction.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'nettoyage-vitres',
    category: 'particuliers',
    title: 'Nettoyage de Vitres & Baies Vitrées',
    shortDesc: 'Transparence et éclat sans trace pour fenêtres, baies coulissantes, verrières et vérandas.',
    fullDesc: 'Nos laveurs de vitres qualifiés redonnent toute leur clarté à vos ouvertures vitrées, y compris les surfaces en hauteur ou d’accès difficile, avec des techniques traditionnelles et à l’eau pure.',
    icon: 'Layers',
    badge: 'Zéro trace garantie',
    startingPrice: 'Sur devis rapide',
    priceNote: 'Éligible au crédit d’impôt de 50%',
    eligibleCreditImpot: true,
    frequency: ['À la demande', 'Abonnement trimestriel / semestriel'],
    durationEstimate: '1h30 à 3h',
    included: [
      'Nettoyage double-face des vitres et fenêtres',
      'Nettoyage méticuleux des montants, encadrements et feuillures',
      'Dépoussiérage et aspiration des rails coulissants de baies vitrées',
      'Nettoyage des garde-corps vitrés et verrières intérieures',
      'Séchage soigné au mouilleur et raclette de précision'
    ],
    equipmentUsed: ['Perches télescopiques en carbone', 'Système d’eau osmosée pure', 'Raclettes professionnelles Unger et microfibres vitres'],
    idealFor: 'Appartements avec grandes baies vitrées, maisons avec vérandas et verrières d’atelier.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'repassage-domicile',
    category: 'particuliers',
    title: 'Repassage & Soin du Linge',
    shortDesc: 'Chemises, linge de lit et vêtements pliés avec rigueur ou suspendus sur cintres.',
    fullDesc: 'Retrouvez un dressing impeccablement soigné sans y consacrer vos soirées et week-ends. Nos experts maîtrisent le repassage délicat de toutes matières (soie, lin, coton, laine).',
    icon: 'Shirt',
    badge: 'Finition pressing',
    startingPrice: 'Sur devis personnalisé',
    priceNote: 'Éligible à l’avance immédiate du crédit d’impôt 50%',
    eligibleCreditImpot: true,
    frequency: ['Hebdomadaire', 'Bimensuel', 'En complément du ménage'],
    durationEstimate: 'À partir de 2h',
    included: [
      'Repassage soigné des chemises, costumes et pantalons de ville',
      'Repassage du linge de maison (draps, nappes, housses de couette)',
      'Pliage millimétré ou mise sous cintre selon vos souhaits',
      'Rangement ordonné dans vos penderies et armoires'
    ],
    equipmentUsed: ['Centrales vapeur professionnelles', 'Semelles téflon pour tissus délicats', 'Pressing spray écologique'],
    idealFor: 'Professionnels en tenue de ville, familles nombreuses et adeptes du linge parfait.',
    image: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=1000&q=80'
  },

  // --- PROFESSIONNELS & TERTIAIRE ---
  {
    id: 'nettoyage-bureaux',
    category: 'professionnels',
    title: 'Bureaux & Espaces de Coworking',
    shortDesc: 'Un cadre de travail sain, stimulant et valorisant pour vos équipes et vos visiteurs.',
    fullDesc: 'Du siège social à la startup en passant par les cabinets d’avocats, nous assurons des prestations de propreté discrètes, en horaires décalés (matin tôt ou soirée), avec un agent dédié et un suivi qualité constant.',
    icon: 'Building2',
    badge: 'Contrat sur-mesure B2B',
    startingPrice: 'Sur cahier des charges',
    priceNote: 'Facturation mensuelle sans engagement contraignant',
    frequency: ['Quotidien', '3x par semaine', 'Hebdomadaire'],
    durationEstimate: 'Selon superficie et cahier des charges',
    included: [
      'Dépoussiérage et désinfection des postes de travail (écrans, claviers, bureaux)',
      'Vidage des corbeilles et tri sélectif selon la réglementation 5 flux',
      'Nettoyage et réapprovisionnement complet des sanitaires (savon, papier, essuie-mains)',
      'Entretien approfondi de l’espace détente, cafétéria et micro-ondes',
      'Aspiration des moquettes et lavage des sols durs',
      'Nettoyage des traces de doigts sur portes vitrées et poignées'
    ],
    equipmentUsed: ['Aspirateurs silencieux classe énergétique A', 'Chariots ergonomiques de bionettoyage', 'Désinfectants virucides certifiés EN 14476'],
    idealFor: 'PME, grands comptes, cabinets libéraux, agences créatives et espaces de coworking.',
    standards: ['Norme ISO 9001', 'Démarche RSE / Ecolabel', 'Charte de confidentialité signée'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'coproprietes',
    category: 'professionnels',
    title: 'Copropriétés & Parties Communes',
    shortDesc: 'Gestion rigoureuse des halls, escaliers, ascenseurs et rotation des bacs poubelles.',
    fullDesc: 'Partenaire de confiance des syndics de copropriété et des conseils syndicaux en Île-de-France. Nous garantissons la valorisation de votre patrimoine immobilier et la sérénité des résidents.',
    icon: 'Building',
    badge: 'Partenaire Syndics',
    startingPrice: 'Sur devis sous 24h',
    priceNote: 'Visite technique gratuite sur site',
    frequency: ['1 à 5 passages par semaine', 'Service 7j/7 pour rotation poubelles'],
    durationEstimate: 'Adaptée à l’immeuble',
    included: [
      'Balayage et lavage soigné des halls d’entrée, paliers et montées d’escaliers',
      'Nettoyage et désinfection des cabines d’ascenseur (miroirs, boutons, parois)',
      'Sortie, rentrée, lavage et désinfection des bacs roulants à ordures ménagères',
      'Nettoyage des vitres d’entrée, portes vitrées et interphones',
      'Dépoussiérage des boîtes aux lettres, rampes et plinthes',
      'Balayage des cours intérieures et locaux vélos/poussettes'
    ],
    equipmentUsed: ['Autolaveuses compactes', 'Monobrosses pour lustrage halls', 'Nettoyeurs haute pression pour cours et locaux poubelles'],
    idealFor: 'Syndics professionnels, syndics bénévoles, gestionnaires de parcs immobiliers.',
    standards: ['Cahier de passage émargé à chaque intervention', 'Contrôle qualité trimestriel'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cabinets-medicaux',
    category: 'professionnels',
    title: 'Cabinets Médicaux & Établissements de Santé',
    shortDesc: 'Bionettoyage et désinfection ultra-stricte pour cabinets dentaires, médicaux et cliniques.',
    fullDesc: 'Le secteur médical exige une hygiène irréprochable. Nos équipes sont spécialement formées aux protocoles de bionettoyage pour neutraliser les micro-organismes pathogènes et prévenir toute contamination croisée.',
    icon: 'Cross',
    badge: 'Protocole Bionettoyage',
    startingPrice: 'Sur devis sur-mesure',
    priceNote: 'Conforme aux recommandations de la Haute Autorité de Santé',
    frequency: ['Quotidien', 'Pluri-hebdomadaire'],
    durationEstimate: 'Selon nombre de salles de consultation',
    included: [
      'Bionettoyage 3 temps (détartrage, détergence, désinfection de haut niveau)',
      'Désinfection systématique des points de contact (tables d’examen, poignées, accoudoirs)',
      'Entretien spécifique des salles d’attente et sanitaires patients',
      'Respect strict du code couleur microfibre pour éviter toute contamination',
      'Gestion et évacuation selon la filière des déchets',
      'Fiche de traçabilité et émargement sanitaire quotidien'
    ],
    equipmentUsed: ['Détergents-désinfectants hospitaliers normés EN 14476 / EN 13727', 'Nébulisateurs pour désinfection par voie aérienne', 'Franges imprégnées à usage unique'],
    idealFor: 'Médecins généralistes, dentistes, kinésithérapeutes, laboratoires d’analyse, centres de radiologie.',
    standards: ['Normes bactéricides EN 13727', 'Fongicides EN 13624', 'Virucides EN 14476'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80'
  },

  // --- INDUSTRIEL & AGROALIMENTAIRE (ABATTOIRS) ---
  {
    id: 'nettoyage-abattoirs',
    category: 'industriel',
    title: 'Nettoyage Industriel & Abattoirs (HACCP)',
    shortDesc: 'Désinfection industrielle de pointe, chaînes d’abattage et découpe, respect absolu des normes HACCP.',
    fullDesc: 'Pôle d’expertise majeure d’Excellence Nettoyage. Nous intervenons au sein des abattoirs, ateliers de transformation de viande et usines agroalimentaires en Île-de-France. Nos techniciens certifiés appliquent des protocoles drastiques de dégraissage lourd, moussage alcalin, désinfection acide et contrôles bactériologiques.',
    icon: 'ShieldCheck',
    badge: 'Expertise HACCP & Sanitaire',
    startingPrice: 'Sur audit technique & devis',
    priceNote: 'Disponibilité en horaires de nuit et week-end pour continuité de production',
    frequency: ['Quotidien de nuit (post-production)', 'Hebdomadaire intensif', 'Arrêts techniques programmés'],
    durationEstimate: 'Équipes dédiées de nuit 4h à 8h',
    included: [
      'Dégrossissage et ramassage mécanique des résidus organiques',
      'Prélavage à l’eau tempérée (45°C-50°C) pour émulsionner les graisses sans coaguler les protéines',
      'Application de mousse détergente-alcaline dégraissante puissante à haute adhérence',
      'Brossage mécanique des zones critiques : convoyeurs, crochets, couteaux, tables de découpe',
      'Rinçage haute et moyenne pression (40 à 140 bars)',
      'Désinfection terminale par pulvérisation d’un biocide homologué contact alimentaire',
      'Détartrage acide périodique contre les dépôts minéraux et biofilms',
      'Lavage et assainissement complet des chambres froides, sas d’expédition et quais'
    ],
    equipmentUsed: [
      'Canons à mousse inox et centrales de dilution automatiques',
      'Nettoyeurs haute pression eau chaude thermique 150°C',
      'Luminomètres ATP-métriques pour contrôle instantané de propreté biologique',
      'Brumisateurs de désinfection aérienne (DSVA)'
    ],
    idealFor: 'Abattoirs (bovins, porcins, volailles), ateliers de découpe et désossage, salaisons, charcuteries industrielles, conserveries et plateformes logistiques du froid.',
    standards: [
      'Méthode HACCP (Hazard Analysis Critical Control Point)',
      'Conformité stricte DDPP (Direction Départementale de la Protection des Populations)',
      'Agrément ministériel pour l’utilisation de biocides professionnels (Certibiocide)',
      'Dossier d’agrément sanitaire et fiches de traçabilité informatique fournies après chaque vacation'
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'
  },

  // --- NETTOYAGE EXTRÊME & SINISTRES ---
  {
    id: 'nettoyage-extreme',
    category: 'extreme',
    title: 'Nettoyage Extrême & Sinistres (Diogène, Incendie, Dégât des eaux)',
    shortDesc: 'Intervention d’urgence, discrète et humaine face aux situations d’insalubrité sévère et sinistres.',
    fullDesc: 'Face à des contextes traumatisants ou complexes (syndrome de Diogène, accumulation compulsive, logements insalubres, post-incendie avec suies toxiques, dégâts des eaux majeurs ou post-décès), notre unité spécialisée intervient avec empathie, méthode et des équipements de protection individuelle de niveau 3.',
    icon: 'AlertTriangle',
    badge: 'Urgence 24/7 & Discrétion',
    startingPrice: 'Sur devis immédiat sous 2h',
    priceNote: 'Prise en charge directe possible par les assurances habitation (sinistres)',
    frequency: ['Intervention d’urgence ou planifiée'],
    durationEstimate: '1 à 4 jours selon volume d’encombrants et gravité',
    included: [
      'Tri minutieux avec récupération des documents administratifs, bijoux et souvenirs de famille',
      'Débarras intégral des détritus, meubles irrécupérables et encombrants avec bennes dédiées',
      'Nettoyage lourd et décapage chimique des sols, murs et plafonds',
      'Traitement de choc contre les odeurs par générateurs d’ozone professionnels (O3)',
      'Décontamination biologique et désinfection virucide/bactéricide de l’ensemble du volume',
      'Traitement antiparasitaire (blattes, punaises de lit, puces) si infestation constatée',
      'Véhicules anonymes et équipe en civil à l’arrivée pour garantir une confidentialité totale auprès du voisinage'
    ],
    equipmentUsed: [
      'Générateurs d’ozone industriels haute puissance (destruction moléculaire des odeurs)',
      'Équipements de Protection Individuelle (EPI Catégorie 3, combinaisons Tyvek étanches, masques panoramiques à cartouches ABEK2P3)',
      'Injecteurs-extracteurs haute température et nébulisateurs ULV',
      'Bennes d’évacuation et camions capitonnés sécurisés'
    ],
    idealFor: 'Familles confrontées au syndrome de Diogène d’un proche, tuteurs légaux, notaires, propriétaires victimes de squatt, assureurs, syndics et victimes d’incendie ou dégât des eaux.',
    standards: [
      'Certification Certibiocide Ministère de l’Écologie',
      'Conventionnement avec les centres de traitement des déchets dangereux (REP/ISDND)',
      'Secret professionnel et charte éthique stricte de bienveillance'
    ],
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1000&q=80'
  },

  // --- SUR-MESURE & ÉVÉNEMENTIEL ---
  {
    id: 'evenementiel-sur-mesure',
    category: 'professionnels',
    title: 'Événementiel & Prestations Sur-Mesure',
    shortDesc: 'Nettoyage avant, pendant et après vos soirées d’entreprise, salons, galas et tournages.',
    fullDesc: 'Assurez un lieu impeccable pour vos invités et restituez les espaces loués dans un état parfait. Nos équipes s’adaptent à vos contraintes horaires les plus serrées.',
    icon: 'Sparkle',
    badge: 'Intervention Express',
    startingPrice: 'Sur cahier des charges',
    priceNote: 'Équipes de jour, nuit et week-end',
    frequency: ['Prestation ponctuelle événementielle'],
    durationEstimate: 'Selon format de l’événement',
    included: [
      'Permanence de propreté discrète durant l’événement (sanitaires, verres, poubelles)',
      'Débarras rapide et tri des déchets post-événement',
      'Aspiration, balayage et lavage accéléré des sols et moquettes',
      'Remise en état complète pour l’état des lieux de sortie'
    ],
    equipmentUsed: ['Matériel silencieux', 'Kits d’urgence taches express', 'Chariots mobiles discrets'],
    idealFor: 'Agences événementielles, lieux de réception, organisateurs de salons, galeries d’art et maisons de production.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80'
  }
];

export const beforeAfterCases: BeforeAfterItem[] = [
  {
    id: 'case-chantier',
    title: 'Appartement Haussmannien après Rénovation (Paris 8e)',
    category: 'Après Travaux',
    location: 'Paris 75008',
    duration: '1 journée (3 techniciens)',
    description: 'Élimination intégrale du voile de plâtre sur parquet point de Hongrie, décapage des vitres et remise en valeur des moulures dorées.',
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    beforeLabel: 'Poussière de plâtre & gravats',
    afterLabel: 'Parquet huilé & brillance totale'
  },
  {
    id: 'case-abattoir',
    title: 'Atelier de Découpe de Viande HACCP (Rungis)',
    category: 'Industriel & Agroalimentaire',
    location: 'Val-de-Marne 94',
    duration: 'Vacation de nuit (4h)',
    description: 'Protocole de moussage alcalin, dégraissage thermique à 150°C et désinfection biocide homologuée avec test ATP bioluminescent à 0 RLU.',
    beforeImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    beforeLabel: 'Résidus graisseux & souillures',
    afterLabel: 'Inox stérile certifié HACCP'
  },
  {
    id: 'case-diogene',
    title: 'Logement insalubre syndrome de Diogène (Versailles)',
    category: 'Nettoyage Extrême',
    location: 'Yvelines 78000',
    duration: '2 jours d’intervention',
    description: 'Évacuation de 22 m³ d’encombrants, tri des papiers officiels, traitement insecticide, lessivage décontaminant et désodorisation à l’ozone.',
    beforeImage: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    beforeLabel: 'Accumulation extrême & insalubrité',
    afterLabel: 'Logement assaini & prêt à louer'
  },
  {
    id: 'case-vitres',
    title: 'Baies Vitrées et Verrière d’Architecte (Boulogne)',
    category: 'Vitrerie Spécifique',
    location: 'Hauts-de-Seine 92100',
    duration: '3 heures',
    description: 'Nettoyage extérieur et intérieur à l’eau osmosée haute pureté sans échafaudage par perche télescopique en carbone 12 mètres.',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    beforeLabel: 'Pollution & calcaire incrusté',
    afterLabel: 'Clarté cristalline sans reflets'
  }
];
