'use client'

import { useActionState, useEffect, useRef } from 'react'
import { submitCotizacion } from '@/app/actions'
import { Send, Loader2 } from 'lucide-react'

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

export default function QuoteForm() {
  const [state, formAction, pending] = useActionState(submitCotizacion, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) formRef.current?.reset()
  }, [state.success])

  return (
    <section id="contacto" className="section-padding bg-light">
      <div className="container-max">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Sin costo</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-main">Solicita tu Cotización Gratuita</h2>
            <p className="mt-4 text-text-muted">Completa el formulario y te respondemos en menos de 24 horas.</p>
          </div>

          <form ref={formRef} action={formAction} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-text-main mb-1.5">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre completo"
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm text-text-main placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-main mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
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
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+56 9 XXXX XXXX"
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm text-text-main placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="tipo_producto" className="block text-sm font-medium text-text-main mb-1.5">
                  Tipo de producto
                </label>
                <select
                  id="tipo_producto"
                  name="tipo_producto"
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white cursor-pointer"
                >
                  <option value="">Selecciona un producto</option>
                  {productos.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-text-main mb-1.5">
                Descripción del proyecto
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto: medidas aproximadas, cantidad de ventanas, tipo de instalación..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-text-main placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
              />
            </div>

            {/* Feedback */}
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
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Solicitar Cotización Gratis
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
