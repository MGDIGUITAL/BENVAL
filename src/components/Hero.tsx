import Image from 'next/image'
import { ArrowRight, ShieldCheck, Star, Wrench } from 'lucide-react'

const stats = [
  { icon: Star, label: '10+ años de experiencia' },
  { icon: Wrench, label: '500+ proyectos instalados' },
  { icon: ShieldCheck, label: 'Garantía en todos nuestros trabajos' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Casa moderna con ventanas de aluminio"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center pt-28">
        <p className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-medium tracking-wide">
          Fabricación e Instalación Profesional
        </p>

        <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-4xl mx-auto">
          Ventanas y Puertas de{' '}
          <span className="text-primary">PVC y Aluminio</span>{' '}
          de Alta Calidad
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Diseñamos, fabricamos e instalamos ventanas, puertas, celosías y más.
          Calidad garantizada para tu hogar o empresa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-dark font-bold text-base hover:bg-primary-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark min-h-[44px]"
          >
            Solicitar Cotización
            <ArrowRight size={18} />
          </a>
          <a
            href="#productos"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/60 text-white font-semibold text-base hover:border-primary hover:text-primary transition-colors duration-200 min-h-[44px]"
          >
            Ver Productos
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {stats.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-gray-300">
              <Icon size={18} className="text-primary flex-shrink-0" />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-gray-400">
        <span className="text-xs tracking-widest uppercase">Descubre</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  )
}
