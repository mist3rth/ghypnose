import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    rgpdConsent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission
    console.log('Form submitted:', formData);
    alert('Formulaire envoyé !');
  };

  const inputClasses = "w-full bg-white/5 border border-white/15 rounded-2xl px-5 py-4 text-white text-base transition-all focus:bg-white/10 focus:border-accent-secondary focus:outline-none focus:shadow-[0_0_15px_rgba(6,182,212,0.15)]";
  const labelClasses = "block text-[0.95rem] font-medium text-text-main mb-2";

  return (
    <section id="contact" className="py-[clamp(4rem,10vw,8rem)] px-4">
      <div className="max-w-[700px] mx-auto">
        
        <div className="glass-card p-6 md:p-12">
          <h2 className="text-[clamp(1.8rem,6vw,3rem)] mb-6 text-center bg-gradient-to-br from-white to-accent-primary bg-clip-text text-transparent font-title font-semibold">
            Contactez moi
          </h2>
          
          <div className="text-center mb-10 text-text-muted leading-[1.8]">
            <p><strong>Adresse :</strong> 27, Boulevard Magenta 75010 Paris</p>
            <p><strong>Téléphone :</strong> <a href="tel:+33698060008" className="text-accent-primary hover:underline font-medium">+(33) 6 98 06 00 08</a></p>
            <p><strong>Email :</strong> <a href="mailto:gregfitoussi@gmail.com" className="text-accent-primary hover:underline font-medium">gregfitoussi@gmail.com</a></p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="lastname" className={labelClasses}>Nom</label>
                <input type="text" id="lastname" name="lastname" required placeholder="Votre nom" value={formData.lastname} onChange={handleChange} className={inputClasses} />
              </div>
              <div className="flex-1">
                <label htmlFor="firstname" className={labelClasses}>Prénom</label>
                <input type="text" id="firstname" name="firstname" required placeholder="Votre prénom" value={formData.firstname} onChange={handleChange} className={inputClasses} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>Email</label>
              <input type="email" id="email" name="email" required placeholder="votre.email@exemple.com" pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" value={formData.email} onChange={handleChange} className={inputClasses} />
            </div>

            <div>
              <label htmlFor="phone" className={labelClasses}>Téléphone</label>
              <input type="tel" id="phone" name="phone" placeholder="Ex: 06 12 34 56 78" pattern="^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$" value={formData.phone} onChange={handleChange} className={inputClasses} />
            </div>

            <div>
              <label htmlFor="subject" className={labelClasses}>Objet</label>
              <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className={inputClasses}>
                <option value="" disabled>Choisissez un motif</option>
                <option value="stress" className="bg-[#050b14] text-white">Stress & Anxiété</option>
                <option value="tabac" className="bg-[#050b14] text-white">Arrêt Tabac</option>
                <option value="confiance" className="bg-[#050b14] text-white">Confiance en soi</option>
                <option value="autre" className="bg-[#050b14] text-white">Autre demande</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>Message</label>
              <textarea id="message" name="message" rows={5} required placeholder="Décrivez brièvement votre situation ou votre objectif. N'hésitez pas, je suis là pour vous écouter..." value={formData.message} onChange={handleChange} className={inputClasses}></textarea>
            </div>

            <div className="flex items-start gap-4 mt-4 mb-2">
              <input type="checkbox" id="rgpdConsent" name="rgpdConsent" required checked={formData.rgpdConsent} onChange={handleChange} className="mt-1 cursor-pointer w-5 h-5" />
              <label htmlFor="rgpdConsent" className="text-[0.85rem] text-text-muted leading-relaxed font-normal cursor-pointer">
                En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de ma demande de contact et de la relation commerciale qui peut en découler. Pour en savoir plus, consultez la <a href="/rgpd" className="text-accent-secondary hover:underline">politique de confidentialité</a>.
              </label>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold text-[1.1rem] py-4 px-6 rounded-full mt-4 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,175,55,0.5)] transition-all duration-400">
              Envoyer ma demande
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
