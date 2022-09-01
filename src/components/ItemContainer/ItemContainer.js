import { useEffect, useState } from 'react'
import './ItemContainer.css'
import ItemList from '../ItemList/ItemList'
import products from '../../utils/product.mock'



const Itemcontainer = ({section}) => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise ( ( resolve, reject ) => {
        setTimeout( () => {
            resolve (products)
        }, 2000)
        
    } )

    useEffect(() => {
        getProducts
            .then((res) => {
                setListProducts(res)
            })
            .catch((error) => {
                console.log("error")
                
            })
            .finally( () => {
        
            })   
    }, [])
    

    return(
        <div className='listproduct'>
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts}/>
            
        </div>
    )
}

export default Itemcontainer