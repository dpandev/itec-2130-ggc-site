import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, FileText } from "lucide-react"

export default function LabsPage() {
  const labs = [
    {
      id: 1,
      title: "Lab 1: Introduction to Web Development",
      description: "Basic HTML, CSS, and JavaScript fundamentals",
      status: "completed",
      dueDate: "2025-11-05"
    },
    {
      id: 2,
      title: "Lab 2: React Fundamentals",
      description: "Components, props, and state management",
      status: "in-progress",
      dueDate: "2025-12-12"
    },
    {
      id: 3,
      title: "Lab 3: Advanced React Patterns",
      description: "Hooks, context, and custom components",
      status: "upcoming",
      dueDate: "2025-12-03"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Labs</h1>
        <p className="text-lg text-muted-foreground">
          Hands-on exercises and practical assignments to reinforce your learning.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {labs.map((lab) => (
          <Card key={lab.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{lab.title}</CardTitle>
                <Badge 
                  variant={
                    lab.status === 'completed' ? 'default' : 
                    lab.status === 'in-progress' ? 'neutral' : 'neutral'
                  }
                >
                  {lab.status}
                </Badge>
              </div>
              <CardDescription>{lab.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <FileText className="w-4 h-4 mr-2" />
                  Due: {lab.dueDate}
                </div>
                <Button variant="neutral" size="sm">
                  {lab.status === 'completed' ? 'View' : 'Start'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-secondary-background rounded-lg border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4">Lab Resources</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center p-4 bg-background rounded border-2 border-foreground">
            <BookOpen className="w-6 h-6 mr-3" />
            <div>
              <h3 className="font-semibold">Lab Manual</h3>
              <p className="text-sm text-muted-foreground">Complete guide and instructions</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-background rounded border-2 border-foreground">
            <Code className="w-6 h-6 mr-3" />
            <div>
              <h3 className="font-semibold">Code Examples</h3>
              <p className="text-sm text-muted-foreground">Sample code and templates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
