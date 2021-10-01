import React from 'react'
import '../../Table/JoinedTable/JoinedTable.scss'


export default function Whatsupsent() {
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
         Message Head
       </td>
       
       <td class="UserTable__name table__cell table__cell--no-wrap">
         Delivered
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
         Failed
       </td>
       
       <td class="UserTable__name table__cell table__cell--no-wrap">
         Seen
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       Undelivered
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       Unopened
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Total Replies
       </td>
      
     </tr>
   


     <tr className="spacer"></tr>
     <tr class="table__row">
       <td class="table__cell table__cell--checkbox table__cell--no-wrap">
        Happy Diwali
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       15
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" >
       8
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       8
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        13
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       16
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      7
       </td>
      

     </tr>
   




   
   
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
    )
}
