import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import axios from 'axios';
import {Spinner} from 'reactstrap';
import '../Spinner.css';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';

const ItemDetailContainer = () => {

    // LLAMADO A LA API
    const {id} = useParams()

    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    // axios llama a la API y mapea los productos por id

    useEffect(()=>{
      const getItems = async ()=>{
        const q = query(collection(db, "fakestoreapi"));
        const docs = [];
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(), id: doc.id})
        })
        console.log(docs)

        // TODO linea a modificar
        setProduct(docs[0]);
        setIsLoading(false);
    }
    console.log(product)
    getItems();
        // axios('https://fakestoreapi.com/products')
        // .then((res) => setProduct(res.data.find((product) => product.id == id)));
        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 1500);       
    }, [id]);

  return (
    <div>
      {isLoading ? <Spinner className='Spinner'/> : <ItemDetail product={product}/>}
    </div>
  )
}

export default ItemDetailContainer
