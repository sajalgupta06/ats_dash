import React, {useState} from 'react'
import './UserAuto.scss'
import{  DownArrIcon } from '../../../../asserts/icons'

export default function UsageAuto() {
    const [email , setEmail] = useState("Daily")
    return (
        <div>
            <form>
                <div className = "auto_contain_h2">
                  <h2>Set Regularity</h2>
                  <div className = "custom_input_box1_h2" onClick = {()=>{
                        const batchArrow = document.querySelector(".custom_arrow_subject1_h2");
                        batchArrow.classList.toggle("custom_rotate1_h2");
                        const dropdown = document.querySelector(".custom_arrow_action1_h2");
                        dropdown.classList.toggle("custom_visible_subject1_h2");
                      }}> 
                          <div style={{paddingLeft:"2rem",paddingTop:"2rem",fontSize : "18px"}}>{email}</div>
                      <div style={{marginTop:"0.5rem",marginRight:"1rem"}}>
                      <span className="custom_list1_h2">
                          <>
                     
                            <ul className="custom_arrow_action1_h2">
                              <div className="custom_arrow_square1_h2">&nbsp;</div>
                          <option value={email} onClick={()=>setEmail("Daily ")}>Daily </option>
                          <option value={email} onClick={()=>setEmail("Weekly")}>Weekly </option>
                          <option value={email} onClick={()=>setEmail("Monthly")}>Monthly </option>
                         
                            </ul>
                          </>
                        </span>
              <DownArrIcon className="custom_arrow_subject1_h2"  />
                    </div>
                    </div>
                </div>
                   <div className = "custom_add_email_h2">
                   <h2>Select Email to get Reports: </h2>
                   </div>
                   <div>
                   <button className = "btn-add_email_h2"> + Add New</button>
                   </div>
                   <div>
                        <button className = "btn-generate_email_h2">Save</button>
                      </div>
                </form>
                </div>
            )
        }
        
         
     

