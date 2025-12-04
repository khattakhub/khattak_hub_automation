# Deployment & Setup Guide

## 1. Website Deployment
This project is built with React + Vite.

### Build for Production
```bash
npm run build
```
This will create a `dist` folder. You can upload this folder to any static hosting provider like:
- Vercel
- Netlify
- GitHub Pages
- Hostinger (File Manager)

### Local Development
```bash
npm install
npm run dev
```

## 2. n8n Workflow Setup
We have provided 3 sample workflows in the `public/workflows` folder:
1. **Order Intake** (`order_intake.json`)
2. **Abandoned Cart Recovery** (`abandoned_cart.json`)
3. **Courier Assignment** (`courier_assignment.json`)

### How to Import:
1. Open your n8n dashboard.
2. Click "Workflows" > "Import from File".
3. Select the `.json` file.
4. **IMPORTANT**: You must configure your own credentials for:
   - WhatsApp Business API (Meta)
   - Google Sheets (OAuth2)

## 3. WhatsApp Connection
To receive messages, you need to set up a Webhook in your Meta Developer App.

1. Go to [developers.facebook.com](https://developers.facebook.com).
2. Create an App > Select "Business".
3. Add "WhatsApp" product.
4. Under "Configuration", set the **Callback URL** to your n8n Webhook URL (Production).
   - Example: `https://n8n.your-domain.com/webhook/whatsapp-webhook`
5. Verify the token (you set this in the n8n webhook node).

## 4. Analytics & Tracking
To enable Google Analytics:
1. Open `index.html`.
2. Paste your GTM (Google Tag Manager) or GA4 script in the `<head>` section.
3. We have already set up unique IDs for buttons (e.g., `btn-primary`) which you can target in GTM triggers.

## 5. Localization
- All text content is in `src/data/translations.js`.
- To add more languages, simply add a new key (e.g., `sd` for Sindhi) and update `LanguageContext.jsx`.

## 6. Security Notes
- **Rate Limiting**: Ensure your n8n instance has rate limiting enabled to prevent spam.
- **Data Retention**: Configure n8n execution data to auto-delete after 7 days to comply with privacy standards.
