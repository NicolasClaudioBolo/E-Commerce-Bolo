import React, {useContext} from 'react';
import '../App.css'
import '../components/Header/Header.css'
import './Cart.css'
import { CartContext } from '../components/CartContext/CartContext';
import ItemCart from '../components/ItemCart/ItemCart';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Cart = () => {

  const {cart, CheckOut, clear} = useContext(CartContext)

  console.log('Carrito: ', cart)

  return (
    <div className='App'>
        {cart.map((c) =>{
            return  <div key={c.item.id}>
                      <ItemCart item={c.item} key={c.item.id} /> 
                    </div>
        })}
                      <Button onClick={clear}>Borrar todo</Button>
                      <Button onClick={CheckOut}>Confirmar compra</Button>
                      <Link to='/'>
                        <Button>Volver atrás</Button>
                      </Link>
    </div>
  )
}

export default Cart

