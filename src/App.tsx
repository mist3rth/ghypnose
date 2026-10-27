import { MainLayout } from './layouts/MainLayout';
import { Hero } from './components/sections/Hero';
import { Marquee } from './components/sections/Marquee';
import { About } from './components/sections/About';
import { Approach } from './components/sections/Approach';
import { PractitionerVideo } from './components/sections/PractitionerVideo';
import { Specialties } from './components/sections/Specialties';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { FAQ_DATA } from './data/faqData';
import { Contact } from './components/sections/Contact';
import { ParallaxBreak } from './components/sections/ParallaxBreak';

// Pages
import { Mentions } from './components/pages/Mentions';
import { RGPD } from './components/pages/RGPD';
import { ArretTabac } from './components/pages/specialites/ArretTabac';
import { StressAnxiete } from './components/pages/specialites/StressAnxiete';
import { TroublesSommeil } from './components/pages/specialites/TroublesSommeil';
import { Confiance } from './components/pages/specialites/Confiance';
import { NotFound } from './components/pages/NotFound';
import { SEOHead } from './components/common/SEOHead';
import { Navigate } from 'react-router-dom';
import type { RouteRecord } from 'vite-react-ssg';

const homeSchema = {
  "@context": "https://schema.org",
  "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
  "name": "GHypnose - Grégory Fitoussi",
  "url": "https://www.ghypnose.fr/",
  "image": "https://www.ghypnose.fr/images/praticien.webp",
  "telephone": "+33698060008",
  "email": "Contact@ghypnose.fr",
  "priceRange": "90€",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "27 Boulevard Magenta",
      "addressLocality": "Paris",
      "postalCode": "75010",
      "addressCountry": "FR"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "24 Rue Geoffroy-Saint-Hilaire",
      "addressLocality": "Paris",
      "postalCode": "75005",
      "addressCountry": "FR"
    }
  ],
  "geo": [
    {
      "@type": "GeoCoordinates",
      "latitude": 48.8718,
      "longitude": 2.3582
    },
    {
      "@type": "GeoCoordinates",
      "latitude": 48.8416,
      "longitude": 2.3551
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/gregparis10ehypnose"
  ],
  "description": "Cabinet d'hypnose Ericksonienne et de Réflexologie à Paris. Grégory Fitoussi vous accompagne pour l'arrêt du tabac, la gestion du stress et de l'anxiété, les troubles du sommeil et la confiance en soi.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Accompagnements en Hypnose Ericksonienne",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Arrêt du Tabac par l'Hypnose",
          "url": "https://www.ghypnose.fr/hypnose-arret-tabac-paris"
        },
        "price": "90",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gestion du Stress & Anxiété par l'Hypnose",
          "url": "https://www.ghypnose.fr/hypnose-stress-anxiete-paris"
        },
        "price": "90",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Troubles du Sommeil & Insomnie par l'Hypnose",
          "url": "https://www.ghypnose.fr/hypnose-sommeil-insomnie-paris"
        },
        "price": "90",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Confiance en Soi par l'Hypnose",
          "url": "https://www.ghypnose.fr/hypnose-confiance-en-soi-paris"
        },
        "price": "90",
        "priceCurrency": "EUR"
      }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_DATA.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

function Home() {
  return (
    <>
      <SEOHead
        title="GHypnose | Cabinet d'Hypnose Ericksonienne & Réflexologie à Paris"
        description="Grégory Fitoussi, praticien certifié en hypnose Ericksonienne à Paris 10 et Paris 5. Séances sur-mesure pour arrêt du tabac, stress, sommeil et confiance."
        canonical="https://www.ghypnose.fr/"
        schema={[homeSchema, faqSchema]}
      />
      <Hero />
      <Marquee />
      <About />
      <PractitionerVideo />
      <Approach />
      <Specialties />
      <Services />
      <ParallaxBreak />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'mentions-legales',
        element: <Mentions />
      },
      {
        path: 'rgpd',
        element: <RGPD />
      },
      {
        path: 'hypnose-arret-tabac-paris',
        element: <ArretTabac />
      },
      {
        path: 'hypnose-stress-anxiete-paris',
        element: <StressAnxiete />
      },
      {
        path: 'hypnose-sommeil-insomnie-paris',
        element: <TroublesSommeil />
      },
      {
        path: 'hypnose-confiance-en-soi-paris',
        element: <Confiance />
      },
      // Client-side fallback / redirection des anciens slugs vers Option B
      {
        path: 'specialites/arret-tabac',
        element: <Navigate to="/hypnose-arret-tabac-paris" replace />
      },
      {
        path: 'specialites/stress-anxiete',
        element: <Navigate to="/hypnose-stress-anxiete-paris" replace />
      },
      {
        path: 'specialites/troubles-sommeil',
        element: <Navigate to="/hypnose-sommeil-insomnie-paris" replace />
      },
      {
        path: 'specialites/confiance-en-soi',
        element: <Navigate to="/hypnose-confiance-en-soi-paris" replace />
      },
      {
        path: '404',
        element: <NotFound />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];

export default function App() {
  return null;
}
