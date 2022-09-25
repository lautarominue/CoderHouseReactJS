import { Button } from "@mui/material"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import "./PriceTotal.css"

const PriceTotal = () => {
    const { cartProducts } = useContext(CartContext)
    const totalPrice = () => {
        let total = 0;
        cartProducts.map((i) => {
            total += i.price * i.cant;
        })
        return total;
    }
    totalPrice()
    return (
        <div className="priceTotal">
                <Button variant="contained" color="secondary">
                    Total
                    <span >
                        {":  $" + totalPrice()}
                    </span>
                </Button>
        </div>
    )
}
export default PriceTotal