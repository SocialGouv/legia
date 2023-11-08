"use client"

import { useChat } from "ai/react"
import React, { useRef, useEffect } from "react"

import Message from "./message"
import UserIcon from "@/components/assets/user-icon"
import RobotIcon from "@/components/assets/robot-icon"
import usePrompts, { type Theme } from "@/hooks/use-prompts"

const SCROLL_DELAY = 300

const Messages = ({ id, theme }: { id: string; theme: Theme }) => {
  const { prompts } = usePrompts()
  const systemPrompt = prompts[theme].system
  const messagesEndRef = useRef<HTMLLIElement | null>(null)

  const { messages, append, setMessages, reload } = useChat({ id })

  useEffect(() => {
    if (!messages.length) {
      const history = JSON.parse(localStorage.getItem(id) || "[]")
      if (history.length) {
        setMessages(history)
      } else {
        append({ role: "system", content: systemPrompt })
      }
    }
  })

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, SCROLL_DELAY)
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (messages.length !== 1) {
      localStorage.setItem(id, JSON.stringify(messages)) // to debounce
    }
  }, [id, messages])

  return (
    <ul className="messages">
      {messages.slice(1).map((message, i) => (
        <li key={message.id} className={message.role}>
          <div className="message-container">
            <div className="icon">
              {message.role === "user" ? <UserIcon /> : <RobotIcon />}
            </div>
            <Message message={message} />
          </div>
        </li>
      ))}
      <li ref={messagesEndRef}></li>
    </ul>
  )
}

export default Messages
