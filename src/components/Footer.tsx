import Image from 'next/image'
import { Phone, Mail, Instagram, Facebook, ArrowRight, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Cotizar', href: '#contacto' },
]

const products = [
  'Ventanas PVC',
  'Ventanas Aluminio',
  'Puertas',
  'Celosías',
  'Vidrio Templado',
  'Termopaneles',
]

export default function Footer() {
  return (
    <footer className="bg-[#050810] text-white">
      {/* CTA Banner */}
      <div className="border-t border-b border-primary/20 bg-primary/5">
        <div className="container-max px-4 md:px-8 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-1">¿Listo para cotizar?</p>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">
              Solicita tu presupuesto sin compromiso
            </h3>
          </div>
          <a
            href="#contacto"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-[#050810] font-bold text-sm hover:bg-primary-dark transition-colors duration-200"
          >
            Cotizar ahora
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-max px-4 md:px-8 lg:px-16 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="inline-block mb-5">
              <Image
                src="/logo.jpeg"
                alt="Benval — Ventanas de PVC y Aluminios"
                width={150}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Taller especializado en fabricación e instalación de ventanas, puertas y soluciones en PVC y aluminio. Más de 10 años de experiencia.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/benvalaluminios2022"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Benval"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Benval"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
              >
                <Facebook size={17} />
              </a>
              <a
                href={`https://wa.me/56977509138?text=${encodeURIComponent('Hola, me gustaría solicitar una cotización.')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Benval"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-green-400 hover:border-green-400/40 hover:bg-green-400/10 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-white text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-primary inline-block" />
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 text-sm hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-primary" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-white text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-primary inline-block" />
              Productos
            </h3>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p}>
                  <a
                    href="#productos"
                    className="text-slate-400 text-sm hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-primary" />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-primary inline-block" />
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+56977509138"
                  className="flex items-start gap-3 group"
                >
                  <span className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone size={15} className="text-primary" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">Teléfono</span>
                    <span className="text-sm text-slate-300 group-hover:text-primary transition-colors">+56 9 7750 9138</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:benvalaluminios@gmail.com"
                  className="flex items-start gap-3 group"
                >
                  <span className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail size={15} className="text-primary" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">Email</span>
                    <span className="text-sm text-slate-300 group-hover:text-primary transition-colors">benvalaluminios@gmail.com</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/benvalaluminios2022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <span className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Instagram size={15} className="text-primary" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">Instagram</span>
                    <span className="text-sm text-slate-300 group-hover:text-primary transition-colors">@benvalaluminios2022</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Benval Aluminios. Todos los derechos reservados.
          </p>
          <p className="text-slate-600 text-xs">
            Fabricación e instalación de ventanas en PVC y aluminio · Chile
          </p>
        </div>
      </div>
    </footer>
  )
}
