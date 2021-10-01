import React from 'react';
import Backarrow from "../../../asserts/icons/downloadArrow.png";
import { AiOutlineDownload } from 'react-icons/ai';

import '../TotalEmail/TotalEmail.scss';


import Whatsupsent from './Whatsupsent';

export default function Whatsup() {
    return (
        <div className = "Duplicate_box1">
        <div className = "backarrow_Det">
           <img src={Backarrow} alt="backarrow icon" />
        
   </div>
        <div className = "Jobposting_head_Det">Whatsapp Sent (30)</div>
      
  <Whatsupsent/>
       </div>
    )
}

