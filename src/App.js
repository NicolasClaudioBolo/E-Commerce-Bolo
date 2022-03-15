import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home';
import SearchCat from './views/SearchCat';
import ProductDetail from './views/ProductDetail';
import Contact from './views/Contact';
import About from './views/About';
import Error from './views/Error';
import Cart from './views/Cart';
import CheckOut from './views/CheckOut';
import {Container} from 'reactstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { CartProvider } from './components/CartContext/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {

  return ( 
  <CartProvider>  
    <Router>
        <Container className='Container'>
          <Header title='E-Commerce'/>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/views/SearchCat/:category' element={<SearchCat />} />
              <Route path='/views/ProductDetail/:id' element={<ProductDetail />} />
              <Route path='/views/Cart' element={<Cart />} />
              <Route path='/views/CheckOut' element={<CheckOut />} />
              <Route path='/views/Contact' element={<Contact />} />
              <Route path='/views/About' element={<About />} />
              <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </Container>
    </Router>
  </CartProvider>
  )
}

export default App;

// GRACIAS MARTÍN!!
