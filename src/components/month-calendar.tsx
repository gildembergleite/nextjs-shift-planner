'use client'

import { Calendar } from '@/components/ui/calendar'
import { useSchedule } from '@/hooks/use-schedule'
import { enUS, ptBR } from 'date-fns/locale'

interface MonthCalendarProps {
  defaultMonth: number
  locale: string
}

export function MonthCalendar({ defaultMonth, locale }: MonthCalendarProps) {
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
      locale={locale === 'pt' ? ptBR : enUS}
      selected={separateScheduleByMonth()}
      disabled
      defaultMonth={new Date(currentYear, defaultMonth)}
      mode="multiple"
      className="rounded-md border"
      disableNavigation
    />
  )
}
