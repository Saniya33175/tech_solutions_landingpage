"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "StreamLine has transformed how our team operates. We've cut workflow time by 60% and everyone loves the intuitive interface.",
    author: "Sarah Chen",
    role: "Operations Manager",
    company: "TechCorp",
    rating: 5,
  },
  {
    quote:
      "The automation capabilities are incredible. What used to take our team hours now happens in minutes. Best decision we made this year.",
    author: "Marcus Johnson",
    role: "Head of Product",
    company: "InnovateLabs",
    rating: 5,
  },
  {
    quote:
      "Customer support is outstanding. The team went above and beyond to help us set up custom workflows. Highly recommended!",
    author: "Emily Rodriguez",
    role: "CEO",
    company: "GrowthStudio",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Loved by teams worldwide</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Join thousands of companies that trust StreamLine
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-card-foreground text-lg mb-6 leading-relaxed">{`"${testimonial.quote}"`}</p>
              </div>
              <div>
                <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
