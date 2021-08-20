import React from "react";
import "../JoinedTable/JoinedTable.scss";


export default function FeedbackFormTable({setOpenFeedbackForm}) {
  return (
    <div>
      <div class="container">
        <table class="table table--shaded">
        <thead class="table__head">
            <tr class="table__row">
             
              <td class="table__cell table__cell--no-wrap">
               Form  Name
              </td>
              <td class="table__cell table__cell--no-wrap">
                Month
              </td>
              <td class="table__cell table__cell--no-wrap">Form Date</td>
              <td class="table__cell table__cell--remaino-wrapnder">
                Received On
              </td>
              <td class="table__cell table__cell--no-wrap">Action</td>
            </tr>
          </thead>
          
          <tbody class="table__body">

            {[...Array(10)].map((elementInArray, index) => {
                return (
                    <>
                     <tr className="spacer"></tr>
            <tr class="table__row">
            
         
              <td class="UserTable__name table__cell table__cell--no-wrap">
                Training Feedback Form
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                July
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                1 Aug, 2021
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              1 Aug, 2021
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap"
              style={{color:"#2186F2",cursor:"pointer"}}
              onClick={()=>setOpenFeedbackForm(true)}
              >
               Fill the form
              </td>
            </tr>
          </>
                )
            } 
)}
   

           







  

          
          </tbody>
        </table>

        <div className="table-footer">
                <div className="footer-left">
                    Showing 10 from 100 data
                </div>
                <div className="footer-right">  

                    <button className="btn btn-w btn-inactive">{`<< Previous`}</button>
                    
                    <button  className="btn btn-inactive pages">1</button>
                    <button  className="btn  btn-inactive pages">2</button>
                 
                    
                    <button className="btn btn-w btn-inactive">{`Next >>`}</button>
                </div>
            </div>
      </div>
    </div>
  );
}
