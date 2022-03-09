import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
    <Navbar
      color="light"
      expand="md"
      light>
        <Nav
          className="me-auto navbar"
          navbar>
          <NavItem>
              <Link to='/' className='Link'>
                    Home
              </Link>
          </NavItem>
          <NavItem>
              <Link to='/views/About' className='Link'>
                    About
              </Link>
          </NavItem>
          <NavItem>
              <Link to='/views/Contact' className='Link'>
                    Contact
              </Link>
          </NavItem>
          <NavItem>
              <Link to="/views/SearchCat/men'sclothing" className='Link'>
                    Men's clothing
              </Link>
          </NavItem>
          <NavItem>
              <Link to="/views/SearchCat/women'sclothing" className='Link'>
                    Women's clothing
              </Link>
          </NavItem>
          <NavItem>
              <Link to="/views/SearchCat/jewelery" className='Link'>
                    Jewelery
              </Link>
          </NavItem>
          <NavItem>
              <Link to='/views/SearchCat/electronics' className='Link'>
                    Electronics
              </Link>
          </NavItem>
        </Nav>
    </Navbar>
  </div>
  )
}

export default Navigation




