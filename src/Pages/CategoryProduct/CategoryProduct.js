import React , { useEffect } from 'react'
import { connect } from 'react-redux'
import ProductCard from '../../Components/ProductCard/ProductCard';
import { fetchCategoryProducts, clearProducts} from '../../Redux/products/productActions';
import "./CategoryProduct.css"

const CategoryProduct = ({match:{params: {category}}, fetchCategoryProducts, clearProducts, products}) => {
  console.log(products)

  useEffect(() => {
    //CDM
    fetchCategoryProducts(category)
    return () => {
      clearProducts()
    }
  }, [])
    return (
        <div className="category-products">
          <div></div> 
          <div className="category-products-item">
            <h1 className="category-text additional-category-text"> {category.toUpperCase()} </h1>
            {products.map((product)=> <ProductCard key={product.title} {...product}/>)} 
          </div>
        </div>
    )
}

var actions = {
  fetchCategoryProducts,
  clearProducts
}

var mapState = (state) => ({
  products:state.product
})

export default connect(mapState,actions)(CategoryProduct)