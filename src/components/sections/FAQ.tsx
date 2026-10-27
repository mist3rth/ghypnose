import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { FAQ_DATA } from '../../data/faqData';

export function FAQ() {
  // La première question est ouverte par défaut pour inciter à la lecture et lever immédiatement les freins
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

        {/* Liste accordéon FAQ fluide et accessible */}
        <div className="flex flex-col gap-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div 
                key={index}
                className={`rounded-2xl transition-colors duration-200 border backdrop-blur-[20px] ${
                  isOpen 
                    ? 'bg-white/[0.07] border-accent-primary/40 shadow-[0_10px_30px_rgba(212,175,55,0.06)]' 
                    : 'bg-white/5 border-white/10 hover:border-accent-primary/25 hover:bg-white/[0.06]'
                }`}
              >
                <button
                  id={questionId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-2xl gap-4 select-none"
                >
                  <span className="text-lg sm:text-xl font-medium text-white tracking-wide">
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full border shrink-0 transition-transform duration-300 ${
                    isOpen 
                      ? 'border-accent-primary/40 bg-accent-primary/15 text-accent-primary rotate-180' 
                      : 'border-white/10 text-white/60 bg-white/5'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    <div className={`px-6 sm:px-8 pb-6 pt-1 text-text-muted text-[0.98rem] leading-relaxed border-t border-white/5 mt-1 transition-opacity duration-200 ${
                      isOpen ? 'opacity-100 delay-75' : 'opacity-0 pointer-events-none'
                    }`}>
                      {item.answer}
                    </div>
                  </div>
                </div>
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
