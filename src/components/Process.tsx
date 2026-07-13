import { MessageSquare, Ruler, Cog, CheckCircle } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Cotización',
    description: 'Contáctanos por WhatsApp, teléfono o el formulario. Respondemos en menos de 24 horas.',
    detail: 'Sin costo',
  },
  {
    icon: Ruler,
    number: '02',
    title: 'Medición y Diseño',
    description: 'Visitamos el lugar, tomamos medidas exactas y diseñamos la solución ideal para tu espacio.',
    detail: 'A domicilio',
  },
  {
    icon: Cog,
    number: '03',
    title: 'Fabricación',
    description: 'Producimos en nuestro taller con materiales seleccionados y control de calidad en cada etapa.',
    detail: 'Taller propio',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Instalación',
    description: 'Nuestro equipo instala con precisión, limpieza y entrega la garantía formal del trabajo.',
    detail: 'Con garantía',
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-light">
      <div className="container-max">
        <ScrollReveal className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Cómo trabajamos</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-main">
            De la cotización a la instalación
          </h2>
          <p className="mt-4 text-text-muted max-w-lg mx-auto">
            Un proceso claro y sin complicaciones. Tú describes lo que necesitas, nosotros lo hacemos realidad.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[13%] right-[13%] h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 z-0" />

          {steps.map(({ icon: Icon, number, title, description, detail }, i) => (
            <ScrollReveal key={number} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="relative z-10 bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-dark flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <span className="font-heading font-extrabold text-3xl text-gray-100">{number}</span>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                  {detail}
                </span>
                <h3 className="font-heading font-semibold text-text-main text-lg mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
