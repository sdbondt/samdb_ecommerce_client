import React from 'react'
import { useSelector } from 'react-redux'
import { useHttpClient } from '../../hooks/httpClient'
const URL = 'http://localhost:5000/api/v1/products/'

const CartItem = ({ product, setIsUpdating }) => {
    const { sendRequest, } = useHttpClient()
    const token = useSelector(state => state.auth.token)
    const { product_name: name, product_id: id, product_price, quantity } = product
    const price = parseInt(product_price)
    const total = quantity * price
    
    const removeFromCart = async () => {
        setIsUpdating(true)
        await sendRequest(URL + id + '/cart/delete', 'POST', null, {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
        setIsUpdating(false)
    }

    const increaseAmount = async () => {
        setIsUpdating(true)
        await sendRequest(URL + id + '/cart/add', 'POST', null, {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
        setIsUpdating(false)
    }

    const decreaseAmount = async () => {
        setIsUpdating(true)
        await sendRequest(URL + id + '/cart/remove', 'POST', null, {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
        setIsUpdating(false)
    }

    return (
        <div>
            <span>{name}  </span>
            <span><button onClick={decreaseAmount} disabled={quantity<=1}>-</button> {quantity} {quantity >1? 'pieces': 'piece'} <button onClick={increaseAmount}>+</button></span>
            <span> €{price}  </span>
            <span>Total: €{total}  </span>
            <button onClick={removeFromCart}>Remove</button>
        </div>
    )
}

export default CartItem
