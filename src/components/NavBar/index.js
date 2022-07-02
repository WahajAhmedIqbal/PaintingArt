import React from 'react'
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
              <Link to='/'>
                <p>Home</p>
              </Link>
            </div>
            <div className="navItem">
              <Link to='/aboutUs'>
                <p>About Us</p>
              </Link>
            </div>
            <div className="navItem">
              <Link to='/'>
                <p>Shop</p>
              </Link>
            </div>
            <div className="navItem">
              <Link to='/'>
                <p>Blog</p>
              </Link>
            </div>
            <div className="navItem">
              <Link to='/'>
                <p>Contact Us</p>
              </Link>
            </div>
            <div className="navItem">
              <Link to='/'>
                <p>Icon</p>
              </Link>
            </div>
            <div className="navItem">
              <Link to='/'>
                <p>Icon</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavBarComponent