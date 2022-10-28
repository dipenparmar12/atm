import React from 'react'

export default function ErrorFeedback({ condition, msg }) {
  if (!condition) return null
  if (!msg) return null

  return (
    <span className="inline-block items-center rounded-full bg-yellow-100 px-3 py-0.5 text-sm font-medium text-yellow-800">
      {msg}
    </span>
  )
}
