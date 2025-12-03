"use client"

import { Card } from "@/components/ui/card"
import { Zap, Users, TrendingUp, Workflow } from "lucide-react"

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Process workflows 98% faster with intelligent automation. Save hours every week on repetitive tasks.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Seamless Collaboration",
    description: "Real-time teamwork with built-in comments, approvals, and notifications. Keep everyone in sync.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Data-Driven Insights",
    description: "Track performance metrics and analytics. Make informed decisions with comprehensive dashboards.",
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Custom Workflows",
    description: "Create tailored automation rules that fit your unique business processes. No-code builder included.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything you need to ship faster
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Powerful features designed for modern teams and workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 p-8 hover:shadow-lg hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="text-accent flex-shrink-0 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
