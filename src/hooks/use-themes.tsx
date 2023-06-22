import { FunctionComponent } from "react"

import BookIcon from "@/components/assets/book-icon"
import CalculatorIcon from "@/components/assets/calculator-icon"
import ClockArrowIcon from "@/components/assets/clock-arrow-icon"
import FileMagnifierIcon from "@/components/assets/file-magnifier-icon"
import CalendarArrowIcon from "@/components/assets/calendar-arrow-icon"

export interface Theme {
  route: string
  title: string
  description: string
  icon: FunctionComponent<any>
}

const useThemes = () =>
  [
    {
      icon: CalculatorIcon,
      route: "indemnite-licenciement",
      title: "Indemnité de licenciement",
      description:
        "Estimez simplement le montant de l'indemnité de licenciement",
    },
    {
      icon: BookIcon,
      route: "preavis-demission",
      title: "Préavis de démission",
      description:
        "Estimez la durée de préavis à respecter en cas de démission",
    },
    {
      icon: ClockArrowIcon,
      route: "preavis-licenciement",
      title: "Préavis de licenciement",
      description:
        "Estimez la durée de préavis à respecter en cas de licenciement",
    },
    {
      icon: FileMagnifierIcon,
      route: "trouver-convention-collective",
      title: "Trouver sa convention collective",
      description:
        "Recherchez une convention collective par Entreprise, SIRET, Nom ounuméro IDCC",
    },
    {
      icon: CalendarArrowIcon,
      route: "preavis-depart-ou-retraite",
      title: "Préavis de départ ou de mise à la retraite",
      description:
        "Estimez la durée de préavis à respecter en cas de départ à la retraite ou de mise à la retraite",
    },
  ] as Theme[]

export default useThemes
