import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    console.log("cartproducts",cartProducts)

    const addProductToCart = (product) => {
        let isInCart = cartProducts.find(cartItem => cartItem.id === product.id)
        if (!isInCart){
            setCartProducts([...cartProducts, product])
            setTotalProducts(totalProducts + product.quantity)
        }
        
    }


    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart
        
    }
    

    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }