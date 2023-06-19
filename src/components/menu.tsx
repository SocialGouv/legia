const History = () => {
  const storedMessages = localStorage.getItem("messages")

  const messages = storedMessages ? JSON.parse(storedMessages) : []

  return (
    <ul>
      {messages.map((message: string, i: number) => (
        <li key={i}>{message}</li>
      ))}
    </ul>
  )
}

const Menu = () => {
  const version = process.env.APP_VERSION || "0.0.0"
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || "dev"

  return (
    <aside className="menu">
      <div>JE SUIS UN MENU DE OUF</div>
      <History />
    </aside>
  )
}

export default Menu
