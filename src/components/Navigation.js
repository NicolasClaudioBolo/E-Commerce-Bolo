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
              <Link to='/' className='link'>
                    Home
              </Link>
          </NavItem>
          <NavItem>
              <Link to='/views/About' className='link'>
                    About
              </Link>
          </NavItem>
          <NavItem>
              <Link to='/views/Contact' className='link'>
                    Contact
              </Link>
          </NavItem>
          <NavItem>
              <Link to="/views/SearchCat/men'sclothing" className='link'>
                    Men's clothing
              </Link>
          </NavItem>
          <NavItem>
              <Link to="/views/SearchCat/women'sclothing" className='link'>
                    Women's clothing
              </Link>
          </NavItem>
          <NavItem>
              <Link to="/views/SearchCat/jewelery" className='link'>
                    Jewelery
              </Link>
          </NavItem>
          <NavItem>
              <Link to='/views/SearchCat/electronics' className='link'>
                    Electronics
              </Link>
          </NavItem>
        </Nav>
    </Navbar>
  </div>
  )
}

export default Navigation




