import { ViteReactSSG } from 'vite-react-ssg'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/playfair-display/700.css'
import '@fontsource/outfit/600.css'
import '@fontsource/outfit/700.css'
import './index.css'
import { routes } from './App.tsx'

export const createRoot = ViteReactSSG(
  { routes, basename: '/' },
  () => {
    // Optional setup
  }
)
