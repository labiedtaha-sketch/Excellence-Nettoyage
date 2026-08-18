import React from 'react';
import { X, ShieldCheck, FileText, Lock, MessageCircle } from 'lucide-react';

interface LegalModalsProps {
  type: 'mentions' | 'cgv' | 'rgpd' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8 max-h-[88vh] flex flex-col text-left">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#5faedb] text-slate-950 flex items-center justify-between shrink-0 border-b border-[#4ea0ce]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-xs">
              {type === 'mentions' && <FileText className="w-5 h-5 text-[#5faedb]" />}
              {type === 'cgv' && <ShieldCheck className="w-5 h-5 text-[#5faedb]" />}
              {type === 'rgpd' && <Lock className="w-5 h-5 text-[#5faedb]" />}
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black font-display text-slate-950">
                {type === 'mentions' && 'Mentions Légales — Excellence Nettoyage'}
                {type === 'cgv' && 'Conditions Générales de Vente (CGV) — Excellence Nettoyage'}
                {type === 'rgpd' && 'Politique de Confidentialité — Excellence Nettoyage'}
              </h2>
              <p className="text-xs text-slate-900 font-medium">Excellence Nettoyage • SIRET 911 286 805 00039</p>
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

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          {/* ---------------- 1. MENTIONS LÉGALES ---------------- */}
          {type === 'mentions' && (
            <>
              <div>
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">1. Éditeur du site</h3>
                <p>
                  Le présent site est édité par :<br />
                  <strong>Excellence Nettoyage</strong><br />
                  <strong>Forme juridique :</strong> Micro-entreprise (Entreprise Individuelle)<br />
                  <strong>Numéro SIRET :</strong> 911 286 805 00039<br />
                  <strong>Adresse postale :</strong> 4 RUE DES IFS, 78200 MAGNANVILLE<br />
                  <strong>Adresse e-mail :</strong> <a href="mailto:contact@nettoyage-excellence.com" className="text-[#155a82] font-semibold hover:underline">contact@nettoyage-excellence.com</a><br />
                  <strong>Téléphone :</strong> <a href="tel:+33640860213" className="text-[#155a82] font-semibold hover:underline">+33 6 40 86 02 13</a><br /><br />
                  <strong>Directeur de la publication :</strong> Ghazzoul Anouar (Excellence Voyage)
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">2. Hébergement du site</h3>
                <p>
                  Le site est hébergé sur les infrastructures sécurisées de <strong>Google Cloud Platform (GCP)</strong> Europe-West1.<br />
                  Toutes les données sont stockées au sein de l'Union Européenne conformément aux réglementations de sécurité ISO/IEC 27001.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">3. Propriété intellectuelle</h3>
                <p>
                  L'ensemble des contenus présents sur le site Excellence Nettoyage (textes, logo, images, photographies, graphismes, icônes, mise en page) est protégé par le droit d'auteur et le droit de la propriété intellectuelle et reste la propriété exclusive d'Excellence Nettoyage, sauf mention contraire.<br /><br />
                  Toute reproduction, représentation, modification, publication, adaptation totale ou partielle de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable d'Excellence Nettoyage. Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une contrefaçon et pourra faire l'objet de poursuites.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">4. Données personnelles (RGPD)</h3>
                <p>
                  Dans le cadre de son activité, Excellence Nettoyage peut être amenée à collecter des données personnelles via le formulaire de contact et de demande de devis du site (nom, prénom, adresse e-mail, numéro de téléphone, adresse d'intervention).<br /><br />
                  Ces données sont collectées et traitées dans le respect du Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et de la loi Informatique et Libertés.<br />
                  • <strong>Finalité :</strong> traitement des demandes de devis et de contact, gestion de la relation client, prise de rendez-vous.<br />
                  • <strong>Destinataires :</strong> ces données sont uniquement destinées à Excellence Nettoyage et ne sont ni vendues ni cédées à des tiers, sauf obligation légale.<br />
                  • <strong>Durée de conservation :</strong> les données sont conservées pendant la durée nécessaire à la gestion de la relation commerciale, puis archivées ou supprimées conformément aux obligations légales.<br />
                  • <strong>Droits de l'utilisateur :</strong> conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Vous pouvez exercer ces droits en écrivant à : <a href="mailto:contact@nettoyage-excellence.com" className="text-[#155a82] font-semibold hover:underline">contact@nettoyage-excellence.com</a>.<br />
                  Vous disposez également du droit d'introduire une réclamation auprès de la <strong>CNIL</strong> (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#155a82] hover:underline">www.cnil.fr</a>).
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">5. Cookies</h3>
                <p>
                  Le site Excellence Nettoyage peut utiliser des cookies afin d'améliorer l'expérience de navigation et, le cas échéant, réaliser des statistiques de fréquentation.<br /><br />
                  En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies. Vous pouvez à tout moment paramétrer ou désactiver les cookies via les réglages de votre navigateur.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">6. Limitation de responsabilité</h3>
                <p>
                  Excellence Nettoyage s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, inexactitudes ou carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.<br /><br />
                  Excellence Nettoyage ne saurait être tenue responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de données, ou la présence de virus.<br /><br />
                  Les tarifs, devis et disponibilités affichés sur le site le sont à titre indicatif et sont susceptibles d'être ajustés après étude du besoin réel du client.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">7. Liens hypertextes</h3>
                <p>
                  Le site peut contenir des liens vers d'autres sites. Excellence Nettoyage n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">8. Droit applicable et juridiction compétente</h3>
                <p>
                  Les présentes mentions légales sont soumises au droit français. En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">9. Contact</h3>
                <p>
                  Pour toute question relative aux présentes mentions légales, vous pouvez contacter Excellence Nettoyage :<br />
                  • <strong>Par e-mail :</strong> <a href="mailto:contact@nettoyage-excellence.com" className="text-[#155a82] font-semibold hover:underline">contact@nettoyage-excellence.com</a><br />
                  • <strong>Par téléphone :</strong> <a href="tel:+33640860213" className="text-[#155a82] font-semibold hover:underline">+33 6 40 86 02 13</a><br /><br />
                  <span className="text-slate-500 italic text-xs">Dernière mise à jour : 17/08/2026</span>
                </p>
              </div>
            </>
          )}

          {/* ---------------- 2. CGV ---------------- */}
          {type === 'cgv' && (
            <>
              <div>
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">Article 1 — Objet</h3>
                <p>
                  Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Excellence Nettoyage, micro-entreprise (Entreprise Individuelle), SIRET 911 286 805 00039, dont le siège est situé 4 rue des Ifs, 78200 Magnanville (ci-après « le Prestataire »), et toute personne physique ou morale (ci-après « le Client ») souhaitant bénéficier de ses prestations de nettoyage et de ménage.<br /><br />
                  Toute commande de prestation implique l'acceptation sans réserve des présentes CGV par le Client.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">Article 2 — Prestations proposées</h3>
                <p>
                  Le Prestataire propose notamment :<br />
                  • Ménage régulier et ponctuel à domicile<br />
                  • Nettoyage de fin de bail / état des lieux<br />
                  • Nettoyage après travaux ou chantier<br />
                  • Nettoyage de vitres<br />
                  • Nettoyage de bureaux, commerces et copropriétés<br />
                  • Nettoyage industriel et sanitaire (abattoirs, environnements agroalimentaires), dans le respect des normes HACCP en vigueur<br />
                  • Nettoyage extrême (sinistres, insalubrité, décontamination) selon protocole adapté<br /><br />
                  Le détail de chaque prestation, son contenu et sa durée estimée sont précisés dans le devis remis au Client.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">Article 3 — Devis et commande</h3>
                <p>
                  Toute prestation fait l'objet d'un devis gratuit, établi sur la base des informations communiquées par le Client (surface, nature du lieu, fréquence, état constaté ou photos transmises).<br /><br />
                  Le devis est valable 30 jours à compter de sa date d'émission. La commande est réputée ferme et définitive à réception par le Prestataire de l'acceptation du devis par le Client (signature, réponse écrite ou paiement de l'acompte demandé).<br /><br />
                  Pour les prestations de nettoyage extrême ou industriel, un état des lieux préalable (sur place ou par photos/vidéos) peut être exigé avant l'établissement du devis définitif, en raison de la variabilité des situations rencontrées.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">Article 4 — Prix et modalités de paiement</h3>
                <p>
                  Les prix sont exprimés en euros. TVA non applicable, article 293 B du Code général des impôts. Ils tiennent compte de la nature, de la surface et de la fréquence de la prestation.<br /><br />
                  Si le chiffre d'affaires venait à dépasser le seuil de la franchise en base de TVA, cette mention devra être mise à jour et la TVA appliquée sur les prestations concernées.<br /><br />
                  <strong>Modalités de paiement :</strong> tous moyens de paiement usuels sont acceptés (virement, carte bancaire, espèces, chèque, prélèvement SEPA).<br /><br />
                  Pour toute prestation, un acompte de 40 % du montant total est demandé à la commande. Le solde, soit 60 % du montant, est dû dans un délai maximum de 15 jours après la réalisation de la prestation.<br /><br />
                  Pour les prestations récurrentes, le paiement s'effectue en début de mois, pour le mois en cours.<br /><br />
                  Tout retard de paiement pourra donner lieu à l'application de pénalités de retard au taux légal en vigueur (trois fois le taux d'intérêt légal), ainsi qu'à une indemnité forfaitaire de 40 € pour frais de recouvrement (article L441-10 du Code de commerce), pour les prestations à destination des professionnels.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">Article 5 — Exécution de la prestation</h3>
                <p>
                  Le Prestataire s'engage à exécuter les prestations avec sérieux, minutie et dans le respect des délais convenus, à l'aide d'un personnel formé et de produits adaptés.<br /><br />
                  Le Client s'engage à :<br />
                  • Permettre l'accès au lieu d'intervention à l'horaire convenu<br />
                  • Signaler tout élément particulier (zones fragiles, matériaux sensibles, animaux, accès spécifiques, risques sanitaires connus)<br />
                  • Mettre à disposition les points d'eau et d'électricité nécessaires, sauf accord contraire<br /><br />
                  En cas d'impossibilité d'accès au lieu à l'heure convenue du fait du Client, une nouvelle intervention pourra être facturée.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">Article 6 — Annulation et report</h3>
                <p>
                  Toute annulation ou report doit être signalé au moins 48 heures avant la date prévue de l'intervention.<br /><br />
                  En deçà de ce délai, le Prestataire se réserve le droit de facturer 50 % du montant de la prestation, sauf cas de force majeure dûment justifié.<br /><br />
                  Pour les prestations récurrentes, le Client peut suspendre ou résilier l'abonnement en respectant un préavis de 15 jours, notifié par écrit.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">Article 7 — Droit de rétractation</h3>
                <p>
                  Conformément aux articles L221-18 et suivants du Code de la consommation, le Client consommateur ayant conclu un contrat hors établissement (démarchage à domicile ou à distance) dispose d'un délai de rétractation de 14 jours à compter de la conclusion du contrat.<br /><br />
                  Si le Client souhaite que la prestation débute avant l'expiration de ce délai, il doit en faire la demande expresse ; il perd alors son droit de rétractation une fois la prestation entièrement exécutée, et devra s'acquitter du montant correspondant au service déjà fourni en cas de rétractation en cours d'exécution.<br /><br />
                  Cette clause s'applique dès lors que le contrat est conclu à distance (via le site) ou hors établissement (démarchage à domicile).
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">Article 8 — Réclamations et garanties</h3>
                <p>
                  Toute réclamation relative à la qualité de la prestation doit être formulée par écrit dans un délai de 48 heures suivant l'intervention, accompagnée si possible de photos.<br /><br />
                  Le Prestataire s'engage, en cas de réclamation justifiée, à proposer une nouvelle intervention correctrice gratuite dans les meilleurs délais ou, à défaut d'accord, un avoir partiel.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">Article 9 — Assurance et responsabilité</h3>
                <p>
                  Le Prestataire dispose d'une assurance responsabilité civile professionnelle couvrant les dommages pouvant survenir dans le cadre de l'exécution des prestations. Les références de la police d'assurance peuvent être communiquées au Client sur simple demande.<br /><br />
                  Tout dommage constaté doit être signalé sans délai, photos à l'appui, afin de permettre l'ouverture d'un dossier auprès de l'assurance.<br /><br />
                  Le Prestataire ne pourra être tenu responsable des dommages résultant de l'état antérieur des surfaces, matériaux fragiles non signalés par le Client, ou de vices cachés du bien.<br /><br />
                  Pour les prestations de nettoyage extrême ou de décontamination, le Prestataire intervient selon les règles de l'art et les équipements de protection appropriés, sans garantie de résultat sur les éléments dont la restauration dépend de facteurs extérieurs (nature du sinistre, ancienneté, matériaux affectés).
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">Article 10 — Confidentialité et données personnelles</h3>
                <p>
                  Le Prestataire s'engage à respecter la confidentialité des lieux et informations dont il a connaissance dans le cadre de ses prestations, notamment pour les interventions à caractère sensible (nettoyage extrême, insalubrité).<br /><br />
                  Le traitement des données personnelles du Client est détaillé dans la Politique de confidentialité du site, disponible ci-dessous ou sur simple demande.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">Article 11 — Force majeure</h3>
                <p>
                  Le Prestataire ne pourra être tenu responsable de tout retard ou inexécution consécutif à la survenance d'un cas de force majeure habituellement reconnu par la jurisprudence française.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">Article 12 — Droit applicable et litiges</h3>
                <p>
                  Les présentes CGV sont soumises au droit français.<br /><br />
                  En cas de litige, le Client est invité à contacter le Prestataire afin de rechercher une solution amiable. À défaut, conformément à l'article L616-1 du Code de la consommation, le Client consommateur peut recourir gratuitement à un médiateur de la consommation agréé (le Prestataire communiquera les coordonnées du médiateur auquel il adhère).<br /><br />
                  À défaut de résolution amiable, les tribunaux français seront seuls compétents.<br /><br />
                  <span className="text-slate-500 italic text-xs">Dernière mise à jour : 17 août 2026</span>
                </p>
              </div>
            </>
          )}

          {/* ---------------- 3. POLITIQUE DE CONFIDENTIALITÉ (RGPD) ---------------- */}
          {type === 'rgpd' && (
            <>
              <div>
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">1. Qui sommes-nous ?</h3>
                <p>
                  Le site <strong>nettoyage-excellence.com</strong> est édité par <strong>Excellence Nettoyage</strong>, micro-entreprise (Entreprise Individuelle), SIRET 911 286 805 00039, dont le siège est situé 4 rue des Ifs, 78200 Magnanville.<br /><br />
                  Pour toute question relative à vos données personnelles, vous pouvez nous contacter à : <a href="mailto:contact@nettoyage-excellence.com" className="text-[#155a82] font-semibold hover:underline">contact@nettoyage-excellence.com</a>.<br /><br />
                  Excellence Nettoyage est responsable du traitement des données collectées via ce site, au sens du Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et de la loi Informatique et Libertés du 6 janvier 1978 modifiée.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">2. Quelles données collectons-nous ?</h3>
                <p className="mb-3">
                  Selon vos interactions avec le site, nous pouvons collecter :
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-slate-100 text-slate-950 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-2.5">Donnée</th>
                        <th className="p-2.5">Collectée via</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                      <tr>
                        <td className="p-2.5 font-medium">Nom, prénom</td>
                        <td className="p-2.5">Formulaire de contact / devis</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Adresse e-mail</td>
                        <td className="p-2.5">Formulaire de contact / devis</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Numéro de téléphone</td>
                        <td className="p-2.5">Formulaire de contact / devis</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Adresse d'intervention</td>
                        <td className="p-2.5">Formulaire de devis</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Type de prestation souhaitée, surface, message</td>
                        <td className="p-2.5">Formulaire de devis</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Photos éventuelles transmises (ex. devis nettoyage extrême)</td>
                        <td className="p-2.5">Formulaire / e-mail</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Données de navigation (adresse IP, pages consultées, type d'appareil)</td>
                        <td className="p-2.5">Cookies et outils de mesure d'audience</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2.5 text-xs text-slate-600">
                  Nous ne collectons aucune donnée bancaire via le site ; les paiements sont effectués directement auprès du Prestataire (virement, carte bancaire, espèces, chèque ou prélèvement SEPA) et ne transitent pas par un prestataire de paiement en ligne tiers.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">3. Pourquoi collectons-nous ces données ?</h3>
                <p>
                  Vos données sont utilisées pour les finalités suivantes :<br />
                  • Répondre à vos demandes de devis et de contact<br />
                  • Établir et gérer les prestations commandées (planification, facturation, suivi client)<br />
                  • Assurer le suivi qualité et le traitement des réclamations<br />
                  • Vous recontacter dans le cadre de la relation commerciale (rappels de rendez-vous, propositions de renouvellement)<br />
                  • Établir des statistiques de fréquentation du site (via cookies, données anonymisées ou pseudonymisées)<br />
                  • Respecter nos obligations légales et comptables<br /><br />
                  <strong>Base légale du traitement :</strong> exécution précontractuelle et contractuelle (devis, prestation), intérêt légitime (suivi client, amélioration du service) et, pour les cookies non essentiels, votre consentement.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">4. Qui a accès à vos données ?</h3>
                <p>
                  Vos données sont destinées exclusivement à Excellence Nettoyage et à son personnel habilité (équipe administrative, personnel intervenant sur le lieu de la prestation, dans la limite de ce qui est nécessaire à l'exécution du service).<br /><br />
                  Elles peuvent également être transmises à des prestataires techniques qui nous accompagnent (hébergeur du site, outil d'envoi de devis, éventuel logiciel de facturation), dans le strict cadre de l'exécution de leur mission et sous engagement de confidentialité.<br /><br />
                  Vos données ne sont ni vendues, ni louées, ni cédées à des tiers à des fins commerciales.<br /><br />
                  Elles peuvent être communiquées aux autorités compétentes si la loi l'exige (obligations légales, réquisition judiciaire).
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">5. Combien de temps conservons-nous vos données ?</h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 mt-2">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-slate-100 text-slate-950 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-2.5">Type de donnée</th>
                        <th className="p-2.5">Durée de conservation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                      <tr>
                        <td className="p-2.5 font-medium">Demandes de devis non transformées en contrat</td>
                        <td className="p-2.5">3 ans à compter du dernier contact</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Données clients (contrat en cours)</td>
                        <td className="p-2.5">Durée de la relation contractuelle + 5 ans à des fins comptables et de preuve</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Données de navigation / cookies</td>
                        <td className="p-2.5">13 mois maximum</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Photos transmises pour un devis (nettoyage extrême, etc.)</td>
                        <td className="p-2.5">Supprimées à l'issue du traitement du dossier, sauf accord contraire du Client</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  À l'issue de ces durées, vos données sont supprimées ou anonymisées.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">6. Quels sont vos droits ?</h3>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :<br />
                  • <strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en obtenir une copie<br />
                  • <strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes<br />
                  • <strong>Droit à l'effacement :</strong> demander la suppression de vos données, dans les limites prévues par la loi<br />
                  • <strong>Droit à la limitation du traitement</strong><br />
                  • <strong>Droit d'opposition</strong>, notamment à la prospection commerciale<br />
                  • <strong>Droit à la portabilité</strong> de vos données<br /><br />
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:contact@nettoyage-excellence.com" className="text-[#155a82] font-semibold hover:underline">contact@nettoyage-excellence.com</a>, en joignant une preuve de votre identité si nécessaire.<br /><br />
                  Vous disposez également du droit d'introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#155a82] hover:underline">www.cnil.fr</a>.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">7. Cookies</h3>
                <p>
                  Le site utilise des cookies pour :<br />
                  • <strong>Cookies strictement nécessaires :</strong> bon fonctionnement du site (ex. mémorisation du formulaire en cours)<br />
                  • <strong>Cookies de mesure d'audience :</strong> comprendre la fréquentation du site (ex. Google Analytics ou équivalent), le cas échéant sous forme anonymisée<br />
                  • <strong>Cookies tiers éventuels :</strong> réseaux sociaux, outils de prise de rendez-vous en ligne<br /><br />
                  Lors de votre première visite, un bandeau vous permet d'accepter, de refuser ou de paramétrer les cookies non essentiels. Vous pouvez à tout moment modifier vos préférences via les réglages de votre navigateur.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">8. Sécurité des données</h3>
                <p>
                  Excellence Nettoyage met en œuvre les mesures techniques et organisationnelles raisonnables pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation (accès restreint, hébergement sécurisé, sauvegardes).
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">9. Modification de la présente politique</h3>
                <p>
                  Cette politique de confidentialité peut être mise à jour à tout moment, notamment pour se conformer à toute évolution réglementaire, technique ou organisationnelle. La date de dernière mise à jour figure en bas de page.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5 font-display">10. Contact</h3>
                <p>
                  Pour toute question relative à cette politique ou à vos données personnelles :<br />
                  • <strong>E-mail :</strong> <a href="mailto:contact@nettoyage-excellence.com" className="text-[#155a82] font-semibold hover:underline">contact@nettoyage-excellence.com</a><br />
                  • <strong>Adresse postale :</strong> 4 rue des Ifs, 78200 Magnanville<br /><br />
                  <span className="text-slate-500 italic text-xs">Dernière mise à jour : 17 août 2026</span>
                </p>
              </div>
            </>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-950 text-white font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-xl hover:bg-[#5faedb] hover:text-slate-950 transition-all cursor-pointer shadow-sm"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
