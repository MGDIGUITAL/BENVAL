'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between h-16 px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <Image
            src="/logo.jpeg"
            alt="Benval — Ventanas de PVC y Aluminios"
            width={160}
            height={64}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-300 hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+56977509138"
            className="hidden sm:flex items-center gap-1.5 text-sm text-gray-300 hover:text-primary transition-colors"
            aria-label="Llamar a Benval"
          >
            <Phone size={15} />
            +56 9 7750 9138
          </a>
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-primary text-dark font-semibold text-sm hover:bg-primary-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark"
          >
            Cotizar Ahora
          </a>
          <button
            className="md:hidden p-2 text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-dark/98 backdrop-blur-md border-t border-white/10 px-4 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-gray-200 hover:text-primary transition-colors py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-full bg-primary text-dark font-semibold text-sm min-h-[44px]"
          >
            Cotizar Ahora
          </a>
          <a href="tel:+56977509138" className="flex items-center gap-2 text-sm text-gray-400 py-1">
            <Phone size={15} />
            +56 9 7750 9138
          </a>
        </div>
      )}
    </header>
  )
}
