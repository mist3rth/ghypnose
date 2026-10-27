# TODO & Roadmap : SSG, SEO, Slugs, GSC & Security Headers

## Phase 1 : Architecture & Validation
- [x] Diagnostic complet de l'état actuel (SSG streaming React 19, head tags dupliqués, absence security headers).
- [x] Rédaction du `PRD.md` et de `ARCHITECTURE.md`.
- [x] Élaboration des propositions de nouveaux slugs SEO pour les 4 spécialités.
- [x] Validation de l'architecture et choix de l'Option B par l'utilisateur (déploiement OVHcloud mutualisé).

## Phase 2 : Refonte SSG (Suppression des fausses coquilles vides)
- [x] Remplacer les imports dynamiques `React.lazy()` par des imports statiques directs dans `src/App.tsx`.
- [x] Retirer les `<Suspense fallback=...>` bloquants et générateurs de streaming à la compilation.
- [x] Nettoyer `index.html` (retrait des balises statiques `<title>` et `<meta description>` en dur qui écrasent le SSG).
- [x] Valider que `dist/index.html` et chaque page contiennent directement l'ensemble du DOM textuel dans `<main>` à la compilation.

## Phase 3 : Nouveaux Noms de Pages (Slugs SEO) & Redirections 301
- [x] Mettre à jour les routes dans `src/App.tsx` avec les nouveaux slugs Option B.
- [x] Mettre à jour les liens de navigation interne :
  - `src/components/sections/Specialties.tsx`
  - `src/layouts/MainLayout.tsx` (Footer & Header)
  - Liens relatifs suivant/précédent entre spécialités
- [x] Mettre à jour `public/sitemap.xml` avec les nouvelles URLs Option B.
- [x] Configurer les redirections 301 dans `public/.htaccess` des anciens slugs `/specialites/*` vers les nouveaux.

## Phase 4 : Balisage SEO Complet & Schema.org par Page
- [x] Développer un composant unifié `<SEOHead>` basé sur `Head` de `vite-react-ssg` gérant :
  - Title optimisé
  - Meta description persuasive (150-160 caractères)
  - Canonical URL absolue
  - Open Graph (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`, locale, site_name)
  - Twitter Card (`summary_large_image`)
  - Robots (`index, follow` pour pages publiques, `noindex, nofollow` pour 404)
  - Schema.org JSON-LD spécifique
- [x] Implémenter les schemas JSON-LD spécifiques :
  - `/` : `HealthAndBeautyBusiness` + `LocalBusiness` complet (Paris 10 & 5, coordonnées, tarifs, diplômes, hasOfferCatalog).
  - `/hypnose-arret-tabac-paris` : `Service` (Arrêt du tabac, provider GHypnose, areaServed Paris, tarif 90€).
  - `/hypnose-stress-anxiete-paris` : `Service` (Gestion du stress & anxiété, provider GHypnose, areaServed Paris, tarif 90€).
  - `/hypnose-sommeil-insomnie-paris` : `Service` (Troubles du sommeil & insomnie, provider GHypnose, areaServed Paris, tarif 90€).
  - `/hypnose-confiance-en-soi-paris` : `Service` (Confiance en soi & estime, provider GHypnose, areaServed Paris, tarif 90€).
  - `/mentions-legales` & `/rgpd` : `WebPage`.

## Phase 5 : Résolution de l'alerte GSC (no-index & 404)
- [x] Corriger la gestion de la page 404 dans Apache (`.htaccess`) :
  - La route `/404` ne doit plus être réécrite en code `200 OK`.
  - Retourner un véritable statut HTTP `404 Not Found` avec affichage de `404.html`.
- [x] Vérifier que `NotFound.tsx` conserve `noindex, nofollow` tout en étant servie exclusivement en code 404.
- [x] Confirmer que toutes les pages canoniques réelles sont explicitement en `index, follow`.

## Phase 6 : Durcissement des En-têtes de Sécurité (Cible ≥ 80% / A+)
- [x] Mettre à jour `public/.htaccess` avec les en-têtes HTTP de sécurité pour OVHcloud mutualisé :
  - `Strict-Transport-Security` (HSTS max-age 31536000 preload)
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy`
  - `Content-Security-Policy` (CSP) calibrée pour GAS, polices et médias locaux
  - Compression Gzip (`mod_deflate`) & cache navigateur (`mod_expires`)
- [x] Mettre à jour `vercel.json` avec la configuration équivalente.

## Phase 7 : Vérifications Finales & Validation
- [x] Compiler en mode production (`npm run build`) avec succès (0 erreurs).
- [x] Linter oxlint vérifié (0 erreurs).
- [x] Inspection des fichiers statiques générés dans `dist/` (titres, metas, schemas et corps de texte vérifiés).

## Phase 8 : UX Scroll, Calage Sous la Nav, Vidéos & llms.txt
- [x] Calibrer le scroll des liens et CTA (`offset: 30` avec Lenis) pour que le contenu se cale immédiatement sous la nav (environ 25px sous la barre flottante, masquant le bandeau supérieur).
- [x] Rétablir l'animation de smooth scroll pour tous les boutons CTA de la page d'accueil (`Hero`, `Services`, `ParallaxBreak`, etc.) via interception globale.
- [x] Ajuster le padding de la section contact (`pt-16 md:pt-20` et `scroll-mt-20`) pour une mise en valeur directe du formulaire.
- [x] Éliminer le saut/redimensionnement vidéo au chargement de la home :
  - Extraction d'une image poster exacte pixel-par-pixel (`hero-fallback.webp` en 1280x720 16:9).
  - Ajout des attributs `width="1280"` et `height="720"` et `preload="auto"` sur la vidéo hero.
  - Ajout d'un poster dédié et dimensions sur `PractitionerVideo`.
- [x] Mettre en conformité `public/llms.txt` avec les recommandations llmstxt.org / Lighthouse (H1, bloc de citation, liens Markdown obligatoires).
## Phase 9 : Francisation des Ancres & Défilement Cross-Page Immédiat
- [x] Traduction de l'intégralité des identifiants d'ancres en français :
  - `#about` -> `#a-propos`
  - `#approach` -> `#l-hypnose`
  - `#services` -> `#mes-offres`
  - `#process` -> `#deroulement`
  - `#hero` -> `#accueil`
- [x] Mise en place d'une rétrocompatibilité automatique (`legacyHashMap`) dans `MainLayout.tsx` pour rediriger les anciennes ancres anglaises en mémoire sans casser d'anciens liens ou favoris.
- [x] Restauration du défilement fluide (smooth scroll) vers le formulaire :
  - **Comportement :** Au changement de route vers une ancre, la position est initialisée au sommet (`scrollY = 0`), puis une animation fluide et progressive Lenis (`duration: 1.5s`, offset sous nav) fait glisser la vue jusqu'au formulaire de contact.
  - **Explication des 12 pages SSG :** Documenté pour l'utilisateur (7 pages publiques + 1 page 404 + 4 pages d'alias pour les anciens slugs).
