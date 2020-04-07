import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function Contact(props) {
  let name;
  let avatar;
  let online = { props };
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} />
      <div className="status">
        <h6 className="name">{props.name}</h6>
        <span
          className={props.online ? "status-online" : "status-offline"}
        ></span>
        <p className="status-text">{props.online ? "online" : "offline"}</p>
      </div>
    </div>
  );
}
Contact.propTypes = {
  online: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default Contact;
