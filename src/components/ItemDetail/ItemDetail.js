import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Item/Item.css'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg, Button } from 'reactstrap';
import {Link} from 'react-router-dom';



function ItemDetail ({product}){

  const [value, setValue] = useState({})

  const elegir = (value) => {
    setValue(value)
  }
  const [cantidad, setCantidad] = useState(0)
  
  const agregar = (cantidad) =>{
    setCantidad(cantidad)
  }

  console.log(cantidad)
  console.log(value)
  

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
      {cantidad===0?<ItemCount stock={10} initial={1} onAdd={agregar} />:
      <Link to='/views/Cart'>
        <Button onClick={elegir} value={value}>
          Terminar mi compra
        </Button>
      </Link>}
    </CardBody>
  </Card>
</div>
  )
}

export default ItemDetail
