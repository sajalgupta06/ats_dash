import React, { useEffect, useState } from "react";
import { SearchIcon } from "../../asserts/icons";
import './Notification.scss'
import icon from '../../asserts/icons/notification-icon.png'
import icon1 from '../../asserts/icons/notification-icon 1.png'
import icon2 from '../../asserts/icons/notification-icon 2.png'
import icon3 from '../../asserts/icons/notification-icon 3.png'
// import firebase from '../../firebase
import { getFirestore, collection, getDocs ,collectionGroup} from 'firebase/firestore';
import { doc, getDoc,setDoc,query, where, onSnapshot} from "firebase/firestore";

import fire from "../../firebase";

const db = getFirestore(fire)


const Notification = () => {

  const [notifications,setNotifications] = useState([])

  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


  async function fireFunc(){
    try{
     
    // For Saving Doc
    
    
    
    //   const recruitersRef = collection(db,  'recruiters',"6124d1a6f296c1278715dc7a","notifications");
    //  const result =  await setDoc(doc(recruitersRef, "sajal_test"), {
    //     createdAt: new Date(),
    //      body: "A user has applied to your job",
    //       data: {
    //         candidateId:"465456454adsfsdf",
    //         jobId:"465456454adsfsdf",    
    //       },
    //     read: false,
    //     title:"ATS-JOBS",
    //      id: "sajal_test"});
    
      
    // For Fetching Docs Once
    
    //   const querySnapshot = await getDocs(collection(db, "recruiters","6124d1a6f296c1278715dc7a","notifications"));
    //   const arr=[]
    //   console.log(querySnapshot)
    //   const counter =0;
    //   querySnapshot.forEach((doc) => {
    //       const data1 = doc.data()
    //         console.log(doc.data())
    //         console.log(doc)
    //         setNotifications((e)=>{
    //           return [...e,data1]
    //         })

    // });

    
    
      // For Fetching Docs Live
    
      const q = query(collection(db, "recruiters","6124d1a6f296c1278715dc7a","notifications"));
    
      onSnapshot(q, (querySnapshot) => {
      
        querySnapshot.forEach((doc) => {
          setNotifications((e)=>{
            return [...e,doc.data()]
          })
           
        });
      });
    
    }
    catch(e){
      console.log(e)
    }
    
  }

 

  console.log(notifications)
  useEffect(() => {
    fireFunc()
  }, [])

  useEffect(() => {
 console.log(notifications)
  }, [notifications])
  

  return <div className="notification">

<div className="message-search-box">
          <SearchIcon />
          <input type="text" placeholder="Search here" />
        </div>


  <div className="notification-container">

  <div className="notification-time"> Today </div>


 {notifications && notifications.map(not=>{

  var startTime, endTime;



  startTime = new Date(not.createdAt);
  endTime = new Date();
  var timeDiff = endTime - startTime;
  timeDiff /= 1000;


  var seconds = Math.round(timeDiff);
  var minutes = Math.round(seconds/60);
  var hours = Math.round(minutes/60);
  var days = Math.round(hours/24);

  var duration;
  if(seconds<60){
    duration = `${seconds}s`
  }  
  else if(minutes>=1 && minutes<60){
    duration = `${minutes}m`

  }

  else if(hours>=1 && hours<24 ){
    duration = `${hours}h`

  }
  else if(days>=1){
    duration = `${days}d`

  }

  


  // const time = new Date(duration)
  return <div className="notification-card">
  
        <h4>{duration}</h4>
        <img src={icon3}></img>
        <div className="notification-texBox">
{
  not.data.body
} 
         <br></br>
          <p>{new Date(not.createdAt).getDate()}  {months[new Date(not.createdAt).getMonth()]} {new Date(not.createdAt).getFullYear()}</p>
        </div>
        </div>


})} 

 
 

  {/* <div className="notification-time"> Yesterday </div> */}


 
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
