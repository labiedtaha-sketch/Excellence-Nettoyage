import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Percent, 
  FileText, 
  Phone, 
  MessageCircle,
  ShieldCheck,
  Send,
  Mail
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ServiceCategory } from '../types';
import { servicesData } from '../data/servicesData';

const checkPostalCodeCoverage = (code: string) => {
  const clean = code.trim();
  const idfPrefixes = ['75', '77', '78', '91', '92', '93', '94', '95'];
  const prefix = clean.substring(0, 2);
  if (idfPrefixes.includes(prefix)) {
    return {
      isCovered: true,
      message: `Secteur ${prefix} éligible : nos équipes interviennent dans votre commune (Île-de-France)`
    };
  }
  return {
    isCovered: false,
    message: `Intervention possible sur devis personnalisé selon localisation`
  };
};

interface QuoteSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: ServiceCategory;
  initialServiceId?: string;
}

export const QuoteSimulatorModal: React.FC<QuoteSimulatorModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'particuliers',
  initialServiceId
}) => {
  const [formData, setFormData] = useState({
    category: initialCategory,
    serviceId: initialServiceId || (initialCategory === 'particuliers' ? 'menage-regulier' : 'bureaux-locaux'),
    fullName: '',
    phone: '',
    email: '',
    postalCode: '',
    surface: '',
    preferredDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [quoteRef, setQuoteRef] = useState<string>('');

  if (!isOpen) return null;

  const coverageCheck = checkPostalCodeCoverage(formData.postalCode);
  const selectedService = servicesData.find(s => s.id === formData.serviceId) || servicesData[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const generatedRef = `EXC-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteRef(generatedRef);

    const payload = {
      _subject: `⚡ Nouvelle Demande de Devis [${generatedRef}] - ${formData.fullName}`,
      _cc: 'support@nettoyage-excellence.com,labiedtaha@gmail.com',
      _template: 'table',
      'Référence Devis': generatedRef,
      'Nom du client': formData.fullName,
      'Téléphone': formData.phone,
      'Email client': formData.email,
      'Code Postal': formData.postalCode,
      'Prestation': selectedService.title,
      'Surface estimée': formData.surface ? `${formData.surface} m²` : 'Non précisée',
      'Date souhaitée': formData.preferredDate || 'Dès que possible',
      'Message': formData.message || 'Aucun message particulier',
      'Origine': 'Modale Devis Gratuit (nettoyage-excellence.com)'
    };

    try {
      // 1. Send via local API
      fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          postalCode: formData.postalCode,
          serviceType: selectedService.title,
          surface: formData.surface,
          preferredDate: formData.preferredDate,
          message: formData.message,
          ref: generatedRef,
          source: 'Modale Devis Gratuit (nettoyage-excellence.com)'
        })
      }).catch(err => console.log('Local API status:', err));

      // 2. Direct browser webhook to guarantee email delivery
      await fetch('https://formsubmit.co/ajax/contact@nettoyage-excellence.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('Envoi webhook :', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 my-4 max-h-[92vh] flex flex-col text-left">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#5faedb] text-slate-950 flex items-center justify-between shrink-0 border-b border-[#4ea0ce]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-xs">
              <FileText className="w-5 h-5 text-[#5faedb]" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black font-display text-slate-950">
                Demande de Devis Gratuit
              </h2>
              <p className="text-xs text-slate-900 font-medium">
                100% Gratuit & Sans engagement • Réponse par e-mail et téléphone sous 2 heures
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-900 hover:text-white rounded-full hover:bg-slate-950 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-slate-800 text-left">
          
          {isSubmitted ? (
            /* Confirmation View */
            <div className="py-6 text-center space-y-5 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Devis Transmis à l'Équipe
                </span>
                <h3 className="text-2xl font-black text-slate-950 font-display">
                  Merci {formData.fullName} !
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Votre demande de devis <strong className="text-slate-950">n° {quoteRef}</strong> a bien été transmise à nos équipes techniques (<span className="text-slate-900 font-bold">contact@nettoyage-excellence.com</span> & <span className="text-slate-900 font-bold">support@nettoyage-excellence.com</span>).
                </p>
                <p className="text-xs text-slate-500">
                  Un conseiller vous contacte sous <strong>2 heures</strong> avec votre proposition tarifaire détaillée.
                </p>
              </div>

              {/* Estimate Recap Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-500 font-semibold border-b border-slate-200 pb-2">
                  <span>Prestation</span>
                  <span className="text-slate-950 font-extrabold">{selectedService.title}</span>
                </div>
                <div className="flex items-center justify-between text-slate-500 font-semibold">
                  <span>Secteur géographique</span>
                  <span className="text-slate-950 font-bold">{formData.postalCode || 'Île-de-France'}</span>
                </div>
                {selectedService.eligibleCreditImpot && (
                  <div className="flex items-center justify-between text-[#155a82] font-bold bg-[#5faedb]/15 p-2.5 rounded-xl border border-[#5faedb]/30 mt-1">
                    <div className="flex items-center gap-1.5">
                      <Percent className="w-3.5 h-3.5 text-[#155a82]" />
                      <span>Avantage particulier :</span>
                    </div>
                    <span>-50% Crédit d'impôt immédiat</span>
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/33640860213?text=${encodeURIComponent(`Bonjour Excellence Nettoyage, j'ai envoyé ma demande de devis n° ${quoteRef} (${formData.fullName}, ${formData.phone}) pour : ${selectedService.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs sm:text-sm py-3.5 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Suivre ma demande sur WhatsApp (Optionnel)</span>
                </a>

                <div className="flex items-center justify-center gap-3">
                  <a
                    href="tel:+33640860213"
                    className="text-xs font-bold text-slate-700 hover:text-slate-950 flex items-center gap-1.5 p-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#5faedb]" />
                    <span>06 40 86 02 13</span>
                  </a>
                  <span>•</span>
                  <button
                    onClick={onClose}
                    className="text-xs font-bold text-slate-500 hover:text-slate-900 p-2 cursor-pointer"
                  >
                    Fermer la fenêtre
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Category Quick Select */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                  Type de profil :
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'particuliers', label: 'Particulier', sub: '-50% crédit impôt' },
                    { id: 'professionnels', label: 'Entreprise & Copro', sub: 'Bureaux, locaux' },
                    { id: 'industriel', label: 'Agro & Abattoirs', sub: 'Normes HACCP' },
                    { id: 'extreme', label: 'Nettoyage Extrême', sub: 'Diogène & sinistres' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        const matching = servicesData.find(s => s.category === cat.id);
                        setFormData(prev => ({
                          ...prev,
                          category: cat.id as ServiceCategory,
                          serviceId: matching ? matching.id : prev.serviceId
                        }));
                      }}
                      className={`p-2.5 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                        formData.category === cat.id
                          ? 'border-[#5faedb] bg-[#5faedb]/15 text-slate-950 font-bold shadow-xs'
                          : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium'
                      }`}
                    >
                      <div className="font-bold">{cat.label}</div>
                      <div className="text-[10px] text-slate-500">{cat.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Select */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Prestation souhaitée *
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-[#5faedb] outline-none cursor-pointer"
                >
                  {servicesData
                    .filter(s => s.category === formData.category)
                    .map(svc => (
                      <option key={svc.id} value={svc.id}>
                        {svc.title} {svc.eligibleCreditImpot ? '(-50% impôt)' : ''}
                      </option>
                    ))}
                </select>
              </div>

              {/* Form Grid: Name, Phone, Email, Postal Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Nom et Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Jean Dupont"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5faedb] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Téléphone de contact *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="06 00 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5faedb] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Adresse e-mail (pour recevoir le devis) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="votre-email@exemple.fr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5faedb] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Code postal (Île-de-France) *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={5}
                    placeholder="Ex: 75008, 92100, 78000..."
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5faedb] outline-none"
                  />
                </div>
              </div>

              {formData.postalCode.length >= 2 && (
                <div className={`p-2.5 rounded-xl text-xs flex items-center gap-2 ${
                  coverageCheck.isCovered ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium' : 'bg-amber-50 text-amber-900 border border-amber-200 font-medium'
                }`}>
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{coverageCheck.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Superficie approximative (optionnel)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 80 m²"
                    value={formData.surface}
                    onChange={(e) => setFormData({ ...formData, surface: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5faedb] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Date souhaitée d'intervention
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5faedb] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Précisions / Besoins spécifiques (optionnel)
                </label>
                <textarea
                  rows={2}
                  placeholder="Détails du logement ou des locaux, contraintes horaires, état des lieux..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#5faedb] outline-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-950 hover:bg-[#5faedb] text-white hover:text-slate-950 font-black text-sm sm:text-base py-4 px-6 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 border border-slate-900 hover:border-[#4ea0ce] disabled:opacity-75"
                >
                  <Mail className="w-5 h-5 text-amber-300 group-hover:text-slate-950" />
                  <span>{isSubmitting ? 'Envoi de votre devis en cours...' : 'Envoyer ma Demande de Devis Gratuit'}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 pt-1 text-[11px] text-slate-500 text-center font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Devis 100% gratuit & sans engagement</span>
                </span>
                <span>•</span>
                <span>Réponse sous 2h par email & SMS</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
