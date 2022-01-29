export var categorizeProducts = (productArr) => {
    console.log("productArr",productArr)
    //initialiaze categories array
    var categories = []

    //loop product array to categorize them
    productArr.forEach((pro) => {
        //to check if this category already exist
        var isCategoryExist = categories.some((cat)=>cat.category==pro.category)
        if(isCategoryExist)
        {
            //find index of category Obj whose category is same as product's category and push it
            categories[categories.findIndex(catObj => catObj.category==pro.category)].products.push(pro);
        }
        else{
            //create new obj of category
            categories.push({category: pro.category, products: [pro]
            })
        }
    })
    return categories;
}


//if product already exist in cart add quantity not product
export var additionInCart = (existingProducts,upcomingProduct) => {
    var isExist = existingProducts.some((existingProduct)=>existingProduct.id===upcomingProduct.id)
    if(!isExist){
        return[...existingProducts,{...upcomingProduct,quantity: 1}]
    }else{
        return existingProducts.map(exist => {
            if(exist.id == upcomingProduct.id){
                return{
                    ...exist,
                    quantity: exist.quantity+1
                }
            }
            else{
                return exist
            }
        })
    }
}

export var removeProductFromCart = (existingProducts,product) => {
    var isExist = existingProducts.find(existProduct => existProduct.id==product.id)
    if(isExist){
        if(isExist.quantity==1){
            return existingProducts.filter((exist) => {
                if(exist.id!=product.id){
                    return exist
                }
            })
        }
        else{
            return existingProducts.map((exist) => {
                if(exist.id==product.id){
                    return{
                        ...exist,
                        quantity:exist.quantity-1
                    }
                }
                else{
                    return exist
                }
            })
        }
    }
    else{
        return existingProducts
    }
}

export var deleteProductFromCart = (existingProducts,productId) => {
    return existingProducts.filter((product) => {
        if(product.id!=productId)
        return product
    })
}
