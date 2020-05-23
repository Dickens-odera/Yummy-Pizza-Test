import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className='navbar navbar-expand-md navbar-dark'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>Yummy Pizza Store</Link>
      <Link className="" to="/">  <i className="material-icons">shopping_cart</i></Link>
    </div>
  </nav>
)

export default Header