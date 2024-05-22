import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IoCallOutline } from "react-icons/io5";
import './index.scss'
import { Card } from 'antd';
const { Meta } = Card;

const Header = () => {
  return (
<div className="container">
<header>
<div className="logo">
    <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="logo" />
    <span><h1>COURSE</h1></span>
</div>
<nav >
    <ul>
        
        <li><NavLink to={"/"}> <h1>Home</h1></NavLink></li>
        <li><NavLink><h1>About Us</h1></NavLink></li>
        <li><NavLink to={"/addproduct"}><h1>AddProduct</h1></NavLink></li>
        <li><NavLink to={"/Notfound"}><h1>PrdouctDetail</h1></NavLink></li>
        <li><NavLink to={"*"}><h1>NotFound</h1></NavLink></li>
    
       
    </ul>
</nav>
<div className="number">
    <div className="icon"><IoCallOutline /></div> <Link><h1>+43 4566 7788 2457</h1></Link>
    </div>


   </header>
</div>
  )
}

export default Header