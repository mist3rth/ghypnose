import { Helmet } from 'react-helmet-async';

export function Mentions() {
  return (
    <div className="pt-[150px] min-h-[80vh] px-4 pb-20">
      <Helmet>
        <title>Mentions Légales | G Hypnose</title>
        <meta name="description" content="Consultez les mentions légales du site G Hypnose - Grégory Fitoussi, praticien en Hypnose Ericksonienne à Paris." />
        <link rel="canonical" href="https://www.ghypnose.fr/mentions-legales" />
      </Helmet>
      <section className="max-w-[800px] mx-auto glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10 animate-fade-in">
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-title text-center mb-12 bg-gradient-to-br from-white to-accent-primary bg-clip-text text-transparent">
          Mentions Légales
        </h1>
        
        <div className="text-text-muted leading-[1.8] space-y-8">
          <div>
            <h2 className="text-accent-primary font-title text-2xl mb-4">1. Éditeur du site</h2>
            <p>
              <strong>G Hypnose - Grégory Fitoussi</strong><br />
              27, Boulevard Magenta<br />
              75010 Paris<br />
              Téléphone : <a href="tel:+33698060008" className="text-accent-primary underline hover:text-white transition-all">+(33) 6 98 06 00 08</a><br />
              Email : <a href="mailto:gregfitoussi@gmail.com" className="text-accent-primary underline hover:text-white transition-all">gregfitoussi@gmail.com</a>
            </p>
          </div>
          
          <div>
            <h2 className="text-accent-primary font-title text-2xl mb-4">2. Statut</h2>
            <p>
              <strong>Forme juridique :</strong> Micro entreprise<br />
              <strong>SIRET :</strong> 538611831 00016<br />
              <strong>Directeur de la publication :</strong> Grégory Fitoussi
            </p>
          </div>

          <div>
            <h2 className="text-accent-primary font-title text-2xl mb-4">3. Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              <strong>Nom de l'hébergeur :</strong> OVH<br />
              <strong>Adresse :</strong> OVH - 2 rue Kellermann 59100 Roubaix (France)<br />
              <strong>Site web :</strong> <a href="http://www.ghypnose.fr/" className="text-accent-primary underline hover:text-white transition-all">http://www.ghypnose.fr/</a>
            </p>
          </div>

          <div>
            <h2 className="text-accent-primary font-title text-2xl mb-4">4. Propriété intellectuelle</h2>
            <p>
              Le site internet ainsi que l'ensemble des droits y afférents sont la propriété exclusive de Grégory Fitoussi. Toute reproduction, intégrale ou partielle, des images, textes, fichiers ou bases de données est systématiquement soumise à l'autorisation du propriétaire.
            </p>
          </div>

          <div>
            <h2 className="text-accent-primary font-title text-2xl mb-4">5. Avertissement médical</h2>
            <p>
              L'hypnose pratiquée par Grégory Fitoussi est non médicale, elle s'inscrit dans une démarche d'accompagnement et de développement personnel. Elle ne se substitue en aucun cas à un avis juridique, médical ou psychiatrique. En cas de pathologie avérée, un suivi par un professionnel de la santé est primordial.
            </p>
          </div>

          <div>
            <h2 className="text-accent-primary font-title text-2xl mb-4">6. Assurance Professionnelle</h2>
            <p>
              Assurance Responsabilité Civile Professionnelle : <strong>AXA</strong><br />
              Contrat n° : <strong>10389249304</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
