import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Award, Calendar, User, Bell, Settings, LogOut } from "lucide-react"
import { EnrolledCourseCard } from "@/components/enrolled-course-card"
import { CertificateCard } from "@/components/certificate-card"
import { DashboardStats } from "@/components/dashboard-stats"
import { UpcomingSessionCard } from "@/components/upcoming-session-card"
import { ActivityFeed } from "@/components/activity-feed"

export default function DashboardPage() {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
    joinDate: "January 15, 2023",
  }

  // Mock enrolled courses
  const enrolledCourses = [
    {
      id: 1,
      title: "Financial Planning Fundamentals",
      category: "Finance",
      instructor: "Sarah Johnson",
      progress: 65,
      image: "/placeholder.svg?height=150&width=300",
      lastAccessed: "2 days ago",
      nextLesson: "Retirement Planning Basics",
      completedLessons: 15,
      totalLessons: 24,
    },
    {
      id: 2,
      title: "E-commerce Business Mastery",
      category: "Commerce",
      instructor: "Michael Chen",
      progress: 30,
      image: "/placeholder.svg?height=150&width=300",
      lastAccessed: "1 week ago",
      nextLesson: "Digital Marketing Strategies",
      completedLessons: 8,
      totalLessons: 32,
    },
    {
      id: 3,
      title: "Sales Psychology & Negotiation",
      category: "Sales",
      instructor: "David Rodriguez",
      progress: 90,
      image: "/placeholder.svg?height=150&width=300",
      lastAccessed: "Yesterday",
      nextLesson: "Closing Techniques",
      completedLessons: 18,
      totalLessons: 20,
    },
  ]

  // Mock certificates
  const certificates = [
    {
      id: 1,
      title: "Introduction to Stock Trading",
      issueDate: "June 15, 2023",
      instructor: "Jennifer Lee",
      image: "/placeholder.svg?height=150&width=300",
    },
    {
      id: 2,
      title: "Digital Marketing Fundamentals",
      issueDate: "April 22, 2023",
      instructor: "Robert Williams",
      image: "/placeholder.svg?height=150&width=300",
    },
  ]

  // Mock upcoming sessions
  const upcomingSessions = [
    {
      id: 1,
      title: "Live Q&A: Investment Strategies",
      date: "Tomorrow",
      time: "3:00 PM - 4:00 PM",
      instructor: "Sarah Johnson",
      course: "Financial Planning Fundamentals",
    },
    {
      id: 2,
      title: "Workshop: Creating a Business Plan",
      date: "Friday, June 10",
      time: "1:00 PM - 3:00 PM",
      instructor: "Michael Chen",
      course: "E-commerce Business Mastery",
    },
  ]

  // Mock activity feed
  const activityFeed = [
    {
      id: 1,
      type: "lesson_completed",
      course: "Financial Planning Fundamentals",
      lesson: "Understanding Risk Tolerance",
      date: "Today",
      time: "10:30 AM",
    },
    {
      id: 2,
      type: "certificate_earned",
      course: "Introduction to Stock Trading",
      date: "June 15, 2023",
      time: "2:45 PM",
    },
    {
      id: 3,
      type: "course_started",
      course: "E-commerce Business Mastery",
      date: "June 1, 2023",
      time: "9:15 AM",
    },
    {
      id: 4,
      type: "quiz_passed",
      course: "Sales Psychology & Negotiation",
      quiz: "Negotiation Techniques",
      score: "90%",
      date: "May 28, 2023",
      time: "4:20 PM",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-10 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">My Dashboard</h1>
          <p className="text-muted-foreground">Track your progress and manage your learning journey</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{user.email}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Joined {user.joinDate}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center p-4 pt-0">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/profile">
                    <User className="h-4 w-4 mr-2" /> View Profile
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-1">
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/courses">
                    <BookOpen className="h-4 w-4 mr-2" /> Browse Courses
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/dashboard/certificates">
                    <Award className="h-4 w-4 mr-2" /> My Certificates
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/dashboard/schedule">
                    <Calendar className="h-4 w-4 mr-2" /> My Schedule
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/dashboard/settings">
                    <Settings className="h-4 w-4 mr-2" /> Account Settings
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start text-destructive" asChild>
                  <Link href="/logout">
                    <LogOut className="h-4 w-4 mr-2" /> Logout
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Live classes and workshops</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.map((session) => (
                  <UpcomingSessionCard key={session.id} session={session} />
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/dashboard/schedule">View All Sessions</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="space-y-8">
            {/* Stats */}
            <DashboardStats
              stats={[
                { label: "Courses Enrolled", value: enrolledCourses.length, icon: "book-open" },
                { label: "Courses Completed", value: "2", icon: "check-circle" },
                { label: "Hours Learned", value: "45", icon: "clock" },
                { label: "Certificates Earned", value: certificates.length, icon: "award" },
              ]}
            />

            {/* Tabs */}
            <Tabs defaultValue="my-courses">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="my-courses">My Courses</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="my-courses" className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  {enrolledCourses.map((course) => (
                    <EnrolledCourseCard key={course.id} course={course} />
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button variant="outline" asChild>
                    <Link href="/courses">Browse More Courses</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="certificates" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certificates.map((certificate) => (
                    <CertificateCard key={certificate.id} certificate={certificate} />
                  ))}
                </div>
                {certificates.length === 0 && (
                  <div className="text-center py-12">
                    <Award className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-medium mb-2">No Certificates Yet</h3>
                    <p className="text-muted-foreground mb-6">
                      Complete courses to earn certificates and showcase your skills.
                    </p>
                    <Button asChild>
                      <Link href="/courses">Browse Courses</Link>
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
                <ActivityFeed activities={activityFeed} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
