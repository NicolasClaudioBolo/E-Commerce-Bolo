import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, CardTitle} from 'reactstrap'

import './ItemCount.css'

function ItemCount({stock, initial, onAdd}) {

  const [counter, setCounter] = useState(initial);

  const suma = () => {
    if(counter < stock){
      setCounter(counter + 1)
    };
  };

  const resta = () => {
    if(counter > initial){
      setCounter(counter - 1)
    };
  };

  return (
    <div>
      <div>
      <CardTitle>Cantidad: {counter}</CardTitle>
        <Button className='Button' onClick={resta}>-</Button>
        <Button className='Button' onClick={suma}>+</Button>
        <Button className='Button' onClick={()=>onAdd(counter)}>Agregar al carrito</Button>
      </div>
    </div>
  );
}

export default ItemCount;