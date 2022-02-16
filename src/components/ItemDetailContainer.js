import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import axios from 'axios'

const ItemDetailContainer = () => {

    // LLAMADO A LA API

    const [product, setProduct] = useState({})

    useEffect(()=>{
        axios('https://fakestoreapi.com/products')
        .then((res) => setProduct(res.data[0])
        // .catch((error) => console.log(error))          
    )}, []);

  return (
    <div>
      <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer
