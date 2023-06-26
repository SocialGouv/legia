"use client"

import { useChat } from "ai/react"
import ReactTextareaAutosize from "react-textarea-autosize"

import SendIcon from "../assets/send-icon"
import SpinnerIcon from "../assets/spinner-icon"

import type { KeyboardEvent } from "react"

const Form = ({ id, theme }: { id: string; theme: string }) => {
  const { isLoading, input, handleInputChange, handleSubmit } = useChat({
    id,
    body: { theme },
  })

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      const formEvent = new Event("submit", { bubbles: true, cancelable: true })
      e.currentTarget.form?.dispatchEvent(formEvent)
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <ReactTextareaAutosize
          rows={1}
          autoFocus
          minRows={1}
          maxRows={8}
          value={input}
          cacheMeasurements
          onChange={handleInputChange}
          placeholder="Envoyez un message..."
          onKeyDown={handleKeyDown}
        />
        <button type="submit">
          {isLoading ? <SpinnerIcon /> : <SendIcon />}
        </button>
      </form>
    </div>
  )
}

export default Form
