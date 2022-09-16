import './ItemProduct.css'
import { Link } from 'react-router-dom';


const ItemProduct = ({data, action}) => {
    const {title, image, price, stock, id} = data

    

    return(
        <Link to={`/productos/${id}`}>
            <div className='cardproduct'>
                <img className="imgproduct" src={`/assets/${image}`} alt="" />
                <p>{title}</p>
            </div>
        </Link>
    )
}

export default ItemProduct