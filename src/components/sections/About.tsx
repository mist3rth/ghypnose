import { motion, useScroll, useTransform } from 'framer-motion';
import LinearReveal from '../ui/LinearReveal';
import { useRef } from 'react';
import { DiplomasTimeline } from '../ui/DiplomasTimeline';

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Effet parallax léger : déplacement vertical fluide selon le scroll
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="about" className="py-[clamp(4rem,10vw,8rem)] px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
        <div ref={ref} className="w-full md:w-2/5 flex justify-center perspective-1000">
          <motion.img
            style={{ y }}
            src="/images/praticien.webp"
            alt="Portrait de Grégory Fitoussi, praticien en hypnose ericksonienne"
            loading="lazy"
            decoding="async"
            width="300"
            height="400"
            className="rounded-[2rem] shadow-[0_25px_50px_rgba(0,0,0,0.5)] saturate-80 w-full max-w-[400px] border border-accent-primary/15"
          />
        </div>
        
        <div className="w-full md:w-3/5 text-center md:text-left">
          <LinearReveal
            Text="À propos de GHypnose"
            as="h2"
            delay={0.2}
            className="text-[60px] leading-[1.1] mb-6 font-title font-semibold flex flex-wrap justify-center md:justify-start"
            colorClass="bg-gradient-to-br from-white to-accent-primary bg-clip-text text-transparent"
          />
          <h3 className="text-accent-primary font-title text-2xl mb-4">
            Grégory Fitoussi - Praticien en hypnose Ericksonienne & Réflexologie Plantaire
          </h3>
          
          <p className="mb-8">
            Après une vie professionnelle multiple, à la recherche de ma vocation, je ne me sentais jamais à ma place ! Le point commun entre tous les métiers que j'ai pu exercer, est le contact avec l'humain. 
            J'ai pu, à travers toutes ces rencontres, de gens de tous ages et de tout milieu socio-culturel, constater des maux dus à la vie de tous les jours (certains résonnant avec les miens). 
            Ces maux sur lesquels nous ne savons pas forcément mettre des mots. Parce qu'on ne nous l'apprend pas à l'école.
          </p>
          
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 text-center border-t border-white/10 pt-8">
            <div>
              <span className="block text-3xl md:text-[2rem] font-bold text-accent-primary mb-1">100%</span>
              <p className="text-sm text-text-muted">À votre écoute</p>
            </div>
            <div>
              <span className="block text-3xl md:text-[2rem] font-bold text-accent-primary mb-1">95%</span>
              <p className="text-sm text-text-muted">Orienté solutions</p>
            </div>
            <div>
              <span className="block text-3xl md:text-[2rem] font-bold text-accent-primary mb-1">0%</span>
              <p className="text-sm text-text-muted">Projections</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-24">
        <h3 className="text-[clamp(2rem,5vw,3rem)] text-center mb-4 bg-gradient-to-br from-white to-accent-primary bg-clip-text text-transparent font-title font-semibold">
          Mes Formations
        </h3>
        <p className="text-center text-text-muted mb-12 max-w-2xl mx-auto">
          Un apprentissage continu et certifié pour vous accompagner avec les outils les plus adaptés et sécuritaires.
        </p>
        <DiplomasTimeline />
      </div>
    </section>
  );
}
