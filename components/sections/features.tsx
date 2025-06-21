"use client"

import { motion } from "framer-motion"
import { features } from "@/data/mock"
import { Brain, Search, TrendingUp, Settings, FileText, BarChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const iconMap = {
  Brain,
  Search,
  TrendingUp,
  Settings,
  FileText,
  BarChart,
}

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-fluid-3xl font-bold text-gray-900 lg:text-5xl">
            Why GEO is the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Future of SEO
            </span>
          </h2>
          <p className="mb-16 text-fluid-lg text-gray-600 lg:text-xl">
            While traditional SEO optimizes for search engines, GEO optimizes for AI models. 
            Get ahead of the curve with strategies designed for the generative AI era.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white lg:p-12"
        >
          <h3 className="mb-4 text-2xl font-bold lg:text-3xl">
            The AI Revolution is Happening Now
          </h3>
          <p className="mb-6 text-lg opacity-90">
            Over 1 billion people now use ChatGPT monthly. Bing Chat processes millions of queries daily. 
            Google Bard is expanding rapidly. Where will your content appear when AI models provide answers?
          </p>
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold">1B+</div>
              <div className="text-sm opacity-80">Monthly ChatGPT Users</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold">2.3B</div>
              <div className="text-sm opacity-80">Daily AI-Powered Searches</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold">85%</div>
              <div className="text-sm opacity-80">of Users Trust AI Responses</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
