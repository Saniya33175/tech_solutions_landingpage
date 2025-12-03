import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Expertise from "@/components/expertise"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutUs />
      <Expertise />
      <Features />
      <Testimonials />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </main>
  )
}
