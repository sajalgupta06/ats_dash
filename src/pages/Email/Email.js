import React from "react";
import { SearchIcon } from "../../asserts/icons";
import "./Email.scss";
import EmailCard from "./../../components/EmailCard/EmailCard";
import ChatMessage from "../../components/ChatMessage/ChatMessage";
import Placeholder from "./../../asserts/images/placeholder.jpg";

const Email = () => {
  return (
    <div className="message-container">
      <div className="message-left">
        <div className="side-heading">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Inbox</h1>  
            <div className="btn btn-w btn-active" style={{minWidth:'0rem'}}>Compose</div>
          </div>
        </div>
        <div className="message-search-box">
          <SearchIcon />
          <input type="text" placeholder="Search here" />
        </div>

        <div className="message-left-info-box">
         <EmailCard></EmailCard>
         <EmailCard></EmailCard>
         <EmailCard></EmailCard>
         <EmailCard></EmailCard>
         <EmailCard></EmailCard>
         <EmailCard></EmailCard>
         <EmailCard></EmailCard>
        </div>
      </div>
      <div className="message-right">
        <div className="message-right-topbar">New Candidate Profile  </div>
        <div className="message-right-topbar-info">
          <div className="message-right-topbar-info-content"> 

          <div className="image">
          <img src={Placeholder} alt="placeholder" />
          </div>

          <h1>Ajita Balakrishnan <span style={{fontSize:"2rem"}}>(ajita@jobsmarket.com)</span><br></br>
          <h6>to Me, Vaibhav, Abhinav, Surabhi</h6>
          </h1>
          </div>
          
          <div className="time">4:30</div>

        </div>
      
        <div className="message-right-middle">
          <div className="message-right-middle-overflow">
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
        <div className="message-right-bottom"><textarea type="text" placeholder="Start Typing Here.."></textarea></div>
      </div>
    </div>
  );
};

export default Email;
