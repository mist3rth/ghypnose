export function Process() {
  return (
    <section id="process" className="py-[clamp(4rem,10vw,8rem)] px-4 bg-white/5">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[clamp(1.8rem,6vw,3rem)] mb-12 text-center bg-gradient-to-br from-white to-accent-primary bg-clip-text text-transparent font-title font-semibold">
          Façon de travailler
        </h2>
        
        <div className="mb-16">
          <h3 className="text-center text-accent-primary mb-8 font-title text-2xl font-semibold">Accompagnement en Hypnose</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="glass-card p-8">
              <span className="text-5xl text-accent-primary font-title leading-none">01</span>
              <h4 className="my-4 font-semibold text-lg text-text-main">Détermination d'objectif</h4>
              <p className="text-text-muted text-[0.95rem]">Beaucoup de questions sur ce qui vous amène, votre vie personnelle, vos objectifs, l'écologie de tout cela.</p>
            </article>
            <article className="glass-card p-8">
              <span className="text-5xl text-accent-primary font-title leading-none">02</span>
              <h4 className="my-4 font-semibold text-lg text-text-main">Séances de travail</h4>
              <p className="text-text-muted text-[0.95rem]">Nous travaillons ensemble sur le ou les symptômes, les origines éventuelles et l'autonomisation si désirée par l'auto-hypnose.</p>
            </article>
            <article className="glass-card p-8">
              <span className="text-5xl text-accent-primary font-title leading-none">03</span>
              <h4 className="my-4 font-semibold text-lg text-text-main">Atteinte des objectifs</h4>
              <p className="text-text-muted text-[0.95rem]">Suivi et consolidation possible, et même dans le cas d'atteinte totale voire dépassement des objectifs, je reste à votre disposition !</p>
            </article>
          </div>
        </div>

        <div>
          <h3 className="text-center text-accent-primary mb-4 font-title text-2xl font-semibold">Réflexologie Plantaire</h3>
          <p className="text-center italic text-text-muted mb-8">"Une mauvaise réflexologie plantaire c'est un bon massage des pieds"</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="glass-card p-8">
              <span className="text-5xl text-accent-primary font-title leading-none">01</span>
              <h4 className="my-4 font-semibold text-lg text-text-main">Prise de Rendez-vous</h4>
              <p className="text-text-muted text-[0.95rem]">Réflexologie Plantaire seule, ou Formule combinée Réflexologie Plantaire et hypnose.</p>
            </article>
            <article className="glass-card p-8">
              <span className="text-5xl text-accent-primary font-title leading-none">02</span>
              <h4 className="my-4 font-semibold text-lg text-text-main">Séance</h4>
              <p className="text-text-muted text-[0.95rem]">Protocole complet d'après la formule choisie.</p>
            </article>
            <article className="glass-card p-8">
              <span className="text-5xl text-accent-primary font-title leading-none">03</span>
              <h4 className="my-4 font-semibold text-lg text-text-main">Après la Séance</h4>
              <p className="text-text-muted text-[0.95rem]">De quelques jours à une semaine pour se rendre compte des bienfaits de la séance.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
