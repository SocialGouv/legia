import Chat from "@/components/chat"
import useThemes from "@/hooks/use-themes"

import "./styles.css"
import { Theme } from "@/hooks/use-prompts"

export default function Page({
  params: {
    slug: [themeSlug, id],
  },
}: {
  params: { slug: [Theme, string] }
}) {
  const { getTheme } = useThemes()
  const theme = getTheme(themeSlug)
  const Icon = theme?.icon

  return (
    <div className="page">
      <div className="header">
        <div className="header-container">
          <div className="icon">{Icon && <Icon />}</div>
          <div className="text">
            <div className="title">{theme?.title}</div>
            <div className="description">{theme?.description}</div>
          </div>
        </div>
      </div>
      <Chat id={id} theme={themeSlug} />
    </div>
  )
}
