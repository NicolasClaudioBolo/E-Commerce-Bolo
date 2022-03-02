import React, {useEffect, useState} from 'react'
import ItemList from '../components/ItemList';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import '../components/Spinner.css';
import { useParams } from 'react-router-dom';
import '../App.css'

const SearchCat = () => {
    const {category} = useParams()

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        axios('https://fakestoreapi.com/products')
        .then((res) => {
          res.data.filter((data) => (data.category))
          const filterProducts = res.data.filter((data) => data.category.replace(" ", "") == category)
          setProducts(filterProducts)
          setIsLoading(false)
        } )        
    }, [category]);

  return (
    <div className='App'>
      {isLoading ? <Spinner className='Spinner'/> : <ItemList products={products}/>}
    </div>
  )
}

export default SearchCat 
