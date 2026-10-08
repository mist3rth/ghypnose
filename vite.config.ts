import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const stripImagePreloadCrossoriginPlugin = () => {
  return {
    name: 'strip-image-preload-crossorigin',
    transformIndexHtml(html: string) {
      // Find all <link rel="preload" as="image" ...> and remove crossorigin
      return html.replace(/<link rel="preload" as="image"([^>]+)crossorigin(?:="[^"]*")?([^>]*)>/g, '<link rel="preload" as="image"$1$2>');
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), stripImagePreloadCrossoriginPlugin()],
  build: {
    modulePreload: false,
  },
  ssgOptions: {
    formatting: 'minify',
    onPageRendered: (_route: string, html: string) => {
      // vite-react-ssg injects preloads, so we might need to clean them up here
      return html
        // Remove module preloads to avoid the 14 unused warnings
        .replace(/<link rel="modulepreload"[^>]*>/g, '')
        // Remove crossorigin from image preloads to fix request credentials mismatch
        .replace(/<link rel="preload" as="image"([^>]+)crossorigin(?:="[^"]*")?([^>]*)>/g, '<link rel="preload" as="image"$1$2>');
    }
  }
} as any)
