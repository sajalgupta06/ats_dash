import React from "react";
import "./Dashboard.scss";
import design from "../../asserts/icons/dashboardCard.png";
import person from "../../asserts/icons/person.png";
import tick from "../../asserts/icons/dashTick.png";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-top">
        <div className="box">
          <div className="dashCard">
            <div className="content">
              <h3>New Requirements Recieved</h3>
              <h1>180</h1>
            </div>
            <img src={design}></img>
          </div>

          <div className="dashCard">
            <div className="content">
              <h3>New Requirements Recieved</h3>
              <h1>75</h1>
            </div>
            <img src={design}></img>
          </div>
          <div className="dashCard">
            <div className="content">
              <h3>New Requirements Recieved</h3>
              <h1>08</h1>
            </div>
            <img src={design}></img>
          </div>
          <div className="dashCard">
            <div className="content">
              <h3>New Requirements Recieved</h3>
              <h1>125</h1>
            </div>
            <img src={design}></img>
          </div>
          <div className="dashCard">
            <div className="content">
              <h3>New Requirements Recieved</h3>
              <h1>75</h1>
            </div>
            <img src={design}></img>
          </div>
          <div className="dashCard">
            <div className="content">
              <h3>New Requirements Recieved</h3>
              <h1>10</h1>
            </div>
            <img src={design}></img>
          </div>
        </div>
      </div>

      <div className="dashboard-middle">
        <div className="dashboard-middle-left">

        <div className="profile">
          <img src={person}></img>
        </div>
          <h1>Odda Drink</h1>
          <p>Recruiter</p>
          <br></br>
    <hr></hr>
          <div className="dashNotification">
      <p>       Recent Notification</p>

            <div className="notificationContent">
              <div className="tickLogo">
                <img src={tick}></img>
              </div>
              <div className="txt"> Job Posting for Database Programmer is approved <br></br> 12h ago</div>
            </div>
         
         



            <div className="notificationContent">
              <div className="tickLogo">
                <img src={tick}></img>
              </div>
              <div className="txt"> Job Posting for Database Programmer is approved <br></br> 12h ago</div>
            </div>
         




            <div className="notificationContent">
              <div className="tickLogo">
                <img src={tick}></img>
              </div>
              <div className="txt"> Job Posting for Database Programmer is approved <br></br> 12h ago</div>
            </div>





            <div className="notificationContent">
              <div className="tickLogo">
                <img src={tick}></img>
              </div>
              <div className="txt"> Job Posting for Database Programmer is approved <br></br> 12h ago</div>
            </div>




            <div className="notificationContent">
              <div className="tickLogo">
                <img src={tick}></img>
              </div>
              <div className="txt"> Job Posting for Database Programmer is approved <br></br> 12h ago</div>
            </div>
         
          </div>


        </div>
        <div className="dashboard-middle-right">
          <div className="dashboard-middle-right-top"></div>

          <div className="dashboard-middle-right-bottom">
            <h1> Top Requirements</h1>
            <div className="dashboard-middle-right-bottom-box">
             
             

              <div className="requirementCard">
                <div
                  className="heading"
                  style={{ marginBottom: "1.5rem", marginTop: "1rem" }}
                >
                  <div className="heading1">
                    <p style={{ color: "#797979" }}>
                      olivia and Pope &nbsp;
                      <span style={{ color: "black" }}>India Delhi</span>
                    </p>

                    <h3 style={{ marginTop: "1.5rem" }}>
                      
                      Database programmer
                    </h3>
                    <h4 style={{ marginTop: "1.5rem", color: "#2186F2" }}>
                      
                      $14000 - $15000
                    </h4>
                  </div>
                  <div className="heading2"></div>
                </div>
                <div className="txtContent" style={{ color: "#0C0C0CB2" }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </p>
                </div>
                <div className="options" style={{marginTop:"1rem"}}>
                  <div
                    className="grp1"
                    style={{ display: "flex", justifyContent: "space-evenly" ,marginBottom:"1rem" }}
                  >
                    <div>
                      
                      <button className="btn btn-w btn-inactive" style={{background:"#E9E0FF",fontSize:"2rem" ,width:"22rem"}}> 160 Matching</button>
                    </div>
                    <div>
                      
                    <button className="btn btn-w btn-inactive" style={{background:"#FFE0E0",fontSize:"2rem",width:"22rem"}}> 150 under Review</button>
                    </div>
                  </div>
                  <div
                    className="grp1"
                    style={{ display: "flex", justifyContent: "space-evenly",marginBottom:"1rem"  }}
                  >
                    <div>
                      
                    <button className="btn btn-w btn-inactive" style={{background:"#FFF6E0",fontSize:"2rem",width:"22rem"}}> 20 Client Submitted</button>
                    </div>
                    <div>
                      
                    <button className="btn btn-w btn-inactive" style={{background:"#E0FBFF",fontSize:"2rem",width:"22rem"}}> 0 Joined</button>
                    </div>
                  </div>
                </div>
              </div>





              <div className="requirementCard">
                <div
                  className="heading"
                  style={{ marginBottom: "1.5rem", marginTop: "1rem" }}
                >
                  <div className="heading1">
                    <p style={{ color: "#797979" }}>
                      olivia and Pope &nbsp;
                      <span style={{ color: "black" }}>India Delhi</span>
                    </p>

                    <h3 style={{ marginTop: "1.5rem" }}>
                      
                      Database programmer
                    </h3>
                    <h4 style={{ marginTop: "1.5rem", color: "#2186F2" }}>
                      
                      $14000 - $15000
                    </h4>
                  </div>
                  <div className="heading2"></div>
                </div>
                <div className="txtContent" style={{ color: "#0C0C0CB2" }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </p>
                </div>
                <div className="options" style={{marginTop:"1rem"}}>
                  <div
                    className="grp1"
                    style={{ display: "flex", justifyContent: "space-evenly" ,marginBottom:"1rem" }}
                  >
                    <div>
                      
                      <button className="btn btn-w btn-inactive" style={{background:"#E9E0FF",fontSize:"2rem" ,width:"22rem"}}> 160 Matching</button>
                    </div>
                    <div>
                      
                    <button className="btn btn-w btn-inactive" style={{background:"#FFE0E0",fontSize:"2rem",width:"22rem"}}> 150 under Review</button>
                    </div>
                  </div>
                  <div
                    className="grp1"
                    style={{ display: "flex", justifyContent: "space-evenly",marginBottom:"1rem"  }}
                  >
                    <div>
                      
                    <button className="btn btn-w btn-inactive" style={{background:"#FFF6E0",fontSize:"2rem",width:"22rem"}}> 20 Client Submitted</button>
                    </div>
                    <div>
                      
                    <button className="btn btn-w btn-inactive" style={{background:"#E0FBFF",fontSize:"2rem",width:"22rem"}}> 0 Joined</button>
                    </div>
                  </div>
                </div>
              </div>







              <div className="requirementCard">
                <div
                  className="heading"
                  style={{ marginBottom: "1.5rem", marginTop: "1rem" }}
                >
                  <div className="heading1">
                    <p style={{ color: "#797979" }}>
                      olivia and Pope &nbsp;
                      <span style={{ color: "black" }}>India Delhi</span>
                    </p>

                    <h3 style={{ marginTop: "1.5rem" }}>
                      
                      Database programmer
                    </h3>
                    <h4 style={{ marginTop: "1.5rem", color: "#2186F2" }}>
                      
                      $14000 - $15000
                    </h4>
                  </div>
                  <div className="heading2"></div>
                </div>
                <div className="txtContent" style={{ color: "#0C0C0CB2" }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </p>
                </div>
                <div className="options" style={{marginTop:"1rem"}}>
                  <div
                    className="grp1"
                    style={{ display: "flex", justifyContent: "space-evenly" ,marginBottom:"1rem" }}
                  >
                    <div>
                      
                      <button className="btn btn-w btn-inactive" style={{background:"#E9E0FF",fontSize:"2rem" ,width:"22rem"}}> 160 Matching</button>
                    </div>
                    <div>
                      
                    <button className="btn btn-w btn-inactive" style={{background:"#FFE0E0",fontSize:"2rem",width:"22rem"}}> 150 under Review</button>
                    </div>
                  </div>
                  <div
                    className="grp1"
                    style={{ display: "flex", justifyContent: "space-evenly",marginBottom:"1rem"  }}
                  >
                    <div>
                      
                    <button className="btn btn-w btn-inactive" style={{background:"#FFF6E0",fontSize:"2rem",width:"22rem"}}> 20 Client Submitted</button>
                    </div>
                    <div>
                      
                    <button className="btn btn-w btn-inactive" style={{background:"#E0FBFF",fontSize:"2rem",width:"22rem"}}> 0 Joined</button>
                    </div>
                  </div>
                </div>
              </div>







              <div className="requirementCard">
                <div
                  className="heading"
                  style={{ marginBottom: "1.5rem", marginTop: "1rem" }}
                >
                  <div className="heading1">
                    <p style={{ color: "#797979" }}>
                      olivia and Pope &nbsp;
                      <span style={{ color: "black" }}>India Delhi</span>
                    </p>

                    <h3 style={{ marginTop: "1.5rem" }}>
                      
                      Database programmer
                    </h3>
                    <h4 style={{ marginTop: "1.5rem", color: "#2186F2" }}>
                      
                      $14000 - $15000
                    </h4>
                  </div>
                  <div className="heading2"></div>
                </div>
                <div className="txtContent" style={{ color: "#0C0C0CB2" }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </p>
                </div>
                <div className="options" style={{marginTop:"1rem"}}>
                  <div
                    className="grp1"
                    style={{ display: "flex", justifyContent: "space-evenly" ,marginBottom:"1rem" }}
                  >
                    <div>
                      
                      <button className="btn btn-w btn-inactive" style={{background:"#E9E0FF",fontSize:"2rem" ,width:"22rem"}}> 160 Matching</button>
                    </div>
                    <div>
                      
                    <button className="btn btn-w btn-inactive" style={{background:"#FFE0E0",fontSize:"2rem",width:"22rem"}}> 150 under Review</button>
                    </div>
                  </div>
                  <div
                    className="grp1"
                    style={{ display: "flex", justifyContent: "space-evenly",marginBottom:"1rem"  }}
                  >
                    <div>
                      
                    <button className="btn btn-w btn-inactive" style={{background:"#FFF6E0",fontSize:"2rem",width:"22rem"}}> 20 Client Submitted</button>
                    </div>
                    <div>
                      
                    <button className="btn btn-w btn-inactive" style={{background:"#E0FBFF",fontSize:"2rem",width:"22rem"}}> 0 Joined</button>
                    </div>
                  </div>
                </div>
              </div>









              <div className="requirementCard">
                <div
                  className="heading"
                  style={{ marginBottom: "1.5rem", marginTop: "1rem" }}
                >
                  <div className="heading1">
                    <p style={{ color: "#797979" }}>
                      olivia and Pope &nbsp;
                      <span style={{ color: "black" }}>India Delhi</span>
                    </p>

                    <h3 style={{ marginTop: "1.5rem" }}>
                      
                      Database programmer
                    </h3>
                    <h4 style={{ marginTop: "1.5rem", color: "#2186F2" }}>
                      
                      $14000 - $15000
                    </h4>
                  </div>
                  <div className="heading2"></div>
                </div>
                <div className="txtContent" style={{ color: "#0C0C0CB2" }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </p>
                </div>
                <div className="options" style={{marginTop:"1rem"}}>
                  <div
                    className="grp1"
                    style={{ display: "flex", justifyContent: "space-evenly" ,marginBottom:"1rem" }}
                  >
                    <div>
                      
                      <button className="btn btn-w btn-inactive" style={{background:"#E9E0FF",fontSize:"2rem" ,width:"22rem"}}> 160 Matching</button>
                    </div>
                    <div>
                      
                    <button className="btn btn-w btn-inactive" style={{background:"#FFE0E0",fontSize:"2rem",width:"22rem"}}> 150 under Review</button>
                    </div>
                  </div>
                  <div
                    className="grp1"
                    style={{ display: "flex", justifyContent: "space-evenly",marginBottom:"1rem"  }}
                  >
                    <div>
                      
                    <button className="btn btn-w btn-inactive" style={{background:"#FFF6E0",fontSize:"2rem",width:"22rem"}}> 20 Client Submitted</button>
                    </div>
                    <div>
                      
                    <button className="btn btn-w btn-inactive" style={{background:"#E0FBFF",fontSize:"2rem",width:"22rem"}}> 0 Joined</button>
                    </div>
                  </div>
                </div>
              </div>



  
            
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-bottom">
      <h1> Top Candidates</h1>
      <div className="dashboard-bottom-box">

      <div className="candidateCard">
          <div className="cardPhoto">
            <img src={person}></img>
          </div>
          <div className="cardContent">
            <h3>Brionna Heathcoat</h3>
            <p>UI/UX Designer</p>
            <h3 style={{color:"#2186F2"}}>90% Match</h3>

          </div>
        </div>
     


        <div className="candidateCard">
          <div className="cardPhoto">
            <img src={person}></img>
          </div>
          <div className="cardContent">
            <h3>Brionna Heathcoat</h3>
            <p>UI/UX Designer</p>
            <h3 style={{color:"#2186F2"}}>90% Match</h3>

          </div>
        </div>
     



        <div className="candidateCard">
          <div className="cardPhoto">
            <img src={person}></img>
          </div>
          <div className="cardContent">
            <h3>Brionna Heathcoat</h3>
            <p>UI/UX Designer</p>
            <h3 style={{color:"#2186F2"}}>90% Match</h3>

          </div>
        </div>
     




        <div className="candidateCard">
          <div className="cardPhoto">
            <img src={person}></img>
          </div>
          <div className="cardContent">
            <h3>Brionna Heathcoat</h3>
            <p>UI/UX Designer</p>
            <h3 style={{color:"#2186F2"}}>90% Match</h3>

          </div>
        </div>
     

     
     
      </div>


      </div>
    </div>
  );
};

export default Dashboard;
