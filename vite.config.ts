import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // IPv6 wildcard address, same as '0.0.0.0'
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean) as any[], // ✅ Fixes type inference error if needed
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
