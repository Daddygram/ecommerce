import { useContext, useState } from 'react'
import './Navbar.css'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {

  const [menu, setmenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)
  const [active, setactive] = useState("false")

  const handleToggle = () => {
    setactive(!active)
  }

  return (
    <div className="navbar main-container">
      <div className={active ? "nav-burger" : "active"}>
        <label className="burger" htmlFor="burger">
          <input onClick={()=>handleToggle()} type="checkbox" id="burger" />
          <span></span>
          <span></span>
          <span></span>
        </label>
        <nav>
          <div className="nav-logo">
            <Link onClick={()=>setmenu("shop")} style={{ textDecoration: 'none', color: 'inherit' }} to={"/"}>YourLogo</Link>
          </div>
            <ul className="nav-menu">
              <li onClick={()=>setmenu("shop")}><Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/"}>Shop</Link>{menu=="shop"?<hr/>:<></>}</li>
              <li onClick={()=>setmenu("mens")}><Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/men"}>Men</Link>{menu=="mens"?<hr/>:<></>}</li>
              <li onClick={()=>setmenu("womens")}><Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/women"}>Women</Link>{menu=="womens"?<hr/>:<></>}</li>
              <li onClick={()=>setmenu("kids")}><Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/kids"}>Kids</Link>{menu=="kids"?<hr/>:<></>}</li>
            </ul>
          <Link style={{ textDecoration: 'none', color: 'inherit', marginTop: '10px' }} to={"/login"}><button className='btn'>Login</button></Link>
        </nav>
      </div>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: 'none', color: 'inherit', position: 'relative'}} to={"/cart"}><HiOutlineShoppingBag onClick={()=>{window.scrollTo(0,0)}} size={"25px"} /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar