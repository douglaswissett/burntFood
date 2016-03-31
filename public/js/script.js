'use strict';
console.log('react linked');



const React          = require('react');
const ReactDOM       = require('react-dom');
const browserHistory = require('react-router').browserHistory;
const Router         = require('react-router').Router;
const Route          = require('react-router').Route;
const Link           = require('react-router').Link;
const auth           = require('./auth');


const Signup = require('./components/signup.js');
const Login = require('./components/login.js');
const Dashboard = require('./components/dashboard.js');
const NotFound = require('./components/404.js');




const App = React.createClass({

  render : function() {
    return (
      <div className="ui container">
        <Login />
        {this.props.children}
      </div>
    )
  }
});




ReactDOM.render((
  <Router history={browserHistory} >
    <Route path="/" component={App} >
      <Route path="signup" component={Signup} />
      <Route path="dashboard" component={Dashboard} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('container'))