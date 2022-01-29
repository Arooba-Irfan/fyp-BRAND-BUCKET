import { firestore, serverTimestamp, storage } from "../../Firebase/Firebase"
import { v4 as uuid } from "uuid";
import { CLEAR_PRODUCTS, FETCH_SPECIFIC_PRODUCT, SET_PRODUCTS } from "./productConstant";

export var uploadProduct = (productObj) => async () => { 
    try {
        //1-send file to storage and get url
        var imgref = storage.child(`products/img-${uuid()}`)
        var fileListener = imgref.put(productObj.coverPhoto)
        //fielListener(eventtype, cb-fileProgress, cb-error, cb- willTrigerAfterFileUpload)
        fileListener.on("state-changed", (snapshot)=>{
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log('Upload is ' + progress + '% done');
        },
        (error)=>{
            console.log(error)
        },
        async () => {
            var downloadURL = await imgref.getDownloadURL();
            //2-modify productObj
            productObj.coverPhoto = downloadURL;
            productObj.createdAt = serverTimestamp();
            productObj.cost  = parseFloat(productObj.cost)
            productObj.quantity = parseInt(productObj.quantity)

            //3- create doc in firestore in products collection
            await firestore.collection("products").add(productObj)
        }) 
    } catch (error) {
        console.log(error)
    }
}

export var fetchProducts = () => async (dispatch) => {
    try { 
        var querry = await firestore.collection("products").get()
        var products=[]
        querry.docs.forEach((doc)=>{
            products.push({...doc.data(), id: doc.id})
        }) 
        
        dispatch({
            type:SET_PRODUCTS,
            payload:{
                products
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export var fetchCategoryProducts = category => async (dispatch) => {
    try {
        var querry = await firestore.collection("products").where("category","==",category).get()
        var products = []
        querry.docs.forEach((doc)=>{
            products.push({...doc.data(), id: doc.id})
        })

        dispatch({
            type:SET_PRODUCTS,
            payload:{
                products
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export var fetchSpecificProduct = (productId) => async () => {
    try {
        var querry = await  firestore.collection("products").doc(productId).get()
        var product = querry.data()
        return product
    } catch (error) {
        console.log(error)
    }
}

export var clearProducts = () => async (dispatch) => {
    try {
        dispatch({
            type:CLEAR_PRODUCTS
        })
    } catch (error) {
        console.log(error)
    }
}