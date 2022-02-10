import React from 'react'

import ItemCount from './ItemCount'

import Img from '../assets/Phone.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';

import {Card, CardBody, CardImg, CardTitle} from 'reactstrap'

import './ItemListContainer.css';

const agregar = (cantidad) =>{
    console.log("Se agregó " + cantidad + " item")
}

// let A = function(A){
//     this.nombre = "A"
//     this.precio = 2000
//     this.cantidad = 1
// }

// let B = function(B){
//     this.nombre = "B"
//     this.precio = 1500
//     this.cantidad = 1
// }

// let C = function(C){
//     this.nombre = "C"
//     this.precio = 1200
//     this.cantidad = 1
// }

// const productos = [(A, 2000, 1),(B, 1500, 1),(C, 1200, 1)]

function ItemListContainer (){
    return (
    <Card className='Card'>
        <CardImg src={Img} 
        alt='Teléfono'
        top
        width="100%"
        className='CardImg'
        />
        <CardBody>
            <CardTitle tag="h5">
                Teléfono
            </CardTitle>
            <ItemCount stock={10} initial={1} onAdd={agregar} />
        </CardBody>
    </Card>
    )
}

export default ItemListContainer
