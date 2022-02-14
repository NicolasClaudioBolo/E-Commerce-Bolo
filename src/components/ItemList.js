import React, {useState, useEffect} from 'react'
import ItemListContainer from './ItemListContainer'

const ItemList = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))           
    }, []);

  return (
    <div>
        {products.map((product)=>{
            return(<div key={product.id}>
                        <ItemListContainer data={product} />
                   </div>)
            
        })}
    </div>
  )
}

export default ItemList
