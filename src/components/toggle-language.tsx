'use client'

import { FlagBrazil } from '@/assets/flag-brazil'
import { FlagUSA } from '@/assets/flag-usa'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { usePathname, useRouter } from '@/services/navigation'
import { LanguagesIcon } from 'lucide-react'

interface ToggleThemePros {
  ptLabel: string
  enLabel: string
}

export function ToggleLanguage(props: ToggleThemePros) {
  const { replace } = useRouter()
  const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <LanguagesIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => replace(pathname, { locale: 'pt' })}>
          <div className="flex gap-2 items-center">
            <FlagBrazil />
            {props.ptLabel}
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => replace(pathname, { locale: 'en' })}>
          <div className="flex gap-2 items-center">
            <FlagUSA />
            {props.enLabel}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
