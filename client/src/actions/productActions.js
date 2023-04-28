import axios from 'axios'

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS

} from '../constants/productConstant'



export const getProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCTS_REQUEST,

        })
        const { data } = await axios.get('/api/v1/products')
        console.log(data);

        // Dispatch Action
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.respose.data.message
        })
    }
}


// Clear error Handler

export const clearErros = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    })
}