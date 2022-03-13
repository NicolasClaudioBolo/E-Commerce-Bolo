import React, {useState, useContext} from 'react'
import { Card, CardBody, CardImg, CardTitle, Button} from 'reactstrap';
import Img from '../../assets/shopping-cart.png'
import { CartContext } from '../CartContext/CartContext';

const ItemCart = ({item}) => {

  const [value, setValue] = useState({})

  const newState = [{item}]

  // console.log('newState in ItemCart', newState)

  console.log('title:', item?.title)

  const {removeFromCart} = useContext(CartContext)

  console.log('quantity:', item?.cantidad)

  return (
    <div>
      <Card className='cart'>
          <CardBody>
            <CardImg src={Img} className='logo'/>
            <CardTitle>
                  <ul>
                      <li>{item.title}</li>
                      <li>$ {item.price}</li>
                      <li>Cantidad: {item.quantity}</li>
                  </ul>
                  <Button onClick={() => removeFromCart}>
                      Borrar
                  </Button>
            </CardTitle>
          </CardBody>
        </Card>
    </div>
  )
}

export default ItemCart
