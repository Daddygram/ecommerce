import React from 'react'
import './Navbar.css'
import { HiOutlineShoppingBag } from 'react-icons/hi2'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-logo">
            <a href="/">YourLogo</a>
        </div>
        <ul className="nav-menu">
            <li>Shop <hr/></li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <HiOutlineShoppingBag />
        </div>
    </div>
  )
}

export default Navbar