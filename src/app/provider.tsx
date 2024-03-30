'use client'

import { ScheduleProvider } from '@/context/schedule-context'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export function Provider({ children }: { children: ReactNode }) {
  return (
    <ScheduleProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ScheduleProvider>
  )
}
