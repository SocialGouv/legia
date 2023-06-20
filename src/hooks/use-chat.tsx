"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

import type { ChatCompletionRequestMessage } from "openai"

export interface Message {
  metadata: {
    tokens?: number
    creationDate: Date
  }
  data: ChatCompletionRequestMessage
}

interface ChatContextValue {
  status: "ready" | "loading"
  messages: Message[]
  addMessage: (message: Message) => void
  setStatus: (status: "ready" | "loading") => void
}

const ChatContext = createContext<ChatContextValue>({
  status: "ready",
  messages: [],
  addMessage: () => {},
  setStatus: () => {},
})

interface ChatProviderProps {
  threadId: string
  children: React.ReactNode
}

export const ChatProvider: React.FC<ChatProviderProps> = ({
  children,
  threadId,
}) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [initialized, setInitialized] = useState<boolean>(false)
  const [status, setStatus] = useState<"ready" | "loading">("ready")

  const addMessage = useCallback((message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message])
  }, [])

  useEffect(() => {
    const storedMessages = localStorage.getItem(threadId)
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages))
    }
    setInitialized(true)
  }, [threadId])

  useEffect(() => {
    if (initialized) {
      localStorage.setItem(threadId, JSON.stringify(messages))
    }
  }, [threadId, messages, initialized])

  const contextValue = useMemo(
    () => ({
      status,
      messages,
      addMessage,
      setStatus,
    }),
    [status, messages, addMessage, setStatus]
  )

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  )
}

export const useChat = (): ChatContextValue => useContext(ChatContext)
