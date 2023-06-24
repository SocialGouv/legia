"use client"

import { useNavigation } from "@/hooks/use-navigation"
import DrawerIcon from "@/components/assets/drawer-icon"

import "./styles.css"

const NavigationToggle = () => {
  const { toggleNavigation } = useNavigation()

  return (
    <button className="navigation-toggle" onClick={() => toggleNavigation()}>
      <DrawerIcon />
    </button>
  )
}

export default NavigationToggle
