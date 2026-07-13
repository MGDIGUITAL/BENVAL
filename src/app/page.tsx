import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import WhyUs from '@/components/WhyUs'
import Process from '@/components/Process'
import Gallery from '@/components/Gallery'
import QuoteForm from '@/components/QuoteForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <WhyUs />
      <Process />
      <Gallery />
      <QuoteForm />
      <Footer />
    </main>
  )
}
