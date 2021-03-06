import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";

import PlaceHolder from "./../../asserts/images/placeholder.jpg";
import { SearchIcon } from "../../asserts/icons";
import icon from "../../asserts/icons/questionMark.png";
import close from "../../asserts/icons/close.png";
import { Link,useLocation } from "react-router-dom";
import AssistantChat from "../AssistantChat/AssistantChat";
import assistant from "./../../asserts/icons/assistant.png";
import { MyContext } from "../../App";

const Navbar = () => {

 const data = useContext(MyContext)
 const heading = data.heading.heading

 var credits = data.credits.credits
 if(!credits){
   credits = localStorage.getItem("credits")
 }


console.log(data.heading)
  const [isOpen, setIsOpen] = useState(false);

  const handleBatch = () => {
    const dropdown = document.querySelector(".nav-batch-action");
    dropdown.classList.toggle("nav-batch-visible");
  };



  return (
    <div className="navbar-container">
      <div className="navbar-inside">
        <div className="navbar-info">
    {heading}




        </div>
        <div className="navbar-search-box">
          <input type="text" placeholder="Search Candidate" />
          <SearchIcon />
        </div>

        <div className="navbar-user">
            <div className="credits">Credits: {`${credits}/500`}</div>
            <img className="user-img" src={PlaceHolder} alt="" />
          <Link to="/profile">
            <div style={{cursor:"pointer"}} onClick={()=>data.changeHeading({type:"CHANGE_HEADING",payload:"Profile"})
}>
              <div className="user-name">Oda Dink</div>
              <div className="user-type">Recruiter</div>
            </div>
          </Link>
          <div>
            {!isOpen && (
              <img
                src={icon}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
                onClick={() => {
                  setIsOpen(true);
                  handleBatch();
                }}
              ></img>
            )}
            {isOpen && (
              <img
                src={close}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
                onClick={() => {
                  setIsOpen(false);
                  handleBatch();
                }}
              ></img>
            )}
          </div>
          <span className="nav-batch-action-rel">
            <>
              <ul className="nav-batch-action">
                <div className="nav-batch-action-square">&nbsp;</div>
                <div className="chatArea">

             
                <div className="chatHead">
                  <div>
                    <img src={assistant} alt="Assistant" />
                  </div>
                  <div>
                    <p
                      style={{
                        textAlign: "center",
                        fontWeight: "600",
                        fontSize: "2rem",
                      }}
                    >
                      Virtual Assistant
                    </p>
                  </div>
                </div>
                <hr></hr>
                <AssistantChat></AssistantChat>
                <AssistantChat></AssistantChat>
                <AssistantChat own={true}></AssistantChat>
                <AssistantChat></AssistantChat>
                <AssistantChat own={true}></AssistantChat>
                </div>
                <div>
                <div
            className="navbar-search-box"
            style={{
          
              marginTop:"13rem",
              background: "#fff",
              border: "1px solid #878787",
              // width: "90%",
              display:"flex"
            }}
          >

            <input type="text" placeholder="Type a message here " />
            <div>

            <p style={{marginRight:"1rem",cursor:"ponter!important",color:"#2186F2"}} >Send</p>
            </div>
          </div>
            </div>

              </ul>
            </>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
