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
const SearchForm = require('./components/searchform.js');

const App = React.createClass({
  getInitialState() {
    return {
      loggedIn: auth.loggedIn(),
      query: [],
      recipes: {}
    }
  },
  setAppState : function(query, recipes) {
    this.setState({
      query: query,
      recipes: recipes
    })
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
      context: '#appContainer',
      offset: 50
    });

    $('#dashBtn').click(function() {
        $('html,body').animate({
            scrollTop: $('#dashboard').offset().top},
            'slow');
    });

    $('#hungryBtn').click(function() {
        $('html,body').animate({
            scrollTop: $('#hungry').offset().top},
            'slow');
    });

    $('#recipeBtn').click(function() {
        $('html,body').animate({
            scrollTop: $('#myRecipes').offset().top},
            'slow');
    });

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
        <div className="ui container" id="appContainer" >

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

            <nav id="navbar">
              <div className="ui menu">
                <div className="header item" style={{width: '280px'}}>
                  <div style={{margin: '0 auto'}}>Our Company</div>
                </div>
                <button className="fluid ui button header">Dash</button>
                <button className="fluid ui button header">Recipes</button>
                <button className="fluid ui button header">Profile</button>
                <button className="fluid ui button header">Logout</button>
              </div>
            </nav>



            <div className="right floated left aligned thirteen wide column">
              <div className="ui segment" style={{height: '2000px !important'}}>

                <div className="ui left rail">  
                  <div className="ui sticky">
                    
                    <SearchForm query={this.state.query} recipes={this.state.recipes} setAppState={this.setAppState} />

                    <div>
                      {
                        this.state.query.length > 0 ? (
                        <h2 className="ui header">Added ingredients</h2>
                        ) : (
                          ''
                        )
                      }
                      <ul>
                        {
                          this.state.query.map(function(el){
                            return (<li style={{listStyle: 'none', fontWeight: 'bold'}}>{el}</li>)
                          })
                        }
                      </ul>
                    </div>


                    <Link to="/logout"><button className="fluid ui button" style={{margin: '10px auto'}}>Logout</button></Link>
                  </div>
                </div>


                <Dashboard query={this.state.query} recipes={this.state.recipes} />
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      )

    } else {

      return (
        <div className="ui container">
        
        <div className="ui grid">
        <div className="ten wide column centered">
        <div className="ui segment">


        <div className="ui two column middle aligned very relaxed stackable grid">

                <div className="column">
                  <div className="ui form">
                    <div className="field">
                      <label>Username</label>
                      <div className="ui left icon input">
                        <input type="text" placeholder="Username" />
                        <i className="user icon"></i>
                      </div>
                    </div>
                    <div className="field">
                      <label>Password</label>
                      <div className="ui left icon input">
                        <input type="password" />
                        <i className="lock icon"></i>
                      </div>
                    </div>
                    <Link to="/login"><div className="ui blue submit button">Login</div></Link>
                  </div>
                </div>


                <div className="ui vertical divider">
                  Or
                </div>


                <div className="center aligned column">
                  <Link to="/signup"><div className="ui big green labeled icon button">
                    <i className="signup icon"></i>
                    Sign Up
                  </div></Link>
                </div>

                {this.props.children}
              </div>

              </div>
              </div>
              </div>

        </div>
      )
    }
  }
});


// <Link to="/"><button className="fluid ui button" style={{margin: '10px auto'}} id="dashBtn">Dash</button></Link>
//                   <button className="fluid ui button" onClick={this.handleMenu} style={{margin: '10px auto'}}>New Feed</button>
//                   <button className="fluid ui button" style={{margin: '10px auto'}} id="hungryBtn">Hungry?</button>
//                   <button className="fluid ui button" style={{margin: '10px auto'}} id="recipeBtn">My recipes</button>





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

