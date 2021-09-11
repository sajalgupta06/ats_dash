import React,{useState} from 'react'
import UsageAuto from './UsageAuto/UsageAuto';
import UsageCustom from './UsageCustom/UsageCustom';

import UseReport from './UsageQuick/UseReport'

function Usage() {
    const [navClicked, setNavClicked] = useState("UseReport");
    
    return (
      <div>
        <div className="navOptions" style={{    justifyContent: "space-between"
  }}>
            <div>
  
         
          <div
            className={`option ${
              navClicked === "UseReport" ? "option-active" : ""
            }`}
            onClick={() => setNavClicked("UseReport")}
          >
            <h3>Quick Report</h3>
          </div>
          <div
            className={`option ${
              navClicked === "UsageCustom" ? "option-active" : ""
            }`}
            onClick={() => setNavClicked("UsageCustom")}
          >
            <h3> Customized Report</h3>
          </div>
  
          <div
            className={`option ${
              navClicked === "UsageAuto" ? "option-active" : ""
            }`}
            onClick={() => setNavClicked("UsageAuto")}
          >
            <h3>Auto Emailing</h3>
          </div>
      
          </div>
</div>
     
        
        {navClicked === "UseReport" &&  <UseReport></UseReport>}
        {navClicked === "UsageCustom" && <UsageCustom></UsageCustom>}
        {navClicked === "UsageAuto" && <UsageAuto></UsageAuto>}
      </div>
    )
}
export default Usage