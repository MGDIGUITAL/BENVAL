'use server'

import { createClient } from '@supabase/supabase-js'
import { cotizacionSchema } from '@/lib/validations'

export async function submitCotizacion(prevState: { success: boolean; message: string } | null, formData: FormData) {
  const raw = {
    nombre: formData.get('nombre') as string,
    email: formData.get('email') as string,
    telefono: formData.get('telefono') as string,
    tipo_producto: formData.get('tipo_producto') as string,
    mensaje: formData.get('mensaje') as string,
  }

  const result = cotizacionSchema.safeParse(raw)
  if (!result.success) {
    const first = result.error.errors[0]?.message ?? 'Datos inválidos'
    return { success: false, message: first }
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { error } = await supabase.from('cotizaciones').insert([result.data])

  if (error) {
    console.error('Supabase insert error:', error.message)
    return { success: false, message: 'Error al enviar. Intenta nuevamente.' }
  }

  return { success: true, message: '¡Cotización enviada! Te contactaremos pronto.' }
}
