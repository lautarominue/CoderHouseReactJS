import { useEffect, useState } from 'react'
import products from '../../utils/product.mock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {
    const [productData, setProductData] = useState({})
    const { id } = useParams()
    
    useEffect( () => {
        products.some((product) => {
            if(product.id == id) {
                setProductData (product)
            }
        })
    })

    // const [listProducts, setListProducts] = useState([])

    // const getProducts = new Promise ( ( resolve, reject ) => {
    //     setTimeout( () => {
    //         resolve (products.find(item => item.id === 2 ))
    //     }, 2000)
        
    // } )

    // useEffect(() => {
    //     getProducts
    //         .then((res) => {
    //             setListProducts(res)
    //         })
    //         .catch((error) => {
    //             console.log("error")
                
    //         })
    //         .finally( () => {
        
    //         })   
    // }, [])
    

    return(
        <div className='listproduct'>
            <h2>Detalles</h2>
            <ItemDetail data={productData}/>
            
            
        </div>
    )
}

export default ItemDetailContainer;