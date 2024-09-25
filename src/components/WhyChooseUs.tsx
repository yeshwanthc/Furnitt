import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { PackageCheck, Trophy, Sofa, Palette } from "lucide-react"

const benefits = [
  {
    title: "Turnkey Solutions",
    description: "Transform your home into a beautiful, cozy space that's uniquely yours with our comprehensive interior services. End-to-End Interior Services, including design, execution, and personalized solutions, we provide the best interior design for your needs.",
    icon: PackageCheck,
  },
  {
    title: "Design Expertise",
    description: "Our skilled team of luxury interior designers brings your vision to life using practical materials and stunning aesthetics. We go beyond looks to enhance your lifestyle through thoughtful design.",
    icon: Trophy,
  },
  {
    title: "Modular Solutions",
    description: "Discover top-notch home interiors in Bangalore with our modern factory. We craft modular kitchens and stunning wardrobe designs with unmatched quality and speedy delivery, exceeding your expectations every time.",
    icon: Sofa,
  },
  {
    title: "Home Decor & More",
    description: "With vast experience and a 10,000 sq ft collection of home decor, Furnitt experts are here to add those final touches, making your home the best it can be.",
    icon: Palette,
  },
]

export default function WhyChooseFurnitt() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-main mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Furnitt</h2>
          <p className="text-lg text-gray-600">
            With extensive experience and access to a 10,000 square feet of home decor and furnishings, 
            the Furnitt Home Decor Experts are always at hand to lend the finishing touches, 
            to make your home the best it can possibly be.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full">
                    <benefit.icon className="w-8 h-8 text-primary text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}