import './ItemContainer.css'
import ItemProduct from '../ItemProduct/ItemProduct'

const Itemcontainer = ({section}) => {
    const product1 = {
        tile: "Caja 1",
        price: 15000,
        image: 'bravocase.png',
        stock: 3

    }
    const product2 = {
        tile: "Caja 2",
        price: 13000,
        image: 'phoenixcase.png',
        stock: 5

    }

    const Submit = () => {console.log("ola")}
    return(
        <div className='listproduct'>
            <h2>{section}</h2>
            <ItemProduct data={product1} action={Submit}/>
            <ItemProduct data={product2}/>
        </div>
    )
}

export default Itemcontainer