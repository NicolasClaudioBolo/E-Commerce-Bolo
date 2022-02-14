import React from 'react'

import ItemCount from './ItemCount'

import 'bootstrap/dist/css/bootstrap.min.css';

import {Card, CardBody, CardImg, CardTitle, CardSubtitle} from 'reactstrap'

import './ItemListContainer.css';

const agregar = (cantidad) =>{
    console.log("Se agregó " + cantidad + " item")
}

function ItemListContainer ({data}){
    return (
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
            <ItemCount stock={10} initial={1} onAdd={agregar} />
        </CardBody>
    </Card>
    )
}

export default ItemListContainer
