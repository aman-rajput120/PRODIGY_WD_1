import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets/assets'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const Navbar = ({setShowLogin}) => {
    const[menu,setMenu] = useState("home");
    const {getTotalAmount} = useContext(Context);
  return (
    <div className='navbar'>
        <Link to="/"><img src={assets.logo} alt="" className='logo' /></Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>setMenu("home")}className={menu==="home" ? "active":" "}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")}className={menu==="menu" ? "active":" "}>menu</a>
            <a href='#appdownload' onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app" ? "active":" "}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact us")}className={menu==="contact us" ? "active":" "}>contact us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className='navbar-search-icon'>
                <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
