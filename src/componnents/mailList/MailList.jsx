import React from "react";
import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <div className="mailList">
        <h2 className="mlTitle">Save time, save money</h2>
        <span className="mlDesc">Sign up and we'll the best deals to you</span>
        <div className="mlRating">
          <input type="text" className="Subcrube" placeholder="your email" />
          <button>subscrube</button>
        </div>
        <div className="mlCheck">
          <input type="checkbox" className="form-check-input" />
          <span>Send me a link to get the free Hotel.com app</span>
        </div>
      </div>
    </div>
  );
};

export default MailList;
