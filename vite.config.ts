import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base path configuration
  base: mode === 'production' ? '/swift-wedding-memories/' : '/',
  
  // Development server configuration
  server: {
    host: "::", // Allows connections via IPv6
    port: 8080, // Port for local development
    strictPort: true, // Don't try other ports if 8080 is taken
  },
  
  // Plugins
  plugins: [
    react(), // React support with SWC compiler
    // Component tagger only enabled in development
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  
  // Path aliases for cleaner imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Build configuration
  build: {
    outDir: 'dist', // Output directory
    sourcemap: mode === 'development', // Generate sourcemaps in development
  },
}));