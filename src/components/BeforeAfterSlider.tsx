import React, { useState } from 'react';
import { Sparkles, ArrowLeftRight, CheckCircle2, Shield } from 'lucide-react';
import { beforeAfterCases } from '../data/servicesData';

export const BeforeAfterSlider: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100

  const currentCase = beforeAfterCases[activeCaseIndex];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Résultats Concrets
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-3 font-display">
            Avant / Après : L’Excellence du Résultat en Images
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Faites glisser le curseur pour apprécier le niveau de finition et la rigueur de nos techniciens.
          </p>
        </div>

        {/* Case selector tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {beforeAfterCases.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCaseIndex === idx
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 max-w-5xl mx-auto">
          <div className="p-6 text-white border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-400 font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentCase.location} • {currentCase.duration}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {currentCase.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                {currentCase.description}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 text-xs text-slate-300">
              <ArrowLeftRight className="w-4 h-4 text-blue-400" />
              <span>Glissez le curseur au centre</span>
            </div>
          </div>

          {/* Image Slider Container */}
          <div 
            className="relative w-full h-80 sm:h-[420px] lg:h-[480px] select-none overflow-hidden cursor-ew-resize group"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const percent = Math.min(Math.max((x / rect.width) * 100, 5), 95);
              setSliderPosition(percent);
            }}
            onTouchMove={(e) => {
              if (e.touches.length > 0) {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.touches[0].clientX - rect.left;
                const percent = Math.min(Math.max((x / rect.width) * 100, 5), 95);
                setSliderPosition(percent);
              }
            }}
          >
            {/* After Image (Background) */}
            <img 
              src={currentCase.afterImage} 
              alt={`Après : ${currentCase.title}`} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-md uppercase tracking-wider flex items-center gap-1.5 z-20">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              <span>Après : {currentCase.afterLabel || 'Impeccable'}</span>
            </div>

            {/* Before Image (Foreground with clip path) */}
            <div 
              className="absolute inset-0 overflow-hidden z-10"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={currentCase.beforeImage} 
                alt={`Avant : ${currentCase.title}`} 
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%', minWidth: '100%' }}
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-md uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>Avant : {currentCase.beforeLabel || 'État initial'}</span>
              </div>
            </div>

            {/* Drag Handle Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-xl border-2 border-blue-600 flex items-center justify-center">
                <ArrowLeftRight className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Bottom Bar Info */}
          <div className="p-4 bg-slate-950/80 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-3 px-6">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-300">Protocole certifié avec contrôle qualité émargé</span>
            </div>
            <div>
              <span>Tous nos chantiers font l'objet d'un rapport photo avant/après</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
