import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import getConfig from '../../utils/getConfig'
import { setIsLoading } from './isLoading.slice'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => action.payload,
    },
})

export const getCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true))
    return axios
        .get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
        .then((res) => dispatch(setCart(res.data.data.cart.products)))
        .catch((err) => console.log(err))
        .finally(() => dispatch(setIsLoading(false)))
}

export const addCartThunk = (cuantity) => (dispatch) => {
    dispatch(setIsLoading(true))
    return axios
        .post('https://ecommerce-api-react.herokuapp.com/api/v1/cart', cuantity, getConfig())
        .then(() => dispatch(getCartThunk()))
        .catch((err) => console.log(err))
        .finally(() => dispatch(setIsLoading(false)))
}

export const purchasesCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true))
    return axios
        .post('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', {}, getConfig())
        .then(() => dispatch(setCart([])))
        .catch((err) => console.log(err))
        .finally(() => dispatch(setIsLoading(false)))
}

export const { setCart } = cartSlice.actions

export default cartSlice.reducer
