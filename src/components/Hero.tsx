import React from 'react';
import { 
  Sparkles, 
  Phone, 
  ArrowRight, 
  Percent,
  FileText,
  Clock,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { ServiceCategory } from '../types';

interface HeroProps {
  onOpenQuoteModal: (category?: ServiceCategory, serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="accueil" className="relative bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 border-b border-slate-100 overflow-hidden text-center">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-[#5faedb]/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-[#5faedb]/15 text-[#155a82] border border-[#5faedb]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#155a82]" />
            <span>Île-de-France • Intervention 7j/7</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-slate-950 text-white shadow-xs">
            <Percent className="w-3.5 h-3.5 text-amber-300" />
            <span>Avance Immédiate -50% Crédit d'Impôt</span>
          </span>
        </div>

        {/* Fast, Powerful Main Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 font-display leading-[1.08]">
            L'Excellence du Nettoyage.
          </h1>
          <p className="text-lg sm:text-2xl text-slate-600 font-normal max-w-2xl mx-auto">
            Particuliers & Professionnels. Devis gratuit et personnalisé en moins de 2h.
          </p>
        </div>

        {/* Fast Action CTA Group - 3 Buttons of identical size, on a single line */}
        <div className="w-full max-w-4xl mx-auto pt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 w-full">
            {/* Button 1: Devis Gratuit */}
            <button
              id="hero-quote-cta"
              onClick={() => onOpenQuoteModal()}
              className="h-15 sm:h-16 w-full bg-slate-950 hover:bg-[#5faedb] text-white hover:text-slate-950 font-extrabold text-sm sm:text-[15px] px-4 rounded-2xl transition-all cursor-pointer shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 border border-slate-900 hover:border-[#4ea0ce] active:scale-95 whitespace-nowrap group"
            >
              <FileText className="w-4 h-4 text-amber-300 group-hover:text-slate-950 shrink-0" />
              <span>Demander un Devis Gratuit</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>

            {/* Button 2: WhatsApp Direct */}
            <a
              href="https://wa.me/33640860213?text=Bonjour%20Excellence%20Nettoyage,%20je%20souhaite%20un%20devis%20de%20nettoyage"
              target="_blank"
              rel="noopener noreferrer"
              className="h-15 sm:h-16 w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm sm:text-[15px] px-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shrink-0"></div>
              <span>WhatsApp Direct</span>
            </a>

            {/* Button 3: Téléphone */}
            <a
              href="tel:+33640860213"
              className="h-15 sm:h-16 w-full bg-slate-100 hover:bg-slate-200 text-slate-950 font-black text-sm sm:text-[15px] px-4 rounded-2xl border border-slate-200 transition-all flex items-center justify-center gap-2 shadow-xs whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#5faedb] shrink-0" />
              <span>06 40 86 02 13</span>
            </a>
          </div>
        </div>

        {/* 3 Quick Guarantees (Clean, identical equal spacing on a single line) */}
        <div className="w-full max-w-4xl mx-auto pt-6 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap">
              <Clock className="w-4 h-4 text-[#5faedb] shrink-0" />
              <span>Devis sous 2h sans engagement</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-[#5faedb] shrink-0" />
              <span>Personnel certifié en CDI & vérifié</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Garantie Satisfait ou Ré-intervenu</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
