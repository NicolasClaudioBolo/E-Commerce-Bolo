import React, {useContext} from 'react'
import {CardBody, CardImg, CardText, Button, Card} from 'reactstrap';
import { CartContext } from '../CartContext/CartContext';
import '../Item/Item.css'
import './ItemCart.css'

const ItemCart = () => {

  const {removeFromCart, cart} = useContext(CartContext)
  const cartItems = useContext(CartContext)

  return(
    cart.map(item => {
      return (
        <Card className='Card'>
          <CardBody key={CardBody}>
            <CardImg 
              src={item.item.image}
              className='imgIcon'
              key={item.item.image}
              />
            <CardText key={item.item.title}>
              {item.item.title}
            </CardText>
            <CardText key={item.quantity}>
              Cantidad: {item.quantity}
            </CardText>
            <CardText key={item.item.price}>
              $ {item.item.price*item.quantity}
            </CardText>
            <CardText key={Button}>
              <Button onClick={() => {cartItems.removeFromCart(item.item.id)}} key={item.item.id} className='Button'>Borrar</Button>
            </CardText>
          </CardBody>
        </Card>
      )}
  ))
  
}

export default ItemCart
