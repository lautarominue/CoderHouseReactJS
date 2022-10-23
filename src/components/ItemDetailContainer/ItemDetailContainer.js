import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
// firebase
import db from '../../firebaseConfig'
import { doc, getDoc, getDocs } from "firebase/firestore"
import { async } from '@firebase/util'



const ItemDetailContainer = () => {
    const [productData, setProductData] = useState({})
    const { id } = useParams()
    
    useEffect( () => {
        getProducts()
        .then((res) => {
            setProductData(res)
        })
    }, [id])

    const getProducts = async () => {
        const docRef = doc(db, 'productos', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product
    }
    

    return(
        <div className='listproduct'>
            <h2>Detalles</h2>
            <ItemDetail data={productData}/>
            
            
        </div>
    )
}

export default ItemDetailContainer;
