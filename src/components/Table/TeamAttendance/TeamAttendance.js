import React, { useState } from "react";
import "../JoinedTable/JoinedTable.scss";

export default function TeamAttendanceTable() {

  const data=[];
  const [checkBox,setCheckBox] = useState(false)
  const [showSlip,setShowSlip] = useState(false)


const dummyData = [{
  name:"Abhishek",
  id:"#JC-00180",
  status:"Online",
  arrivalTime:"10:00 AM",
  activeTime:"1hr 17min",
  timeAtWork:"1hr 27min",
  productiveTime:"1hr 10min",
},
{
    name:"Abhishek",
    id:"#JC-00180",
    status:"Online",
    arrivalTime:"10:00 AM",
    activeTime:"1hr 17min",
    timeAtWork:"1hr 27min",
    productiveTime:"1hr 10min",
  },

  {
    name:"Abhishek",
    id:"#JC-00180",
    status:"Online",
    arrivalTime:"10:00 AM",
    activeTime:"1hr 17min",
    timeAtWork:"1hr 27min",
    productiveTime:"1hr 10min",
  },


  {
    name:"Abhishek",
    id:"#JC-00180",
    status:"Online",
    arrivalTime:"10:00 AM",
    activeTime:"1hr 17min",
    timeAtWork:"1hr 27min",
    productiveTime:"1hr 10min",
  },



  {
    name:"Abhishek",
    id:"#JC-00180",
    status:"Online",
    arrivalTime:"10:00 AM",
    activeTime:"1hr 17min",
    timeAtWork:"1hr 27min",
    productiveTime:"1hr 10min",
  },

  {
    name:"Abhishek",
    id:"#JC-00180",
    status:"Online",
    arrivalTime:"10:00 AM",
    activeTime:"1hr 17min",
    timeAtWork:"1hr 27min",
    productiveTime:"1hr 10min",
  },

  {
    name:"Abhishek",
    id:"#JC-00180",
    status:"Online",
    arrivalTime:"10:00 AM",
    activeTime:"1hr 17min",
    timeAtWork:"1hr 27min",
    productiveTime:"1hr 10min",
  },
  {
    name:"Abhishek",
    id:"#JC-00180",
    status:"Online",
    arrivalTime:"10:00 AM",
    activeTime:"1hr 17min",
    timeAtWork:"1hr 27min",
    productiveTime:"1hr 10min",
  },
    


]




  return (
    <div>
      <div class="container">
        <table class="table table--shaded">
          <thead class="table__head">
            <tr class="table__row">
              

              <td class="table__cell table__cell--no-wrap">
                Name
              </td>
              <td class="table__cell table__cell--no-wrap">
                ID
              </td>
              <td class="table__cell table__cell--no-wrap">Status</td>
              <td class="table__cell table__cell--no-wrap">Arrival Time</td>
              <td class="table__cell table__cell--remaino-wrapnder">
                Active Time
              </td>

              <td class="table__cell table__cell--remaino-wrapnder">
                Time at Work
              </td>
              <td class="table__cell table__cell--remaino-wrapnder">
                Productive Time
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
                {ele.name}
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                {ele.id}
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              {ele.status}
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              {ele.arrivalTime}
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              {ele.activeTime}
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              {ele.timeAtWork}
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              {ele.productiveTime}
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
