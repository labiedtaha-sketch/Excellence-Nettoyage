import React, { useState } from 'react';
import { 
  Phone, 
  Sparkles, 
  Menu, 
  X, 
  FileText, 
  Percent,
  MessageCircle
} from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (category?: string, serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      
      {/* Top Banner (Clean & Subtle) */}
      <div className="bg-[#5faedb] text-slate-950 text-xs py-2 px-4 sm:px-6 border-b border-[#4ea0ce]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-extrabold text-[11px] sm:text-xs">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span>Intervention 7j/7 en Île-de-France</span>
            </span>
            <span className="hidden sm:inline text-slate-800/40">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 font-bold text-xs bg-white/40 px-2.5 py-0.5 rounded-full">
              <Percent className="w-3.5 h-3.5" />
              <span>Avance immédiate -50% Crédit d'impôt</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/33640860213?text=Bonjour,%20je%20souhaite%20un%20devis" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 font-bold text-xs hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
            <a 
              href="tel:+33640860213" 
              className="inline-flex items-center gap-1.5 font-black text-xs bg-white px-2.5 py-0.5 rounded-lg shadow-xs hover:bg-slate-950 hover:text-white transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#155a82]" />
              <span>06 40 86 02 13</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button 
            id="nav-logo"
            onClick={() => scrollToSection('accueil')} 
            className="flex items-center gap-3 text-left cursor-pointer p-1 -ml-1 rounded-2xl hover:opacity-90 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-[#5faedb] text-slate-950 flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-950 font-display block leading-none">
                EXCELLENCE NETTOYAGE
              </span>
              <span className="text-[11px] font-bold text-slate-500 mt-1 block">
                Île-de-France
              </span>
            </div>
          </button>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollToSection('accueil')}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-all cursor-pointer"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-all cursor-pointer"
            >
              Prestations
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-all cursor-pointer"
            >
              Contact & Devis
            </button>
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="header-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="bg-slate-950 hover:bg-[#5faedb] text-white hover:text-slate-950 text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md flex items-center gap-2 active:scale-95 border border-slate-900 hover:border-[#4ea0ce]"
            >
              <FileText className="w-4 h-4 text-amber-300 group-hover:text-slate-950" />
              <span>Devis Gratuit</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="text-xs bg-slate-950 text-white font-extrabold px-4 py-2.5 rounded-xl shadow-xs cursor-pointer"
            >
              Devis
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-2 text-left animate-in slide-in-from-top-2">
          <button
            onClick={() => scrollToSection('accueil')}
            className="w-full text-left p-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="w-full text-left p-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
          >
            Nos Prestations
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full text-left p-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
          >
            Contact & Devis
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-[#5faedb] text-slate-950 font-black py-3 rounded-xl text-sm"
            >
              Demander un Devis Gratuit
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
