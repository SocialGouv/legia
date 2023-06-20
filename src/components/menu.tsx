"use client"

import Link from "next/link"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { useRouter, usePathname } from "next/navigation"

import { useThreads } from "@/hooks/use-threads"

const DrawerIcon = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 text-white"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <line x1="9" y1="4" x2="9" y2="20" />
  </svg>
)

const ThreadIcon = () => (
  <svg
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-white"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

const History = () => {
  const pathname = usePathname()
  const { threads } = useThreads()
  const id = pathname.split("/")[2]

  return (
    <ul className="threads">
      {threads.map((thread, i: number) => (
        <li key={i} className={id === thread.id ? "selected" : ""}>
          <ThreadIcon />
          <Link href={`/threads/${thread.id}`}>
            {thread.title} ({thread.id})
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Controls = ({ onCollapse }: { onCollapse: () => void }) => {
  const router = useRouter()
  const { threads, addThread } = useThreads()

  function createThread() {
    const id = uuidv4()
    const thread = { id, title: `Conversation #${threads.length + 1}` }

    addThread(thread)
    router.push(`/threads/${id}`)
  }

  return (
    <div className="controls">
      <button className="secondary w-12" onClick={onCollapse}>
        <DrawerIcon />
      </button>
      <button className="secondary flex-1" onClick={() => createThread()}>
        New Chat
      </button>
    </div>
  )
}

const Menu = () => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <>
      <button
        className="secondary menu-toggle"
        onClick={() => setCollapsed(false)}
      >
        <DrawerIcon />
      </button>
      <aside className={`menu ${collapsed ? "collapsed" : ""}`}>
        <Controls onCollapse={() => setCollapsed(true)} />
        <History />
      </aside>
    </>
  )
}

export default Menu
