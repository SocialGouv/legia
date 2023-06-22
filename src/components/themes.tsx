import Link from "next/link"
import { FunctionComponent, createElement } from "react"

import BookIcon from "@/components/assets/book-icon"
import CalculatorIcon from "@/components/assets/calculator-icon"
import ClockArrowIcon from "@/components/assets/clock-arrow-icon"
import FileMagnifierIcon from "@/components/assets/file-magnifier-icon"
import CalendarArrowIcon from "@/components/assets/calendar-arrow-icon"

interface Theme {
  title: string
  description: string
  icon: FunctionComponent<any>
}

const themes = [
  {
    icon: CalculatorIcon,
    title: "Indemnité de licenciement",
    description: "Estimez simplement le montant de l'indemnité de licenciement",
  },
  {
    icon: BookIcon,
    title: "Préavis de démission",
    description: "Estimez la durée de préavis à respecter en cas de démission",
  },
  {
    icon: ClockArrowIcon,
    title: "Préavis de licenciement",
    description:
      "Estimez la durée de préavis à respecter en cas de licenciement",
  },
  {
    icon: FileMagnifierIcon,
    title: "Trouver sa convention collective",
    description:
      "Recherchez une convention collective par Entreprise, SIRET, Nom ounuméro IDCC",
  },
  {
    icon: CalendarArrowIcon,
    title: "Préavis de départ ou de mise à la retraite",
    description:
      "Estimez la durée de préavis à respecter en cas de départ à la retraite ou de mise à la retraite",
  },
] as Theme[]

const ThemeItem = ({ theme: { icon, title } }: { theme: Theme }) => (
  <div className="tile">
    <div className="icon">{createElement(icon)}</div>
    <div className="text">
      <h2>{title}</h2>
    </div>
  </div>
)

const ThemeItemBig = ({
  theme: { icon, title, description },
}: {
  theme: Theme
}) => (
  <div className="tile">
    <div className="icon">{createElement(icon)}</div>
    <div className="text">
      <h2>{title}</h2>
      <div>{description}</div>
    </div>
  </div>
)

const Themes = ({ size = "medium" }: { size?: "medium" | "big" }) => (
  <ul className="themes">
    {themes.map((theme, i) => (
      <li key={`theme-${i}`}>
        <Link href="/">
          {size === "medium" && <ThemeItem theme={theme} />}
          {size === "big" && <ThemeItemBig theme={theme} />}
        </Link>
      </li>
    ))}
  </ul>
)

export default Themes
