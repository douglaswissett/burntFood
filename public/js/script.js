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
const UISidebar = require('./components/sidebar.js');
const MyRecipes = require('./components/myrecipes.js');

const App = React.createClass({
  getInitialState : function() {
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
  contextTypes : function() {
    router: React.PropTypes.func.isRequired
  },
  updateAuth : function(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },
  componentWillMount : function() {
    auth.onChange = this.updateAuth
    auth.login()
  },
  componentDidMount : function() {

    $('.ui.sticky')
    .sticky({
      context: '#appContainer',
      offset: 80
    });

    $('.ui.sticky.nav')
    .sticky({
      context: '#appContainer',
      offset: 0
    });

    $('#homeBtn').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    

    $('#hungryBtn').click(function() {
      console.log('move to hungry');
        $('#mainDash').show();
        $('html,body').animate({
            scrollTop: $('#dashboard').offset().top},
            'slow');
    });

    $('#statsBtn').click(function() {
        $('#mainDash').hide();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

  },
  handleMenu : function() {
    $('.ui.sidebar').sidebar({
      dimPage: false,
    })
    .sidebar('setting', 'transition', 'scale down')
    .sidebar('toggle')
  },
  render : function() {
    if(this.state.loggedIn) {

      return (
        <div>

          <div className="ui sticky nav">
            <div className="ui three item menu">

              <div style={{border: '3px solid black', margin: '0 145px 0 -45px'}}>Company logo</div>
              <a className="item right floated" id="homeBtn">Back to top</a>
              <Link to="/"><a className="item right floated" id="hungryBtn">Hungry?</a></Link>
              <Link to="/recipes"><a className="item right floated" id="statsBtn">My Area</a></Link>
              <Link to="/logout"><a className="item right floated">Logout</a></Link>
            </div>
          </div>

          <div className="ui container" id="appContainer" >

            <div className="ui grid" id="mainDash">
              <div className="right floated left aligned thirteen wide column">
                <div className="ui segment" style={{height: '1170px !important', border: '3px solid gold'}}>

                  <div className="ui left rail" style={{border: '3px dotted green', height: '905px !important', marginTop: '100px !important'}}>  
                    <div className="ui sticky">
                      
                      <SearchForm query={this.state.query} recipes={this.state.recipes} setAppState={this.setAppState} />

                      <div className="added list">
                        {
                          this.state.query.length > 0 ? (
                          <h4 className="ui header">Added ingredients</h4>
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
                    </div>
                  </div>

                  <Dashboard query={this.state.query} recipes={this.state.recipes} />

                </div>
              </div>
            </div>

            {this.props.children}

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


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="dashboard" component={Dashboard} />
      <Route path="recipes" component={MyRecipes} />
    </Route>
    <Route path="logout" component={Logout} />
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
    <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('container'))

