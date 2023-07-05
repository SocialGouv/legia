import { FunctionComponent } from "react"
import CalculatorIcon from "@/components/assets/calculator-icon"

export interface Theme {
  slug: string
  title: string
  description: string
  icon: FunctionComponent<any>
}

const themes = [
  {
    icon: CalculatorIcon,
    slug: "test",
    title: "Chatbot",
    description: "Chatbot d'experimentation",
  },
] as Theme[]

function getTheme(slug: string) {
  return themes.find((theme) => theme.slug === slug)
}

const useThemes = () => ({ themes, getTheme })

export default useThemes
