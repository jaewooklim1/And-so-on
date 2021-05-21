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
    this.demoLogin = this.demoLogin.bind(this);
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
    debugger
    this.props.processForm(user).then(user => this.props.history.push('/'));

  }

  demoLogin(e) {
    e.preventDefault();
    const demoUser = { email: "demouser12345@gmail.com", password: "demouser12345"};
    this.props.processForm(demoUser).then(demoUser => this.props.history.push('/'));
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
    let link = (this.props.formType === "login") ? "signup" : "login"
    return(
      <div className='sign-up'>
        <div className='top-banner'>
          
          <div className='header-logo' >
            <div id='and-so-on-logo-dark' />
          </div> 
          <div className="mid-signup-section">
            <h1 className="header-text">Welcome to the {this.props.formType} page!</h1> 
              <br></br>             
                 
              <form className="input-info" onSubmit={this.handleSubmit}>
                <label>Email:
                  <br></br>
                  <input className="email-text" type="text" value={this.state.email} onChange={this.handleInput("email")} />
                </label>
                <div className="form-errors">
                  {this.state.email.length === 0 && this.state.submitPressed ? "Enter Your Email" : ""}
                </div>
                <div className="form-errors">
                  {this.state.email.split("@").length !== 2 && this.state.email.length !== 0 && this.state.submitPressed ? "Email must be valid" : ""}
                </div>
                <br></br>
                  {(this.props.formType === "signup") ? 
                  <label>Username:
                    <br></br>
                    <input className="username-text" type="username" value={this.state.username} onChange={this.handleInput("username")} />
                  </label> : 
                  <></>
                }
                {(this.props.formType === "signup") ? 
                <div className="form-errors">
                  {this.state.username.length < 6 && this.state.submitPressed ? "Enter a valid username" : ""}
                </div> : 
                <></>
                }
                  <br/>
                <label>Password:
                  <br></br>
                  <input className="password-text" type="password" value={this.state.password} onChange={this.handleInput("password")} />
                </label>
                <div className="form-errors">
                  {this.state.password.length < 6 && this.state.submitPressed ? "Enter a valid password" : ""}
                </div>
                <br></br>
                {(this.props.formType === "signup") ? 
                <label>Re-enter Password
                  <br></br>
                  <input className="re-enter-password-text" type="password_confirmation" value={this.state.password_confirmation} onChange={this.handleInput("password_confirmation")} />
                </label> :
                <></>
                
                }
                {(this.props.formType === "signup") ? 
                <div className="form-errors">
                  {this.state.password === this.state.password_confirmation && this.state.submitPressed ? "Password and password confirmation must match" : ""}
                </div> :
                <></>
                }
                <br></br>
                <button className="submit-button" type="submit">{this.props.formType}</button>
            </form>
            <br></br>
            <Link to={`/${link}`}>{link}</Link> instead   
            <br></br> 
            <br></br> 
            <br></br> 
              <button className="demo-user-button" onClick={ this.demoLogin}>Demo User Login</button>
            {(this.props.formType === "signup") ? 
            <label className="terms-of-conditions">By creating an account, you agree to And-so-on's non-existent Conditions of Use and Privacy Notice.
            </label> : 
            <label className="terms-of-conditions">By continuing, you agree to And-so-on's non-existent Conditions of Use and Privacy Notice.
            </label>                           
          }
          </div>
         
        </div>        
      
      </div>
    )
  }
}

export default SessionForm;