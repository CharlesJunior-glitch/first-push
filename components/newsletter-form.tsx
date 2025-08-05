"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, CheckCircle2 } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this to your API
    console.log("Subscribing email:", email)
    setIsSubmitted(true)
  }

  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-3">
        <CardTitle>Subscribe to Our Newsletter</CardTitle>
        <CardDescription>Get the latest updates on new courses, promotions, and learning tips.</CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="flex flex-col items-center text-center py-4">
            <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">Thank You for Subscribing!</h3>
            <p className="text-muted-foreground">You'll start receiving our newsletter at {email}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <Mail className="mr-2 h-4 w-4" /> Subscribe
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
