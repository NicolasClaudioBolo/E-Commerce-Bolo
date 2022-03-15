import React, {useContext} from 'react'
import { Card, CardBody, CardText } from 'reactstrap'
import { CartContext } from '../components/CartContext/CartContext'
import ItemCart from '../components/ItemCart/ItemCart'
import './Cart.css'

const CheckOut = (item) => {
    const {cart} = useContext(CartContext)
  return (
    <div>
        <Card className='cart'>
            <CardBody>
                <CardText>
                    ¡Gracias por tu compra!
                </CardText>
                <CardText>
                    Compraste
                </CardText>
                <CardText>
                {cart.map((c) =>{
            return  <ItemCart item={c} key={c.item.id} />             
        })}
                </CardText>
            </CardBody>
        </Card>
      
    </div>
  )
}

export default CheckOut
