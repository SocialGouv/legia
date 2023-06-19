"use client"

import { v4 as uuidv4 } from "uuid"
import React, { useRef, useEffect } from "react"

import Message from "./message"
import { useChat } from "@/app/use-chat"
import LoadingMessage from "./loading-message"

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
        <li key={uuidv4()}>
          <Message message={message} />
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
