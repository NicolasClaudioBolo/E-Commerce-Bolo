import React from 'react';

import ItemListContainer from './components/ItemListContainer';

import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, CardGroup} from 'reactstrap';

import './App.css';

const App = () => {
  return (
    <Container className='Container'>
      <Header 
      title='E-Commerce'/>
      <div className='App'>
        <CardGroup>
          <ItemListContainer />
          <ItemListContainer />
          <ItemListContainer />
          <ItemListContainer />
        </CardGroup>
      </div>
    </Container>
  )
}

export default App;

// GRACIAS MARTÍN!!
