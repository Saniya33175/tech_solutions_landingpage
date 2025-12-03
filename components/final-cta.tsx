"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Ready to transform your workflow?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 text-balance">
          Join thousands of teams already experiencing faster, smarter workflows with StreamLine.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Start Your Free Trial Today
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-border bg-transparent">
            Schedule a Demo
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          14 days free • No credit card required • Full access to all features
        </p>
      </div>
    </section>
  )
}
