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
      {/* 1. Ultra-Clean Header Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Light, Spacious Hero Section with Core SEO Keywords & Simulator */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 3. SEO Services Pillars: Particuliers (-50%), Bureaux & Pros, Abattoirs HACCP & Extrême */}
        <ServicesOverview onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4. Minimalist Contact & Devis Express */}
        <ContactSection />
      </main>

      {/* 5. Clean SEO-linked Footer */}
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
