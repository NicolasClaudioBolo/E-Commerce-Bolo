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
              <Link to='/views/Category' className='link'>
                    Categories
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
        </Nav>
    </Navbar>
  </div>
  )
}

export default Navigation




