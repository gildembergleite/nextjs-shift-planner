import { AlertDate } from '@/components/alert-date'
import { Header } from '@/components/header'
import { MonthCalendar } from '@/components/month-calendar'

export default function HomePage() {
  return (
    <main className="flex flex-col w-screen h-screen items-center justify-start">
      <Header />
      <section className="flex w-full h-full justify-center items-center px-12">
        <div className="grid grid-cols-6 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <MonthCalendar key={index} defaultMonth={index} />
          ))}
        </div>
        <AlertDate />
      </section>
    </main>
  )
}
