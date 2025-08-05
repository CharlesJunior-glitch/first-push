import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Users } from "lucide-react"

interface RelatedCourseCardProps {
  course: {
    id: number
    title: string
    instructor: string
    rating: number
    students: number
    image: string
    price: number
  }
}

export function RelatedCourseCard({ course }: RelatedCourseCardProps) {
  return (
    <Card className="course-card overflow-hidden border-none shadow-md">
      <div className="relative">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          width={300}
          height={150}
          className="w-full h-36 object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm font-medium">{course.rating}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="ml-1 text-sm">{course.students}</span>
          </div>
        </div>
        <div className="text-lg font-bold">${course.price}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" asChild>
          <Link href={`/courses/${course.id}`}>View Course</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
