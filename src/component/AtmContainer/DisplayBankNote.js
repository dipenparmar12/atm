import React from 'react'

const CrossIcon = React.memo(() => (
  <svg
    className="inline-block mx-1.5"
    width="9"
    height="9"
    viewBox="0 0 9 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.75 0.75L0.75 7.75M0.75 0.75L7.75 7.75"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
))

export default function DisplayBankNote({ kind, times }) {
  return (
    <div key={kind} className="flex items-center justify-start gap-0">
      <span className="flex-1  px-2 py-0.5 rounded ">
        <span className="bg-yellow-100 text-green-800 font-semibold px-1.5 py-0.5 rounded ">
          {kind}
        </span>
        <CrossIcon />
        {times}
      </span>
      <span>=</span>
      <span className="flex-1 bg-green-100font-semibold px-2 py-0.5 rounded ">
        {kind * times}
      </span>
    </div>
  )
}
