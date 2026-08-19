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
    <header className="sticky top-0 z-50 w-full bg-slate-950/20 backdrop-blur-sm border-b border-white/15 shadow-sm transition-all text-white">
      
      {/* Top Banner */}
      <div className="bg-[#5faedb] text-slate-950 text-xs py-2 px-4 sm:px-6 font-bold">
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
              className="hidden sm:inline-flex items-center gap-1.5 font-bold text-xs hover:text-white transition-colors"
            >
              <img 
                src="/assets/whatsapp-logo.webp" 
                alt="WhatsApp" 
                className="w-3.5 h-3.5 object-contain shrink-0" 
                referrerPolicy="no-referrer"
              />
              <span>WhatsApp Direct</span>
            </a>
            <a 
              href="tel:+33640860213" 
              className="inline-flex items-center gap-1.5 font-black text-xs bg-white text-slate-950 px-2.5 py-0.5 rounded-lg shadow-xs hover:bg-slate-950 hover:text-white transition-all"
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
            <picture>
              <source srcSet="/assets/excellence-nettoyage-logo-header.webp" type="image/webp" />
              <img 
                src="/assets/excellence-nettoyage-logo-header.webp" 
                alt="Excellence Nettoyage Logo" 
                className="h-11 sm:h-12 w-auto max-w-[220px] sm:max-w-[260px] object-contain drop-shadow-md"
                referrerPolicy="no-referrer"
              />
            </picture>
          </button>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollToSection('accueil')}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              Prestations
            </button>
            <button
              onClick={() => scrollToSection('tarifs')}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection('a-propos')}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="navbar-cta-btn"
              onClick={() => onOpenQuoteModal()}
              className="bg-[#5faedb] hover:bg-white text-slate-950 font-black text-xs px-4 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer flex items-center gap-2 active:scale-95 whitespace-nowrap"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span>Demander un Devis</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-[#5faedb] text-slate-950 font-black text-[11px] px-3 py-2 rounded-lg shadow-sm"
            >
              Devis
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10"
              aria-label="Menu mobile"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-white/10 px-4 py-4 space-y-2 text-left">
          <button
            onClick={() => scrollToSection('accueil')}
            className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-slate-200 hover:text-white hover:bg-white/10 block"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-slate-200 hover:text-white hover:bg-white/10 block"
          >
            Prestations
          </button>
          <button
            onClick={() => scrollToSection('tarifs')}
            className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-slate-200 hover:text-white hover:bg-white/10 block"
          >
            Tarifs
          </button>
          <button
            onClick={() => scrollToSection('a-propos')}
            className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-slate-200 hover:text-white hover:bg-white/10 block"
          >
            À Propos
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-slate-200 hover:text-white hover:bg-white/10 block"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-slate-200 hover:text-white hover:bg-white/10 block"
          >
            Contact
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-[#5faedb] text-slate-950 font-black text-sm py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Demander un Devis Gratuit</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
