import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import imgTechnicien from '../../assets/diplometechnicien458x462.webp';
import imgPrat from '../../assets/diplomeprat458x462.webp';
import imgConv from '../../assets/diplomeconversationnelle458x462.webp';
import imgPsycho from '../../assets/diplomepsychopathologie458x462.webp';
import imgNeuro from '../../assets/diplomeneurosciences458x462.webp';
import imgReflexo from '../../assets/diplomereflexologieplantaire458x462.webp';

const diplomas = [
  { id: 1, title: 'Technicien en Hypnose Ericksonienne', school: 'A.R.C.H.E', img: imgTechnicien },
  { id: 2, title: 'Praticien en Hypnose Ericksonienne', school: 'A.R.C.H.E', img: imgPrat },
  { id: 3, title: 'Praticien en Hypnose Conversationnelle', school: 'A.R.C.H.E', img: imgConv },
  { id: 4, title: 'Psychopathologie', school: 'A.R.C.H.E', img: imgPsycho },
  { id: 5, title: 'Neurosciences', school: 'A.R.C.H.E', img: imgNeuro },
  { id: 6, title: 'Réflexologie Plantaire', school: 'Centre Cabinet Léger', img: imgReflexo },
];

export function DiplomasTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Suivre le scroll dans ce composant
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Commence quand le haut du composant est au milieu de l'écran
    // Finit quand le bas du composant est au milieu de l'écran
    offset: ["start center", "end center"]
  });

  // La hauteur de la ligne dépend directement du scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative mt-16 mb-8 max-w-4xl mx-auto py-8">
      {/* Ligne verticale lumineuse centrale */}
      <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full transform md:-translate-x-1/2 overflow-hidden">
        <motion.div 
          className="w-full bg-accent-primary shadow-[0_0_15px_var(--color-accent-primary)]"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="space-y-16">
        {diplomas.map((diploma, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={diploma.id}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              {/* Point lumineux sur la ligne */}
              <motion.div 
                className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-accent-secondary transform -translate-x-[6px] md:-translate-x-1/2 shadow-[0_0_15px_var(--color-accent-secondary)] z-10 border-2 border-[#0a0a1a]" 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              
              {/* Contenu : Image */}
              <div className={`w-full pl-12 md:pl-0 md:w-1/2 flex ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className={`relative group w-full max-w-[320px] rounded-2xl overflow-hidden border border-white/10 glass-panel p-2 shadow-xl ${isEven ? 'md:ml-12' : 'md:mr-12'}`}>
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src={diploma.img} 
                      alt={diploma.title} 
                      className="w-full h-auto object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500 ease-out saturate-50 group-hover:saturate-100" 
                      loading="lazy" 
                    />
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-accent-primary/50 transition-colors duration-300 pointer-events-none" />
                </div>
              </div>

              {/* Contenu : Texte */}
              <div className={`w-full pl-12 md:pl-0 md:w-1/2 flex flex-col justify-center ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                <h4 className="text-xl md:text-2xl font-title text-white font-semibold mb-2 leading-snug">{diploma.title}</h4>
                <p className="text-accent-primary font-medium tracking-wide uppercase text-xs md:text-sm">{diploma.school}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
