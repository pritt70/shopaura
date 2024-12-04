import React, { useRef, useEffect } from 'react'
import './header.css'
import userIcon from '../../assets/images/user-icon.png'
import logo from '../../assets/images/eco-logo.png'
import { Container, Row } from 'reactstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'



const nav_links = [
  {
    path: '/home',
    dispaly: 'Home'
  },
  {
    path: '/shop',
    dispaly: 'Shop'
  },
  {
    path: '/cart',
    dispaly: 'Cart'
  },
]

export default function Header() {

  const headerRef = useRef(null)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)


  const menuRef = useRef(null)
  const navigate = useNavigate()


  useEffect(() => {
    // Define the scroll event listener function
    const handleScroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const menuToggle = () => menuRef.current.classList.toggle('active_menu')

  const navigateToCart = () => {
    navigate('/cart')
  }

  return (
    <div>
      <header className='header' ref={headerRef}>
        <Container>
          <Row>
            <div className="nav_wrapper d-flex align-items-center justify-content-between">
              <div className="logo d-flex align-items-center column-gap-1">
                <img src={logo} alt="logo" />
                <div>
                  <h1>ShopAura</h1>
                </div>
              </div>

              <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className='menu'>
                  {
                    nav_links.map((item, index) => (
                      <li className="nav_item" key={index}>
                        <NavLink
                          to={item.path}
                          className={(navClass) => navClass.isActive ? 'nav_active' : ''}>
                          {item.dispaly}
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className="nav_icons d-flex align-items-center">
                <span className='fav_icon'>
                  <i className='ri-heart-line'></i>
                  <span className="badge">1</span>
                </span>

                <span className='cart_icon' onClick={navigateToCart}>
                  <i className='ri-shopping-bag-line'></i>
                  <span className="badge">{totalQuantity}</span>
                </span>

                <span>
                  <Link to='/signup'>
                    <motion.img
                      whileTap={{ scale: 1.2 }}
                      src={userIcon} alt=""
                    />
                  </Link>
                </span>

                <div className="mobile_menu">
                  <span onClick={menuToggle}>
                    <i className='ri-menu-line'></i>
                  </span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </div>
  )
}
