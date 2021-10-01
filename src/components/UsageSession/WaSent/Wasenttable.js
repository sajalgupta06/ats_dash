import React from 'react'
import '../../Table/JoinedTable/JoinedTable.scss'


export default function Wasenttable() {
    return (
        <div>
             <div class="container">
        <table class="table table--shaded">
          <thead class="table__head">
            
          </thead>
          <tbody class="table__body">


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
