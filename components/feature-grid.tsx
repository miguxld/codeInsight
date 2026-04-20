"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Shield, Code, BarChart3, Users } from "lucide-react"

const features = [
  {
    title: "IA de Vanguardia",
    description: "Detecta problemas complejos y vulnerabilidades antes de que lleguen a producción.",
    icon: Sparkles,
    color: "from-emerald-400 to-emerald-600",
  },
  {
    title: "Velocidad Rayo",
    description: "Análisis en tiempo real que no interrumpe tu flujo de trabajo creativo.",
    icon: Zap,
    color: "from-lime-400 to-lime-600",
  },
  {
    title: "Seguridad Total",
    description: "Encriptación de grado militar. Tu propiedad intelectual es nuestra prioridad.",
    icon: Shield,
    color: "from-emerald-500 to-emerald-700",
  },
  {
    title: "Multi-lenguaje",
    description: "Soporte nativo para más de 25 lenguajes, desde Rust hasta Cobol.",
    icon: Code,
    color: "from-lime-300 to-emerald-400",
  },
  {
    title: "Métricas Profundas",
    description: "Dashboards interactivos para visualizar la deuda técnica y complejidad.",
    icon: BarChart3,
    color: "from-emerald-400 to-lime-500",
  },
  {
    title: "Equipo Colaborativo",
    description: "Comparte insights y mejores prácticas automáticamente con tu equipo.",
    icon: Users,
    color: "from-lime-500 to-emerald-600",
  },
]

export function FeatureGrid() {
  return (
    <section id="características" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Potencia sin Límites
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            Hemos diseñado cada herramienta para que escribir código sea una experiencia fluida, segura y gratificante.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl glass border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`w-8 h-8 rounded-full border-2 border-white/10 flex items-center justify-center`}>
                  <Zap className="w-3 h-3 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
