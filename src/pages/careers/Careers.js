import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
  const users = useLoaderData()

  return (
    <div className="careers">
      {users.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.name}</p>
          <p>Based in {career.username}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const careersLoader = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  return res.json()
}