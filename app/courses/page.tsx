import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CourseCard } from "@/components/course-card"
import { Search, SlidersHorizontal } from "lucide-react"
import { CourseFilters } from "@/components/course-filters"

export default function CoursesPage() {
  // Mock data
  const courses = [
    {
      id: 1,
      title: "Financial Planning Fundamentals",
      description: "Learn the essentials of financial planning and set yourself up for future success.",
      category: "Finance",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 1245,
      image: "/placeholder.svg?height=200&width=400",
      price: 89.99,
      level: "Beginner",
      duration: "6 weeks",
      lessons: 24,
    },
    {
      id: 2,
      title: "E-commerce Business Mastery",
      description: "Build and scale your online store with proven strategies and techniques.",
      category: "Commerce",
      instructor: "Michael Chen",
      rating: 4.7,
      students: 987,
      image: "/placeholder.svg?height=200&width=400",
      price: 99.99,
      level: "Intermediate",
      duration: "8 weeks",
      lessons: 32,
    },
    {
      id: 3,
      title: "Sales Psychology & Negotiation",
      description: "Master the art of persuasion and close more deals with psychological insights.",
      category: "Sales",
      instructor: "David Rodriguez",
      rating: 4.9,
      students: 1532,
      image: "/placeholder.svg?height=200&width=400",
      price: 79.99,
      level: "All Levels",
      duration: "5 weeks",
      lessons: 20,
    },
    {
      id: 4,
      title: "Stock Market Investing for Beginners",
      description: "Learn how to invest in stocks and build a diversified portfolio from scratch.",
      category: "Online Trading",
      instructor: "Jennifer Lee",
      rating: 4.6,
      students: 2156,
      image: "/placeholder.svg?height=200&width=400",
      price: 94.99,
      level: "Beginner",
      duration: "7 weeks",
      lessons: 28,
    },
    {
      id: 5,
      title: "Digital Marketing for E-commerce",
      description: "Drive traffic and increase sales for your online store with proven marketing strategies.",
      category: "Commerce",
      instructor: "Robert Williams",
      rating: 4.8,
      students: 1876,
      image: "/placeholder.svg?height=200&width=400",
      price: 109.99,
      level: "Intermediate",
      duration: "9 weeks",
      lessons: 36,
    },
    {
      id: 6,
      title: "B2B Sales Strategies",
      description: "Learn effective techniques for selling to businesses and closing high-value deals.",
      category: "Sales",
      instructor: "Amanda Thompson",
      rating: 4.7,
      students: 943,
      image: "/placeholder.svg?height=200&width=400",
      price: 89.99,
      level: "Advanced",
      duration: "6 weeks",
      lessons: 24,
    },
    {
      id: 7,
      title: "Cryptocurrency Trading Fundamentals",
      description: "Understand the basics of cryptocurrency markets and develop effective trading strategies.",
      category: "Online Trading",
      instructor: "Daniel Kim",
      rating: 4.5,
      students: 1654,
      image: "/placeholder.svg?height=200&width=400",
      price: 99.99,
      level: "Beginner",
      duration: "8 weeks",
      lessons: 32,
    },
    {
      id: 8,
      title: "Personal Finance Management",
      description: "Take control of your finances with budgeting, saving, and investment strategies.",
      category: "Finance",
      instructor: "Lisa Johnson",
      rating: 4.9,
      students: 2345,
      image: "/placeholder.svg?height=200&width=400",
      price: 69.99,
      level: "All Levels",
      duration: "4 weeks",
      lessons: 16,
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-10 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">Explore Courses</h1>
          <p className="text-muted-foreground">Discover our comprehensive collection of skill-building courses</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            View Options
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <CourseFilters />
        </div>
        <div className="lg:col-span-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search courses..." className="pl-10 w-full sm:w-[300px]" />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="commerce">Commerce</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="trading">Online Trading</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="finance" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {courses
                  .filter((course) => course.category === "Finance")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="commerce" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {courses
                  .filter((course) => course.category === "Commerce")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="sales" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {courses
                  .filter((course) => course.category === "Sales")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="trading" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {courses
                  .filter((course) => course.category === "Online Trading")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mr-2">
              Previous
            </Button>
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button variant="outline" className="mx-1">
              2
            </Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="ml-2">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
