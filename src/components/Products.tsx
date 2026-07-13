import { Square, Layers, DoorOpen, Wind, Gem, Snowflake } from 'lucide-react'

const products = [
  {
    icon: Square,
    name: 'Ventanas PVC',
    description: 'Alta aislación térmica y acústica. Bajo mantenimiento y larga durabilidad.',
  },
  {
    icon: Layers,
    name: 'Ventanas Aluminio',
    description: 'Perfiles robustos y elegantes. Ideales para proyectos residenciales y comerciales.',
  },
  {
    icon: DoorOpen,
    name: 'Puertas',
    description: 'Puertas de entrada y acceso en PVC y aluminio. Diseño a medida.',
  },
  {
    icon: Wind,
    name: 'Celosías',
    description: 'Control de luz y ventilación con estilo. Instalación rápida y segura.',
  },
  {
    icon: Gem,
    name: 'Vidrio Templado',
    description: 'Mayor resistencia y seguridad. Ideal para mamparas, duchas y fachadas.',
  },
  {
    icon: Snowflake,
    name: 'Termopaneles',
    description: 'Doble vidriado hermético para máximo ahorro energético y confort.',
  },
]

export default function Products() {
  return (
    <section id="productos" className="section-padding bg-light">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Lo que ofrecemos</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-main">Nuestros Productos</h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            Fabricamos e instalamos todo tipo de soluciones en aluminio y PVC para tu hogar o proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ icon: Icon, name, description }) => (
            <div
              key={name}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-main mb-2">{name}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
