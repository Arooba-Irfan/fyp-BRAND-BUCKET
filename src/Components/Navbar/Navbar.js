import './Navbar.css'
import React, { useState,useEffect } from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signout } from "../../Redux/auth/authAction";
import Cart from '../Cart/Cart'
import { setNavbarColor } from '../../utility/navbar'


const MenuItem=({children,to="#",path,...restProps})=>{
    console.log("menuItem")
    var [navColor,setNavColor]=useState("white")
      useEffect(() => {
        setNavColor(setNavbarColor(path))
      }, [path])
    return(
        <div {...restProps} className="menuItem center">
            <Link to={to}>
                <Header color={navColor} fontWeight="regular" fontSize="26" style={{cursor:"pointer", display:"inline"}}>{children}</Header>
            </Link>      
        </div>
    )
}

const Navbar = ({auth,signout,path}) => {
    var [isCartVisible,setIsCartVisible]=useState(false)
    var [navBackColor,setNavBackColor]=useState("transparent")

    useEffect(() => {
        if(path=="/categories"){
            setNavBackColor("rgb(211, 232, 240)")
            console.log(navBackColor)
        }
        else{
            setNavBackColor("transparent")
        }
      }, [path])
    
      return (
          <div>
        {/* <div className="navbar" style={{backgroundColor:`${navBackColor}`}}> */}
            {/* <div className="logo">
            </div> */}
            {/* <MenuItem to ="/">LOGO</MenuItem> */}
            {/* <MenuItem to="/categories" path={path}>SHOP</MenuItem>
            <div>
                <MenuItem path={path} onClick={()=>setIsCartVisible(!isCartVisible)}>CART</MenuItem>
                {isCartVisible ?<Cart/> : null }
            </div>
            <MenuItem to="/test" path={path}>TEST</MenuItem>
            // {auth ? <MenuItem to="/authentication" path={path} onClick={signout}>LOGOUT</MenuItem>:<MenuItem path={path} to="/authentication">LOGIN</MenuItem>} */}
        </div>
    )
}

var actions={
    signout
}
var mapState=(state)=>({
    auth: state.auth
})

export default connect(mapState,actions)(Navbar)
