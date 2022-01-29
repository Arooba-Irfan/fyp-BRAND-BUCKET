import React, { useState } from 'react'
import { connect } from 'react-redux'
import { calculateTotal } from '../../utility/checkout'
import CheckoutList from '../../Components/CheckoutList/CheckoutList'
import OrderForm from '../../Components/OrderForm/OrderForm'
import "./Checkout.css"
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button'
import {openModal} from "../../Redux/modal/modalAction"

const Checkout = ({total, openModal}) => {
    var [ShippInfoShown,setShipInfoShown] = useState(false)
    return (
        <div className="checkout-page-container">
          <div className="checkout" >
            <Header fontSize="34" fontWeight="bold">Shopping Cart</Header>
            <CheckoutList/>
            <div className="checkout-bottom-content">
              <Header fontSize="34" fontWeight="bold">Total: ${total}</Header>
              <Button style={{justifySelf:"end", borderRadius:"40px"}} fontSize="29" fontWeight="semi-bold" background="white" color="black"
                onClick={()=> openModal({modalType:"addressFormModal"})}
              > PROCEED & PAY</Button>
            </div>
            {/* {ShippInfoShown && <OrderForm/>}
            <button onClick={()=>{setShipInfoShown(!ShippInfoShown)}}>Proceed & Pay</button>  */}
          </div>
        </div>
    )
}

var actions={
  openModal
}

var mapState = (state) => ({
  total: calculateTotal(state.cart)
})

export default connect(mapState,actions)(Checkout)