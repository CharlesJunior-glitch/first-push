import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, ShoppingCart, TrendingUp, BarChart2, GraduationCap } from "lucide-react"

interface CategoryCardProps {
  category: {
    id: number
    name: string
    description: string
    icon: string
    courseCount: number
    color: string
    iconColor: string
  }
}

export function CategoryCard({ category }: CategoryCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "dollar-sign":
        return <DollarSign className={`h-8 w-8 ${category.iconColor}`} />
      case "shopping-cart":
        return <ShoppingCart className={`h-8 w-8 ${category.iconColor}`} />
      case "trending-up":
        return <TrendingUp className={`h-8 w-8 ${category.iconColor}`} />
      case "bar-chart-2":
        return <BarChart2 className={`h-8 w-8 ${category.iconColor}`} />
      default:
        return <GraduationCap className={`h-8 w-8 ${category.iconColor}`} />
    }
  }

  return (
    <Card className={`category-card border-none shadow-md ${category.color}`}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 rounded-full bg-background/80">{getIcon(category.icon)}</div>
          <h3 className="text-xl font-bold mb-2">{category.name}</h3>
          <p className="text-muted-foreground mb-4">{category.description}</p>
          <Badge variant="outline" className="mb-4">
            {category.courseCount} Courses
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-center">
        <Button variant="outline" asChild>
          <Link href={`/courses?category=${category.name.toLowerCase()}`}>Explore Courses</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
