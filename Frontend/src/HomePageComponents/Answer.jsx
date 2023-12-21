import React from 'react'
import { Navbar } from './Navbar'
import { Questions } from './Questions'

export const Answer = () => {
  return (
    <div>
      <Navbar />
      <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
        <Questions />
      </div>
    </div>
  )
}
