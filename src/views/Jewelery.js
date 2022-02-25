import React, {useEffect, useState} from 'react'
import ItemDetail from '../components/ItemDetail';
import Category from './Category';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import '../components/Spinner.css';
import { useParams } from 'react-router-dom';
import '../App.css'

const Jewelery = () => {
    const {category} = useParams()

    console.log(category)

    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        axios('https://fakestoreapi.com/products')
        .then((res) => setProduct(res.data.find((product) => product.category === "jewelery")));
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);        
    }, []);

  return (
    <div className='App'>
      {isLoading ? <Spinner className='Spinner'/> : <ItemDetail product={product}/>}
      <Category />
    </div>
  )
}

export default Jewelery
