import React, {useState, createContext, useEffect} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [added, setAdded] = useState(false)


    const AddToCart = (product, cantidad) => {  
        const index = cart.findIndex(item => {
            return product.id == item.item.id
        })
            if (index >= 0) {
                
                const itemInCart = cart[index]         
                itemInCart.quantity = itemInCart.quantity + cantidad

                const updatedCart = cart.filter((c, i) => i !== index)
                updatedCart.push(itemInCart) 
                setCart(updatedCart)    
            } else {
                const newItem = {
                    item: product,
                    quantity: cantidad
                }
                setCart([...cart, newItem])
            }
            setAdded(true)
        }

        const removeFromCart = (itemId) => {
                const newCart = cart.filter(item => item.item.id !== itemId)
                setCart(newCart)
        }

        const clear = () => {
                setCart([])
        
        }


        const CheckOut = () => {
                cart.length >=1? alert('¡Gracias por tu compra!') : alert('Primero añadí algún producto a tu carrito')
        }

        useEffect(()=>{
                    setQuantity(() =>  cart.reduce((t, item) => t += item.quantity, 0))
                },[cart])

    return (
        <CartContext.Provider value={{cart, added, clear, quantity, AddToCart, removeFromCart, CheckOut}}>
            {children}
        </CartContext.Provider>
        )
}
