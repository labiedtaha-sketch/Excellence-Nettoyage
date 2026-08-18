import React from 'react';
import { 
  AlertTriangle, 
  ShieldCheck, 
  Wind, 
  Flame, 
  Droplets, 
  Trash2, 
  HeartHandshake, 
  Phone, 
  Calculator, 
  Clock, 
  EyeOff, 
  Sparkles,
  FileCheck
} from 'lucide-react';
import { ServiceCategory } from '../types';

interface ExtremeCleaningSectionProps {
  onOpenQuoteModal: (category?: ServiceCategory, serviceId?: string) => void;
}

export const ExtremeCleaningSection: React.FC<ExtremeCleaningSectionProps> = ({ onOpenQuoteModal }) => {
  const interventionTypes = [
    {
      title: 'Syndrome de Diogène & Accumulation',
      icon: Trash2,
      desc: 'Débarras respectueux des encombrants, tri minutieux des papiers administratifs, objets de valeur et souvenirs de famille, puis désinfection et assainissement intégral.'
    },
    {
      title: 'Sinistre Dégât des Eaux & Inondation',
      icon: Droplets,
      desc: 'Pompage, séchage technique des structures, traitement anti-moisissures fongicide et remise en état pour éviter la dégradation des murs et des parquets.'
    },
    {
      title: 'Post-Incendie & Suies Toxiques',
      icon: Flame,
      desc: 'Élimination des dépôts de suie cancérigènes, décontamination des surfaces par lessivage chimique spécialisé et neutralisation des odeurs de brûlé par ozone.'
    },
    {
      title: 'Logements Insalubres & Squats',
      icon: AlertTriangle,
      desc: 'Prise en charge de logements dégradés, traitement antiparasitaire (blattes, punaises), évacuation en bennes agréées et désinfection virucide de niveau hospitalier.'
    }
  ];

  const discreteGuarantees = [
    {
      icon: EyeOff,
      title: 'Véhicules Banalisés & Discrétion',
      desc: 'Nos équipes arrivent en civil avec des camionnettes sans flocage publicitaire pour préserver la totale confidentialité vis-à-vis du voisinage et de la copropriété.'
    },
    {
      icon: HeartHandshake,
      title: 'Empathie & Absence de Jugement',
      desc: 'Nos intervenants sont formés à la gestion des situations humaines délicates et psychologiquement éprouvantes pour les familles et tuteurs.'
    },
    {
      icon: Wind,
      title: 'Générateurs d’Ozone (O3)',
      desc: 'Destruction moléculaire des odeurs tenaces (tabac froid, décomposition, putréfaction, humidité, suie) sans masquer artificiellement.'
    },
    {
      icon: FileCheck,
      title: 'Aide aux Dossiers d’Assurance',
      desc: 'Devis détaillé au format exigé par les compagnies d’assurance habitation pour une prise en charge rapide des sinistres.'
    }
  ];

  return (
    <section id="extreme" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>UNITÉ D’INTERVENTION SPÉCIALISÉE • EXTRÊME & SINISTRES</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
            Nettoyage Extrême, Logements Insalubres & Sinistres
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Une prise en charge humaine, rapide et confidentielle pour réhabiliter les lieux les plus dégradés et redonner une seconde vie à votre patrimoine.
          </p>
        </div>

        {/* 4 Types of Extreme Situations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {interventionTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:border-amber-500/50 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance & Equipment Detail Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 mb-14">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Des Protocoles & Équipements de Niveau 3
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Sécurité Sanitaire Maximale & Réhabilitation Totale
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Intervenir dans un environnement insalubre comporte des risques biologiques réels (moisissures toxiques, bactéries fécales, agents pathogènes). 
              Nos techniciens sont protégés par des combinaisons étanches Tyvek®, des masques complets à filtration P3 et utilisent du matériel de décontamination homologué.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {discreteGuarantees.map((g, i) => {
                const GIcon = g.icon;
                return (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                    <GIcon className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white mb-0.5">{g.title}</div>
                      <div className="text-[11px] text-slate-400 leading-relaxed">{g.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('extreme', 'nettoyage-extreme')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Devis Urgent & Confidentiel sous 2h</span>
              </button>

              <a
                href="tel:0184793020"
                className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold px-4 py-3.5 rounded-xl border border-slate-700 flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Ligne d’Urgence 24/7 : 01 84 79 30 20</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4 text-left">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase">
                <Clock className="w-4 h-4" />
                <span>Délai d’intervention d’urgence</span>
              </div>
              <h4 className="text-xl font-bold text-white font-display">
                Intervention sous 2h partout en Île-de-France
              </h4>
              <p className="text-xs text-slate-300">
                Nos équipes mobiles basées à Paris, Versailles, Nanterre et Créteil sont mobilisables 24h/24 et 7j/7 pour les sinistres critiques.
              </p>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between text-white font-semibold">
                  <span>Prise en charge directe assurance</span>
                  <span className="text-emerald-400">100% Compatible</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Nous fournissons un dossier technique complet avec photos avant/après, rapport de décontamination et chiffrage aux barèmes d'experts.
                </p>
              </div>

              <div className="text-[11px] text-slate-400 italic">
                * Secret professionnel et discrétion absolue garantis par engagement contractuel écrit.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
