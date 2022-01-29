import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import "./CategoryListItem.css"

const CategoryListItem = ({category,products}) => {
    return (
        <div className="category-list-item">
            <h1 className="category-text"><Link to ={`/category-products/${category}`}>{category.toUpperCase()}</Link>
            </h1>
            {products.map((product)=> <ProductCard key={product.title} {...product}/>)}
            {/* <Link to ={`/category-products/${category}`}><button>View More</button> </Link> <br/>
            --------------------------------------------------- */}
        </div>
    )
}

export default CategoryListItem
