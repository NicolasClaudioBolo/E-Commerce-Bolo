import React, {useContext} from 'react';
import {CardBody, CardImg, CardText, Button, Card} from 'reactstrap';
import { CartContext } from '../CartContext/CartContext';
import '../Item/Item.css';
import './ItemCart.css'

const ItemCart = (item) => {

  const {removeFromCart} = useContext(CartContext)
  const cartItems = useContext(CartContext)
  const subTotal = item.item.item.price*item.item.quantity

  return(
    <Card className='Card'>
          <CardBody key={CardBody}>
            <CardImg 
              src={item.item.item.image}
              className='imgIcon'
              key={item.item.item.image}
              />
            <CardText key={item.item.item.title}>
              {item.item.item.title}
            </CardText>
            <CardText key={item.item.quantity}>
              Cantidad: {item.item.quantity}
            </CardText>
            <CardText key={item.item.item.price}>
              $ {subTotal}
            </CardText>
            <CardText key={Button}>
              <Button onClick={() => {cartItems.removeFromCart(item.item.item.id)}} key={item.item.item.id} className='Button'>Borrar</Button>
            </CardText>
          </CardBody>
        </Card>
  )
  
}

export default ItemCart
