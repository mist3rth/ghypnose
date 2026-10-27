import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Vais-je perdre le contrôle ou dormir pendant la séance ?",
    answer: "Absolument pas. L'hypnose Ericksonienne n'a rien à voir avec l'hypnose de spectacle. C'est un état de conscience modifié doux et naturel où vous restez pleinement conscient de ce qui se passe. Vous entendez ma voix, vous pouvez interagir, bouger et même décider d'interrompre le processus à tout instant. Vous conservez votre libre arbitre total tout au long de la séance."
  },
  {
    question: "Combien de séances sont nécessaires pour obtenir des résultats durables ?",
    answer: "L'hypnose fait partie des thérapies brèves orientées solutions. La grande majorité des personnes constatent des déclics et des changements notables dès la première séance. En moyenne, un accompagnement complet nécessite entre 2 et 4 séances espacées de 2 à 3 semaines. Pour le sevrage tabagique, 1 à 2 séances ciblées suffisent généralement."
  },
  {
    question: "L'hypnose fonctionne-t-elle sur tout le monde ?",
    answer: "Oui, car l'état hypnotique est un processus physiologique naturel que votre cerveau expérimente chaque jour (lorsque vous êtes plongé dans un bon livre, absorbé par un film ou 'dans la lune' sur un trajet familier). Il ne s'agit pas d'un don mais d'une prédisposition universelle. Mon rôle de praticien certifié est d'adapter précisément les suggestions à votre personnalité et à votre sensibilité."
  },
  {
    question: "Les séances sont-elles remboursées par la Sécurité Sociale ou ma mutuelle ?",
    answer: "L'hypnothérapie n'est pas prise en charge par la Sécurité Sociale. En revanche, un très grand nombre de mutuelles et complémentaires santé proposent un remboursement partiel ou total sous forme de forfait annuel 'médecines douces'. Une note d'honoraires officielle avec numéro SIRET vous est systématiquement remise à l'issue de chaque consultation."
  },
  {
    question: "Comment se déroule la première consultation dans vos cabinets parisiens ?",
    answer: "La séance inaugurale dure entre 1h et 1h30. Nous prenons d'abord le temps d'échanger en profondeur sur votre situation, vos blocages et vos attentes précises. Ensuite, nous réalisons une première expérience hypnotique personnalisée pour amorcer le travail inconscient. Enfin, nous débriefons ensemble et je vous transmets des outils d'auto-hypnose simples à reproduire chez vous."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Première question ouverte par défaut pour inciter à la lecture

  const toggleQuestion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-[clamp(4rem,10vw,8rem)] px-4 relative overflow-hidden">
      {/* Halo décoratif en arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-[850px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-title font-semibold text-white mb-4 tracking-tight">
            Foire Aux <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-text-muted text-lg max-w-[620px] mx-auto leading-relaxed">
            Tout ce que vous devez savoir avant de débuter votre accompagnement en hypnose Ericksonienne à Paris.
          </p>
        </div>

        {/* Liste accordéon FAQ accessible */}
        <div className="flex flex-col gap-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div 
                key={index}
                className={`rounded-2xl transition-all duration-300 border backdrop-blur-[20px] ${
                  isOpen 
                    ? 'bg-white/[0.07] border-accent-primary/40 shadow-[0_10px_30px_rgba(212,175,55,0.06)]' 
                    : 'bg-white/5 border-white/10 hover:border-accent-primary/25 hover:bg-white/[0.06]'
                }`}
              >
                <button
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-2xl gap-4"
                >
                  <span className="text-lg sm:text-xl font-medium text-white tracking-wide">
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full border shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? 'border-accent-primary/40 bg-accent-primary/15 text-accent-primary rotate-180' 
                      : 'border-white/10 text-white/60 bg-white/5'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-text-muted text-[0.98rem] leading-relaxed border-t border-white/5 mt-1">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bloc de réassurance finale sous la FAQ */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-[16px] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg font-semibold mb-1">Vous avez une question plus spécifique ?</h3>
            <p className="text-text-muted text-sm">Je suis à votre disposition pour échanger sur vos besoins et vos objectifs.</p>
          </div>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-accent-primary text-text-dark font-medium px-6 py-3 rounded-full text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all whitespace-nowrap shrink-0"
          >
            Prendre contact <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
