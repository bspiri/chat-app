import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online,
    };
  }
  handleClick = () => {
    // console.log(this.state.online);
    const status = this.state.online === true ? false : true;
    this.setState({ online: status });
  };
  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt="" />
        <div className="status">
          <h6 className="name">{this.props.name}</h6>
          <span
            className={this.state.online ? "status-online" : "status-offline"}
          ></span>
          <p onClick={this.handleClick} className="status-text">
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
