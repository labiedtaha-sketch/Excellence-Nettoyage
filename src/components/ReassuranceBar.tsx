import React from 'react';
import { ShieldCheck, UserCheck, Sparkles, Award, Clock, HeartHandshake } from 'lucide-react';

export const ReassuranceBar: React.FC = () => {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: 'Satisfait ou Refait sous 24h',
      desc: 'Notre exigence de perfection : toute remarque est rectifiée sans frais sous 24h.',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: UserCheck,
      title: 'Personnel 100% Salarié & Vérifié',
      desc: 'Agents rigoureusement recrutés en CDI, casier judiciaire n°3 vierge et formés aux protocoles.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      icon: Award,
      title: '50% Crédit d’Impôt Immédiat',
      desc: 'Agrément Services à la Personne n° SAP/892301 : ne payez que 50% de vos factures de ménage.',
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    {
      icon: Sparkles,
      title: 'Produits Écolabel & Certibiocide',
      desc: 'Formules respectueuses de la santé, de l’environnement et conformes aux normes HACCP.',
      color: 'text-teal-600',
      bg: 'bg-teal-50'
    },
    {
      icon: Clock,
      title: 'Intervention Rapide Île-de-France',
      desc: 'Astreinte d’urgence < 2h pour sinistres & disponibilité 7j/7 sur les 8 départements.',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    },
    {
      icon: HeartHandshake,
      title: 'Assurance AXA 5.000.000 €',
      desc: 'Couverture complète de vos locaux, mobiliers précieux et sites industriels.',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  return (
    <section className="bg-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Nos Engagements d’Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2 font-display">
            Pourquoi plus de 1 850 clients nous font confiance en Île-de-France
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            La sérénité d’un service de propreté certifié, transparent et rigoureusement encadré.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${item.bg} ${item.color} shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
