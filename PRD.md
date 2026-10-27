# PRD : Optimisation SSG, SEO Avancé, Résolution GSC & Sécurité des Headers

## 1. Contexte & Problématique
Le site GHypnose (vitrine du cabinet d'hypnose Ericksonienne de Grégory Fitoussi à Paris) utilise actuellement Vite avec `vite-react-ssg`. Cependant, plusieurs défauts majeurs impactent la visibilité et l'indexation :
1. **Rendu HTML incomplet (Faux SSG perçu) :** En raison de l'utilisation de `React.lazy()` et de `<Suspense>` sur toutes les sections et pages, le SSR génère des coquilles vides ou des fallbacks de chargement (`<div class="h-[200px] animate-spin">` ou `<div class="h-screen">`) avec du streaming React 19 (`$RC`, template streaming). Les robots d'indexation et utilisateurs sans exécution dynamique de JS perçoivent une page quasi-vide.
2. **Balises Head / SEO dupliquées et non spécifiques :** Le `<head>` de toutes les pages statiques hérite du `<title>` et de la `<meta description>` génériques codés en dur dans `index.html`. Les balises définies dans les composants React via Helmet sont rejetées dans le `<body>` ou écrasées.
3. **Absence de données structurées Schema.org spécifiques par page :** Seule la page d'accueil possède un schema rudimentaire. Les pages de spécialités (Arrêt du tabac, Stress, Sommeil, Confiance) n'ont pas de schéma `Service` / `MedicalWebPage`.
4. **Alerte Google Search Console "Exclue par la balise no-index" :** La route 404 est pré-générée en fichier statique `404.html` avec un `<meta name="robots" content="noindex, nofollow" />`, et réécrite par Apache en code HTTP `200 OK`, déclenchant une alerte GSC. De plus, d'anciens fichiers (`_old/rgpd.html`, `_old/mentions-legales.html`) comportaient historiquement des balises `noindex`.
5. **En-têtes de sécurité inexistants :** Le site en production sur Apache (OVH) ne renvoie aucun security header (Score F / 0% sur https://securityheaders.com/). L'objectif est d'atteindre un score ≥ 80/100 (Cible A/A+ 100%).

---

## 2. Objectifs Fonctionnels & Techniques
- **100% SSG Réel & Pur :** Générer du HTML statique contenant l'intégralité du contenu textuel et sémantique dans le DOM principal (`<main>`), sans fallback de suspense ni streaming JavaScript.
- **SEO granulaire par page :** Chaque page doit disposer d'un `<title>` unique, d'une `<meta name="description">` captivante, d'une URL canonique propre, de balises Open Graph / Twitter Cards et d'un balisage Schema.org JSON-LD ultra-spécifique dans le `<head>`.
- **Résolution définitive du statut GSC no-index :** Assurer que les pages légitimes sont explicitement `index, follow`, et que les erreurs 404 retournent un véritable code HTTP `404 Not Found` côté serveur Web sans polluer l'indexation GSC.
- **Score SecurityHeaders.com ≥ 80% (Grade A / A+) :** Mettre en place les en-têtes HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy et Permissions-Policy dans `.htaccess` (Apache) et `vercel.json`.

---

## 3. Périmètre des Pages & Spécifications SEO (Option B Validée)

| URL Cible (Option B) | Titre Cible | Méta Description Cible | Type Schema.org |
| :--- | :--- | :--- | :--- |
| `/` | `GHypnose | Cabinet d'Hypnose Ericksonienne & Réflexologie à Paris` | `Grégory Fitoussi, praticien certifié en hypnose Ericksonienne à Paris 10 et Paris 5. Séances sur-mesure pour arrêt du tabac, stress, sommeil et confiance.` | `HealthAndBeautyBusiness` + `LocalBusiness` |
| `/hypnose-arret-tabac-paris` | `Arrêt du Tabac par l'Hypnose à Paris | Sevrage Doux & Durable - GHypnose` | `Arrêtez de fumer définitivement grâce à l'hypnose Ericksonienne à Paris avec Grégory Fitoussi. Méthode douce et durable, sans stress ni prise de poids.` | `Service` (`sevrage tabagique`) |
| `/hypnose-stress-anxiete-paris` | `Gestion du Stress & Anxiété par l'Hypnose à Paris | GHypnose` | `Surmontez le stress, l'anxiété et le surmenage par l'hypnose à Paris 10 & 5. Retrouvez calme, sérénité et équilibre intérieur avec Grégory Fitoussi.` | `Service` (`gestion du stress`) |
| `/hypnose-sommeil-insomnie-paris` | `Hypnose Sommeil & Insomnie à Paris | Retrouver des Nuits Réparatrices` | `Vaincre l'insomnie et les réveils nocturnes avec l'hypnose Ericksonienne à Paris. Reprogrammez un sommeil naturel, réparateur et profond.` | `Service` (`sommeil réparateur`) |
| `/hypnose-confiance-en-soi-paris` | `Développer la Confiance en Soi par l'Hypnose à Paris | GHypnose` | `Dépassez vos blocages, le manque d'assurance et le syndrome de l'imposteur. Renforcez votre estime personnelle grâce à l'hypnose à Paris.` | `Service` (`confiance et estime`) |
| `/mentions-legales` | `Mentions Légales | GHypnose Cabinet d'Hypnose Paris` | `Consultez les mentions légales et informations administratives du cabinet GHypnose - Grégory Fitoussi à Paris.` | `WebPage` |
| `/rgpd` | `Politique de Confidentialité (RGPD) | GHypnose` | `Découvrez la politique de protection des données et engagements de confidentialité du cabinet GHypnose.` | `WebPage` |
| `/404` | `Page non trouvée (404) | GHypnose` | `La page que vous recherchez n'existe pas ou a été déplacée.` | `noindex, nofollow` + HTTP 404 |

---

## 4. Spécifications Sécurité (Headers HTTP)
Configuration de 6 en-têtes obligatoires sur Apache (`.htaccess`) et Vercel (`vercel.json`) :
1. **Strict-Transport-Security (HSTS) :** `max-age=31536000; includeSubDomains; preload`
2. **X-Content-Type-Options :** `nosniff`
3. **X-Frame-Options :** `SAMEORIGIN`
4. **Referrer-Policy :** `strict-origin-when-cross-origin`
5. **Permissions-Policy :** `camera=(), microphone=(), geolocation=(), interest-cohort=()`
6. **Content-Security-Policy (CSP) :**
   - Protection stricte contre XSS, injection et clickjacking.
   - Autorisation des ressources locales (`'self'`), Google Apps Script (`script.google.com`, `script.googleusercontent.com` pour le formulaire), vidéos WebM/MP4 locales, et polices locales préchargées.

---

## 5. Critères d'Acceptation & Validation
1. `npm run build` génère des fichiers HTML où `<main>` contient le texte complet des sections et pages, sans spinners Suspense ni balises `<template id="B:0">`.
2. Chaque fichier HTML dans `dist/` a son propre `<title>`, `<meta name="description">`, canonical et `<script type="application/ld+json">` directement dans son `<head>`.
3. Le score sur [SecurityHeaders.com](https://securityheaders.com/) passe de F (0%) à **A ou A+ (≥ 80-100%)**.
4. La page d'erreur 404 est servie avec un véritable code HTTP 404 par Apache, et aucune page légitime ne porte de balise `noindex`.
5. Navigation clavier (A11Y) et Lighthouse SEO = 100/100.
