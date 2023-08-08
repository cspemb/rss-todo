import { ThemeContainer, defaultThemeContainerProps } from '@/lib/themeStore'
import { ThemeToggle } from './components/nav/theme-toggle'

function App() {
  return (
    <ThemeContainer isGlobal {...defaultThemeContainerProps}>
      <ThemeToggle />
      <h1 className="text-blue-900">Hello World!</h1>
    </ThemeContainer>
  )
}

export default App
