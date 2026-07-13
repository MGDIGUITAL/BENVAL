import { Star } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    name: 'Carolina Reyes',
    location: 'Santiago, RM',
    rating: 5,
    text: 'Excelente trabajo. Cambiamos todas las ventanas del departamento por termopaneles y la diferencia en temperatura y ruido es enorme. Muy profesionales y prolijos en la instalación.',
    product: 'Termopaneles',
  },
  {
    name: 'Rodrigo Fuentes',
    location: 'Las Condes',
    rating: 5,
    text: 'Pedí cotización un lunes y el viernes ya tenía la puerta instalada. Precio justo, materiales de calidad y la medición fue exacta. Los recomiendo sin dudarlo.',
    product: 'Puerta Aluminio',
  },
  {
    name: 'Marcela Torres',
    location: 'Providencia',
    rating: 5,
    text: 'Buscaba ventanas de PVC para la remodelación de mi casa. Me asesoraron muy bien, el diseño quedó precioso y la instalación fue impecable. Muy contenta con el resultado.',
    product: 'Ventanas PVC',
  },
  {
    name: 'Felipe Morales',
    location: 'Ñuñoa',
    rating: 5,
    text: 'Hice instalar mamparas de vidrio templado en los baños. Trabajo cuidadoso, llegaron puntual y dejaron todo limpio. El resultado es de primer nivel.',
    product: 'Vidrio Templado',
  },
  {
    name: 'Ana González',
    location: 'Vitacura',
    rating: 5,
    text: 'Contraté para un proyecto comercial completo: ventanas y puertas de aluminio. El equipo fue muy profesional, cumplieron los plazos y la garantía escrita me dio tranquilidad.',
    product: 'Ventanas Aluminio',
  },
  {
    name: 'Jorge Castillo',
    location: 'Maipú',
    rating: 5,
    text: 'Muy buen servicio desde la cotización hasta la instalación. Las celosías quedaron perfectas y ventilan muy bien. Precio competitivo y atención de primera.',
    product: 'Celosías',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-primary text-primary" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <ScrollReveal className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Opiniones reales</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-main">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-text-muted max-w-lg mx-auto">
            Más de 500 familias y empresas confiaron en Benval para sus proyectos.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(({ name, location, rating, text, product }, i) => (
            <ScrollReveal key={name} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="bg-light rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 h-full flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <Stars count={rating} />
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {product}
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed flex-1">"{text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center font-heading font-bold text-primary text-sm">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-main">{name}</p>
                    <p className="text-xs text-text-muted">{location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
