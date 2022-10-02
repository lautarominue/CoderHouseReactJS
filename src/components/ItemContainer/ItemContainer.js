import { useEffect, useState } from 'react'
import './ItemContainer.css'
import ItemList from '../ItemList/ItemList'
import products from '../../utils/product.mock'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../firebaseConfig'



const Itemcontainer = ({section}) => {

    const [listProducts, setListProducts] = useState([])

    // const getProducts = new Promise ( ( resolve, reject ) => {
    //     setTimeout( () => {
    //         resolve (products)
    //     }, 2000)
        
    // } )

    const getProducts = async () => {
        const productCollection = collection(db, 'productos')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map( (doc) => {
            let product = doc.data()
            product.id = doc.id
            console.log('producto con id : ', product)
            return product
        })
        return productList
    }

    useEffect(() => {
        getProducts()
        .then((res) => {
            setListProducts(res)
        })
        // getProducts
        //     .then((res) => {
        //         setListProducts(res)
        //     })
        //     .catch((error) => {
        //         console.log("error")
                
        //     })
        //     .finally( () => {
        
        //     })   
    }, [])
    

    return(
        <div className='listproduct'>
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts}/>
            
        </div>
    )
}

export default Itemcontainer