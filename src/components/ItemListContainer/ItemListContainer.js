import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig'

const ItemListContainer = () => {

  const [itemsData, setItemsData] = useState([])

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, 'fakestoreapi'), 
      where("category", "==", "men's clothing"));
      const docs = []
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      setItemsData(docs);
      console.log(itemsData)
    }; 
    getItems();
}, []);

    // LLAMADO A LA API

  return (
    <div>
      {itemsData.map((data) =>{
        return <ItemList itemsData={data} key={data.id} />
      })}
    </div>
  )
}

export default ItemListContainer