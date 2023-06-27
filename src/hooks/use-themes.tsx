import { FunctionComponent } from "react"

import BookIcon from "@/components/assets/book-icon"
import CalculatorIcon from "@/components/assets/calculator-icon"
import ClockArrowIcon from "@/components/assets/clock-arrow-icon"
import FileMagnifierIcon from "@/components/assets/file-magnifier-icon"

export interface Theme {
  slug: string
  title: string
  description: string
  icon: FunctionComponent<any>
}

const themes = [
  {
    icon: CalculatorIcon,
    slug: "indemnite-licenciement",
    title: "Indemnité de licenciement",
    description: "Estimez simplement le montant de l'indemnité de licenciement",
  },
  {
    icon: BookIcon,
    slug: "preavis-demission",
    title: "Préavis de démission",
    description: "Estimez la durée de préavis à respecter en cas de démission",
  },
  {
    icon: ClockArrowIcon,
    slug: "preavis-licenciement",
    title: "Préavis de licenciement",
    description:
      "Estimez la durée de préavis à respecter en cas de licenciement",
  },
  {
    icon: FileMagnifierIcon,
    slug: "trouver-convention-collective",
    title: "Trouver sa convention collective",
    description:
      "Recherchez une convention collective par Entreprise, SIRET, Nom ounuméro IDCC",
  },
] as Theme[]

function getTheme(slug: string) {
  return themes.find((theme) => theme.slug === slug)
}

const useThemes = () => ({ themes, getTheme })

export default useThemes
