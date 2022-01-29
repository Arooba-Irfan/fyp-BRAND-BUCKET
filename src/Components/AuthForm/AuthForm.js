import React from 'react'
import Button from "../Button/Button"
import SigninForm from '../SigninForm/SigninForm'
import SignupForm from '../SignupForm/SignupForm'
import "./AuthForm.css"
import { useState } from "react"
import { connect } from 'react-redux'
import {googleSignin} from "../../Redux/auth/authAction"

const AuthForm = ({googleSignin}) => {
    var[formType, setFormType] = useState("sign-in")
    return (
        <div className="auth-form">
            <div className="auth-form-switcher">
                <Button onClick={()=>setFormType("sign-up")} style={{position:"relative"}} background="white" color="black">
                    SIGNUP
                    <div className="underliner"></div>
                </Button>
                <Button onClick={()=>setFormType("sign-in")} style={{justifySelf:"end",position:"relative"}} background="white" color="black">
                    SIGNIN
                    <div className="underliner"></div>
                </Button>
            </div>
            <div className="auth-form-field">
                {formType=="sign-in"? <SigninForm/> : <SignupForm/>}
            </div>
            <div className="auth-form-button">
                <div className="separator-or">OR</div>
                <Button onClick={googleSignin} background="rgba(0,0,0,0.7)" color="white" style={{width:"60%", marginTop:"2em"}}>Google SIGN-IN</Button>
            </div>
        </div>
    )
}

var actions = { 
    googleSignin
}

export default connect(null,actions)(AuthForm)
