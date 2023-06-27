"use client"

import { format } from "date-fns"
import remarkGfm from "remark-gfm"
import ReactMarkdown from "react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrowNight } from "react-syntax-highlighter/dist/cjs/styles/hljs"

import { type Message } from "ai/react"

const Message = ({ message: { content, createdAt } }: { message: Message }) => {
  const date = createdAt instanceof Date ? createdAt : new Date()

  return (
    <div className="message">
      <div className="markdown-body">
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "")
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, "")}
                  style={tomorrowNight}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            },
          }}
        />
      </div>
      <div className="info">
        <div className="flex-1 text-right">{format(date, "PPPppp")}</div>
      </div>
    </div>
  )
}

export default Message
