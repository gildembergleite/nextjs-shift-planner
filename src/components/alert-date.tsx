'use client'

import { HomePageTranslations } from '@/app/[locale]/(home)/page'
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

export function AlertDate(props: HomePageTranslations) {
  const { startDate, handleSaveInitialScheduleDate } = useSchedule()

  return (
    <AlertDialog open={!startDate}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props.alertDateTitle}</AlertDialogTitle>
          <AlertDialogDescription>
            {props.alertDateDescription}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => handleSaveInitialScheduleDate(false)}
          >
            {props.alertDateCancelButtonLabel}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleSaveInitialScheduleDate(true)}
          >
            {props.alertDateConfirmButtonLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
