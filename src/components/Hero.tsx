import React from 'react';
import { 
  Sparkles, 
  Phone, 
  ArrowRight, 
  Percent, 
  FileText, 
  Clock, 
  ShieldCheck, 
  CheckCircle2,
  Award,
  Zap
} from 'lucide-react';
import { ServiceCategory } from '../types';
import whatsappLogo from '../assets/whatsapp-logo.webp';

interface HeroProps {
  onOpenQuoteModal: (category?: ServiceCategory, serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="accueil" className="w-full text-white text-left py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Text Content */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black bg-[#5faedb] text-slate-950 shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Île-de-France • Intervention 7j/7</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black bg-white/15 text-white backdrop-blur-md border border-white/20 shadow-md">
                <Percent className="w-3.5 h-3.5 text-amber-300" />
                <span>Avance Immédiate -50% Crédit d'Impôt</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-display leading-[1.05] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                L'Excellence du Nettoyage en Île-de-France.
              </h1>
              <p className="text-base sm:text-xl text-slate-100 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Particuliers, Copropriétés, Bureaux & Espaces Commerciaux. Une équipe formée, du matériel professionnel de pointe et un résultat irréprochable garanti.
              </p>
            </div>

            {/* 3 Action Buttons */}
            <div className="w-full pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl mx-auto lg:mx-0">
                
                {/* Button 1: Devis Gratuit */}
                <button
                  id="hero-quote-cta"
                  onClick={() => onOpenQuoteModal()}
                  className="h-14 sm:h-16 w-full bg-[#5faedb] hover:bg-white text-slate-950 hover:text-slate-950 font-black text-xs sm:text-sm px-4 rounded-2xl transition-all cursor-pointer shadow-2xl hover:shadow-cyan-500/30 flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap group"
                >
                  <FileText className="w-4 h-4 text-slate-950 shrink-0" />
                  <span>Devis Gratuit 2h</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </button>

                {/* Button 2: WhatsApp Direct */}
                <a
                  href="https://wa.me/33640860213?text=Bonjour%20Excellence%20Nettoyage,%20je%20souhaite%20un%20devis%20de%20nettoyage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 sm:h-16 w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs sm:text-sm px-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-emerald-500/30 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <img 
                    src={whatsappLogo} 
                    alt="WhatsApp" 
                    className="w-5 h-5 object-contain shrink-0" 
                    referrerPolicy="no-referrer"
                  />
                  <span>WhatsApp 7j/7</span>
                </a>

                {/* Button 3: Téléphone */}
                <a
                  href="tel:+33640860213"
                  className="h-14 sm:h-16 w-full bg-white/10 hover:bg-white/20 text-white font-black text-xs sm:text-sm px-4 rounded-2xl border border-white/30 backdrop-blur-md shadow-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95"
                >
                  <Phone className="w-4 h-4 text-[#5faedb] shrink-0" />
                  <span>06 40 86 02 13</span>
                </a>
              </div>
            </div>

            {/* Reassurance Checklist */}
            <div className="pt-4 sm:pt-6 border-t border-white/15">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
                  <Clock className="w-4 h-4 text-[#5faedb] shrink-0" />
                  <span>Devis sous 2h sans engagement</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#5faedb] shrink-0" />
                  <span>Personnel qualifié & assuré</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs sm:text-sm font-bold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Satisfaction Garantie</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Floating Badges / Highlights */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-4 items-end">
            
            {/* Pill 1 */}
            <div className="bg-slate-900/80 backdrop-blur-xl border border-white/20 p-4 rounded-3xl shadow-2xl max-w-xs text-left transform translate-y-4 hover:translate-y-2 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#5faedb] text-slate-950 flex items-center justify-center font-black shrink-0 shadow-md">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-white">Protocole d'Hygiène Strict</div>
                  <div className="text-[11px] font-medium text-slate-300">Normes sanitaires & écologiques</div>
                </div>
              </div>
            </div>

            {/* Pill 2 */}
            <div className="bg-slate-900/80 backdrop-blur-xl border border-white/20 p-4 rounded-3xl shadow-2xl max-w-xs text-left transform hover:translate-x-[-4px] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shrink-0 shadow-md">
                  <Percent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-white">-50% Déduction Fiscale</div>
                  <div className="text-[11px] font-medium text-slate-300">Service à la personne en direct</div>
                </div>
              </div>
            </div>

            {/* Pill 3 */}
            <div className="bg-slate-900/80 backdrop-blur-xl border border-white/20 p-4 rounded-3xl shadow-2xl max-w-xs text-left transform -translate-y-2 hover:translate-y-[-6px] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-black shrink-0 shadow-md">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-white">Intervention Rapide 7j/7</div>
                  <div className="text-[11px] font-medium text-slate-300">Partout en Île-de-France</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
