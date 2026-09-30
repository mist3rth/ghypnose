import { FadeIn } from '../ui/FadeIn';
import LinearReveal from '../ui/LinearReveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const specialties = [
  {
    title: "Arrêt du Tabac",
    desc: "Sevrage tabagique par l'hypnose, sans stress et sans prise de poids.",
    image: "/images/hypnose_tabac.jpg",
    link: "/specialites/arret-tabac",
  },
  {
    title: "Stress & Anxiété",
    desc: "Gestion du stress au travail, angoisses et prévention du burn-out.",
    image: "/images/hypnose_stress.jpg",
    link: "/specialites/stress-anxiete",
  },
  {
    title: "Troubles du Sommeil",
    desc: "Apaiser les angoisses nocturnes et retrouver un sommeil réparateur.",
    image: "/images/hypnose_sommeil.jpg",
    link: "/specialites/troubles-sommeil",
  },
  {
    title: "Confiance en soi",
    desc: "Vaincre la timidité, s'affirmer et gérer son hypersensibilité.",
    image: "/images/hypnose_confiance.jpg",
    link: "/specialites/confiance-en-soi",
  }
];

export function Specialties() {
  return (
    <section id="specialites" className="py-[clamp(4rem,10vw,8rem)] px-4 relative overflow-hidden bg-background-alt">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn direction="up">
          <LinearReveal
            Text="Domaines d'intervention"
            as="h2"
            delay={0.2}
            className="text-[clamp(1.8rem,6vw,3rem)] mb-4 text-center font-title font-semibold flex flex-wrap justify-center"
            colorClass="text-white"
          />
          <p className="text-center text-text-muted mb-16 max-w-2xl mx-auto text-lg">
            Des accompagnements ciblés pour répondre à vos problématiques spécifiques.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((spec, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
              <Link 
                to={spec.link}
                className="glass-card flex flex-col p-3 group h-full hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-primary/5 hover:border-accent-primary/30 transition-all duration-500 ease-out"
              >
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <img 
                    src={spec.image} 
                    alt={spec.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    width="400"
                    height="300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/90 via-transparent to-transparent pointer-events-none"></div>
                </div>
                <div className="px-3 flex flex-col flex-1">
                  <h3 className="text-xl text-white font-title font-semibold mb-3">{spec.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed flex-1 mb-6">{spec.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-accent-primary font-medium text-sm group-hover:gap-3 transition-all duration-500 ease-out pb-2">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
