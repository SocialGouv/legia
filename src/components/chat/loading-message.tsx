"use client"

import Timer from "../timer"

const LoadingMessage = () => {
  return (
    <div className="message assistant loading">
      <div>loading...</div>
      <div className="info">
        <div className="flex-1 text-right">
          <Timer onStop={(time: number) => console.log("TIME", time)} />
        </div>
      </div>
    </div>
  )
}

export default LoadingMessage
