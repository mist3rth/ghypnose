import { FadeIn } from '../../ui/FadeIn';
import { ArrowRight, CheckCircle2, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../common/SEOHead';

const troublesSommeilSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hypnose pour Troubles du Sommeil & Insomnie à Paris",
  "serviceType": "Séance d'hypnose pour les troubles du sommeil",
  "provider": {
    "@type": "HealthAndBeautyBusiness",
    "name": "GHypnose - Grégory Fitoussi",
    "url": "https://www.ghypnose.fr/",
    "telephone": "+33698060008",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "27 Boulevard Magenta",
      "addressLocality": "Paris",
      "postalCode": "75010",
      "addressCountry": "FR"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Paris"
  },
  "description": "Séance d'hypnose Ericksonienne à Paris pour vaincre les insomnies, les angoisses nocturnes et retrouver un cycle de sommeil réparateur et naturel.",
  "offers": {
    "@type": "Offer",
    "price": "90",
    "priceCurrency": "EUR"
  }
};

export function TroublesSommeil() {
  return (
    <main className="pt-32 pb-20 px-4 min-h-screen relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <SEOHead
        title="Hypnose Sommeil & Insomnie à Paris | Retrouver des Nuits Réparatrices"
        description="Vaincre l'insomnie et les réveils nocturnes avec l'hypnose Ericksonienne à Paris. Reprogrammez un sommeil naturel, réparateur et profond."
        canonical="https://www.ghypnose.fr/hypnose-sommeil-insomnie-paris"
        schema={troublesSommeilSchema}
      />

      <div className="max-w-[800px] mx-auto">
        <FadeIn>
          <div className="flex justify-between items-center mb-8 w-full">
            <Link to="/#specialites" className="text-accent-secondary hover:underline">&larr; Retour à l'accueil</Link>
            <Link to="/hypnose-confiance-en-soi-paris" className="text-accent-secondary hover:underline text-right">Confiance en soi &rarr;</Link>
          </div>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-title font-semibold mb-6 text-white">
            Hypnose pour les <span className="text-accent-primary">Troubles du Sommeil</span>
          </h1>
          <p className="text-xl text-text-muted mb-12 leading-relaxed">
            Difficultés d'endormissement, réveils nocturnes, insomnies chroniques ou angoisses nocturnes ? Le manque de sommeil impacte lourdement votre qualité de vie. L'hypnose est un outil formidable pour réapprendre à dormir.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-white/5 backdrop-blur-[24px] border border-accent-primary/15 rounded-3xl p-8 mb-12">
            <h2 className="text-2xl font-title font-semibold text-white mb-6 flex items-center gap-3">
              <Moon className="text-accent-secondary w-6 h-6" /> Retrouver des nuits réparatrices
            </h2>
            <p className="text-text-muted mb-6 leading-relaxed">
              Le sommeil est un processus naturel, mais le stress, les ruminations ou de mauvaises habitudes peuvent le bloquer. L'hypnose va vous aider à lever ces freins inconscients et à recréer un sas de décompression efficace.
            </p>
            <ul className="space-y-4">
              {[
                "Apaiser les angoisses nocturnes et la peur de ne pas dormir",
                "Diminuer les réveils multiples en pleine nuit",
                "Stopper le flux de pensées incessantes au moment du coucher",
                "Améliorer la qualité et la profondeur de votre sommeil"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-title font-semibold text-white mb-6">Rééduquer son inconscient au sommeil</h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Durant les séances, je vous accompagne pour instaurer de nouveaux réflexes de détente. Vous apprendrez également des techniques d'auto-hypnose simples à utiliser chez vous pour faciliter l'endormissement.
          </p>
          
          <div className="bg-gradient-to-br from-accent-primary/10 to-transparent p-8 rounded-2xl border border-accent-primary/20 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Envie de renouer avec un sommeil de qualité ?</h3>
            <p className="text-text-muted mb-6">Prenons le temps d'analyser vos blocages lors d'une séance dans mon cabinet à Paris 10 ou Paris 5.</p>
            <Link to="/#contact" className="inline-flex items-center gap-2 bg-accent-primary text-white font-semibold py-3 px-8 rounded-full hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)] transition-all">
              Prendre rendez-vous <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
