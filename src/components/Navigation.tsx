import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import { BookOpen, Users, Briefcase, Info, Home } from "lucide-react"
import { Link } from "react-router-dom"

interface NavigationProps {
  currentPage?: string
}

export function Navigation({ currentPage = "home" }: NavigationProps) {
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Labs", path: "/labs", icon: BookOpen },
    { name: "In-Class", path: "/inclass", icon: Users },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "About", path: "/about", icon: Info },
  ]

  return (
    <nav className="bg-background border-b-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-main rounded border-2 border-foreground"></div>
              <span className="text-xl font-bold">ITEC 2130</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = currentPage === item.name.toLowerCase()
                return (
                  <Button
                    asChild
                    key={item.name}
                    variant={isActive ? "default" : "neutral"}
                    size="sm"
                    className={`flex items-center space-x-2 ${
                      isActive 
                        ? "bg-main text-main-foreground" 
                        : "hover:bg-secondary-background"
                    }`}
                  >
                    <Link to={item.path}>
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            
            {/* Mobile menu button */}
            <Button variant="neutral" size="sm" className="md:hidden">
              <span className="sr-only">Open menu</span>
              <div className="w-4 h-4 flex flex-col justify-center items-center">
                <div className="w-4 h-0.5 bg-foreground mb-1"></div>
                <div className="w-4 h-0.5 bg-foreground mb-1"></div>
                <div className="w-4 h-0.5 bg-foreground"></div>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden py-4 border-t-2 border-foreground">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.name.toLowerCase()
              
              return (
                <Button
                  asChild
                  key={item.name}
                  variant={isActive ? "default" : "neutral"}
                  size="sm"
                  className={`justify-start ${
                    isActive 
                      ? "bg-main text-main-foreground" 
                      : "hover:bg-secondary-background"
                  }`}
                >
                  <Link to={item.path}>
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
