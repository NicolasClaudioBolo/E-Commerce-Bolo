import React from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import {CardGroup} from 'reactstrap';
import '../App.css';

const Home = () => {
  return (
    <div className='App'>
        <CardGroup>
          <ItemListContainer/>
        </CardGroup>
    </div>
  )
}

export default Home
