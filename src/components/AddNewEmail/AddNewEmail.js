import React from 'react'
import './AddNewEmail.scss'
import { AiOutlineCloseCircle } from 'react-icons/ai'
export default function AddNewEmail({ setAddEmail }) {

    return (
        <div className = "popup_container">
        <div className = "contain_email_box">
            <div className = "contain_email_box1">
               <h3> Add New Email ID</h3>
            </div>
            <div className = "Popup_email">
            Enter Email ID
            <input type = "text"/>
        </div>
       
             <div className = "popup_cancel"  onClick={() => setAddEmail(false)}>
                <h3 > Cancel</h3>
             </div>
             <div className = "popup_Add">
             <h3> Add </h3>
           
            </div>
           <AiOutlineCloseCircle className = "popup_close"/>
           </div>
        </div>
    )
}
