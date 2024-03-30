'use client'

import { useSchedule } from '@/hooks/use-schedule'
import { Button } from './ui/button'

export function ChangeDateButton() {
  const { handleRemoveInitialScheduleDate } = useSchedule()

  return <Button onClick={handleRemoveInitialScheduleDate}>Change date</Button>
}
