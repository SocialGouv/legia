import Chat from "@/components/chat"
import useThemes from "@/hooks/use-themes"

export default function Page({
  params: {
    slug: [themeSlug, id],
  },
}: {
  params: { slug: string[] }
}) {
  const { getTheme } = useThemes()
  const theme = getTheme(themeSlug)
  const Icon = theme?.icon

  return (
    <div className="page">
      {/* <div>Theme: {themeSlug}</div>
      <div>ID: {id}</div> */}
      <div className="header">
        <div>{Icon && <Icon />}</div>
        <div>{theme?.title}</div>
        <div>{theme?.description}</div>
      </div>
      <Chat id={id} theme={themeSlug} />
    </div>
  )
}
