import React from 'react'
import './Navbar.css'

const Burger = () => {
  return (
    <label className="burger" htmlFor="burger">
        <input type="checkbox" id="burger" />
        <span></span>
        <span></span>
        <span></span>
    </label>
  )
}

export default Burger