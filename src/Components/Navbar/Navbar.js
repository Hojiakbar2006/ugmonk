import React from 'react'
import './Navbar.css'
import logo from '../../Assets/Icons/Logo.svg'
import cart from '../../Assets/Icons/Cart.svg'
import { Link, useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="container">
      <nav>
        <div className="logo" onClick={()=>navigate('/')}>
          <h2>Ugmonk</h2>
          <img src={logo} alt="" />
        </div>
        <div className="items">
          <Link>Login</Link>
          <Link to='/cart'>
            <img src={cart} alt="" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
