import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <Link to={"/phones"}>Phones</Link>
    </div>
  )
}
