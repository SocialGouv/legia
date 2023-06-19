import { useEffect, useRef, useState } from "react"

import { useChat } from "@/app/use-chat"

const COUNT_INTERVAL = 100

const format = (count: number) => {
  const dt = new Date(0)
  dt.setMilliseconds(count * 100)
  const seconds = dt.getSeconds()
  const milliseconds = dt.getMilliseconds() / 100
  return `${seconds.toString().padStart(2, "0")}.${milliseconds
    .toString()
    .padStart(1, "0")}s`
}

const Timer = ({ onStop }: { onStop?: (time: number) => void }) => {
  const [count, setCount] = useState(0)
  const interval = useRef<NodeJS.Timeout | null>(null)
  const countRef = useRef(count)
  const { status } = useChat()

  useEffect(() => {
    if (status === "loading" && !interval.current) {
      countRef.current = 0
      interval.current = setInterval(() => {
        setCount(++countRef.current)
      }, COUNT_INTERVAL)
    } else if (status !== "loading" && interval.current) {
      clearInterval(interval.current)
      interval.current = null
      if (onStop) onStop(countRef.current)
    }
  }, [status, onStop])

  return <div className="timer">{count ? format(count) : null}</div>
}

export default Timer
