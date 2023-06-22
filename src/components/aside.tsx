"use client"

import { useDrawer } from "@/hooks/use-drawer"
import Themes from "./themes"

const Aside = () => {
  const { state } = useDrawer()

  return (
    <aside className={state}>
      <Themes />
    </aside>
  )
}

export default Aside
{
  /* <ThreadsProvider>
          <Menu />
</ThreadsProvider> */
}
