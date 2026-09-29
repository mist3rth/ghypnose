import { Helmet } from 'react-helmet-async';
import { FadeIn } from '../../ui/FadeIn';
import { ArrowRight, CheckCircle2, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StressAnxiete() {
  return (
    <main className="pt-32 pb-20 px-4 min-h-screen relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent-secondary/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <Helmet>
        <title>Hypnothérapeute gestion du stress au travail Paris 10</title>
        <meta name="description" content="Gérer son stress, ses angoisses ou un burn-out grâce à l'hypnose à Paris. Retrouvez sérénité et équilibre émotionnel avec un accompagnement sur-mesure." />
        <link rel="canonical" href="https://www.ghypnose.fr/specialites/stress-anxiete" />
      </Helmet>

      <div className="max-w-[800px] mx-auto">
        <FadeIn>
          <Link to="/#specialites" className="text-accent-secondary hover:underline mb-8 inline-block">&larr; Retour à l'accueil</Link>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-title font-semibold mb-6 text-white">
            Gestion du <span className="text-accent-secondary">Stress & Anxiété</span> par l'Hypnose
          </h1>
          <p className="text-xl text-text-muted mb-12 leading-relaxed">
            Charge mentale, pression professionnelle, angoisses inexpliquées ou crise de panique : le stress peut rapidement devenir envahissant. L'hypnose vous aide à apaiser votre système nerveux et à reprendre le contrôle de vos émotions.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-white/5 backdrop-blur-[24px] border border-accent-secondary/20 rounded-3xl p-8 mb-12">
            <h2 className="text-2xl font-title font-semibold text-white mb-6 flex items-center gap-3">
              <Brain className="text-accent-secondary w-6 h-6" /> Agir sur les causes profondes
            </h2>
            <p className="text-text-muted mb-6 leading-relaxed">
              Plutôt que de simplement masquer les symptômes, l'hypnose Ericksonienne permet d'aller dialoguer avec votre inconscient pour désactiver les schémas de peur et d'hyper-vigilance qui génèrent ces états de stress.
            </p>
            <ul className="space-y-4">
              {[
                "Soulager l'anxiété généralisée et les crises d'angoisse",
                "Prévention et accompagnement du burn-out professionnel",
                "Apprendre à lâcher prise et à gérer la charge mentale",
                "Se libérer des ruminations mentales et retrouver la sérénité"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-accent-secondary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-title font-semibold text-white mb-6">Un espace de parole et de relâchement</h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Au sein de mon cabinet à Paris 10, je vous propose un cadre bienveillant. La séance allie souvent une phase d'hypnose conversationnelle pour verbaliser vos ressentis, suivie d'un travail hypnotique profond pour relâcher les tensions physiques et émotionnelles.
          </p>
          
          <div className="bg-gradient-to-br from-accent-secondary/10 to-transparent p-8 rounded-2xl border border-accent-secondary/20 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Besoin de retrouver votre calme intérieur ?</h3>
            <p className="text-text-muted mb-6">Prenez rendez-vous pour commencer à vous libérer du poids de l'anxiété.</p>
            <Link to="/#contact" className="inline-flex items-center gap-2 bg-accent-secondary text-white font-semibold py-3 px-8 rounded-full hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,107,107,0.4)] transition-all">
              Prendre rendez-vous <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
