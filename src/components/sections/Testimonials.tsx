import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Concernant des dettes de sommeil probablement multicausales Grégory ne peut pas encore m’accompagner en hypnose car toutes les pistes médicales n’ont pas encore toutes été explorées mais une séance d’initiation m’a permis de découvrir ce que l’hypnose pourrait m’apporter dans la compréhension de mes problèmes. J’ai déjà découvert que j’étais réceptif à l’hypnose",
    author: "Rudy C."
  },
  {
    text: "Praticien rassurant, doté d’une véritable empathie et d’un grand sens de l’écoute, je recommande vivement ses séances qui m’ont permis de travailler sur des insécurités profondément ancrées en moi ! Merci encore Greg !",
    author: "Maxime L."
  },
  {
    text: "Une approche toute en douceur et très professionnelle. J'appréhendais ma première séance d'hypnose, mais Grégory a su me mettre en confiance immédiatement. Ses séances m'ont aidée à apaiser mes angoisses quotidiennes. Je recommande les yeux fermés !",
    author: "Sophie M."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-[clamp(4rem,10vw,8rem)] px-4 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-[clamp(1.8rem,6vw,3rem)] mb-16 bg-gradient-to-br from-white to-accent-primary bg-clip-text text-transparent font-title font-semibold">
          Ils ont franchi le pas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card flex flex-col justify-between p-8"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-accent-primary/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="font-title text-[1.05rem] italic leading-[1.6] text-white/90">
                  "{testimonial.text}"
                </p>
              </div>
              <p className="text-accent-secondary font-semibold tracking-wide border-t border-white/10 pt-4">
                {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
