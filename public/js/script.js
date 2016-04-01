'use strict';
console.log('react linked');

const React          = require('react');
const ReactDOM       = require('react-dom');
const browserHistory = require('react-router').browserHistory;
const Router         = require('react-router').Router;
const Route          = require('react-router').Route;
const Link           = require('react-router').Link;
const auth           = require('./auth');
import {Button, Rail, Sticky, Dropdown, Sidebar} from 'react-semantify';


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
  contextTypes: {
    router: React.PropTypes.func.isRequired
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
    $('.ui.sticky')
      .sticky({
        context: '#example1',
        offset: 20
      })
  },
  handleMenu() {
    $('.ui.sidebar').sidebar({
      dimPage: false
    })
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('toggle')
  },
  render() {
    if(this.state.loggedIn) {

      return (
        <div className="ui container">

          <Sidebar className="ui very wide sidebar vertical menu pushable" init={true}>
            <div className="ui feed">
              <div className="event">
                <div className="label">
                  <img src="/images/avatar/small/elliot.jpg" />
                </div>
                <div className="content">
                  <div className="summary">
                    <a className="user">
                      Elliot Fu
                    </a> added you as a friend
                    <div className="date">
                      1 Hour Ago
                    </div>
                  </div>
                  <div className="meta">
                    <a className="like">
                      <i className="like icon"></i> 4 Likes
                    </a>
                  </div>
                </div>
              </div>
              <div className="event">
                <div className="label">
                  <img src="/images/avatar/small/helen.jpg" />
                </div>
                <div className="content">
                  <div className="summary">
                    <a>Helen Troy</a> added <a>2 new illustrations</a>
                    <div className="date">
                      4 days ago
                    </div>
                  </div>
                  <div className="extra images">
                    <a><img src="/images/wireframe/image.png" /></a>
                    <a><img src="/images/wireframe/image.png" /></a>
                  </div>
                  <div className="meta">
                    <a className="like">
                      <i className="like icon"></i> 1 Like
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Sidebar>


          <div className="ui grid">
            <div className="right floated left aligned thirteen wide column">
              <div className="ui segment" id="example1">

                <div className="ui left rail">  
                  <div className="ui sticky">

                    <Link to="/"><button className="fluid ui button" style={{margin: '10px auto'}}>Dash</button></Link>
                    <button className="fluid ui button" onClick={this.handleMenu} style={{margin: '10px auto'}}>New Feed</button>
                    <Link to="/"><button className="fluid ui button" style={{margin: '10px auto'}}>Hungry?</button></Link>
                    <Link to="/"><button className="fluid ui button" style={{margin: '10px auto'}}>Im Bojack</button></Link>
                    <Link to="/logout"><button className="fluid ui button" style={{margin: '10px auto'}}>Logout</button></Link>


                  </div>
                </div>

                

                <Dashboard />
                {this.props.children}

              </div>
            </div>
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
    </Route>
    <Route path="logout" component={Logout} />
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
    <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('container'))

