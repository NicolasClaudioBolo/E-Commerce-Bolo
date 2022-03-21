import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async ()=>{
      const q = query(collection(db, "fakestoreapi"));
      const docs = [];
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc)=>{
          docs.push({...doc.data(), id: doc.id})
      })
      setItems(docs);
  }
  getItems();
}, []);

  return (
    <div>
       <ItemList products={items}/>
    </div>
  )
}

export default ItemListContainer