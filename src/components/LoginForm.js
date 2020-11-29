import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  // onChange of input field, trigger setState and assign BOTH username & pswd to the imediate value of e.target
  handleOnChange = (e) => {
    this.setState({
      // BOTH can use this fn  
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      
      // if username or password input doesnt exist...return
      if (!this.state.username || !this.state.password) return

      // this is where the props passed from App finally get used
      // pass in state..aka updated username/pswd, which will be called in parent
      this.props.handleLogin(this.state)

  }


  render() {
    return (

      <form onSubmit={ this.handleSubmit }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleOnChange} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleOnChange} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
