import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const products = [
  {
    img: '/items/ventanas-pvc.png',
    name: 'Ventanas PVC',
    tag: 'Alta aislación',
    description: 'Máximo aislamiento térmico y acústico. Bajo mantenimiento, alta durabilidad y resistencia a la humedad.',
  },
  {
    img: '/items/ventanas-aluminio.png',
    name: 'Ventanas Aluminio',
    tag: 'Robustez y estilo',
    description: 'Perfiles de aluminio anodizado. Diseños modernos para proyectos residenciales, comerciales e industriales.',
  },
  {
    img: '/items/puertas.png',
    name: 'Puertas',
    tag: 'A medida',
    description: 'Puertas de acceso, correderas y abatibles en PVC y aluminio. Diseñadas según las dimensiones de tu espacio.',
  },
  {
    img: '/items/celosias.png',
    name: 'Celosías',
    tag: 'Ventilación y luz',
    description: 'Control inteligente de ventilación y privacidad. Instalación rápida en cualquier vano.',
  },
  {
    img: '/items/vidrio-templado.png',
    name: 'Vidrio Templado',
    tag: 'Máxima seguridad',
    description: 'Cuatro veces más resistente que el vidrio común. Ideal para mamparas, duchas, fachadas y barandas.',
  },
  {
    img: '/items/termopaneles.png',
    name: 'Termopaneles',
    tag: 'Ahorro energético',
    description: 'Doble vidriado hermético con cámara de aire. Reduce hasta un 40% la pérdida de calor en invierno.',
  },
]

export default function Products() {
  return (
    <section id="productos" className="section-padding bg-white">
      <div className="container-max">
        <ScrollReveal className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Lo que fabricamos</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-main mb-4">
            Soluciones en PVC y Aluminio
          </h2>
          <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
            Cada producto se fabrica en nuestro taller con materiales de primera calidad y se instala por técnicos certificados.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ img, name, tag, description }, i) => (
            <ScrollReveal key={name} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={img}
                    alt={name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-primary text-dark text-xs font-bold z-10">
                    {tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg text-text-main mb-2">{name}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{description}</p>
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-semibold hover:gap-2 transition-all duration-200"
                  >
                    Cotizar este producto →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
