import { HomePageTranslations } from '@/app/[locale]/(home)/page'
import { ChangeDateButton } from './change-date-button'
import { ToggleLanguage } from './toggle-language'
import { ToggleTheme } from './toggle-theme'

export function Header(props: HomePageTranslations) {
  return (
    <header className="flex w-full justify-between items-center pt-16 px-12">
      <h1 className="font-bold text-4xl">{props.title}</h1>
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
