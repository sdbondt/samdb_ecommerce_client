import React from 'react'
import CartItem from './CartItem'

const CartList = ({ cart, setIsUpdating }) => {
    console.log(cart);
    const totalAmount = cart.reduce((acc, el) => {
        return acc + parseInt(el.product_price)*el.quantity
    },0)
    return (
        <div>
            {cart.map((p, i) => {
                return <CartItem setIsUpdating={setIsUpdating} product={p} key={i} />
            })}
            <p>Total amount: €{totalAmount}</p>
        </div>
    )
}

export default CartList
