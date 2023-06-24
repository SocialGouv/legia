"use client"

import { useChat } from "ai/react"
import ReactTextareaAutosize from "react-textarea-autosize"

import SendIcon from "../assets/send-icon"

const Form = ({ id }: { id: string }) => {
  const { input, handleInputChange, handleSubmit } = useChat({ id })

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
        />
        <button type="submit">
          <SendIcon />
        </button>
      </form>
    </div>
  )
}

export default Form
