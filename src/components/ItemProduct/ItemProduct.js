import './ItemProduct.css'

const ItemProduct = ({title, price, image}) => {
    return(
        <div className='cardproduct'>
            <img className="imgproduct" src={`/assets/${image}`} alt="" />
            <p>{title}</p>
            <span>$ {price}</span>
            <button>Comprar</button>
        </div>
    )
}

export default ItemProduct