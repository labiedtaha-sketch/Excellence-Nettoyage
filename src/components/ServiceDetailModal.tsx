import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  Target, 
  Calculator, 
  Phone, 
  Sparkles,
  Percent,
  AlertCircle
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectQuote: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ 
  service, 
  onClose, 
  onSelectQuote 
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header with Image Banner */}
        <div className="relative h-48 sm:h-56 bg-slate-900 shrink-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              {service.badge && (
                <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow">
                  {service.badge}
                </span>
              )}
              {service.eligibleCreditImpot && (
                <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow flex items-center gap-1">
                  <Percent className="w-3 h-3" />
                  <span>50% Crédit d’impôt</span>
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 text-left">
          
          {/* Price & Summary Box */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Modalité d'intervention</div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-950 font-display">
                {service.startingPrice || 'Sur devis personnalisé'}
              </div>
              {service.priceNote && (
                <div className="text-xs text-slate-600 font-medium">{service.priceNote}</div>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200">
              <Clock className="w-4 h-4 text-[#155a82] shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Durée & Fréquence</div>
                <div>{service.durationEstimate}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
              Présentation de la prestation
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Ce qui est inclus */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Ce qui est inclus dans l'intervention :</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.included.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Matériel & Normes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-blue-600" />
                <span>Matériel & Produits professionnels</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5">
                {service.equipmentUsed.map((eq, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-slate-700" />
                <span>Idéal pour</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {service.idealFor}
              </p>
              {service.standards && (
                <div className="mt-2 pt-2 border-t border-slate-200">
                  <div className="text-[11px] font-bold text-slate-800 mb-1">Normes & Agréments :</div>
                  <div className="flex flex-wrap gap-1">
                    {service.standards.map((st, idx) => (
                      <span key={idx} className="text-[10px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-medium">
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Guarantee pill */}
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
            <span>
              <strong>Engagement Satisfait ou Refait sous 24h :</strong> Nous garantissons la conformité exacte à notre cahier des charges.
            </span>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <a
            href="tel:0184793020"
            className="w-full sm:w-auto text-slate-700 hover:text-slate-900 font-bold text-sm px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-white flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>01 84 79 30 20</span>
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors"
            >
              Fermer
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectQuote(service);
              }}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Demander un devis pour ce service</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
