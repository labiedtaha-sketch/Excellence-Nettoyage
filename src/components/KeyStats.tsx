import React from 'react';
import { Award, Users, ThumbsUp, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export const KeyStats: React.FC = () => {
  const stats = [
    {
      number: '12+',
      label: 'Années d’expérience',
      sublabel: 'Sur tout Paris & l’Île-de-France',
      icon: Award,
      color: 'text-amber-500',
      bg: 'bg-amber-50'
    },
    {
      number: '1 850+',
      label: 'Clients fidélisés',
      sublabel: 'Particuliers, entreprises & syndics',
      icon: Users,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      number: '99.4%',
      label: 'Taux de satisfaction',
      sublabel: 'Note Google vérifiée 4.9/5',
      icon: ThumbsUp,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      number: '< 2h',
      label: 'Délai d’astreinte',
      sublabel: 'Intervention d’urgence & sinistres',
      icon: Clock,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    }
  ];

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-3 shadow-inner`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
