import Form from "./form"
import Messages from "./messages"

import type { Theme } from "@/hooks/use-prompts"

import "./styles.css"

export default function Chat({ theme, id }: { theme: Theme; id: string }) {
  return (
    <div className="chat">
      <Messages theme={theme} id={id} />
      <Form theme={theme} id={id} />
    </div>
  )
}
