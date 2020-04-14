import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    // this.name = name;
    // this.avatar = avatar;
    // this.pnline = online;
    this.state = {
      online: this.props.online,
    };
  }
  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} />
        <div className="status">
          <h6 className="name">{this.props.name}</h6>
          <span
            className={this.state.online ? "status-online" : "status-offline"}
            onClick={(event) => {
              const newOnline = !this.state.online;
              this.setState({ online: newOnline });
            }}
            // className={this.props.online ? "status-online" : "status-offline"}
          ></span>
          <p className="status-text">
            {this.props.online ? "online" : "offline"}
          </p>
        </div>
      </div>
    );
  }
}
Contact.propTypes = {
  online: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default Contact;
