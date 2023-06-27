"use client"

import { format } from "date-fns"
// import remarkGfm from "remark-gfm"
import ReactMarkdown from "react-markdown"
import SyntaxHighlighter, {
  type SyntaxHighlighterProps,
} from "react-syntax-highlighter"
import { tomorrowNight } from "react-syntax-highlighter/dist/cjs/styles/hljs"

import { type Message } from "ai/react"

const Message = ({ message: { content, createdAt } }: { message: Message }) => {
  const date = createdAt instanceof Date ? createdAt : new Date()

  return (
    <div className="message">
      <div className="markdown-body">
        <ReactMarkdown
          // remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          children={content || ""}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "")
              return !inline && match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  language={match[1]}
                  style={tomorrowNight}
                  {...(props as SyntaxHighlighterProps)}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
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
