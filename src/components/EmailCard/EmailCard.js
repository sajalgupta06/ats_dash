import React from "react";
import "./EmailCard.scss";

const EmailCard = () => {
  return (
      <div className='email-box'>
        <h5>Ajit Balakrishnan</h5>
      <div className='email-box-top'>
        <div className='email-box-nt'>
          <div className='email-box-name'>New Candidate Profile</div>
          <div className='email-box-time'>5 minutes ago</div>
        </div>
      </div>
      <div className='email-box-info'>
        <p className='msg'>
          A warm welcome and lots of good wishes on becoming part of our growing
          team. Congratulations and on behalf of all the members. Lets all
          welcome
        </p>
        
      </div>
    </div>
  );
};

export default EmailCard;
