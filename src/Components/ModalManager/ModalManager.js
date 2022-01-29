import React from 'react'
import { connect } from 'react-redux'
import AddressFormModal from '../AddressFormModal/AddressFormModal'
import ErrorModal from '../ErrorModal/ErrorModal'
import TestModal from '../TestModal/TestModal'

var modalLookup={
    testModal:TestModal,
    errorModal:ErrorModal,
    addressFormModal:AddressFormModal
}

const ModalManager = ({modal}) => {
    var renderedModal = null
    if(modal){
        var {modalType,modalProps}=modal;
        var ModalComponent = modalLookup[modalType];
        renderedModal = <ModalComponent {...modalProps} />
    }
    return (
        <div>
            {renderedModal}
        </div>
    )
}

var mapState = (state) =>({
    modal:state.modal
})

export default connect(mapState)(ModalManager)
