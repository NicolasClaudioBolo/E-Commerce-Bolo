import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './Item.css';

import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

// const Detail = () => {
//   return (
    
//   )
// }

function ItemDetail ({product}){
  return (

   // CARD DETALLE   
   
   <div>
  <Card>
    <CardBody>
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
    </CardBody>
  </Card>
</div>
  )
}

export default ItemDetail
