import React from 'react'
import './AddNewEmail.scss'
import { AiOutlineCloseCircle } from 'react-icons/ai'
export default function AddNewEmail({setAddEmail}) {

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
       
             <div  className="popup_cancel btn-cancel btn-active"
        
                  onClick={() => setAddEmail(false)} > cancel
               
             </div>
             <div className = "popup_Add">
                 <div className = "btn_popup_add"> Add </div>
            </div>
            <div className = "popup_close">
           <AiOutlineCloseCircle /></div>
           </div>
        </div>
    )
}
