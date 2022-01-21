import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHttpClient } from '../../hooks/httpClient'
import { cartActions } from '../../store/cart'
import ErrorModal from '../UI/ErrorModal'
const URL = 'http://localhost:5000/api/v1/products/'

const ProductItem = ({ product,  }) => {
    const { product_name: name, product_price: price, product_description: description, product_id: id } = product
    const { isLoading, error, sendRequest, clearError } = useHttpClient()
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()

    const addToCart = async () => {
        await sendRequest(URL + id + '/cart/add', 'POST', null, {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
        dispatch(cartActions.increment())
    }

    if (isLoading) {
        return <p>is loading...</p>
    }

    return (
        <div>
        {error && (
            <ErrorModal
              message={error}
              onConfirm={clearError}
            />
          )}
            <p>{name}</p>
            <p>{description}</p>
            <p>€ {price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default ProductItem
