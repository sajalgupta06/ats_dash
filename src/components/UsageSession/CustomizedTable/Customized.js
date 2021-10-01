import React from 'react'
import Backarrow from "../../../asserts/icons/downloadArrow.png";
import { AiOutlineDownload } from 'react-icons/ai'

import '../TotalEmail/TotalEmail.scss'
import './Customized.scss'

import Generate from '../../Table/ReportUsage/Generate';

export default function Customized() {
    return (
        <div className = "Duplicate_box_custom">
     
           <img src={Backarrow} alt="backarrow icon" />
        
   
        <div className = "Jobposting_head_Det">Customized Reports (30)</div>
        <div className = "Excel_contain_Det">
   
   <div className = "Report_Icondow">
       <AiOutlineDownload/>
   </div>
   
   <div className = "Report_files">
       Excel File
   </div>
  </div>
  <Generate/>
       </div>
    )
}

