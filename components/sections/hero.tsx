"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <Sparkles className="h-4 w-4" />
              The Future of SEO is Here
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-fluid-4xl font-bold leading-tight text-gray-900 lg:text-6xl"
          >
            Dominate{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AI Search Results
            </span>{" "}
            with Generative Engine Optimization
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 text-fluid-lg text-gray-600 lg:text-xl"
          >
            Traditional SEO is evolving. While others optimize for Google, we optimize for the future—
            ChatGPT, Bard, and all generative AI platforms. Get ahead of 99% of your competitors with 
            cutting-edge GEO strategies that make AI choose your content first.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started with GEO
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn How GEO Works
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">340%</div>
              <div className="text-sm text-gray-600">Average AI Search Visibility Increase</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">12x</div>
              <div className="text-sm text-gray-600">More Citations in AI Responses</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Successful GEO Campaigns</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-400/20 to-blue-600/20 blur-3xl" />
      </div>
    </section>
  )
}
