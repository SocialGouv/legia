"use client"

import Themes from "./themes"
import Threads from "./threads"
import { ThreadsProvider } from "@/hooks/use-threads"
import { useNavigation } from "@/hooks/use-navigation"

const Navigation = () => {
  const { state } = useNavigation()

  return (
    <nav className={state === "collapsed" ? "w-0" : ""}>
      <div className="menu">
        <ThreadsProvider>
          <Themes />
          <Threads />
        </ThreadsProvider>
      </div>
    </nav>
  )
}

export default Navigation
