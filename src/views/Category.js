import React from 'react'
import {Link} from 'react-router-dom'
import { CardBody, Card, CardText } from 'reactstrap'
import '../components/Navigation.css'
import '../App.css'
import './Category.css'

const Category = () => {
  return (
    <div className='Link'>
      <Link to = '/views/MensClothing' className='link'>
        <Card className='Card'>
            <CardBody>
                <CardText>
                    Men's clothing
                </CardText>
            </CardBody>
        </Card>
      </Link>
      <Link to = '/views/WomensClothing' className='link'>
        <Card className='Card'>
            <CardBody>
                <CardText>
                    Women's clothing
                </CardText>
            </CardBody>
        </Card>
      </Link>
      <Link to = '/views/Electronics' className='link'>
        <Card className='Card'>
            <CardBody>
                <CardText>
                    Electronics
                </CardText>
            </CardBody>
        </Card>
      </Link>
      <Link to = '/views/Jewelery' className='link'>
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
