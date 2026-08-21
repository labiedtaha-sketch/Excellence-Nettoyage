import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-full bg-slate-900/90 hover:bg-slate-950 text-white shadow-lg border border-slate-700 flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* WhatsApp Floating Button with authentic styling */}
      <a
        href="https://wa.me/33640860213?text=Bonjour%20Excellence%20Nettoyage,%20je%20souhaite%20un%20devis%20de%20nettoyage"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group border-2 border-white/90"
        aria-label="Discuter sur WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          <WhatsAppIcon className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-100 rounded-full"></span>
        </div>
        <span className="hidden sm:inline text-xs font-black tracking-wide pr-1 drop-shadow-xs">
          WhatsApp 7j/7
        </span>
      </a>

      {/* Phone Floating Mobile Button */}
      <a
        href="tel:+33640860213"
        className="pointer-events-auto sm:hidden w-12 h-12 rounded-full bg-[#5faedb] text-slate-950 shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer border-2 border-white"
        aria-label="Appeler directement"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};
