import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Navigation } from "@/components/Navigation"
import LabsPage from "@/app/Labs/page"
import InClassPage from "@/app/InClass/page"
import ProjectsPage from "@/app/Projects/page"
import AboutPage from "@/app/About/page"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Briefcase, Info, ArrowRight } from "lucide-react"

function HomePage() {
  const sections = [
    {
      title: "Labs",
      description: "Hands-on exercises and practical assignments.",
      icon: BookOpen,
      path: "/labs",
      color: "bg-blue-100 dark:bg-blue-900"
    },
    {
      title: "In-Class Activities",
      description: "Classroom sessions, lectures, and learning materials.",
      icon: Users,
      path: "/inclass",
      color: "bg-green-100 dark:bg-green-900"
    },
    {
      title: "Projects",
      description: "Major assignments and collaborative projects.",
      icon: Briefcase,
      path: "/projects",
      color: "bg-purple-100 dark:bg-purple-900"
    },
    {
      title: "About",
      description: "About the student.",
      icon: Info,
      path: "/about",
      color: "bg-orange-100 dark:bg-orange-900"
    }
  ]
  const otherInfo = {
    info1: 15,
    info2: 3,
    info3: 3
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6">Welcome to ITEC 2130</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Web Development - Fall 2025
        </p>
        <p className="text-lg text-muted-foreground mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <Card key={section.title} className="hover:shadow-lg transition-all duration-300 border-2 border-foreground hover:translate-y-[-4px]">
              <CardHeader>
                <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center mb-4 border-2 border-foreground`}>
                  <Icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full group">
                  <Link to={section.path}>
                    Explore {section.title}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="mt-16 p-8 bg-secondary-background rounded-lg border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-3xl font-bold mb-6 text-center">Other Information</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-main mb-2">{otherInfo.info1}</div>
            <p className="text-sm text-muted-foreground">Info1</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-main mb-2">{otherInfo.info2}</div>
            <p className="text-sm text-muted-foreground">Info2</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-main mb-2">{otherInfo.info3}</div>
            <p className="text-sm text-muted-foreground">Info3</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/labs" element={<LabsPage />} />
            <Route path="/inclass" element={<InClassPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App