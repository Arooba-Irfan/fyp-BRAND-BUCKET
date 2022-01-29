import React from 'react'
import { connect } from 'react-redux'
import { calculateTotal } from '../../utility/checkout'
import CheckoutListItem from '../CheckoutListItem/CheckoutListItem'
import Paragraph from '../Paragraph/Paragraph'
import "./CheckoutList.css"

const CheckoutList = ({cartItems}) => {
    return (
        <div className="checkout-list">
            <div className="checkout-list-item checkout-list-item-extends">
                <Paragraph fontSize="20">Product</Paragraph>
                <Paragraph fontSize="20">Quantity</Paragraph>
                <Paragraph fontSize="20">Price</Paragraph>
            </div>
            {cartItems.map((cart)=> <CheckoutListItem key={cart.id} {...cart}/>)}
        </div>
        
    )
}

var mapState = (state) => ({
    cartItems: state.cart
})

export default connect(mapState)(CheckoutList)
