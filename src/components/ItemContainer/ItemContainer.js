import './ItemContainer.css'
import ItemProduct from '../ItemProduct/ItemProduct'

const Itemcontainer = ({section}) => {
    return(
        <div className='listproduct'>
            <h2>{section}</h2>
            <ItemProduct title="Caja 1" price={15000} image={`bravocase.png`}/>
            <ItemProduct title="Caja 2" price={10000} image={`phoenixcase.png`}/>
        </div>
    )
}

export default Itemcontainer