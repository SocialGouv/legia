import Form from "./form"
import Messages from "./messages"

import "./styles.css"

export default function Chat({ theme, id }: { theme: string; id: string }) {
  return (
    <div className="chat">
      <Messages id={id} />
      <Form theme={theme} id={id} />
    </div>
  )
}
