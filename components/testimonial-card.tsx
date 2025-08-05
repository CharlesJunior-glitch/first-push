import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  testimonial: {
    id: number
    name: string
    role: string
    content: string
    avatar: string
    rating: number
  }
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-md h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-6 flex-1">{testimonial.content}</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
