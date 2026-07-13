import type { Metadata } from 'next'
import { Montserrat, DM_Sans } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Benval Aluminios — Ventanas y Puertas de PVC y Aluminio',
  description:
    'Fabricación e instalación profesional de ventanas, puertas, celosías, vidrio templado y termopaneles en PVC y aluminio. Cotiza sin compromiso.',
  keywords: 'ventanas aluminio, ventanas PVC, puertas aluminio, celosías, vidrio templado, termopaneles, Chile',
  openGraph: {
    title: 'Benval Aluminios — Ventanas y Puertas de PVC y Aluminio',
    description: 'Fabricación e instalación profesional. Cotiza sin compromiso.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${montserrat.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
