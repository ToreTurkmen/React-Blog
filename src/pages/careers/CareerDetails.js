import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {

  // eslint-disable-next-line no-unused-vars
  const { id } = useParams()
  const career = useLoaderData()
  return (
    <div className='career-details'>
      <h2>Career Details for {career.name} </h2>
      <p>Web Site: {career.website}</p>
      <p>Phone Num: {career.phone}</p>
      <div className="details">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum atque vel numquam in dolores facilis! Blanditiis accusantium inventore nihil eveniet fugit reiciendis? Minima dolore deleniti fuga impedit dolor, obcaecati aliquid.</p>
      </div>
    </div>
  )
}

//loader function

export const careerDetailsLoader = async ({params}) =>{
const { id } = params
const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)

if(!res.ok){
  throw Error('Could not find that data')
}

return res.json()
}
