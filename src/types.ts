export type ServiceCategory = 'particuliers' | 'professionnels' | 'industriel' | 'extreme';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  badge?: string;
  startingPrice: string;
  priceNote?: string;
  eligibleCreditImpot?: boolean;
  frequency: string[];
  durationEstimate: string;
  included: string[];
  equipmentUsed: string[];
  idealFor: string;
  standards?: string[];
  image: string;
}

export interface DepartmentInfo {
  code: string;
  name: string;
  capital: string;
  mainCities: string[];
  interventionDelay: string;
  coverage: string;
  activeTeams: number;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  category: ServiceCategory;
  serviceName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatarText: string;
}

export interface FAQItem {
  id: string;
  category: 'devis' | 'tarifs' | 'particuliers' | 'entreprises' | 'extreme' | 'haccp' | 'securite';
  question: string;
  answer: string;
}

export interface QuoteFormData {
  category: ServiceCategory;
  serviceId: string;
  surface: number;
  frequency: string;
  roomCount: number;
  levelOfDirt: 'standard' | 'moyen' | 'tres_sale' | 'insalubre_extreme';
  options: string[];
  postalCode: string;
  city: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  siret?: string;
  notes: string;
  emergencySinistre: boolean;
  creditImpotAdvance: boolean;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}
