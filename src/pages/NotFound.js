import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div >
      <h2>page not found!</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aliquam assumenda soluta in fugiat error atque quia dolorem nobis quibusdam asperiores totam quae deserunt illum? Dolorem aut deleniti ipsum quibusdam?</p>
      <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}
