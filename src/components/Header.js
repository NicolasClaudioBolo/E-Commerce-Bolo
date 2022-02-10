import React from 'react'

import Img from '../assets/Cart.png'

import './Header.css'

const Header = ({ title }) => {
  return (
    <div>
      <header>
          <img src={Img} alt='Logo' className='logo'></img>
          <h1>{title}</h1>
      </header>
    </div>
  )
}

export default Header
