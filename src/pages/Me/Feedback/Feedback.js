import React, { useState } from 'react'
import FeedbackForm from '../../../components/FeedbackForm/FeedbackForm'
import ResponseForm from '../../../components/ResponseForm/ResponseForm'
import FeedbackFormTable from '../../../components/Table/FeedbackForm/FeedbackForm'
import FeedbackResponseTable from '../../../components/Table/FeedbackResponse/FeedbackResponse'
import InterviewScheduled from '../../Submission/InterviewScheduled'
import './Feedback.scss'
export default function Feedback() {

    const [navClicked, setNavClicked ] = useState('FeedbackForm')
    const [openFeedbackForm, setOpenFeedbackForm ] = useState(false)
    const [openResponseForm, setOpenResponseForm ] = useState(false)

    return (
        <div>
            <div className="navOptions">
            <div  className={`option ${
            navClicked === "FeedbackForm" ? "option-active" : ""
          }`}
          onClick={() => setNavClicked("FeedbackForm")}

          >
                <h3>Feedback Form</h3>
            </div>
            <div  className={`option ${
            navClicked === "FeedbackResponse" ? "option-active" : ""
          }`}
          onClick={() => setNavClicked("FeedbackResponse")}

          >
                <h3>Feedback Response</h3>
            </div>
          
           </div>

          {navClicked==="FeedbackForm"&&(

       <FeedbackFormTable  setOpenFeedbackForm={setOpenFeedbackForm}></FeedbackFormTable>
          )
          
          }

{openFeedbackForm &&(
    <FeedbackForm  setOpenFeedbackForm={setOpenFeedbackForm}></FeedbackForm>
)}

{navClicked==="FeedbackResponse"&&(

    <FeedbackResponseTable setOpenResponseForm={setOpenResponseForm}></FeedbackResponseTable>
   )
   
   }


{openResponseForm &&(
    <ResponseForm  setOpenResponseForm={setOpenResponseForm}></ResponseForm>
    
)}
        </div>
    )
}
