import React from 'react'
import Backarrow from "../../../asserts/icons/downloadArrow.png";
import { AiOutlineDownload } from 'react-icons/ai'

import '../TotalEmail/TotalEmail.scss'
import './Duplicate.scss'

import DuplicatedSMS from './DuplicatedSMS';

export default function DuplicateSMS() {
    return (
        <div className = "Duplicate_box_sms">
        <div className = "backarrow_Det_sms">
           <img src={Backarrow} alt="backarrow icon" />
        
   </div>
        <div className = "Jobposting_head_Det_sms">Duplicate SMS Sent (30)</div>
        <div className = "Excel_contain_Det_sms">
   
   <div className = "Report_Icondow">
       <AiOutlineDownload/>
   </div>
   
   <div className = "Report_files">
       Excel File
   </div>
  </div>
  <DuplicatedSMS/>
       </div>
    )
}

