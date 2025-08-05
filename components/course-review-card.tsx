import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface CourseReviewCardProps {
  review: {
    id: number
    user: string
    avatar: string
    rating: number
    date: string
    content: string
  }
}

export function CourseReviewCard({ review }: CourseReviewCardProps) {
  return (
    <Card className="border-none shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.user} />
            <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-medium">{review.user}</h4>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-muted-foreground">{review.date}</span>
            </div>
            <p className="text-muted-foreground">{review.content}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
