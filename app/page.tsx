import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import Pricing from "@/components/sections/pricing"
import Testimonials from "@/components/sections/testimonials"
import Contact from "@/components/sections/contact"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
