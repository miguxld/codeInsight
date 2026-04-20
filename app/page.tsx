"use client"

import { AnimatedNavbar } from "@/components/animated-navbar"
import { HeroSection } from "@/components/hero-section"
import { FeatureGrid } from "@/components/feature-grid"
import { PricingSection } from "@/components/pricing-section"
import { FooterSection } from "@/components/footer-section"
import { motion, useScroll, useSpring } from "framer-motion"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/30 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 mesh-gradient pointer-events-none -z-10" />
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <AnimatedNavbar />

      <main>
        <HeroSection />
        
        {/* Decorative Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <FeatureGrid />
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <PricingSection />

        {/* CTA Section - Inline Redesign */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 sm:p-12 md:p-24 rounded-3xl md:rounded-[3rem] overflow-hidden glass border-white/10 text-center"
            >
              {/* Background Glow */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 -z-10" />
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse" />

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight">
                ¿Listo para transformar <br /> tu forma de <span className="text-primary italic">programar</span>?
              </h2>
              <p className="text-lg md:text-xl text-foreground/60 mb-10 md:mb-12 max-w-2xl mx-auto">
                Únete a más de 10,000 desarrolladores que ya están construyendo el futuro con CodeInsight.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-white font-bold py-5 md:py-6 px-8 md:px-12 rounded-2xl shadow-glow text-base md:text-lg transition-all"
                >
                  Empezar Ahora Gratis
                </motion.button>
                <div className="text-sm text-foreground/40 font-mono">
                  $0/mes • Sin tarjeta de crédito
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}
