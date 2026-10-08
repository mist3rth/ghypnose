import { Helmet } from 'react-helmet-async';
import { FadeIn } from '../../ui/FadeIn';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: "Combien de séances d'hypnose faut-il vraiment pour arrêter de fumer ?",
    slug: "combien-seances-hypnose-arret-tabac",
    excerpt: "Découvrez pourquoi il n'existe pas de \"baguette magique\" en une seule séance et comment le protocole s'adapte à votre profil de fumeur.",
    image: "/images/articles/tabac.jpg",
    category: "Arrêt du Tabac"
  },
  {
    title: "Réveils nocturnes à 3h du matin : comment l'hypnose aide à retrouver des nuits complètes",
    slug: "reveil-nocturne-3h-matin-hypnose",
    excerpt: "Le réveil en plein milieu de la nuit est souvent lié à l'anxiété. Comprenez ce mécanisme et comment l'hypnose permet de se rendormir sereinement.",
    image: "/images/articles/sommeil.jpg",
    category: "Troubles du Sommeil"
  },
  {
    title: "Crises d'angoisse : comment l'hypnose permet de reprendre le contrôle de son corps",
    slug: "crise-angoisse-hypnose",
    excerpt: "La crise d'angoisse est une alarme déréglée du cerveau. Découvrez comment l'hypnose aide à baisser le niveau d'alerte et gérer les signes avant-coureurs.",
    image: "/images/articles/stress.jpg",
    category: "Stress & Anxiété"
  },
  {
    title: "Syndrome de l'imposteur au travail : (re)trouver confiance en soi grâce à l'hypnose",
    slug: "syndrome-imposteur-hypnose",
    excerpt: "Le sentiment de ne pas mériter sa place touche de nombreux actifs. L'hypnose permet de déconstruire ces croyances limitantes forgées dans le passé.",
    image: "/images/articles/confiance.jpg",
    category: "Confiance en soi"
  }
];

export function BlogIndex() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <Helmet>
        <title>Le Journal | GHypnose Paris</title>
        <meta name="description" content="Découvrez tous nos articles et conseils sur l'hypnose : arrêt du tabac, gestion du stress, confiance en soi et troubles du sommeil." />
      </Helmet>

      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-title font-semibold mb-6">Le Journal</h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Retrouvez mes conseils et explications pour mieux comprendre comment l'hypnose peut vous accompagner au quotidien.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {articles.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 0.1}>
              <Link 
                to={`/articles/${article.slug}`}
                className="group block h-full bg-[#0a0a1a]/40 backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-accent-primary/30 hover:bg-[#0a0a1a]/60 hover:-translate-y-1"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-background-alt/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-accent-secondary">
                      {article.category}
                    </span>
                  </div>
                  <img 
                    src={article.image} 
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent opacity-80" />
                </div>
                
                <div className="p-8">
                  <h2 className="text-2xl font-title font-semibold mb-4 text-white group-hover:text-accent-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-accent-secondary group-hover:text-accent-primary transition-colors">
                    Lire l'article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
