import React from "react";
import JobCandidatePost from "../JobCandidatePost/JobCandidatePost";
import "./JobCandidate.scss";

const JobCandidate = ({ nmt, type, job }) => {
  let totlCan = job.applicants.length;
  let totlUr = 0;
  let totlSub = 0;
  let totlJoi = 0;
  let totlRej = 0;
  let totlDro = 0;
  let options = [
    "underReview",
    "underReview1",
    "underReview2",
    "underReview3",
    "underReview4",
    "underReview5",
    "underReview6",
  ];

  job.applicants.map((applicant) => {
    if (applicant.stage === "submitted") {
      totlSub++;
    } else if (applicant.stage === "joined") {
      totlJoi++;
    } else if (applicant.stage === "dropped") {
      totlDro++;
    } else if (applicant.stage === "rejected") {
      totlRej++;
    } else if (options.includes(applicant.stage)) {
      totlUr++;
    }
  });

  return (
    <div className="cad-container">
      {/* cad heading */}
      <div className={`cad-heading ${!nmt && "mt"}`}>
        <div className="cad-count">
          {type==="ReqCandidates"?"Candidates":type}
          :{type==="ReqCandidates" && totlCan}
          {type === "Total Submitted" && totlSub}
          {type === "Under Review Applicants" && totlUr}
          {type === " Total Submitted" && totlSub}
          {type === "Candidates" && totlCan}
          {type === "Total Onboarded" && totlJoi}
          {type === "Rejected" && totlRej}
          {type === "Dropped" && totlDro}
        </div>
        <div className="cad-search-box">
          <input type="text" placeholder="Search something here" />
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M15.7545 24.4962C8.99147 24.4962 3.50891 19.0137 3.50891 12.2506C3.50891 5.48756 8.99141 0.00512695 15.7545 0.00512695C22.5175 0.00512695 28 5.48762 28 12.2507C28 19.0138 22.5175 24.4962 15.7545 24.4962ZM15.7545 3.50388C10.9237 3.50388 7.00766 7.41993 7.00766 12.2507C7.00766 17.0814 10.9237 20.9975 15.7545 20.9975C20.5852 20.9975 24.5013 17.0814 24.5013 12.2507C24.5013 7.41993 20.5852 3.50388 15.7545 3.50388Z"
                fill="#BFBFBF"
              />
              <path
                d="M1.75951 27.9949C1.29451 27.9976 0.847591 27.815 0.517469 27.4876C-0.168521 26.8072 -0.173043 25.6996 0.50734 25.0136C0.510716 25.0102 0.514093 25.0069 0.517469 25.0035L7.09506 18.4259C7.80517 17.7399 8.93693 17.7595 9.62292 18.4696C10.3089 19.1797 10.2893 20.3115 9.57921 20.9975L3.00155 27.4876C2.67143 27.815 2.22452 27.9976 1.75951 27.9949Z"
                fill="#BFBFBF"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      {/* end cad heading */}

      {/* start of  cad boxes */}
      {type === "Candidates" && (
        <div className="job-cad-container">
          {job.applicants.map((applicant) => {
            if (applicant.length > 0)
              return <JobCandidatePost job={job} applicant={applicant} />;
          })}
        </div>
      )}

      {type === "ReqCandidates" && (
        <div className="job-cad-container">
          {job.applicants.map((applicant) => {
            console.log("hello");
            if (applicant.candidates.length > 0)
              return (
                <JobCandidatePost job={job} applicant={applicant.candidates} />
              );
          })}
        </div>
      )}

      {type === "Under Review Applicants" && (
        <div className="job-cad-container">
          {console.log("review")}

          {job.applicants.map((applicant) => {
            if (
              applicant.candidates.length > 0 &&
              options.includes(applicant.stage)
            )
              return (
                <JobCandidatePost job={job} applicant={applicant.candidates} />
              );
          })}
        </div>
      )}

      {type === "Total Submitted" && (
        <div className="job-cad-container">
          {job.applicants.map((applicant) => {
            if (
              applicant.candidates.length > 0 &&
              applicant.stage === "submitted"
            )
              return (
                <JobCandidatePost job={job} applicant={applicant.candidates} />
              );
          })}
        </div>
      )}

      {type === "Total Onboarded" && (
        <div className="job-cad-container">
          {job.applicants.map((applicant) => {
            if (applicant.candidates.length > 0 && applicant.stage === "joined")
              return (
                <JobCandidatePost job={job} applicant={applicant.candidates} />
              );
          })}
        </div>
      )}

      {type === "Rejected" && (
        <div className="job-cad-container">
          {job.applicants.map((applicant) => {
            console.log("HI");
            if (
              applicant.candidates.length > 0 &&
              applicant.stage === "rejected"
            )
              return (
                <JobCandidatePost job={job} applicant={applicant.candidates} />
              );
          })}
        </div>
      )}

      {type === "Dropped" && (
        <div className="job-cad-container">
          {job.applicants.map((applicant) => {
            if (
              applicant.candidates.length > 0 &&
              applicant.stage === "dropped"
            )
              return (
                <JobCandidatePost job={job} applicant={applicant.candidates} />
              );
          })}
        </div>
      )}
      {/* end of  cad boxes */}
    </div>
  );
};

export default JobCandidate;
