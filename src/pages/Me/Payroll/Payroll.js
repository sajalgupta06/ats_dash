import React, { useState } from 'react'
import'./Payroll.scss'
import PaySlips from './PaySlips/PaySlips'
import ReceivedAmount from './ReceivedAmount/ReceivedAmount'
import Reimbursements from './Reimbursements/Reimbursements'

export default function Payroll() {
    const [navClicked, setNavClicked ] = useState('PaySlips')

    return (
        <div>
            
            <div className="navOptions">
            <div  className={`option ${
            navClicked === "PaySlips" ? "option-active" : ""
          }`}
          onClick={() => setNavClicked("PaySlips")}

          >
                <h3>Pay Slips</h3>
            </div>
            <div  className={`option ${
            navClicked === "ReceivedAmount" ? "option-active" : ""
          }`}
          onClick={() => setNavClicked("ReceivedAmount")}

          >
                <h3>Received Amount</h3>
            </div>
          


            <div  className={`option ${
            navClicked === "Reimbursements" ? "option-active" : ""
          }`}
          onClick={() => setNavClicked("Reimbursements")}

          >
                <h3>Reimbursements</h3>
            </div>
            
           </div>



           {navClicked==="PaySlips"&&(
           
           <PaySlips></PaySlips>
           )


}
{navClicked==="ReceivedAmount"&&(
<ReceivedAmount></ReceivedAmount>
)

}
{navClicked==="Reimbursements"&&(

<Reimbursements></Reimbursements>
)

}



        </div>
    )
}
