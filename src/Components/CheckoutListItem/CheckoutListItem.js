import React from 'react'
import { connect } from 'react-redux'
import { addToCart, removeFromCart, deleteFromCart } from '../../Redux/cart/cartActions';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';
import "./CheckoutListItem.css"

const CheckoutListItem = ({addToCart,removeFromCart,deleteFromCart,...cart}) => {
    var {title='title', cost=0, quantity=0,coverPhoto,id} = cart
    return (
        <div className="checkout-list-item">
            <div className="checkout-item-product">
                <div className="checkout-item-product-image" style={{background:`url(${coverPhoto})`,backgroundSize:"100% 100%,cover"}}></div>
                <Paragraph fontSize="18" fontWeight="semi-bold">{title}</Paragraph>
            </div>
            <div className="checkout-item-quantity center" style={{flexFlow: "row"}}>
                <Button onClick={()=>addToCart(cart)} color="black" background="white"  style={{borderTopLeftRadius:"20px", borderBottomLeftRadius:"20px", transform:"translateX(10px)"}}>+</Button>
                <Button color="black" background="white">{quantity}</Button>
                <Button onClick={()=>removeFromCart(cart)} color="black" background="white"  style={{borderTopRightRadius:"20px", borderBottomRightRadius:"20px", transform:"translateX(-10px)"}}>-</Button>
            </div>
            <div className="checkout-item-price center">
                <Paragraph fontSize="22" fontWeight="semi-bold">${cost}</Paragraph>
            </div>
            <div className="checkout-item-delete center">
                <Paragraph style={{cursor:"pointer"}} onClick={()=>deleteFromCart(id)} fontSize="22" fontWeight="semi-bold">X</Paragraph>
            </div>
        </div>
    )
}

var actions = {
    addToCart,
    removeFromCart,
    deleteFromCart
}

export default connect(null,actions)(CheckoutListItem)
