import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const display = this.props.currentUser ? (
      <div>
        <p>Welcome, {this.props.currentUser.displayName}</p>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    ) : (
      <div>
        <Link className="signup" to="/signup">Sign Up</Link>
        <br/>
        <Link className="login" to="/login">Log In</Link>
      </div>
    );

    return(
      <div>
        {display}
      </div>
    )
  }
}

export default Greeting;