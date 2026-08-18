import { DepartmentInfo } from '../types';

export const idfDepartments: DepartmentInfo[] = [
  {
    code: '75',
    name: 'Paris',
    capital: 'Paris (Tous arrondissements 1er au 20e)',
    mainCities: ['Paris 1er-4e (Centre)', 'Paris 8e (Champs-Élysées)', 'Paris 16e (Passy/Auteuil)', 'Paris 15e (Vaugirard)', 'Paris 17e (Batignolles)', 'Paris 11e (Bastille)', 'Paris 9e (Opéra)'],
    interventionDelay: 'Moins de 2h (Urgences)',
    coverage: '100% de la capitale intra-muros',
    activeTeams: 8
  },
  {
    code: '92',
    name: 'Hauts-de-Seine',
    capital: 'Nanterre',
    mainCities: ['Boulogne-Billancourt', 'Neuilly-sur-Seine', 'Levallois-Perret', 'Courbevoie / La Défense', 'Rueil-Malmaison', 'Issy-les-Moulineaux', 'Antony', 'Clichy'],
    interventionDelay: 'Sous 2h à 4h',
    coverage: 'Toutes les communes du 92',
    activeTeams: 6
  },
  {
    code: '93',
    name: 'Seine-Saint-Denis',
    capital: 'Bobigny',
    mainCities: ['Saint-Denis', 'Montreuil', 'Pantin', 'Aulnay-sous-Bois', 'Aubervilliers', 'Noisy-le-Grand', 'Le Raincy', 'Saint-Ouen'],
    interventionDelay: 'Sous 2h à 4h',
    coverage: 'Toutes les communes du 93',
    activeTeams: 5
  },
  {
    code: '94',
    name: 'Val-de-Marne',
    capital: 'Créteil',
    mainCities: ['Créteil', 'Saint-Maur-des-Fossés', 'Vincennes', 'Nogent-sur-Marne', 'Rungis (MIN & Pôle Agro)', 'Vitry-sur-Seine', 'Ivry-sur-Seine', 'Maisons-Alfort'],
    interventionDelay: 'Sous 2h à 4h',
    coverage: 'Toutes les communes du 94',
    activeTeams: 6
  },
  {
    code: '78',
    name: 'Yvelines',
    capital: 'Versailles',
    mainCities: ['Versailles', 'Saint-Germain-en-Laye', 'Poissy', 'Sartrouville', 'Rambouillet', 'Montigny-le-Bretonneux', 'Mantes-la-Jolie', 'Le Vésinet'],
    interventionDelay: 'Sous 2h à 6h',
    coverage: 'Ensemble du département 78',
    activeTeams: 5
  },
  {
    code: '91',
    name: 'Essonne',
    capital: 'Évry-Courcouronnes',
    mainCities: ['Évry-Courcouronnes', 'Massy', 'Palaiseau', 'Corbeil-Essonnes', 'Sainte-Geneviève-des-Bois', 'Savigny-sur-Orge', 'Draveil', 'Chilly-Mazarin'],
    interventionDelay: 'Sous 3h à 6h',
    coverage: 'Ensemble du département 91',
    activeTeams: 4
  },
  {
    code: '95',
    name: 'Val-d’Oise',
    capital: 'Cergy / Pontoise',
    mainCities: ['Cergy', 'Argenteuil', 'Sarcelles', 'Pontoise', 'Enghien-les-Bains', 'Franconville', 'Roissy-en-France', 'Taverny'],
    interventionDelay: 'Sous 2h à 6h',
    coverage: 'Ensemble du département 95',
    activeTeams: 4
  },
  {
    code: '77',
    name: 'Seine-et-Marne',
    capital: 'Melun',
    mainCities: ['Meaux', 'Chelles', 'Melun', 'Fontainebleau', 'Pontault-Combault', 'Marne-la-Vallée (Bussy/Torcy)', 'Serris', 'Champs-sur-Marne'],
    interventionDelay: 'Sous 3h à 8h',
    coverage: 'Grand bassin et pôles urbains du 77',
    activeTeams: 4
  }
];

export function checkPostalCodeCoverage(postalCode: string): {
  isCovered: boolean;
  department?: DepartmentInfo;
  message: string;
  delay: string;
} {
  const cleanCode = postalCode.trim().replace(/\s+/g, '');
  if (cleanCode.length < 2) {
    return {
      isCovered: false,
      message: 'Veuillez saisir un code postal valide à 5 chiffres.',
      delay: '-'
    };
  }

  const prefix = cleanCode.substring(0, 2);
  const dept = idfDepartments.find(d => d.code === prefix);

  if (dept) {
    return {
      isCovered: true,
      department: dept,
      message: `Votre secteur (${dept.name} - ${dept.code}) est intégralement couvert par nos équipes mobiles.`,
      delay: dept.interventionDelay
    };
  }

  return {
    isCovered: false,
    message: 'Ce code postal est hors Île-de-France. Contactez-nous pour une demande exceptionnelle limitrophe.',
    delay: 'Sur devis spécifique'
  };
}
