import React, {useState, createContext, useEffect} from 'react'


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [added, setAdded] = useState(false)

    // TODO if item existe, sumale la cantidad, else crear nuevo item

    const AddToCart = (product, cantidad) => {
        // Esta es la función que va a cambiar el estado cart
        // La voy a invocar en ItemDetail.js
        const newItem = {
            item: product,
            quantity: cantidad
        }
        console.log('newItem', newItem)
        
        const index = cart.findIndex(i => i.product == product)
            if (index >= 0) {
                const itemInCart = cart[index]         
                itemInCart.quantity = itemInCart.quantity + cantidad
                //updateCart es el carrito sin el item encontrado para agregarselo actualizado.
                const updatedCart = cart.filter((c, i) => i !== index)
                updatedCart.push(itemInCart) //agrego item actualizado.
                setCart(updatedCart)   //seteo carrito actualizado. 
            } else {
                const addSameItem = {
                    item: product,
                    quantity: cantidad
                }
                // SPREAD OPERATOR Setea cart con lo que ya tenía cart previamente cargado
                setCart([...cart, newItem])
            }

        

        
        setAdded(true)
    }

    const CheckOut = (form) => {
        cart.length >=1? alert('Gracias por tu compra!') : alert('Primero añadí algún item :)')
        let total = 0
        cart.forEach(i => Math.round((total += (i.item.price * i.quantity) + Number.EPSILON) * 100) / 100)
        const order = cart.map(item => {
            return {
                item: item.item.title,
                quantity: item.quantity,
                subtotal: item.quantity * item.item.price
            }
        })
    }

    // Cada vez que cambia el estado de cart lo renderiza nuevamente

    useEffect(()=>{
        setQuantity(() =>  cart.reduce((t, item) => t += item.quantity, 0))
    },[cart])


    //Esta es la función que modifica el estado global del carrito, los children sí tienen acceso a esta función!
    const removeFromCart = (itemId) => {
        const newCart = cart.filter(item => item.item.id !== itemId)
        setCart(newCart)
    }

      //Borra todos los items del carrito.
    const clear = () => {
        setCart([])
        
    }

    return (
        <CartContext.Provider value={{cart, clear, quantity, AddToCart, removeFromCart, CheckOut}}>
            {/* {Props} */}
            {children}
        </CartContext.Provider>
    )
}
