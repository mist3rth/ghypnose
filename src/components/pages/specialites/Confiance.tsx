import { Helmet } from 'react-helmet-async';
import { FadeIn } from '../../ui/FadeIn';
import { ArrowRight, CheckCircle2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Confiance() {
  return (
    <main className="pt-32 pb-20 px-4 min-h-screen relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent-secondary/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <Helmet>
        <title>Hypnose pour vaincre sa timidité et manque de confiance Paris 10</title>
        <meta name="description" content="Développer sa confiance en soi, vaincre sa timidité ou gérer son hypersensibilité grâce à l'hypnose à Paris. Retrouvez votre plein potentiel." />
        <link rel="canonical" href="https://www.ghypnose.fr/specialites/confiance-en-soi" />
      </Helmet>

      <div className="max-w-[800px] mx-auto">
        <FadeIn>
          <Link to="/#specialites" className="text-accent-secondary hover:underline mb-8 inline-block">&larr; Retour à l'accueil</Link>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-title font-semibold mb-6 text-white">
            Renforcer sa <span className="text-accent-secondary">Confiance en soi</span> par l'Hypnose
          </h1>
          <p className="text-xl text-text-muted mb-12 leading-relaxed">
            Peur du jugement, timidité excessive, syndrome de l'imposteur ou hypersensibilité mal vécue ? Le manque de confiance en soi vous empêche souvent d'avancer. L'hypnose est un levier puissant pour reprogrammer votre discours intérieur.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="glass-card p-8 mb-12 border-accent-secondary/20">
            <h2 className="text-2xl font-title font-semibold text-white mb-6 flex items-center gap-3">
              <Heart className="text-accent-secondary w-6 h-6" /> Retrouver son estime personnelle
            </h2>
            <p className="text-text-muted mb-6 leading-relaxed">
              Le manque de confiance prend souvent racine dans des expériences passées, des croyances limitantes ou des traumatismes. Grâce à l'hypnose Ericksonienne, nous allons travailler à déconstruire ces croyances pour valoriser vos véritables ressources.
            </p>
            <ul className="space-y-4">
              {[
                "Vaincre la timidité et être à l'aise dans ses relations sociales",
                "Se préparer à une prise de parole en public, un examen ou un entretien",
                "Transformer l'hypersensibilité en une force créatrice",
                "Apprendre à s'affirmer et à poser ses limites"
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
          <h2 className="text-2xl font-title font-semibold text-white mb-6">Un accompagnement sur-mesure</h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Chaque problématique de confiance est unique. Je vous accompagne à Paris 10 avec une approche bienveillante, en hypnose conversationnelle ou en profondeur, pour vous permettre de renouer avec vos capacités et votre valeur.
          </p>
          
          <div className="bg-gradient-to-br from-accent-secondary/10 to-transparent p-8 rounded-2xl border border-accent-secondary/20 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Prêt à révéler votre potentiel ?</h3>
            <p className="text-text-muted mb-6">Faites le premier pas vers l'acceptation de soi en prenant rendez-vous.</p>
            <Link to="/#contact" className="inline-flex items-center gap-2 bg-accent-secondary text-white font-semibold py-3 px-8 rounded-full hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,107,107,0.4)] transition-all">
              Prendre rendez-vous <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
