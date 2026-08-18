import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Sparkles, 
  MessageSquarePlus, 
  ShieldCheck, 
  ThumbsUp, 
  X, 
  Send 
} from 'lucide-react';
import { reviewsData } from '../data/reviewsData';
import { ReviewItem, ServiceCategory } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(reviewsData);
  const [activeFilter, setActiveFilter] = useState<'all' | ServiceCategory>('all');
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);

  // New review form state
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newCategory, setNewCategory] = useState<ServiceCategory>('particuliers');
  const [newServiceName, setNewServiceName] = useState('Ménage régulier');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');

  const filteredReviews = activeFilter === 'all' 
    ? reviews 
    : reviews.filter(r => r.category === activeFilter);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const initialLetters = newAuthor
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    const createdReview: ReviewItem = {
      id: `user-rev-${Date.now()}`,
      author: newAuthor,
      location: newLocation || 'Île-de-France',
      category: newCategory,
      serviceName: newServiceName,
      rating: newRating,
      date: 'À l’instant',
      comment: newComment,
      verified: true,
      avatarText: initialLetters || 'CL'
    };

    setReviews([createdReview, ...reviews]);
    setShowAddReviewModal(false);
    setNewAuthor('');
    setNewLocation('');
    setNewComment('');
  };

  return (
    <section id="avis" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Rating Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-3.5 py-1 rounded-full border border-amber-200">
            Avis Vérifiés & Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-3 font-display">
            Ce que disent nos clients en Île-de-France
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Découvrez les retours authentiques de propriétaires, gestionnaires de bureaux, syndics et industriels.
          </p>

          {/* Google Score Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-slate-900 font-display">4.9</span>
              <div className="flex text-amber-400 text-lg">
                {'★★★★★'}
              </div>
            </div>
            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
            <div className="text-xs text-slate-600 text-left">
              <span className="font-bold text-slate-900 block">Excellente réputation Google</span>
              <span>Basé sur plus de 340 avis clients vérifiés</span>
            </div>
            <button
              onClick={() => setShowAddReviewModal(true)}
              className="ml-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow-sm flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Laisser un avis</span>
            </button>
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Tous les avis' },
            { id: 'particuliers', label: 'Particuliers' },
            { id: 'professionnels', label: 'Bureaux & Copropriétés' },
            { id: 'industriel', label: 'Abattoirs HACCP' },
            { id: 'extreme', label: 'Nettoyage Extrême' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between"
            >
              <div>
                {/* Header author + rating */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-slate-900 text-white font-bold text-xs flex items-center justify-center shadow-inner">
                      {rev.avatarText}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{rev.author}</div>
                      <div className="text-[11px] text-slate-500">{rev.location}</div>
                    </div>
                  </div>

                  <div className="flex text-amber-400 text-xs">
                    {'★'.repeat(rev.rating)}
                  </div>
                </div>

                {/* Service Tag */}
                <div className="inline-block bg-blue-50 text-blue-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-lg border border-blue-100 mb-3">
                  {rev.serviceName}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Bottom verified badge */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Avis vérifié Google</span>
                </span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Add Review Modal */}
      {showAddReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-left">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 font-display">Partager votre retour d'expérience</h3>
              <button onClick={() => setShowAddReviewModal(false)} className="p-1 rounded-full text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Votre Nom & Prénom *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Sophie Martin"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Ville / Département *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Paris 15e (75)"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Catégorie de prestation</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as ServiceCategory)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="particuliers">Particuliers (Ménage, vitres)</option>
                    <option value="professionnels">Bureaux & Copropriétés</option>
                    <option value="industriel">Abattoirs & HACCP</option>
                    <option value="extreme">Nettoyage Extrême</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Note globale</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      className={`text-2xl ${star <= newRating ? 'text-amber-400' : 'text-slate-300'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Votre témoignage détaillé *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Qualité du nettoyage, ponctualité, politesse de l'équipe..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddReviewModal(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publier mon avis</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
