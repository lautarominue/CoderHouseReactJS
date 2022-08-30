
import './ItemProduct.css'
import ItemCount from '../ItemCount/ItemCount';


const ItemProduct = ({data, action}) => {
    const {title, image, price, stock} = data

    return(
        <div className='cardproduct'>
            <img className="imgproduct" src={`/assets/${image}`} alt="" />
            <p>{title}</p>
            <ItemCount stock={stock}/>
        </div>
    )
}

export default ItemProduct