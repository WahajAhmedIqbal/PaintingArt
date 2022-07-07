import React, { useEffect, useState } from 'react'
import './navBarStyle.scss'
import '../../commonStyle/Style.scss'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

import { 
    HeartOutlined,
    ShoppingCartOutlined 
  } from "@ant-design/icons";

const NavBarComponent = () => {
  const [colorChangeNav, setColorChangeNav] = useState(false);

  const changeNavBar = () => {
   if(window.scrollY >= 80){
       setColorChangeNav(true);
     }
     else{
       setColorChangeNav(false);
     }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBar)
  }, []);

  return (
    <section
      className={
        colorChangeNav ? "navBgclr headerfullContainer" : "headerfullContainer"
      }
    >
      <div className="myContainer">
        <div className="headerContainer">
          <div className="loglogo">
            <img src={Logo} alt="Logo" width="100%" height="100%" />
          </div>

          <div className="navigationBar">
            <div className="navItem">
              <Link to="/">Home</Link>
            </div>
            <div className="navItem">
              <Link to="/aboutUs">About Us</Link>
            </div>
            <div className="navItem">
              <Link to="/">Shop</Link>
            </div>
            <div className="navItem">
              <Link to="/">Blog</Link>
            </div>
            <div className="navItem">
              <Link to="/">Contact Us</Link>
            </div>
            <div className="navItem">
              <Link to="/">
                <HeartOutlined />
              </Link>
            </div>
            <div className="navItem">
              <Link to="/">
                <ShoppingCartOutlined />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBarComponent