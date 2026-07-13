import { Factory, BadgeCheck, FileText, UserCheck } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const reasons = [
  {
    icon: Factory,
    title: 'Fabricación Propia',
    description: 'Producimos en nuestro taller, controlando cada detalle. Sin intermediarios, mejor precio y calidad garantizada.',
    stat: '100%',
    statLabel: 'en taller propio',
  },
  {
    icon: BadgeCheck,
    title: 'Instalación Certificada',
    description: 'Técnicos capacitados con experiencia en todo tipo de proyectos. Instalación limpia y profesional.',
    stat: '+500',
    statLabel: 'proyectos instalados',
  },
  {
    icon: FileText,
    title: 'Garantía Escrita',
    description: 'Cada trabajo entregado incluye garantía formal por escrito. Tu inversión siempre protegida.',
    stat: '100%',
    statLabel: 'con garantía',
  },
  {
    icon: UserCheck,
    title: 'Asesoría Personalizada',
    description: 'Te acompañamos desde la medición hasta la entrega. Atención directa, sin letra chica ni sorpresas.',
    stat: '24h',
    statLabel: 'tiempo de respuesta',
  },
]

export default function WhyUs() {
  return (
    <section id="nosotros" className="section-padding bg-surface">
      <div className="container-max">
        <ScrollReveal className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Por qué Benval</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            Más de 10 años fabricando<br className="hidden md:block" /> con calidad
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {reasons.map(({ icon: Icon, title, description, stat, statLabel }, i) => (
            <ScrollReveal key={title} delay={(i + 1) as 1 | 2 | 3 | 4} className="h-full">
              <div className="bg-surface p-7 h-full flex flex-col gap-4 hover:bg-white/5 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Icon size={24} className="text-primary" />
                </div>
                <div>
                  <span className="font-heading font-extrabold text-3xl text-primary">{stat}</span>
                  <span className="block text-xs text-gray-500 mt-0.5">{statLabel}</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-base mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
