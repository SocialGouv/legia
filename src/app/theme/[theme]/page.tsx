import Themes from "@/components/navigation/themes"

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
