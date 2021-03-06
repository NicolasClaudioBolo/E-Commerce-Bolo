import React, {useState, createContext, useEffect} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [added, setAdded] = useState(false)


    // Esta es la función que va a cambiar el estado cart
    // La invoco en ItemDetail.js
    const AddToCart = (product, cantidad) => {
        // If item existe, le suma la cantidad deseada, else crea nuevo item   
        const index = cart.findIndex(item => {
            return product.id == item.item.id
        })
            if (index >= 0) {
                // Item encontrado. Le suma la cantidad deseada
                
                const itemInCart = cart[index]         
                itemInCart.quantity = itemInCart.quantity + cantidad

                //updatedCart es el carrito sin el item encontrado para agregarselo actualizado.
                const updatedCart = cart.filter((c, i) => i !== index)
                updatedCart.push(itemInCart) //agrego item actualizado.
                setCart(updatedCart)   //seteo carrito actualizado. 
            } else {
                const newItem = {
                    item: product,
                    quantity: cantidad
                }
                // SPREAD OPERATOR Setea cart con lo que ya tenía cart previamente cargado
                setCart([...cart, newItem])
            }
        
            setAdded(true)
        }

        //Esta es la función que modifica el estado global del carrito, los children sí tienen acceso a esta función!
        const removeFromCart = (itemId) => {
                const newCart = cart.filter(item => item.item.id !== itemId)
                setCart(newCart)
        }

        
        //Borra todos los items del carrito.
        const clear = () => {
                setCart([])
        
        }

        //Terminar compra

        const CheckOut = () => {
                cart.length >=1? alert('¡Gracias por tu compra!') : alert('Primero añadí algún producto a tu carrito')
        }

        // Cada vez que cambia el estado de cart, useEffect lo renderiza nuevamente

        useEffect(()=>{
                    setQuantity(() =>  cart.reduce((t, item) => t += item.quantity, 0))
                },[cart])

        // TODO Función para sumar total

    return (
        <CartContext.Provider value={{cart, added, clear, quantity, AddToCart, removeFromCart, CheckOut}}>
            {children}
        </CartContext.Provider>
        )
}
