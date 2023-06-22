"use client"

import { useDrawer } from "@/hooks/use-drawer"
import DrawerIcon from "@/components/assets/drawer-icon"

const DrawerToggle = () => {
  const { toggleDrawer } = useDrawer()

  return (
    <button onClick={() => toggleDrawer()}>
      <DrawerIcon />
    </button>
  )
}

export default DrawerToggle
