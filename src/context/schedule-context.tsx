import { createContext, ReactNode, useEffect, useState } from 'react'

interface ScheduleContextProps {
  startDate: string | null
  schedule: Date[]
  handleSaveInitialScheduleDate: (confirm: boolean) => void
  handleRemoveInitialScheduleDate: () => void
}

export const ScheduleContext = createContext({} as ScheduleContextProps)

export function ScheduleProvider({ children }: { children: ReactNode }) {
  const [schedule, setSchedule] = useState<Date[]>([])

  const [startDate, setStartDate] = useState(
    localStorage.getItem('initialScheduleDate'),
  )

  function handleSaveInitialScheduleDate(confirm: boolean) {
    if (typeof window === 'undefined') return

    if (confirm) {
      const today = new Date().toString()
      localStorage.setItem('initialScheduleDate', today)
      setStartDate(today)
      return
    }
    const tomorrow = (new Date().getDate() + 1).toString()
    localStorage.setItem('initialScheduleDate', tomorrow)
    setStartDate(tomorrow)
  }

  function handleRemoveInitialScheduleDate() {
    if (typeof window === 'undefined') return

    localStorage.removeItem('initialScheduleDate')
    setStartDate(null)
  }

  useEffect(() => {
    function generateSchedule() {
      if (!startDate) return

      const date = new Date(startDate)
      let currentDate = date

      const schedule: Date[] = []

      while (currentDate.getFullYear() === date.getFullYear()) {
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 2))
        schedule.push(new Date(currentDate))
      }

      setSchedule(schedule)
    }

    generateSchedule()
  }, [startDate])

  return (
    <ScheduleContext.Provider
      value={{
        startDate,
        schedule,
        handleSaveInitialScheduleDate,
        handleRemoveInitialScheduleDate,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  )
}