- [x] Remplacement du `<select>` natif par un composant accessible sur-mesure `<CustomSelect>` :
  - Fin du menu déroulant rectangulaire gris natif de l'OS.
  - Menu flottant en verre sombre (`#0c1322` avec flou `backdrop-blur-[24px]` et bordure dorée `accent-primary/25`).
  - Coche de sélection dorée, survol réactif, support clavier complet (A11Y : flèches, Entrée, Échap) et fermeture au clic extérieur.
  - Activation instantanée du bouton « Continuer » lors de la sélection d'un motif.
  - Correction mobile : retrait de `overflow-hidden` sur la carte contact parent et calibrage de l'espacement pour que toutes les options soient visibles sans aucune coupure.

## Phase 10 : Section FAQ (SEO, AEO, Réassurance & Navigation)
- [x] Créer le composant `src/components/sections/FAQ.tsx` (accordéon accessible WCAG AA, 5 questions/réponses stratégiques, retrait du badge préliminaire).
- [x] Intégrer le balisage Schema.org JSON-LD `FAQPage` dans `src/App.tsx` et `SEOHead.tsx` (validé présent dans `dist/index.html` pour les Rich Snippets Google et AEO).
- [x] Insérer la section FAQ sur la Home entre `Testimonials` et `Contact`.
- [x] Ajouter le lien **FAQ** dans la barre de navigation desktop et dans le menu burger mobile juste avant **Contact**.
- [x] Première question ouverte par défaut (`openIndex = 0`) pour lever immédiatement les freins des visiteurs.
- [x] Remplacement de l'animation de repli par une transition CSS Grid native (`grid-template-rows: 0fr/1fr`) et suppression du `transition-all` sur les cartes, éliminant tout à-coup ou secousse à la fermeture.
- [x] Valider la compilation SSG (12 pages), oxlint (0 erreurs) et tester l'accordéon en conditions réelles.

