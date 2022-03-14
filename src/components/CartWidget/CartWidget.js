import React, {useContext} from 'react'
import Img from '../../assets/shopping-cart.png'
import './CartWidget.css'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {cart} = useContext(CartContext)
  return (
    <Link to='/views/Cart'>
        <div className='direction'>
            <img src={Img} className='widget' />
            <p className='length'>{cart.length}</p>
        </div>
    </Link>
  )
}

export default CartWidget
