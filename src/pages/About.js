import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function About () {

  const [user, setUser] = useState('tore')

  if(!user) {
    return <Navigate to="/" replace={true}/>
  }
  return (
    <div className='about'>
       <h2>About Us</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ut id culpa error illum? Eveniet vel praesentium cupiditate aliquid, tempora odio nobis, numquam ab reprehenderit eum incidunt maxime tempore aliquam.
      Debitis, rem quos, dignissimos magni, ut unde repudiandae nesciunt consectetur fugit veniam rerum beatae cumque modi optio? Doloremque eius non vitae harum vero neque quo at itaque! Est, veritatis eaque?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ut id culpa error illum? Eveniet vel praesentium cupiditate aliquid, tempora odio nobis, numquam ab reprehenderit eum incidunt maxime tempore aliquam.
      Debitis, rem quos, dignissimos magni, ut unde repudiandae nesciunt consectetur fugit veniam rerum beatae cumque modi optio? Doloremque eius non vitae harum vero neque quo at itaque! Est, veritatis eaque?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ut id culpa error illum? Eveniet vel praesentium cupiditate aliquid, tempora odio nobis, numquam ab reprehenderit eum incidunt maxime tempore aliquam.
      Debitis, rem quos, dignissimos magni, ut unde repudiandae nesciunt consectetur fugit veniam rerum beatae cumque modi optio? Doloremque eius non vitae harum vero neque quo at itaque! Est, veritatis eaque?</p>

      <button onClick={() =>setUser(null)}>Logout</button>
    </div>
  )
}
