'use client'

import { useActionState, useEffect, useRef } from 'react'
import { submitCotizacion } from '@/app/actions'
import { Send, Loader2, Phone, Mail, Clock, MapPin } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const initialState = { success: false, message: '' }

const productos = [
  'Ventanas PVC',
  'Ventanas Aluminio',
  'Puertas',
  'Celosías',
  'Vidrio Templado',
  'Termopaneles',
  'Otro',
]

const contactInfo = [
  { icon: Phone, label: 'Teléfono / WhatsApp', value: '+56 9 7750 9138', href: 'tel:+56977509138' },
  { icon: Mail, label: 'Email', value: 'benvalaluminios@gmail.com', href: 'mailto:benvalaluminios@gmail.com' },
  { icon: Clock, label: 'Tiempo de respuesta', value: 'Menos de 24 horas', href: null },
  { icon: MapPin, label: 'Cobertura', value: 'Región Metropolitana', href: null },
]

export default function QuoteForm() {
  const [state, formAction, pending] = useActionState(submitCotizacion, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) formRef.current?.reset()
  }, [state.success])

  return (
    <section id="contacto" className="section-padding bg-surface">
      <div className="container-max">
        <ScrollReveal className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Sin costo</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            Solicita tu Cotización Gratuita
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Completa el formulario o contáctanos directamente. Respondemos en menos de 24 horas.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact info sidebar */}
          <ScrollReveal className="lg:col-span-2">
            <div className="bg-white/5 rounded-2xl p-7 border border-white/10 space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-white text-lg mb-1">Contáctanos directo</h3>
                <p className="text-gray-400 text-sm">Elige el canal que prefieras.</p>
              </div>

              <ul className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-white hover:text-primary transition-colors font-medium">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-white font-medium">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/56977509138?text=${encodeURIComponent('Hola Benval, me gustaría solicitar una cotización.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-bold transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escribir por WhatsApp
              </a>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={2} className="lg:col-span-3">
            <form ref={formRef} action={formAction} className="bg-white rounded-2xl p-6 md:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-text-main mb-1.5">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="nombre" name="nombre" type="text" required autoComplete="name"
                    placeholder="Tu nombre completo"
                    className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm text-text-main placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-main mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email" name="email" type="email" required autoComplete="email"
                    placeholder="tu@email.com"
                    className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm text-text-main placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-text-main mb-1.5">
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="telefono" name="telefono" type="tel" required autoComplete="tel"
                    placeholder="+56 9 XXXX XXXX"
                    className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm text-text-main placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="tipo_producto" className="block text-sm font-medium text-text-main mb-1.5">
                    Tipo de producto
                  </label>
                  <select
                    id="tipo_producto" name="tipo_producto"
                    className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white cursor-pointer"
                  >
                    <option value="">Selecciona un producto</option>
                    {productos.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-text-main mb-1.5">
                  Descripción del proyecto
                </label>
                <textarea
                  id="mensaje" name="mensaje" rows={4}
                  placeholder="Cuéntanos: medidas aproximadas, cantidad de ventanas/puertas, tipo de instalación, material preferido..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-text-main placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                />
              </div>

              {state.message && (
                <div
                  role="alert"
                  aria-live="polite"
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    state.success
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {state.message}
                </div>
              )}

              <button
                type="submit"
                disabled={pending}
                className="w-full h-12 rounded-full bg-primary text-dark font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {pending ? (
                  <><Loader2 size={18} className="animate-spin" />Enviando...</>
                ) : (
                  <><Send size={16} />Solicitar Cotización Gratis</>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
