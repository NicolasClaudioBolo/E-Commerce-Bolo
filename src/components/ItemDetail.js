import React from 'react';
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';

const agregar = (cantidad) =>{

  // Guarda el valor de lo que el usuario va eligiendo

  const Choice = cantidad
}

function ItemDetail ({product}){
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
      <ItemCount stock={10} initial={1} onAdd={agregar} />
    </CardBody>
  </Card>
</div>
  )
}

export default ItemDetail
