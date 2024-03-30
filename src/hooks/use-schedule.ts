import { ScheduleContext } from '@/context/schedule-context'
import { useContext } from 'react'

export function useSchedule() {
  const context = useContext(ScheduleContext)
  if (!context) {
    throw new Error('useSchedule must be used within a ScheduleProvider')
  }
  return context
}
