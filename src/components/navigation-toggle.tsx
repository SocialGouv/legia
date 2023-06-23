"use client"

import { useNavigation } from "@/hooks/use-navigation"
import DrawerIcon from "@/components/assets/drawer-icon"

const NavigationToggle = () => {
  const { toggleNavigation } = useNavigation()

  return (
    <button onClick={() => toggleNavigation()}>
      <DrawerIcon />
    </button>
  )
}

export default NavigationToggle
