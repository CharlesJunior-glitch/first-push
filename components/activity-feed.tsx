import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, BookOpen, BarChart2 } from "lucide-react"

interface ActivityFeedProps {
  activities: {
    id: number
    type: string
    course: string
    lesson?: string
    quiz?: string
    score?: string
    date: string
    time: string
  }[]
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "lesson_completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "certificate_earned":
        return <Award className="h-5 w-5 text-yellow-500" />
      case "course_started":
        return <BookOpen className="h-5 w-5 text-blue-500" />
      case "quiz_passed":
        return <BarChart2 className="h-5 w-5 text-purple-500" />
      default:
        return <CheckCircle className="h-5 w-5 text-primary" />
    }
  }

  const getActivityTitle = (activity: any) => {
    switch (activity.type) {
      case "lesson_completed":
        return `Completed lesson: ${activity.lesson}`
      case "certificate_earned":
        return `Earned certificate for: ${activity.course}`
      case "course_started":
        return `Started new course: ${activity.course}`
      case "quiz_passed":
        return `Passed quiz: ${activity.quiz} with ${activity.score}`
      default:
        return "Activity"
    }
  }

  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex">
              <div className="mr-4 mt-1">{getActivityIcon(activity.type)}</div>
              <div className="flex-1 border-b pb-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h4 className="font-medium">{getActivityTitle(activity)}</h4>
                  <div className="text-sm text-muted-foreground mt-1 sm:mt-0">
                    {activity.date} at {activity.time}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{activity.course}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
