'use client'

import { ScheduleProvider } from '@/context/schedule-context'
import { ReactNode } from 'react'

export function Provider({ children }: { children: ReactNode }) {
  return <ScheduleProvider>{children}</ScheduleProvider>
}
