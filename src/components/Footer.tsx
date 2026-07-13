import Image from 'next/image'
import { Phone, Mail, Instagram, Facebook } from 'lucide-react'

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Cotizar', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#inicio" className="inline-block mb-5">
              <Image
                src="/logo.jpeg"
                alt="Benval — Ventanas de PVC y Aluminios"
                width={140}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-5">
              Especialistas en fabricación e instalación de ventanas y puertas de PVC y aluminio.
              Calidad garantizada en cada proyecto.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/benvalaluminios2022"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Benval"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white/20 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Benval"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white/20 transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Navegación
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 text-sm hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+56977509138"
                  className="flex items-start gap-3 text-gray-400 text-sm hover:text-primary transition-colors"
                >
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                  +56 9 7750 9138
                </a>
              </li>
              <li>
                <a
                  href="mailto:benvalaluminios@gmail.com"
                  className="flex items-start gap-3 text-gray-400 text-sm hover:text-primary transition-colors"
                >
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                  benvalaluminios@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/benvalaluminios2022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 text-sm hover:text-primary transition-colors"
                >
                  <Instagram size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                  @benvalaluminios2022
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={`https://wa.me/56977509138?text=${encodeURIComponent('Hola, me gustaría solicitar una cotización.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Benval Aluminios. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
