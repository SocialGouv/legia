import Themes from "@/components/drawer/themes"

export default function Page({
  params: { theme },
}: {
  params: { theme: string }
}) {
  return (
    <div className="page">
      <div>Theme: {theme}</div>
    </div>
  )
}
