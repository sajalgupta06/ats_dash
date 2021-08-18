import React, { useState } from "react";
import "./ChatPopup.scss";
import Cross from "./../../asserts/icons/close.svg";
import groupIcon from '../../asserts/icons/group-icon.png'
const ChatPopup = ({
  setChatPopupOpen,
  
  jobSuccess,
  addNewJob,
}) => {


    const [nextClicked,setNextClicked ] = useState(false)
  return (
    <div className='chat-popup-container'>
        {nextClicked===false &&(
 <div className='chat-popup'>
 <div className='chat-popup-top'>
   <div className='chat-popup-title' >Create Group</div>
   <img
     onClick={() => {
       setChatPopupOpen(false);
     }}
     src={Cross}
     alt='close icon'
   />
 </div>
 {jobSuccess ? (
   <div className='job-success'>Job Added Successfully!</div>
 ) : (
   <>
     <div className='chat-popup-body'>
     <div className="input-container">
       <label>Please add group members</label>
       <div className="input-box">
         <input type="email" />
       </div>
     </div>
 

     
       <div className='chat-popup-bottom'>
           <div></div>
    <div>
     <div
       className="btn btn-w btn-cancel btn-active"
       style={{ minWidth: "0rem", display: "inline-block" }}
       onClick={() => {
         setChatPopupOpen(false);
       }} 
     >
       Cancel
     </div>

     <div
       className="btn btn-w btn-next btn-active"
       style={{ minWidth: "0rem", display: "inline-block" }}
       onClick={() => {
         setNextClicked(true);
       }}
     >
       Next
     </div>
       </div>
     </div>
     </div>
   </>
 )}
</div>

        )}




{nextClicked && (
     <div className='chat-popup'>
     <div className='chat-popup-top'>
       <div className='chat-popup-title' >Create Group</div>
       <img
         onClick={() => {
           setChatPopupOpen(false);
         }}
         src={Cross}
         alt='close icon'
       />
     </div>
     {jobSuccess ? (
       <div className='job-success'>Job Added Successfully!</div>
     ) : (
       <>
         <div className='chat-popup-body'>
         <div>
                <label htmlFor='company'>Please Name Your Group</label>
                <img src={groupIcon} height="50px"></img>
                <input
                //   onChange={handleEventChange}
                //   value={jobPostDetails.company}
                  name='group'
                  id='group'
                  type='text'
                />
              </div>
     
    
         
           <div className='chat-popup-bottom'>
               <div></div>
        <div>
         <div
           className="btn btn-w btn-cancel btn-active"
           style={{ minWidth: "0rem", display: "inline-block" }}
           onClick={() => {
             setChatPopupOpen(false);
           }} 
         >
           Cancel
         </div>
    
         <div
           className="btn btn-w btn-next btn-active"
           style={{ minWidth: "0rem", display: "inline-block" }}
           onClick={() => {
             setNextClicked(true);
           }}
         >
           Next
         </div>
           </div>
         </div>
         </div>
       </>
     )}
   </div>
 
)}
     
    </div>
  );
};

export default ChatPopup;
