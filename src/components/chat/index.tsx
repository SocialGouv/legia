import Form from "./form"
import Messages from "./messages"
import { ChatProvider } from "@/hooks/use-chat"

export default function Chat({ theme, id }: { theme: string; id: string }) {
  return (
    <div className="chat">
      <ChatProvider threadId={id}>
        <Messages />
        <Form />
      </ChatProvider>
    </div>
  )
}
