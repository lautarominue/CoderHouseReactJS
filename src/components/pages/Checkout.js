import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Cart from "../Cart/Cart"


const Checkout = () => {
    const {cartProducts} = useContext(CartContext)
    return(
        
        <div>
            <p>Productos agregados al carrito</p>
            {cartProducts.map( (product) => {
                return <article><h1>{product.title}</h1><img src={product.image} /><p>{product.descrip}</p></article>
            })}

        <Cart />
        </div>
    )
}

export default Checkout