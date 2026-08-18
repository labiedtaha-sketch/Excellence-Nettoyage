import React from 'react';
import { 
  ShieldCheck, 
  Flame, 
  Gauge, 
  FileCheck2, 
  Microscope, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Calculator, 
  ArrowRight,
  AlertOctagon,
  Sparkles,
  Droplets
} from 'lucide-react';
import { ServiceCategory } from '../types';

interface AbattoirSectionProps {
  onOpenQuoteModal: (category?: ServiceCategory, serviceId?: string) => void;
}

export const AbattoirSection: React.FC<AbattoirSectionProps> = ({ onOpenQuoteModal }) => {
  const protocols = [
    {
      step: '01',
      title: 'Ramassage & Débarras Organique',
      desc: 'Évacuation mécanique des résidus de viande, graisses, os et sang avant toute mise en eau pour éviter le colmatage des siphons.'
    },
    {
      step: '02',
      title: 'Prélavage Tempéré 45°C - 50°C',
      desc: 'Rinçage à température contrôlée pour émulsionner les lipides sans cuire ni coaguler les protéines animales sur les structures en inox.'
    },
    {
      step: '03',
      title: 'Moussage Alcalin Haute Adhérence',
      desc: 'Projection au canon à mousse inox d’un détergent chloré moussant sur les convoyeurs, crochets, couteaux et sols pour dissoudre les matières grasses tenaces.'
    },
    {
      step: '04',
      title: 'Action Mécanique & Brossage',
      desc: 'Brossage méticuleux des zones d’ombre, recoins de chaînes, carters et tapis modulaires.'
    },
    {
      step: '05',
      title: 'Rinçage Haute & Moyenne Pression',
      desc: 'Rinçage de haut en bas à l’eau adoucie sous pression calibrée (40 à 140 bars) pour éliminer toute trace de détergent.'
    },
    {
      step: '06',
      title: 'Désinfection Terminale & Contrôle ATP',
      desc: 'Pulvérisation d’un biocide homologué contact alimentaire sans rinçage. Contrôle instantané par luminomètre ATP bioluminescent.'
    }
  ];

  const hygienePillars = [
    {
      icon: Microscope,
      title: 'Conformité HACCP & DDPP',
      desc: 'Protocoles validés pour les audits vétérinaires et inspections sanitaires de la Direction Départementale de la Protection des Populations.'
    },
    {
      icon: Gauge,
      title: 'Tests ATP Bioluminescence',
      desc: 'Mesure immédiate en RLU (Relative Light Units) avant redémarrage de la production matinale pour garantir une propreté microbiologique absolue.'
    },
    {
      icon: Droplets,
      title: 'Canons à Mousse & Eau 150°C',
      desc: 'Parc machine industriel haute performance pour dégraisser en profondeur les ateliers de découpe et de transformation.'
    },
    {
      icon: FileCheck2,
      title: 'Fiche de Traçabilité Numérique',
      desc: 'Rapport complet d’intervention émargé, fiches techniques des produits et relevés de températures transmis après chaque vacation de nuit.'
    }
  ];

  return (
    <section id="abattoirs" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>PÔLE AGROALIMENTAIRE & DÉCONTAMINATION INDUSTRIELLE</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
            Nettoyage d’Abattoirs, Ateliers de Découpe & Normes HACCP
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Une expertise sanitaire de haut niveau pour les professionnels de la viande et de l'agroalimentaire en Île-de-France. Zéro compromis sur la sécurité alimentaire.
          </p>
        </div>

        {/* 2-Columns Highlight Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                La Sécurité Sanitaire au Cœur de Vos Lignes
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Élimination des Biofilms, Graisses et Risques de Contamination Croisée
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Les environnements d'abattage et de transformation de viande sont soumis à des contraintes microbiologiques extrêmes (Salmonella, Listeria monocytogenes, E. Coli). 
                Nos opérateurs, certifiés <strong>Certibiocide</strong> et formés aux 7 principes de la méthode <strong>HACCP</strong>, interviennent lors des arrêts de production et vacations de nuit pour restituer des locaux stériles prêts pour la reprise d'activité.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-200">
                  <strong className="block text-white font-semibold mb-0.5">Salles d’abattage & saignée</strong>
                  Lavage haute pression, sang et résidus organiques lourds.
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-200">
                  <strong className="block text-white font-semibold mb-0.5">Ateliers de découpe & piéçage</strong>
                  Tables inox, convoyeurs à bande, scies et hachoirs.
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-200">
                  <strong className="block text-white font-semibold mb-0.5">Chambres froides & ressuage</strong>
                  Évaporateurs, rails aériens et sols antidérapants.
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-200">
                  <strong className="block text-white font-semibold mb-0.5">Quais & sas d’expédition</strong>
                  Désinfection totale des zones de chargement frigorifique.
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('industriel', 'nettoyage-abattoirs')}
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Demander un Audit & Devis Agroalimentaire</span>
              </button>
              
              <a
                href="tel:0184793020"
                className="text-slate-300 hover:text-white text-sm font-semibold flex items-center gap-2 border border-slate-700 px-4 py-3 rounded-xl hover:bg-slate-900 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Astreinte Nuit : 01 84 79 30 20</span>
              </a>
            </div>
          </div>

          {/* Right Image / Visual Box */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Nettoyage industriel et abattoir HACCP"
                className="w-full h-80 sm:h-96 object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              {/* Floating Quality Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Garantie Conformité Contrôles Sanitaires</div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      Fiches de sécurité FDS, plans de nettoyage HACCP et rapports d'audits fournis à chaque vacation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {hygienePillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* 6-Steps Protocol Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 text-left">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Méthodologie Éprouvée
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
              Protocole Standard de Bionettoyage en 6 Étapes
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Appliqué rigoureusement chaque nuit par nos chefs d'équipe sur vos chaînes de production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {protocols.map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="text-xl font-extrabold text-emerald-400 font-display mb-2">{p.step}.</div>
                  <h5 className="text-sm font-bold text-white mb-1.5">{p.title}</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
