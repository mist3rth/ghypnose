import { useState, useRef, useEffect } from 'react';
import LinearReveal from '../ui/LinearReveal';
import { Volume2, VolumeX } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export function PractitionerVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Synchronise l'état "mute" avec l'élément vidéo
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Optimisation de performance web : Intersection Observer
  // Ne joue la vidéo que lorsqu'elle est visible à l'écran pour économiser le GPU
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // La vidéo entre dans le viewport, on lance la lecture
            videoElement.play().catch(() => {
              // Ignore silencieusement les erreurs liées aux politiques autoplay des navigateurs
            });
          } else {
            // La vidéo sort du viewport, on la met en pause
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.1, // Déclenche dès que 10% de la vidéo est visible
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-[clamp(4rem,10vw,8rem)] px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 space-y-6">
            <FadeIn>
              <h2 className="text-[clamp(1.8rem,5vw,2.5rem)] font-title font-semibold leading-tight flex flex-col items-center lg:items-start">
                <LinearReveal
                  Text="Une écoute attentive,"
                  as="div"
                  delay={0.2}
                  className="text-white flex flex-wrap justify-center lg:justify-start"
                  colorClass="text-white"
                />
                <LinearReveal
                  Text="une approche sur-mesure."
                  as="div"
                  delay={0.6}
                  className="flex flex-wrap justify-center lg:justify-start"
                  colorClass="bg-gradient-to-br from-white to-accent-primary bg-clip-text text-transparent"
                />
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-text-muted text-lg leading-relaxed">
                Je suis Grégory, hypnothérapeute. Mon rôle n'est pas de vous imposer une méthode, 
                mais de vous accompagner vers vos propres solutions. 
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-text-muted text-lg leading-relaxed">
                À travers cet échange, je vous explique comment nous allons travailler ensemble, 
                avec bienveillance, sécurité et respect de votre rythme.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] md:max-w-[380px] aspect-[9/16] rounded-3xl overflow-hidden glass-card shadow-2xl shadow-accent-primary/5 group border border-white/5 bg-background-alt">
              <video 
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                loop 
                playsInline 
                muted
                preload="metadata"
              >
                <source src="/videos/output.webm" type="video/webm" />
                <source src="/videos/output.mp4" type="video/mp4" />
              </video>
              
              {/* Overlay Gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-alt/90 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Sound Toggle Button */}
              <button 
                onClick={toggleMute}
                className="absolute bottom-6 right-6 p-4 rounded-full bg-background-alt/80 backdrop-blur-md border border-white/10 text-white hover:bg-accent-primary hover:border-accent-primary/50 transition-all duration-300 z-10 hover:scale-110 cursor-pointer"
                aria-label={isMuted ? "Activer le son" : "Désactiver le son"}
              >
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </button>

              {/* Tooltip hint */}
              {isMuted && (
                <div className="absolute bottom-9 right-[5.5rem] text-sm font-medium text-white/90 bg-background-alt/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Activer le son
                </div>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
