import { Link, useLoaderData } from "react-router-dom"


export const Phones = () => {
  const phones=useLoaderData()
  return (
    <div>All Phones Here

      <div>
        <h1>{phones.length}</h1>
        {
          phones.map(phone=><li>
            <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
          </li>)
        }
      </div>
    </div>
  )
}
