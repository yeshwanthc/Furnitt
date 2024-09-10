"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const furnishingItems = [
  "Sofa", "Dining Table", "Bed", "Wardrobe", "TV Unit", "Study Table",
  "Chairs", "Coffee Table", "Mattress", "Curtains", "Lighting"
]

const languages = [
  { code: "KN", name: "ಕನ್ನಡ" },
  { code: "HI", name: "हिन्दी" },
  { code: "TA", name: "தமிழ்" },
  { code: "TE", name: "తెలుగు" },
  { code: "ML", name: "മലയാളം" },
  { code: "MR", name: "मराठी" },
  { code: "GU", name: "ગુજરાતી" },
  { code: "BN", name: "বাংলা" },
  { code: "OT", name: "Others" }
]

export default function MultistepCostCalculator() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<{
    rooms: string,
    budget: string,
    items: string[],
    timeline: string,
    language: string,
    fullName: string,
    address: string,
    city: string,
    pincode: string,
    mobile: string,
    email: string
  }>({
    rooms: "",
    budget: "",
    items: [],
    timeline: "",
    language: "",
    fullName: "",
    address: "",
    city: "Bangalore",
    pincode: "",
    mobile: "",
    email: ""
  })
  

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    setStep(prev => prev + 1)
  }

  const handlePrevious = () => {
    setStep(prev => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <Card className="w-full max-w-2xl mx-auto my-[80px]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Furnishing Cost Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label>How many rooms are you looking to furnish?</Label>
                <RadioGroup
                  value={formData.rooms}
                  onValueChange={(value) => updateFormData("rooms", value)}
                  className="flex flex-col space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2BHK" id="2BHK" />
                    <Label htmlFor="2BHK">2 BHK</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3BHK" id="3BHK" />
                    <Label htmlFor="3BHK">3 BHK</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4BHK" id="4BHK" />
                    <Label htmlFor="4BHK">4 BHK</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <Label>What is your budget for this project?</Label>
                <RadioGroup
                  value={formData.budget}
                  onValueChange={(value) => updateFormData("budget", value)}
                  className="flex flex-col space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3-4Lakhs" id="3-4Lakhs" />
                    <Label htmlFor="3-4Lakhs">3-4 Lakhs</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5-6Lakhs" id="5-6Lakhs" />
                    <Label htmlFor="5-6Lakhs">5-6 Lakhs</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="7-8Lakhs" id="7-8Lakhs" />
                    <Label htmlFor="7-8Lakhs">7-8 Lakhs</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <Label>What items are you looking to furnish?</Label>
              <div className="grid grid-cols-2 gap-4">
                {furnishingItems.map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <Checkbox
                      id={item}
                      checked={formData.items.includes(item)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateFormData("items", [...formData.items, item])
                        } else {
                          updateFormData("items", formData.items.filter(i => i !== item))
                        }
                      }}
                    />
                    <Label htmlFor={item}>{item}</Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div>
                <Label>By when will the site be ready for interiors?</Label>
                <RadioGroup
                  value={formData.timeline}
                  onValueChange={(value) => updateFormData("timeline", value)}
                  className="flex flex-col space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Within2Weeks" id="Within2Weeks" />
                    <Label htmlFor="Within2Weeks">Within 2 Weeks</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Within4-6Weeks" id="Within4-6Weeks" />
                    <Label htmlFor="Within4-6Weeks">Within 4-6 Weeks</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="After2Months" id="After2Months" />
                    <Label htmlFor="After2Months">After 2 Months</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <div>
                <Label>What language (apart from English) is your family most comfortable with?</Label>
                <Select
                  value={formData.language}
                  onValueChange={(value) => updateFormData("language", value)}
                >
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.name} - {lang.code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => updateFormData("fullName", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="address">Apartment/Villa Name and Locality</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => updateFormData("address", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => updateFormData("city", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="pincode">Current Residence Pincode</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => updateFormData("pincode", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) => updateFormData("mobile", e.target.value)}
                  className="mt-1"
                  placeholder="India (+91)"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 && (
          <Button onClick={handlePrevious} variant="outline">
            Previous
          </Button>
        )}
        {step < 6 ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
      </CardFooter>
    </Card>
  )
}