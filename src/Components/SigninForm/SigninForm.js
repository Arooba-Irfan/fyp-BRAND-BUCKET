import React, {useState} from 'react'
import { connect } from 'react-redux';
import {signin} from "../../Redux/auth/authAction";
import TextField from '@material-ui/core/TextField';
import "./SigninForm.css"
import Button from '../Button/Button';

const SigninForm = ({signin}) => {
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");

    var handleFormSubmit = (e) => {
        e.preventDefault()
        var cred = {
            email,password
        }
        signin(cred)
    }
    return (

            <form className="sign-in-form" onSubmit={handleFormSubmit}>
                <TextField id="standard-basic"  style={{width:"100%"}} label="Email" value={email}
                 onChange={(e)=>setEmail(e.target.value)}                
                />
                <TextField id="standard-basic" style={{width:"100%"}} label="Password" value={password}
                 onChange={(e)=>setPassword(e.target.value)} 
                />
                <Button type="submit" background="rgba(0,0,0,0.7)" color="white" style={{width:"60%", marginTop:"2em"}}>SIGN IN</Button>
                {/* <input value = {email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email"/>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password"/>
                <button type = "submit">Submit</button> */}
            </form>
            
    )
}
var actions = {
    signin
}

export default connect(null,actions)(SigninForm);
