import { Helmet } from 'react-helmet-async';
import { FadeIn } from '../../ui/FadeIn';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

export function ArticleTabac() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <Helmet>
        <title>Combien de séances d'hypnose pour arrêter de fumer ? | GHypnose</title>
        <meta name="description" content="Découvrez combien de séances d'hypnose sont nécessaires pour l'arrêt du tabac. Comprenez la méthode et pourquoi chaque fumeur est unique." />
      </Helmet>

      <article className="max-w-[800px] mx-auto">
        <Link to="/articles" className="inline-flex items-center gap-2 text-accent-secondary hover:text-accent-primary transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Retour au journal
        </Link>

        <FadeIn>
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm font-medium text-accent-secondary mb-6">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Arrêt du Tabac</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Mis à jour récemment</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-title font-semibold mb-6 leading-tight text-white">
              Combien de séances d'hypnose faut-il vraiment pour arrêter de fumer ?
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              C'est la question que se posent presque tous les fumeurs qui poussent la porte d'un cabinet d'hypnose. "Est-ce qu'en une heure, je serai libéré ?"
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-white/5">
            <img src="/images/articles/tabac.jpg" alt="Fumée abstraite" className="w-full h-full object-cover" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="prose prose-invert prose-lg max-w-none text-text-muted">
            <h2 className="text-2xl font-title text-white mt-8 mb-4">Le mythe de la "baguette magique" en une séance</h2>
            <p className="mb-6">
              On entend souvent des histoires de personnes ayant arrêté net après une seule séance d'hypnose. C'est vrai, cela arrive. Mais en faire une promesse systématique serait trompeur. L'hypnose n'est pas un interrupteur magique que l'on bascule dans le cerveau. C'est un travail profond sur vos mécanismes inconscients.
            </p>

            <h2 className="text-2xl font-title text-white mt-8 mb-4">Pourquoi chaque fumeur est différent</h2>
            <p className="mb-6">
              Certains fument par ennui, d'autres pour gérer le stress, d'autres encore par pur réflexe social. Votre relation à la cigarette s'est construite sur des années. L'hypnose va permettre de déprogrammer ces liens, mais la durée dépendra de votre profil émotionnel.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Le fumeur "mécanique" :</strong> souvent 1 à 2 séances suffisent pour casser le geste.</li>
              <li><strong>Le fumeur "émotionnel" :</strong> nécessite parfois 2 à 3 séances pour gérer l'anxiété sous-jacente.</li>
            </ul>

            <h2 className="text-2xl font-title text-white mt-8 mb-4">Mon approche au cabinet</h2>
            <p className="mb-6">
              Je privilégie souvent un accompagnement sur 2 séances. La première permet de poser les fondations, d'affaiblir considérablement l'envie et souvent de déclencher l'arrêt. La deuxième séance, quelques semaines plus tard, permet de consolider cet état, de gérer les petites "envies réflexes" restantes et de s'assurer d'un arrêt durable sans prise de poids ni nervosité.
            </p>

            <div className="bg-white/5 border border-accent-primary/20 rounded-2xl p-8 mt-12 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Prêt à vous libérer du tabac ?</h3>
              <p className="mb-6 text-sm text-text-main">
                Découvrez plus en détail ma méthode pour l'arrêt du tabac et prenons le temps d'échanger sur votre situation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/specialites/arret-tabac" className="btn btn-secondary !py-2 !px-6 text-sm">
                  Ma méthode Arrêt du Tabac
                </Link>
                <Link to="/#contact" className="btn btn-primary !py-2 !px-6 text-sm">
                  Prendre RDV à Paris
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </article>
    </div>
  );
}
