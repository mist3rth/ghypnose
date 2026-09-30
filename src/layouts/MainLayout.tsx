import { Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Phone, ExternalLink } from 'lucide-react';

export function MainLayout() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', hash);
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className="fixed w-[500px] h-[500px] rounded-full blur-[100px] -z-10 opacity-30 pointer-events-none bg-[radial-gradient(circle,var(--color-accent-primary)_0%,transparent_70%)] -top-[100px] -right-[100px] animate-[float_20s_infinite_alternate]"></div>
      <div className="fixed w-[500px] h-[500px] rounded-full blur-[100px] -z-10 opacity-30 pointer-events-none bg-[radial-gradient(circle,var(--color-accent-secondary)_0%,transparent_70%)] -bottom-[100px] -left-[100px] animate-[float_25s_infinite_alternate-reverse]"></div>

      <header>
        <nav className="glass-nav fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-50 flex justify-between items-center px-4 sm:px-8 py-2 sm:py-2.5 rounded-full transition-all">
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-2.5 no-underline select-none group min-w-0"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', '/');
              }
            }}
          >
            <img src="/images/logo-transparent.webp" alt="G Hypnose Logo" className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105 shrink-0" width="36" height="36" />
            <span className="font-semibold text-base sm:text-[1.15rem] text-text-main tracking-wide group-hover:text-accent-secondary transition-colors truncate">GHypnose</span>
          </Link>
          
          <ul className="hidden lg:flex list-none gap-[clamp(1rem,2.5vw,2.5rem)] items-center m-0 p-0">
            <li><a href="/#about" onClick={(e) => handleNavClick(e, '#about')} className="text-text-main text-[0.9rem] font-medium transition-colors hover:text-accent-secondary">À propos</a></li>
            <li><a href="/#approach" onClick={(e) => handleNavClick(e, '#approach')} className="text-text-main text-[0.9rem] font-medium transition-colors hover:text-accent-secondary">L'hypnose</a></li>
            <li><a href="/#services" onClick={(e) => handleNavClick(e, '#services')} className="text-text-main text-[0.9rem] font-medium transition-colors hover:text-accent-secondary">Mes Offres</a></li>
            <li><a href="/#process" onClick={(e) => handleNavClick(e, '#process')} className="text-text-main text-[0.9rem] font-medium transition-colors hover:text-accent-secondary">Déroulement</a></li>
            <li><a href="/#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-text-main text-[0.9rem] font-medium transition-colors hover:text-accent-secondary">Contact</a></li>
          </ul>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a href="/#contact" onClick={(e) => handleNavClick(e, '#contact')} className="!hidden lg:!inline-flex btn btn-primary !px-5 !py-2 text-[0.85rem]">
              Prendre RDV
            </a>
            <a href="/#contact" onClick={(e) => handleNavClick(e, '#contact')} className="lg:!hidden bg-accent-primary text-white w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full shadow-[0_5px_20px_rgba(212,175,55,0.3)] transition-transform hover:-translate-y-0.5 shrink-0" aria-label="Prendre RDV">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </a>
            <button 
              className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-text-main hover:text-accent-secondary transition-colors shrink-0" 
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a0a1a]/95 backdrop-blur-xl z-40 transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-20 pb-10">
          <ul className="flex flex-col items-center gap-8 m-0 p-0 list-none">
            <li><a href="/#about" onClick={(e) => handleNavClick(e, '#about')} className="text-white text-2xl font-medium transition-colors hover:text-accent-secondary">À propos</a></li>
            <li><a href="/#approach" onClick={(e) => handleNavClick(e, '#approach')} className="text-white text-2xl font-medium transition-colors hover:text-accent-secondary">L'hypnose</a></li>
            <li><a href="/#services" onClick={(e) => handleNavClick(e, '#services')} className="text-white text-2xl font-medium transition-colors hover:text-accent-secondary">Mes Offres</a></li>
            <li><a href="/#process" onClick={(e) => handleNavClick(e, '#process')} className="text-white text-2xl font-medium transition-colors hover:text-accent-secondary">Déroulement</a></li>
            <li><a href="/#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-white text-2xl font-medium transition-colors hover:text-accent-secondary">Contact</a></li>
          </ul>
        </div>
      </div>

      <main><Outlet /></main>

      <footer className="mt-20 py-16 px-4 bg-[#0a0a1a]/80 border-t border-white/10 backdrop-blur-xl">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center text-text-muted text-[0.9rem] gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 opacity-90">
              <img src="/images/logo-sdmh.webp" alt="Logo SDMH" width="40" height="40" className="h-10 w-auto invert brightness-0" />
              <span className="text-[0.95em] font-medium tracking-wide">Syndicat des Métiers de l'Hypnose</span>
            </div>
            <p>&copy; 2026 G Hypnose. Tous droits réservés.</p>
            <p className="mt-1 text-[0.9em] opacity-90 flex items-center justify-center md:justify-start gap-1">
              Made by <a href="https://present-me-lake.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:text-accent-secondary hover:underline transition-colors inline-flex items-center gap-1 font-medium">T.THIESSON <ExternalLink className="w-3 h-3" /></a>
            </p>
            <p className="mt-2">Cabinet situé au cœur de la sérénité.</p>
            <p className="flex items-center justify-center md:justify-start gap-2 mt-1">
              <Phone className="w-4 h-4 text-accent-primary" />
              <a href="tel:+33698060008" className="text-accent-primary hover:underline font-medium">06 98 06 00 08</a>
            </p>
            <p className="mt-2 text-[0.85em] opacity-80">Assurance Responsabilité Civile Professionnelle AXA Contrat n° 10389249304</p>
          </div>
          
          <nav className="flex items-center gap-8">
            <Link to="/mentions-legales" className="hover:text-accent-secondary transition-colors">Mentions Légales</Link>
            <Link to="/rgpd" className="hover:text-accent-secondary transition-colors">RGPD</Link>
            <div className="flex gap-4 items-center pl-4 ml-4 border-l border-white/10">
              {/* <a href="#" className="hover:text-accent-secondary transition-colors"><FaFacebook size={20} /></a> */}
              <a href="#" className="hover:text-accent-secondary transition-colors" aria-label="Instagram">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12.2 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </a>
            </div>
          </nav>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className={`cursor-pointer fixed bottom-8 right-8 p-3 rounded-full bg-accent-primary text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Retour en haut"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
      </button>
    </>
  );
}
