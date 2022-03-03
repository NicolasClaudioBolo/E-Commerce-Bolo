import React, {useState} from 'react';
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg, Button } from 'reactstrap';
import {Link} from 'react-router-dom';



function ItemDetail ({product}){

  const [cantidad, setCantidad] = useState(0)
  const agregar = (cantidad) =>{

    setCantidad(cantidad)

  //   const Choice = (product.id)
    
  //   const Quant = cantidad
  
  //   console.log(toString(setChoice) + Quant)
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
      {cantidad===0?<ItemCount stock={10} initial={1} onAdd={agregar} />:<Link to='/views/Cart'><Button>Terminar mi compra</Button></Link>}
    </CardBody>
  </Card>
</div>
  )
}

export default ItemDetail
