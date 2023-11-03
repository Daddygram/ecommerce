import React, { useContext, useState } from 'react'
import './Navbar.css'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {

  const [menu, setmenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className="navbar">
        <div className="nav-logo">
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/"}>YourLogo</Link>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>setmenu("shop")}><Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/"}>Shop</Link>{menu=="shop"?<hr/>:<></>}</li>
            <li onClick={()=>setmenu("mens")}><Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/men"}>Men</Link>{menu=="mens"?<hr/>:<></>}</li>
            <li onClick={()=>setmenu("womens")}><Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/women"}>Women</Link>{menu=="womens"?<hr/>:<></>}</li>
            <li onClick={()=>setmenu("kids")}><Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/kids"}>Kids</Link>{menu=="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/login"}><button className='btn'>Login</button></Link>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/cart"}><HiOutlineShoppingBag size={"25px"} /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar