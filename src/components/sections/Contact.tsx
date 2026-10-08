import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    civility: '',
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

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation JS stricte pour pallier aux bugs d'autocomplete des navigateurs
    // Validation JS stricte pour le téléphone (au moins 10 chiffres)
    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10 && !formData.phone.startsWith('+')) {
      alert("Le format du téléphone est invalide. Au moins 10 chiffres sont attendus (ex: 06 12 34 56 78).");
      return;
    } else if (formData.phone.startsWith('+') && digitsOnly.length < 11) {
      alert("Le format du téléphone international est invalide (ex: +33 6 12 34 56 78).");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      alert("Le format de l'email est invalide.");
      return;
    }

    // Logic for form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const inputClasses = "w-full bg-white/5 border border-white/15 rounded-2xl px-5 py-4 text-white text-base transition-all focus:bg-white/10 focus:border-accent-secondary focus:outline-none focus:shadow-[0_0_15px_rgba(6,182,212,0.15)]";

  return (
    <section id="contact" className="py-[clamp(4rem,10vw,8rem)] px-4">
      <div className="max-w-[700px] mx-auto">
        <div className="bg-white/5 backdrop-blur-[24px] border border-accent-primary/15 rounded-3xl p-6 md:p-12 overflow-hidden">
          <h2 className="text-[clamp(1.8rem,6vw,3rem)] mb-4 text-center bg-gradient-to-br from-white to-accent-primary bg-clip-text text-transparent font-title font-semibold">
            Contactez moi
          </h2>
          
          <div className="text-center mb-10 text-text-muted leading-[1.8]">
            <p className="mb-4">
              <strong>Cabinets :</strong><br />
              27 Boulevard Magenta, 75010 Paris<br />
              24 Rue Geoffroy-Saint-Hilaire, 75005 Paris
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-2">
              <a href="tel:+33698060008" className="flex items-center gap-2 text-accent-primary hover:underline font-medium">
                <Phone className="w-4 h-4" />
                +(33) 6 98 06 00 08
              </a>
              <span className="hidden sm:inline text-white/20">|</span>
              <a href="mailto:Contact@ghypnose.fr" className="flex items-center gap-2 text-accent-primary hover:underline font-medium">
                <Mail className="w-4 h-4" />
                Contact@ghypnose.fr
              </a>
            </div>
          </div>

          {!isSubmitted ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
            <div className="flex justify-between text-sm text-text-muted mb-2 font-medium px-1">
              <span>Étape {step} sur 3</span>
              <span className="text-accent-secondary">{step === 1 ? "Le motif" : step === 2 ? "Votre message" : "Vos coordonnées"}</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                initial={{ width: "33%" }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative min-h-[380px] flex flex-col">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6 flex-1"
                >
                  <label htmlFor="subject" className="text-xl font-semibold text-white mb-2 block">Quel est le motif de votre consultation ?</label>
                  <div>
                    <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className={inputClasses}>
                      <option value="" disabled>Choisissez un motif dans la liste...</option>
                      <option value="stress" className="bg-[#050b14] text-white">Stress & Anxiété</option>
                      <option value="tabac" className="bg-[#050b14] text-white">Arrêt Tabac</option>
                      <option value="confiance" className="bg-[#050b14] text-white">Confiance en soi</option>
                      <option value="autre" className="bg-[#050b14] text-white">Autre demande</option>
                    </select>
                  </div>
                  
                  <div className="mt-auto pt-6 flex justify-end">
                    <button 
                      type="button" 
                      onClick={nextStep}
                      disabled={!formData.subject}
                      className="bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold py-3 px-8 rounded-full disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:-translate-y-1 transition-all"
                    >
                      Continuer
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6 flex-1"
                >
                  <label htmlFor="message" className="text-xl font-semibold text-white mb-2 block">Comment puis-je vous aider ?</label>
                  <div className="flex-1 flex flex-col">
                    <textarea 
                      id="message"
                      name="message" 
                      rows={6} 
                      required 
                      placeholder="Décrivez brièvement votre situation ou votre objectif. N'hésitez pas, je suis là pour vous écouter..." 
                      value={formData.message} 
                      onChange={handleChange} 
                      className={`${inputClasses} flex-1 resize-none`}
                    ></textarea>
                  </div>
                  
                  <div className="mt-auto pt-6 flex justify-between">
                    <button 
                      type="button" 
                      onClick={prevStep}
                      className="border border-white/20 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/5 cursor-pointer transition-all"
                    >
                      Retour
                    </button>
                    <button 
                      type="button" 
                      onClick={nextStep}
                      disabled={!formData.message.trim()}
                      className="bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold py-3 px-8 rounded-full disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:-translate-y-1 transition-all"
                    >
                      Continuer
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6 flex-1"
                >
                  <h3 className="text-xl font-semibold text-white mb-2 block">Presque terminé ! Vos coordonnées</h3>
                  
                  <div className="flex gap-6">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="civility" value="Mme" checked={formData.civility === 'Mme'} onChange={handleChange} required className="w-5 h-5 accent-accent-primary" />
                      <span className="text-text-main group-hover:text-white transition-colors">Mme</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="civility" value="M." checked={formData.civility === 'M.'} onChange={handleChange} required className="w-5 h-5 accent-accent-primary" />
                      <span className="text-text-main group-hover:text-white transition-colors">M.</span>
                    </label>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col">
                      <label htmlFor="lastname" className="sr-only">Votre nom</label>
                      <input id="lastname" type="text" name="lastname" required autoComplete="family-name" placeholder="Votre nom" value={formData.lastname} onChange={handleChange} className={inputClasses} />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label htmlFor="firstname" className="sr-only">Votre prénom</label>
                      <input id="firstname" type="text" name="firstname" required autoComplete="given-name" placeholder="Votre prénom" value={formData.firstname} onChange={handleChange} className={inputClasses} />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col">
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input id="email" type="email" name="email" required autoComplete="email" placeholder="Email" pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" title="Veuillez entrer une adresse email valide" value={formData.email} onChange={handleChange} className={inputClasses} />
                      <span className="text-[0.75rem] text-white/50 ml-2 mt-1.5 block">Exemple : jean.dupont@email.com</span>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label htmlFor="phone" className="sr-only">Téléphone</label>
                      <input id="phone" type="tel" name="phone" required autoComplete="tel" placeholder="Téléphone" minLength={10} title="Format attendu : au moins 10 chiffres (ex: 06 12 34 56 78)" value={formData.phone} onChange={handleChange} className={inputClasses} />
                      <span className="text-[0.75rem] text-white/50 ml-2 mt-1.5 block">Exemple : 06 12 34 56 78 (10 chiffres)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mt-2">
                    <input type="checkbox" id="rgpdConsent" name="rgpdConsent" required checked={formData.rgpdConsent} onChange={handleChange} className="mt-1 cursor-pointer w-5 h-5 accent-accent-primary shrink-0 rounded" />
                    <label htmlFor="rgpdConsent" className="text-[0.85rem] text-text-muted leading-relaxed font-normal cursor-pointer">
                      J'accepte que ces informations soient exploitées dans le cadre de ma demande. <a href="/rgpd" className="text-accent-secondary hover:underline" target="_blank" rel="noopener noreferrer">Politique de confidentialité</a>.
                    </label>
                  </div>
                  
                  <div className="mt-auto pt-6 flex justify-between">
                    <button 
                      type="button" 
                      onClick={prevStep}
                      className="border border-white/20 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/5 cursor-pointer transition-all"
                    >
                      Retour
                    </button>
                    <button 
                      type="submit" 
                      className="bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold py-3 px-8 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,175,55,0.5)] transition-all"
                    >
                      Envoyer ma demande
                    </button>
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </form>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center py-8 min-h-[380px] justify-center"
            >
              <div className="w-20 h-20 bg-accent-primary/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-accent-primary" />
              </div>
              <h3 className="text-2xl font-title font-semibold text-white mb-3">Demande envoyée avec succès !</h3>
              <p className="text-text-muted mb-8 max-w-md leading-relaxed">
                Merci <strong>{formData.firstname}</strong> pour votre message. Je vous recontacterai très prochainement.
              </p>
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setFormData({
                    civility: '', firstname: '', lastname: '', email: '', phone: '', subject: '', message: '', rgpdConsent: false
                  });
                }}
                className="border border-accent-primary/50 text-white font-medium py-3 px-8 rounded-full hover:bg-accent-primary/10 transition-colors cursor-pointer"
              >
                Nouvelle demande
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
