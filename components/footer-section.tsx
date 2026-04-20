"use client"

import { Code2, Github, Globe, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-glow">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight">CodeInsight</span>
            </Link>
            <p className="text-foreground/50 text-sm max-w-xs">
              La plataforma de análisis de código definitiva. Potenciando a la próxima generación de desarrolladores con IA.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Mail].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center hover:text-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Producto</h4>
            <ul className="space-y-4 text-sm text-foreground/50">
              <li><a href="#" className="hover:text-primary transition-colors">Funciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Seguridad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Recursos</h4>
            <ul className="space-y-4 text-sm text-foreground/50">
              <li><a href="#" className="hover:text-primary transition-colors">Documentación</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Soporte</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Comunidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-4 text-sm text-foreground/50">
              <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Licencias</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-foreground/30 uppercase tracking-[0.2em]">
            © 2025 CodeInsight. Diseñado por <span className="text-white font-bold">MIGUXLD</span> & ANTIGRAVITY.
          </p>
          <div className="flex items-center gap-6 text-[10px] text-foreground/30 uppercase tracking-[0.2em]">
             <Link href="https://miguxld-portafolio.netlify.app/" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                <Globe className="w-3 h-3" />
                Portafolio
             </Link>
             <Link href="https://github.com/miguxld" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                <Github className="w-3 h-3" />
                GitHub
             </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
