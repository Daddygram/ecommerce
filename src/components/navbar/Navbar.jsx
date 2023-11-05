import React, { useContext, useState } from 'react'
import './Navbar.css'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import Burger from './Burger'

const Navbar = () => {

  const setActive = () => {
    const hamMenu = document.getElementsByClassName('nav-burger')
    hamMenu.classList.toggle('active')
  }

  const [menu, setmenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className="navbar main-container">
      <Burger onClick={()=>setActive()} />
      <div className="nav-burger">
        <div className="nav-logo">
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/"}>YourLogo</Link>
        </div>
          <ul className="nav-menu">
            <li onClick={()=>setmenu("shop")}><Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/"}>Shop</Link>{menu=="shop"?<hr/>:<></>}</li>
            <li onClick={()=>setmenu("mens")}><Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/men"}>Men</Link>{menu=="mens"?<hr/>:<></>}</li>
            <li onClick={()=>setmenu("womens")}><Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/women"}>Women</Link>{menu=="womens"?<hr/>:<></>}</li>
            <li onClick={()=>setmenu("kids")}><Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/kids"}>Kids</Link>{menu=="kids"?<hr/>:<></>}</li>
          </ul>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/login"}><button className='btn'>Login</button></Link>
      </div>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: 'none', color: 'inherit', position: 'relative'}} to={"/cart"}><HiOutlineShoppingBag size={"25px"} /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar