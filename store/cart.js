import { createSlice } from '@reduxjs/toolkit'

const initialCartState = {
  cartCount: 0,
  cart: {}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        increment(state) {
            state.cartCount = state.cartCount + 1
        },
        decrement(state) {
            state.cartCount--
        },
        setCartCount(state, action) {
            state.cartCount = action.payload
        },
        setCart(state, action) {
            state.cart = action.payload
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer