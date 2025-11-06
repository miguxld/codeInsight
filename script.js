// ╔════════════════════════════════════════════════╗
// ║  CodeInsight - Script by @miguxld             ║
// ║  Interactividad y animaciones                 ║
// ╚════════════════════════════════════════════════╝

// Función para navegar a secciones
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

// Animación de entrada para elementos al scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease forwards"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observar elementos de features y pricing
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".feature-card, .pricing-card, .result-item")
  cards.forEach((card) => {
    card.style.opacity = "0"
    observer.observe(card)
  })
})

// Agregar estilos de animación
const style = document.createElement("style")
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
document.head.appendChild(style)

// Interactividad en botones
const buttons = document.querySelectorAll(".btn")
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // Efecto ripple
    const ripple = document.createElement("span")
    const rect = this.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = size + "px"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.classList.add("ripple")

    this.appendChild(ripple)

    setTimeout(() => ripple.remove(), 600)
  })
})

// Agregar estilos para el efecto ripple
const rippleStyle = document.createElement("style")
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(rippleStyle)

console.log("%c🚀 CodeInsight Landing Page", "color: #00d9ff; font-size: 16px; font-weight: bold;")
console.log("%c© 2025 - Diseñado y desarrollado por @miguxld", "color: #ff006e; font-size: 12px;")
console.log("%cGitHub: https://github.com/miguxld", "color: #e0e0ff;")
console.log("%cPortafolio: https://miguxld-portafolio.netlify.app/", "color: #e0e0ff;")
