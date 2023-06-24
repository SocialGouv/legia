"use client"

import { useChat } from "ai/react"
import React, { useRef, useEffect } from "react"

import Message from "./message"
import UserIcon from "@/components/assets/user-icon"
import RobotIcon from "@/components/assets/robot-icon"

const SCROLL_DELAY = 300

const Messages = ({ id }: { id: string }) => {
  const messagesEndRef = useRef<HTMLLIElement | null>(null)

  const { messages, setMessages } = useChat({ id })

  useEffect(() => {
    const messages = JSON.parse(localStorage.getItem(id) || "[]")
    setMessages(messages)
  }, [id, setMessages])

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, SCROLL_DELAY)
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(messages))
  }, [id, messages])

  return (
    <ul className="messages">
      {messages.map((message, i) => (
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
