"use client"

import Themes from "../themes"
import Threads from "./threads"
import Footer from "@/components/footer"
import { useNavigation } from "@/hooks/use-navigation"

const Navigation = () => {
  const { state } = useNavigation()

  return (
    <nav className={state === "collapsed" ? "w-0" : ""}>
      <div className="menu">
        <div className="title">Thèmes des conversations</div>
        <Themes />
        <div className="title">Historique des conversations</div>
        <Threads />
        <Footer />
      </div>
    </nav>
  )
}

export default Navigation
