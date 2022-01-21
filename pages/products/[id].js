import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useHttpClient } from '../../hooks/httpClient'
import { useSelector } from 'react-redux'
import ErrorModal from '../../components/UI/ErrorModal'
import ProductItem from '../../components/products/ProductItem'
const URL = 'http://localhost:5000/api/v1/products/'

const Product = () => {
    const [product, setProduct] = useState({})
    const { isLoading, error, sendRequest, clearError } = useHttpClient()
    const token = useSelector(state => state.auth.token)
    const router = useRouter()
    const {query} = router
    const { id } = query

    useEffect(() => {
        if (token) {
            const getData = async () => {
            const data = await sendRequest(URL+id, 'GET', null, {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
        return data
      }
      getData().then(data => {
        setProduct(data.data)
      })
        }
    }, [token])

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
            <ProductItem product={product} />
        </div>
    )
}

export default Product
