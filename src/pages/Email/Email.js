import React, { useState } from "react";
import { SearchIcon } from "../../asserts/icons";
import "./Email.scss";
import EmailCard from "./../../components/EmailCard/EmailCard";
import Placeholder from "./../../asserts/images/placeholder.jpg";
import smile from '../../asserts/icons/smile.png'
import send from '../../asserts/icons/send.png'
import attach from '../../asserts/icons/attach.png'
import U from '../../asserts/icons/U.png'
import B from '../../asserts/icons/B.png'
import I from '../../asserts/icons/I.png'
import undo from '../../asserts/icons/undo.png'
import redo from '../../asserts/icons/redo.png'
import text from '../../asserts/icons/text.png'
import dots from '../../asserts/icons/dots.png'
import downloadArrow from '../../asserts/icons/downloadArrow.png'
import EmailTemplate from "../../components/EmailTemplates/EmailTemplate";

const Email = () => {

  const handleBatch = () => {
    const dropdown = document.querySelector(".email-batch-action");

    dropdown.classList.toggle("email-batch-visible");
  };

  const [showTemplate, setShowTemplate] = useState(false)


  

  return (
    <div className="email-container">
      
      <div className="email-left">
        
      {showTemplate?(
       <>
       <div  style={{display:"flex",justifyContent:"start",marginBottom:"2rem"}}>

       <img src={downloadArrow} onClick={()=>setShowTemplate(false)} style={{marginRight:"3rem"}}></img><h1>Email Template</h1>
       </div>
      </>
      ):
        <div className="side-heading">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Inbox</h1>
            <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center" , cursor:"pointer"}}>

            <div className="btn btn-w btn-active" style={{ minWidth: "0rem" }}>
              Compose

            </div>
           
            <span className='email-batch-action-rel'>
        <img src={dots}  onClick={handleBatch}  height="25rem"></img>

                <>
                  <ul className='email-batch-action'>
                    <div className='email-batch-action-square'>&nbsp;</div>
                 <li onClick={()=>{handleBatch();setShowTemplate(true)}}>Email Templates</li>
                  </ul>
                </>
              </span>

  

            </div>
        
          </div>
        </div>
}








        <div className="email-search-box">
          <SearchIcon />
          <input type="text" placeholder="Search here" />
        </div>

        <div className="email-left-info-box">
          <EmailCard></EmailCard>
          <EmailCard></EmailCard>
          <EmailCard></EmailCard>
          <EmailCard></EmailCard>
          <EmailCard></EmailCard>
          <EmailCard></EmailCard>
          <EmailCard></EmailCard>
        </div>
      </div>
   
   
      <div className="email-right">
      {showTemplate?(
       <EmailTemplate></EmailTemplate>
      ):
      <>
      
      <div className="email-right-topbar">New Candidate Profile </div>
      <div className="email-right-topbar-info">
        <div className="email-right-topbar-info-content">
          <div className="image">
            <img src={Placeholder} alt="placeholder" />
          </div>

          <h1>
            Ajita Balakrishnan{" "}
            <span style={{ fontSize: "2rem" }}>(ajita@jobsmarket.com)</span>
            <br></br>
            <h6>to Me, Vaibhav, Abhinav, Surabhi</h6>
          </h1>
        </div>

        <div className="time">4:30</div>
      </div>

      <div className="email-right-middle">
        <div className="email-right-middle-overflow">
          <h3>
            Regards,
            <br></br>
            <br></br>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum. Why do we use it? It is a long established fact that
            a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it
            has a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable
            English. Many desktop publishing packages and web page editors now
            use Lorem Ipsum as their default model text, and a search for
            'lorem ipsum' will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like).
            Where does it come from? Contrary to popular belief, Lorem Ipsum
            is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old.
            Richard McClintock, a Latin professor at Hampden-Sydney College in
            Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the
            cites of the word in classical literature, discovered the
            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
            1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
            and Evil) by Cicero, written in 45 BC. This book is a treatise on
            the theory of ethics, very popular during the Renaissance. The
            first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
            from a line in section 1.10.
          </h3>
        </div>
      </div>
      <div className="email-right-bottom">
        <div className="textbox">
        <input type="text" placeholder="Start Typing Here.."></input>

        </div>
        <div className="email-right-bottom-editorOption" >
          <div className="buttons1">
            <button className="btn btn-w btn-inactive reply"><img src={send}></img>Reply</button>
            <img src={smile} height="20px"></img>
            <img src={attach} height="20px"></img>
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
  </>
      }

      
      </div>
    </div>
  );
};

export default Email;
