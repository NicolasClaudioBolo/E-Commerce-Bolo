import React from 'react'
import Item from '../Item/Item'


const ItemList = ({products}) => {

// MAPEO DE LOS PRODUCTOS

  return (
    <div>
        {products.map((product)=>{
            return(<div key={product.id}>
                        <Item data={product} />
                   </div>)
        })}
    </div>
  )
}

export default ItemList
