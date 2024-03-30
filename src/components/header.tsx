import { ChangeDateButton } from './change-date-button'

export function Header() {
  return (
    <header className="flex w-full h-28 justify-between items-center px-12">
      <h1 className="font-bold text-4xl">Shift Planner</h1>
      <ChangeDateButton />
    </header>
  )
}
