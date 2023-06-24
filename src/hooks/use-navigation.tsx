"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

interface NavigationContextValue {
  toggleNavigation: () => void
  state: "expanded" | "collapsed"
  setState: (status: "expanded" | "collapsed") => void
}

const NavigationContext = createContext<NavigationContextValue>({
  state: "collapsed",
  setState: () => {},
  toggleNavigation: () => {},
})

interface NavigationProviderProps {
  children: React.ReactNode
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [initialized, setInitialized] = useState<boolean>(false)
  const [state, setState] = useState<"expanded" | "collapsed">("collapsed")

  const toggleNavigation = useCallback(() => {
    setState((prevState) =>
      prevState === "expanded" ? "collapsed" : "expanded"
    )
  }, [])

  useEffect(() => {
    const storedState = localStorage.getItem("navigation")
    if (storedState === "expanded" || storedState === "collapsed") {
      setState(storedState)
    }
    setInitialized(true)
  }, [])

  useEffect(() => {
    if (initialized) {
      localStorage.setItem("navigation", state)
    }
  }, [state, initialized])

  const contextValue = useMemo(
    () => ({
      state,
      setState,
      toggleNavigation,
    }),
    [state, setState, toggleNavigation]
  )

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = (): NavigationContextValue =>
  useContext(NavigationContext)
