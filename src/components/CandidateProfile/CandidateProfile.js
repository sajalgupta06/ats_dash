import React from "react";
import "./CandidateProfile.scss";

const CandidateProfile = ({ setCandidateDetail }) => {
  return (
    <div>
      <div onClick={() => setCandidateDetail(false)} class='createjob-back'>
        ←
      </div>
    </div>
  );
};

export default CandidateProfile;
