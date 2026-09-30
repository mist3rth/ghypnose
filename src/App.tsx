import { Suspense, lazy, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { MainLayout } from './layouts/MainLayout';
import { Hero } from './components/sections/Hero';
import { Marquee } from './components/sections/Marquee';
import type { RouteRecord } from 'vite-react-ssg';

const About = lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const Approach = lazy(() => import('./components/sections/Approach').then(module => ({ default: module.Approach })));
const PractitionerVideo = lazy(() => import('./components/sections/PractitionerVideo').then(module => ({ default: module.PractitionerVideo })));
const Specialties = lazy(() => import('./components/sections/Specialties').then(module => ({ default: module.Specialties })));
const Services = lazy(() => import('./components/sections/Services').then(module => ({ default: module.Services })));
const Process = lazy(() => import('./components/sections/Process').then(module => ({ default: module.Process })));
const Testimonials = lazy(() => import('./components/sections/Testimonials').then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import('./components/sections/Contact').then(module => ({ default: module.Contact })));
const ParallaxBreak = lazy(() => import('./components/sections/ParallaxBreak').then(module => ({ default: module.ParallaxBreak })));

// Pages
const Mentions = lazy(() => import('./components/pages/Mentions').then(module => ({ default: module.Mentions })));
const RGPD = lazy(() => import('./components/pages/RGPD').then(module => ({ default: module.RGPD })));
const ArretTabac = lazy(() => import('./components/pages/specialites/ArretTabac').then(module => ({ default: module.ArretTabac })));
const StressAnxiete = lazy(() => import('./components/pages/specialites/StressAnxiete').then(module => ({ default: module.StressAnxiete })));
const TroublesSommeil = lazy(() => import('./components/pages/specialites/TroublesSommeil').then(module => ({ default: module.TroublesSommeil })));
const Confiance = lazy(() => import('./components/pages/specialites/Confiance').then(module => ({ default: module.Confiance })));

const LoadingSpinner = () => (
  <div className="h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-accent-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function Home() {
  // Fix hash scrolling on page load
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      const attemptScroll = () => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          setTimeout(attemptScroll, 100);
        }
      };
      setTimeout(attemptScroll, 100);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>GHypnose | Cabinet d'hypnose Ericksonienne à Paris</title>
        <meta name="description" content="Grégory Fitoussi - Praticien en Hypnose Ericksonienne à Paris. Un accompagnement sur-mesure pour gérer stress, phobies et arrêt du tabac." />
        <link rel="canonical" href="https://www.ghypnose.fr/" />
      </Helmet>
      <Hero />
      <Marquee />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
        <PractitionerVideo />
        <Approach />
        <Specialties />
        <Services />
        <ParallaxBreak />
        <Process />
        <Testimonials />
        <Contact />
      </Suspense>
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
        element: (
          <Suspense fallback={<div className="h-screen" />}>
            <Mentions />
          </Suspense>
        )
      },
      {
        path: 'rgpd',
        element: (
          <Suspense fallback={<div className="h-screen" />}>
            <RGPD />
          </Suspense>
        )
      },
      {
        path: 'specialites/arret-tabac',
        element: (
          <Suspense fallback={<div className="h-screen" />}>
            <ArretTabac />
          </Suspense>
        )
      },
      {
        path: 'specialites/stress-anxiete',
        element: (
          <Suspense fallback={<div className="h-screen" />}>
            <StressAnxiete />
          </Suspense>
        )
      },
      {
        path: 'specialites/troubles-sommeil',
        element: (
          <Suspense fallback={<div className="h-screen" />}>
            <TroublesSommeil />
          </Suspense>
        )
      },
      {
        path: 'specialites/confiance-en-soi',
        element: (
          <Suspense fallback={<div className="h-screen" />}>
            <Confiance />
          </Suspense>
        )
      }
    ]
  }
];

export default function App() {
  return null;
}
