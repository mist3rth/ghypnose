import { FadeIn } from '../ui/FadeIn';

import parallaxImg from '../../assets/parralax.webp';

export function ParallaxBreak() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Fixed Attachment for Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${parallaxImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b14]/90 via-[#050b14]/20 to-[#050b14]/90"></div>
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] font-title text-white font-medium leading-[1.3] mb-8 text-shadow-lg">
            Vous avez tout essayé ? Cherché partout ? Même demandé à Chat GPT ?
            <br className="my-2" />
            Et si la réponse se trouvait déjà en vous-même ??
          </h2>
          <a href="#contact" className="btn btn-primary shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            Commencer mon accompagnement
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
