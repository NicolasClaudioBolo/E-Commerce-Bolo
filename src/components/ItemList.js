import React from 'react'
import Item from './Item'


const ItemList = ({products}) => {

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
