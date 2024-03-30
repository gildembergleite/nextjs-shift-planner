import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

type LocaleType = 'en' | 'pt'

export const locales: LocaleType[] = ['en', 'pt']

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as LocaleType)) notFound()

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
