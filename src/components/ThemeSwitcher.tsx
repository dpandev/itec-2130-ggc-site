import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { Button } from './ui/button'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <Button 
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative p-2 rounded-md dark:bg-secondary-background transition-colors"
    >
      <Sun className="h-4 w-4 sm:h-6 sm:w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 sm:h-6 sm:w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white" />
    </Button>
  )
}
