import { AlertDate } from '@/components/alert-date'
import { Header } from '@/components/header'
import { MonthCalendar } from '@/components/month-calendar'
import { useTranslations } from 'next-intl'

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

  return (
    <main className="flex flex-col w-screen h-screen items-center justify-start">
      <Header {...homePageTranslations} />
      <section className="flex w-full h-full justify-center items-center px-12">
        <div className="grid grid-cols-6 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <MonthCalendar key={index} defaultMonth={index} locale={locale} />
          ))}
        </div>
        <AlertDate {...homePageTranslations} />
      </section>
    </main>
  )
}
