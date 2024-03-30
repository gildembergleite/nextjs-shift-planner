import { AlertDate } from '@/components/alert-date'
import { Header } from '@/components/header'
import { MonthCalendar } from '@/components/month-calendar'
import { useTranslations } from 'next-intl'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export interface HomePageTranslations {
  title: string
  changeDateButtonLabel: string
  lightThemeLabel: string
  darkThemeLabel: string
  systemThemeLabel: string
  languagePtLabel: string
  languageEnLabel: string
  alertDateTitle: string
  alertDateDescription: string
  alertDateCancelButtonLabel: string
  alertDateConfirmButtonLabel: string
}

interface HomePageProps {
  params: {
    locale: string
  }
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  const homePage = useTranslations('HomePage')

  const homePageTranslations = {
    title: homePage('title'),
    changeDateButtonLabel: homePage('changeDateButtonLabel'),
    lightThemeLabel: homePage('lightThemeLabel'),
    darkThemeLabel: homePage('darkThemeLabel'),
    systemThemeLabel: homePage('systemThemeLabel'),
    languagePtLabel: homePage('languagePtLabel'),
    languageEnLabel: homePage('languageEnLabel'),
    alertDateTitle: homePage('alertDateTitle'),
    alertDateDescription: homePage('alertDateDescription'),
    alertDateCancelButtonLabel: homePage('alertDateCancelButtonLabel'),
    alertDateConfirmButtonLabel: homePage('alertDateConfirmButtonLabel'),
  }

  const currentMonth = new Date().getMonth()
  console.log(currentMonth)
  return (
    <main className="flex flex-col w-screen h-full items-center justify-start">
      <Header {...homePageTranslations} />
      <section className="flex w-full h-full justify-center items-center py-12 md:px-12">
        <div className="hidden md:grid h-full gap-6 3xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-2">
          {Array.from({ length: 12 }).map((_, index) => (
            <MonthCalendar key={index} defaultMonth={index} locale={locale} />
          ))}
        </div>
        <Carousel
          opts={{
            startIndex: currentMonth,
            loop: true,
          }}
          className="relative flex md:hidden w-full min-w-[90vw] max-w-[300px] pt-8"
        >
          <CarouselContent>
            {Array.from({ length: 12 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="flex w-full justify-center items-center">
                  <MonthCalendar defaultMonth={index} locale={locale} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute left-1/2 -top-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
        <AlertDate {...homePageTranslations} />
      </section>
    </main>
  )
}
