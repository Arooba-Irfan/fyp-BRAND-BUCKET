import { ADD_TO_CART, DELETE_FROM_CART, REMOVE_FROM_CART } from "./cartConstants"

export var addToCart = (product) => async (dispatch) =>{
    try {
        dispatch({
            type: ADD_TO_CART,
            payload:{
                product
            }
        })
    } catch (error) {
        console.log(error)    
    }
}

export var removeFromCart = (product) => async (dispatch) => {
    try {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: {
                product
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export var deleteFromCart = (productId) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_FROM_CART,
            payload: {
                productId
            }
        })
    } catch (error) {
        console.log(error)
    }
}