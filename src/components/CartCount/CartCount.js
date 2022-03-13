import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'

const CartCount = () => {
    const {cart} = useContext(CartContext)
  return (
    <div>
      <p>{cart.length}</p>
    </div>
  )
}

export default CartCount
