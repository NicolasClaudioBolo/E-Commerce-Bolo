import React from 'react'
import {Link} from 'react-router-dom'
import { CardBody, Card, CardText } from 'reactstrap'
import '../components/Navigation.css'
import '../App.css'
import './Category.css'

const Category = () => {
  return (
    <div className='Link'>
      <Link to = '/' className='link'>
        <Card className='Card'>
            <CardBody>
                <CardText>
                    Clothing
                </CardText>
            </CardBody>
        </Card>
      </Link>
      <Link to = '/' className='link'>
        <Card className='Card'>
            <CardBody>
                <CardText>
                    Backpacks
                </CardText>
            </CardBody>
        </Card>
      </Link>
      <Link to = '/' className='link'>
        <Card className='Card'>
            <CardBody>
                <CardText>
                    Jewelery
                </CardText>
            </CardBody>
        </Card>
      </Link>
    </div>
  )
}

export default Category
