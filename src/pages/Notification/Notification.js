import React from "react";
import { SearchIcon } from "../../asserts/icons";
import './Notification.scss'
import icon from '../../asserts/icons/notification-icon.png'
import icon1 from '../../asserts/icons/notification-icon 1.png'
import icon2 from '../../asserts/icons/notification-icon 2.png'
import icon3 from '../../asserts/icons/notification-icon 3.png'

const Notification = () => {
  return <div className="notification">

<div className="message-search-box">
          <SearchIcon />
          <input type="text" placeholder="Search here" />
        </div>


  <div className="notification-container">

  <div className="notification-time"> Today </div>


  <div className="notification-card">
    <h4>2m ago</h4>
    <img src={icon}></img>
    <div className="notification-texBox">
      Sajal Gupta Mentioned you at some project
      <br></br>
      <p>Monday June 31 2021</p>
    </div>
  </div>


  <div className="notification-card">
    <h4>2m ago</h4>
    <img src={icon1}></img>
    <div className="notification-texBox">
      Sajal Gupta Mentioned you at some project
      <br></br>
      <p>Monday June 31 2021</p>
    </div>
  </div>



  <div className="notification-card">
    <h4>2m ago</h4>
    <img src={icon2}></img>
    <div className="notification-texBox">
      Sajal Gupta Mentioned you at some project
      <br></br>
      <p>Monday June 31 2021</p>
    </div>
  </div>



  <div className="notification-card">
    <h4>2m ago</h4>
    <img src={icon3}></img>
    <div className="notification-texBox">
      Sajal Gupta Mentioned you at some project
      <br></br>
      <p>Monday June 31 2021</p>
    </div>
  </div>
 
  <div className="notification-time"> Yesterday </div>


<div className="notification-card">
  <h4>2m ago</h4>
  <img src={icon}></img>
  <div className="notification-texBox">
    Sajal Gupta Mentioned you at some project
    <br></br>
    <p>Monday June 31 2021</p>
  </div>
</div>


<div className="notification-card">
  <h4>2m ago</h4>
  <img src={icon1}></img>
  <div className="notification-texBox">
    Sajal Gupta Mentioned you at some project
    <br></br>
    <p>Monday June 31 2021</p>
  </div>
</div>



<div className="notification-card">
  <h4>2m ago</h4>
  <img src={icon2}></img>
  <div className="notification-texBox">
    Sajal Gupta Mentioned you at some project
    <br></br>
    <p>Monday June 31 2021</p>
  </div>
</div>



<div className="notification-card">
  <h4>2m ago</h4>
  <img src={icon3}></img>
  <div className="notification-texBox">
    Sajal Gupta Mentioned you at some project
    <br></br>
    <p>Monday June 31 2021</p>
  </div>
</div>

 
  </div>
  <div className="table-footer" style={{marginTop:"1rem"}}>
                <div className="footer-left">
                    Showing 10 from 100 data
                </div>
                <div className="footer-right">  

                    <button className="btn btn-w btn-inactive">{`<< Previous`}</button>
                    
                    <button  className="btn btn-inactive pages">1</button>
                    <button  className="btn  btn-inactive pages">2</button>
                 
                    
                    <button className="btn btn-w btn-inactive">{`Next >>`}</button>
                </div>
            </div>
  </div>;
};

export default Notification;
