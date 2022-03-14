import React, { useContext } from 'react'
import Img from '../../assets/Cart.png'
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom'
import './Header.css'
import CartWidget from '../CartWidget/CartWidget'
import { CartContext } from '../CartContext/CartContext'


const Header = ({ title }) => {

  const {cart} = useContext(CartContext)
  return (
    <div>
      <header>
          <Navigation />
          <Link to='/'>
            <img src={Img} alt='Logo' className='logo'></img>
            <h1>{title}</h1>
          </Link>
          {cart.length >0?<CartWidget />:null}
      </header>
    </div>
  )
}

export default Header
