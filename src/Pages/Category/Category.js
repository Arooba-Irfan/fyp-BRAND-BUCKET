import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import CategoryList from '../../Components/CategoryList/CategoryList';
import { clearProducts } from "../../Redux/products/productActions";
import "./Category.css"

const Category = ({clearProducts}) => {
  console.log("Category",Category)
  useEffect(() => {
    return () => {
      clearProducts()
    }
  }, [])

    return (
        <div className="category">
          {/* <h1>Category Page</h1> */}
          <div></div>
          <CategoryList/>  
        </div>
    )
}

var actions = {
  clearProducts
}

export default connect(null,actions)(Category)