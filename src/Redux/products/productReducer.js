import { CLEAR_PRODUCTS, SET_PRODUCTS } from "./productConstant";

var initialState = []

var productReducer = (state=initialState, actions)=>{
    var {type,payload} = actions
    switch (type) {
        case SET_PRODUCTS:
            return [...payload.products]
        case CLEAR_PRODUCTS:
            return []    
        default:
            return state;
    }
}

export default productReducer