"use client"

import { v4 as uuid } from "uuid"
import { createElement } from "react"
import { useRouter } from "next/navigation"
import useThemes, { type Theme } from "@/hooks/use-themes"
import { useThreads } from "@/hooks/use-threads"

const ThemeItem = ({ theme: { icon, title } }: { theme: Theme }) => (
  <div className="theme">
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
  <div className="theme">
    <div className="icon">{createElement(icon)}</div>
    <div className="text">
      <h2>{title}</h2>
      <div>{description}</div>
    </div>
  </div>
)

const Themes = ({ size = "medium" }: { size?: "medium" | "big" }) => {
  const router = useRouter()
  const themes = useThemes()
  const { threads, addThread } = useThreads()

  const handleClick = ({ route: theme }: Theme) => {
    const id = uuid()
    const title = `Conversation #${threads.length + 1}`

    addThread({ id, theme, title })
    router.push(`/chat/${theme}/${id}`)
  }

  return (
    <ul className={`themes ${size}`}>
      {themes.map((theme, i) => (
        <li key={`theme-${i}`}>
          <div onClick={() => handleClick(theme)}>
            {size === "medium" && <ThemeItem theme={theme} />}
            {size === "big" && <ThemeItemBig theme={theme} />}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Themes
