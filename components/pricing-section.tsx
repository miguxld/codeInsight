"use client"

import { motion } from "framer-motion"
import { Check, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Para desarrolladores independientes y estudiantes.",
    features: ["10 análisis/mes", "2 lenguajes", "Soporte comunitario", "Reportes básicos"],
    premium: false,
  },
  {
    name: "Pro",
    price: "29",
    description: "Para equipos que escalan y proyectos profesionales.",
    features: [
      "Análisis ilimitados",
      "Todos los lenguajes",
      "Soporte prioritario 24/7",
      "Integraciones avanzadas",
      "Reportes de deuda técnica",
    ],
    premium: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Seguridad y control de nivel empresarial.",
    features: ["Todo en Pro", "Soporte dedicado", "Despliegue On-premise", "Acuerdos de SLA", "Auditorías de seguridad"],
    premium: false,
  },
]

export function PricingSection() {
  return (
    <section id="precios" className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Planes a tu Medida
          </motion.h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Desde startups hasta empresas globales, tenemos el plan perfecto para optimizar tu código.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 sm:p-8 lg:p-10 rounded-3xl transition-all duration-500 ${
                plan.premium 
                ? "glass border-primary/50 shadow-primary/20 md:scale-105 z-10" 
                : "glass border-white/5 hover:border-white/20"
              }`}
            >
              {plan.premium && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-glow">
                  Más Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/50 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">
                    {plan.price === "Custom" ? "" : "$"}
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && <span className="text-foreground/50">/mes</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.premium ? "bg-primary text-white" : "bg-white/10 text-primary"}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.premium ? "default" : "outline"}
                className={`w-full py-6 rounded-2xl font-bold transition-all ${
                  plan.premium 
                  ? "bg-primary hover:bg-primary/80 text-white shadow-glow" 
                  : "border-white/10 hover:bg-white/5"
                }`}
              >
                {plan.price === "Custom" ? "Contactar Ventas" : "Comenzar Ahora"}
              </Button>

              {plan.premium && (
                <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-foreground/40 uppercase tracking-widest">
                  <Shield className="w-3 h-3" />
                  Garantía de Satisfacción
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
