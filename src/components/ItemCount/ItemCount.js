import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({stock, data}) => {
    const [contador, setContador] = useState(1);

    const addNumber = () => {
        if(contador<stock){
            setContador(contador + 1)
        }
    }

    const deleteNumber = () => {
        if(contador>0) {
            setContador(contador - 1)
        }
    }

    const onAdd = () => {
        for (let index =0; index < contador; index++) {
            console.log("Cantidad")

        } 
        setContador(0)
    }


    return(
        <div>
            <div className="count">
                <button onClick={deleteNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <button onClick={onAdd}>Comprar</button>
        </div>
    )
}

export default ItemCount