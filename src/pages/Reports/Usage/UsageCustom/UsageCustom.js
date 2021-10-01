import React, {useState} from 'react'
import { Topping } from "./Topping";
import './UsageCustom.scss'
import CloseIcon from '@material-ui/icons/Close';
import{  DownArrIcon,
} from '../../../../asserts/icons'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Customized from '../../../../components/UsageSession/CustomizedTable/Customized';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  
  },
  textField: {
   
    marginRight: theme.spacing(1),
    width: 350,
    marginTop: "350px",
    marginLeft : "200px",
    fontWeight : 500
  },
  containerTo: {
    display: 'flex',
    flexWrap: 'wrap',
  
  },
  textFieldTo: {
    
    marginRight: theme.spacing(1),
    width: 350,
    marginTop: "-23px",
    marginLeft : "950px",
    fontWeight : 500
  },
  

}));

 export default function UsageCustom() {
  
  const [hello , setHello] = useState("Choose User")
  const classes = useStyles();
  const [customAdd, setCustomAdd] = useState(false);
      return (
        <div>
            <form>
            <div className = "custom_contain1">
                <h3 >Added: </h3>
               <div className = "custom_all1">
                   <h3>All</h3>
                   <CloseIcon className = "custom_icon1"/>

                </div>
                <div className = "custom_date1">
                    <h3>1 Jun, 21 - 1 Jul, 21</h3>
                    <CloseIcon className = "custom_icondate1"/>
                </div>

            </div>
            <div className = "custom_detail1">
            <div className = " custom_choose1">
              <h2>Choose User</h2>
              <div className = "custom_input_box2" placeholder = "Chosse User" onClick = {()=>{
                const batchArrow = document.querySelector(".custom_arrow_subject2");
                batchArrow.classList.toggle("custom_rotate2");
                const dropdown = document.querySelector(".custom_arrow_action2");
                dropdown.classList.toggle("custom_visible_subject2");
              }}> 
                  <div style={{paddingLeft:"2rem",paddingTop:"2rem",fontSize : "18px"}}>{hello}</div>
              <div style={{marginTop:"0.5rem",marginRight:"1rem"}}>
              <span className="custom_list2">
                  <>
             
                    <ul className="custom_arrow_action2">
                      <div className="custom_arrow_square2">&nbsp;</div>
                  <option value={hello} onClick={()=>setHello("All ")}>All </option>
                  <option value={hello} onClick={()=>setHello("sanwaar@jobsterritory.com")}>sanwaar@jobsterritory.com </option>
                  <option value={hello} onClick={()=>setHello("bhanvesh@jobsterritory.com")}>bhanvesh@jobsterritory.com </option>
                  <option value={hello} onClick={()=>setHello("jignesh@jobsterritory.com")}>jignesh@jobsterritory.com </option>
                  <option value={hello} onClick={()=>setHello("hansabehn@jobsterritory.com")}>hansabehn@jobsterritory.com </option>
                    </ul>
                  </>
                </span>
      <DownArrIcon className="custom_arrow_subject2"  />
            </div>
            </div>

     </div>
     </div>

     <div className = "custom_detail_date2">
            <div className = " custom_choose_date2">
              <h2>Date(Form)</h2>
              <div className={classes.container} noValidate>
      <TextField
        id="date"
        style={{fontSize: "300px"}}
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
              </div>

              <div className = "custom_choose_dateto2">
                <h2>Date(To)</h2>
                <div className={classes.containerTo} noValidate>
      <TextField
        id="date"
        style={{fontSize: "300px"}}
        type="date"
        defaultValue="2017-05-24"
        className={classes.textFieldTo}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
              </div>

              <div className = "usage_field">
              <h2>Fields to be seen:</h2>
              <ul className="toppings-list">
        {Topping.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              
              </div>
            </li>
          );
        })}
      
      </ul>
              </div> 
              <div>
                <div className = "btn-generate2" onClick={()=>setCustomAdd(true)}>Generate Report</div>
                {customAdd&&(
                    <Customized setCustomAdd={setCustomAdd}></Customized>
                    )}
              </div>

              </div>
            




            </form>
        </div>
    )
}



