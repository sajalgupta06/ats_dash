import React from 'react';
import Backarrow from "../../../asserts/icons/downloadArrow.png";
import { AiOutlineDownload } from 'react-icons/ai';

import '../TotalEmail/TotalEmail.scss';
import Wasenttable from './Wasenttable';

export default function Wasent() {
    return (
        <div className = "Duplicate_box1">
        <div className = "backarrow_Det">
           <img src={Backarrow} alt="backarrow icon" />
        
   </div>
        <div className = "Jobposting_head_Det">Duplicate Whatsapp Sent (30)</div>
       
  <Wasenttable/>
       </div>
    )
}

