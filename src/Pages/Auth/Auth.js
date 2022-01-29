import React from 'react'
import SigninForm from '../../Components/SigninForm/SigninForm'
import SignupForm from '../../Components/SignupForm/SignupForm'
import SignoutForm  from "../../Components/SignoutForm/SignoutForm";
import GoogleSigninForm from '../../Components/GoogleSigninForm/GoogleSigninForm';
import "./Auth.css"
import AuthForm from '../../Components/AuthForm/AuthForm';

const Auth = () => {
    return (
        <div className="auth">
          <div class="auth-top"></div>
          {/* <div className="auth_bottom"> */}
            <div className="auth-left center">
            </div>
            <div className="auth-right center" style={{alignItems:"start"}}>
              <AuthForm/>
            </div>
          {/* </div> */}
          {/* <h1>Auth Page</h1>
          <SignupForm/>
          <SigninForm/> 
          <SignoutForm/>
          <GoogleSigninForm/>  */}
        </div>
    )
}

export default Auth