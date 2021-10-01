import React,{useState} from "react";
import CustomTable from "../../JobPosting/CustomTable";
import "../JoinedTable/JoinedTable.scss";


export default function Jobposting() {
  const [addEmail, setAddEmail] = useState(false);
  return (
    <div>
      <div class="container" >
        <table class="table table--shaded">
          <thead class="table__head">
            
          </thead>
          <tbody class="table__body">

            
            <tr className="spacer"></tr>
            <tr class="table__row"   >
              <td class="table__cell table__cell--no-wrap">
                User
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                New Job Posting
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                Job Posting Edited
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                Job Posting Deleted
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               Total Job Posting
              </td>
             
            </tr>
          


            <tr className="spacer"></tr>
            <tr class="table__row" onClick={()=>setAddEmail(true)}>
      
              <td class="table__cell table__cell--checkbox table__cell--no-wrap">
                abhishek@jobsterritory.in
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                30
              </td>
             
            </tr>
          



            <tr className="spacer"></tr>
            <tr class="table__row" onClick={()=>setAddEmail(true)}>
              <td class="table__cell table__cell--checkbox table__cell--no-wrap">
                abhishek@jobsterritory.in
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                30
              </td>
             
            </tr>

            <tr className="spacer"></tr>
            <tr class="table__row" onClick={()=>setAddEmail(true)}>
              <td class="table__cell table__cell--checkbox table__cell--no-wrap">
                abhishek@jobsterritory.in
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                30
              </td>
             
            </tr>

           
          






            <tr className="spacer"></tr>
            <tr class="table__row" onClick={()=>setAddEmail(true)}>
              <td class="table__cell table__cell--checkbox table__cell--no-wrap">
                abhishek@jobsterritory.in
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                30
              </td>
             
            </tr>
          



            <tr className="spacer"></tr>
            <tr class="table__row" onClick={()=>setAddEmail(true)}>
              <td class="table__cell table__cell--checkbox table__cell--no-wrap">
                abhishek@jobsterritory.in
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                30
              </td>
             
            </tr>
          



            <tr className="spacer"></tr>
            <tr class="table__row" onClick={()=>setAddEmail(true)}>
              <td class="table__cell table__cell--checkbox table__cell--no-wrap">
                abhishek@jobsterritory.in
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                30
              </td>
             
            </tr>


            <tr className="spacer"></tr>
            <tr class="table__row" onClick={()=>setAddEmail(true)}>
              <td class="table__cell table__cell--checkbox table__cell--no-wrap">
                abhishek@jobsterritory.in
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                30
              </td>
             
            </tr>
          




            <tr className="spacer"></tr>
            <tr class="table__row" onClick={()=>setAddEmail(true)}>
              <td class="table__cell table__cell--checkbox table__cell--no-wrap">
                abhishek@jobsterritory.in
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               10
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                30
              </td>
             
            </tr>
           
               
            {addEmail&&(
          <CustomTable setAddEmail={setAddEmail}></CustomTable>
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
