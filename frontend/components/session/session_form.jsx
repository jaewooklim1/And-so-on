import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      username: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({
        [type]: e.currentTarget.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    let link = (this.props.formType === "login") ? "signup" : "login"
    return(
      <div>
        <h1>Welcome to the {this.props.formType} page!</h1>
        <Link to={`/${link}`}>{link}</Link> instead       
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
          </label>
            {(this.props.formType === "signup") ? 
            <label>Username:
              <input type="username" value={this.state.username} onChange={this.handleInput("username")} />
            </label> : 
            <></>
          }
          <br/>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
          </label>
          <button type="submit">{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;