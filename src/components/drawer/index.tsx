"use client"

import { useDrawer } from "@/hooks/use-drawer"
import Themes from "./themes"
import Threads from "./threads"
import { ThreadsProvider } from "@/hooks/use-threads"

const Aside = () => {
  const { state } = useDrawer()

  return (
    <aside className={state === "collapsed" ? "w-0" : ""}>
      <ThreadsProvider>
        <Themes />
        <Threads />
      </ThreadsProvider>
    </aside>
  )
}

export default Aside
