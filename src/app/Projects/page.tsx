import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Users, Github, Globe } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website showcasing your skills and projects",
      status: "in-progress",
      progress: 75,
      dueDate: "2024-02-15",
      teamSize: 1,
      difficulty: "medium",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      requirements: [
        "Responsive design for all devices",
        "Dark/light mode toggle",
        "Project showcase section",
        "Contact form with validation",
        "SEO optimization"
      ]
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with user authentication and payment processing",
      status: "upcoming",
      progress: 0,
      dueDate: "2024-03-20",
      teamSize: 3,
      difficulty: "hard",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      requirements: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart functionality",
        "Payment processing integration",
        "Admin dashboard for inventory management"
      ]
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      status: "completed",
      progress: 100,
      dueDate: "2024-01-30",
      teamSize: 2,
      difficulty: "easy",
      technologies: ["React", "Firebase", "Material-UI"],
      requirements: [
        "Create, edit, and delete tasks",
        "Task categorization and priority levels",
        "Real-time collaboration",
        "Due date reminders",
        "Progress tracking"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground">
          Major assignments and collaborative projects to demonstrate your skills.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow border-2 border-foreground">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Badge 
                    variant={
                      project.status === 'completed' ? 'default' : 
                      project.status === 'in-progress' ? 'neutral' : 'neutral'
                    }
                  >
                    {project.status}
                  </Badge>
                  <Badge variant="neutral">
                    {project.difficulty}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-muted-foreground">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="w-full" />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Due: {project.dueDate}
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      Team: {project.teamSize}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="neutral" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="requirements">
                      <AccordionTrigger>Project Requirements</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {project.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1">
                      {project.status === 'completed' ? 'View Project' : 'Start Project'}
                    </Button>
                    <Button variant="neutral" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="neutral" size="sm">
                      <Globe className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-secondary-background rounded-lg border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4">Project Guidelines</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 bg-background rounded border-2 border-foreground">
            <h3 className="font-semibold mb-2">Submission</h3>
            <p className="text-sm text-muted-foreground">All projects must be submitted via GitHub with proper documentation</p>
          </div>
          <div className="p-4 bg-background rounded border-2 border-foreground">
            <h3 className="font-semibold mb-2">Grading</h3>
            <p className="text-sm text-muted-foreground">Projects are graded on functionality, design, code quality, and documentation</p>
          </div>
          <div className="p-4 bg-background rounded border-2 border-foreground">
            <h3 className="font-semibold mb-2">Collaboration</h3>
            <p className="text-sm text-muted-foreground">Team projects require clear contribution documentation and communication</p>
          </div>
        </div>
      </div>
    </div>
  )
}
