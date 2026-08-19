import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteSimulatorModal } from './components/QuoteSimulatorModal';
import { LegalModals } from './components/LegalModals';
import { FloatingActions } from './components/FloatingActions';
import { ServiceCategory } from './types';

export default function App() {
  // Quote Simulator Modal State
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteCategory, setQuoteCategory] = useState<ServiceCategory>('particuliers');
  const [quoteServiceId, setQuoteServiceId] = useState<string | undefined>(undefined);

  // Legal Modals State
  const [legalModalType, setLegalModalType] = useState<'mentions' | 'cgv' | 'rgpd' | null>(null);

  // Helper to open Quote Modal with preset
  const handleOpenQuoteModal = (category?: string, serviceId?: string) => {
    if (category) {
      setQuoteCategory(category as ServiceCategory);
    }
    if (serviceId) {
      setQuoteServiceId(serviceId);
    } else {
      setQuoteServiceId(undefined);
    }
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#5faedb] selection:text-white">
      
      {/* 1. TOP FULL-SCREEN WRAPPER : L'IMAGE COMMENCE DU TOUT HAUT DU SITE (MENU + HERO) */}
      <div className="relative bg-slate-950 text-white overflow-hidden min-h-[92vh] flex flex-col">
        
        {/* Full-bleed background image : 'agent-de-nettoyage-debout-donnant-son-dos-a-la-cam.webp' */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <picture>
            <source srcSet="/assets/agent-de-nettoyage-debout-donnant-son-dos-a-la-cam.webp" type="image/webp" />
            <img
              src="/assets/agent-de-nettoyage-debout-donnant-son-dos-a-la-cam.webp"
              alt="Excellence Nettoyage - Agent Professionnel Île-de-France"
              className="w-full h-full object-cover object-right md:object-center filter brightness-[0.98] contrast-[1.02]"
              referrerPolicy="no-referrer"
            />
          </picture>

          {/* Dégradés ultra-légers pour préserver toute la clarté et visibilité de l'image */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/25 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/70"></div>
        </div>

        {/* Header & Menu au-dessus de l'image */}
        <div className="relative z-20">
          <Navbar onOpenQuoteModal={handleOpenQuoteModal} />
        </div>

        {/* Hero Section */}
        <div className="relative z-10 flex-1 flex items-center">
          <Hero onOpenQuoteModal={handleOpenQuoteModal} />
        </div>

      </div>

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. SEO Services Pillars: Particuliers (-50%), Bureaux & Pros, Abattoirs HACCP & Extrême */}
        <ServicesOverview onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 3. Minimalist Contact & Devis Express */}
        <ContactSection />
      </main>

      {/* 4. Clean SEO-linked Footer */}
      <Footer 
        onOpenQuoteModal={handleOpenQuoteModal} 
        onOpenLegalModal={(type) => setLegalModalType(type)}
      />

      {/* Floating Fast Action Utilities (WhatsApp, Quick Quote, Call) */}
      <FloatingActions onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Fast Quote Calculator Modal */}
      <QuoteSimulatorModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialCategory={quoteCategory}
        initialServiceId={quoteServiceId}
      />

      {/* Legal Modals (Mentions, CGV, RGPD) */}
      <LegalModals 
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
