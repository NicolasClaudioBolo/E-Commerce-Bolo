import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Category from './views/Category';
import Clothing from './views/Clothing';
import ProductDetail from './views/ProductDetail';
import Contact from './views/Contact';
import About from './views/About';
import Error from './views/Error';
import {Container} from 'reactstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {

  return (  
  <Router> 
    <Container className='Container'>
      <Header title='E-Commerce'/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/views/Category' element={<Category />} />
          <Route path='/views/Clothing' element={<Clothing />} />
          <Route path='/views/ProductDetail/:id' element={<ProductDetail />} />
          <Route path='/views/Contact' element={<Contact />} />
          <Route path='/views/About' element={<About />} />
          <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Container>
  </Router>
  )
}

export default App;

// GRACIAS MARTÍN!!
