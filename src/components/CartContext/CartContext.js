import React, {useState, createContext} from 'react'
import axios from 'axios';


export const CartContext = createContext();

const InitalState = [
    axios('https://fakestoreapi.com/products')
    .then((res) => (res.data.find))]

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(InitalState)

    console.log(cart)

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {}
            {children}
        </CartContext.Provider>
    )
}
