import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Clock, BookOpen, Users, Award, Calendar } from "lucide-react"

export default function AboutPage() {
  const about = {
    title: "ITEC 2130 - Intro to Web Development",
    code: "ITEC-2130",
    badge: 3,
    semester: "Fall 2025",
    student: {
      name: "Name",
      title: "Title",
      major: "Major",
      email: "email@ggc.edu",
      phone: "(XXX) XXX-XXXX",
      location: "USA",
      availability: "Mon/Wed 2:00 PM - 4:00 PM"
    },
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    infobox1: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    ],
    infobox2: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."],
    infobox3: {
      detail1: 30,
      detail2: 40,
      detail3: 20,
      detail4: 10
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">About the student</h1>
        <p className="text-lg text-muted-foreground">
          Learn about the student.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-2 border-foreground">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{about.title}</CardTitle>
                  <CardDescription className="text-lg">{about.code}</CardDescription>
                </div>
                <div className="text-right">
                  <Badge variant="neutral" className="text-lg px-3 py-1">
                    {about.badge} Years of Experience
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-1">{about.semester}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed mb-6">{about.description}</p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Course Objectives</h3>
                <ul className="list-disc list-inside space-y-2">
                  {about.infobox1.map((objective, index) => (
                    <li key={index} className="text-sm">{objective}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground">
            <CardHeader>
              <CardTitle className="text-xl">Prerequisites</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {about.infobox2.map((prereq, index) => (
                  <li key={index} className="text-sm">{prereq}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground">
            <CardHeader>
              <CardTitle className="text-xl">Grading Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Assignments</span>
                    <Badge variant="neutral">{about.infobox3.detail1}%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Projects</span>
                    <Badge variant="neutral">{about.infobox3.detail2}%</Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Exams</span>
                    <Badge variant="neutral">{about.infobox3.detail3}%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Participation</span>
                    <Badge variant="neutral">{about.infobox3.detail4}%</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-2 border-foreground">
            <CardHeader>
              <CardTitle className="text-xl">Who am I?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary-background rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-foreground">
                  <Users className="w-12 h-12" />
                </div>
                <h3 className="text-lg font-semibold">{about.student.name}</h3>
                <p className="text-sm text-muted-foreground">{about.student.title}</p>
                <p className="text-sm text-muted-foreground">{about.student.major}</p>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-3" />
                  <a href={`mailto:${about.student.email}`} className="hover:underline">
                    {about.student.email}
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 mr-3" />
                  {about.student.phone}
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-3" />
                  {about.student.location}
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-3" />
                  {about.student.availability}
                </div>
              </div>

              <Button className="w-full" variant="neutral">
                Request a meeting
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground">
            <CardHeader>
              <CardTitle className="text-xl">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="neutral" className="w-full justify-start">
                <BookOpen className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </Button>
                <Button variant="neutral" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  GitHub Profile
               </Button>
                <Button variant="neutral" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-2" />
                  Portfolio Site
               </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 p-6 bg-secondary-background rounded-lg border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4">Resources/Books</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-4 bg-background rounded border-2 border-foreground">
            <h3 className="font-semibold mb-2">Textbook</h3>
            <p className="text-sm text-muted-foreground">"Modern Web Development" by John Doe</p>
          </div>
          <div className="p-4 bg-background rounded border-2 border-foreground">
            <h3 className="font-semibold mb-2">Software</h3>
            <p className="text-sm text-muted-foreground">VS Code, Node.js, Git</p>
          </div>
          <div className="p-4 bg-background rounded border-2 border-foreground">
            <h3 className="font-semibold mb-2">Platform</h3>
            <p className="text-sm text-muted-foreground">Canvas LMS, GitHub</p>
          </div>
          <div className="p-4 bg-background rounded border-2 border-foreground">
            <h3 className="font-semibold mb-2">Support</h3>
            <p className="text-sm text-muted-foreground">Discord server, Slack Channel</p>
          </div>
        </div>
      </div>
    </div>
  )
}
