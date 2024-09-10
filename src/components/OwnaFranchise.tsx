import {
  Bell,
  CheckCircle,
  Cog,
  DollarSign,
  Factory,
  Search,
  Truck,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function OwnAFranchise() {
  const benefits = [
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Precision Manufacturing",
      description: "Using CNC machines for high-quality production",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Centralised Design Services",
      description: "Expert design support for all your projects",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "On-time Delivery",
      description: "Reliable and punctual delivery services",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "QC Check for Every Panel",
      description: "Rigorous quality control for each component",
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Factory-Made Quality",
      description: "Manufactured like other premium kitchen appliances",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Real-time Delivery Updates",
      description: "Keep clients informed with status notifications",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "End-to-End CRM Automation",
      description: "From lead generation to installation",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Unbeatable Value",
      description: "Best quality-to-price ratio in the market",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Own a Cabinet Factory Franchise
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Join the leader in precision-engineered kitchen solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-semibold">
                  <span className="mr-2 text-primary">{benefit.icon}</span>
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Apply for Franchise
          </Button>
        </div>

        <div className="mt-16 bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Why Choose Cabinet Factory?
          </h2>
          <p className="text-gray-700 mb-4">
            As a ply manufacturer, we offer unmatched value and quality. Our
            state-of-the-art manufacturing process ensures precision,
            durability, and consistency in every product. By joining our
            franchise network, you&apos;ll benefit from our established brand,
            cutting-edge technology, and comprehensive support system.
          </p>
          <p className="text-gray-700">
            Our commitment to innovation, quality, and customer satisfaction
            sets us apart in the market. With Cabinet Factory, you&apos;re not just
            owning a franchise; you&apos;re partnering with a leader in the kitchen
            solutions industry.
          </p>
        </div>
      </div>
    </div>
  );
}
