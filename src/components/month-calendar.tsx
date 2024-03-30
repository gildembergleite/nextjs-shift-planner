'use client'

import { Calendar } from '@/components/ui/calendar'
import { useSchedule } from '@/hooks/use-schedule'

interface MonthCalendarProps {
  defaultMonth: number
}

export function MonthCalendar({ defaultMonth }: MonthCalendarProps) {
  const { schedule } = useSchedule()
  const currentYear = new Date().getFullYear()

  function separateScheduleByMonth() {
    const separatedSchedule = schedule.filter((date) => {
      return date.getMonth() === defaultMonth
    })

    return separatedSchedule
  }

  return (
    <Calendar
      selected={separateScheduleByMonth()}
      disabled
      defaultMonth={new Date(currentYear, defaultMonth)}
      mode="multiple"
      className="rounded-md border"
      disableNavigation
    />
  )
}
