

'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import emailjs from '@emailjs/browser'


interface ContactFormProps {
    contactTest: boolean;
  }

export default function ContactForm({ contactTest }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    city: '',
    location: '',
    requirement: ''
  })
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleLocationChange = (value: string) => {
    setFormData(prevData => ({
      ...prevData,
      location: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setSubmitStatus(null)
    
    try {
      const result = await emailjs.send('service_c2vzuwm', 'template_701demn', formData, 'eRc9HuYWfkGtJ5uUM')
      console.log(result.text)
      setSubmitMessage('Message sent successfully!')
      setSubmitStatus('success')
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        city: '',
        location: '',
        requirement: ''
      })
    } catch (error) {
      console.error('Failed to send message:', error)
      setSubmitMessage('Failed to send message. Please try again.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-6">
        {contactTest?<h2 className="text-3xl font-bold mb-6">Contact Us</h2>:""}
      
      {submitMessage && (
          <Alert variant={submitStatus === 'success' ? 'default' : 'destructive'}>
            <AlertDescription>{submitMessage}</AlertDescription>
          </Alert>
        )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              aria-required="true"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              placeholder="john@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              aria-required="true"
              placeholder=""
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              aria-required="true"
              placeholder="Bangalore"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Select name="location" value={formData.location} onValueChange={handleLocationChange}>
            <SelectTrigger id="location" aria-required="true">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="north">North</SelectItem>
              <SelectItem value="south">South</SelectItem>
              <SelectItem value="east">East</SelectItem>
              <SelectItem value="west">West</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="requirement">Your Requirement</Label>
          <Textarea
            id="requirement"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            rows={5}
            required
            aria-required="true"
            placeholder="Please describe your requirements..."
          />
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
    
      </form>
    </div>
  )
}