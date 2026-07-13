import { MessageSquare, Ruler, Cog, CheckCircle } from 'lucide-react'

const steps = [
  { icon: MessageSquare, number: '01', title: 'Cotización', description: 'Contáctanos y cuéntanos tu proyecto. Respondemos en menos de 24 horas.' },
  { icon: Ruler, number: '02', title: 'Diseño y Medición', description: 'Visitamos el lugar, tomamos medidas y diseñamos la solución ideal.' },
  { icon: Cog, number: '03', title: 'Fabricación', description: 'Producimos en nuestro taller con materiales de primera calidad.' },
  { icon: CheckCircle, number: '04', title: 'Instalación', description: 'Nuestro equipo instala y finaliza con limpieza y garantía entregada.' },
]

export default function Process() {
  return (
    <section className="section-padding bg-light">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Cómo trabajamos</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-main">Proceso de Trabajo</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-primary/20 z-0" />

          {steps.map(({ icon: Icon, number, title, description }) => (
            <div key={number} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-dark flex items-center justify-center mb-4 ring-2 ring-primary/30">
                <Icon size={24} className="text-primary" />
              </div>
              <span className="font-heading font-bold text-primary text-xs tracking-widest mb-1">{number}</span>
              <h3 className="font-heading font-semibold text-text-main text-lg mb-2">{title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
