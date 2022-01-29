import { additionInCart,deleteProductFromCart, removeProductFromCart } from "../../utility/products";
import { ADD_TO_CART, DELETE_FROM_CART, REMOVE_FROM_CART } from "./cartConstants";

var initialState = []

var cartReducer = (state=initialState,action)=>{
    var {type,payload}=action
    switch (type) {
        case ADD_TO_CART:
            return additionInCart(state,payload.product)
        case REMOVE_FROM_CART:    
            return removeProductFromCart(state,payload.product)
        case DELETE_FROM_CART:
            return deleteProductFromCart(state,payload.productId)
        default:
            return state;
    }
}
export default cartReducer
