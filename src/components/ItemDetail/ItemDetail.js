import React, {useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Item/Item.css'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';



function ItemDetail ({product}){

  const [value, setValue] = useState({})

  const {AddToCart} = useContext(CartContext)

  const newState = [{product}] 

  const [cantidad, setCantidad] = useState(0)
  
  const agregar = (cantidad) =>{
    setCantidad(cantidad)
    AddToCart(product, cantidad)
  }

  return (

   // CARD DETALLE   

   <div>
    <Card className='Card Detail'>
      <CardBody>
        <CardImg 
        src={product.image}
        className="CardImg"
        />
        <CardTitle tag="h5">
          {product.title}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6">
          {product.category}
        </CardSubtitle>
        <CardText>
          {product.description}
        </CardText>
        {cantidad===0?<ItemCount stock={10} initial={1} onAdd={agregar} onClick={() => setValue(newState)}/>:
        <Link to='/views/Cart'>
          <Button className='Button'>
            Ver el carrito
          </Button>
        </Link>}
      </CardBody>
    </Card>
  </div>
  )
}

export default ItemDetail
