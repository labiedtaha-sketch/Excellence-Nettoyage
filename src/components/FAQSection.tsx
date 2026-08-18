import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles, MessageCircle } from 'lucide-react';
import { faqData } from '../data/reviewsData';

export const FAQSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = [
    { id: 'all', label: 'Toutes les questions' },
    { id: 'tarifs', label: 'Crédit d’Impôt & Paiement' },
    { id: 'particuliers', label: 'Ménage & Particuliers' },
    { id: 'securite', label: 'Sécurité & Assurances' },
    { id: 'haccp', label: 'Abattoirs & HACCP' },
    { id: 'extreme', label: 'Nettoyage Extrême & Sinistres' }
  ];

  const filteredFaqs = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            Foire Aux Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-3 font-display">
            Questions Fréquentes & Renseignements Utiles
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Retrouvez toutes les réponses concernant nos méthodes, nos garanties et les modalités administratives.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher une question (ex: crédit d'impôt, clés, produits, abattoir...)"
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-400"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === c.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3 text-left">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen 
                      ? 'border-blue-300 bg-blue-50/40 shadow-sm' 
                      : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 font-display">
                      {faq.question}
                    </span>
                    <div className={`p-1.5 rounded-full bg-white border border-slate-200 text-slate-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-600 text-white border-blue-600' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-blue-100 animate-in fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 text-sm">
              Aucune question ne correspond à votre recherche "{searchTerm}".
            </div>
          )}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-100 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Vous avez une autre question ?</div>
              <div className="text-xs text-slate-600">Notre équipe vous répond sous 30 minutes 7j/7.</div>
            </div>
          </div>
          <a
            href="tel:0184793020"
            className="bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl border border-slate-300 transition-colors shadow-sm"
          >
            Contacter un Conseiller
          </a>
        </div>

      </div>
    </section>
  );
};
