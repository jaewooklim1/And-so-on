import React from 'react';
import {Route} from 'react-router';
import {AuthRoute} from '../utils/route_util';
import login_form_container from './session/login_form_container';
import signup_form_container from './session/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import {Link, Switch} from 'react-router-dom';
import greeting_container from './greeting/greeting_container';
import ProductsIndexContainer from './products/products_index_container';
import ProductsContainer from './products/products_container';
import PicCarousel from './carousel/carousel';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        {/* <h1>And-so-on</h1> */}
      </Link>
      <Route exact path="/" component={greeting_container} />
    </header>
    <div className="alexa-stuff">
      <Route exact path="/">
        {/* <PicCarousel></PicCarousel> */}
        <img className="picture-ad" src="https://i.imgur.com/OjMXcyy.jpg" />
        <div className="backgroundColorBlend" />
      </Route>
      <div className="all-products">
        <Route exact path="/:productId" component={ProductsContainer} />
        <Route exact path="/" component={ProductsIndexContainer} />
      </div>
    </div>

    <div className="account-creation">
      <Switch>
        <AuthRoute exact path="/login" component={login_form_container} />
        <AuthRoute exact path="/signup" component={signup_form_container} />
      </Switch>
    </div>

    <footer className="footer">
      <div className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
        Back to top
      </div>
      <div className="sub-bottom-footer">
        <div className="get-to-know">
          Get to Know the Creator
          <li id="first">
            Jae-Wook Lim |
            <a
              className="creator-links"
              href="https://www.linkedin.com/in/jae-wook-lim-430553100/"
            >
              {' '}
              LinkedIn
            </a>{' '}
            |
            <a className="creator-links" href="https://github.com/jaewooklim1">
              {' '}
              GitHub
            </a>
          </li>
        </div>
      </div>
      <div className="bottom-footer">
        <Link to="/">
          <img
            className="and-so-on-logo"
            src="https://i.imgur.com/Cswr148.png"
          />
        </Link>
      </div>
    </footer>
  </div>
);

export default App;
