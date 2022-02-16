import React from 'react'
import Detail from './Detail'

const ItemDetail = ({products}) => {
  return (
    <div>
      {products.map((product)=>{
            return(<div key={product.id}>
                        <Detail data={product} />
                   </div>)
        })}
    </div>
  )
}

export default ItemDetail
