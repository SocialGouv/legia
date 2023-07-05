"use client"

import { useChat } from "ai/react"
import React, { useRef, useEffect } from "react"

import Message from "./message"
import UserIcon from "@/components/assets/user-icon"
import RobotIcon from "@/components/assets/robot-icon"

const SCROLL_DELAY = 300

const Messages = ({ id }: { id: string }) => {
  const messagesEndRef = useRef<HTMLLIElement | null>(null)

  const { messages } = useChat({ id })

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
