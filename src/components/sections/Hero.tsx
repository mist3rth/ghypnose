import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-8 px-4 relative overflow-hidden">
      <div className="max-w-[800px] z-10 text-center">
        <h1 className="sr-only">Hypnose Ericksonienne à Paris | Grégory Fitoussi</h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(2rem,8vw,5rem)] leading-[1.1] mb-7 bg-gradient-to-br from-white to-accent-primary bg-clip-text text-transparent font-title font-semibold"
        >
          Et si nous tentions de découvrir vos Mécanismes Intérieurs ?
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[1.1rem] sm:text-[1.4rem] text-white mb-12 font-medium drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] tracking-wide"
        >
          - Grégory Fitoussi -<br/>
          Un accompagnement sur-mesure et bienveillant pour gérer votre stress, vous libérer de vos blocages et retrouver votre équilibre intérieur.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16"
        >
          <a href="#contact" className="btn btn-primary">Réserver ma séance</a>
          <a href="#services" className="btn btn-secondary">Voir mes accompagnements</a>
        </motion.div>

      </div>
      
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <video id="hero-video" autoPlay loop muted playsInline poster="/images/hero-fallback.webp" className="w-full h-full object-cover">
          <source src="/videos/video.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
}
