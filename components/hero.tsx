"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Cpu } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Tech background image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/it-professionals-working-with-circuitry-and-digita.jpg")',
            backgroundAttachment: "fixed",
          }}
        />
        {/* Dark overlay for contrast - deep navy/black with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/80"></div>
        {/* Subtle accent glow on the right */}
        <div className="absolute -right-32 top-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-accent/15 border border-accent/30 rounded-full">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Enterprise Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
              <span className="text-foreground">POWERING INNOVATION.</span>
              <br />
              <span className="text-accent">DELIVERING RESULTS.</span>
              <br />
              <span className="text-foreground">IT Solutions for the</span>
              <br />
              <span className="text-accent">Digital Age.</span>
            </h1>

            <p className="text-xl text-foreground/80 leading-relaxed text-balance max-w-lg">
              We provide comprehensive IT solutions to drive growth, enhance efficiency, and secure your business
              future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8 py-6 rounded-lg"
              >
                EXPLORE SERVICES
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/30 hover:bg-foreground/10 text-foreground font-semibold text-base px-8 py-6 rounded-lg bg-transparent"
              >
                CONTACT SALES
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/30 hover:bg-foreground/10 text-foreground font-semibold text-base px-8 py-6 rounded-lg bg-transparent"
              >
                REQUEST A DEMO
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-accent/30 border border-accent/50"></div>
                <div className="w-8 h-8 rounded-full bg-accent/40 border border-accent/50"></div>
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/50"></div>
              </div>
              <p className="text-sm text-foreground/70">Trusted by 500+ enterprises worldwide</p>
            </div>
          </div>

          {/* Right Visual - Tech cards */}
          <div className="relative h-96 md:h-full md:min-h-96 grid grid-cols-2 gap-4">
            {/* Top Left Card */}
            <div className="bg-gradient-to-br from-foreground/10 to-foreground/5 border border-foreground/20 rounded-xl p-6 flex flex-col justify-between hover:border-accent/50 transition-colors duration-300 backdrop-blur-sm">
              <Cpu className="w-8 h-8 text-accent mb-auto" />
              <div>
                <p className="text-sm font-semibold text-foreground/60">Cloud Infrastructure</p>
                <p className="text-xs text-foreground/50 mt-1">Scalable & Secure</p>
              </div>
            </div>

            {/* Top Right Card */}
            <div className="bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/40 rounded-xl p-6 flex flex-col justify-between hover:border-accent transition-colors duration-300 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-accent" />
              <div>
                <p className="text-sm font-semibold text-foreground">Cybersecurity</p>
                <p className="text-xs text-foreground/70 mt-1">24/7 Protection</p>
              </div>
            </div>

            {/* Bottom Span Card */}
            <div className="col-span-2 bg-gradient-to-r from-foreground/10 via-foreground/5 to-foreground/10 border border-foreground/20 rounded-xl p-6 hover:border-accent/50 transition-colors duration-300 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground/60 mb-2">Managed Services</p>
                  <p className="text-xs text-foreground/50">End-to-end IT management</p>
                </div>
                <ArrowRight className="w-6 h-6 text-accent/60" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-24 pt-12 border-t border-foreground/20">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">99.99%</div>
            <p className="text-sm text-foreground/70">Uptime SLA</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
            <p className="text-sm text-foreground/70">Enterprise Clients</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">24/7</div>
            <p className="text-sm text-foreground/70">Expert Support</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">15+</div>
            <p className="text-sm text-foreground/70">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
