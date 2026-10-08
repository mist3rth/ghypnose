import { Helmet } from 'react-helmet-async';
import { FadeIn } from '../../ui/FadeIn';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

export function ArticleConfiance() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <Helmet>
        <title>Syndrome de l'imposteur et hypnose | GHypnose</title>
        <meta name="description" content="Découvrez comment l'hypnose permet de vaincre le syndrome de l'imposteur, déconstruire les croyances limitantes et retrouver confiance en soi." />
      </Helmet>

      <article className="max-w-[800px] mx-auto">
        <Link to="/articles" className="inline-flex items-center gap-2 text-accent-secondary hover:text-accent-primary transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Retour au journal
        </Link>

        <FadeIn>
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm font-medium text-accent-secondary mb-6">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Confiance en soi</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Mis à jour récemment</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-title font-semibold mb-6 leading-tight text-white">
              Syndrome de l'imposteur : (re)trouver sa légitimité grâce à l'hypnose
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              La sensation constante de ne pas être à la hauteur, la peur d'être "démasqué" malgré des succès évidents. Le syndrome de l'imposteur épuise. L'hypnose permet de déconstruire ces croyances tenaces.
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-white/5">
            <img src="/images/articles/confiance.jpg" alt="Formes géométriques dorées" className="w-full h-full object-cover" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="prose prose-invert prose-lg max-w-none text-text-muted">
            <h2 className="text-2xl font-title text-white mt-8 mb-4">Un filtre cognitif déformant</h2>
            <p className="mb-6">
              Les personnes qui souffrent du syndrome de l'imposteur ont tendance à attribuer leurs réussites à la chance, au hasard ou au travail acharné ("j'ai juste eu de la chance", "ils vont se rendre compte que je suis incompétent"). À l'inverse, elles prennent l'entière responsabilité du moindre échec.
            </p>
            
            <p className="mb-6">
              Ce n'est pas un manque de compétence, c'est une <strong>incapacité à internaliser le succès</strong>. C'est un filtre déformant qui se place entre la réalité et la perception que l'on en a.
            </p>

            <h2 className="text-2xl font-title text-white mt-8 mb-4">Les origines de ces croyances limitantes</h2>
            <p className="mb-6">
              Ces schémas de pensée prennent souvent racine très tôt : des parents très exigeants, un échec scolaire marquant, ou la sensation de devoir toujours en faire plus pour être aimé ou accepté. L'inconscient a enregistré cette règle : "Je ne vaux pas assez tel que je suis".
            </p>

            <h2 className="text-2xl font-title text-white mt-8 mb-4">Comment l'hypnose restaure la confiance</h2>
            <p className="mb-6">
              La pensée positive ne suffit pas ("dis-toi que tu es capable !") car le blocage est émotionnel et inconscient. L'hypnose permet de :
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Remonter à l'origine de la croyance :</strong> comprendre quand et pourquoi cette règle s'est mise en place dans votre esprit.</li>
              <li><strong>Mettre à jour le logiciel interne :</strong> libérer les émotions liées au passé pour permettre à l'adulte d'aujourd'hui d'accepter sa propre valeur.</li>
              <li><strong>Ancrer la légitimité :</strong> associer physiquement et mentalement le sentiment de compétence et de calme intérieur.</li>
            </ul>

            <div className="bg-white/5 border border-accent-primary/20 rounded-2xl p-8 mt-12 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Envie de croire enfin en vous ?</h3>
              <p className="mb-6 text-sm text-text-main">
                Découvrez l'accompagnement spécifique pour développer une estime de soi solide et durable.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/specialites/confiance-en-soi" className="btn btn-secondary !py-2 !px-6 text-sm">
                  Voir l'approche Confiance
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
