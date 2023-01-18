import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CareersLayout() {
  return (
    <div className='careers-layout'>
      <h2>Careers</h2>
      <p>Lorem123 ipsum dolor sit amet consectetur, adipisicing elit. Est voluptates quam quae rem. Blanditiis molestiae iusto debitis totam expedita reprehenderit voluptates incidunt repellendus soluta, at facilis nisi aut itaque ut?</p>

      <Outlet />
    </div>
  )
}
