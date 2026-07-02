export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-8 px-4 relative overflow-hidden">
      <div className="max-w-[800px] z-10 text-center">
        <h1 className="sr-only">Hypnose Ericksonienne à Paris | Grégory Fitoussi</h1>
        <p className="text-[clamp(2rem,8vw,5rem)] leading-[1.1] mb-7 bg-gradient-to-br from-white to-accent-primary bg-clip-text text-transparent font-title font-semibold">
          Libérez votre potentiel et reprenez le contrôle de votre vie
        </p>
        <p className="text-[1.1rem] sm:text-[1.4rem] text-white mb-12 font-medium drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] tracking-wide">
          - Grégory Fitoussi -<br/>
          Un accompagnement sur-mesure et bienveillant pour gérer votre stress, vous libérer de vos blocages et retrouver votre équilibre intérieur.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16">
          <a href="#contact" className="btn btn-primary">Réserver ma séance</a>
          <a href="#services" className="btn btn-secondary">Voir mes accompagnements</a>
        </div>

      </div>
      
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <video id="hero-video" autoPlay loop muted playsInline poster="/images/hero-fallback.webp" className="w-full h-full object-cover">
          <source src="/videos/video.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
}
