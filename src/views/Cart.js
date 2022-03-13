import React, {useContext, useState} from 'react';
import '../App.css'
import '../components/Header/Header.css'
import './Cart.css'
import { CartContext } from '../components/CartContext/CartContext';
import ItemCart from '../components/ItemCart/ItemCart';
import { Button } from 'reactstrap';

const Cart = () => {

  const [value, setValue] = useState({})

  const {cart, CheckOut} = useContext(CartContext)
  
  console.log(cart)

  return (
    <div className='App'>
        {cart.map((c) =>{
            return  <div key={c.item.id}>
                      <ItemCart item={c.item} key={c.item.id} /> 
                    </div>
        })}
                      <Button onClick={CheckOut}>
                            Confirmar compra
                      </Button>
    </div>
  )
}

export default Cart

