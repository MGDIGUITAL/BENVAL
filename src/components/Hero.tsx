import Image from 'next/image'
import { ArrowRight, ShieldCheck, Star, Wrench, Phone } from 'lucide-react'

const stats = [
  { icon: Star, label: '10+ años de experiencia' },
  { icon: Wrench, label: '500+ proyectos instalados' },
  { icon: ShieldCheck, label: 'Garantía en todos nuestros trabajos' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Casa moderna con ventanas de aluminio"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-dark/60" />
      </div>

      {/* Content — left aligned */}
      <div className="relative z-10 container-max w-full px-4 md:px-8 lg:px-16 pt-24 pb-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Fabricación e Instalación Profesional
          </p>

          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
            Ventanas y Puertas de{' '}
            <span className="text-primary">PVC y Aluminio</span>{' '}
            a Medida
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Diseñamos, fabricamos e instalamos en tu hogar o empresa.
            Más de 500 proyectos instalados en la región.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-dark font-bold text-base hover:bg-primary-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark min-h-[48px]"
            >
              Solicitar Cotización Gratis
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+56977509138"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:border-primary hover:text-primary transition-colors duration-200 min-h-[48px]"
            >
              <Phone size={17} />
              +56 9 7750 9138
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
            {stats.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-primary" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
