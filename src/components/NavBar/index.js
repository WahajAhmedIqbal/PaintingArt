import React, { useState } from 'react'
import './navBarStyle.scss'
import '../../commonStyle/Style.scss'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const NavBarComponent = () => {
  return (
    <section className='headerfullContainer'>
      <div className="myContainer">
        <div className="headerContainer">
          <div className="loglogo">
            <img src={Logo} width="100%" height="100%" />
          </div>

          <div className="navigationBar">
            <div className="navItem">
              <Link to='/' >
                Home
              </Link>
            </div>
            <div className="navItem">
              <Link to='/aboutUs' >
                About Us
              </Link>
            </div>
            <div className="navItem">
              <Link to='/' >
                Shop
              </Link>
            </div>
            <div className="navItem">
              <Link to='/' >
                Blog
              </Link>
            </div>
            <div className="navItem">
              <Link to='/' >
                Contact Us
              </Link>
            </div>
            <div className="navItem">
              <Link to='/' >
                Icon
              </Link>
            </div>
            <div className="navItem">
              <Link to='/' >
                Icon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavBarComponent