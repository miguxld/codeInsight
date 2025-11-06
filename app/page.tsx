"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code2, Zap, BarChart3, Lock, Globe, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

// MARCA DE AGUA: Landing page creada por MIGUXLD
// Portfolio: https://miguxld-portafolio.netlify.app
// GitHub: https://github.com/miguxld

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isNavSticky, setIsNavSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsNavSticky(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* NAVBAR - Creado por MIGUXLD */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isNavSticky ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-foreground">CodeInsight</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
                Características
              </a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
                Precios
              </a>
              <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition">
                Demo
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Link href="https://miguxld-portafolio.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-xs">
                  Mi Portafolio
                </Button>
              </Link>
              <Button size="sm" className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white hover:opacity-90">
                Comenzar
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Fondo decorativo - Marca de MIGUXLD */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div
              className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-full blur-3xl"
              style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            ></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full">
                <span className="text-sm text-cyan-400 font-medium">Análisis de código con IA</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-foreground">
                Código más inteligente, mejores resultados
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Analiza tu código con inteligencia artificial. Detecta bugs, mejora el rendimiento y escribe código más
                limpio en segundos.
              </p>

              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white hover:opacity-90">
                  Prueba Gratis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Ver Demo
                </Button>
              </div>

              <p className="text-xs text-muted-foreground pt-4">
                {/* Crédito: Landing page creada por MIGUXLD */}
                Hecho por <strong>MIGUXLD</strong> • GitHub: github.com/miguxld
              </p>
            </div>

            <div className="relative h-96">
              <Image
                src="/code-editor-with-ai-analysis-interface.jpg"
                alt="CodeInsight Interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Características Poderosas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para escribir código de calidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="p-6 bg-background border border-border rounded-lg hover:border-cyan-400/50 transition group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Análisis con IA</h3>
              <p className="text-muted-foreground">
                Detecta problemas y optimizaciones usando modelos de inteligencia artificial avanzados.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-background border border-border rounded-lg hover:border-cyan-400/50 transition group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Rendimiento en Tiempo Real</h3>
              <p className="text-muted-foreground">
                Obtén resultados instantáneos mientras escribes. Sin esperas, sin complicaciones.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-background border border-border rounded-lg hover:border-cyan-400/50 transition group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Métricas Detalladas</h3>
              <p className="text-muted-foreground">
                Visualiza tus métricas de código: complejidad, cobertura, deuda técnica y más.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-background border border-border rounded-lg hover:border-cyan-400/50 transition group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Seguridad Garantizada</h3>
              <p className="text-muted-foreground">
                Tu código es tuyo. Encriptación de extremo a extremo y privacidad total.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 bg-background border border-border rounded-lg hover:border-cyan-400/50 transition group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Multi-Lenguaje</h3>
              <p className="text-muted-foreground">
                Soporta JavaScript, Python, TypeScript, Java, C++ y más lenguajes populares.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 bg-background border border-border rounded-lg hover:border-cyan-400/50 transition group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Integración Fácil</h3>
              <p className="text-muted-foreground">
                Conecta con GitHub, VS Code y tus herramientas favoritas en minutos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO SECTION */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Cómo funciona CodeInsight</h2>
              <p className="text-lg text-muted-foreground">
                En tres pasos simples, mejora la calidad de tu código de forma exponencial.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Carga tu código</h3>
                    <p className="text-muted-foreground">Sube tu archivo o pega tu código directamente en el editor.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">IA analiza</h3>
                    <p className="text-muted-foreground">
                      Nuestro modelo de IA analiza tu código en tiempo real buscando issues.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Recibe sugerencias</h3>
                    <p className="text-muted-foreground">
                      Obtén recomendaciones detalladas y aprende mejores prácticas.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white hover:opacity-90 w-full"
              >
                Ver Demo Completa
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="relative h-96">
              <Image src="/code-analysis-workflow-steps-interface.jpg" alt="Cómo funciona" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Precios Simples</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-8 bg-background border border-border rounded-lg hover:border-cyan-400/50 transition">
              <h3 className="text-2xl font-bold text-foreground mb-2">Starter</h3>
              <p className="text-muted-foreground mb-6">Para desarrolladores individuales</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">Gratis</span>
                <span className="text-muted-foreground ml-2">/mes</span>
              </div>
              <ul className="space-y-3 mb-8 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> 10 análisis/mes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> 2 lenguajes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Soporte comunitario
                </li>
              </ul>
              <Button variant="outline" className="w-full bg-transparent">
                Comenzar Gratis
              </Button>
            </div>

            {/* Pro */}
            <div className="p-8 bg-background border-2 border-cyan-400/50 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Pro</h3>
              <p className="text-muted-foreground mb-6">Para equipos en crecimiento</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$29</span>
                <span className="text-muted-foreground ml-2">/mes</span>
              </div>
              <ul className="space-y-3 mb-8 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Análisis ilimitados
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Todos los lenguajes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Soporte prioritario
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Integraciones avanzadas
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white hover:opacity-90">
                Comenzar Pro
              </Button>
            </div>

            {/* Enterprise */}
            <div className="p-8 bg-background border border-border rounded-lg hover:border-cyan-400/50 transition">
              <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-6">Para empresas grandes</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">Personalizado</span>
              </div>
              <ul className="space-y-3 mb-8 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Todo en Pro
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Soporte dedicado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Self-hosted
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> SLA garantizado
                </li>
              </ul>
              <Button variant="outline" className="w-full bg-transparent">
                Contactar Ventas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 rounded-lg p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">¿Listo para mejorar tu código?</h2>
          <p className="text-lg text-muted-foreground mb-8">Únete a miles de desarrolladores que ya usan CodeInsight</p>
          <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white hover:opacity-90">
            Prueba Gratis Ahora
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg text-foreground">CodeInsight</span>
              </div>
              <p className="text-sm text-muted-foreground">Análisis de código con IA</p>
              {/* FOOTER WATERMARK - Hecho por MIGUXLD */}
              <p className="text-xs text-muted-foreground mt-4 border-t border-border pt-4">
                Diseño y desarrollo por <strong>MIGUXLD</strong>
              </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Comunidad</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://github.com/miguxld"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://miguxld-portafolio.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition"
                  >
                    Portafolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Documentación
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground text-center sm:text-left">
                © 2025 CodeInsight. Todos los derechos reservados.
              </p>
              <p className="text-xs text-muted-foreground">
                Landing page creada por <strong>MIGUXLD</strong> •
                <a
                  href="https://github.com/miguxld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-cyan-400 hover:text-cyan-300"
                >
                  github.com/miguxld
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
