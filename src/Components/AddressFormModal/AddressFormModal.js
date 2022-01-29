import React, {useState}from 'react'
import ModalContainer from "../ModalContainer/ModalContainer"
import "./AddressFormModal.css"
import TextField from '@material-ui/core/TextField';
import Button from '../Button/Button';

const AddressFormModal = () => {
    var[address,setAddress]=useState("")
    var[name,setName]=useState("")
    var[contact,setContact]=useState("")
    var[email,setEmail]=useState("")

    return (
        <ModalContainer>
            <form className="address-form-modal center">
                <div className="address-form-fields">
                    <TextField id="standard-basic"  style={{width:"100%"}} label="Name" value={name}
                    onChange={(e)=>setName(e.target.value)}                
                    />
                    <TextField id="standard-basic"  style={{width:"100%"}} label="Address" value={address}
                    onChange={(e)=>setAddress(e.target.value)}                
                    />
                </div>
                <div className="address-form-fields">
                    <TextField id="standard-basic"  style={{width:"100%"}} label="Email" value={email}
                    onChange={(e)=>setEmail(e.target.value)}                
                    />
                    <TextField id="standard-basic"  style={{width:"100%"}} label="Contact" value={contact}
                    onChange={(e)=>setContact(e.target.value)}                
                    />
                </div>
                <Button style={{marginTop:"2em"}}>Procees & Pay</Button>
            </form>
        </ModalContainer>
    )
}

export default AddressFormModal
