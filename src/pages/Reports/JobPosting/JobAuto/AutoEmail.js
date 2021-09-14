import React, {useState} from 'react'
import './AutoEmail.scss'
import{  DownArrIcon,
} from '../../../../asserts/icons'
import AddNewEmail from "../../../../components/AddNewEmail/AddNewEmail";
export default function AutoEmail() {
    const [email , setEmail] = useState("Daily")
    const [addEmail, setAddEmail] = useState(false);
    return (
        <div>
            <form>
        <div className = "auto_contain">
          <h2>Set Regularity</h2>
          <div className = "custom_input_box1" onClick = {()=>{
                const batchArrow = document.querySelector(".custom_arrow_subject1");
                batchArrow.classList.toggle("custom_rotate1");
                const dropdown = document.querySelector(".custom_arrow_action1");
                dropdown.classList.toggle("custom_visible_subject1");
              }}> 
                  <div style={{paddingLeft:"2rem",paddingTop:"2rem",fontSize : "18px"}}>{email}</div>
              <div style={{marginTop:"0.5rem",marginRight:"1rem"}}>
              <span className="custom_list1">
                  <>
             
                    <ul className="custom_arrow_action1">
                      <div className="custom_arrow_square1">&nbsp;</div>
                  <option value={email} onClick={()=>setEmail("Daily ")}>Daily </option>
                  <option value={email} onClick={()=>setEmail("Weekly")}>Weekly </option>
                  <option value={email} onClick={()=>setEmail("Monthly")}>Monthly </option>
                 
                    </ul>
                  </>
                </span>
      <DownArrIcon className= "custom_arrow_subject1"  />
            </div>
            </div>
        </div>
           <div className = "custom_add_email">
           <h2>Select Email to get Reports: </h2>
           </div>
          
           <div className="btn-add_email"
        onClick={()=>setAddEmail(true)}
        >+ Add Email</div>
           
           {setAddEmail&&(
          <AddNewEmail setAddEmail={setAddEmail}></AddNewEmail>
      )}
           <div>
                <div className = "btn-generate_email">Save</div>
              </div> 
     
        </form>
        </div>
     
  
    )
}
