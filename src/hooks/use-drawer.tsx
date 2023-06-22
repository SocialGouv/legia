"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

interface DrawerContextValue {
  toggleDrawer: () => void
  state: "expanded" | "collapsed"
  setState: (status: "expanded" | "collapsed") => void
}

const DrawerContext = createContext<DrawerContextValue>({
  state: "expanded",
  setState: () => {},
  toggleDrawer: () => {},
})

interface DrawerProviderProps {
  children: React.ReactNode
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [initialized, setInitialized] = useState<boolean>(false)
  const [state, setState] = useState<"expanded" | "collapsed">("expanded")

  const toggleDrawer = useCallback(() => {
    console.log("toggleDrawer")
    setState((prevState) =>
      prevState === "expanded" ? "collapsed" : "expanded"
    )
  }, [])

  useEffect(() => {
    console.log("localStorage.getItem")
    const storedState = localStorage.getItem("drawer")
    if (storedState === "expanded" || storedState === "collapsed") {
      setState(storedState)
    }
    setInitialized(true)
  }, [])

  useEffect(() => {
    if (initialized) {
      console.log("localStorage.setItem")
      localStorage.setItem("drawer", state)
    }
  }, [state, initialized])

  const contextValue = useMemo(
    () => ({
      state,
      setState,
      toggleDrawer,
    }),
    [state, setState, toggleDrawer]
  )

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawer = (): DrawerContextValue => useContext(DrawerContext)
