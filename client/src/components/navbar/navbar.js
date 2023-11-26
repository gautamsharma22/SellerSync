import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <h1>Button</h1>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Your Orders</NavLink>
            </li>
            <li>
              <NavLink to="/">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
