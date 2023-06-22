"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import type { ChatCompletionRequestMessage } from "openai"
import ReactTextareaAutosize from "react-textarea-autosize"

import { useChat, type Message } from "@/hooks/use-chat"
import SendIcon from "../assets/send-icon"

type FormData = { prompt: string }

async function getOpenAIResponse(messages: ChatCompletionRequestMessage[]) {
  const response = await fetch("/api/openai", {
    method: "POST",
    body: JSON.stringify(messages),
    headers: { "Content-Type": "application/json" },
  })

  if (response?.ok) {
    return response.json()
  } else {
    throw response?.statusText
  }
}

async function tokenizePrompt(prompt: string) {
  const response = await fetch("/api/tokenize", {
    method: "POST",
    body: prompt,
  })

  if (response?.ok) {
    return response.json()
  } else {
    throw response?.statusText
  }
}

const createMessage = async (prompt: string): Promise<Message> => {
  const tokenizedPrompt = await tokenizePrompt(prompt)

  return {
    data: { role: "user", content: prompt },
    metadata: { creationDate: new Date(), tokens: tokenizedPrompt.length },
  }
}

const Form = () => {
  const [prompt, setPrompt] = useState<string>("")
  const { register, handleSubmit } = useForm<FormData>()
  const { messages, addMessage, setStatus } = useChat()

  const onSubmit = async (data: FormData) => {
    const message = await createMessage(prompt)

    addMessage(message)
    setStatus("loading")
    setPrompt("")

    try {
      const trimMessages = [...messages, message].map(({ data }) => data)
      const { result } = await getOpenAIResponse(trimMessages)
      const botMessage = {
        data: result,
        metadata: { creationDate: new Date() },
      } as Message

      addMessage(botMessage)
      setStatus("ready")
    } catch (error) {
      console.log(error)
    }
  }

  // const clear = () => {
  //   localStorage.removeItem("messages")
  // }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ReactTextareaAutosize
          rows={1}
          autoFocus
          minRows={1}
          maxRows={8}
          value={prompt}
          cacheMeasurements
          {...register("prompt")}
          placeholder="Send a message..."
          onChange={({ target: { value } }: { target: { value: string } }) =>
            setPrompt(value)
          }
        />
        <button type="submit">
          <SendIcon />
        </button>
        {/* {messages.length > 0 && (
          <button
            type="button"
            onClick={() => clear()}
            title="reset conversation"
            className="secondary w-12"
          >
            <svg
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )} */}
      </form>
    </div>
  )
}

export default Form
