import React, { useState } from "react";

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
      <h1>Cantidad: {counter}</h1>
        <button onClick={resta}>-</button>
        <button onClick={suma}>+</button>
        <button onClick={()=>onAdd(counter)}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;