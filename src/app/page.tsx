import Form from "@/components/form"
import Messages from "@/components/messages"
import { ChatProvider } from "@/hooks/use-chat"

const Page = () => (
  <main>
    <ChatProvider>
      <Messages />
      <Form />
    </ChatProvider>
  </main>
)

export default Page
