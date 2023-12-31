"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { useThreads } from "@/hooks/use-threads"
import ChatIcon from "@/components/assets/chat-icon"

import "./styles.css"

const Threads = () => {
  const pathname = usePathname()
  const { threads } = useThreads()
  const id = pathname.split("/")[3]

  return (
    <ul className="threads">
      {threads.map((thread, i: number) => (
        <li key={i} className={id === thread.id ? "selected" : ""}>
          <ChatIcon />
          <Link href={`/chat/${thread.theme}/${thread.id}`}>
            {thread.title} ({thread.id})
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Threads
