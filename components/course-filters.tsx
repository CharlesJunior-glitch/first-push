"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter } from "lucide-react"

export function CourseFilters() {
  const [priceRange, setPriceRange] = useState([0, 200])

  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <Accordion type="multiple" defaultValue={["categories", "level", "price", "rating"]} className="w-full">
          <AccordionItem value="categories">
            <AccordionTrigger className="py-3">Categories</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="finance" />
                  <label
                    htmlFor="finance"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Finance
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="commerce" />
                  <label
                    htmlFor="commerce"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Commerce
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="sales" />
                  <label
                    htmlFor="sales"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Sales
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="trading" />
                  <label
                    htmlFor="trading"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Online Trading
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="level">
            <AccordionTrigger className="py-3">Level</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="beginner" />
                  <label
                    htmlFor="beginner"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Beginner
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="intermediate" />
                  <label
                    htmlFor="intermediate"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Intermediate
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="advanced" />
                  <label
                    htmlFor="advanced"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Advanced
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="all-levels" />
                  <label
                    htmlFor="all-levels"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    All Levels
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger className="py-3">Price</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Slider defaultValue={[0, 200]} max={200} step={1} value={priceRange} onValueChange={setPriceRange} />
                <div className="flex items-center justify-between">
                  <span className="text-sm">${priceRange[0]}</span>
                  <span className="text-sm">${priceRange[1]}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rating">
            <AccordionTrigger className="py-3">Rating</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="rating-4.5" />
                  <label
                    htmlFor="rating-4.5"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    4.5 & up
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="rating-4.0" />
                  <label
                    htmlFor="rating-4.0"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    4.0 & up
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="rating-3.5" />
                  <label
                    htmlFor="rating-3.5"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    3.5 & up
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="rating-3.0" />
                  <label
                    htmlFor="rating-3.0"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    3.0 & up
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="duration">
            <AccordionTrigger className="py-3">Duration</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="duration-short" />
                  <label
                    htmlFor="duration-short"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    0-4 weeks
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="duration-medium" />
                  <label
                    htmlFor="duration-medium"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    5-8 weeks
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="duration-long" />
                  <label
                    htmlFor="duration-long"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    9+ weeks
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex items-center justify-between mt-6">
          <Button variant="outline" size="sm">
            Reset
          </Button>
          <Button size="sm">Apply Filters</Button>
        </div>
      </CardContent>
    </Card>
  )
}
