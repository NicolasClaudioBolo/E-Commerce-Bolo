import React from 'react'

import Img from '../../assets/Cart.png'

import Navigation from '../Navigation/Navigation'

import { Link } from 'react-router-dom'

import './Header.css'


const Header = ({ title }) => {
  return (
    <div>
      <header>
          <Navigation />
          <Link to='/'>
            <img src={Img} alt='Logo' className='logo'></img>
            <h1>{title}</h1>
          </Link>
      </header>
    </div>
  )
}

export default Header
