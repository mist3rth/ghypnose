export function Testimonials() {
  return (
    <section id="testimonials" className="py-[clamp(4rem,10vw,8rem)] px-4 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[clamp(1.8rem,6vw,3rem)] mb-12 text-center bg-gradient-to-br from-white to-accent-primary bg-clip-text text-transparent font-title font-semibold">
          Ils ont franchi le pas
        </h2>
        
        <div className="glass-card max-w-[800px] mx-auto text-center p-8 md:p-12">
          <div className="testimonial-item">
            <p className="font-title text-[2rem] italic mb-8 leading-[1.3] text-white/90">
              "Une expérience transformative. Jean-Marc a su m'écouter avec
              une rare finesse. Je me sens libérée."
            </p>
            <p className="text-accent-secondary font-semibold tracking-wide">
              Sophie M., Accompagnement Stress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
