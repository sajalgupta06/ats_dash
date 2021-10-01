import React  from 'react'
import {useHistory} from "react-router-dom";
import './CustomTable.scss'
import Backarrow from "../../asserts/icons/downloadArrow.png";
import olivia from "../../asserts/icons/Olivia.png";
import Users from "../../asserts/icons/users.png";
import Edit from "../../asserts/icons/edit_icon.png";
import Share from "../../asserts/icons/share.png";
export default function CustomTable() {

    const history = useHistory();
    return (
        <div className = "Jobposting_box" id = "my_div">
            <div>
                <div className = "backarrow">
                <img src={Backarrow}  onClick={() => history.goBack()} alt="backarrow icon" />
               
                </div>
             <div className = "Jobposting_head">Job Listing (30)</div>
            </div>
            <div className = "box_contain">
                <div className = "box_contain1">
                    <div>
                        <div className = "Olivia_logo">
                        <img src={olivia} alt="olivia icon" style = {{width: "60px",height: "60px"}}/>
                        </div>
                        <div className = "olivia_head"> Olivia & Pope </div>
                        <div className = "Olivia_senior_head"> Senior Automation Testing Analyst
                      </div>
                      <div className = "live_format"> Live</div> 
                        <ul className = "Olivia_address1" >
                          <div>#JT-00520</div>  
                          </ul>
                          <ul className = "Olivia_address2">
                          <li> 05 Postions</li>  
                          </ul>
                          <ul className = "Olivia_address3">
                          <li> $14,000-$25,000</li> 
                          </ul> 
                          <ul className = "Olivia_address4">
                          <li> Delhi, India(Remote)</li>  
                          </ul>
                          <div className = "job_description">
                              A job description or JD is a written narrative that describes the general tasks, 
                              or other related duties, and responsibilities of a position. It may specify the functionary
                              to who the positon reports. 
                          </div>
                          <div className = "Job_applicants">
                              <div> 
                              <img src={Users} alt="users icon" style = {{width: "24px",height: "20px"}}/>
                               <div className = "applicants">80 Applicants</div>
                              </div>
                          </div>
                          <div className = "edit_icon">
                          <img src={Edit} alt="edit icon" />
               
                          </div>
                          <div className = "share_icon">
                          <img src={Share} alt="edit icon" style = {{width : "40px",height : "40px  "}}/>
               
                          </div>
                    </div>
                </div>

            </div>

           
            <div className = "box_contain">
                <div className = "box_contain2">
                    <div>
                        <div className = "Olivia_logo">
                        <img src={olivia} alt="olivia icon" style = {{width: "60px",height: "60px"}}/>
                        </div>
                        <div className = "olivia_head"> Olivia & Pope </div>
                        <div className = "Olivia_senior_head"> Senior Automation Testing Analyst
                      </div>
                      <div className = "live_format"> Live</div> 
                        <ul className = "Olivia_address1" >
                          <div>#JT-00520</div>  
                          </ul>
                          <ul className = "Olivia_address2">
                          <li> 05 Postions</li>  
                          </ul>
                          <ul className = "Olivia_address3">
                          <li> $14,000-$25,000</li> 
                          </ul> 
                          <ul className = "Olivia_address4">
                          <li> Delhi, India(Remote)</li>  
                          </ul>
                          <div className = "job_description">
                              A job description or JD is a written narrative that describes the general tasks, 
                              or other related duties, and responsibilities of a position. It may specify the functionary
                              to who the positon reports. 
                          </div>
                          <div className = "Job_applicants">
                              <div> 
                              <img src={Users} alt="users icon" style = {{width: "24px",height: "20px"}}/>
                               <div className = "applicants">80 Applicants</div>
                              </div>
                          </div>
                          <div className = "edit_icon">
                          <img src={Edit} alt="edit icon" />
               
                          </div>
                          <div className = "share_icon">
                          <img src={Share} alt="edit icon" style = {{width : "40px",height : "40px  "}}/>
               
                          </div>
                    </div>
                </div>

            </div>

            <div className = "box_contain">
                <div className = "box_contain3">
                    <div>
                        <div className = "Olivia_logo">
                        <img src={olivia} alt="olivia icon" style = {{width: "60px",height: "60px"}}/>
                        </div>
                        <div className = "olivia_head"> Olivia & Pope </div>
                        <div className = "Olivia_senior_head"> Senior Automation Testing Analyst
                      </div>
                      <div className = "live_format"> Live</div> 
                        <ul className = "Olivia_address1" >
                          <div>#JT-00520</div>  
                          </ul>
                          <ul className = "Olivia_address2">
                          <li> 05 Postions</li>  
                          </ul>
                          <ul className = "Olivia_address3">
                          <li> $14,000-$25,000</li> 
                          </ul> 
                          <ul className = "Olivia_address4">
                          <li> Delhi, India(Remote)</li>  
                          </ul>
                          <div className = "job_description">
                              A job description or JD is a written narrative that describes the general tasks, 
                              or other related duties, and responsibilities of a position. It may specify the functionary
                              to who the positon reports. 
                          </div>
                          <div className = "Job_applicants">
                              <div> 
                              <img src={Users} alt="users icon" style = {{width: "24px",height: "20px"}}/>
                               <div className = "applicants">80 Applicants</div>
                              </div>
                          </div>
                          <div className = "edit_icon">
                          <img src={Edit} alt="edit icon" />
               
                          </div>
                          <div className = "share_icon">
                          <img src={Share} alt="edit icon" style = {{width : "40px",height : "40px  "}}/>
               
                          </div>
                    </div>
                </div>

            </div>

            <div className = "box_contain">
                <div className = "box_contain4">
                    <div>
                        <div className = "Olivia_logo">
                        <img src={olivia} alt="olivia icon" style = {{width: "60px",height: "60px"}}/>
                        </div>
                        <div className = "olivia_head"> Olivia & Pope </div>
                        <div className = "Olivia_senior_head"> Senior Automation Testing Analyst
                      </div>
                      <div className = "live_format"> Live</div> 
                        <ul className = "Olivia_address1" >
                          <div>#JT-00520</div>  
                          </ul>
                          <ul className = "Olivia_address2">
                          <li> 05 Postions</li>  
                          </ul>
                          <ul className = "Olivia_address3">
                          <li> $14,000-$25,000</li> 
                          </ul> 
                          <ul className = "Olivia_address4">
                          <li> Delhi, India(Remote)</li>  
                          </ul>
                          <div className = "job_description">
                              A job description or JD is a written narrative that describes the general tasks, 
                              or other related duties, and responsibilities of a position. It may specify the functionary
                              to who the positon reports. 
                          </div>
                          <div className = "Job_applicants">
                              <div> 
                              <img src={Users} alt="users icon" style = {{width: "24px",height: "20px"}}/>
                               <div className = "applicants">80 Applicants</div>
                              </div>
                          </div>
                          <div className = "edit_icon">
                          <img src={Edit} alt="edit icon" />
               
                          </div>
                          <div className = "share_icon">
                          <img src={Share} alt="edit icon" style = {{width : "40px",height : "40px  "}}/>
               
                          </div>
                    </div>
                </div>

            </div>
            
            <div className = "box_contain">
                <div className = "box_contain5">
                    <div>
                        <div className = "Olivia_logo">
                        <img src={olivia} alt="olivia icon" style = {{width: "60px",height: "60px"}}/>
                        </div>
                        <div className = "olivia_head"> Olivia & Pope </div>
                        <div className = "Olivia_senior_head"> Senior Automation Testing Analyst
                      </div>
                      <div className = "live_format"> Live</div> 
                        <ul className = "Olivia_address1" >
                          <div>#JT-00520</div>  
                          </ul>
                          <ul className = "Olivia_address2">
                          <li> 05 Postions</li>  
                          </ul>
                          <ul className = "Olivia_address3">
                          <li> $14,000-$25,000</li> 
                          </ul> 
                          <ul className = "Olivia_address4">
                          <li> Delhi, India(Remote)</li>  
                          </ul>
                          <div className = "job_description">
                              A job description or JD is a written narrative that describes the general tasks, 
                              or other related duties, and responsibilities of a position. It may specify the functionary
                              to who the positon reports. 
                          </div>
                          <div className = "Job_applicants">
                              <div> 
                              <img src={Users} alt="users icon" style = {{width: "24px",height: "20px"}}/>
                               <div className = "applicants">80 Applicants</div>
                              </div>
                          </div>
                          <div className = "edit_icon">
                          <img src={Edit} alt="edit icon" />
               
                          </div>
                          <div className = "share_icon">
                          <img src={Share} alt="edit icon" style = {{width : "40px",height : "40px  "}}/>
               
                          </div>
                    </div>
                </div>

            </div>

            <div className = "box_contain">
                <div className = "box_contain6">
                    <div>
                        <div className = "Olivia_logo">
                        <img src={olivia} alt="olivia icon" style = {{width: "60px",height: "60px"}}/>
                        </div>
                        <div className = "olivia_head"> Olivia & Pope </div>
                        <div className = "Olivia_senior_head"> Senior Automation Testing Analyst
                      </div>
                      <div className = "live_format"> Live</div> 
                        <ul className = "Olivia_address1" >
                          <div>#JT-00520</div>  
                          </ul>
                          <ul className = "Olivia_address2">
                          <li> 05 Postions</li>  
                          </ul>
                          <ul className = "Olivia_address3">
                          <li> $14,000-$25,000</li> 
                          </ul> 
                          <ul className = "Olivia_address4">
                          <li> Delhi, India(Remote)</li>  
                          </ul>
                          <div className = "job_description">
                              A job description or JD is a written narrative that describes the general tasks, 
                              or other related duties, and responsibilities of a position. It may specify the functionary
                              to who the positon reports. 
                          </div>
                          <div className = "Job_applicants">
                              <div> 
                              <img src={Users} alt="users icon" style = {{width: "24px",height: "20px"}}/>
                               <div className = "applicants">80 Applicants</div>
                              </div>
                          </div>
                          <div className = "edit_icon">
                          <img src={Edit} alt="edit icon" />
               
                          </div>
                          <div className = "share_icon">
                          <img src={Share} alt="edit icon" style = {{width : "40px",height : "40px  "}}/>
               
                          </div>
                    </div>
                </div>

            </div>


            <div className="table-footer1">
         <div className="footer-left">
             Showing 10 from 160 data
         </div>
         <div className="footer-right">  

             <button className="btn btn-w btn-inactive">{`<< Previous`}</button>
             
             <button className="btn  btn-inactive pages">1</button>
             <button className="btn  btn-inactive pages">2</button>
             <button  className="btn  btn-inactive pages">3</button>
          
             
             <button className="btn btn-w btn-inactive">{`Next >>`}</button>
         </div>


     </div>
        </div>
    )
}
