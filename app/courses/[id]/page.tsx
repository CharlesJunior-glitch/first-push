import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, BookOpen, BarChart2, Award, Users, Star, CheckCircle2, PlayCircle } from "lucide-react"
import { CourseReviewCard } from "@/components/course-review-card"
import { RelatedCourseCard } from "@/components/related-course-card"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  // Mock data for a single course
  const course = {
    id: Number.parseInt(params.id),
    title: "Financial Planning Fundamentals",
    description:
      "Learn the essentials of financial planning and set yourself up for future success with this comprehensive course. You'll master budgeting, saving strategies, investment basics, retirement planning, and more.",
    longDescription:
      "This course is designed to give you a solid foundation in personal financial planning. Whether you're just starting your financial journey or looking to improve your existing knowledge, this course will provide you with practical tools and strategies to achieve your financial goals.\n\nYou'll learn how to create and maintain a budget, develop saving strategies, understand investment options, plan for retirement, manage debt effectively, and protect your assets with proper insurance coverage. By the end of this course, you'll have a comprehensive financial plan tailored to your specific needs and goals.",
    category: "Finance",
    instructor: {
      name: "Sarah Johnson",
      title: "Certified Financial Planner",
      bio: "Sarah is a Certified Financial Planner with over 15 years of experience in the financial industry. She has helped hundreds of clients achieve their financial goals and is passionate about financial education.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    rating: 4.8,
    reviewCount: 245,
    students: 1245,
    image: "/placeholder.svg?height=400&width=800",
    price: 89.99,
    level: "Beginner",
    duration: "6 weeks",
    lessons: 24,
    lastUpdated: "March 2023",
    language: "English",
    features: [
      "Lifetime access to course materials",
      "24 on-demand video lessons",
      "12 downloadable resources",
      "5 practical exercises",
      "Certificate of completion",
      "Access on mobile and TV",
    ],
    curriculum: [
      {
        id: 1,
        title: "Introduction to Financial Planning",
        lessons: [
          { id: 1, title: "What is Financial Planning?", duration: "15:30", type: "video" },
          { id: 2, title: "Setting Financial Goals", duration: "12:45", type: "video" },
          { id: 3, title: "Financial Planning Process", duration: "18:20", type: "video" },
          { id: 4, title: "Module Quiz", type: "quiz" },
        ],
      },
      {
        id: 2,
        title: "Budgeting and Cash Flow Management",
        lessons: [
          { id: 5, title: "Creating a Budget", duration: "20:15", type: "video" },
          { id: 6, title: "Tracking Expenses", duration: "14:30", type: "video" },
          { id: 7, title: "Managing Cash Flow", duration: "16:45", type: "video" },
          { id: 8, title: "Budgeting Exercise", type: "exercise" },
          { id: 9, title: "Module Quiz", type: "quiz" },
        ],
      },
      {
        id: 3,
        title: "Saving and Investment Basics",
        lessons: [
          { id: 10, title: "Importance of Saving", duration: "12:20", type: "video" },
          { id: 11, title: "Types of Savings Accounts", duration: "15:10", type: "video" },
          { id: 12, title: "Introduction to Investments", duration: "22:30", type: "video" },
          { id: 13, title: "Risk and Return", duration: "18:45", type: "video" },
          { id: 14, title: "Investment Exercise", type: "exercise" },
          { id: 15, title: "Module Quiz", type: "quiz" },
        ],
      },
      {
        id: 4,
        title: "Retirement Planning",
        lessons: [
          { id: 16, title: "Retirement Needs Analysis", duration: "19:30", type: "video" },
          { id: 17, title: "Retirement Accounts", duration: "21:15", type: "video" },
          { id: 18, title: "Social Security Benefits", duration: "16:40", type: "video" },
          { id: 19, title: "Retirement Planning Exercise", type: "exercise" },
          { id: 20, title: "Module Quiz", type: "quiz" },
        ],
      },
      {
        id: 5,
        title: "Debt Management and Credit",
        lessons: [
          { id: 21, title: "Understanding Credit Scores", duration: "14:25", type: "video" },
          { id: 22, title: "Managing Debt Effectively", duration: "17:50", type: "video" },
          { id: 23, title: "Debt Reduction Strategies", duration: "20:10", type: "video" },
          { id: 24, title: "Final Course Project", type: "project" },
        ],
      },
    ],
    reviews: [
      {
        id: 1,
        user: "Michael P.",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        date: "2 months ago",
        content:
          "This course completely changed how I approach my finances. The budgeting techniques alone saved me hundreds of dollars in the first month!",
      },
      {
        id: 2,
        user: "Jennifer L.",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 4,
        date: "3 months ago",
        content:
          "Very comprehensive course with practical advice. I especially appreciated the retirement planning section which helped me set up my first IRA.",
      },
      {
        id: 3,
        user: "Robert K.",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        date: "1 month ago",
        content:
          "Sarah is an excellent instructor who explains complex financial concepts in an easy-to-understand way. Highly recommended for beginners!",
      },
    ],
    relatedCourses: [
      {
        id: 2,
        title: "Investment Strategies for Beginners",
        instructor: "David Chen",
        rating: 4.7,
        students: 987,
        image: "/placeholder.svg?height=150&width=300",
        price: 79.99,
      },
      {
        id: 3,
        title: "Retirement Planning Masterclass",
        instructor: "Lisa Rodriguez",
        rating: 4.9,
        students: 1532,
        image: "/placeholder.svg?height=150&width=300",
        price: 94.99,
      },
      {
        id: 4,
        title: "Debt Elimination Strategies",
        instructor: "Mark Wilson",
        rating: 4.6,
        students: 756,
        image: "/placeholder.svg?height=150&width=300",
        price: 69.99,
      },
    ],
  }

  // Calculate total course duration
  const totalLessons = course.curriculum.reduce((total, section) => total + section.lessons.length, 0)

  return (
    <div className="animate-fade-in">
      {/* Course Header */}
      <div className="bg-secondary/50 py-10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{course.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{course.description}</p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 font-medium">{course.rating}</span>
                  <span className="ml-1 text-muted-foreground">({course.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="ml-1">{course.students} students</span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} alt={course.instructor.name} />
                  <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{course.instructor.name}</p>
                  <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="w-full sm:w-auto">
                  Enroll Now - ${course.price}
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <PlayCircle className="mr-2 h-4 w-4" /> Preview Course
                </Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/20">
                  <PlayCircle className="mr-2 h-5 w-5" /> Watch Preview
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                  <div className="prose max-w-none">
                    <p>{course.longDescription}</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Create a comprehensive personal financial plan",
                      "Develop and maintain an effective budget",
                      "Understand different investment options and strategies",
                      "Plan for retirement with confidence",
                      "Manage and reduce debt effectively",
                      "Protect your assets with proper insurance",
                      "Make informed financial decisions",
                      "Set and achieve financial goals",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Course Features</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {course.features.map((feature, index) => (
                      <Card key={index} className="bg-secondary/50 border-none">
                        <CardContent className="p-4 flex items-center">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                          <span>{feature}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="curriculum" className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Course Curriculum</h2>
                    <div className="text-sm text-muted-foreground">
                      {totalLessons} lessons • {course.duration}
                    </div>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {course.curriculum.map((section) => (
                      <AccordionItem key={section.id} value={`section-${section.id}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center justify-between w-full pr-4">
                            <span>{section.title}</span>
                            <span className="text-sm text-muted-foreground">{section.lessons.length} lessons</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pt-2">
                            {section.lessons.map((lesson) => (
                              <div
                                key={lesson.id}
                                className="flex items-center justify-between p-3 rounded-md hover:bg-secondary/50"
                              >
                                <div className="flex items-center">
                                  {lesson.type === "video" ? (
                                    <PlayCircle className="h-5 w-5 text-primary mr-3" />
                                  ) : lesson.type === "quiz" ? (
                                    <BarChart2 className="h-5 w-5 text-primary mr-3" />
                                  ) : lesson.type === "exercise" ? (
                                    <BookOpen className="h-5 w-5 text-primary mr-3" />
                                  ) : (
                                    <Award className="h-5 w-5 text-primary mr-3" />
                                  )}
                                  <span>{lesson.title}</span>
                                </div>
                                {lesson.duration && (
                                  <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
              <TabsContent value="instructor" className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} alt={course.instructor.name} />
                    <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{course.instructor.name}</h2>
                    <p className="text-muted-foreground mb-4">{course.instructor.title}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1 font-medium">4.8</span>
                        <span className="ml-1 text-muted-foreground">Instructor Rating</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <span className="ml-1">5,230 Students</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-5 w-5 text-muted-foreground" />
                        <span className="ml-1">7 Courses</span>
                      </div>
                    </div>
                    <div className="prose max-w-none">
                      <p>{course.instructor.bio}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
                    <div className="bg-secondary/50 p-6 rounded-lg text-center">
                      <div className="text-5xl font-bold mb-2">{course.rating}</div>
                      <div className="flex justify-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${
                              star <= Math.floor(course.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">Course Rating • {course.reviewCount} Reviews</div>
                    </div>
                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        const percentage =
                          rating === 5 ? 75 : rating === 4 ? 20 : rating === 3 ? 5 : rating === 2 ? 0 : 0
                        return (
                          <div key={rating} className="flex items-center gap-3">
                            <div className="flex items-center w-20">
                              <span>{rating}</span>
                              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 ml-1" />
                            </div>
                            <Progress value={percentage} className="h-2 flex-1" />
                            <div className="w-12 text-right text-sm text-muted-foreground">{percentage}%</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="space-y-6">
                    {course.reviews.map((review) => (
                      <CourseReviewCard key={review.id} review={review} />
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 space-y-6">
                  <div className="text-3xl font-bold">${course.price}</div>
                  <Button className="w-full" size="lg">
                    Enroll Now
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">30-Day Money-Back Guarantee</p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-muted-foreground mr-3" />
                      <div>
                        <p className="font-medium">Duration</p>
                        <p className="text-sm text-muted-foreground">{course.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-muted-foreground mr-3" />
                      <div>
                        <p className="font-medium">Lessons</p>
                        <p className="text-sm text-muted-foreground">{totalLessons} lessons</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <BarChart2 className="h-5 w-5 text-muted-foreground mr-3" />
                      <div>
                        <p className="font-medium">Level</p>
                        <p className="text-sm text-muted-foreground">{course.level}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-muted-foreground mr-3" />
                      <div>
                        <p className="font-medium">Students</p>
                        <p className="text-sm text-muted-foreground">{course.students} enrolled</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-muted-foreground mr-3" />
                      <div>
                        <p className="font-medium">Certificate</p>
                        <p className="text-sm text-muted-foreground">Certificate of completion</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline" className="w-full">
                      <PlayCircle className="mr-2 h-4 w-4" /> Preview Course
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses */}
      <div className="bg-secondary/50 py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Related Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {course.relatedCourses.map((relatedCourse) => (
              <RelatedCourseCard key={relatedCourse.id} course={relatedCourse} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
