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
  const messagesEndRef = useRef<HTMLLIElement | null>(null)

  const { messages, append, setMessages } = useChat({ id })

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, SCROLL_DELAY)
  }

  useEffect(() => {
    const messages = JSON.parse(localStorage.getItem(id) || "[]")
    if (messages.length) {
      setMessages(messages)
    } else {
      append({ role: "system", content: prompts[theme].system })
    }
  }, [id, theme, setMessages, append, prompts])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(messages))
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
