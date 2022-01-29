import {combineReducers } from 'redux'
import auhtReducer from './auth/authReducer'
import cartReducer from './cart/cartReducer';
import modalReducer from './modal/modalReducer';
import orderReducer from './orders/orderReducer';
import productReducer from "./products/productReducer";
import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'//local storage
//import storage from 'redux-persist/lib/storage/session'//session storage
const persistConfig = {
    key: 'root',
    storage,
    whiteList:["auth"]
  }

var rootReducer = combineReducers({
    auth:auhtReducer,
    product:productReducer,
    cart: cartReducer,
    order: orderReducer,
    modal:modalReducer
})


export default persistReducer(persistConfig,rootReducer)