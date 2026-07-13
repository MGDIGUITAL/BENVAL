import { z } from 'zod'

export const cotizacionSchema = z.object({
  nombre: z.string().min(2, 'Nombre muy corto').max(100),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(8, 'Teléfono inválido').max(20),
  tipo_producto: z.string().optional(),
  mensaje: z.string().max(1000).optional(),
})

export type CotizacionInput = z.infer<typeof cotizacionSchema>
