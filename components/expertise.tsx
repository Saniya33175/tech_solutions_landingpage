"use client"

import { Cloud, Lock, Code, Zap, Network, BarChart3 } from "lucide-react"

export default function Expertise() {
  const services = [
    {
      icon: Cloud,
      name: "CLOUD COMPUTING",
      description: "Scalable cloud infrastructure for modern businesses",
    },
    {
      icon: Lock,
      name: "CYBERSECURITY",
      description: "Advanced security solutions to protect your assets",
    },
    {
      icon: Code,
      name: "SOFTWARE DEVELOPMENT",
      description: "Custom applications built for your unique needs",
    },
    {
      icon: Zap,
      name: "AI/ML OPTIMIZATION",
      description: "Leverage AI to drive intelligent business decisions",
    },
    {
      icon: Network,
      name: "NETWORK SOLUTIONS",
      description: "Robust networking infrastructure for seamless connectivity",
    },
    {
      icon: BarChart3,
      name: "DATA ANALYTICS",
      description: "Transform data into actionable business insights",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">OUR EXPERTISE</h2>
          <div className="w-24 h-1 bg-lime-400 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-colors duration-300 border border-slate-700 hover:border-lime-400/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-lime-400" strokeWidth={1.5} />
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
