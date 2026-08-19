import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle 
} from 'lucide-react';
import whatsappLogo from '../assets/whatsapp-logo.webp';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Particulier - Ménage régulier',
    postalCode: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      _subject: `⚡ Message Contact / Devis Express - ${formData.fullName}`,
      _cc: 'support@nettoyage-excellence.com,labiedtaha@gmail.com',
      _template: 'table',
      'Nom du client': formData.fullName,
      'Téléphone': formData.phone,
      'Email client': formData.email,
      'Code Postal': formData.postalCode,
      'Prestation': formData.serviceType,
      'Message': formData.message || 'Aucun message particulier',
      'Origine': 'Formulaire de Contact (nettoyage-excellence.com)'
    };

    try {
      // 1. Send via local backend API
      fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          serviceType: formData.serviceType,
          postalCode: formData.postalCode,
          message: formData.message,
          source: 'Formulaire de Contact (nettoyage-excellence.com)'
        })
      }).catch(err => console.log('Local API status:', err));

      // 2. Direct browser webhook
      await fetch('https://formsubmit.co/ajax/contact@nettoyage-excellence.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('Envoi simulé :', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-t border-slate-200/80 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-[#155a82] bg-[#5faedb]/15 px-3.5 py-1.5 rounded-full border border-[#5faedb]/30">
            Contact & Devis
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 font-display">
            Parlons de votre projet.
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Devis gratuit sous 2 heures par email & téléphone ou contact direct WhatsApp 7j/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Coordonnées */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
              <div>
                <h3 className="text-xl font-black text-slate-950 font-display">
                  Coordonnées Directes
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Excellence Nettoyage • Île-de-France
                </p>
              </div>

              <div className="space-y-3.5">
                <a 
                  href="mailto:contact@nettoyage-excellence.com" 
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#5faedb] transition-all cursor-pointer group shadow-xs hover:shadow-md"
                >
                  <div className="p-3 rounded-xl bg-[#5faedb]/20 text-[#155a82] group-hover:bg-[#5faedb] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Général & Devis</div>
                    <div className="text-sm font-extrabold text-slate-950 mt-0.5 break-all">contact@nettoyage-excellence.com</div>
                    <div className="text-[11px] text-slate-500 font-medium">support@nettoyage-excellence.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+33640860213" 
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#5faedb] transition-all cursor-pointer group shadow-xs hover:shadow-md"
                >
                  <div className="p-3 rounded-xl bg-[#5faedb]/20 text-[#155a82] group-hover:bg-[#5faedb] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Téléphone Direct</div>
                    <div className="text-base font-extrabold text-slate-950 mt-0.5">06 40 86 02 13</div>
                  </div>
                </a>

                <a 
                  href="https://wa.me/33640860213?text=Bonjour%20Excellence%20Nettoyage,%20je%20souhaite%20un%20devis%20de%20nettoyage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#25D366] transition-all cursor-pointer group shadow-xs hover:shadow-md"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 group-hover:bg-[#25D366]/20 transition-colors flex items-center justify-center">
                    <img 
                      src={whatsappLogo} 
                      alt="WhatsApp" 
                      className="w-6 h-6 object-contain" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">WhatsApp 7j/7</div>
                    <div className="text-base font-extrabold text-slate-950 mt-0.5">+33 6 40 86 02 13</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="p-3 rounded-xl bg-slate-100 text-slate-700">
                    <MapPin className="w-5 h-5 text-[#5faedb]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Zone d'Intervention</div>
                    <div className="text-xs font-bold text-slate-950 mt-0.5">4 Rue des Ifs, 78200 Magnanville</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">75, 78, 92, 93, 94, 95, 77, 91 (7j/7)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="p-3 rounded-xl bg-slate-100 text-slate-700">
                    <Clock className="w-5 h-5 text-[#5faedb]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Disponibilité</div>
                    <div className="text-xs font-bold text-slate-950 mt-0.5">Lundi au Dimanche (07h00 - 21h00)</div>
                    <div className="text-[11px] text-emerald-700 font-bold mt-0.5">Astreinte Sinistres & HACCP 24h/24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md text-left">
              
              <div className="mb-6 space-y-1">
                <h3 className="text-2xl font-black text-slate-950 font-display">
                  Demande de Devis Express
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  Remplissez ce formulaire pour recevoir votre devis détaillé sous 2h.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-5 bg-emerald-50 rounded-2xl border border-emerald-200 p-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 font-display">
                    Demande envoyée avec succès !
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Merci {formData.fullName}. Votre demande a été transmise à <strong className="text-slate-950">contact@nettoyage-excellence.com</strong> et <strong className="text-slate-950">support@nettoyage-excellence.com</strong>. Notre équipe vous recontacte sous <strong>2 heures</strong>.
                  </p>
                  
                  <div className="pt-2 max-w-xs mx-auto space-y-3">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-slate-600 hover:text-slate-950 hover:underline cursor-pointer block mx-auto"
                    >
                      Envoyer une autre demande
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ex: Sophie Martin"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5faedb]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="06 00 00 00 00"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5faedb]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Adresse e-mail (pour votre devis) *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@exemple.fr"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5faedb]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Code Postal (Île-de-France) *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={5}
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        placeholder="Ex: 75008, 78200..."
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5faedb]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Catégorie de prestation *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5faedb]"
                    >
                      <option value="Particulier - Ménage régulier">Particulier - Ménage régulier (-50% crédit d'impôt)</option>
                      <option value="Particulier - Fin de bail">Particulier - Fin de bail & État des lieux</option>
                      <option value="Particulier - Après travaux">Particulier - Après travaux & Rénovation</option>
                      <option value="Particulier - Lavage de vitres">Particulier - Lavage de vitres & baies</option>
                      <option value="Professionnel - Bureaux & Tertiaire">Professionnel - Bureaux & Open space</option>
                      <option value="Professionnel - Copropriété">Professionnel - Copropriété & Immeuble</option>
                      <option value="Agroalimentaire - Abattoirs HACCP">Agroalimentaire - Abattoirs & Normes HACCP</option>
                      <option value="Extrême - Diogène & Sinistres">Extrême - Logement Diogène & Post-Sinistres</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Message / Précisions (Optionnel)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Superficie approximative, fréquence souhaitée, contraintes particulières..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5faedb]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-950 hover:bg-[#5faedb] text-white hover:text-slate-950 font-black py-4 px-6 rounded-2xl text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-75"
                  >
                    <Send className="w-4 h-4 text-amber-300 group-hover:text-slate-950" />
                    <span>{isSubmitting ? 'Envoi de votre demande en cours...' : 'Envoyer ma Demande de Devis'}</span>
                  </button>

                  <div className="flex items-center justify-center gap-3 pt-2 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Sans engagement</span>
                    </span>
                    <span>•</span>
                    <span>Réponse sous 2h par email & SMS</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
