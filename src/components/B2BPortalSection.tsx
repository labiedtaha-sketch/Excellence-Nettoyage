import React, { useState } from 'react';
import { 
  Building2, 
  Building, 
  ShieldCheck, 
  FileSpreadsheet, 
  Users2, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Calculator,
  Briefcase,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface B2BPortalSectionProps {
  onOpenQuoteModal: (category?: string, serviceId?: string) => void;
}

export const B2BPortalSection: React.FC<B2BPortalSectionProps> = ({ onOpenQuoteModal }) => {
  const [b2bSubmitted, setB2bSubmitted] = useState(false);
  const [companyType, setCompanyType] = useState('bureaux');

  const b2bFeatures = [
    {
      title: 'Interlocuteur Unique Dédié',
      desc: 'Un gestionnaire de compte régional joignable sur ligne directe pour le suivi opérationnel, les ajustements de planning et les demandes ponctuelles.',
      icon: Users2
    },
    {
      title: 'Audit Gratuit & Cahier des Charges',
      desc: 'Visite technique de vos locaux sous 24h et remise d’une proposition chiffrée avec engagement de niveau de service (SLA).',
      icon: FileSpreadsheet
    },
    {
      title: 'Contrôles Qualité Numériques',
      desc: 'Rapports d’audit contradictoires trimestriels, fiches d’émargement dématérialisées et notation du service.',
      icon: ShieldCheck
    },
    {
      title: 'Flexibilité & Sans Engagement',
      desc: 'Facturation mensuelle claire et transparente. Possibilité d’ajuster le volume horaire selon les pics d’activité de votre entreprise.',
      icon: Clock
    }
  ];

  const handleB2bFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setB2bSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="b2b" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3.5 py-1 rounded-full border border-blue-500/20">
            Espace Professionnels, Syndics & Grands Comptes
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-3 font-display">
            Des Solutions de Propreté B2B à la Hauteur de Votre Image de Marque
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3">
            Sièges sociaux, cabinets libéraux, copropriétés résidentielles, commerces et sites industriels en Île-de-France.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {b2bFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-left flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive B2B Audit Request Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Audit Sur-Mesure Sans Engagement
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Demandez Votre Audit Technique Gratuit sur Site
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Un inspecteur régional Excellence Nettoyage vient analyser vos espaces, évaluer les flux de passage et définir un protocole de propreté sur-mesure conforme à vos contraintes de sécurité et d'hygiène.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Visite technique sous 24 heures partout en Île-de-France</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Proposition commerciale détaillée sous 48 heures ouvrées</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mise en place de l'équipe et démarrage sous 5 jours ouvrés</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="tel:0184793020"
                className="text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-3 rounded-xl border border-slate-700 flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Ligne Directe B2B : 01 84 79 30 20</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900 p-6 sm:p-7 rounded-2xl border border-slate-800">
            {b2bSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white font-display">Demande B2B Transmise</h4>
                <p className="text-xs text-slate-300">
                  Votre demande d'audit d'entreprise a bien été reçue. Notre responsable grands comptes vous contacte sous 2h pour caler la visite technique.
                </p>
                <button
                  onClick={() => setB2bSubmitted(false)}
                  className="text-xs text-blue-400 hover:underline pt-2 inline-block font-semibold"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleB2bFormSubmit} className="space-y-4">
                <div className="text-sm font-bold text-white border-b border-slate-800 pb-2">
                  Formulaire Rapide de Contact Entreprise & Syndic
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">Raison Sociale / Syndic *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: SAS Valoris, Cabinet ABC..."
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">Nom du Responsable *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Élodie Bernard"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">Email Professionnel *</label>
                    <input
                      type="email"
                      required
                      placeholder="contact@societe.fr"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">Téléphone Direct *</label>
                    <input
                      type="tel"
                      required
                      placeholder="01 45 00 00 00"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">Type de Locaux</label>
                    <select
                      value={companyType}
                      onChange={(e) => setCompanyType(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="bureaux">Bureaux / Siège Social</option>
                      <option value="copro">Copropriété / Immeuble</option>
                      <option value="commerce">Commerce / Boutique</option>
                      <option value="medical">Cabinet Médical / Clinique</option>
                      <option value="abattoir">Abattoir / Usine Agroalimentaire</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">Superficie Approx. (m²)</label>
                    <input
                      type="number"
                      placeholder="Ex: 250"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xs sm:text-sm py-3 rounded-xl shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Demander un Audit & Cahier des Charges Gratuit</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
