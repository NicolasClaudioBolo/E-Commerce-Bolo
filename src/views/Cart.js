import React from 'react';
import { Card, CardBody, CardImg, CardTitle} from 'reactstrap';
import '../App.css'
import '../components/Header.css'
import './Cart.css'
import Img from '../assets/shopping-cart.png'

const Cart = () => {
  return (
    <div className='App'>
        <Card>
          <CardBody>
            <CardImg src={Img} className='logo'/>
            <CardTitle className='cart'>
                  Estás en el carrito
            </CardTitle>
          </CardBody>
        </Card>
    </div>
  )
}

export default Cart
