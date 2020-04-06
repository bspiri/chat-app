import React from "react";
import "./styles.css";

function Contact() {
  const name = "Shelly Jennings";
  const avatar = "https://randomuser.me/api/portraits/women/40.jpg";
  const online = true;
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} />
      <div className="status">
        <h6 className="name">{name}</h6>
        <span className={online ? "status-online" : "status-offline"}></span>
        <p className="status-text">{online ? "online" : "offline"}</p>
      </div>
    </div>
  );
}

export default Contact;
