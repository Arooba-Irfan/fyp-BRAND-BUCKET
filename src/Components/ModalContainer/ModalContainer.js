import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../../Redux/modal/modalAction'
import "./ModalContainer.css"

const ModalContainer = ({children,closeModal}) => {
    return (
        <div className="modal-container center" onClick={(e)=>{
            if(e.target===e.currentTarget) closeModal()
        }}>
            {children}
        </div>
    )
}
var actions={
    closeModal
}

export default connect(null,actions)(ModalContainer)
