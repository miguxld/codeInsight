"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AnimatedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          className={`flex items-center justify-between transition-all duration-500 rounded-2xl px-4 sm:px-6 py-3 ${
            isScrolled ? "glass border-white/20 shadow-primary/10" : ""
          }`}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-glow">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              CodeInsight
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["Características", "Precios", "Demo"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://miguxld-portafolio.netlify.app/" target="_blank" className="hidden sm:block">
              <Button variant="ghost" className="text-foreground/70 hover:text-white">
                Mi Portafolio
              </Button>
            </Link>
            <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/80 text-white rounded-xl px-6 shadow-glow transition-all active:scale-95">
              Comenzar
            </Button>
            
            <button 
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t-0 p-6 mx-6 mt-2 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {["Características", "Precios", "Demo"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-foreground/80"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <hr className="border-white/10" />
              <Link href="https://miguxld-portafolio.netlify.app/" target="_blank">
                <Button variant="ghost" className="w-full justify-start text-foreground/80">Mi Portafolio</Button>
              </Link>
              <Button className="w-full bg-primary hover:bg-primary/80 text-white shadow-glow">
                Comenzar
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
