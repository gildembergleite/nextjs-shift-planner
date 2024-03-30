import { HomePageTranslations } from '@/app/[locale]/(home)/page'
import { ChangeDateButton } from './change-date-button'
import { ToggleLanguage } from './toggle-language'
import { ToggleTheme } from './toggle-theme'

export function Header(props: HomePageTranslations) {
  return (
    <header className="flex flex-col md:flex-row w-full justify-between items-center pt-8 md:pt-16 md:px-12 gap-8">
      <h1 className="text-center md:text-left font-bold text-4xl px-3 md:px-0">
        {props.title}
      </h1>
      <div className="flex items-center gap-4">
        <ChangeDateButton title={props.changeDateButtonLabel} />
        <ToggleTheme
          lightLabel={props.lightThemeLabel}
          darkLabel={props.darkThemeLabel}
          systemLabel={props.systemThemeLabel}
        />
        <ToggleLanguage
          ptLabel={props.languagePtLabel}
          enLabel={props.languageEnLabel}
        />
      </div>
    </header>
  )
}
