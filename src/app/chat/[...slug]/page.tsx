import Chat from "@/components/chat"

export default function Page({
  params: {
    slug: [theme, id],
  },
}: {
  params: { slug: string[] }
}) {
  return (
    <div className="page">
      <div>Theme: {theme}</div>
      <div>ID: {id}</div>
      <Chat id={id} theme={theme} />
    </div>
  )
}
