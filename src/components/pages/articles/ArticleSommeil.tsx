import { Helmet } from 'react-helmet-async';
import { FadeIn } from '../../ui/FadeIn';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

export function ArticleSommeil() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <Helmet>
        <title>Réveils nocturnes à 3h du matin et hypnose | GHypnose</title>
        <meta name="description" content="Découvrez pourquoi vous vous réveillez à 3h du matin et comment l'hypnothérapie aide à traiter l'insomnie et retrouver des nuits complètes." />
      </Helmet>

      <article className="max-w-[800px] mx-auto">
        <Link to="/articles" className="inline-flex items-center gap-2 text-accent-secondary hover:text-accent-primary transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Retour au journal
        </Link>

        <FadeIn>
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm font-medium text-accent-secondary mb-6">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Troubles du Sommeil</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Mis à jour récemment</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-title font-semibold mb-6 leading-tight text-white">
              Réveils nocturnes à 3h du matin : comment l'hypnose aide à retrouver des nuits complètes
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              Il est 3h15. Vous ouvrez les yeux, impossible de vous rendormir. Le cerveau tourne à plein régime. Pourquoi cette heure précise et que peut faire l'hypnose ?
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-white/5">
            <img src="/images/articles/sommeil.jpg" alt="Vagues apaisantes" className="w-full h-full object-cover" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="prose prose-invert prose-lg max-w-none text-text-muted">
            <h2 className="text-2xl font-title text-white mt-8 mb-4">Le mythe de l'heure fatidique</h2>
            <p className="mb-6">
              Se réveiller vers 3 ou 4 heures du matin est extrêmement fréquent. Biologiquement, c'est le moment où notre température corporelle change et où les cycles de sommeil profond laissent place au sommeil paradoxal. C'est un réveil physiologique normal, mais l'anxiété nous empêche de replonger dans le sommeil.
            </p>

            <h2 className="text-2xl font-title text-white mt-8 mb-4">L'angoisse de ne pas dormir</h2>
            <p className="mb-6">
              Le véritable problème n'est pas le réveil, c'est ce qui se passe juste après : la "rumination". Le cerveau s'active, on commence à penser à la journée du lendemain, au fait qu'on va être fatigué, ce qui fait grimper le niveau de cortisol (l'hormone du stress). Résultat ? Le sommeil s'enfuit.
            </p>

            <h2 className="text-2xl font-title text-white mt-8 mb-4">Comment l'hypnose reprogramme vos nuits</h2>
            <p className="mb-6">
              L'hypnose travaille sur ce lâcher-prise fondamental. En séance, nous allons :
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Baisser le bruit mental :</strong> apprendre à votre inconscient à ne pas s'accrocher aux pensées nocturnes.</li>
              <li><strong>Créer un ancrage d'apaisement :</strong> une technique que vous pourrez utiliser seul dans votre lit pour glisser vers le sommeil.</li>
              <li><strong>Déprogrammer la peur de l'insomnie :</strong> briser le cercle vicieux de "j'ai peur de ne pas dormir donc je ne dors pas".</li>
            </ul>

            <div className="bg-white/5 border border-accent-primary/20 rounded-2xl p-8 mt-12 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Retrouvez enfin des nuits réparatrices</h3>
              <p className="mb-6 text-sm text-text-main">
                Découvrez comment je vous accompagne pour retrouver un sommeil naturel et profond, sans médicaments.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/specialites/troubles-sommeil" className="btn btn-secondary !py-2 !px-6 text-sm">
                  Voir l'approche Sommeil
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
