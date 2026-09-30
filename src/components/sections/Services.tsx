import { FadeIn } from '../ui/FadeIn';
import LinearReveal from '../ui/LinearReveal';
import { Gift, ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-[clamp(4rem,10vw,8rem)] px-4 relative overflow-hidden">
      {/* Decorative background glow for the whole section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-[1200px] mx-auto">
        <FadeIn direction="up">
          <LinearReveal
            Text="Mes Accompagnements & Offres"
            as="h2"
            delay={0.2}
            className="text-[clamp(1.8rem,6vw,3rem)] mb-4 text-center font-title font-semibold flex flex-wrap justify-center"
            colorClass="bg-gradient-to-br from-white to-accent-primary bg-clip-text text-transparent"
          />
          <p className="text-center text-text-muted mb-16 max-w-2xl mx-auto text-lg">
            Des séances sur-mesure pour vous accompagner vers le changement, à votre rythme.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <FadeIn delay={0.1} className="h-full">
            <article className="glass-card relative flex flex-col p-8 group h-full hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(235,161,92,0.3)] transition-all duration-500 overflow-hidden border-accent-primary/20 hover:border-accent-primary/50">
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-accent-primary/10 rounded-full blur-3xl group-hover:bg-accent-primary/20 transition-colors duration-500"></div>

              
              <h3 className="text-[1.6rem] mb-4 text-white font-title font-semibold group-hover:text-accent-primary transition-colors">Adulte</h3>
              <ul className="text-text-muted leading-[1.6] pl-[1.2rem] flex-1 list-disc text-[0.95rem] space-y-2 mb-8">
                <li>De 45 minutes à 1 heure 30</li>
                <li>Grosse détermination d'objectif lors de la première séance</li>
                <li>Initiation à l'hypnose</li>
                <li>Accompagnements</li>
                <li>Autonomisation</li>
              </ul>
              
              <div className="mt-auto flex items-center justify-between gap-4 pt-6 border-t border-white/5">
                <span className="font-title text-xl font-bold text-accent-primary">90€</span>
                <a href="/#contact" className="group/btn flex items-center gap-2 py-2.5 px-6 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary font-medium hover:bg-accent-primary hover:text-white transition-all duration-300">
                  Réserver <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <article className="glass-card relative flex flex-col p-8 group h-full hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(235,161,92,0.3)] transition-all duration-500 overflow-hidden border-accent-primary/20 hover:border-accent-primary/50">
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-accent-primary/10 rounded-full blur-3xl group-hover:bg-accent-primary/20 transition-colors duration-500"></div>

              
              <h3 className="text-[1.6rem] mb-4 text-white font-title font-semibold group-hover:text-accent-primary transition-colors">Enfant & Ado</h3>
              <ul className="text-text-muted leading-[1.6] pl-[1.2rem] flex-1 list-disc text-[0.95rem] space-y-2 mb-8">
                <li>Une séance avec parent(s) peut être nécessaire</li>
                <li>L'enfant et l'ado sont en constant mouvement (en construction !)</li>
                <li>Aucune obligation de résultat</li>
              </ul>
              
              <div className="mt-auto flex items-center justify-between gap-4 pt-6 border-t border-white/5">
                <span className="font-title text-xl font-bold text-accent-primary">70€</span>
                <a href="/#contact" className="group/btn flex items-center gap-2 py-2.5 px-6 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary font-medium hover:bg-accent-primary hover:text-white transition-all duration-300">
                  Réserver <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.3} className="h-full">
            <article className="glass-card relative flex flex-col p-8 group h-full hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(235,161,92,0.3)] transition-all duration-500 overflow-hidden border-accent-primary/20 hover:border-accent-primary/50">
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-accent-primary/10 rounded-full blur-3xl group-hover:bg-accent-primary/20 transition-colors duration-500"></div>

              
              <h3 className="text-[1.6rem] mb-4 text-white font-title font-semibold group-hover:text-accent-primary transition-colors">Réflexologie</h3>
              <ul className="text-text-muted leading-[1.6] pl-[1.2rem] flex-1 list-disc text-[0.95rem] space-y-2 mb-8">
                <li>Protocole complet de réflexologie plantaire</li>
                <li>Environ 55 min à 1h30</li>
                <li><em>Tarif ajusté si combiné avec hypnose</em></li>
              </ul>
              
              <div className="mt-auto flex items-center justify-between gap-4 pt-6 border-t border-white/5">
                <span className="font-title text-xl font-bold text-accent-primary">70€</span>
                <a href="/#contact" className="group/btn flex items-center gap-2 py-2.5 px-6 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary font-medium hover:bg-accent-primary hover:text-white transition-all duration-300">
                  Réserver <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          </FadeIn>

        </div>

        {/* Ligne des bons cadeaux */}
        <div className="mt-20">
          <FadeIn direction="up">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-[1px] bg-gradient-to-r from-transparent to-accent-secondary/50 w-24 md:w-48"></div>
              <h3 className="text-2xl font-title text-accent-secondary font-semibold flex max-[430px]:flex-col items-center gap-2 min-[431px]:gap-3 text-center">
                <Gift className="w-6 h-6" /> <span>Faire Plaisir</span>
              </h3>
              <div className="h-[1px] bg-gradient-to-l from-transparent to-accent-secondary/50 w-24 md:w-48"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            <FadeIn delay={0.4} className="h-full">
              <article className="glass-card relative flex flex-col p-8 group h-full hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(255,107,107,0.2)] transition-all duration-500 overflow-hidden border-accent-secondary/20 hover:border-accent-secondary/50">
                <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-accent-secondary/10 rounded-full blur-3xl group-hover:bg-accent-secondary/20 transition-colors duration-500"></div>
                
                <h3 className="text-[1.6rem] mb-4 text-white font-title font-semibold group-hover:text-accent-secondary transition-colors">Bon • Hypnose</h3>
                <ul className="text-text-muted leading-[1.6] pl-[1.2rem] flex-1 list-disc text-[0.95rem] space-y-2 mb-8">
                  <li>Offrez une séance d'initiation ou de détermination d'objectif</li>
                  <li>De 45 minutes à 1 heure</li>
                  <li>Un moyen original d'accompagner vos proches</li>
                </ul>
                
                <div className="mt-auto flex items-center justify-between gap-4 pt-6 border-t border-white/5">
                  <span className="font-title text-xl font-bold text-accent-secondary">70€</span>
                  <a href="/#contact" className="group/btn flex items-center gap-2 py-2.5 px-6 rounded-full bg-accent-secondary/10 border border-accent-secondary/30 text-accent-secondary font-medium hover:bg-accent-secondary hover:text-white transition-all duration-300">
                    Offrir <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            </FadeIn>

            <FadeIn delay={0.5} className="h-full">
              <article className="glass-card relative flex flex-col p-8 group h-full hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(255,107,107,0.2)] transition-all duration-500 overflow-hidden border-accent-secondary/20 hover:border-accent-secondary/50">
                <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-accent-secondary/10 rounded-full blur-3xl group-hover:bg-accent-secondary/20 transition-colors duration-500"></div>
                
                <h3 className="text-[1.6rem] mb-4 text-white font-title font-semibold group-hover:text-accent-secondary transition-colors">Bon • Réflexologie</h3>
                <ul className="text-text-muted leading-[1.6] pl-[1.2rem] flex-1 list-disc text-[0.95rem] space-y-2 mb-8">
                  <li>Offrez un moment de détente et de rééquilibrage profond</li>
                  <li>Protocole complet personnalisé</li>
                  <li>Idéal pour soulager le stress et les tensions</li>
                </ul>
                
                <div className="mt-auto flex items-center justify-between gap-4 pt-6 border-t border-white/5">
                  <span className="font-title text-xl font-bold text-accent-secondary">70€</span>
                  <a href="/#contact" className="group/btn flex items-center gap-2 py-2.5 px-6 rounded-full bg-accent-secondary/10 border border-accent-secondary/30 text-accent-secondary font-medium hover:bg-accent-secondary hover:text-white transition-all duration-300">
                    Offrir <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
}
