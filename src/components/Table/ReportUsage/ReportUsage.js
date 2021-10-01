import React, {useState} from "react";

import "../JoinedTable/JoinedTable.scss";

import DuplicateCand from "../../UsageSession/DuplicateCand/DuplicateCand";
import TotalSent from "../../UsageSession/TotalEmail/TotalSent";
import DuplicateEmail from "../../UsageSession/DuplicatedEmail/DuplicateEmail";
import Sent from "../../UsageSession/SMSSent/Sent";

import DuplicateSMS from "../../UsageSession/DuplicatedSMS/DuplicateSMS";
import CVviewtable from "../../UsageSession/CVviews/CVviewtable";
import CvTagged from "../../UsageSession/CVTagged/CvTagged";
import Invite from "../../UsageSession/Invite/Invite";
import Whatsup from "../../UsageSession/WhatsupSent/Whatsup";
import Wasent from "../../UsageSession/WaSent/Wasent";

export default function ReportUsage() {
  const [addDetect, setAddDetect] = useState(false);
   const [emailDetect, setEmailDetect] = useState(false);
   const [emailSent, setEmailSent] = useState(false);
   const [smsSent, setSmsSent] = useState(false);
   const [duplicateSms, setDuplicateSms] = useState(false);
   const [cvViews, setCvViews] = useState(false);
   const [cvTaggged, setCvTagged] = useState(false);
   const [inviteApply, setInviteApply] = useState(false);
   const [whatsupSent, setWhatsupSent] = useState(false);
   const [waSent, setWaSent] = useState(false);


  return (
    <div>
      <div class="container">
        <table class="table table--shaded">
          <thead class="table__head">
            
          </thead>
          <tbody class="table__body">

            
            <tr className="spacer"></tr>
           
       <tr class="table__row">
       <td class="table__cell table__cell--no-wrap" >
         User
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
         Total <br/>Search
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setAddDetect(true)}>
         Duplicate<br/> Candidate <br/>Detected
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setEmailDetect(true)}>
         Total Email <br/> Sent
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setEmailSent(true)}>
         Duplicated <br/>Email Sent
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setSmsSent(true)}>
         SMS<br/> Sent
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setDuplicateSms(true)}>
         Duplicate <br/> SMS Sent
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setWhatsupSent(true)}>
        Whatsup <br/> Sent
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setWaSent(true)}>
       Duplicated<br/> WA Sent
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setCvViews(true)}>
         CV<br/>Views
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setCvTagged(true)}>
         CV <br/>Tagged
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setInviteApply(true)}>
         Invite to <br/>Apply
       </td>
     </tr>
   


     <tr className="spacer"></tr>
     <tr class="table__row">
       <td class="table__cell table__cell--checkbox table__cell--no-wrap">
         abhishek@jobsterritory.in
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setAddDetect(true)}>
         15
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailDetect(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setSmsSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setDuplicateSms(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setWhatsupSent(true)}>
       6
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setWaSent(true)}>
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setCvViews(true)}>
       20
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setCvTagged(true)}>
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setInviteApply(true)}>
        10
       </td>

     </tr>
   



     <tr className="spacer"></tr>
     <tr class="table__row">
       <td class="table__cell table__cell--checkbox table__cell--no-wrap">
         abhishek@jobsterritory.in
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setAddDetect(true)}>
         15
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailDetect(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setSmsSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setDuplicateSms(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setWhatsupSent(true)}>
       6
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setCvViews(true)}>
       20
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setCvTagged(true)}>
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setInviteApply(true)}>
        10
       </td>

     </tr>
   



     <tr className="spacer"></tr>
     <tr class="table__row">
       <td class="table__cell table__cell--checkbox table__cell--no-wrap">
         abhishek@jobsterritory.in
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setAddDetect(true)}>
         15
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailDetect(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setSmsSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setDuplicateSms(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setWhatsupSent(true)}>
       6
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setCvViews(true)}>
       20
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setCvTagged(true)}>
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setInviteApply(true)}>
        10
       </td>

     </tr>
   






     <tr className="spacer"></tr>
     <tr class="table__row">
       <td class="table__cell table__cell--checkbox table__cell--no-wrap">
         abhishek@jobsterritory.in
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setAddDetect(true)}>
         15
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailDetect(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setSmsSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setDuplicateSms(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setWhatsupSent(true)}>
       6
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setCvViews(true)}>
       20
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setCvTagged(true)}>
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setInviteApply(true)}>
        10
       </td>

     </tr>
   



     <tr className="spacer"></tr>
     <tr class="table__row">
       <td class="table__cell table__cell--checkbox table__cell--no-wrap">
         abhishek@jobsterritory.in
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setAddDetect(true)}>
         15
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailDetect(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setSmsSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setDuplicateSms(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setWhatsupSent(true)}>
       6
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setCvViews(true)}>
       20
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setCvTagged(true)}>
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setInviteApply(true)}>
        10
       </td>

     </tr>
   



     <tr className="spacer"></tr>
     <tr class="table__row">
       <td class="table__cell table__cell--checkbox table__cell--no-wrap">
         abhishek@jobsterritory.in
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setAddDetect(true)}>
         15
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailDetect(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setSmsSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setDuplicateSms(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setWhatsupSent(true)}>
       6
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setCvViews(true)}>
       20
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setCvTagged(true)}>
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setInviteApply(true)}>
        10
       </td>

     </tr>
   




     <tr className="spacer"></tr>
     <tr class="table__row">
       <td class="table__cell table__cell--checkbox table__cell--no-wrap">
         abhishek@jobsterritory.in
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setAddDetect(true)}>
         15
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailDetect(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setSmsSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setDuplicateSms(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setWhatsupSent(true)}>
       6
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setCvViews(true)}>
       20
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setCvTagged(true)}>
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setInviteApply(true)}>
        10
       </td>

     </tr>
   




     <tr className="spacer"></tr>
     <tr class="table__row">
       <td class="table__cell table__cell--checkbox table__cell--no-wrap">
         abhishek@jobsterritory.in
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setAddDetect(true)}>
         15
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailDetect(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setSmsSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setDuplicateSms(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setWhatsupSent(true)}>
       6
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setCvViews(true)}>
       20
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setCvTagged(true)}>
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setInviteApply(true)}>
        10
       </td>

     </tr>


     <tr className="spacer"></tr>
     <tr class="table__row">
       <td class="table__cell table__cell--checkbox table__cell--no-wrap">
         abhishek@jobsterritory.in
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setAddDetect(true)}>
         15
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailDetect(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setSmsSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setDuplicateSms(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setWhatsupSent(true)}>
       6
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setCvViews(true)}>
       20
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setCvTagged(true)}>
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setInviteApply(true)}>
        10
       </td>

     </tr>
   

     <tr className="spacer"></tr>
     <tr class="table__row">
       <td class="table__cell table__cell--checkbox table__cell--no-wrap">
         abhishek@jobsterritory.in
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setAddDetect(true)}>
         15
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailDetect(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setSmsSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setDuplicateSms(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setWhatsupSent(true)}>
       6
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setCvViews(true)}>
       20
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setCvTagged(true)}>
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setInviteApply(true)}>
        10
       </td>

     </tr>
   


     <tr className="spacer"></tr>
     <tr class="table__row">
       <td class="table__cell table__cell--checkbox table__cell--no-wrap">
         abhishek@jobsterritory.in
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setAddDetect(true)}>
         15
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailDetect(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setEmailSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setSmsSent(true)}>
         10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setDuplicateSms(true)}>
        25
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setWhatsupSent(true)}>
       6
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setCvViews(true)}>
       20
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick={()=>setCvTagged(true)}>
        10
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"  onClick={()=>setInviteApply(true)}>
        10
       </td>

     </tr>
   
   
     {addDetect&&(
          <DuplicateCand setAddDetect={setAddDetect}></DuplicateCand>
      )}
    {emailDetect&&(
           <TotalSent setAddDetect={setAddDetect}></TotalSent>
      )}
       {emailSent&&(
           <DuplicateEmail setEmailSent={setEmailSent}></DuplicateEmail>
      )}
        {smsSent&&(
           <Sent setSmsSent={setEmailSent}></Sent>
      )}

        {duplicateSms&&(
           <DuplicateSMS setDuplicateSms={setDuplicateSms}></DuplicateSMS>
      )}

{cvViews&&(
           <CVviewtable setCvViews={setCvViews}></CVviewtable>
      )}

{cvTaggged&&(
           <CvTagged setCvViews={setCvViews}></CvTagged>
      )}

{inviteApply&&(
           <Invite setInviteApply={setInviteApply}></Invite>
      )}

{whatsupSent&&(
           <Whatsup setWhatsupSent={setWhatsupSent}></Whatsup>
      )}

{waSent&&(
           <Wasent setWaSent={setWaSent}></Wasent>
      )}
   </tbody>

 </table>

 <div className="table-footer">
         <div className="footer-left">
             Showing 10 from 160 data
         </div>
         <div className="footer-right">  

             <button className="btn btn-w btn-inactive">{`<< Previous`}</button>
             
             <button className="btn  btn-inactive pages">1</button>
             <button className="btn  btn-inactive pages">2</button>
             <button  className="btn  btn-inactive pages">3</button>
          
             
             <button className="btn btn-w btn-inactive">{`Next >>`}</button>
         </div>


     </div>
</div>
</div>
  );
}
