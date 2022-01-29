
import React, { useEffect,useState } from "react";
import './App.css';
import {Switch , Route,BrowserRouter as Router, useLocation} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Auth from './Pages/Auth/Auth';
import Category from './Pages/Category/Category';
import CategoryProduct from './Pages/CategoryProduct/CategoryProduct';
import Checkout from './Pages/Checkout/Checkout';
import { firebaseAuthListner } from "./Redux/auth/authAction";
import { connect } from "react-redux";
import Test from "./Pages/Test/Test";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Pages/Product/Product";
import { setNavbarColor } from "./utility/navbar";

function App({firebaseAuthListner}) {
  var location=useLocation()
  //var [navColor,setNavColor]=useState("white")
  //console.log(location.pathname)
    
  useEffect(() => {
    //setNavColor(setNavbarColor(location.pathname))
    firebaseAuthListner()
  }, [])
  return (
    <div>
      <Navbar path={location.pathname}/>
        <Switch>
          <React.Fragment>
            <div className="pageContainer">
              <Route path="/" component={Home} exact/>
              <Route path="/authentication" component={Auth} exact/>
              <Route path="/categories" component={Category } exact/>
              <Route path="/category-products/:category" component={CategoryProduct} exact/>
              <Route path="/checkout/:orderId" component={Checkout} exact/>
              <Route path="/product/:productId" component={Product} exact/>
              <Route path="/test" component={Test} exact/>
            </div>
          </React.Fragment>
        </Switch>
    </div>
  );
}

var actions = {
  firebaseAuthListner
}

export default connect(null,actions)(App);