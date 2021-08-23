import React from 'react'
import './RaiseTicket.scss'
import{  DownArrIcon,
} from '../../../../asserts/icons'
export default function RaiseTicket() {

    const handleBatch = () => {
        // window.location.reload(true)
        const dropdown = document.querySelector(".ticket-batch-action");
        const batchArrow = document.querySelector(".ticket-batch-arrow");
    
        dropdown.classList.toggle("ticket-batch-visible");
        batchArrow.classList.toggle("ticket-batch-rotate");
      };
    
    return (
        <div>
            
        <form>

            <div className="field">
        <h3>Requester</h3>
        <div className="input-box">
            <input type="email" placeholder="sajal@gmail.com"></input>
        </div>
            </div>

            <div className="field">
        {/* <div className="input-box-dropdown">
            <input type="email" placeholder="sajal@gmail.com"></input>
        </div> */}
        {/* <h3>Subject</h3>
          <div className="input-box-dropdown" onClick={handleBatch}>
              <div></div>
              <div>
              <div>
            
              </div>
                <span className="ticket-batch-action-rel">
                  <>
             
                    <ul className="ticket-batch-action">
                      <div className="ticket-batch-action-square">&nbsp;</div>
                      <option selected disabled hidden></option>
                  <option value='Active'>Active</option>
                  <option value='In Active'>In Active</option>
                  
                    </ul>
                  </>
                </span>
                
                <DownArrIcon className="ticket-batch-arrow" />
            </div>
            </div> */}
            
              
            </div>



        </form>

        
        </div>
    )
}
