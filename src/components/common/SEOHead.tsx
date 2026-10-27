import { Head } from 'vite-react-ssg';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  robots?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function SEOHead({
  title,
  description,
  canonical,
  robots = 'index, follow',
  ogType = 'website',
  ogImage = 'https://www.ghypnose.fr/images/og-image.png',
  schema,
}: SEOHeadProps) {
  return (
    <>
      <Head>
      <html lang="fr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robots} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="GHypnose" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      </Head>

      {/* Structured Data (Schema.org JSON-LD) - Émis directement dans le DOM pour compatibilité SSG parfaite */}
      {schema && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
        />
      )}
    </>
  );
}
