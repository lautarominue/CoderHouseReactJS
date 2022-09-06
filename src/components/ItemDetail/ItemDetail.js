import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({data}) => {
    const {title,price,stock, image,descrip} = data;
    
    return(
        <article className="productDetail">
            <div className="itemContainer">
            <img src={`../assets/${image}`} />
            <h2 className="titleDetail">{title}</h2>
            <p className="infoDetail">{descrip}</p>
            <p className="infoDetail">${price}</p>

            <ItemCount stock={stock}/>
        </div>
        </article>
    )
}

export default ItemDetail;