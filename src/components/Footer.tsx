import React from 'react';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  FileText
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon, InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';
import { ServiceCategory } from '../types';

interface FooterProps {
  onOpenQuoteModal: (category?: ServiceCategory) => void;
  onOpenLegalModal: (type: 'mentions' | 'cgv' | 'rgpd') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal, onOpenLegalModal }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200 text-left">
      
      {/* Main Footer Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-28 sm:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand & Coordonnées (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="flex items-center text-left group cursor-pointer"
            >
              <BrandLogo variant="dark" size="sm" />
            </button>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm font-medium">
              Entreprise de propreté et services de nettoyage haute exigence pour particuliers et professionnels sur l'ensemble de l'Île-de-France.
            </p>

            <div className="space-y-2.5 text-xs text-slate-700 font-semibold">
              <a 
                href="tel:+33640860213" 
                className="flex items-center gap-2 text-slate-800 hover:text-[#196693] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#5faedb] shrink-0" />
                <span className="font-bold">+33 6 40 86 02 13 (7j/7)</span>
              </a>

              <a 
                href="https://wa.me/33640860213?text=Bonjour,%20je%20souhaite%20un%20devis" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-800 hover:text-emerald-700 transition-colors group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-bold">WhatsApp Direct : +33 6 40 86 02 13</span>
              </a>

              <a 
                href="mailto:contact@nettoyage-excellence.com" 
                className="flex items-center gap-2 text-slate-800 hover:text-[#196693] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#5faedb] shrink-0" />
                <span>contact@nettoyage-excellence.com</span>
              </a>

              <div className="flex items-start gap-2 text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-[#5faedb] shrink-0 mt-0.5" />
                <div>
                  <span>4 Rue des Ifs, 78200 Magnanville</span>
                  <div className="text-[11px] text-slate-500 font-normal mt-0.5">Intervention 7j/7 dans toute l'Île-de-France</div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-[11px] font-black uppercase tracking-wider text-slate-900 mb-2.5">
                Suivez-nous sur les réseaux
              </div>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/excellence.nettoyage?igsh=MWFuMWdnODVhZDF5YQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivez Excellence Nettoyage sur Instagram"
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-pink-600 border border-slate-200 flex items-center justify-center p-2 transition-all hover:scale-110 active:scale-95 shadow-xs"
                >
                  <InstagramIcon className="w-full h-full" />
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@excellence.nettoy3?_r=1&_t=ZN-98w8u62eu4U"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivez Excellence Nettoyage sur TikTok"
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 flex items-center justify-center p-2 transition-all hover:scale-110 active:scale-95 shadow-xs"
                >
                  <TikTokIcon className="w-full h-full" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1EgoZrtbqe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivez Excellence Nettoyage sur Facebook"
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-blue-600 border border-slate-200 flex items-center justify-center p-2 transition-all hover:scale-110 active:scale-95 shadow-xs"
                >
                  <FacebookIcon className="w-full h-full" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/33640860213?text=Bonjour,%20je%20souhaite%20un%20devis"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discutez sur WhatsApp"
                  className="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#25D366] border border-emerald-200 flex items-center justify-center p-2 transition-all hover:scale-110 active:scale-95 shadow-xs"
                >
                  <WhatsAppIcon className="w-full h-full" />
                </a>
              </div>
            </div>
          </div>

          {/* SEO Keywords: Prestations (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-slate-950">
              Prestations Spécialisées
            </div>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li>
                <button
                  onClick={() => {
                    scrollToSection('services');
                    onOpenQuoteModal('particuliers');
                  }}
                  className="text-left hover:text-[#196693] transition-colors cursor-pointer"
                >
                  Ménage à domicile & repassage (-50% crédit d'impôt)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection('services');
                    onOpenQuoteModal('particuliers');
                  }}
                  className="text-left hover:text-[#196693] transition-colors cursor-pointer"
                >
                  Nettoyage fin de bail & remise en état caution
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection('services');
                    onOpenQuoteModal('particuliers');
                  }}
                  className="text-left hover:text-[#196693] transition-colors cursor-pointer"
                >
                  Nettoyage après travaux & fin de chantier
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection('services');
                    onOpenQuoteModal('particuliers');
                  }}
                  className="text-left hover:text-[#196693] transition-colors cursor-pointer"
                >
                  Lavage de vitres & baies vitrées sans traces
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection('services');
                    onOpenQuoteModal('professionnels');
                  }}
                  className="text-left hover:text-[#196693] transition-colors cursor-pointer"
                >
                  Nettoyage de bureaux & locaux d'entreprise
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection('services');
                    onOpenQuoteModal('professionnels');
                  }}
                  className="text-left hover:text-[#196693] transition-colors cursor-pointer"
                >
                  Nettoyage de copropriétés & parties communes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection('services');
                    onOpenQuoteModal('industriel');
                  }}
                  className="text-left hover:text-emerald-700 transition-colors text-emerald-800 font-bold cursor-pointer"
                >
                  Nettoyage d'abattoirs & agroalimentaire (HACCP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection('services');
                    onOpenQuoteModal('extreme');
                  }}
                  className="text-left hover:text-amber-800 transition-colors text-amber-900 font-bold cursor-pointer"
                >
                  Nettoyage extrême & syndrome de Diogène
                </button>
              </li>
            </ul>
          </div>

          {/* SEO Keywords: Zones IDF (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-slate-950">
              Zone d'Intervention
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Déplacement et intervention 7j/7 sur <strong>l'ensemble de l'Île-de-France</strong> (Paris, 78, 92, 93, 94, 95, 77, 91).
            </p>

            <div className="space-y-1.5 text-xs text-slate-700 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5faedb] shrink-0" />
                <span>Intervention rapide 7j/7</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5faedb] shrink-0" />
                <span>Sans frais de déplacement additionnels</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5faedb] shrink-0" />
                <span>Équipes mobiles équipées partout en IDF</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full bg-[#5faedb] hover:bg-slate-950 text-slate-950 hover:text-white font-extrabold text-xs py-3 rounded-xl border border-[#4ea0ce] transition-all text-center cursor-pointer flex items-center justify-center gap-2 shadow-md active:scale-95"
              >
                <FileText className="w-3.5 h-3.5 text-slate-950 group-hover:text-amber-300" />
                <span>Demander un Devis Gratuit</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal Links Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} <strong className="text-slate-800">Excellence Nettoyage</strong> • SIRET 911 286 805 00039 • Tous droits réservés.
          </div>

          {/* Legal Links clearly separated and centered/left aligned on mobile */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
            <button
              onClick={() => onOpenLegalModal('mentions')}
              className="text-slate-600 hover:text-slate-950 font-bold hover:underline transition-colors cursor-pointer py-1"
            >
              Mentions Légales
            </button>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <button
              onClick={() => onOpenLegalModal('cgv')}
              className="text-slate-600 hover:text-slate-950 font-bold hover:underline transition-colors cursor-pointer py-1"
            >
              Conditions Générales de Vente (CGV)
            </button>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <button
              onClick={() => onOpenLegalModal('rgpd')}
              className="text-slate-600 hover:text-slate-950 font-bold hover:underline transition-colors cursor-pointer py-1"
            >
              Politique de Confidentialité (RGPD)
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
