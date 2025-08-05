import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Clock, BookOpen } from "lucide-react"

interface FeaturedCourseCardProps {
  course: {
    id: number
    title: string
    description: string
    category: string
    instructor: string
    rating: number
    students: number
    image: string
    price: number
    level: string
    duration: string
  }
}

export function FeaturedCourseCard({ course }: FeaturedCourseCardProps) {
  return (
    <Card className="course-card overflow-hidden border-none shadow-md">
      <div className="relative">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-3 right-3 bg-background/80">{course.category}</Badge>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm font-medium">{course.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({course.students} students)</span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-muted-foreground mr-1" />
            <span className="text-sm">{course.duration}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 text-muted-foreground mr-1" />
            <span className="text-sm">{course.level}</span>
          </div>
        </div>
        <div className="flex items-center">
          <Avatar className="h-6 w-6 mr-2">
            <AvatarImage
              src={`/placeholder.svg?height=24&width=24&text=${course.instructor.charAt(0)}`}
              alt={course.instructor}
            />
            <AvatarFallback>{course.instructor.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm">{course.instructor}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <div className="text-lg font-bold">${course.price}</div>
        <Button asChild>
          <Link href={`/courses/${course.id}`}>View Course</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
