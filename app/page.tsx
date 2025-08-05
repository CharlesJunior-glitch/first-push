import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Clock, Award, BarChart3, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { CategoryCard } from "@/components/category-card"
import { FeaturedCourseCard } from "@/components/featured-course-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { StatCard } from "@/components/stat-card"
import { NewsletterForm } from "@/components/newsletter-form"

export default function Home() {
  // Mock data
  const categories = [
    {
      id: 1,
      name: "Finance",
      description: "Master financial concepts, investment strategies, and wealth management",
      icon: "dollar-sign",
      courseCount: 12,
      color: "bg-blue-50 dark:bg-blue-950",
      iconColor: "text-blue-500",
    },
    {
      id: 2,
      name: "Commerce",
      description: "Learn e-commerce, retail management, and business operations",
      icon: "shopping-cart",
      courseCount: 8,
      color: "bg-green-50 dark:bg-green-950",
      iconColor: "text-green-500",
    },
    {
      id: 3,
      name: "Sales",
      description: "Develop persuasive sales techniques and customer relationship skills",
      icon: "trending-up",
      courseCount: 10,
      color: "bg-purple-50 dark:bg-purple-950",
      iconColor: "text-purple-500",
    },
    {
      id: 4,
      name: "Online Trading",
      description: "Understand stock markets, cryptocurrency, and trading strategies",
      icon: "bar-chart-2",
      courseCount: 9,
      color: "bg-orange-50 dark:bg-orange-950",
      iconColor: "text-orange-500",
    },
  ]

  const featuredCourses = [
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
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Emily Thompson",
      role: "Small Business Owner",
      content:
        "The commerce courses completely transformed my online business. I've increased sales by 200% in just 6 months by implementing the strategies I learned.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Financial Analyst",
      content:
        "As someone transitioning into finance, these courses provided exactly what I needed to succeed. The instructors are industry experts who share practical knowledge.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 3,
      name: "Sophia Garcia",
      role: "Sales Representative",
      content:
        "The sales techniques I learned helped me exceed my targets for three consecutive quarters. The role-playing exercises were particularly valuable.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4,
    },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                #1 Learning Platform for Professional Skills in Finance
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Master In-Demand Skills for Your Financial Career
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Develop practical expertise in finance, commerce, sales, and online trading with our expert-led courses
                and hands-on learning approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link href="/courses">
                    Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-background overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=32&width=32&text=${i}`}
                        alt={`User ${i}`}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">10,000+</span> students already enrolled
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
              <Image
                src="/placeholder.svg?height=500&width=500&text=Learning+Platform"
                alt="Learning Platform"
                width={500}
                height={500}
                className="mx-auto rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <StatCard value="100+" label="Expert Instructors" icon="users" />
            <StatCard value="250+" label="Courses Available" icon="book-open" />
            <StatCard value="15k+" label="Active Students" icon="user" />
            <StatCard value="95%" label="Success Rate" icon="award" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1">
                Diverse Learning Paths
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Our Categories</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find the perfect course to enhance your skills and advance your career
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1">
                Top-Rated Content
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Courses</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our most popular and highly-rated courses to jumpstart your learning journey
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <FeaturedCourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button size="lg" variant="outline" asChild>
              <Link href="/courses">
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The SkillsHub Advantage</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                What makes our learning platform stand out from the rest
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="feature-card border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Expert-Led Instruction</h3>
                <p className="text-muted-foreground">
                  Learn from industry professionals with years of real-world experience and proven success.
                </p>
              </CardContent>
            </Card>
            <Card className="feature-card border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Flexible Learning</h3>
                <p className="text-muted-foreground">
                  Study at your own pace with lifetime access to course materials and on-demand video.
                </p>
              </CardContent>
            </Card>
            <Card className="feature-card border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Certificates</h3>
                <p className="text-muted-foreground">
                  Earn industry-recognized certificates to showcase your new skills to employers.
                </p>
              </CardContent>
            </Card>
            <Card className="feature-card border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor your learning journey with detailed analytics and achievement milestones.
                </p>
              </CardContent>
            </Card>
            <Card className="feature-card border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Practical Projects</h3>
                <p className="text-muted-foreground">
                  Apply your knowledge with hands-on projects that simulate real-world scenarios.
                </p>
              </CardContent>
            </Card>
            <Card className="feature-card border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Community Support</h3>
                <p className="text-muted-foreground">
                  Connect with fellow learners and instructors in our active community forums.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1">
                Success Stories
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our community of learners who have transformed their careers
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Start Your Learning Journey Today
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Join thousands of successful students who have transformed their careers with our courses.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Flexible learning schedule</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Expert instructors with industry experience</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Practical, hands-on projects</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Industry-recognized certificates</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link href="/courses">
                    Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:pl-10">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
