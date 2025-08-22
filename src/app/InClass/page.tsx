import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Users, Video, FileText, Presentation } from "lucide-react"

export default function InClassPage() {
  const sessions = [
    {
      id: 1,
      title: "Introduction to Modern Web Development",
      date: "2024-01-10",
      time: "10:00 AM - 11:30 AM",
      instructor: "Dr. Smith",
      type: "lecture",
      materials: ["slides", "demo", "notes"]
    },
    {
      id: 2,
      title: "React Components Deep Dive",
      date: "2024-01-12",
      time: "10:00 AM - 11:30 AM",
      instructor: "Dr. Smith",
      type: "workshop",
      materials: ["code", "exercises", "video"]
    },
    {
      id: 3,
      title: "State Management Patterns",
      date: "2024-01-15",
      time: "10:00 AM - 11:30 AM",
      instructor: "Dr. Smith",
      type: "discussion",
      materials: ["slides", "examples"]
    }
  ]

  const materials = [
    {
      id: 1,
      title: "Course Syllabus",
      type: "document",
      icon: FileText,
      description: "Complete course overview and schedule"
    },
    {
      id: 2,
      title: "Lecture Slides",
      type: "presentation",
      icon: Presentation,
      description: "PowerPoint presentations from lectures"
    },
    {
      id: 3,
      title: "Video Recordings",
      type: "video",
      icon: Video,
      description: "Recorded lectures and demonstrations"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">In-Class Activities</h1>
        <p className="text-lg text-muted-foreground">
          Classroom sessions, lectures, and interactive learning materials.
        </p>
      </div>

      <Tabs defaultValue="sessions" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="sessions">Class Sessions</TabsTrigger>
          <TabsTrigger value="materials">Course Materials</TabsTrigger>
        </TabsList>

        <TabsContent value="sessions">
          <div className="grid gap-6">
            {sessions.map((session) => (
              <Card key={session.id} className="hover:shadow-lg transition-shadow border-2 border-foreground">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{session.title}</CardTitle>
                    <Badge variant="neutral">
                      {session.type}
                    </Badge>
                  </div>
                  <CardDescription>Class session on {session.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {session.date}
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        {session.time}
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        {session.instructor}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {session.materials.map((material) => (
                        <Badge key={material} variant="neutral" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="default" size="sm">
                      View Details
                    </Button>
                    <Button variant="neutral" size="sm">
                      Download Materials
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="materials">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((material) => (
              <Card key={material.id} className="hover:shadow-lg transition-shadow border-2 border-foreground">
                <CardHeader>
                  <div className="flex items-center">
                    <material.icon className="w-8 h-8 mr-3" />
                    <CardTitle className="text-lg">{material.title}</CardTitle>
                  </div>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="neutral">
                    Access {material.type}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-6 bg-secondary-background rounded-lg border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4">Class Schedule</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 bg-background rounded border-2 border-foreground">
            <h3 className="font-semibold mb-2">Monday</h3>
            <p className="text-sm text-muted-foreground">10:00 AM - 11:30 AM</p>
          </div>
          <div className="p-4 bg-background rounded border-2 border-foreground">
            <h3 className="font-semibold mb-2">Wednesday</h3>
            <p className="text-sm text-muted-foreground">10:00 AM - 11:30 AM</p>
          </div>
          <div className="p-4 bg-background rounded border-2 border-foreground">
            <h3 className="font-semibold mb-2">Friday</h3>
            <p className="text-sm text-muted-foreground">10:00 AM - 11:30 AM</p>
          </div>
        </div>
      </div>
    </div>
  )
}
