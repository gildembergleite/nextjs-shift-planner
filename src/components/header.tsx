import { ChangeDateButton } from './change-date-button'
import { ToggleTheme } from './toggle-theme'

export function Header() {
  return (
    <header className="flex w-full justify-between items-center pt-16 px-12">
      <h1 className="font-bold text-4xl">Shift Planner</h1>
      <div className="flex items-center gap-4">
        <ChangeDateButton />
        <ToggleTheme />
      </div>
    </header>
  )
}
