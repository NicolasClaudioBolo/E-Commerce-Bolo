import React, {useContext} from 'react'
import {CardBody, CardImg, CardText, Button} from 'reactstrap';
import { CartContext } from '../CartContext/CartContext';
import './ItemCart.css'

const ItemCart = () => {

  const {removeFromCart} = useContext(CartContext)
  const {cart} = useContext(CartContext)

  return(
    cart.map(item => {
      return (
        <CardBody>
          <CardImg 
            src={item.item.image}
            className='imgIcon'
            key={item.item.image}
            />
          <CardText key={item.item.title}>
            {item.item.title}
          </CardText>
          <CardText key={item.quantity}>
            {item.quantity}
          </CardText>
          <CardText key={item.item.price}>
            {item.item.price}
          </CardText>
          <CardText key={Button}>
            <Button onClick={removeFromCart}>Borrar</Button>
          </CardText>
        </CardBody>
      )}
  ))
  
}

export default ItemCart
