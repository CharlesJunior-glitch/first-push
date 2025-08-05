import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Clock, Award } from "lucide-react"

interface StatCardProps {
  value: string
  label: string
  icon: string
}

export function StatCard({ value, label, icon }: StatCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "book-open":
        return <BookOpen className="h-6 w-6 text-primary" />
      case "users":
        return <Users className="h-6 w-6 text-primary" />
      case "clock":
        return <Clock className="h-6 w-6 text-primary" />
      case "award":
        return <Award className="h-6 w-6 text-primary" />
      default:
        return <BookOpen className="h-6 w-6 text-primary" />
    }
  }

  return (
    <Card className="border-none shadow-sm">
      <CardContent className="p-6 flex items-center">
        <div className="p-3 rounded-full bg-primary/10 mr-4">{getIcon()}</div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </CardContent>
    </Card>
  )
}
