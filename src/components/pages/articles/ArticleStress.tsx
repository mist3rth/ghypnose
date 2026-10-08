import { Helmet } from 'react-helmet-async';
import { FadeIn } from '../../ui/FadeIn';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

export function ArticleStress() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <Helmet>
        <title>Crises d'angoisse et hypnose : reprendre le contrôle | GHypnose</title>
        <meta name="description" content="Découvrez comment l'hypnose permet de calmer l'anxiété naturellement et de gérer les crises d'angoisse en travaillant sur l'inconscient." />
      </Helmet>

      <article className="max-w-[800px] mx-auto">
        <Link to="/articles" className="inline-flex items-center gap-2 text-accent-secondary hover:text-accent-primary transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Retour au journal
        </Link>

        <FadeIn>
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm font-medium text-accent-secondary mb-6">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Stress & Anxiété</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Mis à jour récemment</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-title font-semibold mb-6 leading-tight text-white">
              Crises d'angoisse : comment l'hypnose permet de reprendre le contrôle de son corps
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              Le cœur qui s'emballe, la respiration qui se coupe, la sensation vertigineuse de perdre pied... La crise d'angoisse est une expérience terrifiante. L'hypnose offre des outils concrets pour y faire face.
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-white/5">
            <img src="/images/articles/stress.jpg" alt="Centre lumineux abstrait" className="w-full h-full object-cover" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="prose prose-invert prose-lg max-w-none text-text-muted">
            <h2 className="text-2xl font-title text-white mt-8 mb-4">Une alarme interne déréglée</h2>
            <p className="mb-6">
              L'anxiété n'est pas une maladie en soi, c'est un système de défense naturel de notre cerveau face au danger. Le problème survient quand cette "alarme incendie" se déclenche alors qu'il n'y a pas de feu. Le corps réagit de manière disproportionnée face à un stress perçu, plongeant la personne dans un état d'alerte maximale.
            </p>

            <h2 className="text-2xl font-title text-white mt-8 mb-4">La peur de la peur</h2>
            <p className="mb-6">
              Ce qui maintient les crises d'angoisse, c'est souvent la peur qu'elles reviennent. Cette anticipation anxieuse ("et si je faisais une crise dans le métro ?") crée un terrain favorable à la prochaine crise. C'est ce cercle vicieux qu'il faut briser.
            </p>

            <h2 className="text-2xl font-title text-white mt-8 mb-4">Le rôle de l'hypnothérapie</h2>
            <p className="mb-6">
              L'objectif n'est pas de "supprimer" le stress (qui est une émotion utile), mais de rééquilibrer le système nerveux. En séance d'hypnose :
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Nous dialoguons avec la part inconsciente qui déclenche ces alarmes pour la rassurer.</li>
              <li>Nous créons un "bouton d'arrêt d'urgence" : un ancrage (physique ou respiratoire) que vous pourrez utiliser dès les premiers signes d'une crise pour la désamorcer.</li>
              <li>Nous traitons les traumas ou peurs sous-jacentes qui nourrissent cette anxiété de fond.</li>
            </ul>

            <div className="bg-white/5 border border-accent-primary/20 rounded-2xl p-8 mt-12 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Besoin de retrouver votre sérénité ?</h3>
              <p className="mb-6 text-sm text-text-main">
                Découvrez comment je peux vous aider à retrouver votre calme intérieur et à vous libérer de l'anxiété.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/specialites/stress-anxiete" className="btn btn-secondary !py-2 !px-6 text-sm">
                  Voir l'approche Anxiété
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
