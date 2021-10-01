import React from 'react'
import './GenerateCustom.scss'
import Backarrow from "../../../asserts/icons/downloadArrow.png";
import { AiOutlineDownload } from 'react-icons/ai'

import GenerateReport from './GenerateReport';

export default function GenerateCustom() {
    return (
        <div className = "generate_box">
        
                <img src={Backarrow} className = "backarrow"alt="backarrow icon" />
               
              
             <div className = "Jobposting_head">Customized Reports (30)</div>
             <div className = "Custom_contain">
        
        <div className = "Report_Icondow">
            <AiOutlineDownload/>
        </div>
        
        <div className = "Report_files">
            Excel File
        </div>
        </div>
        <GenerateReport/>
        </div>
    )
}
