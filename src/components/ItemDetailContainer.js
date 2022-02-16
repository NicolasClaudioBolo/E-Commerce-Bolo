import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import axios from 'axios'

const ItemDetailContainer = () => {

    // LLAMADO A LA API

    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios('https://fakestoreapi.com/products').then((res) => setProducts(res.products))          
    }, []);

  return (
    <div>
      <ItemDetail products={products}/>
    </div>
  )
}

export default ItemDetailContainer
