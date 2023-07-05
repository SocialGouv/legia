import Form from "./form"
import Messages from "./messages"

import "./styles.css"

export default function Chat({ id }: { id: string }) {
  return (
    <div className="chat">
      <Messages id={id} />
      <Form id={id} />
    </div>
  )
}
