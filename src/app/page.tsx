import Form from "@/ui/form"
import Messages from "@/ui/messages"
import { ChatProvider } from "./use-chat"

const Page = () => (
  <main>
    <ChatProvider>
      <Messages />
      <Form />
    </ChatProvider>
  </main>
)

export default Page
