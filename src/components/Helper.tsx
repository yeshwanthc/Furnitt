"use client"

import React from "react"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Shield, Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "All-round service",
    description: "From design to installation of your modular wardrobe, our experts handle it all for you.",
    icon: ArrowRight,
  },
  {
    title: "Warranty Note",
    description: "Providing you with an authorized warranty card, we cover all manufacturing defects.",
    icon: Shield,
  },
  {
    title: "45-Days Delivery",
    description: "With design, manufacturing & supply innovations we make it possible.",
    icon: Clock,
  },
  {
    title: "Premier Experience",
    description: "A world-class customer-centric approach that makes for a hassle-free kitchen design experience like no other.",
    icon: Star,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16">
      <div className="container-main mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="mt-4 flex items-center justify-center">
                   
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}