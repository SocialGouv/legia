// import Form from "@/components/form"
import Footer from "@/components/footer"
import Themes from "@/components/themes"
// import Messages from "@/components/messages"
// import { ChatProvider } from "@/hooks/use-chat"

export default function Page() {
  return (
    <main>
      {/* <ChatProvider threadId={id}> */}
      {/* <Messages />
        <Form /> */}
      <div className="home">
        <h1>LegIA</h1>
        <Themes />
      </div>
      <Footer />
      {/* </ChatProvider> */}
    </main>
  )
}
