import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import ListCartWidget from "../ListCartWidget/ListCartWidget"
import PriceTotal from "../PriceTotal/PriceTotal"


const Checkout = () => {
    const {cartProducts} = useContext(CartContext)
    return(
        <>
        <div>
            {cartProducts.map( (data) => {
                return <ListCartWidget data={data} />
                
            })}
        </div>
        <PriceTotal />
        </>
    )
}

export default Checkout