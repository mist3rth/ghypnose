import { Helmet } from 'react-helmet-async';
import { FadeIn } from '../../ui/FadeIn';
import { ArrowRight, CheckCircle2, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ArretTabac() {
  return (
    <main className="pt-32 pb-20 px-4 min-h-screen relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <Helmet>
        <title>Sevrage tabagique par l'hypnose Paris 10 | Sans prise de poids</title>
        <meta name="description" content="Arrêter de fumer définitivement avec l'hypnose à Paris 10. Méthode douce et personnalisée pour un sevrage tabagique efficace, sans stress et sans prise de poids." />
        <link rel="canonical" href="https://www.ghypnose.fr/specialites/arret-tabac" />
      </Helmet>

      <div className="max-w-[800px] mx-auto">
        <FadeIn>
          <Link to="/#specialites" className="text-accent-secondary hover:underline mb-8 inline-block">&larr; Retour à l'accueil</Link>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-title font-semibold mb-6 text-white">
            Sevrage Tabagique par l'<span className="text-accent-primary">Hypnose à Paris</span>
          </h1>
          <p className="text-xl text-text-muted mb-12 leading-relaxed">
            Vous avez décidé d'arrêter de fumer mais vous redoutez le manque, le stress ou la prise de poids ? L'hypnose Ericksonienne est l'une des méthodes les plus efficaces pour vous libérer de la cigarette en douceur et durablement.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-title font-semibold text-white mb-6 flex items-center gap-3">
              <Leaf className="text-accent-secondary w-6 h-6" /> Pourquoi choisir l'hypnose pour arrêter de fumer ?
            </h2>
            <p className="text-text-muted mb-6 leading-relaxed">
              La dépendance au tabac n'est pas seulement physique, elle est avant tout psychologique et comportementale. Fumer est souvent associé à des moments précis (pause café, stress au travail, fin de repas). L'hypnose agit sur cet ancrage profond.
            </p>
            <ul className="space-y-4">
              {[
                "Désamorcer le besoin compulsif de fumer",
                "Gestion du stress lié à l'arrêt du tabac",
                "Prévenir la compensation alimentaire (sans prise de poids)",
                "Renforcer votre motivation et votre volonté"
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
          <h2 className="text-2xl font-title font-semibold text-white mb-6">Comment se déroule la séance ?</h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Nous commençons par un échange approfondi pour comprendre votre rapport au tabac : depuis quand fumez-vous ? Dans quelles situations ? Quelles sont vos motivations pour arrêter ? 
            Ensuite, la phase sous hypnose vise à modifier vos automatismes inconscients pour transformer votre identité de "fumeur" en "non-fumeur".
          </p>
          
          <div className="bg-gradient-to-br from-accent-primary/10 to-transparent p-8 rounded-2xl border border-accent-primary/20 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Prêt à retrouver votre liberté ?</h3>
            <p className="text-text-muted mb-6">Prenez rendez-vous dans mon cabinet à Paris 10ème pour entamer votre démarche vers une vie sans tabac.</p>
            <Link to="/#contact" className="inline-flex items-center gap-2 bg-accent-primary text-white font-semibold py-3 px-8 rounded-full hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)] transition-all">
              Prendre rendez-vous <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
