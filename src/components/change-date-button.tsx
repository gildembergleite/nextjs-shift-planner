'use client'

import { useSchedule } from '@/hooks/use-schedule'
import { Button } from './ui/button'

export function ChangeDateButton({ title }: { title: string }) {
  const { handleRemoveInitialScheduleDate } = useSchedule()

  return <Button onClick={handleRemoveInitialScheduleDate}>{title}</Button>
}
