"use client"

import Themes from "./themes"
import Threads from "./threads"
import { useNavigation } from "@/hooks/use-navigation"

const Navigation = () => {
  const { state } = useNavigation()

  return (
    <nav className={state === "collapsed" ? "w-0" : ""}>
      <div className="menu">
        <Themes />
        <Threads />
      </div>
    </nav>
  )
}

export default Navigation
