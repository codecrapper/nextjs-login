import React, { useState } from 'react'

const ConfirmAlert = () => {
    const [ alertPopUp, setAlertPopUp ] = useState(true)
    // CHECK IF ACCOUNT HAS BEEN CONFIRMED/VERIFIED - TRUE OR FALSE (GET INFO LATER FROM API?)
    const confirmedReplaceMe = true

    const accountConfirmed = () => {
        if(confirmedReplaceMe) {
            if(alertPopUp) {
                return (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        Your account has been confirmed!
                        <button onClick={removeAlertClick} type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )
            }
            return null
        } else {
            if(alertPopUp) {
                return (
                    <div className="alert alert-primary alert-dismissible fade show" role="alert">
                        A confirmation link has been sent to youremail@yahoo.com
                        <button onClick={removeAlertClick} type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )
            }
            return null
        }
    }
    
    const removeAlertClick = () => {
        setAlertPopUp(false)
    }

    return (
        <div>
            {accountConfirmed()}
        </div>
    )
}

export default ConfirmAlert