import React from 'react'
import ProductListItem from './ProductListItem'

const ProductsList = ({ products, setAddingCart }) => {
    return (
        <div>
            {products.map((p, i) => {
                return <ProductListItem setAddingCart={setAddingCart} key={i} product={p} />
            })}
        </div>
    )
}

export default ProductsList
