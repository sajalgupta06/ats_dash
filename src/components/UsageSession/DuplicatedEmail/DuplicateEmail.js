import React from 'react'
import Backarrow from "../../../asserts/icons/downloadArrow.png";
import { AiOutlineDownload } from 'react-icons/ai'

import '../TotalEmail/TotalEmail.scss'
import EmialSent from './EmialSent';

export default function DuplicateEmail() {
    return (
        <div className = "Duplicate_box1">
        <div className = "backarrow_Det">
           <img src={Backarrow} alt="backarrow icon" />
        
   </div>
        <div className = "Jobposting_head_Det">Duplicate Email Sent (30)</div>
        <div className = "Excel_contain_Det">
   
   <div className = "Report_Icondow">
       <AiOutlineDownload/>
   </div>
   
   <div className = "Report_files">
       Excel File
   </div>
  </div>
  <EmialSent/>
       </div>
    )
}
