import React from 'react'
import './Navbar.css'
import logo from '../../Assets/Icons/Logo.svg'
import cart from '../../Assets/Icons/Cart.svg'
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <h2>Ugmonk</h2>
          <img src={logo} alt="" />
        </div>
        <div className="items">
          <Link>Login</Link>
          <Link>
            <img src={cart} alt="" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
