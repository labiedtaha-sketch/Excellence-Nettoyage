import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Award, 
  Leaf, 
  Heart, 
  Clock, 
  CheckCircle2,
  Wrench,
  GraduationCap,
  Building
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    {
      title: 'L’Exigence du Détail',
      desc: 'Aucun recoin n’est négligé. De la plinthe masquée aux conduits de ventilation, notre niveau d’exigence dépasse les standards traditionnels du nettoyage.',
      icon: Sparkles,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10'
    },
    {
      title: 'Fiabilité & Ponctualité',
      desc: 'Nous respectons scrupuleusement les horaires convenus et les engagements de notre cahier des charges. En cas d’imprévu, un remplacement est assuré sans faille.',
      icon: Clock,
      color: 'text-[#155a82]',
      bg: 'bg-[#5faedb]/15'
    },
    {
      title: 'Discrétion & Déontologie',
      desc: 'Tous nos intervenants signent une clause de confidentialité stricte. Véhicules banalisés sur demande pour les situations délicates ou résidences privées.',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bg: 'bg-emerald-500/10'
    },
    {
      title: 'Éco-Responsabilité',
      desc: 'Utilisation prioritaire de produits certifiés Ecolabel Européen, biodégradables, sans perturbateurs endocriniens et sans composés organiques volatils agressifs.',
      icon: Leaf,
      color: 'text-teal-600',
      bg: 'bg-teal-500/10'
    }
  ];

  const equipmentFleet = [
    { name: 'Monobrosses & Autolaveuses', desc: 'Décapage et lustrage ultra-rapide des marbres, thermoplastiques et carrelages.' },
    { name: 'Injecteurs-Extracteurs Kärcher Pro', desc: 'Nettoyage en profondeur des moquettes, canapés, tapis et sièges de bureau.' },
    { name: 'Nettoyeurs Vapeur Sèche 180°C', desc: 'Assainissement thermique antibactérien et dégraissage sans chimie agressive.' },
    { name: 'Perches Carbone & Eau Osmosée', desc: 'Lavage de vitres jusqu’à 15 mètres de hauteur sans échafaudage et sans traces.' },
    { name: 'Canons à Mousse Inox HACCP', desc: 'Moussage industriel haute adhérence pour abattoirs et ateliers de viande.' },
    { name: 'Générateurs d’Ozone O3 Industriels', desc: 'Destruction moléculaire des odeurs tenaces (tabac, suie, décomposition).' }
  ];

  return (
    <section id="a-propos" className="py-20 sm:py-28 bg-white border-b border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-[#155a82] bg-[#5faedb]/15 px-3.5 py-1.5 rounded-full border border-[#5faedb]/30">
            Qui Sommes-Nous ?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 font-display">
            L'Excellence du Nettoyage : L'Art du Propre au Plus Haut Niveau
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Fondée avec la volonté de restaurer la noblesse et la rigueur dans les métiers de la propreté, Excellence Nettoyage est devenue la référence des particuliers exigeants et des professionnels en Île-de-France.
          </p>
        </div>

        {/* Story & Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-display">
              Un Recrutement Rigoureux & Une Formation Interne Continue
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Nous sommes convaincus que la qualité d'une prestation repose avant tout sur les femmes et les hommes qui l'exécutent. C'est pourquoi nous refusons la précarité et le recours aux sous-traitants anonymes.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="p-2.5 rounded-xl bg-[#5faedb]/20 text-[#155a82] mt-0.5 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">100% Salariés Dédiés</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Stabilité, valorisation et fidélisation de nos équipes. Vous conservez le même intervenant dans la durée.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Casier Judiciaire n°3 Systématiquement Vierge</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Contrôle des références auprès des anciens employeurs et vérification systématique des antécédents.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 mt-0.5 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Formation Continue & Certifications</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Modules bionettoyage, protocoles HACCP agroalimentaire, habilitations chimiques et Certibiocide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                alt="Équipe Excellence Nettoyage en action"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-slate-900 text-left border border-white/40 shadow">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm">Responsabilité Sociétale & Environnementale (RSE)</div>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Engagé</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Tous nos produits d'entretien respectent la santé des occupants, des enfants et des animaux, et préservent la qualité de l'air intérieur.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#5faedb] transition-all text-left flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${v.bg} ${v.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-black text-slate-950 mb-2">{v.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Equipment Fleet Showcase */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white text-left shadow-xl">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#5faedb]">
              Parc Machine & Technologie
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
              Des Équipements de Précision pour un Résultat Sans Égal
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-normal">
              Nous investissons continuellement dans les technologies de bionettoyage et de désinfection les plus performantes du marché.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipmentFleet.map((eq, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#5faedb]/50 transition-colors">
                <div className="flex items-center gap-2 text-[#5faedb] text-xs font-bold mb-1">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>{eq.name}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{eq.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
