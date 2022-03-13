import React, {useState} from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import {CardGroup, Spinner} from 'reactstrap';
import '../App.css';

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1000)
  return (
    <div className='App'>{isLoading ? <Spinner className='Spinner'/> : <CardGroup><ItemListContainer/></CardGroup>}
    </div>
  )
}

export default Home
