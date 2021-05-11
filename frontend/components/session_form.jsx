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
        [type]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
  }

  render(){
    let link = (this.props.formType === "login") ? "signup" : "login"
    return(
      <div>
        <h1>{this.props.formType}</h1>
        <Link to={`/${link}`}>{link}</Link>
        <p>{this.props.errors.session.join(". ")}</p>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
          </label>
          {(this.props.formType === "signup") ? 
            <label>Display Name:
              <input type="displayName" value={this.state.displayName} onChange={this.handleInput("displayName")} />
            </label> : 
            <></>
          } 
          
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