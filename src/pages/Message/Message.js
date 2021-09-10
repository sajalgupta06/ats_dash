import React, { useEffect, useState } from "react";
import { SearchIcon } from "../../asserts/icons";
import "./Message.scss";
import MessageBox from "./../../components/MessageBox/MessageBox";
import ChatMessage from "../../components/ChatMessage/ChatMessage";
import dots from "../../asserts/icons/dots.png";
import {BsFillStarFill}  from 'react-icons/bs'
import {AiOutlineStar}  from 'react-icons/ai'

import smile from "../../asserts/icons/smile.png";
import send from "../../asserts/icons/send.png";
import attach from "../../asserts/icons/attach.png";
import U from "../../asserts/icons/U.png";
import B from "../../asserts/icons/B.png";
import I from "../../asserts/icons/I.png";
import undo from "../../asserts/icons/undo.png";
import redo from "../../asserts/icons/redo.png";
import text from "../../asserts/icons/text.png";
import ChatPopup from "../../components/ChatPopup/ChatPopup";
import { URL } from "../../config";
import axios from "axios";
import horizontalDots  from '../../asserts/icons/horizontalDots.png'
import { v4 as uuidv4 } from "uuid";

import {
  doc,
  getDoc,
  setDoc,
  query,
  where,
  onSnapshot,
  orderBy,
  docChanges,
  getFirestore,
  collection,
  getDocs,
  collectionGroup,
} from "firebase/firestore";

import fire from "../../firebase";
import { max } from "moment";

const db = getFirestore(fire);

