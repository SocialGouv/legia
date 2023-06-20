"use client"

import Link from "next/link"
import { v4 as uuidv4 } from "uuid"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const History = () => {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    const storedthreads = JSON.parse(localStorage.getItem("threads") || "[]")
    setThreads(storedthreads)
  }, [])

  return (
    <ul className="threads">
      {threads.map((thread: Record<string, string>, i: number) => (
        <li key={i}>
          <svg
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-slate-800"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <Link href={`/threads/${thread.id}`}>{thread.title}</Link>
        </li>
      ))}
    </ul>
  )
}

const Controls = () => {
  const router = useRouter()

  function createThread() {
    const id = uuidv4()
    const threads = JSON.parse(localStorage.getItem("threads") || "[]")
    threads.push({ id, title: `Conversation #${threads.length + 1}` })
    localStorage.setItem("threads", JSON.stringify(threads))
    router.push(`/threads/${id}`)
  }

  return (
    <div className="controls">
      <button className="secondary" onClick={() => createThread()}>
        New Chat
      </button>
      <button className="secondary w-12">
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
      </button>
    </div>
  )
}

const Menu = () => {
  return (
    <aside className="menu">
      <Controls />
      <History />
    </aside>
  )
}

export default Menu
