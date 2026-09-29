export function Marquee() {
  const content = (
    <div className="flex items-center gap-16 shrink-0 pr-16">
       <div className="flex items-center gap-4">
          <img src="/images/logo-arche.png" alt="ARCHE Formation" width="40" height="40" className="h-10 w-auto object-contain invert brightness-0" />
          <span className="text-white font-medium text-[1rem] md:text-[1.1rem] whitespace-nowrap">formé à l'ARCHE Formation</span>
       </div>
       <div className="w-1.5 h-1.5 rounded-full bg-accent-primary"></div>
       <div className="flex items-center gap-4">
          <img src="/images/logo-sdmh.webp" alt="Syndicat des Métiers de l'Hypnose" width="40" height="40" className="h-10 w-auto object-contain invert brightness-0" />
          <span className="text-white font-medium text-[1rem] md:text-[1.1rem] whitespace-nowrap">Membre du Syndicat des Métiers de l'Hypnose</span>
       </div>
       <div className="w-1.5 h-1.5 rounded-full bg-accent-primary"></div>
    </div>
  );

  return (
    <div className="w-full bg-black/40 backdrop-blur-md border-y border-white/5 py-5 overflow-hidden flex relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050b14] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050b14] to-transparent z-10 pointer-events-none"></div>
      
      {/* 
        The marquee animation moves the content to the left by 50% of its width. 
        We duplicate the content so it forms a seamless loop.
      */}
      <div className="flex whitespace-nowrap w-max animate-marquee lg:hover:[animation-play-state:paused]">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}
