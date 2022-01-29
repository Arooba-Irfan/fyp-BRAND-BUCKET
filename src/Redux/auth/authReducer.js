import { REMOVE_USER, SET_USER } from "./authConstant";

var initialState = null;
var auhtReducer = (state=initialState, action) => {
    var {type, payload} = action;
    switch (type) {
        case SET_USER:
            return  payload.user;
        case REMOVE_USER:
            return null;
        default:
            return state;
    }
};
export default auhtReducer;