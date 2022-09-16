import { useContext } from "react"
import { CartContext } from "../context/CartContext"


const Checkout = () => {
    const {cartProducts} = useContext(CartContext)
    return(
        
        <div>
            
            {cartProducts.map( (product) => {
                return <article><h1>{product.title}</h1><img src={product.image} /><p>{product.descrip}</p></article>
            })}

        
        </div>
    )
}

export default Checkout