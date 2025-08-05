import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User } from "lucide-react"

interface UpcomingSessionCardProps {
  session: {
    id: number
    title: string
    date: string
    time: string
    instructor: string
    course: string
  }
}

export function UpcomingSessionCard({ session }: UpcomingSessionCardProps) {
  return (
    <Card className="border-none shadow-sm">
      <CardContent className="p-4">
        <h4 className="font-medium mb-2">{session.title}</h4>
        <div className="space-y-2 mb-3">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{session.date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{session.time}</span>
          </div>
          <div className="flex items-center text-sm">
            <User className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{session.instructor}</span>
          </div>
        </div>
        <Button variant="outline" size="sm" className="w-full">
          Join Session
        </Button>
      </CardContent>
    </Card>
  )
}
