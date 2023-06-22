"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

export interface Thread {
  id: string
  title: string
  theme: string
}

interface ThreadsContextValue {
  threads: Thread[]
  status: "ready" | "loading"
  addThread: (thread: Thread) => void
  setStatus: (status: "ready" | "loading") => void
}

const ThreadsContext = createContext<ThreadsContextValue>({
  status: "ready",
  threads: [],
  addThread: () => {},
  setStatus: () => {},
})

interface ThreadsProviderProps {
  children: React.ReactNode
}

export const ThreadsProvider: React.FC<ThreadsProviderProps> = ({
  children,
}) => {
  const [threads, setThreads] = useState<Thread[]>([])
  const [initialized, setInitialized] = useState<boolean>(false)
  const [status, setStatus] = useState<"ready" | "loading">("ready")

  const addThread = useCallback((thread: Thread) => {
    setThreads((prevThreads) => [...prevThreads, thread])
  }, [])

  useEffect(() => {
    const storedThreads = localStorage.getItem("threads")
    if (storedThreads) {
      setThreads(JSON.parse(storedThreads))
    }
    setInitialized(true)
  }, [])

  useEffect(() => {
    if (initialized) {
      localStorage.setItem("threads", JSON.stringify(threads))
    }
  }, [threads, initialized])

  const contextValue = useMemo(
    () => ({
      status,
      threads,
      addThread,
      setStatus,
    }),
    [status, threads, addThread, setStatus]
  )

  return (
    <ThreadsContext.Provider value={contextValue}>
      {children}
    </ThreadsContext.Provider>
  )
}

export const useThreads = (): ThreadsContextValue => useContext(ThreadsContext)
