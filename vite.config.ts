import path from "path"
// CORREÇÃO: Importar o plugin correto que está no seu package.json
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  // Esta linha é para o deploy no GitHub Pages
  base: "/Os-8-temperamentos/", 
  
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
