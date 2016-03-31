'use strict';
console.log('react linked');

const React          = require('react');
const ReactDOM       = require('react-dom');
const browserHistory = require('react-router').browserHistory;
const Router         = require('react-router').Router;
const Route          = require('react-router').Route;
const Link           = require('react-router').Link;
const auth           = require('./auth');
import {Button} from 'react-semantify';

const Signup = require('./components/signup.js');
const Login = require('./components/login.js');
const Logout = require('./components/logout.js');
const Dashboard = require('./components/dashboard.js');
const NotFound = require('./components/404.js');


const App = React.createClass({
  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  },
  componentDidMount() {
    $('.ui.sidebar').sidebar({
        transition: 'overlay'
    });
  },
  toggleSidebar: function () {
    $('.ui.sidebar').sidebar('toggle');
  },
  render() {
    if(this.state.loggedIn) {

      return (
        <div className="ui container">

          <div className="ui inverted left vertical sidebar menu">
            <a className="item">Item 2</a>
            <a className="item">Logout</a>
          </div>

          <div className="pusher">
            <div className="ui left fixed menu">
              <a className="item" onClick={this.toggleSidebar}>
                <i className="sidebar icon"></i>
              </a>
            </div>

            <Dashboard />
            {this.props.children}
          </div>
          
        </div>
      )

    } else {

      return (
        <div className="ui container">
          <div>
            <Link to="/login"><button>Log in</button></Link>
            <Link to="/signup"><button>Signup</button></Link>      

            {this.props.children}
          </div>
        </div>
      )
    }
  }
})





ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="dashboard" component={Dashboard} />
      <Route path="logout" component={Logout} />
    </Route>
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
    <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('container'))

