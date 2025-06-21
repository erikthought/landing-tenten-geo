"use client"

import { motion } from "framer-motion"
import { pricingTiers } from "@/data/mock"
import { formatCurrency } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-fluid-3xl font-bold text-gray-900 lg:text-5xl">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              GEO Strategy
            </span>
          </h2>
          <p className="mb-16 text-fluid-lg text-gray-600 lg:text-xl">
            Start dominating AI search results today. Every day you wait, competitors gain ground 
            in the generative AI landscape.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative h-full ${tier.popular ? 'ring-2 ring-blue-500 shadow-2xl' : 'shadow-lg'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {formatCurrency(tier.price)}
                    </span>
                    <span className="text-lg text-gray-600">/month</span>
                  </div>
                  <CardDescription className="mt-4 text-base">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full h-12 text-base font-semibold ${
                      tier.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started Today
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            🚀 <strong>Limited Time:</strong> First 10 clients get 20% off their first 3 months
          </p>
          <p className="text-sm text-gray-500">
            All packages include a 30-day performance guarantee. Not satisfied? Get your money back.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
