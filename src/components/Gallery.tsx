import Image from 'next/image'

const photos = [
  { src: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=600&q=80', alt: 'Ventanas aluminio instaladas en casa moderna' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', alt: 'Puerta de aluminio residencial' },
  { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80', alt: 'Interior con grandes ventanales' },
  { src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80', alt: 'Fachada con ventanas de PVC' },
  { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80', alt: 'Casa moderna con celosías' },
  { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80', alt: 'Ventanas termopanel instaladas' },
]

export default function Gallery() {
  return (
    <section id="trabajos" className="section-padding bg-dark">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Nuestro trabajo</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">Proyectos Realizados</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Cada proyecto es una muestra de nuestro compromiso con la calidad y los detalles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map(({ src, alt }) => (
            <div key={src} className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/60 px-4 py-2 rounded-full">
                  Ver proyecto
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
