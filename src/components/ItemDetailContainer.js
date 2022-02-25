import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import axios from 'axios';
import {Spinner} from 'reactstrap';
import './Spinner.css';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    // LLAMADO A LA API
    const {id} = useParams()

    console.log(id)

    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        axios('https://fakestoreapi.com/products')
        .then((res) => setProduct(res.data.find((product) => product.id == id)));
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);        
    }, []);

  return (
    <div>
      {isLoading ? <Spinner className='Spinner'/> : <ItemDetail product={product}/>}
    </div>
  )
}

export default ItemDetailContainer
