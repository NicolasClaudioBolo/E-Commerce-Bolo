import React, {useContext} from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import '../App.css'
import '../components/Header/Header.css'
import './Cart.css'
import Img from '../assets/shopping-cart.png'
import { CartContext } from '../components/CartContext/CartContext';
import ItemDetail from '../components/ItemDetail/ItemDetail';

const Cart = () => {

  const [cart, setCart] = useContext(CartContext)

  console.log(cart)

  return (
    <div className='App'>
        <Card className='cart'>
          <CardBody>
            <CardImg src={Img} className='logo'/>
            <CardTitle>
                  Estás en el carrito
                  {cart.map(() =>{
                    return <ItemDetail product={cart} />
                  })}
            </CardTitle>
          </CardBody>
        </Card>
    </div>
  )
}

export default Cart
