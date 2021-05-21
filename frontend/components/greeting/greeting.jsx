import React from 'react';
// import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
    overlay: {
        background: "rgb(0, 0, 0, 0.5)",
        // opacity: "0.5",
        filter: "Alpha(Opacity=50)",
    },
    
    content : {
      top                   : '13%',
      left                  : '95%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : "100px",
      height                : "100px",
      background:           "white",
      position              : "relative",
      opacity : "1 !important"
    },

    
  };
  

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.state ={
        setIsOpen: false,
        modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }  

    // const [modalIsOpen,setIsOpen] = React.useState(false);

    openModal() {
        // debugger
        this.setState({modalIsOpen: true});
    }

    closeModal(){
       this.setState({modalIsOpen: false});
    }
    
    handleLogout(){
        debugger
        this.props.logout().then(this.props.history.push('/'));
        // (this.props.history.push('/'));
    }

  render(){    
    // debugger
    // const display = this.props.currentUser
    return(
        <div className='banner'>
            <div className='nav-belt'>
                <div className='nav-left'>      
                    <div className='header-logo' >
                        <div id='and-so-on-logo' />
                    </div> 
                </div> 
                <div className="nav-mid">
                    <div className='nav-searchbar'>
                        <textarea className="search-bar" rows="1" cols="10">
                        </textarea>
                    {/* <SearchBarContainer /> */}
                    </div>
                </div>
                <div className="nav-right"> 
                    <div className='account-dropdown' onMouseEnter={this.openModal} onMouseLeave={this.closeModal}>
                        {!this.props.currentUser ? 
                        <Link to='/login'>
                            <button className="account-container">
                                <span className='first-navigation-line'>Please sign in</span>
                                <br></br>
                                <span className='second-navigation-line'>Account & Lists ▾</span>
                            </button>
                        </Link> : <div className="user-signed-in">Hello {this.props.currentUser.email}
                                    <br></br>
                                    <span className='second-navigation-line'>Account & Lists ▾</span>
                                </div>
                        }
                        <Modal
                        isOpen={this.state.modalIsOpen}                    
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        ariaHideApp={false}
                        > 
                        {/* <p>Welcome, {this.props.currentUser.username}</p> */}
                        
                            {!this.props.currentUser ? 
                            <div className='signin-login-dropdown'>
                            <Link to='/login'>
                                <input className='submit-button-dropdown' type="submit" value="Sign in" />
                                <br></br>
                            </Link> 
                                <span className='alt-link' id='new-customer-dropdown'>New customer? <Link to='/signup' id='start-here-link'>Start here.</Link></span>
                                </div>
                                : ""
                            }
                            
                        
                        {/* <button onClick={this.props.logout}>Log Out</button>   
                        <div>
                        <Link className="signup" to="/signup">Sign Up</Link>
                        <br/>
                        <Link className="login" to="/login">Log In</Link>
                        </div> */}   
                        {this.props.currentUser ?                        
                        <button className="sign-out" onClick={this.handleLogout}>
                            Sign Out 
                        </button> : ""
                        }
                       
                        </Modal>
                    </div>                
                </div>
            </div>                                       
        <div className='sub-banner'>
            <p>

            </p>
            {/* {this.props.currentUser ? display : ""} */}
        </div> 
        
      </div>

      
    //   </div>
    )
  }
}

export default Greeting;