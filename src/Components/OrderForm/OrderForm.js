import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'

const OrderForm = ({user}) => {

    var [fullName, setFullName] = useState("")
    var [email, setEmail] = useState("")
    var [phone, setPhone] = useState("")
    var [address, setAddress] = useState("")

    useEffect(() => {
        //CDM
        var{fullName,email,phone,address}= (user)
        setFullName(fullName? fullName : "")
        setEmail(email? email : "")
        setPhone(phone? phone : "")
        setAddress(address? address : "")
    }, [])
    
    var handleFormSubmit = (e)=>{
        e.preventDefault()
        var shippingInfo = {
            fullName,
            email,
            phone,
            address
        }
        console.log(shippingInfo)
    }
    return (
        <div>
            <h1>OrderForm</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={fullName} placeholder="Receiver's FullName" onChange={(e) => {setFullName(e.target.value)}} />
                <input type="text" value={email} placeholder="Receiver's Email" onChange={(e) => {setEmail(e.target.value)}} />
                <input type="text" value={phone} placeholder="Receiver's Contact" onChange={(e) => {setPhone(e.target.value)}} />
                <input type="text" value={address} placeholder="Receiver's Address" onChange={(e) => {setAddress(e.target.value)}} />
                <button type="submit">Pay</button>
            </form>
        </div>
    )
}

var mapState = (state) => ({
    user:state.auth
})
export default connect(mapState)(OrderForm)
