import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '../../Components/Button/Button';
import Cart from '../../Components/Cart/Cart';
import Header from '../../Components/Header/Header';
import Paragraph from '../../Components/Paragraph/Paragraph';
import ProductCard from '../../Components/ProductCard/ProductCard';
import {uploadProduct} from "../../Redux/products/productActions";
import {openModal} from "../../Redux/modal/modalAction"


const Test = ({openModal}) => {
    var [category, setCategeory] = useState("")
    var [title, setTitle] = useState("")
    var [cost, setCost] = useState("")
    var [quantity, setQuantity] = useState("")
    var [discription, setDiscription] = useState("")
    var [coverPhoto, setCoverPhoto] = useState("")
    
    var handleSubmit=(e) => {
        e.preventDefault()
        var productObj = {
            category,
            title,
            discription,
            cost,
            quantity,
            coverPhoto
        }
        uploadProduct(productObj)
    }

    return (
        <div>
            <h1>Test page</h1>
            <form onSubmit = {handleSubmit}>
                <input value={category}  onChange={(e)=> setCategeory(e.target.value)} type="text" placeholder="category"/><br/>
                <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="title"/><br/>
                <input value={cost} onChange={(e)=> setCost(e.target.value)} type="text" placeholder="cost"/><br/>
                <textarea value={discription} onChange={(e)=> setDiscription(e.target.value)} placeholder="discription" col="30" rows ="10"></textarea><br/>
                <input value={quantity} onChange={(e)=> setQuantity(e.target.value)} type="text" placeholder="quantity"/><br/>
                <input onChange={(e)=> setCoverPhoto(e.target.files[0])} type = "file" placeholder="coverPhoto"/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
   return(
       <div style={{fontSize:"62.5%"}}> 
            <Button onClick={()=> openModal({modalType:"testModal",modalProps:{number:23}})}> OPEN MODAL</Button>
            <Button onClick={()=> openModal({modalType:"errorModal",modalProps:{error:"something went wrong"}})}> OPEN MODAL</Button>
            <Button onClick={()=> openModal({modalType:"addressFormModal"})}> OPEN Address MODAL</Button>
           <Cart/>
           <Header>This is Header</Header>
           <Header fontSize="30" fontWeight="light" color="blue">This is Header 2</Header>
           <Paragraph fontSize="25" fontWeight="regular" color="purple">This is paragraph</Paragraph>
           <Button background ="orange" fontWieght="bold" fontSize="20">Click Me!</Button>
           <ProductCard/>
       </div>
   )
}

var actions ={
    // uploadProduct
    openModal
}

// export default connect(null,actions)(Test)

var mapState = (state)=>({
    modal: state.modal
})

export default connect(mapState,actions)(Test)
