import LinearReveal from '../ui/LinearReveal';

export function Approach() {
  return (
    <section id="approach" className="py-[clamp(4rem,10vw,8rem)] px-4">
      <div className="max-w-[1200px] mx-auto">
        <LinearReveal
          Text="Pourquoi choisir l'Hypnose ?"
          as="h2"
          delay={0.2}
          className="text-[clamp(1.8rem,6vw,3rem)] mb-8 text-center font-title font-semibold flex flex-wrap justify-center"
          colorClass="bg-gradient-to-br from-white to-accent-primary bg-clip-text text-transparent"
        />
        
        <p className="text-center text-text-muted mb-12 max-w-[800px] mx-auto">
          Plusieurs champs d'intervention forment la spécificité du praticien en hypnose d'accompagnement ou hypnologue.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <article className="glass-card flex flex-col p-8 group">
            <h3 className="text-[1.6rem] mb-4 text-accent-primary font-title font-semibold">Pédagogie & Hygiène Cognitive</h3>
            <p className="flex-1 text-text-muted text-[0.95rem]">
              Apprendre à mieux gérer vos ressentis, émotions et autres fonctionnements inconscients. 
              Ce travail permet d'agir au niveau comportemental et des représentations mentales, 
              lié à la recherche de bien-être et de sens.
            </p>
          </article>

          <article className="glass-card flex flex-col p-8 group">
            <h3 className="text-[1.6rem] mb-4 text-accent-primary font-title font-semibold">Évolution & Adaptabilité</h3>
            <p className="flex-1 text-text-muted text-[0.95rem]">
              Développer de nouvelles ressources, s'adapter face aux changements contextuels, 
              et dépasser les résistances dans le cadre d'une évolution personnelle, professionnelle, 
              familiale ou de recherche de performance.
            </p>
          </article>

          <article className="glass-card flex flex-col p-8 group">
            <h3 className="text-[1.6rem] mb-4 text-accent-primary font-title font-semibold">Exploration de la Subjectivité</h3>
            <p className="flex-1 text-text-muted text-[0.95rem]">
              Par le travail sur les états de conscience, un accompagnement à l'introspection 
              et à la connaissance de soi pour avancer dans votre construction personnelle et identitaire.
            </p>
          </article>

          <article className="glass-card flex flex-col p-8 group">
            <h3 className="text-[1.6rem] mb-4 text-accent-primary font-title font-semibold">Éthique & Valeurs</h3>
            <p className="flex-1 text-text-muted text-[0.95rem]">
              Mise en évidence des systèmes de valeurs individuels et collectifs, 
              résolution des conflits potentiels pour une meilleure intégration 
              sociale, familiale et professionnelle.
            </p>
          </article>

        </div>

        <div className="mt-12 bg-red-500/5 border border-red-500/20 p-6 md:p-8 rounded-[1.5rem] backdrop-blur-xl">
          <h3 className="text-red-300/90 mb-4 font-semibold text-lg">Déontologie</h3>
          <p className="text-[0.95rem] text-text-muted leading-relaxed">
            Je ne suis pas médecin, psychologue ou psychiatre, mais hypnologue. Je pratique une démarche d'accompagnement et de développement personnel centrée sur l'utilisation de l'hypnose, dans le respect de vos objectifs et de vos valeurs. L'hypnose telle que je la pratique n'est donc ni un acte médical ni une psychothérapie et ne se présente en aucun cas comme une alternative ou un obstacle aux soins délivrés par les professionnels de santé. En cas de suivi par un psychiatre, un aval du psychiatre est obligatoire pour tout accompagnement en hypnose. Sur certaines thématiques un accompagnement médical sera nécessaire en parallèle ou en amont.
          </p>
        </div>
      </div>
    </section>
  );
}
