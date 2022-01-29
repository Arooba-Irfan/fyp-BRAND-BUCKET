import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { generateOrder } from '../../Redux/orders/orderActions'
import Button from '../Button/Button'
import CartList from '../CartList/CartList'
import CategoryList from '../CategoryList/CategoryList'
import Header from '../Header/Header'
import "./Cart.css"

const Cart = ({generateOrder,cart}) => {
    return (
        <div className="cart ">
            <Header fontSize="24" style={{letterSpacing:"4px"}}>CART</Header>
            <CartList/>
            <Button disabled={cart.length>0 ? false : true} onClick={generateOrder} fontSize="24" background="rgba(0,0,0,0.6)" style={{width:"90%", letterSpacing:"2px"}}>CHECKOUT</Button>
            {/* <button onClick = {generateOrder}>CheckOut</button> */}
        </div>
    )
}

var actions = {
    generateOrder
}

var mapState = (state) => ({
    cart: state.cart
})
export default connect(mapState,actions)(Cart)
