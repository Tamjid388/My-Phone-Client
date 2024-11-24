import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const Phone = () => {
  const phone=useLoaderData()

  return (
    <div>
      <h1>{phone.name}</h1>
      <figure>
        <img src={phone.image} alt="" />
      </figure>

    </div>
  )
}
