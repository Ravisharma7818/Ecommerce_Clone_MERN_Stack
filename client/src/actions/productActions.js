import axios from 'axios'

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL

} from '../constants/productConstant'



export const getProducts = (currentPage = 1, keyword = '', price, category, rating) => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCTS_REQUEST,

        })
        if (category) {
            const { data } = await axios.get(`/api/v1/products?keyword=${keyword}&page=${currentPage}&category=${category}&ratings[gte]=${rating}`)


            dispatch({
                type: ALL_PRODUCTS_SUCCESS,
                payload: data,
            });
        }
        else {

            const { data } = await axios.get(
                `/api/v1/products?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}`)


            dispatch({
                type: ALL_PRODUCTS_SUCCESS,
                payload: data,
            });
        }

    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}



export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST,

        })
        const { data } = await axios.get(`/api/v1/product/${id}`)

        // Dispatch Action
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}


// Clear error Handler

export const clearErros = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    })
}

