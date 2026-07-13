import { Factory, BadgeCheck, FileText, UserCheck } from 'lucide-react'

const reasons = [
  {
    icon: Factory,
    title: 'Fabricación Propia',
    description: 'Producimos directamente en nuestro taller, garantizando calidad y tiempos de entrega exactos.',
  },
  {
    icon: BadgeCheck,
    title: 'Instalación Certificada',
    description: 'Equipo técnico capacitado para una instalación perfecta y duradera en cada proyecto.',
  },
  {
    icon: FileText,
    title: 'Garantía Escrita',
    description: 'Respaldamos cada trabajo con garantía formal. Tu inversión está protegida.',
  },
  {
    icon: UserCheck,
    title: 'Asesoría Personalizada',
    description: 'Te acompañamos desde la medición hasta la entrega final. Sin letra chica.',
  },
]

export default function WhyUs() {
  return (
    <section id="nosotros" className="section-padding bg-surface">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Nuestras ventajas</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">¿Por qué elegirnos?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <Icon size={26} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-white text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
