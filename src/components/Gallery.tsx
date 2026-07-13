import { Carousel } from '@/components/ui/carousel'
import ScrollReveal from './ScrollReveal'

const slides = [
  { title: 'Ventanas de PVC', button: 'Solicitar Cotización', src: '/carrusel/2.jpg' },
  { title: 'Instalación Residencial', button: 'Solicitar Cotización', src: '/carrusel/3.jpg' },
  { title: 'Puertas a Medida', button: 'Solicitar Cotización', src: '/carrusel/4.jpg' },
  { title: 'Ventanas PVC', button: 'Solicitar Cotización', src: '/carrusel/5.jpg' },
  { title: 'Proyecto Comercial', button: 'Solicitar Cotización', src: '/carrusel/6.jpg' },
  { title: 'Vidrio Templado', button: 'Solicitar Cotización', src: '/carrusel/7.jpg' },
  { title: 'Celosías y Rejas', button: 'Solicitar Cotización', src: '/carrusel/8.jpg' },
  { title: 'Termopaneles', button: 'Solicitar Cotización', src: '/carrusel/10.jpg' },
]

export default function Gallery() {
  return (
    <section id="trabajos" className="section-padding bg-dark overflow-hidden">
      <div className="container-max">
        <ScrollReveal className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Nuestro trabajo</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            Proyectos Realizados
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Cada proyecto es una muestra de nuestro compromiso con la calidad y los detalles.
          </p>
        </ScrollReveal>

        <div className="relative pb-16">
          <Carousel slides={slides} />
        </div>
      </div>
    </section>
  )
}