const Message = () => {
  let [candidateList, setCandidateList] = useState([]);
  let [currentUser, setCurrentUser] = useState();
  const [senderChatMessages, setSenderChatMessages] = useState([]);
  const [receiverChatMessages, setReceiverChatMessages] = useState([]);
  const [message, setMessage] = useState();
  const [sender, setSender] = useState(true);
  const [fav, setFav] = useState(false);
  const [sortedMssg, setSortedMssg] = useState([]);
  const [activeTab, setActiveTab] = useState("internal");

  const handleBatch = () => {
    const dropdown = document.querySelector(".batch-action");

    dropdown.classList.toggle("batch-visible");
  };

  useEffect(() => {
    // setCandidateList(candidateList)
    console.log(".");
  }, [candidateList]);

  const createChats = async (currentUser, text, sender) => {
    // setSenderChatMessages((e) => {
    //   return [];
    // }); 
    if (sender) {
      const chatRef = collection(
        db,
        "chats",
        "6124d1a6f296c1278715dc7a",
        "messages",
        `${currentUser._id}`,
        "message"
      );
      const mssgid = uuidv4();
      const result = await setDoc(doc(chatRef, mssgid), {
        createdAt: new Date(),
        body: text,
        read: false,
        title: "ATS-CHATS",
        id: mssgid,
        userChat: true,
        favourite:false,
      });
      
    } else {
      console.log(currentUser._id, text, sender);
      const chatRef = collection(
        db,
        "chats",
        `${currentUser._id}`,
        "messages",
        "6124d1a6f296c1278715dc7a",
        "message"
      );
      const mssgid = uuidv4();

      const result = await setDoc(doc(chatRef, mssgid), {
        createdAt: new Date(),
        body: text,
        read: false,
        title: "ATS-CHATS",
        id: mssgid,
        userChat: false,
        favourite:false,
      });
      console.log(result);
    }
  };

 

  useEffect(() => {
    console.log("..");
      // const asd =  senderChatMessages.sort((a,b) => (a.createdAt.nanoseconds > b.createdAt.nanoseconds) ? -1 : ((b.createdAt.nanoseconds > a.createdAt.nanoseconds) ? 1 : 0))
      // console.log({data:asd})
      setSortedMssg(
        senderChatMessages.sort((user1, user2) => {
          return compareObjects(user1, user2);
        })
      );
  }, [senderChatMessages]);

  const compareObjects = (object1, object2) => {
    const obj1 = parseInt(object1.createdAt.nanoseconds);
    const obj2 = parseInt(object2.createdAt.nanoseconds);
  

    if (obj1 > obj2) {
      return -1;
    }
    if (obj1 < obj2) {
      return 1;
    }
    return 0;
  };

  const fetchChats = (currentUser) => {


    setSenderChatMessages((e) => {
      return [];
    });



    try {
      const s = query(
        collection(
          db,
          "chats",
          "6124d1a6f296c1278715dc7a",
          "messages",
          `${currentUser._id}`,
          "message",
         
        ),
        orderBy("createdAt")
      );

      onSnapshot(s, (querySnapshot) => {
        // if(querySnapshot.empty){
        //   setSenderChatMessages((e) => {
        //     return [];
        //   });
        // };
  
        querySnapshot.docChanges().forEach((doc) => {
          setSenderChatMessages((e) => {
            return [...e, doc.doc.data()];
          });
        });
      });

      const r = query(
        collection(
          db,
          "chats",
          `${currentUser._id}`,
          "messages",
          "6124d1a6f296c1278715dc7a",
          "message"
        ),
        orderBy("createdAt")
      );

      onSnapshot(r, (querySnapshot) => {
        // if(querySnapshot.empty){
        //   setSenderChatMessages((e) => {
        //     return [];
        //   });
        // };

        querySnapshot.docChanges().forEach((doc) => {
          setSenderChatMessages((e) => {
            return [...e, doc.doc.data()];
          });
        });
      });

   
   

    } catch (error) {}
  };

 useEffect(() => {
    console.log(sortedMssg)
  }, [sortedMssg])

  const getCandidateListing = async () => {
    const token = localStorage.getItem("token");

    try {
      let url;

      url = `${URL}/api/dash/app/users`;

      const response = await axios({
        url: url,
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      if (response.data.status === "success") {
        setCandidateList(response.data.users);
        setCurrentUser(response.data.users[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // getCandidateListing();


const getRecruiters = async () => {
    const token = localStorage.getItem("token");

    try {
      let url;

      url = `${URL}/api/dash/users`;

      const response = await axios({
        url: url,
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      if (response.data.success === true) {
        setCandidateList(response.data.data);
       
        setCurrentUser(response.data.data[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
      if(activeTab==="internal")
      {
        getRecruiters()
      }

      else if(activeTab==="external")
      {
        getCandidateListing()
      }
  }, [activeTab]);

 

  useEffect(() => {
    // setSenderChatMessages([])
    // console.log(currentUser)
    fetchChats(currentUser);
  }, [currentUser]);

  const [chatPopupOpen, setChatPopupOpen] = useState(false);
  return (
    <div className="message-container">
      <div className="message-left">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h3 style={{ display: "inline-block" }}>Chats</h3>
          <div>
            <img src={dots} onClick={handleBatch} height="20px" />

            <span className="batch-action-rel" style={{ left: "-14rem" }}>
              <>
                <ul className="batch-action" style={{ width: "14rem" }}>
                  <div className="batch-action-square">&nbsp;</div>
                  <li>
                    <span> New Chat</span>
                  </li>
                  <li onClick={() => setChatPopupOpen(true)}>
                    <span>New Group</span>
                  </li>
                  <li>
                    <span>Starred Message</span>
                  </li>
                </ul>
              </>
            </span>
          </div>
        </div>
        {chatPopupOpen && (
          <ChatPopup setChatPopupOpen={setChatPopupOpen}></ChatPopup>
        )}

        <div className="message-search-box">
          <SearchIcon />
          <input type="text" placeholder="Search here" />
        </div>
        <div className="message-left-btns">
          <div className={`btn btn-w btn-${activeTab==="internal"?'active':"inactive"}`} onClick={()=>setActiveTab("internal")}>Internal</div>
          <div className={`btn btn-w btn-${activeTab==="external"?'active':"inactive"}`} onClick={()=>{setActiveTab("external")}}>External</div>
        </div>
        <div className="message-left-info-box">
          {candidateList &&
            candidateList.map((candidate) => {
              return (
                <MessageBox
                  candidate={candidate}
                  setCurrentUser={setCurrentUser}
                />
              );
            })}
        </div>
      </div>

      {currentUser && (
        <div className="message-right">
          <div className="message-right-topbar">
            <div className="email-right-topbar-info">
              <div className="email-right-topbar-info-content">
                <div className="image">
                  <img src={currentUser.profilePicture} alt="placeholder" />
                </div>

                <h1
                  style={{
                    fontSize: "2rem",
                    marginTop: "3rem",
                    color: "black",
                    fontWeight: "700",
                  }}
                >
                  {currentUser.name}

                  <br></br>
                </h1>
              </div>

              <div className="time" style={{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"}}>

                {fav===true?
                 <BsFillStarFill className="amber-text pr-3"  color={fav===true && 'yellow'}
                 size="2.5rem"  onClick={()=>setFav(!fav)}></BsFillStarFill>
   
                :
                
                <AiOutlineStar  size="2.5rem"  onClick={()=>setFav(!fav)}></AiOutlineStar>}
               
              
              <img src={horizontalDots} style={{marginLeft:"1.5rem",cursor:"pointer"}}></img>
              </div>
            </div>
          </div>
          <div className="message-right-middle">
            <div className="message-right-middle-overflow">
              {/* {renderMssg()} */}

              {
                sortedMssg &&
                sortedMssg.map(mssg=>{
                  if(mssg.userChat===true){
                    return(
                      <ChatMessage
                      own={true}
                      mssg={mssg}
                      currentUser={currentUser}
                    />
                    )
                  }else{
                    return(
                      <ChatMessage
                      mssg={mssg}
                      currentUser={currentUser}
                    />
                    )
                  }
                })
              }
            </div>
          </div>
          <div className="email-right-bottom">
            <div className="textbox">
              <input
                type="text"
                placeholder="Start Typing Here.."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></input>
            </div>
            <div className="email-right-bottom-editorOption">
              <div className="buttons1">
                <button
                  className="btn btn-w btn-inactive reply"
                  onClick={() => {
                    createChats(currentUser, message, sender);
                    setMessage("");
                  }}
                >
                  <img src={send}></img>Reply
                </button>
                <img src={smile} height="20px"></img>
                <img
                  src={attach}
                  height="20px"
                  onClick={() => setSender(!sender)}
                ></img>
              </div>
              <div className="buttons2">
                <img src={undo} height="20px"></img>
                <img src={redo} height="20px"></img>
                <img src={text} height="20px"></img>
                <img src={B} height="17px"></img>
                <img src={I} height="17px"></img>
                <img src={U} height="17px"></img>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
