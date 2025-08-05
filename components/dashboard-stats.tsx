import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, CheckCircle, Clock, Award } from "lucide-react"

interface DashboardStatsProps {
  stats: {
    label: string
    value: string | number
    icon: string
  }[]
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "book-open":
        return <BookOpen className="h-6 w-6 text-primary" />
      case "check-circle":
        return <CheckCircle className="h-6 w-6 text-primary" />
      case "clock":
        return <Clock className="h-6 w-6 text-primary" />
      case "award":
        return <Award className="h-6 w-6 text-primary" />
      default:
        return <BookOpen className="h-6 w-6 text-primary" />
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="border-none shadow-md">
          <CardContent className="p-6 flex items-center">
            <div className="p-3 rounded-full bg-primary/10 mr-4">{getIcon(stat.icon)}</div>
            <div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
