import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { categorizeProducts } from '../../utility/products'
import CategoryListItem from '../CategoryListItem/CategoryListItem';
import { fetchProducts } from "./../../Redux/products/productActions";
import "./CategoryList.css"
import productData from "../../utility/productData.json"

const CategoryList = ({fetchProducts, categories}) => {
    console.log(categories)
    console.log("productData",productData)
    var categories = categorizeProducts(productData);
  useEffect(() => {
    //CDM 
    // fetchProducts()
  }, [])
    return (
        <div className="category-list">
            {/* <h1> CategoryList</h1> */}
            {categories.map((category) => <CategoryListItem key={category.category} {...category}/> )}
        </div>
    )
}

// var actions = {
//     fetchProducts
//   }
  
  // var mapState = (state) => ({
  //    categories: categorizeProducts(state.product)
  // })

// export default connect(mapState,actions)(CategoryList)
export default CategoryList;
