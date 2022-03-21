import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {Spinner} from 'reactstrap';
import '../Spinner.css';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
      const getItems = async ()=>{
        const q = query(collection(db, 'fakestoreapi'), where('__name__', '==', id));
        const docs = [];
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(), id: doc.id})
        })
        setProduct(docs[0]);
        setIsLoading(false);
    }
    getItems();      
    }, [id]);

  return (
    <div>
      {isLoading ? <Spinner className='Spinner'/> : <ItemDetail product={product}/>}
    </div>
  )
}

export default ItemDetailContainer
