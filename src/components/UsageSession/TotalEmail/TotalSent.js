import React from 'react'
import Backarrow from "../../../asserts/icons/downloadArrow.png";
import { AiOutlineDownload } from 'react-icons/ai'
import TotalEmail from './TotalEmail';
import './TotalEmail.scss'

export default function TotalSent() {
    return (
        <div className = "Duplicate_box1">
        <div className = "backarrow_Det">
           <img src={Backarrow} alt="backarrow icon" />
        
   </div>
        <div className = "Jobposting_head_Det">Total Email Sent (30)</div>
        <div className = "Excel_contain_Det">
   
   <div className = "Report_Icondow">
       <AiOutlineDownload/>
   </div>
   
   <div className = "Report_files">
       Excel File
   </div>
  </div>
  <TotalEmail/>
       </div>
    )
}
