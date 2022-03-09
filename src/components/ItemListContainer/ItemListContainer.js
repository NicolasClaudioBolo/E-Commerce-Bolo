import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    // LLAMADO A LA API

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))           
    }, []);
  return (
    <div>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer