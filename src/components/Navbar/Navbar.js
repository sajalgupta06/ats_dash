import React from "react";
import "./Navbar.scss";

import PlaceHolder from "./../../asserts/images/placeholder.jpg";
import { SearchIcon } from "../../asserts/icons";

const Navbar = ({ view, setView }) => {
  return (
    <div className='navbar-container'>
      <div className='navbar-inside'>
        <div className='navbar-info'>{view}</div>
        <div className='navbar-search-box'>
          <input type='text' placeholder='Search something here' />
          <SearchIcon />
        </div>

        <div onClick={() => setView("profile")} className='navbar-user'>
          <div className='credits'>Credits: 485/500</div>
          <img className='user-img' src={PlaceHolder} alt='' />
          <div>
            <div className='user-name'>Oda Dink</div>
            <div className='user-type'>Recruiter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
