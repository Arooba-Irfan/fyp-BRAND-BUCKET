import React from 'react'
import { connect } from 'react-redux'
import CartListItem from '../CartListItem/CartListItem'
import "./CartList.css"

const CartList = ({cartItems}) => {
    return (
        <div className ="cart-list">
            {cartItems.map((cart)=> <CartListItem key={cart.id} {...cart}/>)}
        </div>
    )
}

var mapState = (state) => ({
    cartItems: state.cart
})

export default connect(mapState)(CartList)