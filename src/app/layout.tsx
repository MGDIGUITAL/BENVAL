import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
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
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
