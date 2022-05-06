import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/nested/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
