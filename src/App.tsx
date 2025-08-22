import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navigation } from "@/components/Navigation"
import LabsPage from "@/app/Labs/page"
import InClassPage from "@/app/InClass/page"
import ProjectsPage from "@/app/Projects/page"
import AboutPage from "@/app/About/page"
import { Button } from "@/components/ui/button"

function HomePage() {
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
        <Button>Click me</Button>
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
