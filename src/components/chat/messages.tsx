"use client"

import { v4 as uuid } from "uuid"
import React, { useRef, useEffect } from "react"

import Message from "./message"
import { useChat } from "@/hooks/use-chat"
import LoadingMessage from "./loading-message"
import RobotIcon from "../assets/robot-icon"
import UserIcon from "../assets/user-icon"

const SCROLL_DELAY = 300

const Messages = () => {
  const { messages, status } = useChat()
  const messagesEndRef = useRef<HTMLLIElement | null>(null)

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, SCROLL_DELAY)
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <ul className="messages">
      {messages.map((message, i) => (
        <li key={`message-${uuid()}`} className={message.data.role}>
          <div className="message-container">
            <div className="icon">
              {message.data.role === "user" ? <UserIcon /> : <RobotIcon />}
            </div>
            <Message message={message} />
          </div>
        </li>
      ))}
      {status === "loading" && (
        <li>
          <LoadingMessage />
        </li>
      )}
      <li ref={messagesEndRef}></li>
    </ul>
  )
}

export default Messages
