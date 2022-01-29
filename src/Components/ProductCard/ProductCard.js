import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart} from '../../Redux/cart/cartActions';
import Button from '../Button/Button';
import Header from '../Header/Header';
import "./ProductCard.css"

const ProductCard = ({addToCart, ...product}) => {
    var {title,cost,id, coverPhoto}=product
    return (
        <div className ="product_card center">
            {/* <h3><Link to={`/product/${id}`}>{title}</Link> - {`$${cost}`} - <button onClick={()=>addToCart(product)}>Add to Cart</button></h3>  */}
            
            <div className="product_card_hover center">
                <Button onClick={()=> addToCart(product)} fontSize="12" fontWeight="regular" background="rgba(0,0,0,0.8)" > ADD TO CART </Button>
            </div>
            
            <div style={{background:`url(${coverPhoto})`, backgroundSize: "100% 100%, cover"}}  
                 className="product_card_image">
            </div>
            
            <Header style={{marginTop:"0.5em", alignSelf:"flex-start"}} fontSize={18} fontWeight="semi-bold">{title}</Header>
            <Header style={{alignSelf:"flex-start"}} fontSize={18} fontWeight="regular">${cost}</Header>
        </div>
    )
}
var actions = {
    addToCart
}

export default connect(null,actions)(ProductCard)
