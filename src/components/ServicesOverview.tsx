import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Percent, 
  FileText,
  Home,
  Factory,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Phone
} from 'lucide-react';
import { ServiceCategory } from '../types';
import { WhatsAppIcon } from './SocialIcons';

interface ServicesOverviewProps {
  onOpenQuoteModal: (category?: ServiceCategory, serviceId?: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('particuliers');

  const categories = [
    {
      id: 'particuliers' as ServiceCategory,
      title: 'Particuliers',
      subtitle: 'Ménage & Domicile',
      badge: '-50% Crédit d\'impôt',
      icon: Home,
    },
    {
      id: 'professionnels' as ServiceCategory,
      title: 'Professionnels',
      subtitle: 'Bureaux & Copropriétés',
      badge: 'Contrat & Ponctuel',
      icon: Building2,
    },
    {
      id: 'industriel' as ServiceCategory,
      title: 'Agroalimentaire',
      subtitle: 'Abattoirs & Normes HACCP',
      badge: 'Haute Hygiène',
      icon: Factory,
    },
    {
      id: 'extreme' as ServiceCategory,
      title: 'Nettoyage Extrême',
      subtitle: 'Diogène, Sinistres & Décès',
      badge: 'Urgence 24h/7j',
      icon: AlertTriangle,
    },
  ];

  const servicesData = {
    particuliers: [
      {
        id: 'menage-regulier',
        title: 'Ménage & Repassage Régulier',
        desc: 'Intervention récurrente hebdomadaire ou bimensuelle par une intervenante qualifiée dédiée.',
        points: ['Sols, poussières & finitions', 'Cuisine & sanitaires complets', 'Repassage & soin du linge'],
        price: 'Sur devis personnalisé',
        tag: 'Avance Immédiate -50%'
      },
      {
        id: 'fin-de-bail',
        title: 'Fin de Bail & État des Lieux',
        desc: 'Remise à neuf intégrale du logement pour garantir la restitution intégrale de votre caution.',
        points: ['Dégraissage cuisine & électroménager', 'Détartrage salles d\'eau & robinetterie', 'Lessivage plinthes, portes & vitres'],
        price: 'Sur devis gratuit sous 2h',
        tag: 'Garantie Caution'
      },
      {
        id: 'apres-travaux',
        title: 'Après Travaux & Rénovation',
        desc: 'Élimination des poussières fines, résidus de plâtre, peintures, colles et fin de chantier.',
        points: ['Aspiration industrielle HEPA', 'Décapage & grattage des sols', 'Lessivage murs & dépoussiérage'],
        price: 'Sur devis express sous 2h',
        tag: 'Clé en main'
      },
      {
        id: 'nettoyage-vitres',
        title: 'Lavage de Vitres & Baies',
        desc: 'Entretien intérieur et extérieur sans traces de toutes surfaces vitrées, baies et vérandas.',
        points: ['Vitres, baies vitrées & velux', 'Nettoyage encadrements & rails', 'Matériel professionnel anti-traces'],
        price: 'Sur devis personnalisé',
        tag: 'Résultat Impeccable'
      },
    ],
    professionnels: [
      {
        id: 'bureaux-locaux',
        title: 'Nettoyage de Bureaux & Tertiaire',
        desc: 'Entretien régulier ou ponctuel de vos espaces de travail, open-spaces, salles de réunion.',
        points: ['Désinfection postes & claviers', 'Vidage corbeilles & tri sélectif', 'Sanitaires & espaces cafétéria'],
        price: 'Abonnement sur-mesure sans engagement',
        tag: 'Discrétion & Rigueur'
      },
      {
        id: 'coproprietes',
        title: 'Copropriétés & Immeubles',
        desc: 'Entretien des parties communes, halls, escaliers, paliers et gestion des containers poubelles.',
        points: ['Halls d\'entrée, miroirs & digicodes', 'Escaliers, paliers & ascenseurs', 'Entrée/sortie des bacs roulants'],
        price: 'Contrat syndic & copro',
        tag: 'Passage Régulier'
      },
      {
        id: 'commerces-boutiques',
        title: 'Commerces, Boutiques & Showrooms',
        desc: 'Image de marque impeccable pour vos points de vente, vitrines et zones d\'accueil clientèle.',
        points: ['Lavage des sols grands passages', 'Nettoyage des vitrines commerciales', 'Cabines d\'essayage & réserves'],
        price: 'Intervention hors horaires d\'ouverture',
        tag: 'Image Premium'
      },
      {
        id: 'cabinets-medicaux',
        title: 'Cabinets Médicaux & Tertiaire',
        desc: 'Protocoles stricts de bionettoyage et désinfection pour cabinets médicaux et laboratoires.',
        points: ['Désinfection des points de contact', 'Traitement des salles d\'attente', 'Respect des normes sanitaires'],
        price: 'Protocole hospitalier',
        tag: 'Hygiène Normée'
      },
    ],
    industriel: [
      {
        id: 'abattoirs',
        title: 'Abattoirs & Filière Viande',
        desc: 'Nettoyage, dégraissage intensif et désinfection complète selon les protocoles HACCP les plus stricts.',
        points: ['Lignes d\'abattage & de découpe', 'Mousse dégraissante & désinfectante', 'Traçabilité & fiches d\'intervention'],
        price: 'Astreinte & intervention de nuit',
        tag: 'Conformité DDPP'
      },
      {
        id: 'usines-agro',
        title: 'Industries Agroalimentaires',
        desc: 'Bionettoyage des chaînes de production, zones de conditionnement et laboratoires de transformation.',
        points: ['Cuves, tapis & convoyeurs', 'Nettoyage en place (NEP) & mousse', 'Contrôle bactériologique & ATP-métrie'],
        price: 'Plan de maîtrise sanitaire (PMS)',
        tag: 'Norme HACCP'
      },
      {
        id: 'chambres-froides',
        title: 'Chambres Froides & Entrepôts',
        desc: 'Dégivrage, désinfection antifongique et décontamination des zones réfrigérées positives et négatives.',
        points: ['Traitement des parois & plafonds', 'Désinfection des évaporateurs', 'Élimination des moisissures & odeurs'],
        price: 'Sans rupture de la chaîne du froid',
        tag: 'Zéro Contamination'
      },
      {
        id: 'cuisines-centrales',
        title: 'Cuisines Centrales & Restaurants',
        desc: 'Dégraissage des hottes d\'extraction, conduits, pianos de cuisson et zones de plonge.',
        points: ['Décapage des hottes & filtres', 'Lessivage sols antidérapants', 'Désinfection totale des plans de travail'],
        price: 'Certificat de dégraissage annuel',
        tag: 'Norme Incendie'
      },
    ],
    extreme: [
      {
        id: 'syndrome-diogene',
        title: 'Syndrome de Diogène & Insalubrité',
        desc: 'Prise en charge humaine, discrète et intégrale des logements encombrés, insalubres ou négligés.',
        points: ['Débarras intégral & tri des effets', 'Nettoyage en profondeur & décapage', 'Désinfection & traitement des odeurs'],
        price: 'Devis gratuit & visite préalable',
        tag: 'Bienveillance & Discrétion'
      },
      {
        id: 'apres-deces',
        title: 'Nettoyage Après Décès & Drame',
        desc: 'Intervention rapide et respectueuse pour décontaminer et assainir les lieux suite à un décès.',
        points: ['Élimination des fluides biologiques', 'Désinfection virucide & bactéricide', 'Purification de l\'air & neutralisation'],
        price: 'Intervention sous 24h',
        tag: 'Urgence & Respect'
      },
      {
        id: 'apres-sinistre',
        title: 'Après Incendie & Dégât des Eaux',
        desc: 'Assèchement, nettoyage des suies toxiques, décontamination des moisissures et remise en état.',
        points: ['Évacuation des gravats & eaux', 'Décontamination suies & odeurs de brûlé', 'Traitement fongicide & assèchement'],
        price: 'Prise en charge devis assurance',
        tag: 'Agrément Assurance'
      },
      {
        id: 'desinsectisation',
        title: 'Désinfection & Débarras Extrême',
        desc: 'Traitement de choc contre les nuisibles, désinfection par nébulisation et vidage complet.',
        points: ['Nébulisation virucide intégrale', 'Débarras d\'objets contaminés', 'Mise en décharge agréée'],
        price: 'Action immédiate',
        tag: 'Sécurité Totale'
      },
    ]
  };

  const currentServices = servicesData[activeTab];

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-[#155a82] bg-[#5faedb]/20 px-3.5 py-1.5 rounded-full border border-[#5faedb]/30">
            Nos Prestations
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-display tracking-tight">
            Des solutions de nettoyage adaptées à chaque exigence.
          </h2>
        </div>

        {/* Category Pill Switcher Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl border transition-all text-left flex flex-col justify-between cursor-pointer ${
                  isActive 
                    ? 'bg-white border-[#5faedb] shadow-xl ring-2 ring-[#5faedb]' 
                    : 'bg-white/60 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2.5 rounded-xl ${isActive ? 'bg-[#5faedb] text-white' : 'bg-slate-100 text-slate-700'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-full ${
                    isActive ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {cat.badge}
                  </span>
                </div>
                <div>
                  <div className="text-sm sm:text-base font-black text-slate-950 font-display">
                    {cat.title}
                  </div>
                  <div className="text-xs text-slate-500 font-medium truncate">
                    {cat.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onOpenQuoteModal(activeTab, service.id)}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#5faedb] transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-extrabold text-[#155a82] bg-[#5faedb]/15 px-2.5 py-1 rounded-lg">
                  {service.tag}
                </span>
                
                <h3 className="text-base sm:text-lg font-black text-slate-950 font-display group-hover:text-[#155a82] transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {service.desc}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {service.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5faedb] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-[11px] font-bold text-slate-900 truncate max-w-[130px]">
                  {service.price}
                </div>
                <span className="text-xs font-black text-slate-950 group-hover:text-white bg-slate-100 group-hover:bg-[#5faedb] px-3 py-1.5 rounded-xl transition-all">
                  Devis →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner under services */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-black text-slate-950 font-display">
              Besoin d'une prestation spécifique ou urgente ?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Nos équipes se déplacent sous 2h partout en Île-de-France (75, 78, 92, 93, 94, 95, 77, 91).
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/33640860213?text=Bonjour,%20je%20souhaite%20un%20devis%20de%20nettoyage"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-extrabold px-5 py-3 rounded-xl transition-all shadow-sm flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
              <span>WhatsApp 7j/7</span>
            </a>
            <a
              href="tel:+33640860213"
              className="bg-slate-950 hover:bg-slate-900 text-white text-xs font-extrabold px-5 py-3 rounded-xl transition-all shadow-sm flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#5faedb]" />
              <span>06 40 86 02 13</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
