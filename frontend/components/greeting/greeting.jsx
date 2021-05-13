import React from 'react';
// import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    
  }
  render(){    
    // debugger
    const display = this.props.currentUser
    return(
        <div className='banner'>
        <div className='nav-belt'>
            <div className='nav-left'>      
                <div className='header-logo' >
                    <div id='and-so-on-logo' />
                </div> 
            </div> 
            <div className="nav_mid">
                <div className='nav-searchbar'>
                {/* <SearchBarContainer /> */}
                </div>
            </div>
            <div className="nav-right">            
                <div className='account-dropdown'>
                    <Link to='/login'>
                        <button className="account-container">
                            <span className='first-navigation-line'>Please sign in</span>
                            <br></br>
                            <span className='second-navigation-line'>Account & Lists ▾</span>
                        </button>
                    </Link>
                    {/* <p>Welcome, {this.props.currentUser.username}</p> */}
                    <div className='account-dropdown-content'>
                        <Link to='/login'>
                            <input className='submit-button' id='dropdown-yellow' type="submit" value="Sign in" />
                        </Link>
                        <span className='alt-link' id='new-customer-dropdown'>New customer? <Link to='/signup' id='start-here-link'>Start here.</Link></span>
                    </div>
                    {/* <button onClick={this.props.logout}>Log Out</button>   
                    <div>
                    <Link className="signup" to="/signup">Sign Up</Link>
                    <br/>
                    <Link className="login" to="/login">Log In</Link>
                    </div> */}                    
                </div>
            </div>
            </div>                                       
        <div className='sub-banner'>
            <p>All Best Sellers Customer Service Prime New Releases Today's Deals Books Fashion Kindle-Books Toys&Games Pharmacy Gift-Cards Registry Sell Computers Video-Games

            </p>
            {display}
        </div> 
        <div className='alexa-stuff' >
            <div id='alexa' />
        </div> 
      </div>

      
    //   </div>
    )
  }
}

export default Greeting;