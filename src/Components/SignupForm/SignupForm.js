import React, {useState} from 'react'
import { connect } from 'react-redux';
import { signup } from "../../Redux/auth/authAction";
import TextField from '@material-ui/core/TextField';
import "./SignupForm.css"
import Button from '../Button/Button';

const SignupForm = ({signup}) => {
    var [fullName, setFullName] = useState("");
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");

    var handleFormSubmit = (e) => {
        e.preventDefault()
        var cred = {
            fullName,email,password
        }
        signup(cred)

    }
    return (
        <div>
            <form className="sign-up-form" onSubmit={handleFormSubmit}>
                <TextField id="standard-basic" style={{width:"100%"}} label="Full-Name" value={fullName}
                    onChange={(e)=>setFullName(e.target.value)} 
                />
                <TextField id="standard-basic"  style={{width:"100%"}} label="Email" value={email}
                 onChange={(e)=>setEmail(e.target.value)}                
                />
                <TextField id="standard-basic" style={{width:"100%"}} label="Password" value={password}
                 onChange={(e)=>setPassword(e.target.value)} 
                />
                <Button type="submit" background="rgba(0,0,0,0.7)" color="white" style={{width:"60%", marginTop:"2em"}}>SIGN UP</Button>
                {/* <input value = {email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email"/>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password"/>
                <button type = "submit">Submit</button> */}
            </form>
            {/* <form onSubmit={handleFormSubmit}>
                <input value = {fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="full name"/>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email"/>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password"/>
                <button type = "submit">Submit</button>
            </form> */}
            
        </div>
    )
}

var actions = {
    signup
}
export default connect(null,actions)(SignupForm)
