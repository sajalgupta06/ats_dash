import React,{useState} from 'react'
import UserAuto from './UserAuto/UserAuto';
import UserCustom from './UserCustom/UserCustom';
import UserQuick from './UserQuick/UserQuick'


const UserLogin = () => {

    const [navClicked, setNavClicked] = useState("UserQuick");
    
    return (
      <div>
        <div className="navOptions" style = {{    justifyContent: "space-between"
  }}>
            <div>
         <div
            className={`option ${
              navClicked === "UserQuick" ? "option-active" : ""
            }`}
            onClick={() => setNavClicked("UserQuick")}
          >
            <h3>Quick Report</h3>
          </div>
          <div
            className={`option ${
              navClicked === "UserCustom" ? "option-active" : ""
            }`}
            onClick={() => setNavClicked("UserCustom")}
          >
            <h3> Customized Report</h3>
          </div>
  
          <div
            className={`option ${
              navClicked === "UserAuto" ? "option-active" : ""
            }`}
            onClick={() => setNavClicked("UserAuto")}
          >
            <h3>Auto Emailing</h3>
          </div>
      
          </div>
</div>
     
        
        {navClicked === "UserQuick" &&  <UserQuick></UserQuick>}
        {navClicked === "UserCustom" && <UserCustom></UserCustom>}
        {navClicked === "UserAuto" && <UserAuto></UserAuto>}
      </div>
    )
}
export default UserLogin
