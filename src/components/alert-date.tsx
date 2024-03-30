'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { useSchedule } from '@/hooks/use-schedule'

export function AlertDate() {
  const { startDate, handleSaveInitialScheduleDate } = useSchedule()

  return (
    <AlertDialog open={!startDate}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you going to work today?</AlertDialogTitle>
          <AlertDialogDescription>
            To set up your 12/36 schedule, we need to know if you are going to
            work today.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => handleSaveInitialScheduleDate(false)}
          >
            NO
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleSaveInitialScheduleDate(true)}
          >
            YES
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
