import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { PlayCircle, Clock } from "lucide-react"

interface EnrolledCourseCardProps {
  course: {
    id: number
    title: string
    category: string
    instructor: string
    progress: number
    image: string
    lastAccessed: string
    nextLesson: string
    completedLessons: number
    totalLessons: number
  }
}

export function EnrolledCourseCard({ course }: EnrolledCourseCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-1/3 lg:w-1/4">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              width={300}
              height={200}
              className="w-full h-48 md:h-full object-cover"
            />
            <Badge className="absolute top-3 left-3">{course.category}</Badge>
          </div>
          <div className="p-6 flex-1">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">Instructor: {course.instructor}</p>
              </div>
              <div className="flex items-center mt-2 md:mt-0">
                <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                <span className="text-sm text-muted-foreground">Last accessed {course.lastAccessed}</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm font-medium">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
              <p className="text-sm text-muted-foreground mt-2">
                {course.completedLessons} of {course.totalLessons} lessons completed
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button asChild>
                <Link href={`/courses/${course.id}/learn`}>
                  <PlayCircle className="mr-2 h-4 w-4" /> Continue Learning
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/courses/${course.id}`}>Course Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
