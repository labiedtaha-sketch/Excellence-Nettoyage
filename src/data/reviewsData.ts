import { ReviewItem, FAQItem } from '../types';

export const reviewsData: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Marc de Saint-Germain',
    location: 'Paris 16e (75016)',
    category: 'particuliers',
    serviceName: 'Ménage régulier & Repassage',
    rating: 5,
    date: 'Il y a 1 semaine',
    comment: 'Nous faisons appel à Excellence Nettoyage depuis 2 ans pour notre appartement haussmannien. Notre intervenante Maria est d’une ponctualité exemplaire et d’une minutie rare (les parquets et les argenteries sont toujours parfaits). L’avantage fiscal du crédit d’impôt déduit instantanément sur la facture est un vrai plus !',
    verified: true,
    avatarText: 'MS'
  },
  {
    id: 'rev-2',
    author: 'Stéphane L. (Directeur de Site Agro)',
    location: 'Rungis (94150)',
    category: 'industriel',
    serviceName: 'Nettoyage Industriel & Abattoirs HACCP',
    rating: 5,
    date: 'Il y a 3 semaines',
    comment: 'Dans l’industrie de la viande, le moindre écart d’hygiène peut coûter un arrêt d’agrément sanitaire DDPP. Les équipes d’Excellence Nettoyage interviennent chaque nuit de 22h à 4h sur notre atelier de découpe. Matériel lourd (canons à mousse, vapeur haute pression) et fiches de traçabilité ATP systématiques. Un prestataire d’un professionnalisme exemplaire.',
    verified: true,
    avatarText: 'SL'
  },
  {
    id: 'rev-3',
    author: 'Claire V. (Cabinet Notarial)',
    location: 'Versailles (78000)',
    category: 'extreme',
    serviceName: 'Nettoyage Extrême & Diogène',
    rating: 5,
    date: 'Il y a 1 mois',
    comment: 'Mandatée pour la succession d’un logement très encombré et dégradé (syndrome de Diogène sévère). L’équipe a fait preuve d’une discrétion et d’une humanité remarquables. Tri rigoureux des papiers de famille importants, débarras des détritus et traitement complet à l’ozone pour les odeurs. Le logement a pu être vendu dans d’excellentes conditions.',
    verified: true,
    avatarText: 'CV'
  },
  {
    id: 'rev-4',
    author: 'Alexandre M. (Cabinet d’Avocats)',
    location: 'Paris 8e (75008)',
    category: 'professionnels',
    serviceName: 'Nettoyage de Bureaux & Salons',
    rating: 5,
    date: 'Il y a 2 semaines',
    comment: 'Nos locaux reçoivent une clientèle exigeante. Le bionettoyage et la gestion des consommables sont impeccables, effectués tôt chaque matin avant l’arrivée des associés. Aucune poussière, sanitaires étincelants et une relation client réactive via notre interlocuteur dédié.',
    verified: true,
    avatarText: 'AM'
  },
  {
    id: 'rev-5',
    author: 'Julie T.',
    location: 'Boulogne-Billancourt (92100)',
    category: 'particuliers',
    serviceName: 'Nettoyage Fin de Bail',
    rating: 5,
    date: 'Il y a 1 mois',
    comment: 'Mon propriétaire était réputé intraitable pour l’état des lieux de sortie. J’ai pris la formule "Garantie Caution". En 4 heures, four dégraissé à blanc, faïences détartrées, vitres sans traces. État des lieux validé avec félicitations du gestionnaire et 100% de ma caution restituée !',
    verified: true,
    avatarText: 'JT'
  },
  {
    id: 'rev-6',
    author: 'Karim B. (Président Conseil Syndical)',
    location: 'Courbevoie (92400)',
    category: 'professionnels',
    serviceName: 'Entretien Copropriété (45 lots)',
    rating: 5,
    date: 'Il y a 2 mois',
    comment: 'Nous avons changé de prestataire l’an dernier pour Excellence Nettoyage. Les résidents sont ravis : les halls sentent bon le propre, les conteneurs poubelles sont lavés et désinfectés régulièrement, et le cahier de passage est toujours signé.',
    verified: true,
    avatarText: 'KB'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'tarifs',
    question: 'Comment fonctionne le crédit d’impôt de 50% avec l’Avance Immédiate de l’Urssaf ?',
    answer: 'En tant qu’entreprise agréée Services à la Personne (SAP), vous bénéficiez d’un crédit d’impôt de 50% sur toutes nos prestations à domicile (ménage régulier, grand nettoyage, repassage, vitres). Grâce au dispositif "Avance Immédiate" de l’Urssaf, vous ne payez que 50% du montant de la facture : la déduction de 50% est appliquée directement et instantanément lors du règlement de votre devis. Aucune avance de trésorerie n’est nécessaire.'
  },
  {
    id: 'faq-2',
    category: 'particuliers',
    question: 'Dois-je fournir les produits de ménage et le matériel d’entretien ?',
    answer: 'Pour les interventions ponctuelles (fin de bail, après travaux, nettoyage de printemps, vitres, extrême), nos équipes arrivent entièrement équipées de matériel professionnel (monobrosses, nettoyeurs vapeur, injecteurs-extracteurs, produits écocertifiés Ecolabel®). Pour le ménage régulier à domicile, nous pouvons utiliser vos produits ou vous fournir notre kit de produits professionnels écologiques sur simple demande.'
  },
  {
    id: 'faq-3',
    category: 'securite',
    question: 'Comment sélectionnez-vous et vérifiez-vous vos agents d’entretien ?',
    answer: 'L’Excellence commence par la confiance. 100% de nos intervenants sont salariés en CDI, soumis à une vérification rigoureuse du casier judiciaire (bulletin n°3 vierge), formés aux techniques de bionettoyage et tenus par une clause stricte de confidentialité et de discrétion. En cas d’absence pour congés ou maladie, un remplacement est systématiquement assuré sans interruption.'
  },
  {
    id: 'faq-4',
    category: 'haccp',
    question: 'Quelles garanties offrez-vous pour le nettoyage d’abattoirs et ateliers agroalimentaires ?',
    answer: 'Notre pôle agroalimentaire respecte scrupuleusement le Paquet Hygiène européen et la méthode HACCP. Nos techniciens certifiés Certibiocide maîtrisent le moussage alcalin, le détartrage acide et la désinfection de contact alimentaire. Après chaque intervention de nuit, un contrôle de surface par bioluminescence ATP (adénosine triphosphate) est réalisé et une fiche de traçabilité vous est remise pour vos audits DDPP.'
  },
  {
    id: 'faq-5',
    category: 'extreme',
    question: 'Comment se déroule une intervention pour un logement insalubre ou syndrome de Diogène ?',
    answer: 'Nous intervenons avec la plus grande bienveillance, sans aucun jugement et dans une confidentialité totale (véhicules neutres). Nous procédons par étapes : sécurisation sanitaire, tri méticuleux des documents de valeur et souvenirs avec la famille ou le tuteur, évacuation des déchets en filière agréée, décapage complet, désinfection virucide et traitement neutralisant des odeurs par générateur d’ozone (O3).'
  },
  {
    id: 'faq-6',
    category: 'entreprises',
    question: 'Quels sont vos délais pour intervenir et établir un devis professionnel ?',
    answer: 'Pour les entreprises et copropriétés, nous réalisons une visite technique gratuite sur site sous 24h et remettons une proposition commerciale détaillée sous 48h. Pour les urgences (sinistres, dégâts des eaux, contrôles sanitaires inopinés), notre astreinte mobile d’intervention rapide est mobilisable en moins de 2 heures en Île-de-France.'
  },
  {
    id: 'faq-7',
    category: 'securite',
    question: 'Êtes-vous couverts par une assurance Responsabilité Civile Professionnelle ?',
    answer: 'Absolument. Excellence Nettoyage est titulaire d’un contrat d’assurance Responsabilité Civile Professionnelle auprès de la compagnie AXA France à hauteur de 5 000 000 € couvrant l’ensemble des biens, locaux, matériels confiés et objets d’art.'
  },
  {
    id: 'faq-8',
    category: 'tarifs',
    question: 'Que signifie votre engagement "Satisfait ou Refait sous 24h" ?',
    answer: 'Si un détail de la prestation ne correspond pas exactement à vos attentes ou au cahier des charges convenu, il vous suffit de nous le signaler sous 24h (avec photos si souhaité). Nous programmons immédiatement le retour d’un technicien pour corriger le point sans aucun frais supplémentaire.'
  }
];
