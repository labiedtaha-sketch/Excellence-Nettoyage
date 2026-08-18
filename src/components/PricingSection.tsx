import React from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  Percent, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  Clock, 
  Sparkles,
  Zap,
  Building2,
  Home,
  ShieldAlert
} from 'lucide-react';
import { ServiceCategory } from '../types';

interface PricingSectionProps {
  onOpenQuoteModal: (category?: ServiceCategory, serviceId?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenQuoteModal }) => {
  const pricingCards = [
    {
      category: 'Particuliers',
      title: 'Ménage à Domicile',
      price: '26 €/h',
      priceAfterCredit: '13 €/h',
      period: 'TTC par heure',
      badge: 'Avance Immédiate 50%',
      desc: 'Idéal pour l’entretien régulier de votre maison ou appartement.',
      features: [
        'Intervenant(e) dédié(e) et formé(e)',
        'Crédit d’impôt 50% déduit immédiatement',
        'Sans engagement de durée',
        'Assurance casse et remplacement en cas de congé',
        'Garantie Satisfait ou Refait sous 24h'
      ],
      ctaText: 'Simuler mon tarif ménage',
      categoryType: 'particuliers' as ServiceCategory,
      serviceId: 'menage-regulier',
      highlighted: true
    },
    {
      category: 'Immobilier & Travaux',
      title: 'Fin de Bail & Après Chantier',
      price: '189 €',
      priceAfterCredit: '94,50 €',
      period: 'Forfait de départ',
      badge: 'Garantie Caution 100%',
      desc: 'Remise en état complète pour état des lieux ou fin de travaux.',
      features: [
        'Attestation officielle pour l’agence / bailleur',
        'Nettoyage électroménager et détartrage lourd',
        'Nettoyage complet vitres et baies vitrées',
        'Élimination poussières de plâtre et laitance',
        'Ré-intervention offerte si remarque à l’état des lieux'
      ],
      ctaText: 'Estimer ma fin de bail',
      categoryType: 'particuliers' as ServiceCategory,
      serviceId: 'fin-de-bail',
      highlighted: false
    },
    {
      category: 'Entreprises',
      title: 'Bureaux & Copropriétés',
      price: 'Dès 180 €',
      period: 'HT / mois',
      badge: 'Contrat B2B Flexible',
      desc: 'Propreté valorisante pour vos collaborateurs, clients et résidents.',
      features: [
        'Horaires décalés (tôt le matin ou en soirée)',
        'Désinfection des postes et réassort sanitaires',
        'Gestion des poubelles et tri sélectif 5 flux',
        'Interlocuteur dédié et contrôle qualité mensuel',
        'Visite technique gratuite sous 24h'
      ],
      ctaText: 'Demander un devis pro',
      categoryType: 'professionnels' as ServiceCategory,
      serviceId: 'nettoyage-bureaux',
      highlighted: false
    },
    {
      category: 'Agroalimentaire & Sinistres',
      title: 'Abattoirs HACCP & Extrême',
      price: 'Sur devis',
      period: 'Sous 2h',
      badge: 'Expertise Sanitaire & 24/7',
      desc: 'Désinfection lourde, chaînes de viande, Diogène et dégâts des eaux.',
      features: [
        'Techniciens certifiés Certibiocide & HACCP',
        'Luminomètres ATP et vapeur 150°C',
        'Combinaisons Tyvek EPI 3 & ozone désodorisant',
        'Secret professionnel et camions anonymes',
        'Prise en charge directe assurances possible'
      ],
      ctaText: 'Devis express confidentiel',
      categoryType: 'industriel' as ServiceCategory,
      serviceId: 'nettoyage-abattoirs',
      highlighted: false
    }
  ];

  return (
    <section id="tarifs" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            Transparence & Compétitivité
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-3 font-display">
            Des Tarifs Clairs, sans Frais Cachés
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Bénéficiez du meilleur rapport qualité-prix en Île-de-France et profitez de l'Avance Immédiate du crédit d'impôt pour diviser vos factures par deux.
          </p>
        </div>

        {/* 50% Tax Credit Highlight Explainer */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200/80 text-slate-900 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Percent className="w-8 h-8" />
            </div>
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200/60 px-2.5 py-0.5 rounded-full">
                  Dispositif Officiel Urssaf
                </span>
                <span className="text-xs text-slate-500 font-semibold">Agrément SAP n° 892301</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                50% de Crédit d’Impôt avec l’Avance Immédiate
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 max-w-2xl leading-relaxed">
                N’attendez plus un an pour être remboursé par le fisc ! Grâce à la connexion directe avec l'Urssaf, <strong>vous ne payez que 50% de la facture</strong> lors de chaque prélèvement (ex: 26 €/h facturés = <strong>13 €/h réellement prélevés</strong>).
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenQuoteModal('particuliers')}
            className="shrink-0 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            <span>Activer mes 50% de Réduction</span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingCards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative text-left ${
                card.highlighted
                  ? 'bg-slate-900 text-white shadow-2xl ring-2 ring-blue-500 scale-[1.02]'
                  : 'bg-slate-50 border border-slate-200 text-slate-900 hover:shadow-lg'
              }`}
            >
              {card.badge && (
                <div className="mb-4">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    card.highlighted
                      ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white'
                      : 'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}>
                    {card.badge}
                  </span>
                </div>
              )}

              <div>
                <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${card.highlighted ? 'text-blue-400' : 'text-slate-500'}`}>
                  {card.category}
                </div>
                <h3 className="text-xl font-bold font-display mb-2">{card.title}</h3>
                
                {/* Price block */}
                <div className="my-4 pb-4 border-b border-slate-200/40">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold font-display">{card.price}</span>
                    <span className={`text-xs ${card.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>{card.period}</span>
                  </div>
                  {card.priceAfterCredit && (
                    <div className="text-xs font-bold text-emerald-400 mt-1 flex items-center gap-1">
                      <Percent className="w-3.5 h-3.5" />
                      <span>Soit <strong>{card.priceAfterCredit}</strong> après crédit d’impôt</span>
                    </div>
                  )}
                </div>

                <p className={`text-xs leading-relaxed mb-6 ${card.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                  {card.desc}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 mb-6">
                  {card.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${card.highlighted ? 'text-teal-400' : 'text-emerald-600'}`} />
                      <span className={card.highlighted ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action button */}
              <button
                onClick={() => onOpenQuoteModal(card.categoryType, card.serviceId)}
                className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  card.highlighted
                    ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white hover:bg-slate-200 text-slate-900 border border-slate-300'
                }`}
              >
                <span>{card.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Pricing Criteria Explanation Accordion/Grid */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 text-left">
          <div className="max-w-3xl mb-6">
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Comment sont calculés nos tarifs ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Tous nos devis sont établis selon des critères stricts et transparents :
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80">
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">1. La Surface (m²)</div>
              <p className="text-xs text-slate-600">
                La superficie exacte des pièces, sols, vitrages ou zones industrielles à traiter.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80">
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">2. La Fréquence</div>
              <p className="text-xs text-slate-600">
                Des remises de -10% à -20% pour les abonnements hebdomadaires ou pluri-hebdomadaires.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80">
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">3. L'État Initial</div>
              <p className="text-xs text-slate-600">
                Entretien courant vs remise en état post-chantier, dégraissage lourd ou sinistre insalubre.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80">
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">4. Le Matériel Requis</div>
              <p className="text-xs text-slate-600">
                Aspirateurs M/H, monobrosses, canons à mousse inox, vapeur 180°C ou générateurs d'ozone.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
