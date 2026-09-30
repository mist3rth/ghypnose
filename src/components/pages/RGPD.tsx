import { Helmet } from 'react-helmet-async';

export function RGPD() {
  return (
    <div className="pt-[150px] min-h-[80vh] px-4 pb-20">
      <Helmet>
        <title>Politique de Confidentialité (RGPD) | GHypnose</title>
        <meta name="description" content="Découvrez notre politique de confidentialité et la gestion de vos données personnelles sur le site GHypnose." />
        <link rel="canonical" href="https://www.ghypnose.fr/rgpd" />
      </Helmet>
      <section className="max-w-[800px] mx-auto glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10 animate-fade-in">
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-title text-center mb-12 bg-gradient-to-br from-white to-accent-primary bg-clip-text text-transparent">
          Politique de Confidentialité (RGPD)
        </h1>
        
        <div className="text-text-muted leading-[1.8] space-y-8">
          <div>
            <h2 className="text-accent-primary font-title text-2xl mb-4">1. Collecte des informations</h2>
            <p>
              Nous recueillons des informations lorsque vous utilisez notre formulaire de contact. Les informations recueillies incluent votre nom, prénom, adresse e-mail, numéro de téléphone, ainsi que le motif de votre demande.
            </p>
          </div>
          
          <div>
            <h2 className="text-accent-primary font-title text-2xl mb-4">2. Utilisation des informations</h2>
            <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Vous contacter par téléphone ou par e-mail afin de répondre à votre demande.</li>
              <li>Améliorer le service client et vos besoins de prise en charge.</li>
              <li>Gérer la prise de rendez-vous pour nos séances.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-accent-primary font-title text-2xl mb-4">3. Confidentialité</h2>
            <p>
              Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement.
              <br /><br />
              Nous sommes soumis en tant que praticien au secret professionnel vis-à-vis des informations de nos clients (article 226-13, 226-14 du Code Pénal).
            </p>
          </div>

          <div>
            <h2 className="text-accent-primary font-title text-2xl mb-4">4. Divulgation à des tiers</h2>
            <p>
              Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Les données transitent via des systèmes sécurisés à des fins de stockage des demandes entrantes (avec chiffrement).
            </p>
          </div>

          <div>
            <h2 className="text-accent-primary font-title text-2xl mb-4">5. Protection des informations</h2>
            <p>
              Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Seul le gérant (Grégory Fitoussi) a accès aux informations saisies.
            </p>
          </div>

          <div>
            <h2 className="text-accent-primary font-title text-2xl mb-4">6. Vos droits</h2>
            <p>
              Conformément à la loi « Informatique et Libertés » et au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données à caractère personnel : droit d'accès, droit de rectification, droit à l'effacement, et droit à la limitation du traitement.
              <br /><br />
              Pour toute demande relative à vos données, nous vous invitons à nous contacter à : <a href="mailto:gregfitoussi@gmail.com" className="text-accent-primary underline hover:text-white transition-all">gregfitoussi@gmail.com</a>.
            </p>
          </div>
          
          <div>
            <h2 className="text-accent-primary font-title text-2xl mb-4">7. Consentement</h2>
            <p>En utilisant notre formulaire, vous consentez à notre politique de confidentialité.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
