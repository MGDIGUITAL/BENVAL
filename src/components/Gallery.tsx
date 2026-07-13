import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import Image from 'next/image'

const slides = [
  { src: '/carrusel/2.jpg',    alt: 'Instalación de ventanas de PVC',        label: 'Ventanas PVC' },
  { src: '/carrusel/3.jpg',    alt: 'Ventanas de aluminio instaladas',        label: 'Ventanas Aluminio' },
  { src: '/carrusel/4.jpg',    alt: 'Puerta de aluminio a medida',            label: 'Puertas' },
  { src: '/carrusel/5.jpg',    alt: 'Celosías instaladas',                   label: 'Celosías' },
  { src: '/carrusel/6.jpg',    alt: 'Vidrio templado mampara',               label: 'Vidrio Templado' },
  { src: '/carrusel/7.jpg',    alt: 'Termopanel doble vidriado',             label: 'Termopaneles' },
  { src: '/carrusel/8.jpg',    alt: 'Proyecto residencial Benval',           label: 'Proyecto Residencial' },
  { src: '/carrusel/10.jpg',   alt: 'Instalación comercial Benval',          label: 'Proyecto Comercial' },
  { src: '/carrusel/extra.png',alt: 'Taller Benval fabricación',             label: 'Nuestro Taller' },
]

export default function Gallery() {
  return (
    <section id="trabajos" className="section-padding bg-surface">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Nuestro trabajo
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            Proyectos Realizados
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
            Cada proyecto refleja nuestro compromiso con la calidad y precisión en cada detalle.
          </p>
        </div>

        <div className="px-8 md:px-12">
          <Carousel
            opts={{ align: 'start', loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {slides.map(({ src, alt, label }) => (
                <CarouselItem key={src} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-white font-heading font-semibold text-sm px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm">
                      {label}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
