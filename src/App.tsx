import { Suspense, lazy, useState, useEffect } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { Hero } from './components/sections/Hero';
import { Marquee } from './components/sections/Marquee';

const About = lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const Approach = lazy(() => import('./components/sections/Approach').then(module => ({ default: module.Approach })));
const Services = lazy(() => import('./components/sections/Services').then(module => ({ default: module.Services })));
const Process = lazy(() => import('./components/sections/Process').then(module => ({ default: module.Process })));
const Testimonials = lazy(() => import('./components/sections/Testimonials').then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import('./components/sections/Contact').then(module => ({ default: module.Contact })));
const ParallaxBreak = lazy(() => import('./components/sections/ParallaxBreak').then(module => ({ default: module.ParallaxBreak })));

// Pages
const Mentions = lazy(() => import('./components/pages/Mentions').then(module => ({ default: module.Mentions })));
const RGPD = lazy(() => import('./components/pages/RGPD').then(module => ({ default: module.RGPD })));

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Fix hash scrolling on page load since components are lazy-loaded
  useEffect(() => {
    if (currentPath === '/' && window.location.hash) {
      const hash = window.location.hash;
      const attemptScroll = () => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If the element is not found yet (still lazy loading), try again shortly
          setTimeout(attemptScroll, 100);
        }
      };
      // Initial attempt
      setTimeout(attemptScroll, 100);
    }
  }, [currentPath]);

  const renderContent = () => {
    if (currentPath === '/mentions-legales') {
      return (
        <Suspense fallback={<div className="h-screen" />}>
          <Mentions />
        </Suspense>
      );
    }
    
    if (currentPath === '/rgpd') {
      return (
        <Suspense fallback={<div className="h-screen" />}>
          <RGPD />
        </Suspense>
      );
    }

    return (
      <>
        <Hero />
        <Marquee />
        <Suspense fallback={<div className="h-[200px] flex items-center justify-center"><div className="w-8 h-8 border-2 border-accent-primary border-t-transparent rounded-full animate-spin"></div></div>}>
          <About />
          <Approach />
          <Services />
          <ParallaxBreak />
          <Process />
          <Testimonials />
          <Contact />
        </Suspense>
      </>
    );
  };

  return (
    <MainLayout>
      {renderContent()}
    </MainLayout>
  );
}

export default App;
