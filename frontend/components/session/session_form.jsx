import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      username: "",
      submitPressed: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDemoLogin = this.handleDemoLogin.bind(this);
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

    this.setState({
      submitPressed: true
    });

    const user = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username      
    };    
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
  
  update(field) {
    return e => this.setState({
        [field]: e.currentTarget.value
    });
  }

  // componentDidMount() {
  //   this.props.dispatchedClearErrors();
  // }

  render(){
    let link = (this.props.formType === "login") ? "Create And-so-on Account" : "login"
    return(
      <div>
        <div>
          <h1>Welcome to the {this.props.formType} page!</h1>
            
            <Link to={`/${link}`}>{link}</Link> instead       
            <form onSubmit={this.handleSubmit}>
              <label>Email:
                <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
              </label>
              <div>
                {this.state.email.length === 0 && this.state.submitPressed ? "Enter Your Email" : ""}
              </div>
              <div>
                {this.state.email.length < 6 && this.state.submitPressed ? "Enter Your Email" : ""}
              </div>
                {(this.props.formType === "Create And-so-on Account") ? 
                <label>Username:
                  <input type="username" value={this.state.username} onChange={this.handleInput("username")} />
                </label> : 
                <></>
              }
              <div>
                {this.state.username.length < 6 && this.state.submitPressed ? "Enter a valid username" : ""}
              </div>
                <br/>
              <label>Password:
                <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
              </label>
              <label>Re-enter Password
                <input type="password_confirmation" value={this.state.password_confirmation} onChange={this.handleInput("password_confirmation")} />
              </label>
              <button type="submit">{this.props.formType}</button>
          </form>
        </div>        
      </div>
    )
  }
}

export default SessionForm;