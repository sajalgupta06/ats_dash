import React from "react";
import { SearchIcon } from "../../asserts/icons";

const Notification = () => {
  return <div>

<div className="message-search-box">
          <SearchIcon />
          <input type="text" placeholder="Search here" />
        </div>
  </div>;
};

export default Notification;
