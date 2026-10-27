# ARCHITECTURE TECHNIQUE : SSG, SEO, GSC & SECURITY HEADERS

## 1. Vue d'ensemble de l'Architecture
Le projet repose sur **Vite 6 / React 19 / TypeScript / Tailwind CSS / vite-react-ssg**.
L'hébergement de production est assuré sur **Apache (OVH)** avec support optionnel pour **Vercel**.

```
[Code Source (React 19 + TS Strict)]
                │
                ▼ (npm run build : vite-react-ssg build)
[Build SSG Statique] ──> Génération HTML synchrone (Direct Imports, pas de Lazy Suspend)
                │
                ├─> Ingestion Head / SEO via composant <SEOHead> (Title, Meta, OG, Canonical, Schema JSON-LD)
                ├─> Post-processing ssgOptions.onPageRendered (Nettoyage & injection propre)
                │
                ▼
[Dossier dist/]
  ├── index.html                     (HTML complet pré-rendu)
  ├── 404.html                       (Page d'erreur HTTP 404)
  ├── mentions-legales.html          (Page statique avec SEO dédié)
  ├── rgpd.html                      (Page statique avec SEO dédié)
  ├── specialites/
  │   ├── arret-tabac.html           (Page statique avec Schema Service)
  │   ├── stress-anxiete.html        (Page statique avec Schema Service)
  │   ├── troubles-sommeil.html      (Page statique avec Schema Service)
  │   └── confiance-en-soi.html      (Page statique avec Schema Service)
  ├── .htaccess                      (Apache mod_headers + Réécriture 404 propre)
  └── vercel.json                    (Clean URLs + Security Headers)
```

---

## 2. Décomposition des Composants & Corrections SSG

### 2.1 Éradication du problème "Juste du JavaScript"
- **Cause :** L'usage de `React.lazy()` couplé à `<Suspense>` dans `App.tsx` déclenchait en React 19 un rendu en deux passes de type streaming. Le serveur émettait d'abord un fallback spinner (`LoadingSpinner` ou `h-screen`), reléguant le contenu réel dans un bloc masqué `<div hidden id="S:0">` avec des fonctions clientes `$RC()`.
- **Solution Architecturale :**
  - Remplacer les `lazy()` par des imports statiques directs pour tous les composants de page et toutes les sections de la page d'accueil (`Hero`, `About`, `Approach`, `Specialties`, `Services`, `Process`, `Testimonials`, `Contact`, `Mentions`, `RGPD`, etc.).
  - Pour une SPA statique de moins de 10 pages, le bundle JS minifié complet reste inférieur à 150 KB. La suppression du lazy-loading élimine totalement les Suspense boundaries à la compilation, garantissant que `<main>` contient directement 100% du HTML sémantique lors de la génération.

### 2.2 Gestion Unifiée du `<head>` et des Balises SEO (`<SEOHead>`)
- Création d'un composant dédié `<SEOHead>` basé sur `vite-react-ssg` (`Head`) ou `react-helmet-async`.
- Nettoyage de `index.html` : retrait du `<title>` et de la `<meta description>` codés en dur afin d'éviter tout conflit ou balise dupliquée lors de la concaténation SSG.
- Dans chaque page :
  - Un titre unique optimisé pour le référencement local parisien.
  - Une méta description persuasive respectant le seuil 150-160 caractères.
  - L'URL canonique absolue `https://www.ghypnose.fr/...`.
  - Balises Open Graph (`og:title`, `og:description`, `og:url`, `og:image`).
  - Balise robots explicite (`index, follow` pour les pages publiques, `noindex, nofollow` pour la 404).
  - Script JSON-LD avec les schemas adaptés (`HealthAndBeautyBusiness`, `Service`, `WebPage`).

### 2.3 Architecture des Données Structurées (Schema.org)
- **Accueil :** `HealthAndBeautyBusiness` décrivant Grégory Fitoussi, les deux adresses (Magenta 75010 et Geoffroy-Saint-Hilaire 75005), tarifs (90€), téléphone, et prestations.
- **Pages Spécialités :** `Service` avec `provider` pointant vers le cabinet, `areaServed` (Paris, Île-de-France), description détaillée de la prestation et URL canonique.
- **Pages Légales :** `WebPage` avec dates de publication / mise à jour et nom de l'éditeur.

---

## 3. Configuration Serveur & Sécurité

### 3.1 Apache (`public/.htaccess`)
- **Correction 404 / GSC :**
  - Empêcher la réécriture directe de `/404` vers `404.html` en code 200.
  - Définir `ErrorDocument 404 /404.html`.
  - Configurer les règles pour que les URLs inexistantes renvoient un en-tête `Status 404 Not Found`.
- **Sécurité des En-têtes (`mod_headers`) :**
  ```apache
  <IfModule mod_headers.c>
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), interest-cohort=()"
    Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https:; media-src 'self' blob: https:; font-src 'self' data: https:; connect-src 'self' https://script.google.com https://script.googleusercontent.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self' https://script.google.com;"
  </IfModule>
  ```

### 3.2 Vercel (`vercel.json`)
- Configuration miroir dans le bloc `"headers"` afin de garantir le même niveau de sécurité (A+) en cas de déploiement ou prévisualisation Vercel.

---

## 4. Pipeline de Validation
1. **Validation SSG :** Inspection des fichiers compilés dans `dist/` pour vérifier la présence directe du texte dans `<main>` et des balises dans `<head>`.
2. **Validation SEO & JSON-LD :** Test de validation syntaxique Schema.org.
3. **Validation Sécurité :** Test des en-têtes avec `curl -I` et validation du score SecurityHeaders.com (cible ≥ 80%).
4. **Validation A11Y :** Vérification de la hiérarchie Hn, focus visible et navigation clavier.
