import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className='navbar navbar-expand-md navbar-inverse'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>Yummy Pizza Store</Link>
      <Link className="navbar-nav" to="/cart"><i className="material-icons">shopping_cart</i></Link>
    </div>
  </nav>
)

export default Header