import React from "react";

class TwitterMessage extends React.Component {
    // takes one prop: this.props.maxChars ---  props passed down from App
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    // this is where the props passed from App finally get used
    let characterNumber = this.props.maxChars - this.state.message.length
    
    return (
      <div>
        <strong>Your message:</strong>
        {/* // make this a controlled component */}
        <input type="text" onChange={this.handleChange} value={this.state.message} name="message" id="message" />
        {characterNumber}
      </div>
    );
  }
}

export default TwitterMessage;
