import React from 'react'
import Link from 'next/link'
import { useHttpClient } from '../../hooks/httpClient'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
const URL = 'http://localhost:5000/api/v1/products/'

const ProductListItem = ({ product, setAddingCart }) => {
    const { product_name: name, product_price: price, product_id: id } = product
    const { sendRequest } = useHttpClient()
    const token = useSelector(state => state.auth.token)


    const addToCart = async () => {
        setAddingCart(true)
        await sendRequest(URL + id + '/cart/add', 'POST', null, {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
        setAddingCart(false)
    }

    

    return (
        <React.Fragment>
            <Link href={`products/${id}`}>
                <a>
                    <p>{name}</p>
                    <p>€ {price}</p>               
                </a>            
            </Link>
            <button onClick={addToCart}>Add to Cart</button>
        </React.Fragment>
        
    )
}

export default ProductListItem
