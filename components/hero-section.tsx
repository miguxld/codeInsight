"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Impulsado por IA de próxima generación</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Código <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Inteligente</span>,<br />
              Resultados de <span className="text-glow underline decoration-primary/30">Elite</span>
            </h1>

            <p className="text-xl text-foreground/60 leading-relaxed max-w-xl">
              Eleva el estándar de tu desarrollo. Nuestra IA analiza, optimiza y protege tu código en tiempo real, permitiéndote enfocarte en lo que realmente importa: **Crear**.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-white rounded-2xl px-8 h-14 shadow-glow group transition-all">
                Prueba Gratis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/10 hover:bg-white/5 rounded-2xl px-8 h-14 backdrop-blur-sm">
                Ver Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-foreground/40 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                Seguro
              </div>
              <div className="flex items-center gap-2 text-xs text-foreground/40 uppercase tracking-widest">
                <Zap className="w-4 h-4" />
                Rápido
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden glass border-white/20 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
               {/* Usamos el visual generado */}
              <Image 
                src="/hero-visual.png" 
                alt="CodeInsight Dashboard" 
                width={800} 
                height={600} 
                className="w-full h-auto opacity-90"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="hidden md:flex absolute -top-10 -right-10 w-32 h-32 glass rounded-2xl border-white/20 items-center justify-center -z-10"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-[10px] text-foreground/40 uppercase">Precisión</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="hidden md:block absolute -bottom-10 -left-10 w-40 h-24 glass rounded-2xl border-white/20 p-4 -z-10"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] text-foreground/60">Análisis Activo</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full bg-primary"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
