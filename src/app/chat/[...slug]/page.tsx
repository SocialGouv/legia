import Chat from "@/components/chat"
import useThemes from "@/hooks/use-themes"

import "./styles.css"

export default function Page({
  params: {
    slug: [id],
  },
}: {
  params: { slug: [string] }
}) {
  const { getTheme } = useThemes()
  const theme = getTheme("test")
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
      <Chat id={id} />
    </div>
  )
}
