import { Link } from 'react-router-dom';
import { FadeIn } from '../ui/FadeIn';
import { SEOHead } from '../common/SEOHead';

export function NotFound() {
  return (
    <>
      <SEOHead
        title="Page introuvable (404) | GHypnose"
        description="La page que vous recherchez n'existe pas ou a été déplacée."
        canonical="https://www.ghypnose.fr/404"
        robots="noindex, nofollow"
      />

      <main className="pt-32 pb-20 px-4 min-h-[80vh] flex items-center justify-center">
        <FadeIn className="max-w-[600px] w-full text-center">
          <h1 className="text-[clamp(4rem,10vw,8rem)] font-title font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Oups ! Cette page s'est envolée...
          </h2>
          <p className="text-text-muted mb-10 text-lg leading-relaxed">
            Il semble que le chemin que vous essayez d'emprunter n'existe pas ou a été déplacé.
            Ne vous inquiétez pas, vous pouvez toujours retrouver votre chemin.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold py-3 px-8 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,175,55,0.5)] transition-all"
          >
            Retour à l'accueil
          </Link>
        </FadeIn>
      </main>
    </>
  );
}
