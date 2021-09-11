import React, {useState} from 'react'
import './UsageAuto.scss'
import{  DownArrIcon } from '../../../../asserts/icons'

export default function UsageAuto() {
    const [email , setEmail] = useState("Daily")
    return (
        <div>
            <form>
                <div className = "auto_contain_h1">
                  <h2>Set Regularity</h2>
                  <div className = "custom_input_box1_h1" onClick = {()=>{
                        const batchArrow = document.querySelector(".custom_arrow_subject1_h1");
                        batchArrow.classList.toggle("custom_rotate1_h1");
                        const dropdown = document.querySelector(".custom_arrow_action1_h1");
                        dropdown.classList.toggle("custom_visible_subject1_h1");
                      }}> 
                          <div style={{paddingLeft:"2rem",paddingTop:"2rem",fontSize : "18px"}}>{email}</div>
                      <div style={{marginTop:"0.5rem",marginRight:"1rem"}}>
                      <span className="custom_list1_h1">
                          <>
                     
                            <ul className="custom_arrow_action1_h1">
                              <div className="custom_arrow_square1_h1">&nbsp;</div>
                          <option value={email} onClick={()=>setEmail("Daily ")}>Daily </option>
                          <option value={email} onClick={()=>setEmail("Weekly")}>Weekly </option>
                          <option value={email} onClick={()=>setEmail("Monthly")}>Monthly </option>
                         
                            </ul>
                          </>
                        </span>
              <DownArrIcon className="custom_arrow_subject1_h1"  />
                    </div>
                    </div>
                </div>
                   <div className = "custom_add_email_h1">
                   <h2>Select Email to get Reports: </h2>
                   </div>
                   <div>
                   <button className = "btn-add_email_h1"> + Add New</button>
                   </div>
                   <div>
                        <button className = "btn-generate_email_h1">Save</button>
                      </div>
                </form>
                </div>
            )
        }
        
         
     

