import React from 'react';

import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, CardGroup} from 'reactstrap';

import './App.css';
// import ItemListContainer from './components/ItemListContainer';

import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {

  return (
    <Container className='Container'>
      <Header 
      title='E-Commerce'/>
      <div className='App'>
        <CardGroup className='CardGroup'>
          {/* <ItemListContainer /> */}
          <ItemDetailContainer />
        </CardGroup>
      </div>
    </Container>
  )
}

export default App;

// GRACIAS MARTÍN!!
