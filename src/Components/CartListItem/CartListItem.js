import React from 'react'
import { connect } from 'react-redux'
import { addToCart, removeFromCart, deleteFromCart } from '../../Redux/cart/cartActions';
import Paragraph from '../Paragraph/Paragraph';
import "./CartListItem.css"

const CartListItem = ({addToCart,removeFromCart,deleteFromCart,...cart}) => {
    var {title='title', cost=50, quantity=0,id, coverPhoto} = cart
    return (
        <div className="cart-list-item">
            <div style={{background:`url(${coverPhoto})` , backgroundSize:" 100% 100%, cover"}} className="cart-item-img"></div>
            <div className="cart-item-desc">
                <Paragraph fontSize="16" fontWeight="semi-bold">{title}</Paragraph>
                <Paragraph>${cost} x {quantity} = ${cost*quantity}</Paragraph>
            </div>
            {/* <h1>{title} - {cost} - <button onClick={()=>deleteFromCart(id)}> x </button></h1>
            <h2><button onClick={()=>addToCart(cart)} >+</button>  {quantity} <button onClick={()=>removeFromCart(cart)}>-</button></h2> */}
        </div>
    )
}

var actions = {
    addToCart,
    removeFromCart,
    deleteFromCart
}

export default connect(null,actions)(CartListItem)
