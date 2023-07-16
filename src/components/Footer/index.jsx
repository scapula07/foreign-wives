import React from 'react'

export default function Footer({bg,text}) {
  return (
    <div className={`w-full ${bg} py-4 flex justify-center`}>
        <h5>{text}</h5>

    </div>
  )
}
