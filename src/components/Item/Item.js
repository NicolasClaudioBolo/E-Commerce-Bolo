import React from 'react';

import {Card, CardBody, CardImg, CardTitle, CardSubtitle, Button} from 'reactstrap';

import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './Item.css';

function Item ({data}){
    return (

     // ITEM   
     
    <Card className='Card'>
        <CardImg src={data.image} 
        alt='Teléfono'
        top
        width="100%"
        className='CardImg'
        />
        <CardBody>
            <CardTitle tag="h5">
                {data.title}
            </CardTitle>
            <CardSubtitle>
                {data.price}
            </CardSubtitle>
            <Link to={`/views/ProductDetail/${data.id}`}>
                <Button className='Button'>
                    <h4>Ver más</h4>
                </Button>
            </Link>
        </CardBody>
    </Card>
    )
}

export default Item
