import React from "react";
import "./SharePopUp.scss";
import Cross from "./../../asserts/icons/close.svg";

const SharePopUp = ({
  setSharePopUp,
  setJobSuccess,
  jobSuccess,
  addNewJob,
}) => {
  return (
    <div className='share-popup-container'>
      <div className='share-popup'>
        <div className='share-popup-top'>
          <div>Publish Job</div>
          <img
            onClick={() => {
              setSharePopUp(false);
              setJobSuccess(false);
            }}
            src={Cross}
            alt='close icon'
          />
        </div>
        {jobSuccess ? (
          <div className='job-success'>Job Added Successfully!</div>
        ) : (
          <>
            <div className='share-popup-body'>
              <div className='share-popup-headings'>
                <div className='p'>Platform</div>
                <div className='a'>Actions</div>
              </div>

              {/* line */}
              <div className='share-popup-line'>
                <div className='share-popup-line-left'>
                  <input type='checkbox' />
                  <svg
                    width='19'
                    height='20'
                    viewBox='0 0 19 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M16.1889 17.0412H13.3737V12.4004C13.3737 11.2937 13.3549 9.86911 11.9095 9.86911C10.4432 9.86911 10.2189 11.0749 10.2189 12.3198V17.0409H7.40377V7.49747H10.1063V8.80169H10.1441C10.4146 8.31489 10.8054 7.91443 11.275 7.64295C11.7446 7.37147 12.2753 7.23914 12.8107 7.26005C15.664 7.26005 16.1901 9.23567 16.1901 11.8058L16.1889 17.0412ZM4.2272 6.19302C3.32493 6.19317 2.59335 5.42333 2.5932 4.47356C2.59305 3.5238 3.32433 2.75372 4.22661 2.75356C5.12889 2.75333 5.86046 3.52317 5.86061 4.47294C5.86069 4.92903 5.68864 5.36648 5.38232 5.68906C5.076 6.01163 4.6605 6.19291 4.2272 6.19302ZM5.63484 17.0413H2.81668V7.49747H5.63476V17.0412L5.63484 17.0413ZM17.5924 0.00145562H1.40207C0.636871 -0.00760688 0.00935156 0.637627 0 1.4431V18.5566C0.00905469 19.3625 0.6365 20.0083 1.40199 19.9999H17.5924C18.3595 20.0099 18.9894 19.364 19 18.5566V1.44177C18.9891 0.634737 18.3591 -0.0104194 17.5924 0.000127492'
                      fill='#0A66C2'
                    />
                  </svg>
                  <div>LinkedIn</div>
                </div>
                <div className='share-popup-line-right'>
                  <div>Auto Sharing</div>
                </div>
              </div>
              {/* line */}

              {/* line */}
              <div className='share-popup-line'>
                <div className='share-popup-line-left'>
                  <input type='checkbox' />
                  <svg
                    width='19'
                    height='20'
                    viewBox='0 0 19 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M16.1889 17.0412H13.3737V12.4004C13.3737 11.2937 13.3549 9.86911 11.9095 9.86911C10.4432 9.86911 10.2189 11.0749 10.2189 12.3198V17.0409H7.40377V7.49747H10.1063V8.80169H10.1441C10.4146 8.31489 10.8054 7.91443 11.275 7.64295C11.7446 7.37147 12.2753 7.23914 12.8107 7.26005C15.664 7.26005 16.1901 9.23567 16.1901 11.8058L16.1889 17.0412ZM4.2272 6.19302C3.32493 6.19317 2.59335 5.42333 2.5932 4.47356C2.59305 3.5238 3.32433 2.75372 4.22661 2.75356C5.12889 2.75333 5.86046 3.52317 5.86061 4.47294C5.86069 4.92903 5.68864 5.36648 5.38232 5.68906C5.076 6.01163 4.6605 6.19291 4.2272 6.19302ZM5.63484 17.0413H2.81668V7.49747H5.63476V17.0412L5.63484 17.0413ZM17.5924 0.00145562H1.40207C0.636871 -0.00760688 0.00935156 0.637627 0 1.4431V18.5566C0.00905469 19.3625 0.6365 20.0083 1.40199 19.9999H17.5924C18.3595 20.0099 18.9894 19.364 19 18.5566V1.44177C18.9891 0.634737 18.3591 -0.0104194 17.5924 0.000127492'
                      fill='#0A66C2'
                    />
                  </svg>
                  <div>LinkedIn</div>
                </div>
                <div className='share-popup-line-right'>
                  <div>Auto Sharing</div>
                </div>
              </div>
              {/* line */}

              <div className='share-popup-btns'>
                <div onClick={addNewJob} className='btn btn-skip'>
                  Skip
                </div>
                <div onClick={addNewJob} className='btn btn-publish'>
                  Publish
                </div>
              </div>

              <div className='share-popup-bottom'>
                <svg
                  width='17'
                  height='17'
                  viewBox='0 0 17 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8.5 0C3.80591 0 0 3.80728 0 8.5C0 13.1955 3.80591 17 8.5 17C13.1941 17 17 13.1955 17 8.5C17 3.80728 13.1941 0 8.5 0ZM8.5 3.77016C9.29502 3.77016 9.93952 4.41465 9.93952 5.20968C9.93952 6.0047 9.29502 6.64919 8.5 6.64919C7.70498 6.64919 7.06048 6.0047 7.06048 5.20968C7.06048 4.41465 7.70498 3.77016 8.5 3.77016ZM10.4194 12.4758C10.4194 12.7029 10.2352 12.8871 10.0081 12.8871H6.99194C6.7648 12.8871 6.58065 12.7029 6.58065 12.4758V11.6532C6.58065 11.4261 6.7648 11.2419 6.99194 11.2419H7.40323V9.04839H6.99194C6.7648 9.04839 6.58065 8.86423 6.58065 8.6371V7.81452C6.58065 7.58738 6.7648 7.40323 6.99194 7.40323H9.18548C9.41262 7.40323 9.59677 7.58738 9.59677 7.81452V11.2419H10.0081C10.2352 11.2419 10.4194 11.4261 10.4194 11.6532V12.4758Z'
                    fill='black'
                  />
                </svg>

                <div>
                  To turn on Auto Sharing, Please click on the toggle button.
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SharePopUp;
