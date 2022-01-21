import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartList from '../../components/cart/CartList'
import { useHttpClient } from '../../hooks/httpClient'
const URL = 'http://localhost:5000/api/v1/cart'

const Cart = () => {
    const [cart, setCart] = useState([])
    const [isUpdating, setIsUpdating] = useState(false)
    const token = useSelector(state => state.auth.token)
    const { isLoading, error, setError, sendRequest, clearError } = useHttpClient()

    useEffect(() => {
        if (token) {
            const getData = async () => {
                const data = await sendRequest(URL, 'GET', null, {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                })
                return data
            }
            getData().then(data => {
                setCart(data.data)
            })
        }
        
    }, [token, isUpdating])

    return (
        <div>
            <CartList setIsUpdating={setIsUpdating} cart={cart} />
        </div>
    )
}

export default Cart
