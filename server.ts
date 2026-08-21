import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON parsing middleware
  app.use(express.json());

  // ----------------------------------------------------
  // API ROUTE: Send Quote / Contact Request via Hostinger SMTP
  // ----------------------------------------------------
  app.post('/api/send-quote', async (req, res) => {
    try {
      const {
        fullName,
        email,
        phone,
        serviceType,
        postalCode,
        surface,
        frequency,
        priceEstimate,
        message,
        source
      } = req.body;

      if (!fullName || !phone) {
        return res.status(400).json({ error: 'Le nom et le numéro de téléphone sont requis.' });
      }

      const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
      const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
      const smtpUser = process.env.SMTP_USER || 'contact@nettoyage-excellence.com';
      const smtpPass = process.env.SMTP_PASS;
      const recipientEmails = process.env.RECIPIENT_EMAIL 
        ? process.env.RECIPIENT_EMAIL.split(',').map(e => e.trim()) 
        : ['contact@nettoyage-excellence.com', 'support@nettoyage-excellence.com', 'labiedtaha@gmail.com'];

      // 1. Try Hostinger SMTP if password provided
      if (smtpPass) {
        try {
          const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
              user: smtpUser,
              pass: smtpPass
            },
            tls: {
              rejectUnauthorized: false
            }
          });

          // Prepare Email HTML
          const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px; border-radius: 16px; border: 1px solid #e2e8f0;">
              <div style="background-color: #5faedb; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
                <h2 style="color: #0f172a; margin: 0; font-size: 22px;">Nouvelle Demande de Devis — Excellence Nettoyage</h2>
                <p style="color: #0f172a; margin: 5px 0 0 0; font-size: 13px; font-weight: bold;">Origine : ${source || 'Site Web nettoyage-excellence.com'}</p>
              </div>

              <div style="background-color: #ffffff; padding: 24px; border-radius: 12px; border: 1px solid #cbd5e1;">
                <h3 style="color: #0f172a; margin-top: 0; font-size: 16px; border-bottom: 2px solid #5faedb; padding-bottom: 8px;">Coordonnées du Client</h3>
                <p style="margin: 8px 0;"><strong>Nom & Prénom :</strong> ${fullName}</p>
                <p style="margin: 8px 0;"><strong>Téléphone :</strong> <a href="tel:${phone}" style="color: #0284c7; text-decoration: none; font-weight: bold;">${phone}</a></p>
                ${email ? `<p style="margin: 8px 0;"><strong>E-mail :</strong> <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></p>` : ''}
                <p style="margin: 8px 0;"><strong>Code postal (IDF) :</strong> ${postalCode || 'Non spécifié'}</p>

                <h3 style="color: #0f172a; margin-top: 24px; font-size: 16px; border-bottom: 2px solid #5faedb; padding-bottom: 8px;">Détails de la Prestation</h3>
                <p style="margin: 8px 0;"><strong>Type de service :</strong> ${serviceType || 'Non précisé'}</p>
                ${surface ? `<p style="margin: 8px 0;"><strong>Surface estimée :</strong> ${surface} m²</p>` : ''}
                ${frequency ? `<p style="margin: 8px 0;"><strong>Fréquence :</strong> ${frequency}</p>` : ''}
                ${priceEstimate ? `<p style="margin: 8px 0;"><strong>Estimation générée :</strong> <span style="color: #059669; font-weight: bold;">${priceEstimate}</span></p>` : ''}
                ${message ? `<p style="margin: 12px 0 0 0; background-color: #f1f5f9; padding: 12px; border-radius: 8px; font-style: italic;"><strong>Message du client :</strong><br/>${message}</p>` : ''}
              </div>

              <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #64748b;">
                <p>Cet email a été envoyé automatiquement depuis votre site vitrine <strong>nettoyage-excellence.com</strong>.</p>
              </div>
            </div>
          `;

          await transporter.sendMail({
            from: `"Excellence Nettoyage" <${smtpUser}>`,
            to: recipientEmails,
            replyTo: email || undefined,
            subject: `⚡ Nouvelle demande de devis : ${fullName} (${serviceType || 'Nettoyage'})`,
            text: `Demande de devis de ${fullName} (${phone}) pour ${serviceType || 'Nettoyage'}. Code Postal: ${postalCode || 'IDF'}.`,
            html: htmlContent
          });

          return res.json({
            success: true,
            status: 'sent_smtp',
            message: 'Devis envoyé avec succès via Hostinger SMTP !'
          });
        } catch (smtpErr) {
          console.warn('SMTP Hostinger a échoué, bascule sur la passerelle directe :', smtpErr);
        }
      }

      // 2. Direct Web Delivery Gateway (FormSubmit to contact@ & support@)
      const directResponse = await fetch('https://formsubmit.co/ajax/contact@nettoyage-excellence.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `⚡ Nouveau Devis Web: ${fullName} (${serviceType || 'Nettoyage'})`,
          _cc: 'support@nettoyage-excellence.com',
          _template: 'table',
          'Nom du client': fullName,
          'Téléphone': phone,
          'Email': email || 'Non renseigné',
          'Code Postal': postalCode || 'IDF',
          'Prestation demandée': serviceType || 'Nettoyage',
          'Surface': surface || 'Non précisée',
          'Message / Précisions': message || 'Aucun message particulier',
          'Source': source || 'nettoyage-excellence.com'
        })
      });

      const directResult = await directResponse.json();
      console.log('📬 Résultat envoi email direct :', directResult);

      return res.json({
        success: true,
        status: 'sent_direct',
        message: 'Devis transmis avec succès par email !',
        details: directResult
      });
    } catch (error: any) {
      console.error('❌ Erreur envoi email Hostinger :', error);
      return res.status(500).json({
        error: 'Erreur lors de l’envoi de l’e-mail.',
        details: error?.message || 'Erreur SMTP inconnue'
      });
    }
  });

  // Static assets serving for uploaded images
  app.use('/assets', express.static(path.join(process.cwd(), 'public/assets')));
  app.use('/assets', express.static(path.join(process.cwd(), 'public')));
  app.use('/assets', express.static(path.join(process.cwd(), 'assets')));
  app.use(express.static(path.join(process.cwd(), 'public')));
  app.use(express.static(path.join(process.cwd(), 'public/assets')));

  // ----------------------------------------------------
  // Vite Middleware / Static Files Configuration
  // ----------------------------------------------------
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Serveur Excellence Nettoyage actif sur http://0.0.0.0:${PORT}`);
  });
}

startServer();
