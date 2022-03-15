import React, {useContext} from 'react';
import '../App.css'
import '../components/Header/Header.css'
import './Cart.css'
import { CartContext } from '../components/CartContext/CartContext';
import ItemCart from '../components/ItemCart/ItemCart';
import { Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const Cart = () => {

  const {cart, CheckOut, clear} = useContext(CartContext)
  const cartItems = useContext(CartContext)

  return (
    <Container key={Container}>
    <div className='cart App Container' key='3123'>
        {cartItems.cart.map((c) =>{
            return  <div key='34563'>
                      <ItemCart item={c} key={c.item.id} /> 
                    </div>
        })}
                    <div key={Math.random()} className='buttonsDiv'>
                      <Button onClick={clear} key={Math.random()} className='Button'>Borrar todo</Button>
                      <Link to='/views/CheckOut'>
                        <Button onClick={CheckOut} key={Math.random()} className='Button'>Finalizar compra</Button>
                      </Link>
                      <Link to='/' key={Math.random()}>
                        <Button key={Math.random()} className='Button'>Seguir comprando</Button>
                      </Link>
                    </div>
    </div>
    </Container>
  )
}

export default Cart

