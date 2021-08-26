import React, { useState } from "react";
import "../JoinedTable/JoinedTable.scss";
import whatsapp2 from '../../../asserts/icons/logo-whatsapp2.png'
import message from '../../../asserts/icons/logo-message.png'
import gmail from '../../../asserts/icons/logo-gmail.png'
import PaySlip from "../../PaySlip/PaySlip";




export default function ReceivedAmountTable() {

  const data=[];
  const [checkBox,setCheckBox] = useState(false)
  const [showSlip,setShowSlip] = useState(false)


const dummyData = [{
  purpose:"Salary",
  month:"July",
  receivedOn:"1 Aug,2021 ",
  status:"Complete",
  Amount:"40,000"
},


{
    purpose:"Salary",
    month:"July",
    receivedOn:"1 Aug,2021 ",
    status:"Complete",
    Amount:"40,000"
  },

  


  {
    purpose:"Salary",
    month:"July",
    receivedOn:"1 Aug,2021 ",
    status:"Complete",
    Amount:"40,000"
  },

  
  {
    purpose:"Salary",
    month:"July",
    receivedOn:"1 Aug,2021 ",
    status:"Complete",
    Amount:"40,000"
  },

  
  {
    purpose:"Salary",
    month:"July",
    receivedOn:"1 Aug,2021 ",
    status:"Complete",
    Amount:"40,000"
  },

  
  {
    purpose:"Salary",
    month:"July",
    receivedOn:"1 Aug,2021 ",
    status:"Complete",
    Amount:"40,000"
  },

  
  {
    purpose:"Salary",
    month:"July",
    receivedOn:"1 Aug,2021 ",
    status:"Complete",
    Amount:"40,000"
  },

  
  {
    purpose:"Salary",
    month:"July",
    receivedOn:"1 Aug,2021 ",
    status:"Complete",
    Amount:"40,000"
  },

  
  {
    purpose:"Salary",
    month:"July",
    receivedOn:"1 Aug,2021 ",
    status:"Complete",
    Amount:"40,000"
  },
  



]




  return (
    <div>
      <div class="container">
        <table class="table table--shaded">
          <thead class="table__head">
            <tr class="table__row">
              

              <td class="table__cell table__cell--no-wrap">
                Purpose
              </td>
              <td class="table__cell table__cell--no-wrap">
                Month
              </td>
              <td class="table__cell table__cell--no-wrap">Received On</td>
              <td class="table__cell table__cell--no-wrap">Status</td>
              <td class="table__cell table__cell--remaino-wrapnder">
                Amount
              </td>
            </tr>
          </thead>
          
          <tbody class="table__body">


            {dummyData.map((ele, index) => {

               
                return ( 
                <>
          <tr className="spacer"></tr>
            <tr class="table__row" key={index} onClick={()=>setShowSlip(true)}>
             
              <td class="UserTable__name table__cell table__cell--no-wrap">
                {ele.purpose}
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                {ele.month}
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              {ele.receivedOn}
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              {ele.status}
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              {ele.Amount}
              </td>
           
            </tr>
            </>
                )})}
        
        {showSlip &&(
<PaySlip setShowSlip={setShowSlip}></PaySlip>        )}
          
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
