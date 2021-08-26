import React, { useState } from "react";
import "./JoinedTable.scss";
import whatsapp2 from '../../../asserts/icons/logo-whatsapp2.png'
import message from '../../../asserts/icons/logo-message.png'
import gmail from '../../../asserts/icons/logo-gmail.png'



export default function JoinedTable() {

  const data=[];
  const [checkBox,setCheckBox] = useState(false)


const dummyData = [{
  name:"Sajal",
  contactNo:"9977859801",
  clientName:"adam Cookie",
  designation:"Employee",
  dateofJoining:"12-07-21"
},

{
  name:"Sajal",
  contactNo:"9977859801",
  clientName:"adam Cookie",
  designation:"Employee",
  dateofJoining:"12-07-21"
},


{
  name:"Sajal",
  contactNo:"9977859801",
  clientName:"adam Cookie",
  designation:"Employee",
  dateofJoining:"12-07-21"
},


{
  name:"Sajal",
  contactNo:"9977859801",
  clientName:"adam Cookie",
  designation:"Employee",
  dateofJoining:"12-07-21"
},


]

  return (
    <div>
      <div class="container">
        <table class="table table--shaded">
          <thead class="table__head">
            <tr class="table__row">
              <td class="table__cell table__cell--checkbox table__cell--no-wrap">
                <input type="checkbox" onClick={()=>setCheckBox(!checkBox)}  />
              </td>

              <td class="table__cell table__cell--no-wrap">
                Name
              </td>
              <td class="table__cell table__cell--no-wrap">
                Contact No.
              </td>
              <td class="table__cell table__cell--no-wrap">Client Name</td>
              <td class="table__cell table__cell--no-wrap">Designation</td>
              <td class="table__cell table__cell--remaino-wrapnder">
                Date of Joining
              </td>
              <td class="table__cell table__cell--no-wrap">Action</td>
            </tr>
          </thead>
          
          <tbody class="table__body">


            {dummyData.map((ele, index) => {

               
                return ( 
                <>
          <tr className="spacer"></tr>
            <tr class="table__row" key={index}>
              <td class="table__cell table__cell--checkbox table__cell--no-wrap">
                <input type="checkbox"  checked={checkBox} />
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                {ele.name}
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                {ele.contactNo}
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              {ele.clientName}
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              {ele.designation}
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              {ele.dateofJoining}
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                Adam Cooke
              </td>
            </tr>
            </>
                )})}
        
          
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
